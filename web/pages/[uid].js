import React from 'react'
import {groq} from 'next-sanity'
import Link from 'next/link'

import {usePreviewSubscription} from '../lib/sanity'
import {getClient} from '../lib/sanity.server'
import BlockContent from '@sanity/block-content-to-react'

function blocksToText(blocks) {
  return blocks
    .map(block => block.children.map(child => child.text).join(''))
}

/**
 * Helper function to return the correct version of the document
 * If we're in "preview mode" and have multiple documents, return the draft
 */
function filterDataToSingleItem(data, preview) {
  if (!Array.isArray(data)) {
    return data
  }

  if (data.length === 1) {
    return data[0]
  }

  if (preview) {
    return data.find((item) => item._id.startsWith(`drafts.`)) || data[0]
  }

  return data[0]
}

/**
 * Makes Next.js aware of all the uids it can expect at this route
 *
 * See how we've mapped over our found uids to add a `/` character?
 * Idea: Add these in Sanity and enforce them with validation rules :)
 * https://www.simeongriggs.dev/nextjs-sanity-uid-patterns
 */
export async function getStaticPaths() {
  const allSlugsQuery = groq`*[defined(uid.current)][].uid.current`
  const pages = await getClient().fetch(allSlugsQuery)

  return {
    paths: pages.map((uid) => `/${uid}`),
    fallback: "blocking",
  }
}

/**
 * Fetch the data from Sanity based on the current uid
 *
 * Important: You _could_ query for just one document, like this:
 * *[uid.current == $uid][0]
 * But that won't return a draft document!
 * And you get a better editing experience
 * fetching draft/preview content server-side
 *
 * Also: Ignore the `preview = false` param!
 * It's set by Next.js "Preview Mode"
 * It does not need to be set or changed here
 */
export async function getStaticProps({params, preview = false}) {
  console.log(params)
  const query = groq`*[_type == "page" && uid.current == $uid]{
  _id, title, body
  }`
  const queryParams = {uid: params.uid}
  const data = await getClient(preview).fetch(query, queryParams)

  // Escape hatch, if our query failed to return data
  if (!data) return {notFound: true}

  // Helper function to reduce all returned documents down to just one
  const page = filterDataToSingleItem(data, preview)

  return {
    props: {
      // Pass down the "preview mode" boolean to the client-side
      preview,
      // Pass down the initial content, and our query
      data: {page, query, queryParams}
    }
  }
}

/**
 * The `usePreviewSubscription` takes care of updating
 * the preview content on the client-side
 */
export default function Page({data, preview}) {
  const {data: previewData} = usePreviewSubscription(data?.query, {
    params: data?.queryParams ?? {},
    // The hook will return this on first render
    // This is why it's important to fetch *draft* content server-side!
    initialData: data?.page,
    // The passed-down preview context determines whether this function does anything
    enabled: preview,
  })

  // Client-side uses the same query, so we may need to filter it down again
  const page = filterDataToSingleItem(previewData, preview)

  // Notice the optional?.chaining conditionals wrapping every piece of content?
  // This is extremely important as you can't ever rely on a single field
  // of data existing when Editors are creating new documents.
  // It'll be completely blank when they start!
  return (
    <div style={{maxWidth: `20rem`, padding: `1rem`}}>
      {preview && <Link href="/api/exit-preview">Preview Mode Activated!</Link>}
      {page?.title && <h1>{page.title}</h1>}
      <BlockContent blocks={page?.body} />
    </div>
  )
}

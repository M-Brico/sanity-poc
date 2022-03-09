import { isValidRequest } from '@sanity/webhook'

const previewSecret='sk0XLbAz0MP6TVjACuu0HFOnNotHio0YFgVt1gq1jRCBfTRJji1bIBJ5j0oQURvSpwMbzeyDmG77FX6BPomLv6RJ6skMtkhTal2kUqJ2dK8bhjIFVqboGAOQULHa6qexwHFpSDVaaSI2neGKGMmia0oCPyA6jIoAzklNq2dBrseOXTpR3KJu'

export default async function handler(req, res) {
  // Check for secret to confirm this is a valid request
  // if (req.query.secret !== previewSecret) {
  //   return res.status(401).json({ message: 'Invalid token' })
  // }

  try {
    await res.unstable_revalidate('/our-research')
    return res.json({ revalidated: true })
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send('Error revalidating')
  }
}

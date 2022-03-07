// Sanity imports
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Documents
import Page from './documents/page';
import Event from './documents/event'
import Section from './documents/section'
import Homepage from './documents/homepage'

// Components
import hero from './components/hero'
import imageSection from './components/imageSection'
import body from './components/richText'
import figure from './components/figure'
import cta from './components/cta'
import simplePortableText from './components/simplePortableText'
import link from './components/link'
import internalLink from './components/internalLink'

// Site Settings
import siteSettings from './siteSettings'
import colours from './colours'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    Homepage,
    Page,
    Event,
    Section,
    hero,
    imageSection,
    figure,
    body,
    cta,
    link,
    internalLink,
    siteSettings,
    colours
  ]),
})

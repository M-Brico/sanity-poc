// Page document type.

// Components
import Body from "../components/richText";

export default {
  title: "Page",
  name: "page",
  type: "document",
  fields: [
    {
      title: 'Section',
      name: 'section',
      type: 'reference',
      to: [
        {type: 'section'}
      ]
    },
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    Body,
    {
      title: 'Meta Description',
      name: 'meta_description',
      type: 'text',
      description: 'Describe the page for SEO.'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that categorises this page.',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      title: "UID",
      description: 'Forms the last part of a URL. Generate from the title of the page. ',
      name: "uid",
      type: "slug",
      options: {source: 'title'}
    }
  ]
}

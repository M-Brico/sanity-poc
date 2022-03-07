export default {
    name: 'homepage',
    type: 'document',
    title: 'Homepage',
    __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
    fieldsets: [
      {
        title: 'SEO & metadata',
        name: 'metadata'
      }
    ],
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'content',
        type: 'array',
        title: 'Page elements',
        of: [
          {type: 'hero'},
          {type: 'imageSection'},
        ]
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
        description: 'This description populates meta-tags on the webpage',
        fieldset: 'metadata'
      }
    ]
  }
  
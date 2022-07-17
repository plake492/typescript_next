export default {
  name: 'abstractImages',
  title: 'Abstract Images',
  type: 'document',
  fields: [
    {
      name: 'picture',
      title: 'Picture',
      type: 'image'
    },
    // {
    //   name: 'accessablityDescription',
    //   title: 'Accessablity Description',
    //   type: 'string'
    // },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tags' } }]
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number'
    }
  ]
}

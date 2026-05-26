import {defineField, defineType} from 'sanity'

export const heroType = defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',

  fields: [
    defineField({
      name: 'smallText',
      title: 'Small Text',
      type: 'string',
    }),

    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),

    defineField({
      name: 'buttonOne',
      title: 'Button One',
      type: 'string',
    }),

    defineField({
      name: 'buttonTwo',
      title: 'Button Two',
      type: 'string',
    }),

    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
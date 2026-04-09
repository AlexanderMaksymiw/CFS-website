import { defineType, defineField } from "sanity";

export default defineType({
  name: "roadTrip",
  title: "Road Trip",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "intro",
      title: "Intro",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "stops",
      title: "Stops",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Stop Name",
              type: "string",
            },
            {
              name: "type",
              title: "Type",
              type: "string",
            },
            {
              name: "icon",
              title: "Icon",
              type: "string",
            },
            {
              name: "notes",
              title: "Notes",
              type: "text",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "time",
      title: "Estimated Time",
      type: "string",
    }),
    defineField({
      name: "miles",
      title: "Miles",
      type: "number",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "images",
      title: "Gallery Images",
      type: "array",
      of: [defineField({ type: "image", options: { hotspot: true } })],
    }),
    defineField({
      name: "googleMapsEmbed",
      title: "Google Maps Embed URL",
      type: "url",
      description: "Paste the embed link from Google Maps route.",
    }),
    defineField({
      name: "qrCode",
      title: "QR Code",
      type: "image",
      description: "Optional: QR code linking to the route.",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tripDate",
      title: "Date of Trip",
      type: "datetime",
      description: "The day the road trip took place",
      validation: (Rule) => Rule.required(),
    }),
  ],
});

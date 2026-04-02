import { defineType, defineField } from "sanity";

export default defineType({
  name: "crew",
  title: "Crew",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "text",
    }),
    defineField({
      name: "car",
      title: "Car",
      type: "text",
    }),
    defineField({
      name: "carImage",
      title: "Car Image",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
    }),
  ],
});

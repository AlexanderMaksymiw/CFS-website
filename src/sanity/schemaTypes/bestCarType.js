import { defineType, defineField } from "sanity";

export default {
  name: "weeklyWinners",
  title: "Weekly Winners",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Winner Name / Car Model",
      type: "string",
      description: "e.g., John Doe - Porsche Boxster 981",
    },
    {
      name: "date",
      title: "Show Date",
      type: "date",
      initialValue: () => new Date().toISOString().split("T")[0],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "position",
      title: "Placement",
      type: "string",
      options: {
        list: [
          { title: "1st Place", value: "1st" },
          { title: "2nd Place", value: "2nd" },
          { title: "3rd Place", value: "3rd" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "thumbnails",
      title: "Thumbnails / Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
    },
    {
      name: "order",
      type: "number",
      initialValue: 0,
      description: "Lower numbers appear first within the same date",
    },
  ],

  preview: {
    select: {
      title: "title",
      date: "date",
      position: "position",
      media: "thumbnails.0",
    },
    prepare(selection) {
      const { title, date, position, media } = selection;
      return {
        title: title,
        subtitle: `${position} — ${date}`, // Shows "1st Place — 2026-04-10"
        media: media,
      };
    },
  },
};

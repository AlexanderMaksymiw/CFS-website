export default {
  name: "featuredContent",
  title: "Featured Content",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "mediaType",
      type: "string",
      options: {
        list: [
          { title: "Image", value: "image" },
          { title: "Video Upload", value: "video" },
          { title: "Social Embed", value: "embed" },
        ],
      },
    },

    {
      name: "thumbnails",
      title: "Thumbnails / Images",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "videoFile",
      type: "file",
      options: {
        accept: "video/*",
      },
    },
    {
      name: "embedUrl",
      type: "url",
    },
    {
      name: "platform",
      type: "string",
      options: {
        list: ["instagram", "facebook"],
      },
    },
    {
      name: "featured",
      type: "boolean",
      initialValue: true,
    },
    {
      name: "order",
      type: "number",
    },
  ],
};

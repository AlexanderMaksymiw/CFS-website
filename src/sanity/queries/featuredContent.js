export const FEATURED_QUERY = `
*[_type == "featuredContent" && featured == true]
| order(order asc) {
  _id,
  title,
  mediaType,
  embedUrl,
  platform,
  previewImage {
  asset->{
    url
  }
},
  thumbnails[] {
    asset->{
      url,
      metadata {
        dimensions
      }
    }
  },
  videoFile {
    asset->{
      url
    }
  }
}
`;

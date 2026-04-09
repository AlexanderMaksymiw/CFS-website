export const MERCH_QUERY = `
  *[_type == "merchandise"]{
    _id,
    title,
    price,
    images[]{
      asset->{
        url
      }
    }
  }
`;

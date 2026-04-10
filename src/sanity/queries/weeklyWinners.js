export const WEEKLY_WINNERS_QUERY = `
  *[_type == "weeklyWinners"] | order(date desc, order asc) {
    _id,
    title,
    date,
    position,
    "thumbnails": thumbnails[]{
      asset->{
        _id,
        url
      },
      hotspot
    }
  }
`;

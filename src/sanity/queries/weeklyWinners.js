export const WEEKLY_WINNERS_QUERY = `
  *[_type == "weeklyWinners"] | order(date desc, position asc)[0...3] {
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

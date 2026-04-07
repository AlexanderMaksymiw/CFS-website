export const LATEST_ROADTRIP_QUERY = `
*[_type == "roadTrip"] | order(_createdAt desc)[0]{
  title,
  slug,
  heroImage,
  intro
}
`;

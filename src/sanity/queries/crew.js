export const CREW_QUERY = `
*[_type == "crew"] | order(order asc) {
  _id,
  name,
  role,
  car,
  bio,
  order,
  "carImage": carImage.asset->url
}
`;

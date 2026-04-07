export const CREW_QUERY = `
*[_type == "crew"] {
  _id,
  name,
  role,
  car,
  bio,
  "carImage": carImage.asset->url


}
`;

// 1. FOR THE GRID PAGE (Add this one!)
// This fetches ALL trips so you can list them.
export const ROADTRIPS_QUERY = `*[_type == "roadTrip"] | order(tripDate desc) {
  _id,
  title,
  "slug": slug.current,
  intro,
  heroImage{
    asset->{ url }
  }
}`;

// 2. FOR THE INDIVIDUAL PAGE (Keep this one!)
// This fetches ONE specific trip based on the URL slug.
export const ROADTRIP_QUERY = `*[_type == "roadTrip" && slug.current == $slug][0]{
  _id,
  title,
  tripDate,
  intro,
  description,
  miles,
  time,
  stops,
  heroImage{ asset->{url} },
  images[]{
    _key,
    asset->{
      _id,
      url
    }
  },
  googleMapsEmbed,
  qrCode{ asset->{url} }
}`;

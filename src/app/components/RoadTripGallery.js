import RoadTripGalleryContainer from "./RoadTripGalleryContainer";

export default function RoadTripGallery({ roadTrips }) {
  if (!roadTrips || roadTrips.length === 0) return null;

  return <RoadTripGalleryContainer roadTrips={roadTrips} />;
}

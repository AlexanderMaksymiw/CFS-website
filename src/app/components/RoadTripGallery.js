import RoadTripGalleryContainer from "./RoadTripGalleryContainer";

export default function RoadTripGallery({ roadTrips }) {
  if (!roadTrips || roadTrips.length === 0) return null;

  // Pass the images array to the container
  return <RoadTripGalleryContainer roadTrips={roadTrips} />;
}

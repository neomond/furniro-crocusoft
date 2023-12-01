import BrowseTheRangeComponent from "../components/home/BrowseTheRangeComponent";
import GalleryComponent from "../components/home/GalleryComponent";
import HeroComponent from "../components/home/HeroComponent";
import OurProducts from "../components/home/OurProducts";
import RoomInspirationComponent from "../components/home/RoomInspirationComponent";

function HomePage() {
  return (
    <>
      <HeroComponent />
      <BrowseTheRangeComponent />
      <OurProducts />
      <RoomInspirationComponent />
      <GalleryComponent />
    </>
  );
}

export default HomePage;

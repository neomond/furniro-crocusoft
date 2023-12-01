import AnimatedPage from "../animations/AnimatedPage";
import GetInTouchComponent from "../components/contact/GetInTouchComponent";
import FeaturesBarComponent from "../components/reusable/FeaturesBarComponent";
import SubheadComponent from "../components/reusable/SubheadComponent";

function ContactPage() {
  return (
    <AnimatedPage>
      <SubheadComponent mainLabel={"Contact"} />
      <GetInTouchComponent />
      <FeaturesBarComponent />
    </AnimatedPage>
  );
}

export default ContactPage;

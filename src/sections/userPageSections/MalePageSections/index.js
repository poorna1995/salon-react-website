import React from "react";
import Footer from "../components/Footer";
import AddressSection from "./AddressSection";
import BookAppointmentBar from "./components/BookAppointmentBar";
import GallerySection from "./GallerySection";
import LandingPageBanner from "./LandingPageBanner";
import OurServicesSection from "./OurServicesSection";
import ReviewsSection from "./ReviewsSection";

const MalePageSections = () => {
  return (
    <div>
      <LandingPageBanner />
      <OurServicesSection />
      <GallerySection />
      <ReviewsSection />
      {/* <AddressSection /> */}
      <BookAppointmentBar />
      <Footer />
    </div>
  );
};

export default MalePageSections;

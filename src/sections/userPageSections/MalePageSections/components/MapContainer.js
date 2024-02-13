import React from "react";
import GoogleMapReact from "google-map-react";
import "./Map.css";

const MapContainer = () => {
  return (
    // <div>
    //   <iframe
    //     title="My Location Map"
    //     style={{ width: "100%", height: "400px" }}
    //     src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAwRy7dHaz2UT2kzn5BvO6T_aK6a95Zj8Q&q=D+Car+Serve,Subhash+Road,Rohtak+Haryana"
    //     allowFullScreen
    //   ></iframe>

    //     <iframe
    //   width="600"
    //   height="450"
    //   style="border:0"
    //   loading="lazy"
    //   allowfullscreen
    //   referrerpolicy="no-referrer-when-downgrade"
    //   src="https://www.google.com/maps/embed/v1/place?key=API_KEY
    //     &q=Space+Needle,Seattle+WA">
    // </iframe>
    // </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15386.784786736747!2d73.81934522528508!3d15.392931066878791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc7922e9bc623%3A0x9132732bdc2c3d8e!2sNew%20Vaddem%2C%20Goa%20403802!5e0!3m2!1sen!2sin!4v1651659664136!5m2!1sen!2sin"
      width="100%"
      height="600px"
      style={{ border: "0" }}
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default MapContainer;

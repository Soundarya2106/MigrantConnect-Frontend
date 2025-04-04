import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import styles from "../HomePageDesignFiles/Location.module.css";

const Location = () => {
  const [position, setPosition] = useState(null);
  const [address, setAddress] = useState("Fetching address...");

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const { latitude, longitude } = pos.coords;
          setPosition([latitude, longitude]);

          try {
            const response = await axios.get(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            setAddress(response.data.display_name || "Address not found");
          } catch (error) {
            setAddress("Failed to fetch address");
          }
        },
        () => setAddress("Location access denied"),
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    } else {
      setAddress("Geolocation not supported by your browser.");
    }
  }, []);

  return (
    <div className={styles.Lcontainer}>
      <h2 className={styles.Lheading}>Your Location</h2>
      <p className={styles.Lsubheading}>Here is your current location on the map:</p>

      <div className={styles.locationBox}>
        {/* Left Side - Map */}
        <div className={styles.mapContainer}>
          {position ? (
            <MapContainer center={position} zoom={15} className={styles.map}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={position}>
                <Popup>You are here!</Popup>
              </Marker>
            </MapContainer>
          ) : (
            <p>Loading map...</p>
          )}
        </div>

        {/* Right Side - Address */}
        <div className={styles.addressBox}>
          <h3 className={styles.Lheading}>📍 Address</h3>
          <p className={styles.Lpara}>{address}</p>
        </div>
      </div>
    </div>
  );
};

export default Location;

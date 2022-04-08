import React, { useEffect, useState } from "react";
import Header from "./Header";

const PhotoContainer = () => {
  const [nasaData, setNasaData] = useState({});

  const [testData, setTestData] = useState("My Test Data");


  const apiStr = "https://api.nasa.gov/planetary/apod?api_key=GLZkEXCGdfarRXG4poyWNAnXnC7fCZDdH46BixOf";

  // Example of api URL:
  // "https://api.nasa.gov/planetary/apod?api_key=API_KEY_HERE";
  // "https://api.nasa.gov/planetary/apod?api_key=GLZkEXCGdfarRXG4poyWNAnXnC7fCZDdH46BixOf";

  // Example with date query:
  // "https://api.nasa.gov/planetary/apod?date=2022-03-14&api_key=API_KEY_HERE"

  useEffect(() => {
    async function getData(url) {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setNasaData(data);
    }
    getData(apiStr);
  }, []);

  useEffect(()=>{
    console.log('test the useEffect Hook!');

  }, [])


  return (
    <div className="img-card">
      <Header />
      <div className="img-container">
        <h1 className="img-title">{nasaData.title || "Photo Title"}</h1>
        <img
          src={nasaData.url || "./assets/apod.jpg"}
          alt="nasa-APOD"
          className="nasa-img"
        />

        <p>{nasaData.explanation || "Photo Summary"}</p>
      </div>
    </div>
  );
};

export default PhotoContainer;

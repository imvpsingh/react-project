import React, { useState, useEffect } from "react";
import "./Weather.css";
import { toast } from "react-toastify";

export default function Weather() {
  let [city, setCity] = useState("");
  let [data, setData] = useState(null);
  let [isLoading, setIsloading] = useState(false);
  let getDataByCity = () => {
    if (!city) {
      setIsloading(false);
      toast.error("Please enter a city");
      return;
    }

    fetch(
      `http://api.weatherapi.com/v1/current.json?key=6a875964a1ba45d78ef134200242608&q=${city}`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          toast.error("Something went wrong...");
          return null;
        }
      })
      .then((finalRes) => {
        if (finalRes) {
          setIsloading(false);
          setData(finalRes);
        }
      })
      .catch((error) => {
        toast.error("Failed to fetch data");
        console.error(error);
      });

    setCity("");
  };

  let getDataByLocation = (latitude, longitude) => {
    setIsloading(true);
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=6a875964a1ba45d78ef134200242608&q=${latitude},${longitude}`
      // `http://api.weatherapi.com/v1/current.json?key=d2b619f55933e5c19a7e5ab24c67d2de&q=${latitude},${longitude}`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          toast.error("Something went wrong...");
          return null;
        }
      })
      .then((finalRes) => {
        if (finalRes) {
          setIsloading(false);
          setData(finalRes);
        }
      })
      .catch((error) => {
        toast.error("Failed to fetch data");
        console.error(error);
      });
  };

  useEffect(() => {
    setIsloading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setIsloading(true);
          const { latitude, longitude } = position.coords;
          getDataByLocation(latitude, longitude);
        },
        (error) => {
          toast.error("Unable to retrieve your location");
          console.error(error);
        }
      );
    } else {
      toast.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div className="wContainer">
      <div>
        <h1 className="h">Live Weather</h1>
      </div>
      <div className="wSearch">
        <input
          placeholder="Enter Your City Name"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        <button onClick={getDataByCity}>Search</button>
      </div>
      <div className="wResult">
        {data ? (
          <>
            {isLoading ? (
              <>
                <img
                  className={`loading ${isLoading ? "" : "hide"}`}
                  src="https://www.wpfaster.org/wp-content/uploads/2013/06/loading-gif.gif"
                  alt="loading"
                  width={60}
                />
              </>
            ) : (
              <>
                <p>
                  {data.location.name} <span>{data.location.country}</span>
                </p>
                <p>Temp: {data.current.temp_c}°C</p>
                <p>{data.current.condition.text}</p>
                <img
                  src={`https:${data.current.condition.icon}`}
                  width={"80px"}
                  alt="weather icon"
                />
              </>
            )}
          </>
        ) : (
          <>
            {isLoading ? (
              <>
                <img
                  className={`loading ${isLoading ? "" : "hide"}`}
                  src="https://www.wpfaster.org/wp-content/uploads/2013/06/loading-gif.gif"
                  alt="loading"
                  width={60}
                />
              </>
            ) : (
              <>
                <p>No data available</p>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

import { Container, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
// import { AnyRecord } from "dns";
import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";

const Details = () => {
  let API_KEY = "ac3ce49c3a59e8a93a80d44948c1d528";
  const { state }: any = useLocation();
  const [country, setCountry] = useState<any>("");
  const [weatherData, setWeatherData] = useState<any>("");
  const data = state?.data;
  console.log(data);

  const weatherDetail = async (capital: any) => {
    setCountry(capital);
    const resp = await axios.get(
      `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${capital}`
    );
    setWeatherData(resp.data);
    console.log(resp.data);
  };

  function renderWeatherDetails() {
    return (
      <div>
        <Typography >Weather Information</Typography>
        <div>
          <div>
            <img src={weatherData?.current?.weather_icons[0]} alt="" />
          </div>
          <div className="weather-info">
            Temperature
            <div className="weather-data">
              {weatherData?.current?.temperature}
            </div>
          </div>

          <div className="weather-info">
            Wind Speed
            <div className="weather-data">
              {weatherData?.current?.wind_speed}
            </div>
          </div>
          <div className="weather-info">
            Precip
            <div className="weather-data">{weatherData?.current?.precip}</div>
          </div>
        </div>
        <div>
          <Link style={{ textDecoration: "none",}} id="goback" to="/">
            <Button data-testid="backBtn" sx={{backgroundColor:"lightblue"}} >Back </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
         <Container sx={{ minWidth: 300 }}>
        <Box
         style={{
          backgroundColor: "#e2e4e9", 
          display: "flex",
          flexDirection: "column",
          // alignItems: "center",
          // marginTop: "55px",
          marginLeft: "auto",
          marginRight: "auto",
          // marginRight: "100px",
          height: "550px",
          width:"600px",
          border: "2px solid #a1b4be",
        }}
        >
          <Typography variant="h4" data-testid ='Country_Typo'>Country Details</Typography>
          {data?.map((item: any) => {
            return (
              <div>
                <img
                  src={item?.flags.png}
                  alt={item?.flag}
                  height="140"
                  width="200"
                />
                <div data-testid ='CapiTal' >
                  <strong>Capital :-</strong>
                  {item?.capital}
                </div>
                <div>
                  <strong>Population :-</strong>
                  {item?.population}
                </div>
                <div>
                  <strong> Latlng :-</strong>
                  {item?.capitalInfo.latlng[0]}, {item?.capitalInfo.latlng[1]}
                </div>

                <Button variant="outlined"
                  id="Weather"
                  // title="Weather"
                  data-testid="Weather"
                  onClick={() => weatherDetail(item?.capital)}
                >
                  Capital Weather
                </Button>
                {String(weatherData?.location?.name) ===
                  String(item?.capital) && weatherData
                  ? renderWeatherDetails()
                  : null}
              </div>
            );
          })}
        </Box>
        {/* <button onClick={weatherDetail}>call api</button> */}
      </Container>
    </div>
  );
};
export default Details;

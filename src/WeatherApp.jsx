// import SerachBox from "./SearchBox";
// import InfoBox from "./InfoBox";
// import { useState } from "react";
// export default function WeatherApp(){
//     const [weatherInfo,setWeatherInfo] = useState({
//     city: "Delhi",
//     feelsLike: 23.03,
//     humidity: 47,
//     temp: 23.41,
//     temp_Max: 23.41,
//     temp_Min: 23.41,
//     weather: "overcast clouds"
//     });

//     let updateInfo =(newInfo) =>{
//         setWeatherInfo(newInfo);
//     }
//     return(
//         <div style={{textAlign :"center"}}> 
//             <h2>Weather App Data</h2>
//             <SerachBox updateInfo={updateInfo} />   
//             <InfoBox info={weatherInfo}/>
//         </div>
//     );
// }

import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import { Box, Typography } from "@mui/material";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 23.03,
    humidity: 47,
    temp: 23.41,
    temp_Max: 23.41,
    temp_Min: 23.41,
    weather: "overcast clouds"
  });

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        minHeight: "100vh",
        background: "#e3f2fd",
        padding: "2rem"
      }}
    >
      <Typography variant="h4" gutterBottom>
        Weather App Data
      </Typography>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </Box>
  );
}

import "./SearchBox.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";

export default function SerachBox({updateInfo}){
    let[city , setCity]=useState("");

    let[error,setError] = useState(false);
    
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "2d9613df68a87842f26fe7183b7a78d4";
  
    
    let getWeatherInfo = async () =>{
        try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        
        if (!response.ok) {
            throw new Error("City not found");
        }

        let jsonResponse = await response.json();
        // console.log(jsonResponse);
        let result ={
            city :city,
            temp: jsonResponse.main.temp,
            temp_Min: jsonResponse.main.temp_min,
            temp_Max: jsonResponse.main.temp_max,
            humidity : jsonResponse.main.humidity  ,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description     
        };
        console.log(result);
        return result;
    }
 catch(err){
    throw err;
} 
}
    let handleChange=(event) => {
        setCity(event.target.value);
    };
    
    
    let handleSubmit = async (event) =>{
        try{
        event.preventDefault();
        console.log(city)
        setCity("");
        let newInfo = await getWeatherInfo();
       updateInfo(newInfo);
       setError(false); // reset error if success
    }
 catch(err){
    console.error(err);
    setError(true);
}
}

    return(
        <div className="SearchBox">
         
           <form onSubmit={handleSubmit}> 
           <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
           <br></br>
           <Button variant="contained" type="Submit" >Search</Button>
           {error && <p style={{ color: "red" }}>No such place exists.</p>}
           </form>
        </div>
    );
}
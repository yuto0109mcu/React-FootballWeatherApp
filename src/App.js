import React,{useState, useEffect} from 'react';
import CityData from "./components/CityData"
import WeatherData from "./components/WeatherData"
import Buttons from "./components/Buttons"
import './App.css';
import ResetCSSandLib from "./components/resetCSSandLib"
import styled from "styled-components"
import media from "styled-media-query";
import bgimg from "./img/aa.jpg"


// -273.15


const App = () => {
   
   const [weatherData, setWeatherData] = useState({ weather: [{}], main: {}, wind: {}, name: "" })
   const [city, setCity] = useState("London")
   const [index, setIndex] = useState(0)
   const [showing, setShowing] = useState(true)


   const locations = [
      {  
         id: 0,
         city: "London",
         teams: [
            "Arsenal",
            "Chelsea",
            "Crystal Palace",
            "Spurs",
            "West Ham"
         ],
         stadiums: [
            "Emirates Stadium",
            "Stanford Bridge",
            "Selhurst Park",
            "Tottenham Hotspur Stadium",
            "London Stadium"
         ]
      },
      {
         id: 1,
         city: "Birmingham",
         teams: [
            "Aston Villa"
         ],
         stadiums: [
            "Villa Park"
         ]
      },
      {
         id: 2,
         city: "Bournemouth",
         teams: [
            "AFC Bournemouth"
         ],
         stadiums: [
            "Vitality Stadium"
         ]
      },
      {
         id: 3,
         city: "Brighton",
         teams: [
            "Brighton and Hove Albion"
         ],
         stadiums: [
            "Amex Stadium"
         ]
      },
      {
         id: 4,
         city: "Burnley",
         teams: [
            "Burnley"
         ],
         stadiums: [
            "Turf Moor"
         ]
      },
      {
         id: 5,
         city: "Liverpool",
         teams: [
            "Everton",
            "Liverpool"
         ],
         stadiums: [
            "Goodison Park",
            "Anfield"
         ]
      },
      {
         id: 6,
         city: "Leicester",
         teams: [
            "Leicester City"
         ],
         stadiums: [
            "King Power Stadium"
         ]
      },
      {
         id: 7,
         city: "Manchester",
         teams: [
            "Manchester City",
            "Manchester United"
         ],
         stadiums: [
            "Etihad Stadium",
            "Old Trafford"
         ]
      },
      {
         id: 8,
         city: "Newcastle upon Tyne",
         teams: [
            "Newcastle United"
         ],
         stadiums: [
            "St. James' Park"
         ]
      },
      {
         id: 9,
         city: "Norwich",
         teams: [
            "Norwich city"
         ],
         stadiums: [
            "Carrow Road"
         ]
      },
      {
         id: 10,
         city: "Sheffield",
         teams: [
            "Sheffield United"
         ],
         stadiums: [
            "Bramall Lane"
         ]
      },
      {
         id: 11,
         city: "Southampton",
         teams: [
            "Southampton"
         ],
         stadiums: [
            "St. Mary's Stadium"
         ]
      },
      {
         id: 12,
         city: "Watford",
         teams: [
            "Watford"
         ],
         stadiums: [
            "Vicarage Road"
         ]
      },
      {
         id: 13,
         city: "Wolverhampton",
         teams: [
            "Wolves"
         ],
         stadiums: [
            "Molineux Stadium"
         ]
      }
   ]

   
   const showWeather = (id) => {
      setCity(locations[id].city)
      setIndex(locations[id].id)
      setShowing(true)
   }
   const closeWeather = () => {
      setShowing(false)
   }
   
   useEffect (() => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},uk&appid=ae5d4eb76b5f63d47932a3b2ea6fb8dd`)
      .then(response => response.json())
      .then(function(response) {
         setWeatherData(response)
         // console.log(response);
      })
   }, [city])
   

   return (
      <>
         <ResetCSSandLib />
         <Bg>
               <h1>Football Weather</h1>
               <Buttons 
                  locations={locations} 
                  showWeather={showWeather} 
                  showing={showing}
               />
               <CityData 
                  locations={locations} 
                  index={index} 
                  showing={showing} 
                  closeWeather={closeWeather}
               />
               <WeatherData 
                  weatherData={weatherData} 
                  showing={showing} 
               />
         </Bg>
      </>
   )
}

const Bg = styled.div`
   width: 100%;
   height: 100vh;
   background-image: url(${bgimg});
   background-size: cover;
   position: relative;
   overflow: hidden;
   ${media.lessThan("1100px")`

   `}
   ${media.lessThan("600px")`

   `}
   &:after {
      content: "";
      display: block;
      position: absolute;
      background-color: rgba(0, 60, 100, 0.5);
      width: 100%;
      height: 100vh;
   }
   h1 {
      display: block;
      width: 310px;
      position: absolute;
      top: 50%;
      left: -120px;
      font-size: 2.1rem;
      font-weight: bold;
      transform: rotate(90deg) translateX(-5%);
      font-family: sans-serif;
      color: rgba(0,0,0,0.3);
   }
`


export default App
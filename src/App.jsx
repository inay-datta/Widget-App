import React, {useState} from 'react'
import './App.css'
import WeatherComponent from "./Components/WeatherComponent";
import NewsHeadlinesComponent from "./Components/NewsHeadlinesComponent";

function App() {

const [selectedWidget, setSelectedWidget] = useState("weather");


function onButtonClick(selectedWidgetType){
  setSelectedWidget(selectedWidgetType);
}
  

  return (
   <div className='app'>
   <div className='navBar'>
      <button type='button'
      className={selectedWidget === "weather" ? "selected" : ""}
      onClick={() => onButtonClick("weather")} >Weather widget</button>
      <button type='button'
        className={selectedWidget === "news" ? "selected" : ""}
        onClick={() => onButtonClick("news")}>News widget</button>
   </div>
   {selectedWidget === "weather" ? <WeatherComponent setSelectedWidget={setSelectedWidget}/> :  <NewsHeadlinesComponent setSelectedWidget={setSelectedWidget}/>}
   </div>
  )
}

export default App;

import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [glob, setGlob] = useState("");

  const getDetails = () => {
    axios
      .get("https://www.hpb.health.gov.lk/api/get-current-statistical")
      .then((response) => {
        console.log(response);
      });
  };

  // view in webpage

  const getDetailsMore = () => {
    axios
      .get("https://www.hpb.health.gov.lk/api/get-current-statistical")
      .then((response) => {
        setGlob(" අද දින ලාංකික තතු.. " + " ගෝලිය = " + response.data.data.global_new_cases  + " ලාංකික අලුත් = " + response.data.data.local_new_cases + " ලාංකික සියලු =" +response.data.data.local_total_cases +  " ලාංකික මරණ =" +response.data.data.local_deaths + " නවතම මරණ =  " + response.data.data.local_new_deaths + " 🛌  " + " හොදවු සංඛයාව =" +response.data.data.local_recovered);
      });
  };


  // sl Count 
 
  return (
    <div className="app">
      <h1>COVID-19 Detials in Sri Lanka</h1>
      <button onClick={getDetails}>ALL Details On Your Console</button>
      <hr />

      <br />
      <button onClick={getDetailsMore}>ලාංකික කොරෝනා තතු සදහා ...</button>
      <h2>{glob}</h2>

      <br/>
      {/* <button onClick={getDetailsSl}>Sri lanka Corona Details</button>
      <h2>{sl}</h2> */}
    </div>
  );
}

export default App;

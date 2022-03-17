import { useEffect, useState } from "react";
import axios from "axios";

function HomePage() {
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const handleSubmit = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c8e91de74c5d1e154aa65f4badbd3d67&units=metric`;

      const res = await axios.get(url);
      const data = await res.data;
      setData(data);
      console.log(data);
      setError(null);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    const redirect = () => window.location.replace("/404");

    if (error) redirect();
  }, [error]);

  return (
    <div className="App">
      <h1>Weather App</h1>

      <p>Type in your location</p>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={handleSubmit}>Check</button>

      {data ? (
        <div>
          <p>Current Temperature is {data.main.temp} &#176;C</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default HomePage;

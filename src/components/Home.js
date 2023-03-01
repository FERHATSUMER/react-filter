import "./home.css";
import Data from "./Data.json";
import { useState } from "react";

function Home() {
  const [search, setSearch] = useState("");

  return (
    <div className="concainer">
      <h1> Kurtlar Vadisi Konsey Üyeleri</h1>
      <div className="inputContainer">
        <input
          className="search"
          type="text"
          placeholder="Konsey Üyesi Giriniz..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="dataContainer">
    {
        Data.
    }
      </div>
    </div>
  );
}

export default Home;

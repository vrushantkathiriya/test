import { useState, useEffect } from "react";
import "./App.css";
import axios from "./API";  
import { all } from "axios";

const App = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

 
  const getMyPostData = async () => {
    try {
      const res = await axios.get("/posts");
  
      console.log(res.data);
    } catch (error) {
   
      console.log(error.message);
    }
  };

 
  useEffect(() => {
    getMyPostData();
  }, []);

  return (
    <>
     <h1>blog</h1>
      {isError !== "" && <h2>{isError}</h2>}

      <div className="grid">
        {myData.slice(all).map((post) => {
          const { body, id, title } = post;
          return (
            <div key={id} className="card">
              <h2>{title.slice(0, 15).toUpperCase()}</h2>
              <p>{body.slice(0, 100)}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
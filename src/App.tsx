import { useState, useEffect } from "react";
import "./App.css";

interface AdviceSlip {
  slip: {
    id: number;
    advice: string;
  };
}

const App = () => {
  const [advice, setAdvice] = useState<string>("");

  useEffect(() => {
    FetchAdvice();
  }, []);

  const FetchAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => {
        return response.json();
      })
      .then((json: AdviceSlip) => {
        const { advice } = json.slip;
        setAdvice(advice);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="button" onClick={FetchAdvice}>
          <span>Give me advice</span>
        </button>
      </div>
    </div>
  );
};

export default App;

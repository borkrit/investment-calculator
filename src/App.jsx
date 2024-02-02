import { useState } from "react";
import { CalculationInputs } from "./component/CalculationInputs";
import { CalculationOutput } from "./component/CalculationOutput";
import Header from "./component/Header";

function App() {
  const [investment, setInvestment] = useState({
    initialInvestment: 1000,
    annualInvestment: 500,
    expectedReturn: 5,
    duration: 1,
  });

  const handelChangeValue = (value, name) => {
    setInvestment((prev) => {
      return { ...prev, [name]: +value };
    });
  };

  return (
    <>
      <Header />
      <CalculationInputs
        investment={investment}
        onChangeInput={handelChangeValue}
      />

      {investment.duration <= 0 ? (
        <p className="center"> Please enter a correct duration (more that zero ) </p>
      ) : (
        <CalculationOutput investInput={investment} />
      )}
    </>
  );
}

export default App;

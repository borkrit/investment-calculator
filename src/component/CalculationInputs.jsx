import React from "react";

export const CalculationInputs = ({ investment ,onChangeInput }) => {
  return (
    <div id="user-input">
      <div className="input-group">
        <p>
        <label htmlFor="">
             initial investment
          
        </label>
        <input
            type="number"
            value={investment.initialInvestment}
            onChange={(e) => onChangeInput(e.target.value, "initialInvestment")}
          />
        </p>
        <p>
        <label htmlFor="">
          Annual investment
         
        </label>
        <input
            type="number"
            value={investment.annualInvestment}
            onChange={(e) => onChangeInput(e.target.value, "annualInvestment")}
          />
        </p>
      </div>
      <div className="input-group">
      <p>
        <label htmlFor="">
          Expected return
         
        </label>
        <input
            type="number"
            value={investment.expectedReturn}
            onChange={(e) => onChangeInput(e.target.value, "expectedReturn")}
          />
        </p>
        <p>
        <label htmlFor="">
          duration
         
        </label>
        <input
            type="number"
            value={investment.duration}
            required
            onChange={(e) => onChangeInput(e.target.value, "duration")}
          />
        </p>
      </div>
    </div>
  );
};

import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

export const CalculationOutput = ({ investInput }) => {
  const results = calculateInvestmentResults(investInput);




  const initialInvestment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;

 

  return (
    <table id="result">
      <thead>
        <tr>
          <td>Year</td>
          <td>Investment value</td>
          <td>Interest (Year)</td>
          <td>Total Interest</td>
          <td>Invested Capital</td>
        </tr>
      </thead>
      <tbody>
        {results &&
          results.map((yearData) => {

            const totalInterest =
              yearData.valueEndOfYear -
              yearData.annualInvestment * yearData.year -
              initialInvestment;

            const totalAmountInvested = yearData.valueEndOfYear - totalInterest


            return (
              <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

import React, { useState, useContext } from "react";
import { CurrenciesContext } from "../../contexts/CurrenciesContext";

export const CurrencyList = props => {
  const { rates, isLoading, callApi } = useContext(CurrenciesContext);

  let handleBaseChange = async val => {
    const data = await callApi(val);
  };

  console.log("baseRate ", rates);
  return (
    <div>
      {isLoading || !rates.length ? (
        <div className="spinner-border text-info" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <>
          <div className="form-group">
            <label htmlFor="from" className="label">
              From :
            </label>
            <select
              className="form-control"
              name="base"
              onChange={e => handleBaseChange(e.target.value)}>
              <option value=""> Please select currency </option>
              {rates.map(rate => {
                return (
                  <option value={rate.code} key={rate.code}>
                    {rate.code}
                  </option>
                );
              })}
            </select>
          </div>
        </>
      )}
    </div>
  );
};

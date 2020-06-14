import React, { createContext, useEffect, useState } from "react";
import callApi from "../helpers/callApi";

export const CurrenciesContext = createContext();

const CurrenciesProvider = props => {
  const { children } = props;
  const [rates, setRates] = useState([]);
  const [base, setBase] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const init = [];
  const callApi = async (code = "usd") => {
    const url = `http://www.floatrates.com/daily/${code.toLowerCase()}.json`;
    setIsLoading(true);
    setBase(code);
    const res = await fetch(url);
    const data = await res.json();
    // console.log("data  in call api:>> ", typeof data);
    let arrayData = [];
    Object.entries(data).map(([key, value]) => {
      return (arrayData = [...arrayData, value]);
    });
    setRates(arrayData);
    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 4000);
    setIsLoading(false);
  };
  // console.log("rates after destructuring  :>> ", typeof rates);
  useEffect(() => {
    callApi();
    // console.log("rates in useEffect", rates);
  }, []);
  //console.log("rates", rates.length);

  return (
    <CurrenciesContext.Provider
      value={{
        rates,
        setRates,
        base,
        setBase,
        isLoading,
        setIsLoading,
        callApi
      }}>
      {children}
    </CurrenciesContext.Provider>
  );
};

export default CurrenciesProvider;

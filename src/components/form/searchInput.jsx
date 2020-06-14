import React, { useContext, useState, useEffect } from "react";
import { CurrenciesContext } from "../../contexts/CurrenciesContext";
import { Currency } from "./currency";
import { CurrencyList } from "./CurrencyListDropdown";

export const SearchInput = props => {
  const {
    rates,
    setRates,
    isLoading,
    setIsLoading,
    base,
    setBase
  } = useContext(CurrenciesContext);
  const [amount, setAmount] = useState();
  const [baseCurrency, setBasCurrency] = useState();
  const [list, setList] = useState([]);
  const [result, setResult] = useState();

  const handleSearch = val => {
    setIsLoading(true);
    let filteredResults = [];
    if (val.length > 0) {
      filteredResults = rates.filter(rate => {
        return (
          rate.code.includes(val.toUpperCase()) ||
          rate.name.toLowerCase().includes(val)
        );
      });

      setIsLoading(false);
      return setList(filteredResults);
    }
    setIsLoading(false);
    return setList([]);
  };

  return (
    <div>
      <h3 className="text-info text-center">
        {base ? "Rates for " + base.toUpperCase() : ""}
      </h3>
      <div className="form-group">
        <label htmlFor="amount"> Amount </label>
        <input
          className="form-control"
          type="number"
          name="amount"
          id="amount"
          min="0"
          onChange={e => setAmount(e.target.value)}
        />
      </div>

      <CurrencyList></CurrencyList>
      <div className="form-group">
        <label htmlFor="to"> To :</label>
        <input
          className="form-control text-capitalize "
          type="text"
          name="to"
          placeholder="start type to search "
          onKeyUp={e => handleSearch(e.target.value)}
        />
      </div>
      <div className="alert">
        {list.map(rate => {
          return (
            <Currency
              rate={rate}
              amount={amount}
              base={base}
              key={rate.code}></Currency>
          );
        })}
      </div>
    </div>
  );
};

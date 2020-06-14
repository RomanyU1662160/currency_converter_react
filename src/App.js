import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/baseComponents/Header.jsx";
import CurrenciesProvider from "./contexts/CurrenciesContext";
import { BaseForm } from "./components/form";

function App() {
  return (
    <CurrenciesProvider>
      <div className="">
        <Header> </Header>
        <div className="container">
          <BaseForm></BaseForm>
        </div>
      </div>
    </CurrenciesProvider>
  );
}

export default App;

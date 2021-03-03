import { useState } from "react";
import CurrencySelect from "../src/components/CurrencySelect/CurrencySelect";

function Page() {
  const [currencyFrom, setCurrencyFrom] = useState("USD");
  const [currencyTo, setCurrencyTo] = useState("USD");
  const [result, setResult] = useState([]);

  function handleChangeFrom(e) {
    setCurrencyFrom(e.target.value);
  }

  function handleChangeTo(e) {
    setCurrencyTo(e.target.value);
  }

  function handleConvert() {
    const reqUrl = `https://api.exchangeratesapi.io/latest?symbols=${currencyFrom},${currencyTo}`;
    fetch(reqUrl)
      .then((response) => response.json())
      .then((data) => setResult(data));
  }

  return (
    <div>
      <img
        src="/images/logo.png"
        style={{ width: 250, margin: "0 auto", display: "block" }}
      />
      <CurrencySelect value={currencyFrom} handleChange={handleChangeFrom} /> to{" "}
      <CurrencySelect value={currencyTo} handleChange={handleChangeTo} />
      <button onClick={handleConvert}>Convert</button>
      <p>
        Converting <strong>{currencyFrom}</strong> to{" "}
        <strong>{currencyTo}</strong>.
      </p>
      <p>{JSON.stringify(result)}</p>
    </div>
  );
}

export default Page;

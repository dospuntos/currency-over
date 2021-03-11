import { useState } from "react";
import CurrencySelect from "../src/components/CurrencySelect/CurrencySelect";

function Page() {
  const [currencyFrom, setCurrencyFrom] = useState("USD");
  const [currencyTo, setCurrencyTo] = useState("USD");
  const [currencyAmount, setCurrencyAmount] = useState(1);
  const [result, setResult] = useState([]);

  function handleChangeFrom(e) {
    setCurrencyFrom(e.target.value);
  }

  function handleChangeTo(e) {
    setCurrencyTo(e.target.value);
  }

  function handleConvert() {
    const reqUrl = `https://api.exchangeratesapi.io/latest?base=${currencyFrom}`;
    fetch(reqUrl)
      .then((response) => response.json())
      .then((data) => {
        setResult(data);
        console.info(data);
      });
  }

  return (
    <div>
      <img
        src="/images/logo.png"
        style={{ width: 250, margin: "0 auto", display: "block" }}
      />
      <input
        type="text"
        value={currencyAmount}
        onChange={(e) => setCurrencyAmount(e.target.value)}
      />
      <br />
      <CurrencySelect
        value={currencyFrom}
        handleChange={handleChangeFrom}
      /> to <CurrencySelect value={currencyTo} handleChange={handleChangeTo} />
      <p>
        <button onClick={handleConvert}>Convert</button>
      </p>
      <p>
        Converting <strong>{currencyFrom}</strong> to{" "}
        <strong>{currencyTo}</strong>.
      </p>
      {result.rates && (
        <p>
          Result: {currencyAmount} {currencyFrom} ={" "}
          {currencyAmount * result.rates[currencyTo]} {currencyTo}
        </p>
      )}
    </div>
  );
}

export default Page;

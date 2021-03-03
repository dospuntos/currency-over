const currencies = [
  "CAD",
  "HKD",
  "ISK",
  "PHP",
  "DKK",
  "HUF",
  "CZK",
  "AUD",
  "RON",
  "SEK",
  "IDR",
  "INR",
  "BRL",
  "RUB",
  "HRK",
  "JPY",
  "THB",
  "CHF",
  "SGD",
  "PLN",
  "BGN",
  "TRY",
  "CNY",
  "NOK",
  "NZD",
  "ZAR",
  "USD",
  "MXN",
  "ILS",
  "GBP",
  "KRW",
  "MYR",
];

const CurrencySelect = ({ value, handleChange }) => (
  <select value={value} onChange={(e) => handleChange(e)}>
    {currencies.map((currency) => {
      return <option>{currency}</option>;
    })}
  </select>
);

export default CurrencySelect;

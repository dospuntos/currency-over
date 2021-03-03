const CurrencySelect = ({ value, handleChange }) => (
  <select value={value} onChange={(e) => handleChange(e)}>
    <option>CAD</option>
    <option>HKD</option>
    <option>ISK</option>
    <option>PHP</option>
    <option>DKK</option>
    <option>HUF</option>
    <option>CZK</option>
    <option>AUD</option>
    <option>RON</option>
    <option>SEK</option>
    <option>IDR</option>
    <option>INR</option>
    <option>BRL</option>
    <option>RUB</option>
    <option>HRK</option>
    <option>JPY</option>
    <option>THB</option>
    <option>CHF</option>
    <option>SGD</option>
    <option>PLN</option>
    <option>BGN</option>
    <option>TRY</option>
    <option>CNY</option>
    <option>NOK</option>
    <option>NZD</option>
    <option>ZAR</option>
    <option>USD</option>
    <option>MXN</option>
    <option>ILS</option>
    <option>GBP</option>
    <option>KRW</option>
    <option>MYR</option>
  </select>
);

export default CurrencySelect;

import CurrencySelect from "../src/components/CurrencySelect/CurrencySelect";

function Page() {
  return (
    <div>
      <img
        src="/images/logo.png"
        style={{ width: 250, margin: "0 auto", display: "block" }}
      />
      <CurrencySelect />
    </div>
  );
}

export default Page;

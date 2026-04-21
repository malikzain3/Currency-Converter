import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [], // Fixed: renamed from currencyOption to match App.jsx
  selectCurrency = "usd", // Fixed: renamed from SelectedCurrency to match App.jsx
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div className={`bg-gray-100 p-4 rounded-xl text-sm flex shadow-md ${className}`}>
      <div className="w-1/2">
        <label 
          htmlFor={amountInputId} 
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          type="number"
          className="outline-none w-full bg-transparent py-1.5 text-lg font-medium"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          // Added a check to ensure onAmountChange exists before calling it
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>

      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-2 py-1 bg-gray-100 cursor-pointer outline-none font-bold text-gray-600"
          value={selectCurrency}
          disabled={currencyDisable}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {/* Mapping through the options array */}
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
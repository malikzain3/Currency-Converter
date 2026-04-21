import './App.css'
import InputBox from './components/InputBox'
import { useState } from 'react'
import useCurrencyInfo from './assets/hooks/useCurrencyInfo'
import dollarsImage from './assets/dollars.jpg'

function App() {

  const [amount, setAmount] = useState(1)
  const [fromCurrency, setFromCurrency] = useState("usd")
  const [toCurrency, setToCurrency] = useState("pkr")
  const [convertedAmount, setConvertedAmount] = useState(0)
  const currencyInfo = useCurrencyInfo(fromCurrency)
  const options = Object.keys(currencyInfo)
  const swap = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert = () =>{
setConvertedAmount(amount * currencyInfo[toCurrency])
  }
  

 return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
              backgroundImage: `url(${dollarsImage})`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert();
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFromCurrency(currency)}
                            selectCurrency={fromCurrency}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    
                    {/* Centered Swap Button */}
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 hover:bg-blue-700 transition-all"
                            onClick={swap}
                        >
                            SWAP
                        </button>
                    </div>

                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setToCurrency(currency)}
                            selectCurrency={toCurrency}
                            amountDisable
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                    >
                        Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App

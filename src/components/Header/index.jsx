import { useState } from "react";

function Header() {
  const { language, changeLanguage } = useState();
  const { currency, changeCurrency } = useState();

  return (
    <div className="mt-4">
      <header>
        <div>
          <select
            value={language}
            onChange={(e) => changeLanguage(e.target.value)}
            className="mr-4 cursor-pointer"
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="gr">German</option>
            <option value="ch">Chinese</option>
            <option value="ja">Japanese</option>
            <option value="ar">Arabic</option>
            <option value="ra">Russian</option>
            <option value="po">Portuguese</option>
            <option value="hi">Hindi</option>
            <option value="ko">Korean</option>
            <option value="it">Italian</option>
          </select>

          <select
            value={currency}
            onChange={(e) => changeCurrency(e.target.value)}
            className="cursor-pointer"
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
            <option value="INR">INR</option>
            <option value="AUD">AUD</option>
            <option value="CAD">CAD</option>
            <option value="CHF">CHF</option>
            <option value="CNY">CNY</option>
            <option value="RUB">RUB</option>
            <option value="KRW">KRW</option>
            <option value="BRL">BRL</option>
          </select>
        </div>
      </header>
    </div>
  );
}

export default Header;

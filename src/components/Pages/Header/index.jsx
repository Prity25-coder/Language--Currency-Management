import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

function Header() {
  const { currency, changeCurrency } = useState();

  const { t, i18n } = useTranslation();

  const handleLangChange = useCallback(
    (e) => {
      console.log({ value: e.target.value });

      // i18n.changeLanguage(e.target.value);
    },
    [i18n]
  );

  return (
    <div className="mt-4 flex justify-end mr-40">
      <div>
        <select
          onChange={handleLangChange}
          className="mr-4 cursor-pointer gap-4 border-2"
        >
          <option selected disabled>
            Choose Language
          </option>
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
      </div>

      {/* For currency */}
      <div>
        <select
          value={currency}
          onChange={(e) => changeCurrency(e.target.value)}
          className="cursor-pointer border-2"
        >
          <option selected disabled>
            Choose Currency
          </option>
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
    </div>
  );
}

export default Header;

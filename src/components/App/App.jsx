import transfer from './img/transfer.svg';
import './App.css';
import { useCallback, useEffect, useState } from 'react';
import ConverterBlock from '../Switcher/ConverterBlock';
import { data } from '../../data';
import { useTranslation } from 'react-i18next';


function App() {
  const [exchangeFrom, setExchangeFrom] = useState('RUB');
  const [inputFrom, setInputFrom] = useState(1)
  const [exchangeTo, setExchangeTo] = useState('USD');
  const [inputTo, setInputTo] = useState(0)
  const [rates, setRates] = useState({})
  const [swapRates, setSwapRates] = useState(true)
  const { t, i18n } = useTranslation();

  useEffect(() => {
    setRates(data)
  }, [])

  const onChangeInputFrom = useCallback((value) => {
    const rateFrom = rates[exchangeFrom]
    const rateTo = rates[exchangeTo] 

    setInputFrom(value)
    setInputTo(((value / rateTo) * rateFrom).toFixed(3))
  }, [exchangeFrom, exchangeTo, rates])

  const onChangeInputTo = (value) => {
    const rateFrom = rates[exchangeFrom]
    const rateTo = rates[exchangeTo] 
    
    setInputTo(value)
    setInputFrom(((value / rateFrom) * rateTo).toFixed(3))
  }

  const swapToggle = () => {
    setSwapRates(!swapRates)
  }

  useEffect(() => {
    onChangeInputFrom(inputFrom)
  }, [inputFrom, onChangeInputFrom])

  const toggleLang = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (

    <section className="calc">
      <h1 className="calc__title">{t('Конвертация валют')}</h1>
      <div className="calc__wrapper">
        <div className="calc__side">
          <div className="calc__side-title">
            {t('У меня есть')}
          </div>
          {swapRates ?
            <ConverterBlock
              value={inputFrom}
              onChangeValue={onChangeInputFrom}
              currentTab={exchangeFrom}
              secondaryTab={exchangeTo}
              onChangeTab={setExchangeFrom}
              rates={rates} />
            :
            <ConverterBlock
              value={inputTo}
              onChangeValue={onChangeInputTo}
              currentTab={exchangeTo}
              secondaryTab={exchangeFrom}
              onChangeTab={setExchangeTo}
              rates={rates} />
            }
        </div>
        <img onClick={swapToggle} src={transfer} alt="#" className="calc__switcher__img"></img>
        <div className="calc__side">
          <div className="calc__side-title">
            {t('Хочу приобрести')}
          </div>
          {swapRates ?
            <ConverterBlock
            value={inputTo}
            onChangeValue={onChangeInputTo}
            currentTab={exchangeTo}
            secondaryTab={exchangeFrom}
            onChangeTab={setExchangeTo}
            rates={rates} />
            :
            <ConverterBlock
            value={inputFrom}
            onChangeValue={onChangeInputFrom}
              currentTab={exchangeFrom}
              secondaryTab={exchangeTo}
            onChangeTab={setExchangeFrom}
            rates={rates} />
            }
        </div>
      </div>

      <div className="toggle__lang">
        <p className='toggle__lang-title'>{t('Язык')}:</p>
        <button className='toggle__lang-button' onClick={toggleLang}>{t('lang')}</button>
      </div>
      
    </section> 
  );
}

export default App;

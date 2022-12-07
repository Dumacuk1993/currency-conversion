
const TabTitles = ['RUB', 'USD', 'EUR'];

const ConverterBlock = ({value, onChangeValue, onChangeTab, currentTab, secondaryTab, rates}) => {
  return (
    <>
      <div className="calc__switcher">
        {TabTitles.map((n, i) => (
          <div
            key={i}
            className={`calc__switcher__item ${n === currentTab ? 'calc__switcher__item--active' : ''}`}
            onClick={() => onChangeTab(n)}
          >{n}</div>
        ))}
      </div>
      <div className="calc__input__wrapper">
        <input
          value={value}
          onChange={(e) => onChangeValue(e.target.value)}
          type="number"
          className="calc__input"></input>
        <div className="calc__input__rate">{`1.00 ${currentTab} = ${(rates[currentTab] / rates[secondaryTab]).toFixed(4)} ${secondaryTab}`}</div>
      </div>  
    </>
  )
}

export default ConverterBlock;
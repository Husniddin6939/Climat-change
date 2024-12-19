import sun from "../../../assets/images/sun.svg";
import "./_Style.scss"

export const DefaultCard = () => {
  return (
    <>
        <div className="default_card">
          <div className="lineUp">
            <div className="left">
              <span>20°</span>
              <h2>Сегодня</h2>
            </div>
            <img src={sun} alt="icon" />
          </div>
          <div className="lineDown">
            <p>Время: 21:54</p>
            <p>Город: Санкт-Петербург</p>
          </div>
        </div>
    </>
  )
}

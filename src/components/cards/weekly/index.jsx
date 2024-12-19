import weather1 from "../../../assets/images/wheater 1.svg"
import "./_style.scss"

export const Weekly = () => {
  return (
    <>
      <div className="buttons">
        <button className="week" >На неделю</button>
        <button className="cancel">Отменить</button>
      </div>
      <div className="mainCard">
        <div className="day">
          <strong>Сегодня</strong>
          <small>28 авг</small>
          <img src={weather1} alt="icon" />
          <h2>+18°</h2>
          <h5>+15°</h5>
          <p>Облачно</p>
        </div>
        <div className="day">
          <strong>Сегодня</strong>
          <small>28 авг</small>
          <img src={weather1} alt="icon" />
          <h2>+18°</h2>
          <h5>+15°</h5>
          <p>Облачно</p>
        </div>
        <div className="day">
          <strong>Сегодня</strong>
          <small>28 авг</small>
          <img src={weather1} alt="icon" />
          <h2>+18°</h2>
          <h5>+15°</h5>
          <p>Облачно</p>
        </div>
        <div className="day">
          <strong>Сегодня</strong>
          <small>28 авг</small>
          <img src={weather1} alt="icon" />
          <h2>+18°</h2>
          <h5>+15°</h5>
          <p>Облачно</p>
        </div>
        <div className="day">
          <strong>Сегодня</strong>
          <small>28 авг</small>
          <img src={weather1} alt="icon" />
          <h2>+18°</h2>
          <h5>+15°</h5>
          <p>Облачно</p>
        </div>
        <div className="day">
          <strong>Сегодня</strong>
          <small>28 авг</small>
          <img src={weather1} alt="icon" />
          <h2>+18°</h2>
          <h5>+15°</h5>
          <p>Облачно</p>
        </div>
        <div className="day">
          <strong>Сегодня</strong>
          <small>28 авг</small>
          <img src={weather1} alt="icon" />
          <h2>+18°</h2>
          <h5>+15°</h5>
          <p>Облачно</p>
        </div>
        
      </div>
    </>
  )
}

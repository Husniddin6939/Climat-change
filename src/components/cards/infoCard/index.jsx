import temp from "../../../assets/images/temp.svg"
import pressure from "../../../assets/images/pressure.svg"
import precipitation from "../../../assets/images/precipitation.svg"
import wind from "../../../assets/images/wind.svg"
import imageBack from "../../../assets/images/image 1 (1).png"
import "./_Style.scss"

export const InfoCard = () => {
  return (
    <>
        <div className="card">
                <img className="imageBack" src={imageBack} alt="image" />
            <div className="temp">
               <div className="round"><img src={temp} alt="icon" /></div>
               <p>Температура</p>
               <span>20° - ощущается как 17°</span>
            </div>
            <div className="pressure">
               <div className="round"><img src={pressure} alt="icon" /></div>
               <p>Давление</p>
               <span>765 мм ртутного столба - нормальное</span>
            </div>
            <div className="precipitation">
               <div className="round"><img src={precipitation} alt="icon" /></div>
               <p>Осадки</p>
               <span>Без осадков</span>
            </div>
            <div className="wind">
               <div className="round"><img src={wind} alt="icon" /></div>
               <p>Ветер</p>
               <span>3 м/с юго-запад - легкий ветер</span>
            </div>
        </div>
    </>
  )
}

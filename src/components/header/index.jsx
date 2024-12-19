import { useState } from 'react'
import logo from "../../assets/images/Header logo.svg"
import mode from "../../assets/images/invert_colors_black_24dp 1.svg"
import "./_style.scss"

export const Header = () => {

  const [isBlack, setIsBlack] = useState(false);

  const toggleBodyColor = () => {
    if (isBlack) {
      document.body.style.backgroundColor = "white";
    } else {
      document.body.style.backgroundColor = "black";
    }
    setIsBlack(!isBlack); 
  };


  return (
    <header>
        <div className="container">
            <div className="logo">
                <img src={logo} alt="logo"/>
                <h1>VUE WATHER</h1>
            </div>

            <div className="search">
                <img onClick={toggleBodyColor} src={mode} alt="icon"/>
                <input type="text" placeholder='Выбрать город'/>
            </div>

        </div>
    </header>
  )
}

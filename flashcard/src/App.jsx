import { useState } from 'react'
import Card from './Card.jsx'
import './App.css'
import Tom from '/tomHanks.jpg'
import Denzel from '/denzel.jpg'
import Sandra from '/sandra.jpg'
import tomcruise from '/tomcruise.jpg'
import tomHanksName from '/tomHanksName.png'
import tomcruiseName from '/tomcruise.png'
import denzelName from '/denzel.png'
import sandraName from '/sandra.png'






function App() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [currentView, setCurrentView] = useState("img");
  const [isFlipped, setIsFlipped] = useState(false);
  

  const celebrities = {1:{"Name": tomHanksName, "img": Tom},
                        2:{"Name": tomcruiseName, "img": tomcruise},
                        3:{"Name": denzelName, "img": Denzel},
                        4:{"Name": sandraName, "img": Sandra}}

  const [image, setImage] = useState(celebrities[1].img);

  const handleBackward = () => {
    if (isFlipped) {
      handleCardClick()
    }

    if (currentIndex > 1) {
      setCurrentIndex(currentIndex - 1);
      setImage(celebrities[currentIndex].img)
    }
  };

  const handleForward = () => {
    if (isFlipped) {
      handleCardClick()
    }
    if (currentIndex != 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);

  };

  return (
    <div className="App">
      <div className='container'>
        <div className='title'>
          <h1 >Guess the celebrity's name</h1>
          <h3>How well do you know your celebrities? Test yourselves.<br/>
          </h3>
          <h4>
            Number of cards: 4

          </h4>
        </div>
        
        <div className='CardDiv'>
          <div onClick={handleCardClick}>
            <Card img={isFlipped ? celebrities[currentIndex].Name : celebrities[currentIndex].img}/>

          </div>
          
          <div className='buttonDiv'>
              <button onClick={handleBackward}>
                  <span>&larr;</span> 
              </button>
              <button onClick={handleForward}>
                  <span>&rarr;</span>
              </button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default App

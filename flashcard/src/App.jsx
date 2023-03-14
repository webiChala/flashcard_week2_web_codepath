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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  

  const [celebrities, setCelebrities] = useState([{"Name": tomHanksName, "img": Tom, "text": "Tom Hanks"},
                        {"Name": tomcruiseName, "img": tomcruise, "text": "Tom Cruise"},
                        {"Name": denzelName, "img": Denzel, "text": "Denzel Washington"},
                        {"Name": sandraName, "img": Sandra, "text": "Sandra Bullock"}])


  const handleBackward = () => {
    if (isFlipped) {
      handleCardClick()
    }

    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setInputValue('')
      setSubmitStatus(false);
    }
    
  };

  const handleForward = () => {
    
    if (isFlipped) {
      handleCardClick()
    }
    if (currentIndex != 3) {
      setCurrentIndex(currentIndex + 1);
      setInputValue('')
      setSubmitStatus(false);
    }
    
  };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);

  };

  const [inputValue, setInputValue] = useState('');

  const [submitted, setSubmitStatus] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the input value, such as submit it to a server
    setSubmitStatus(true);
  };

  const getInputClassName = () => {
    if (submitted === false) {
      return '';
    } else {
      
      if (inputValue === celebrities[currentIndex].text) {
        
        return 'valid';
      } else {
        
        return 'invalid';
      }
      
    }
    
  };

  function shuffleList(list) {
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      if (i == currentIndex || j == currentIndex) {
        continue;
      }
      [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
  }

  const shuffleCard = () => {
      setCelebrities(shuffleList(celebrities))
      console.log(celebrities)
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setSubmitStatus(false);
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
              <button className="click-effect" onClick={shuffleCard}>
                Shuffle
              </button>
          </div>

          <div className='guessInput'>
            <form onSubmit={handleSubmit}>
              <label>
                Guess:
                <input placeholder='Enter your answer' value={inputValue} className={getInputClassName()} type="text" onChange={handleInputChange} />
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default App


import './App.css';
import React, {useState, useEffect} from 'react';

const App = () => {

  const [character, setCharacter] = useState("1")
  const [anime, setAnime] = useState("1")
  const [image, setImage] = useState(<div></div>)

  useEffect(()=> {
    fetch('https://graphql.anilist.co',{
        method: "Post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          query:`
          query {
            Character(id: ${anime}) {
              image {
                large
                
              }
              name {
                full
              }
              
            }
          }
          
          
          
          
          `
        })
    })
      .then(response => {
        return response.json()
      })
      .then((data)=> {
       setCharacter(data)
       console.log(character);
      })
 }, [anime])

function randomNumber(){
  let number = Math.floor(Math.random() * 100) + 1
  console.log(anime)
   setAnime(number)
   setImage(
    <div>
      <h1> {character.data.Character.name.full} </h1>
      <img src={`${character.data.Character.image.large}`} alt="Character" />
    </div>
  )
} 
  
  
  return (
    <div className='App'>
      <h1 className='Tittle'>Genarete a random Character</h1>
      <button onClick={randomNumber} className="button"> Genarete </button>
      {image}
    </div>
  );
}

export default App;

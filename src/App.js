import './App.css';
import {Movielist} from'./Movieslist.js';
import { useState } from 'react';


function App() {
  const [Movies,setMovies]=useState([
    {Movie_name:"Avengers EndGame",poster:"https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",Rating: 8.4,Summary:"After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance."},
    {Movie_name:"Interstellar" ,poster:"https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",Rating:8.6,Summary:"When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans."},
    {Movie_name:"Justice League",poster:"https://images-na.ssl-images-amazon.com/images/I/81KX513BQxL.jpg",Rating:6.1,Summary:"Steppenwolf and his Parademons return after eons to capture Earth. However, Batman seeks the help of Wonder Woman to recruit and assemble Flash, Cyborg and Aquaman to fight the powerful new enemy."},
    {Movie_name:"Mission: Impossible - Fallout",poster:"https://m.media-amazon.com/images/I/81RfxadikXL._SL1500_.jpg",Rating:7.7,Summary:"A group of terrorists plans to detonate three plutonium cores for a simultaneous nuclear attack on different cities. Ethan Hunt, along with his IMF team, sets out to stop the carnage."},
    {Movie_name:"Thor: The Dark World",poster:"https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_FMjpg_UX1000_.jpg",Rating:6.8,Summary:"Thor sets out on a journey to defeat Malekith, the leader of the Dark Elves when he returns to Asgard to retrieve a dangerous weapon and fulfill his desire of destroying the Nine Realms."},
   
  ]);
  // const [movie,addMovie]=useState({Movies});
  const[movie,nomovies]=useState(true);
  const[MovieName,setMovieName]=useState("");
  const[Poster,setposter]=useState("");
  const[rating,setRating]=useState("");
  const[Moviedescription,setdescription]=useState("");
  const addnewmovie=()=>{
    const newmovie={Movie_name:MovieName,poster:Poster,Rating:rating,Summary:Moviedescription}
    setMovies([...Movies,newmovie]);
    nomovies(!movie)
  }
 

  return (
    <div className="App">
      {/* <button className="button" onClick={()=>nomovies(!movie)}>➕Add movie</button> */}
   { movie ? <button className="button" onClick={()=>nomovies(!movie)}>➕AddMovie</button>:""}
      
    {movie?  <Movielist Movies={Movies}/> : <div className="dataform">
    
      <p>
        <label for="Movie_name" className="Movie_name">Movie Name:</label>
   <input type="text" id="Movie_name" name="Movie_name"  onChange={(event) => setMovieName(event.target.value)} placeholder="Movie name"/>
  </p>
  <p>
    <label for="poster" className="poster">Poster:</label>
   <input  type="text" name="poster" id="poster"   placeholder="poster"onChange={(event) => setposter(event.target.value)}/>
  </p>
   <p>
     <label for="Rating" className="Rating">Rating:</label>
   <input type="text" name="Rating" id="Rating"   placeholder="Rating"onChange={(event) => setRating(event.target.value)}/>
  </p>
   <p>
     <label for="Summary" className="Summary">Summary:</label>
   <textarea name="Summary" id="Summary"   placeholder="Summary"onChange={(event) => setdescription(event.target.value)}></textarea>
   </p>
   <p className="submit"><button onClick={addnewmovie} > Submit</button></p>
  {/* <button onClick={()=>setcolors([...colors,color])}>Add color</button> */}
  </div>}
      
 
 
      
      {/* <button style={{marginBottom:"10px"}}
      onClick={()=>setshow(!show)}>{show ? "Hide":"show"} description</button> */}
 
  </div>
  );
}

export default App;











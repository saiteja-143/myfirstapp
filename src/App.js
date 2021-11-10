import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const Movies=[
    {Movie_name:"Avengers EndGame",poster:"https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",Rating: 8.4,Summary:"After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance."},
    {Movie_name:"Interstellar" ,poster:"https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",Rating:8.6,Summary:"When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans."},
    {Movie_name:"Justice League",poster:"https://images-na.ssl-images-amazon.com/images/I/81KX513BQxL.jpg",Rating:6.1,Summary:"Steppenwolf and his Parademons return after eons to capture Earth. However, Batman seeks the help of Wonder Woman to recruit and assemble Flash, Cyborg and Aquaman to fight the powerful new enemy."},
    {Movie_name:"Mission: Impossible - Fallout",poster:"https://m.media-amazon.com/images/I/81RfxadikXL._SL1500_.jpg",Rating:7.7,Summary:"A group of terrorists plans to detonate three plutonium cores for a simultaneous nuclear attack on different cities. Ethan Hunt, along with his IMF team, sets out to stop the carnage."},
    {Movie_name:"Thor: The Dark World",poster:"https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_FMjpg_UX1000_.jpg",Rating:6.8,Summary:"Thor sets out on a journey to defeat Malekith, the leader of the Dark Elves when he returns to Asgard to retrieve a dangerous weapon and fulfill his desire of destroying the Nine Realms."},
    // {Movie_name:"",poster:"",Rating:,Summary:""}
    {Movie_name:"Avengers EndGame",poster:"https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",Rating: 8.4,Summary:"After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance."},
    {Movie_name:"Interstellar" ,poster:"https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",Rating:8.6,Summary:"When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans."},
    {Movie_name:"Justice League",poster:"https://images-na.ssl-images-amazon.com/images/I/81KX513BQxL.jpg",Rating:6.1,Summary:"Steppenwolf and his Parademons return after eons to capture Earth. However, Batman seeks the help of Wonder Woman to recruit and assemble Flash, Cyborg and Aquaman to fight the powerful new enemy."},
    {Movie_name:"Mission: Impossible - Fallout",poster:"https://m.media-amazon.com/images/I/81RfxadikXL._SL1500_.jpg",Rating:7.7,Summary:"A group of terrorists plans to detonate three plutonium cores for a simultaneous nuclear attack on different cities. Ethan Hunt, along with his IMF team, sets out to stop the carnage."},
    {Movie_name:"Thor: The Dark World",poster:"https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_FMjpg_UX1000_.jpg",Rating:6.8,Summary:"Thor sets out on a journey to defeat Malekith, the leader of the Dark Elves when he returns to Asgard to retrieve a dangerous weapon and fulfill his desire of destroying the Nine Realms."},
    
    {Movie_name:"Avengers EndGame",poster:"https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",Rating: 8.4,Summary:"After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance."},
    {Movie_name:"Interstellar" ,poster:"https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",Rating:8.6,Summary:"When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans."},
    {Movie_name:"Justice League",poster:"https://images-na.ssl-images-amazon.com/images/I/81KX513BQxL.jpg",Rating:6.1,Summary:"Steppenwolf and his Parademons return after eons to capture Earth. However, Batman seeks the help of Wonder Woman to recruit and assemble Flash, Cyborg and Aquaman to fight the powerful new enemy."},
    {Movie_name:"Mission: Impossible - Fallout",poster:"https://m.media-amazon.com/images/I/81RfxadikXL._SL1500_.jpg",Rating:7.7,Summary:"A group of terrorists plans to detonate three plutonium cores for a simultaneous nuclear attack on different cities. Ethan Hunt, along with his IMF team, sets out to stop the carnage."},
    {Movie_name:"Thor: The Dark World",poster:"https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_FMjpg_UX1000_.jpg",Rating:6.8,Summary:"Thor sets out on a journey to defeat Malekith, the leader of the Dark Elves when he returns to Asgard to retrieve a dangerous weapon and fulfill his desire of destroying the Nine Realms."},
   
    {Movie_name:"Avengers EndGame",poster:"https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",Rating: 8.4,Summary:"After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance."},
    {Movie_name:"Interstellar" ,poster:"https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",Rating:8.6,Summary:"When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans."},
    {Movie_name:"Justice League",poster:"https://images-na.ssl-images-amazon.com/images/I/81KX513BQxL.jpg",Rating:6.1,Summary:"Steppenwolf and his Parademons return after eons to capture Earth. However, Batman seeks the help of Wonder Woman to recruit and assemble Flash, Cyborg and Aquaman to fight the powerful new enemy."},
    {Movie_name:"Mission: Impossible - Fallout",poster:"https://m.media-amazon.com/images/I/81RfxadikXL._SL1500_.jpg",Rating:7.7,Summary:"A group of terrorists plans to detonate three plutonium cores for a simultaneous nuclear attack on different cities. Ethan Hunt, along with his IMF team, sets out to stop the carnage."},
    {Movie_name:"Thor: The Dark World",poster:"https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_FMjpg_UX1000_.jpg",Rating:6.8,Summary:"Thor sets out on a journey to defeat Malekith, the leader of the Dark Elves when he returns to Asgard to retrieve a dangerous weapon and fulfill his desire of destroying the Nine Realms."},
   

  ]
  return (
    <div className="App">
      {Movies.map(({Movie_name,poster,Rating,Summary})=>(
        <Movie Movie_name={Movie_name} poster={poster} Rating={Rating} Summary={Summary}/>

      )
      )
      }
      
      
    </div>
    // <div >
    //   <Counter/>
     
    // </div>
  );
}

export default App;
// function Msg({name,pic}){
//   return(
//     <div>
//       <img src={pic} alt={name} height="300" className="pro-pic"/>
//       <h1>Hai {name} !!!🙋‍♂️</h1>
//     </div>
//   );
// }

function Movie({Movie_name,poster,Rating,Summary}){
  return(
    <div className="Movie_container">
      <img className="Movie_poster"src={poster} />
      <div className="Movie_specs">
      <h3 className="Movie_name">{Movie_name}</h3>
      <p className="Rating">⭐ {Rating}</p>
      </div>
      <p className="Movie_Summary">{Summary}</p>
      <Counter/>
    </div>

  );
}

function Counter(){
  //concept of HOOk
  //for dynamicallly changing values based on the interactive ness with users +
  //we use a concept called hook->useState -hook are functions-it will always starts with use
  //const[state,setstate]=useState(10);
  const[like,setlike]=useState(0);
  const[dislike,setdislike]=useState(0);
  //Here the useState(0) reurns array
  //here State reffers to the current data in the web app
  //here state=like and setstate=setlike.
  //Here setlike updates the like value.
  return(
    <div className="container">
     <p> <button  className="likes-dislikes" onClick={()=>setlike(like+1)}>👍 {like}</button></p>
     <p> <button  className="likes-dislikes" onClick={()=>setdislike(dislike+1)}>👎 {dislike}</button></p>
    
   
    </div>
  //  click like button
  //   ->onclick event
  //   ->setlike(will update like value)\
  //   ->reat will update like in the visualViewport(screen)

  );
}


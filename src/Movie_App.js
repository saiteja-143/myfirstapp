import { useState } from 'react';
import {Counter} from './L&D_Counter.js';
 function Movie({Movie_name,poster,Rating,Summary}){
   const [show,setshow]=useState(true);
   const styles={display:show?"block":"none"};
    return(
      
      <div className="Movie_container">
        <img className="Movie_poster"src={poster} />
        <div className="Movie_specs">
        <h3 className="Movie_name">{Movie_name}</h3>
        <p className="Rating">⭐ {Rating}</p>
        </div>
        
        <button style={{marginBottom:"10px"}}
        onClick={()=>setshow(!show)}>{show ? "Hide":"show"} description</button>
        {/* //this way of hiding description is called conditional styling */}
        {/* <p style={styles} className="Movie_Summary">{Summary}</p> */}
        {/* the following way of hiding description is called conditional rendoring */}
        {show ? <p style={styles} className="Movie_Summary">{Summary}</p>:""}
        <Counter/>
     
      </div>
  
    );
  }
  export{Movie};
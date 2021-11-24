import {useState} from "react";
export function Counter(){
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
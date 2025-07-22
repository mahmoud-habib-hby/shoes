import { useContext } from "react"
import { Text } from "./provider";
import "./App.css"
import { useNavigate } from "react-router-dom";

function PERSON(){
    const {person}=useContext(Text);
    const home=useNavigate()
    return(
        <div className="n">
        <p>
        <span class="material-symbols-outlined">person</span>
        </p>
       <p>
       name:  {person.name}
        </p>
       <p>
      email:  {person.email}
        </p>
         <button class="btn btn-danger" onClick={()=>{
            home("/")
         }}>log out</button>
        </div>
    )
}
export default PERSON;
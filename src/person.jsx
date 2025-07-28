import { useContext, useEffect, useState } from "react"
import { Text } from "./provider";
import "./App.css"
import { useNavigate } from "react-router-dom";

function PERSON(){
    const {person ,setchangeemail ,setchangename ,changeemail,changename  ,UPdataName,UPdataEmail} =useContext(Text);
    const [name,setname]=useState("none")
    const [email,setemail]=useState("none");
    function Name(){
        setname("")
    }
    function Email(){
        setemail("")
    }
        function DeletName(){
        setname("none")
    }
    function DeletEmail(){
        setemail("none")
    }
const home=useNavigate()

    return( 
        <>
       
          <div class="position position-absolute top-50 start-50 translate-middle"  style={{  boxShadow:" 0px 0px 13px 0px black",position:"fixed", background:"#ffff",width:"40vw",height:'30vh',overflow:"hidden", borderRadius:"40px",padding:"30px", display:name }} >
        <input  type="text" placeholder="change name" onChange={(e)=>setchangename(e.target.value)} value={changename} />
        <button class="btn btn-success"  style={{margin:"50px 0px"}} onClick={()=>{
        if(changename!==""){
            DeletName();
            UPdataName();
        }
        }}>change</button>
          </div>
         <div class="position position-absolute top-50 start-50 translate-middle"  style={{  boxShadow:"0px 0px 13px 0px black ",position:"fixed", background:"#ffff",width:"40vw",height:'30vh',overflow:"hidden", borderRadius:"40px",padding:"30px", display:email  }}>
        <input type="text" placeholder="change gmail"
        onChange={(e)=>setchangeemail(e.target.value)} />
        <button class="btn btn-success" style={{margin:"50px 0px"}} value={changeemail} 
onClick={()=>{
    if(changeemail!==""){
        UPdataEmail();
        DeletEmail()
    }
    }}> change</button>
          </div>
        <div className="n">
        <div className="right">
        <div className="r">
             <h7> Name : {person.name} </h7>
             <button onClick={()=>Name()}>
            <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
            <path  d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
             <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
             </svg>
             </button>
        </div>
        <div className="r">
             <h7> Email : {person.email}</h7>
             <button onClick={()=>Email()} >
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
             <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
             <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
            </svg>    
            </button>
        </div>
         <button class="btn btn-danger" onClick={()=>{
             home("/")
            }}>log out</button>
            </div>
            </div>
            </>
    )
}
export default PERSON;
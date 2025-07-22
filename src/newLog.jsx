import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useContext, useEffect, useRef } from 'react';
import { Text } from './provider';
import { useNavigate } from 'react-router-dom';
export default function NewLog(){
   const{person,Person}=useContext(Text)
   useEffect(()=>{
   
       console.log(person)
   },[person])
   const home=useNavigate()
    const error = useRef(null);
    return(
    <>
    
    <div className='div'>
        <form onSubmit={(e)=>{
            e.preventDefault();
           error.current.className="alert alert-danger";
            if(e.target[0].value&&e.target[1].value){
                Person(e.target[0].value,e.target[1].value)
                home("/home")
            }
        }}>
        <div className="alert alert-danger error" role="alert" ref={error}>
        write information
         </div>
            <div>
                <label>name</label>
                <input type="text"  className="form-control"/>
            </div>
            <div>
                <label>email</label>
                <input type="email" className="form-control" />
            </div>
            <div>
                <label>password</label>
                <input type="password" className="form-control" />
            </div>
            <div>
                <label>age</label>
                <input type="number" className="form-control" />
            </div>
            <div>
                <button className="btn btn-success">log in</button>
            </div>
        </form>
    </div>
            </>
    );
}




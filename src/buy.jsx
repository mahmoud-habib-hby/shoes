import { useContext, useRef } from "react";
import { Text } from "./provider";
import './App.css';

export function BUY(){
   const {val ,delet}=useContext(Text);
   let number=0;
   let element=0;
   const error = useRef(null);

  val.map((e)=>{
      number=Number(e.price)+number;
      element=element+1;
   })
   let show=val.map((e)=>{
     return(
           <div className="product">
                <span>{e.name}</span>
                <span>{e.price}$</span>
                <button class="btn btn-danger" onClick={()=>delet(e.id)} >delet</button>
           </div>
    );
   })
function MONEY(){
const {val,buy}=useContext(Text);
let number=0;
val.map((e)=>{
    number=number+Number(e.price);
})
    return(
        <div ref={error} className="display">
       <span>
        <button className="btn btn-danger" onClick={()=>{
         error.current.className="display"
        }}>back</button>
        </span>
        <p>Checkout Page</p>
        <p>price = {number}$</p>
        <div className="money">
            <input type="text" placeholder="name" className="form-control"/>
            <input type="email" placeholder="email" className="form-control"/>
            <input type="number" placeholder="phone" className="form-control"/>
            <input type="text" placeholder="Country" className="form-control"/>
            <input type="number" placeholder="Card Number" className="form-control"/>
            <input type="number" placeholder="Expiry Date" className="form-control"/>
            <input type="number" placeholder="CVV Code" className="form-control"/>
            <button class="btn btn-success"onClick={()=>
            buy()
            }>buy</button>
        </div>
        </div>
    )
}
    return(
           <>
        <div className="buy">
        <MONEY />
         <button className="btn btn-success" onClick={()=>{
            if(element>0){
               error.current.className="badge";
            }
         }}> buy {element} element ={number}$</button>
           {show}
        </div>
           </>
    );
}
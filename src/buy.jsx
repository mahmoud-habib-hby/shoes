import { useContext, useRef } from "react";
import { Text } from "./provider";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export function BUY(){
   const {vall ,delet}=useContext(Text);
   let number=0;
   let element=0;
   const error = useRef(null);

  vall.map((e)=>{
      number=Number(e.price)+number;
      element=element+1;
   })
   let show=vall.map((e)=>{
     return(
           <div className="product">
                <span>{e.name}</span>
                <span>{e.price}$</span>
                <button class="btn btn-danger" onClick={()=>delet(e.id)} >delet</button>
           </div>
    );
   })
function MONEY(){
const {vall,buy}=useContext(Text);
let number=0;
vall.map((e)=>{
    number=number+Number(e.price);
})
    return(
        <div  >
         <div class="position-absolute top-50 start-50 translate-middle display" ref={error}>
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
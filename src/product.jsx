import { useContext } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Text } from './provider';
import NAV from './nav';
import ABOUT from './about';

export default function PRODUCT(){
const { add} = useContext(Text);
    let photo=[
        {photo:"/Shoes/shoes1.png", price:"120",name:"yellow shoese"},
        {photo:"/Shoes/shoes2.png", price:"110",name:"black shoese"},
        {photo:"/Shoes/shoes3.png", price:"130",name:"blue shoese"},
        {photo:"/Shoes/shoes5.png", price:"100",name:"yellow shoese"},
        {photo:"/Shoes/shoes6.png", price:"120",name:"orange shoese"},
        {photo:"/Shoes/shoes7.png", price:"90",name:"red&white shoese"},
        {photo:"/Shoes/shoes8.png", price:"80",name:"black shoese"}
    ] 
    let show=photo.map((e)=>{
        return(
            <div className="product">
                <img src={`${process.env.PUBLIC_URL}${e.photo}`} alt=""/> 
                <span>{e.name}</span>
                <span>price :{e.price}$</span>
                <button type="button" className="btn btn-outline-primary blue" onClick={()=>{
                    add(e.name,e.price)
                    }
                    }>add to chart</button>
            </div>
        );
        
    }
    )
    return(
    <>

    <div className="products">
        {show}
    </div>
    <ABOUT/>
    </>

    );
}
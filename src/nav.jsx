import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {  useRef } from "react";
import { Link } from "react-router-dom";

export default function NAV(){
const x=useRef(null)
    return(
        <div className="nav" ref={x} >
            <span className="Shoes">Shoes</span>
            <div className="middel">
                <Link className="link" to={"/home"} >home</Link>
                <Link className="link" to={"/product"}>product</Link>
            </div>
            <div> 
                <Link className="link" to={"/person"}> <span class="material-symbols-outlined">person</span></Link>
                <Link className="link" to={"/buy"}> <span class="material-symbols-outlined">shopping_cart</span></Link>
            </div>
        </div>
    );
}
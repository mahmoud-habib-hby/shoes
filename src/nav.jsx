import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
export default function NAV(){
    return(
        <div className="nav">
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
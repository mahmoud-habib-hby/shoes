
import { Link } from "react-router-dom";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Main(){
    return(
    <>

    <div className="home">
        <div className="left">
            <span className="name">Shoes collection</span>
            <span>A shoe store that sells shoes in different colors</span>
            <Link className="link btn btn-success" to={"/log"}>log in</Link>
        </div>
    </div>
    </>
    );   
}
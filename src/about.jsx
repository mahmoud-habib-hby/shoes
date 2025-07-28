import { Button } from "bootstrap";

function ABOUT(){

    return(
        <div className="about">
            <div className="contact">
            <div>
                <span class="material-symbols-outlined">home</span><span>Egypt.tanat</span>
            </div>
            
            <div>
                <span class="material-symbols-outlined">call</span><span>01124051</span>
            </div> 
            
            <div>
                <span class="material-symbols-outlined">mail</span><span>2956294@gemail.com</span>
            </div>
            
            </div>
            <div className="follow">
            <p>follow</p>
            <div>
                <img  src={`${process.env.PUBLIC_URL}/Shoes/facebook.png`} alt="" />
                <img  src={`${process.env.PUBLIC_URL}/Shoes/google.png`} alt="" />
                <img  src={`${process.env.PUBLIC_URL}/Shoes/twitter.png`} alt="" />
            </div>
            </div>
        </div>
    );
}

export default ABOUT;
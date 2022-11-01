import React from "react"
 
function Main () {
    return (
    <main>
        
             <h3 className="nav--title">Evalyna Lazar</h3>
             <h4 className="nav--title_text">Frontend Developer</h4>
         
        <div className="nav--button_part">
             <button classname="nav–-email">Email </button>
             <button classname="nav—-linkedin">Linkedin </button>
        </div>

        <div className="main--partone">
            <h3 className="main--about">About</h3>
            <h6 className="main--about_text">I am a frontend developer with a particular interest in making things simple and automating daily tasks. 
            I try to keep up with security and best practices, 
            and am always looking for new things to learn.</h6>
        </div>

        <div className="main--parttwo">
            <h3 className="main--interests">Interests</h3>
            <h6 className="main--interests_text">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. 
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic. </h6>
        </div>  

    </main>
       
    )
   
}
 
export default Main
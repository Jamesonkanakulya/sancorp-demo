import React,{useState,useEffect} from 'react'
import TopNavbar from './TopNavbar'
import logo from '../images/sancorpweb.PNG'
import { NavLink } from 'react-router-dom'
import { FaAlignJustify,FaTimes } from "react-icons/fa";



function NavBar() {


    const [show, setshow] = useState(false);
    const [icon, setIcon] = useState(false);

    const handleIcon =()=>{
        setIcon(!icon)
        console.log(icon);
    }
  
    useEffect(() => {
      window.addEventListener("scroll", () => {
        const top = window.scrollY > 100;
        if (top) {
          setshow(true);
        } else setshow(false);
      });
  
      // return  () =>{
      //     window.addEventListener('scroll');
      // }
    }, [show]);


    return (
       <>
        <TopNavbar/>
   
         <div className= {show?"mainNav  navFix":'mainNav'}>
             
            <div className="container">
            <div className= 'navBar'>
                <img src={logo} alt="SANCORP LOGO" />

              <div style={{fontSize:'1.5rem'}} className="menuIcon" onClick={handleIcon}>
                <span className={!icon?" myIcon":"hideIcon myIcon"} > <FaAlignJustify/></span>
                <span className={icon?"showIcon myIcon":"hideIcon myIcon"} > <FaTimes/></span>
              </div>

                <ul className={!icon?"hideList navList":"showList navList"}>
                    <li><NavLink exact activeClassName="current"  to='/'>Home</NavLink></li>
                    <li><NavLink exact activeClassName="current" to='/about'>about us</NavLink></li>
                    <li><NavLink exact activeClassName="current" to='/services'>services</NavLink></li>
                    <li><NavLink exact activeClassName="current" to='/contact'>contact us</NavLink></li>
                    
                </ul>
                
                
            </div>
            </div>
         </div>
       
       </>
            
      
    )
}

export default NavBar

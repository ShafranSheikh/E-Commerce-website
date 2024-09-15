import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './Assets/styles/footer.css'
function Footer(){
    return(
        <div className='container'>
            <div className="links">
                <ul>
                    <li>Home</li>
                    <li>Mens</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="social">
                <SocialIcon url='https://x.com' bgColor='black'/>
                <SocialIcon url='https://facebook.com' bgColor='black'/>
                <SocialIcon url='https://instagram.com' bgColor='black'/>
            </div>
        </div>
    );
}

export default Footer;
import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" className='logo' />
                <p>Our healthcare platform seamlessly connects users with pharmacies and doctors, making appointments hassle-free. With an integrated AI bot, users can receive instant medical guidance, ensuring quick and reliable healthcare support anytime, anywhere.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>How Are We</h2>
                <ul>
                    <li>Home</li>
                    <li>AI - BOT</li>
                    <li>Developer Team</li>
                    <li>Github</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 1234567890</li>
                    <li>Zerktis@gmail.com</li>
                </ul>
            </div>
           
        </div>
        <hr />
        <p className="footer-copyright">
            Copyright 2025 &copy; Zerktis - All Right Reserved.   
            Build with love during FROSTHACK-S1 
        </p>
    </div>
  )
}

export default Footer
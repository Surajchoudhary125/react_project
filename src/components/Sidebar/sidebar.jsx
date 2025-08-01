import React from 'react'
import './sidebar.css'
import { assets } from '../../assets/assets'
const sidebar = () => {
  return (
    <div className='sidebar'>
     
      <div className="top">
        <img className='menu' src={assets.menu_icon} alt="" />
        
        <div className="new-chat">
            <img  src={assets.plus_icon} alt="" />
            <p>new chat </p>
        </div>
        
        <div className="recent">
            <p className='recent-title'>recent</p>
            <div className="recent-entry">
                <img src={assets.message_icon} alt="" />
                <p>what is react...</p>
            </div>
        </div>
     </div>
     
      <div className="bottom">
        <div className="bottom-item recent-entry">
            <img src={assets.question_icon} alt="" />
            <p>Help</p>
        </div>
       

         <div className="bottom-item recent-entry">
            <img src={assets.history_icon} alt="" />
            <p>Activity</p>
        </div>

         <div className="bottom-item recent-entry">
            <img src={assets.setting_icon} alt="" />
            <p>Setting</p>
        </div>
        </div>
     
    
      
    </div>
  )
}

export default sidebar
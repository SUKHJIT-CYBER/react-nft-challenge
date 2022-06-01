import React from 'react'
import './Header.css'
import punklogo from '../assests/header/cryptopunk-logo.png'
import searchIcon from '../assests/header/search.png'
import themeswitch from '../assests/header/theme-switch.png'
const Header = () => {
    return <div className = 'header'>
       <div className='logoContainer'>
           <img src={punklogo} className = 'punkLogo' alt =''/>
       </div>
       <div className='searchbar'>
           <div className='searchcontainer'>
               <img src={searchIcon} alt =''/>
           </div>
           <input className='searchinput' placeholder='Collection ,item ,user .......'/>
       </div>
       <div className='headeritems'>
           <p>Drops</p>
           <p>Marketplace</p>
           <p>Create</p>
       </div>

       <div className='headeractions'>
           <div className='themeswitchcontainer'>
               <img src={themeswitch} alt=''/>
           </div>
       </div>
       <div className='loginbutton'>
           GET IN 
       </div>
        </div>
}

export default Header
import React from 'react'
import weth from '../assests/weth.png'
import './Collectioncard.css'
const Collectioncard = ({id , name ,traits , image}) => {
    return (
        <div className="collectioncard">
            <img src={image} alt='' />
            <div className="details">
            <div className="name">
                {name}
            
            <div className="id">🟡#{id}</div>
            </div>
            <div className="pricecontainer">
                <img src={weth} className="ethimage" alt='' />
               <div className='price'>{traits[0]?.value}</div>
            </div>
        </div>
        </div>
    )
}

export default Collectioncard

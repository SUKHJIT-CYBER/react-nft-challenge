import React from 'react'
import Collectioncard from './Collectioncard'

const punkList = ({punklistdata }) => {
    return (
        <div className='punklist'>
        {punklistdata.map( punk =>   (
            <div>
                <Collectioncard 
                key={punk.token_id}
                id={punk.token_id}
                name={punk.name}
                traits={punk.traits}
                image={punk.image_original_url}
                />
            </div>
        ))}
        </div>
    )
}

export default punkList

import React from 'react'

const Spinner = () => {
    return (
        <div  className='flex flex-col justify-center items-center'>
            <div className='spinner'></div>
            <h1 className='font-bold'>Loading...</h1>
        </div>
    )
}

export default Spinner

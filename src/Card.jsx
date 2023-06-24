import React from 'react'

export const Card = (props) => {
    return (
        <>
            <div id='card' className='col-11 col-sm-5 d-none col-md-3 col-lg-2 ms-0 me-sm-3 me-md-3 mb-3'>
                <div className='body__img skeleton'>
                    <img alt='' className='img-fluid skeleton d-none movie_poster' />
                </div>
                <div className='info_wrapper body__text'>
                    <div className='data_type skeleton skeleton-text'></div>
                    <div className='data_title skeleton skeleton-text'></div>
                    <div className='data_year skeleton skeleton-text'><span></span></div>
                </div>
            </div>
        </>
    )
}

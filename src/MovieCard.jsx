import React from 'react'

export const MovieCard = ({movie: {imdbID, Year, Poster, Title, Type}}) => {
    return (
        <>
            <div id='card2' key={imdbID} className='col-11 col-sm-5 col-md-3 col-lg-2 ms-0 me-sm-3 me-md-3 mb-3 card'>
                <div className=''>
                {console.log(Poster)}
                    <img src={Poster} alt='' className='img-fluid movie_poster' />
                </div>
                <div className='info_wrapper'>
                    <div className='data_type'>{Type}</div>
                    <div className='data_title'>{Title}</div>
                    <div className='data_year'><span>{Year}</span></div>
                </div>
            </div>
        </>
    )
}

import React, { useEffect, useState } from 'react'
import './App.css'
import { Card } from './Card'
import { MovieCard } from './MovieCard'




export const App = () => {
    const [searchTerm, SetSearchTerm] = useState();
    const [movies, setMovies] = useState();
    const [isSearching, setIsSearching] = useState(false);

    const SearchMovie = async (title) => {
        setIsSearching(true)
        const container = document.querySelector(".container1");
        const cardTemplate = document.getElementById("card");
        cardTemplate.classList.remove('d-none')
        const appendedElements = [];
        for (let i = 0; i < 4; i++) {
            const clonned = cardTemplate.cloneNode(true);
            container.appendChild(clonned);
            appendedElements.push(clonned)

        }
        const API = 'http://www.omdbapi.com/?apikey=aca568e3'
        const response = await fetch(`${API}&s=${title}`);
        const data = await response.json();
        console.log(data);
        setMovies(data.Search);
        for (let i = 0; i < appendedElements.length; i++) {
            const elementToRemove = appendedElements[i];
            elementToRemove.parentNode.removeChild(elementToRemove);
        }
        appendedElements.length = 0;
        
        cardTemplate.classList.add('d-none')
    }

    


    useEffect(() => {

    },)
    return (
        <>
            <main className='container'>
                <section className='search_container d-flex flex-column align-items-center mt-5 pt-5'>
                    <h1>Movie Land</h1>
                    <div className='search_input'>
                        <input type='text' id='search' placeholder='Search for movie' onKeyDown={(e) => { if (e.key == "Enter") { SearchMovie(searchTerm) } }} onChange={(e) => SetSearchTerm(e.target.value)} autoComplete='off' />
                        <span className="material-symbols-outlined icon" onClick={(searchTerm) => SearchMovie(searchTerm)}>
                            search
                        </span>
                    </div>
                </section>

                <section>
                    <div className='row mt-5 d-flex justify-content-center flex-wrap container1'>
                        {movies?.length > 0 ? (
                            <div className="container  mt-5 d-flex justify-content-center flex-wrap">
                                {movies.map((movie) => (
                                    <MovieCard movie={movie} />
                                ))}
                            </div>
                        ) : (
                            <div className="empty">
                            </div>
                        )}

                        
                        <Card />

                    </div>
                </section>
            </main>
        </>
    )
}

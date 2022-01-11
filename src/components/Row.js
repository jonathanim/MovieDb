import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from '../axios'

const RowContainer = styled.div`
width: 100%;
height: 350px;
margin: 10px;
padding: 10px;
display: flex;
justify-content:center;
align-items: center;
overflow-y: hidden;
overflow-x: scroll;
`
const RowItem = styled.div`
width: 100%;
object-fit: contain;
margin: 10px;
transition: transform 400ms;


&:hover {
    transform: scale(1.20);
}
`

const ImageURL = "Https://image.tmdb.org/t/p/original"

function Row({ title, fetchURL }) {

    const [movies, setMovies] = useState([])
    const [movie, setMovie] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetchURL)
            console.log(request.data)
            setMovies(request.data.results)
        }
        fetchData()
    }, [fetchURL])

    const handleClick = (id) => {
        setMovie(id)
    }

    return (<>
        <h1 style={{ fontSize: "60px", fontWeight: "bold", margin: "10px 20px" }}>{title}</h1>
        <RowContainer>

            {movies.map(movie => {
                return (
                    <RowItem key={movie.id}>
                        <img src={`${ImageURL}${movie.poster_path}`} alt={`${movie.name}`} style={{ height: "150px", margin: "10px" }} onClick={() => { handleClick(movie.id) }} />
                    </RowItem>
                )
            })}

        </RowContainer>
    </>

    )
}

export default Row

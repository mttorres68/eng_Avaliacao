import { useEffect, useState } from "react"
import { Link, useParams } from 'react-router-dom';
import { Container } from "./styles"




function Details(){
    
    const {id} = useParams()
    
    const imagePath = 'https://image.tmdb.org/t/p/w500'
    const [movie, setMovie] = useState({})
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9120f6031db55e99991ee5df9352235a&language=en-US`)
        .then(response => response.json())
        .then(data => {
        const movie = {
            id,
            title: data.title,
            sinopse: data.overview,
            image: `${imagePath}${data.poster_path}`,            
            releaseDate: data.release_date
        };
        console.log(movie)
        setMovie(movie)
        })
    }, [id])

    return(        
        <Container>
            <div className= "movie">
                <img src={movie.image} alt={movie.sinopse}/>
                <div className="details">
                    <h1>{movie.title}</h1>
                    <span>Descricao: {movie.sinopse}</span>
                    <span className="realese-date">Data de Lançamento: {movie.releaseDate}</span>
                    <Link to="/">
                        <button className="">Pagina Inicial</button>
                    </Link>
                    
                </div>                
            </div>
        </Container>
    )
}

export default Details

const API_KEY = "c96b8dbbb6b6d8fcc050111f29d46dd0"
// req https://api.themoviedb.org/3/movie/550?api_key=c96b8dbbb6b6d8fcc050111f29d46dd0

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchPopular: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`,
    fetchAction: `/discover/movie?api_key=${API_KEY}&with_genres=28`


}

export default requests
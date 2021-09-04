const BASE_URL = "https://api.themoviedb.org/3/";
const API_ENDPOINT = "api_key=7a96ac1f5cbcf7ffc7c00d4917bfe466";

export default class DataSource {
    
    static searchMovie(title) {
        return fetch(`${BASE_URL}search/movie?${API_ENDPOINT}&query=${title}`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject(`${title} is not found.`)
                }
            })
    }

    static renderMovies(path) {
        this.path = path;
        return fetch(`${BASE_URL}${path}?${API_ENDPOINT}&language=en-US&page=1`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.results) {
                return Promise.resolve(responseJson.results);
            } else {
                return Promise.reject(`Error: `, results);
            }
        })
    }

    static genreMovies(genre_id) {
        this.genre_id = genre_id;
        return fetch(`${BASE_URL}discover/movie?${API_ENDPOINT}&with_genres=${genre_id}&language=en-US&page=1`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.results) {
                return Promise.resolve(responseJson.results);
            } else {
                return Promise.reject(`Error: `, results);
            }
        })
    }
    

}

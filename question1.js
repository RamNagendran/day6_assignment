
class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating ? rating : "PG";
    }

    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}

const manOfSteel = new Movie("Man of Steel", "DC Productions", "PG-13");
console.log("Rating of Man of Steel Movie:", manOfSteel);
// output 
// Rating of Man of Steel Movie: Movie {
//     title: 'Man of Steel',
//     studio: 'DC Productions',
//     rating: 'PG-13'
//   }


const moviesArray = [
    new Movie("Movie 1", "Caption America", "PG"),
    new Movie("Movie 2", "Avengers", "R"),
    new Movie("Movie 3", "Inifinity War", "PG"),
    new Movie("Movie 4", "End Game", "G"),
];

console.log(Movie.getPG(moviesArray))
// output
// [
//     Movie { title: 'Movie 1', studio: 'Caption America', rating: 'PG' },
//     Movie { title: 'Movie 3', studio: 'Inifinity War', rating: 'PG' }
// ]
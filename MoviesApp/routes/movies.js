var express = require("express");
var router = express.Router();

const moviesMock = [
  {
    id: "1",
    title: "The good, the bad and the ugly",
    text: "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
    director: "Sergio Leone",
    rating: "8.8",
    genre: ["Western", "Adventure"],
    year: "1966",
    src: "https://m.media-amazon.com/images/M/MV5BMjE2MzE5MTE5NV5BMl5BanBnXkFtZTcwODI4ODUyMQ@@._V1_.jpg",
    stars: ["Clint Eastwood", "Eli Wallach", "Lee Van Cleef"],
    favorite: false,
  },
  {
    id: "2",
    title: "The Godfather",
    text: "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
    director: "Francis Ford Coppola",
    rating: "9",
    genre: ["Crime", "Drama"],
    year: "1972",
    src: "https://upload.wikimedia.org/wikipedia/en/a/af/The_Godfather%2C_The_Game.jpg",
    stars: [
      "Marlon Brando",
      "Al Pacino",
      "James Caan",
      "Diane Keaton",
      "Robert Duvall",
    ],
    favorite: false,
  },
  {
    id: "3",
    title: "The Tenant",
    text: "A bureaucrat rents a Paris apartment where he finds himself drawn into a rabbit hole of dangerous paranoia.",
    director: "Roman Polanski",
    rating: "7.6",
    genre: ["Horror", "Drama", "Thriller"],
    year: "1976",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZRlojgnDBnezAeEDxXVY5yKT-XC4mvyIYuw&usqp=CAU",
    stars: [
      "Roman Polanski",
      "Isabelle Adjani",
      "Melvyn Douglas",
      "Jo Van Fleet",
    ],
    favorite: false,
  },
  {
    id: "4",
    title: "Hair",
    text: "Claude Bukowski leaves the family ranch in Oklahoma for New York where he is rapidly embraced into the hippie group of youngsters led by Berger, yet he's already been drafted. He soon falls in love with Sheila Franklin, a rich girl but still a rebel inside.",
    director: "Milos Forman",
    rating: "7.5",
    genre: ["Comedy", "Drama", "Musical"],
    year: "1979",
    src: "https://upload.wikimedia.org/wikipedia/en/2/24/Hairmovieposter.jpg",
    stars: ["John Savage", "Treat Williams", "Beverly D'Angelo"],
    favorite: false,
  },
  {
    id: "5",
    title: "The Omen",
    text: "Mysterious deaths surround an American ambassador. Could the child that he is raising actually be the Antichrist? The Devil's own son?",
    director: "Richard Donner",
    rating: "7.5",
    genre: ["Horror", "Mistery"],
    year: "1976",
    src: "https://upload.wikimedia.org/wikipedia/en/1/1d/Omen_ver4.jpg",
    stars: ["Gregory Peck", "Lee Remick"],
    favorite: false,
  },
  {
    id: "6",
    title: "Ben-Hur",
    text: "After a Jewish prince is betrayed and sent into slavery by a Roman friend in 1st-century Jerusalem, he regains his freedom and comes back for revenge.",
    director: "William Wyler",
    rating: "8.1",
    genre: ["Adventure", "Drama"],
    year: "1959",
    src: "https://upload.wikimedia.org/wikipedia/commons/7/74/Ben_hur_1959_poster.jpg",
    stars: ["Charlton Heston", "Jack Hawkins", "Stephen Boyd"],
    favorite: false,
  },
  {
    id: "7",
    title: "Goodfellas",
    text: "The story of Henry Hill and his life in the mafia, covering his relationship with his wife Karen and his mob partners Jimmy Conway and Tommy DeVito.",
    director: "Martin Scorsese",
    rating: "8.7",
    genre: ["Biography", "Crime", "Drama"],
    year: "1990",
    src: "https://upload.wikimedia.org/wikipedia/en/1/15/Goodfellas2.jpg",
    stars: ["Robert De Niro", "Ray Liotta", "Joe Pesci", "Paul Sorvino"],
    favorite: false,
  },
  {
    id: "8",
    title: "All about Eve",
    text: "A seemingly timid but secretly ruthless ingénue insinuates herself into the lives of an aging Broadway star and her circle of theater friends.",
    director: "Joseph L. Mankiewicz",
    rating: "8.2",
    genre: ["Drama"],
    year: "1950",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/All_About_Eve_%281950_poster_-_retouch%29.jpg",
    starts: ["Bette Davis", "Anne Baxter", "George Sanders"],
    favorite: false,
  },
  {
    id: "9",
    title: "Some like it hot",
    director: "Billy Wilder",
    text: "After two male musicians witness a mob hit, they flee the state in an all-female band disguised as women, but further complications set in.",
    rating: "8.2",
    genre: ["Comedy", "Music", "Romance"],
    year: "1959",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKC-Lv4kxOrSxiiyYbd2hbnQNc_kyYrffRsX4488oobDrbu55cFxICLdE4x5prIUor1vw&usqp=CAU",
    stars: ["Marilyn Monroe", "Tony Curtis", "Jack Lemmon"],
    favorite: false,
  },
  {
    id: "10",
    title: "Sunset Blvd.",
    text: "A screenwriter develops a dangerous relationship with a faded film star determined to make a triumphant return.",
    director: "Billy Wilder",
    rating: "8.4",
    genre: ["Drama", "Film-Noir"],
    year: "1950",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9F-PCjvr4Y7wTT2_Ve_nAijITxRmYUZdvww&usqp=CAU",
    stars: ["William Holden", "Gloria Swanson", "Erich von Stroheim"],
    favorite: false,
  },
];

const movies = [...moviesMock];

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send({ movies });
});

router.get("/:id", function (req, res, next) {
  res.send({ movie: movies.find((movie) => movie.id === req.params.id) });
});

router.post("/", function (req, res, next) {
  console.log(req.body);
  console.log(req.params);
  const movie = req.body.title
    ? {
        title: req.body.title,
        director: req.body.director,
        rating: req.body.rating,
        genre: req.body.genre,
        favorite: req.body.favorite === "true" || req.body.favorite === true,
        src: req.body.src,
        year: req.body.year,
        text: req.body.text,
        stars: req.body.stars,
        id: new Date().getTime() + "",
      }
    : null;

  if (movie) {
    movies.unshift(movie);
  }

  res.send({ movie });
});

router.delete("/:id", function (req, res, next) {
  const index = movies.findIndex((movie) => movie.id === req.params.id);
  console.log(index);
  console.log(movies[index]);
  movies.splice(index, 1);
  res.send({ movies });
});

router.patch("/:id", function (req, res, next) {
  const index = movies.findIndex((movie) => movie.id === req.params.id);

  if (!index) {
    res.status(404).send({ message: "Movie not found" });
  }

  movies[index] = {
    title: req.body.title,
    director: req.body.director,
    rating: req.body.rating,
    genre: req.body.genre,
    favorite: req.body.favorite === "true" || req.body.favorite === true,
    src: req.body.src,
    year: req.body.year,
    text: req.body.text,
    stars: req.body.stars,
    id: req.body.id || req.params.id,
  };

  res.send({ movie: movies[index] });
});

router.patch("/:id/favorite", function (req, res, next) {
  const index = movies.findIndex((movie) => movie.id === req.params.id);

  if (!index) {
    res.status(404).send({ message: "Movie not found" });
  }

  movies[index] = {
    ...movies[index],
    favorite: req.body.favorite,
  };

  res.send({ movie: movies[index] });
});

module.exports = router;

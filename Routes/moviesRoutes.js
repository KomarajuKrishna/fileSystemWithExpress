const express = require("express");
const fs = require("fs");

const router = express.Router();

const movies = JSON.parse(fs.readFileSync("./Data/Movies.json"));

//Routes Handler Functions ::
const getAllMovies = (request, response) => {
  response.status(200);
  response.json({
    status: "Success",
    data: {
      movies: movies,
    },
  });
};

const getMovie = (request, response) => {
  const id = request.params.id * 1;
  //   console.log(id);
  const movie = movies.find((eachMovie) => eachMovie.id === id);
  if (movie === undefined) {
    response.status(404);
    response.json({
      status: "Fail",
      message: "Movie with Id " + id + " is not found",
    });
  } else {
    response.status(200);
    response.json({
      status: "Success",
      data: {
        movie: movie,
      },
    });
  }
};

const createMovie = (request, response) => {
  const newMovieId = movies[movies.length - 1].id + 1;
  //   console.log(newMovieId);
  console.log(request.body);
  const addNewMovie = Object.assign({ id: newMovieId }, request.body);
  movies.push(addNewMovie);
  fs.writeFile("./Data/Movies.json", JSON.stringify(movies), (err) => {
    response.status(201).json({
      status: "Success",
      message: "Movie Created Successfully",
      data: {
        movie: addNewMovie,
      },
    });
  });
};

const updateMovie = (request, response) => {
  const id = request.params.id * 1;
  let movieToUpdate = movies.find((eachMovie) => eachMovie.id === id);
  if (movieToUpdate === undefined) {
    response.status(404);
    response.json({
      status: "Fail",
      message: "Movie with Id " + id + " is not found",
    });
  } else {
    let index = movies.indexOf(movieToUpdate);
    Object.assign(movieToUpdate, request.body);
    movies[index] = movieToUpdate;
    fs.writeFile("./Data/Movies.json", JSON.stringify(movies), (err) => {
      response.status(200).json({
        status: "Success",
        data: {
          movie: movieToUpdate,
        },
      });
    });
  }
};

const delMovie = (request, response) => {
  const id = request.params.id * 1;
  const deleteMovie = movies.find((eachMovie) => eachMovie.id === id);
  if (deleteMovie === undefined) {
    response.status(404);
    response.json({
      status: "Fail",
      message: "Movie With the Id " + id + " was not found",
    });
  } else {
    const index = movies.indexOf(deleteMovie);
    movies.splice(index, 1);
    fs.writeFile("./Data/Movies.json", JSON.stringify(movies), (err) => {
      response.status(200);
      response.json({
        status: "Success",
        message: "Movie Deleted Successfully",
      });
    });
  }
};

router.route("/").get(getAllMovies).post(createMovie);

router.route("/:id").patch(updateMovie).delete(delMovie).get(getMovie);

module.exports = router;

const express = require("express");
const moviesRouter = require("./Routes/moviesRoutes");

const app = express();

app.use(express.json());

app.listen(3007, () => {
  console.log("Server Running At: localhost:3007");
});

//Get Method API ::

// app.get("/movies", (request, response) => {
//   response.status(200);
//   response.json({
//     status: "Success",
//     data: {
//       movies: movies,
//     },
//   });
// });

//Post Method API ::

// app.post("/movies", (request, response) => {
//   const newMovieId = movies[movies.length - 1].id + 1;
//   //   console.log(newMovieId);
//   const addNewMovie = Object.assign({ id: newMovieId }, request.body);
//   movies.push(addNewMovie);
//   fs.writeFile("./Data/Movies.json", JSON.stringify(movies), (err) => {
//     response.status(201).json({
//       status: "Success",
//       data: {
//         movie: addNewMovie,
//       },
//     });
//   });
//   //   response.send("Movie Created Successfully");
// });

//GET METHOD API BASED ON ID ::

// app.get("/movies/:id", (request, response) => {
//   //   const movieId = request.params;
//   //   const { id } = movieId;
//   const id = request.params.id * 1;
//   //   console.log(id);
//   const movie = movies.find((eachMovie) => eachMovie.id === id);
//   if (movie === undefined) {
//     response.status(404);
//     response.json({
//       status: "Fail",
//       message: "Movie with Id " + id + " is not found",
//     });
//   } else {
//     response.status(200);
//     response.json({
//       status: "Success",
//       data: {
//         movie: movie,
//       },
//     });
//   }
// });

//Patch Method API Based on ID ::

// app.patch("/movies/:id", (request, response) => {
//   const id = request.params.id * 1;
//   let movieToUpdate = movies.find((eachMovie) => eachMovie.id === id);
//   if (movieToUpdate === undefined) {
//     response.status(404);
//     response.json({
//       status: "Fail",
//       message: "Movie with Id " + id + " is not found",
//     });
//   } else {
//     let index = movies.indexOf(movieToUpdate);
//     Object.assign(movieToUpdate, request.body);
//     movies[index] = movieToUpdate;
//     fs.writeFile("./Data/Movies.json", JSON.stringify(movies), (err) => {
//       response.status(200).json({
//         status: "Success",
//         data: {
//           movie: movieToUpdate,
//         },
//       });
//     });
//   }
// });

//Delete API ::
// app.delete("/movies/:id", (request, response) => {
//   const id = request.params.id * 1;
//   const deleteMovie = movies.find((eachMovie) => eachMovie.id === id);
//   if (deleteMovie === undefined) {
//     response.status(404);
//     response.json({
//       status: "Fail",
//       message: "Movie With the Id " + id + " was not found",
//     });
//   } else {
//     const index = movies.indexOf(deleteMovie);
//     movies.splice(index, 1);
//     fs.writeFile("./Data/Movies.json", JSON.stringify(movies), (err) => {
//       response.status(200);
//       response.json({
//         status: "Success",
//         message: "Movie Deleted Successfully",
//       });
//     });
//   }
// });

//Route Handler APIs ::
// app.get("/movies", getAllMovies);
// app.get("/movies/:id", getMovie);
// app.post("/movies", createMovie);
// app.patch("/movies/:id", updateMovie);
// app.delete("/movies/:id", deleteMovie);

app.use("/movies", moviesRouter);

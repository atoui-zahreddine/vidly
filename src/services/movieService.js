import http from "./httpService";

export async function getMovies() {
  return await http.get("/movies");
}

export async function getMovie(id) {
  return await http.get("/movies/" + id);
}

export async function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    await http.put("/movies/" + movie._id, body);
    return;
  }

  await http.post("/movies", movie);
}

export async function deleteMovie(id) {
  return await http.delete("/movies/" + id);
}

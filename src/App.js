import React, { useState, useEffect } from "react";
import "./App.css";
import MovieBox from "./MovieBox";
import AddFilm from "./Context";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=cde050bd84c31bdc947a9df0e464dd4a";
const API_SEARCH =
  "https://api.themoviedb.org/3/search/movie?api_key=cde050bd84c31bdc947a9df0e464dd4a&query";
function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  const searchMovie = async (e) => {
    e.preventDefault();
    console.log("Searching");
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };
  return (
    <>
      <Navbar bg="info" expand="lg" variant="info">
        <Container fluid>
          <Navbar.Brand href="/home">Reactflix</Navbar.Brand>
          <Navbar.Brand href="/">I tuoi preferiti</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>

          <Navbar.Collapse id="nabarScroll">
            <Nav
              className="me-auto my-2 my-lg-3"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>

            <Form className="d-flex" onSubmit={searchMovie} autoComplete="off">
              <FormControl
                type="search"
                placeholder="Che film vuoi guardare"
                className="me-4"
                aria-label="search"
                name="query"
                value={query}
                onChange={changeHandler}
              ></FormControl>
              <Button className="me-5" variant="light" type="submit">
                Cerca
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        {movies.length > 0 ? (
          <div className="container">
            <div className="grid">
              {movies.map((movieReq) => (
                <MovieBox key={movieReq.id} {...movieReq} />
              ))}
            </div>
          </div>
        ) : (
          <h2>Mi dispiace hai sbagliato digitare riprova!</h2>
        )}
      </div>
    </>
  );
}

export default App;

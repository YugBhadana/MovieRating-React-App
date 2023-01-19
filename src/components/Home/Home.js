import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import "./Home.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
  loader,
} from "../../features/movies/movieSlice";
const Home = () => {
  const dispatch = useDispatch();
  const loading = useSelector(loader);
  const movieText = "King";
  const showText = "Friends";
  console.log("Loading", loading);
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  }, [dispatch]);
  return loading == true ? (
    <div className="loader">...Loading</div>
  ) : (
    <div>
      <MovieListing />
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import NavMenu from "./NavMenu";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import Home from './Home';


const Header = () => {
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=d3974e11`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	return(
		<>
			<div className="container-fluid d-flex align-items-center justify-content-between my-4">
				<div><MovieListHeading heading="Movies App" /></div>

				<div><NavMenu /></div>

				<SearchBox
					searchValue={searchValue}
					setSearchValue={setSearchValue}
				/>
			</div>
		</>
	);
};

export default Header;
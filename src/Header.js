import React, { useState, useEffect } from "react";
import NavMenu from "./NavMenu";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import Home from './Home';
import { Link } from 'react-router-dom';


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

	return (
		<>
			<header className="d-md-flex align-items-center justify-content-between my-4">
				<div className="col-md-4">
					<Link to='/'>
						<MovieListHeading heading="Movies App" />
					</Link>
				</div>

				<div className="col-md-4 d-flex justify-content-center mx-5 mx-lg-0 mt-2 mb-4 mt-lg-0 mb-lg-0">
					<NavMenu />
				</div>

				<div className="col-md-2 offset-md-2">
					<SearchBox
						searchValue={searchValue}
						setSearchValue={setSearchValue}
						className="mt-3 mt-md-0"
					/>
				</div>
			</header>
		</>
	);
};

export default Header;

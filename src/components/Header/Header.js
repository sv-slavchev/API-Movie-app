import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import SearchBox from "../Search-page/SearchBox";

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
			<header className="d-md-flex justify-content-between my-4">
				<div>
					<Link to='/'>
						<h1>Movies App</h1>
					</Link>
				</div>

				<div>
					<Link to='/search'>
						<SearchBox
							searchValue={searchValue}
							setSearchValue={setSearchValue}
							className="mt-3 mt-md-0"
						/>
					</Link>
				</div>
			</header>
		</>
	);
};

export default Header;
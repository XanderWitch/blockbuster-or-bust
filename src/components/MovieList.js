import React from 'react';
import Movie from './Movie';

const MovieList = () => {
	return (
		<div className='p-3'>
			<div className='p-4'>
				<h1 className='display-2 text-center text-info'>
					Blockbuster or Bust Movie Reviews
					<hr />
					<hr />
				</h1>

				<h3 className='display-4 text-light text-center mt-3 p-3'>
					Our Movies
				</h3>
				<Movie />
			</div>
		</div>
	);
};

export default MovieList;

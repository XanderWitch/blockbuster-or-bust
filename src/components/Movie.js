import React from 'react';
import movieArray from './MovieArray';
import reviewArray from './ReviewArray';
import ReviewForm from './ReviewForm';

const Movie = () => {
	return (
		<div className='movie-display'>
			<ReactFragment>
				{movieArray.map((movie) => (
				<div key={movie.id} className='movie-item mt-5 p-2'>
					<img
						className='card-img-top'
						src={movie.movieImage}
						alt='movie poster'
					/>
					<p className='movie-listing'>
						{movie.movieName}
						<br />
						{movie.movieGenre}, {movie.releaseDate},
						<br />
						Rated {movie.movieRating}
						<br />
					</p>
				</div>
					{movie.reviews.map((review) => (
						<div key={review.id}>
							{review.movieRating}<br />
							"{review.review}"<br />
							—{review.username}, {review.currentDate}
						</div>
					))
					}
			</ReactFragment>
				))
			<>
				<ReviewForm />
			</>
		</div>
	);
};

export default Movie;

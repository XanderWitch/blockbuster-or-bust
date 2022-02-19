import React from 'react';
import movieArray from './MovieArray';
import ReviewForm from './ReviewForm';

const Movie = () => {
	return (
		<div className='movie-display'>
			{movieArray.map((movie) => (
				<React.Fragment>
					<div key={movie.id} className='movie-item col col-3'>
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
					{movie.reviews?.map((review) => (
						<div key={review.id} class='reviews'>
							{review.movieRating}
							<br />"{review.review}"<br />—
							{review.username}, {review.currentDate}
						</div>
					))}
					)
					<>
						<ReviewForm />
					</>
				</React.Fragment>
			))}
		</div>
	);
};

export default Movie;

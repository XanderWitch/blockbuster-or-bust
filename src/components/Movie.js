import React from 'react';
import movieArray from './MovieArray';
import ReviewForm from './ReviewForm';

const Movie = () => {
	return (
		<div className='movie-display'>
			{movieArray.map((movie) => (
				<div key={movie.id} className='movie-item mt-5 col col-3'>
					<img
						// className='card-img-top'
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
					<h4 className='review-list text-center mt-5'>
						~REVIEWS~
					</h4>
					<div>
						{movie.reviews?.map((review) => (
							<div key={review.id}>
								<p>
									<span className='star-rating'>
										{review.starRating}
									</span>
									,{' '}
									<span className='review-text'>
										"{review.review}"
									</span>
								</p>
								<p className='review-footer'>
									<span className='review-footer'>
										—{review.username},{' '}
										{review.currentDate}
									</span>
								</p>
							</div>
						))}
					</div>

					<>
						<ReviewForm />
					</>
				</div>
			))}
		</div>
	);
};

export default Movie;

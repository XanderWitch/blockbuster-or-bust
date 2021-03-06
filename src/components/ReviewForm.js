import React, { useState } from 'react';
import movieArray from './MovieArray';

export default function ReviewForm() {
	const [review, setReview] = useState({
		username: '',
		currentDate: '',
		review: '',
		starRating: '',
	});

	const handleChange = (event) => {
		event.preventDefault();

		setReview({
			...movieArray.reviews,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		movieArray.reviews?.push(review);

		setReview({
			username: '',
			currentDate: '',
			review: '',
			starRating: '',
		});
	};

	return (
		<div className='review-form'>
			<form onSubmit={handleSubmit}>
				<div>
					<h3 className='text-center mt-2 p-2'>
						Add Your Own Review
					</h3>
				</div>
				<div>
					<input
						type='text'
						name='username'
						placeholder='Your Preferred Name'
						value={review.username}
						onChange={handleChange}
					/>
				</div>
				<div>
					<input
						type='date'
						name='currentDate'
						placeholder='Date You Watched This Movie'
						value={review.currentDate}
						onChange={handleChange}
					/>
				</div>
				<div>
					<textarea
						name='review'
						rows='10'
						className='form-control'
						placeholder='Blockbuster or bust? Type your review here...'
						value={review.review}
						onChange={handleChange}
					/>
				</div>
				<div>
					<p className='review-text mt-3 text-center'>
						Your Rating
					</p>
					<select
						name='starRating'
						className='star'
						value={review.starRating}
						onChange={handleChange}>
						<option value='1'>★</option>;
						<option value='2'>★★</option>;
						<option value='3'>★★★</option>;
						<option value='4'>★★★★</option>;
						<option value='5'>★★★★★</option>;
					</select>
				</div>
				<div>
					<button
						className='btn btn-info mt-3'
						onClick={handleSubmit}>
						{console.log(movieArray)}Submit
					</button>
				</div>
				{movieArray.reviews?.map(function (review) {
					return (
						<div key={review.id}>
							{review.username} {review.currentDate}{' '}
							{review.review} {review.starRating}
						</div>
					);
				})}
			</form>
		</div>
	);
}

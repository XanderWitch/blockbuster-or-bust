import React, { useState } from 'react';
import StarRating from './StarRating';
import movieArray from './MovieArray';

function ReviewForm() {
	const [inputFields, setInputFields] = useState([
		{ username: '', review: '', rating: '' },
	]);

	const handleFormChange = (index, event) => {
		let data = [...inputFields];
		data[index][event.target.name] = event.target.value;
		setInputFields(data);
	};

	const current = new Date();
	const date = `${current.getDate()}/${
		current.getMonth() + 1
	}/${current.getFullYear()}`;

	return (
		<div className='review-form'>
			<h4>Add your own review</h4>

			<form>
				{inputFields.map((input, index) => (
					<div key={index}>
						<label>Name</label>
						<input
							type='text'
							placeholder='Your Preferred Name'
							name='username'
							value={input.username}
							onChange={(event) =>
								handleFormChange(index, event)
							}
						/>
						<br />
						<label>Date Viewed</label>
						<input
							type='date'
							name='currentDate'
							placeholder='Date'
							defaultValue={date}
							onChange={(event) =>
								handleFormChange(index, event)
							}
						/>
						<label>Your Review</label>
						<textarea
							placeholder='Blockbuster or bust? Type your review here...'
							name='review'
							value={input.review}
							onChange={(event) =>
								handleFormChange(index, event)
							}
						/>
						<br />
						<label>Your Rating</label>
						<StarRating />
					</div>
				))}
			</form>
		</div>
	);
}

export default ReviewForm;

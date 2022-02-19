import React from 'react';
import AvatarImage from '../images/Avatar.jpg';
import GoneWithTheWindImage from '../images/GoneWithTheWind.jpg';
import TitanicImage from '../images/Titanic.png';
import AvengersEndgameImage from '../images/AvengersEndgame.jpg';
import DoctorZhivagoImage from '../images/DoctorZhivago.jpg';
import ETTheExtraTerrestrialImage from '../images/ETTheExtraTerrestrial.jpg';
import StarWarsImage from '../images/StarWars.jpg';
import StarWarsTheForceAwakensImage from '../images/StarWarsTheForceAwakens.jpg';
import TheSoundOfMuicImage from '../images/TheSoundOfMusic.jpg';
import TheTenCommandmentsImage from '../images/TheTenCommandments.jpg';

const movieArray = [
	{
		id: 'GoneWithTheWind',
		movieName: 'Gone With the Wind',
		releaseDate: 1939,
		movieGenre: 'Drama',
		movieRating: 'G',
		movieImage: GoneWithTheWindImage,
		reviews: [
			{
				username: 'Midha',
				currentDate: '10/12/2021',
				review: 'OMG. So Dated.',
				starRating: '★★★',
				id: 'Gone-1',
			},
			{
				username: 'Jane',
				currentDate: '11/1/2021',
				review: 'Blockbuster! Most romantic movie ever!',
				starRating: '★★★★★',
				id: 'Gone-2',
			},
			{
				username: 'LudolfS',
				currentDate: '11/2/2021',
				review: 'Rhett is an idiot.',
				starRating: '★★',
				id: 'Gone-3',
			},
			{
				username: 'ShebaMovieFan',
				currentDate: '11/2/2021',
				review: 'Not a fan.',
				starRating: '★',
				id: 'Gone-4',
			},
		],
	},
	{
		id: 'Avatar',
		movieName: 'Avatar',
		releaseDate: 2009,
		movieGenre: 'Science Fiction',
		movieRating: 'PG-13',
		movieImage: AvatarImage,
	},
	{
		id: 'Titanic',
		movieName: 'Titanic',
		releaseDate: 1997,
		movieGenre: 'Romance/Disaster',
		movieRating: 'PG-13',
		movieImage: TitanicImage,
	},
	{
		id: 'StarWars',
		movieName: 'Star Wars',
		releaseDate: 1977,
		movieGenre: 'Epic Space Opera',
		movieRating: 'PG',
		movieImage: StarWarsImage,
	},
	{
		id: 'AvengersEndgame',
		movieName: 'Avengers: EndGame',
		releaseDate: 2019,
		movieGenre: 'Superhero/Science Fiction',
		movieRating: 'PG-13',
		movieImage: AvengersEndgameImage,
	},
	{
		id: 'TheSoundOfMusic',
		movieName: 'The Sound of Music',
		releaseDate: 1965,
		movieGenre: 'Musical Drama',
		movieRating: 'G',
		movieImage: TheSoundOfMuicImage,
	},
	{
		id: 'ETTheExtraTerrestrial',
		movieName: 'E.T. the Extra-Terrestrial',
		releaseDate: 1982,
		movieGenre: 'Science Fiction',
		movieRating: 'PG',
		movieImage: ETTheExtraTerrestrialImage,
	},
	{
		id: 'TheTenCommandments',
		movieName: 'The Ten Commandments',
		releaseDate: 1956,
		movieGenre: 'Epic Religious Drama',
		movieRating: 'G',
		movieImage: TheTenCommandmentsImage,
	},
	{
		id: 'DoctorZhivago',
		movieName: 'Doctor Zhivago',
		releaseDate: 1965,
		movieGenre: 'Epic Historical/Romantic Drama',
		movieRating: 'PG-13',
		movieImage: DoctorZhivagoImage,
	},
	{
		id: 'StarWarsTheForceAwakens',
		movieName: 'Star Wars: The Force Awakens',
		releaseDate: 2015,
		movieGenre: 'Epic Space Opera',
		movieRating: 'PG-13',
		movieImage: StarWarsTheForceAwakensImage,
	},
];

export default movieArray;

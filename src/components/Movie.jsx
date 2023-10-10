import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const ListItem = styled.li`
	width: 45%;
	margin-bottom: 24px;
	padding-bottom: 16px;
	box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
`;

const Poster = styled.img`
	display: block;
	width: 100%;
`;

const Title = styled.h2`
	padding: 8px 0 8px 8px;
	font-size: 16px;
	line-height: 1.6;
`;

const TipContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0 8px;
`;

const Genres = styled.ul`
	display: flex;
	flex-flow: row wrap;
	margin-top: 16px;
	padding: 0 8px;

	> li {
		margin-right: 8px;
		margin-bottom: 8px;
		padding: 3px 5px;
		background-color: #d9d9d9;
	}
`;

const Movie = ({ movie }) => {
	const { title, year, rating, genres, medium_cover_image } = movie;

	return (
		<ListItem>
			<Link to={`/detail`} state={{ movie }}>
				<Poster src={medium_cover_image} />
				<Title>{title}</Title>
				<TipContainer>
					<p className="year">개봉 {year}</p>
					<p className="rating">평점 {rating}</p>
				</TipContainer>
				<Genres>
					{/* <li>Drama</li>
					<li>Romance</li> */}

					{genres.map((genre, idx) => (
						<li key={idx}>{genre}</li>
					))}
				</Genres>
			</Link>
		</ListItem>
	);
};

export default Movie;

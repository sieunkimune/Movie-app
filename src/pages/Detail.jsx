import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const Container = styled.div`
	padding: 24px;
`;

const Poster = styled.img`
	display: block;
	width: 100%;
	border: 1px solid #d9d9d9;
`;

const Title = styled.h2`
	margin: 24px 0;
	font-size: 32px;
	line-height: 40px;
`;

const TipContainer = styled.div`
	padding: 0 8px;
	font-weight: 600;
	font-size: 16px;
	line-height: 32px;
`;

const Genres = styled.ul`
	display: flex;
	flex-flow: row wrap;
	margin-top: 16px;
	padding: 0 8px;

	> li {
		margin-right: 8px;
		margin-bottom: 8px;
		padding: 8px 16px;
		background-color: #d9d9d9;
	}
`;

const Summary = styled.p`
	margin-top: 24px;
	padding: 0 8px;
	font-size: 14px;
	line-height: 1.6;
	text-align: justify;
`;

const Button = styled.button`
	display: block;
	margin: 56px auto;
	padding: 8px 16px;
	font-size: 24px;
	background-color: #4abd6a;
	border: none;
	cursor: pointer;
	&:hover {
		background-color: #087442;
	}
`;

const Detail = () => {
	const location = useLocation();
	const { title, year, rating, genres, large_cover_image, summary } = location.state.movie;

	const navigate = useNavigate();
	const goHomeFn = () => {
		navigate('/');
	};

	return (
		<Container>
			<Poster src={large_cover_image} />
			<Title>{title}</Title>
			<TipContainer>
				<p className="year">개봉 {year}</p>
				<p className="rating">평점 {rating}</p>
			</TipContainer>
			<Genres>
				{genres.map((genre, idx) => (
					<li key={idx}>{genre}</li>
				))}
			</Genres>
			<Summary>{summary}</Summary>

			<Button onClick={goHomeFn}>View a List of Movies</Button>
		</Container>
	);
};

export default Detail;

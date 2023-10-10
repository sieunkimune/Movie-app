import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import poster from './../asset/poster.jpg';

const About = () => {
	const Container = styled.div`
		padding: 20px;
	`;

	const SubTit = styled.h2`
		height: 24px;
		margin-bottom: 24px;
	`;

	const Desc = styled.p`
		font-size: 16px;
		line-height: 1.6;
	`;

	const Button = styled.button`
		display: block;
		margin: 56px auto;
		padding: 8px 16px;
		font-size: 24px;
		border: 1px solid #ccc;
		cursor: pointer;

		&:hover {
			background-color: #ccc;
		}
	`;

	const Poster = styled.div`
		height: 250px;
		background-image: url(${poster});
		background-position: center center;
		background-size: cover;
	`;

	const navigate = useNavigate();

	return (
		<>
			<Container>
				<SubTit>WM is ...</SubTit>
				<Desc>
					WM is short for What movies and is a movie recommendation site that recommends movies to
					you. I recommend it differently every day, so you can continue to use it. Some of the
					movies recommended are new and some are old. Get recommendations and watch various movies!
				</Desc>
				<Button
					onClick={() => {
						navigate('/');
					}}
				>
					View a List of Movies
				</Button>
			</Container>

			<Poster />
		</>
	);
};

export default About;

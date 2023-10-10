import React, { useEffect, useState } from 'react';
import Movie from '../components/Movie';
import { styled } from 'styled-components';

import loading from './../asset/loading.gif';

const Loading = styled.div`
	position: fixed;
	left: 50%;
	top: 50%;
	width: 64px;
	height: 64px;
	text-indent: -9999px;
	background-image: url(${loading});
	background-size: cover;
	transform: translate(-50%, -60%);
`;

const List = styled.ul`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
`;

const Home = () => {
	const [isLoading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);

	//비동기 작업으로 '영화데이터' 다운로드 작업 - AJAX
	const getMovies = async () => {
		const data = await (await fetch(`https://yts-proxy.now.sh/list_movies.json`)).json();

		// console.log(data.data.movies);
		setMovies(data.data.movies);
	};

	//useEffect()의 두번째 인자로 빈배열을 넣을 경우
	//컴포넌트가 Mount된 직후 딱 한 번만 함수를 호출한다.
	useEffect(() => {
		getMovies();

		setLoading(!isLoading);

		//영화데이터를 다운로드 받는 시간이 1초 걸린다.
		// setTimeout(() => {
		// 	setLoading(!isLoading);
		// }, 1000);
	}, []);

	if (isLoading) {
		return <Loading>로딩중...</Loading>;
	}

	return (
		<>
			{/* <h1>영화앱</h1>
			<hr />
			{[
				<h2 key={movies[0].id}>{movies[0].title}</h2>,
				<h2 key={movies[1].id}>{movies[1].title}</h2>,
				<h2 key={movies[2].id}>{movies[2].title}</h2>,
				<h2 key={movies[3].id}>{movies[3].title}</h2>,
				<h2 key={movies[4].id}>{movies[4].title}</h2>,
				<h2 key={movies[5].id}>{movies[5].title}</h2>,
			]}

			<hr />

			{
				//map()을 이용하면 반복적인 컴포넌트를 배열로 묶어서 만들 수 있다.
				movies.map((movie) => (
					<h2 key={movie.id}>{movie.title}</h2>
				))
			} */}

			{/* 
			?(옵셔널체이닝) 사용시 물음표 왼쪽에 있는 값이 
			null, undefined 이면, 오른쪽의 .map()을 더이상
			실행하지 않고 그냥 undefined만 남겨준다.
			*/}

			<List>
				{movies?.map((movie) => {
					return <Movie key={movie.id} movie={movie} />;
				})}
			</List>
		</>
	);
};

export default Home;

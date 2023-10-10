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

const Home = () => {
	const [isLoading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);

	//'영화데이터' 다운로드 작업
	const getMovies = () => {
		setMovies([
			{
				id: 55206,
				url: 'https://yts.mx/movies/the-lost-city-2005',
				imdb_code: 'tt0343996',
				title: 'The Lost City',
				title_english: 'The Lost City',
				title_long: 'The Lost City (2005)',
				slug: 'the-lost-city-2005',
				year: 2005,
				rating: 6.5,
				runtime: 144,
				genres: ['Drama', 'Romance'],
				summary:
					"In Havana, Cuba in the late 1950s, a wealthy family, one of whose sons is a prominent night-club owner, is caught in the violent transition from the oppressive regime of Batista to the oppressive Communist government of Fidel Castro. Castro's regime ultimately leads the night-club owner to flee to New York City.",
				description_full:
					"In Havana, Cuba in the late 1950s, a wealthy family, one of whose sons is a prominent night-club owner, is caught in the violent transition from the oppressive regime of Batista to the oppressive Communist government of Fidel Castro. Castro's regime ultimately leads the night-club owner to flee to New York City.",
				synopsis:
					"In Havana, Cuba in the late 1950s, a wealthy family, one of whose sons is a prominent night-club owner, is caught in the violent transition from the oppressive regime of Batista to the oppressive Communist government of Fidel Castro. Castro's regime ultimately leads the night-club owner to flee to New York City.",
				yt_trailer_code: 'Ox9QbPf1SA4',
				language: 'en',
				mpa_rating: 'R',
				background_image: 'https://yts.mx/assets/images/movies/the_lost_city_2005/background.jpg',
				background_image_original:
					'https://yts.mx/assets/images/movies/the_lost_city_2005/background.jpg',
				small_cover_image: 'https://yts.mx/assets/images/movies/the_lost_city_2005/small-cover.jpg',
				medium_cover_image:
					'https://yts.mx/assets/images/movies/the_lost_city_2005/medium-cover.jpg',
				large_cover_image: 'https://yts.mx/assets/images/movies/the_lost_city_2005/large-cover.jpg',
				state: 'ok',
				torrents: [
					{
						url: 'https://yts.mx/torrent/download/A9526EE09B761E55A71135F751C1A88B79CA8B9B',
						hash: 'A9526EE09B761E55A71135F751C1A88B79CA8B9B',
						quality: '720p',
						type: 'web',
						is_repack: '0',
						video_codec: 'x264',
						bit_depth: '8',
						audio_channels: '2.0',
						seeds: 126,
						peers: 51,
						size: '1.3 GB',
						size_bytes: 1395864371,
						date_uploaded: '2023-09-04 15:46:00',
						date_uploaded_unix: 1693835160,
					},
					{
						url: 'https://yts.mx/torrent/download/1DAADEEABFD41C4B8B76C519A4844D42B56FC26B',
						hash: '1DAADEEABFD41C4B8B76C519A4844D42B56FC26B',
						quality: '1080p',
						type: 'web',
						is_repack: '0',
						video_codec: 'x264',
						bit_depth: '8',
						audio_channels: '5.1',
						seeds: 215,
						peers: 78,
						size: '2.66 GB',
						size_bytes: 2856153252,
						date_uploaded: '2023-09-04 17:38:56',
						date_uploaded_unix: 1693841936,
					},
				],
				date_uploaded: '2023-09-04 15:46:00',
				date_uploaded_unix: 1693835160,
			},
			{
				id: 55205,
				url: 'https://yts.mx/movies/old-flame-2022',
				imdb_code: 'tt14700390',
				title: 'Old Flame',
				title_english: 'Old Flame',
				title_long: 'Old Flame (2022)',
				slug: 'old-flame-2022',
				year: 2022,
				rating: 5.6,
				runtime: 0,
				genres: ['Action'],
				summary: '',
				description_full: '',
				synopsis: '',
				yt_trailer_code: '',
				language: 'en',
				mpa_rating: '',
				background_image: 'https://yts.mx/assets/images/movies/old_flame_2022/background.jpg',
				background_image_original:
					'https://yts.mx/assets/images/movies/old_flame_2022/background.jpg',
				small_cover_image: 'https://yts.mx/assets/images/movies/old_flame_2022/small-cover.jpg',
				medium_cover_image: 'https://yts.mx/assets/images/movies/old_flame_2022/medium-cover.jpg',
				large_cover_image: 'https://yts.mx/assets/images/movies/old_flame_2022/large-cover.jpg',
				state: 'ok',
				torrents: [
					{
						url: 'https://yts.mx/torrent/download/9997682B174E800504E3852208A233799F7F5A52',
						hash: '9997682B174E800504E3852208A233799F7F5A52',
						quality: '720p',
						type: 'web',
						is_repack: '0',
						video_codec: 'x264',
						bit_depth: '8',
						audio_channels: '2.0',
						seeds: 123,
						peers: 34,
						size: '832.93 MB',
						size_bytes: 873390408,
						date_uploaded: '2023-09-04 04:33:10',
						date_uploaded_unix: 1693794790,
					},
					{
						url: 'https://yts.mx/torrent/download/3AC2E3DAAF0FC871E087C21DFE3825D6BC4467BD',
						hash: '3AC2E3DAAF0FC871E087C21DFE3825D6BC4467BD',
						quality: '1080p',
						type: 'web',
						is_repack: '0',
						video_codec: 'x264',
						bit_depth: '8',
						audio_channels: '5.1',
						seeds: 146,
						peers: 35,
						size: '1.67 GB',
						size_bytes: 1793148846,
						date_uploaded: '2023-09-04 05:34:27',
						date_uploaded_unix: 1693798467,
					},
				],
				date_uploaded: '2023-09-04 04:33:10',
				date_uploaded_unix: 1693794790,
			},
			{
				id: 55204,
				url: 'https://yts.mx/movies/knights-of-sidonia-the-movie-2015',
				imdb_code: 'tt6912714',
				title: 'Knights of Sidonia: The Movie',
				title_english: 'Knights of Sidonia: The Movie',
				title_long: 'Knights of Sidonia: The Movie (2015)',
				slug: 'knights-of-sidonia-the-movie-2015',
				year: 2015,
				rating: 6.7,
				runtime: 134,
				genres: ['Action', 'Adventure', 'Animation', 'Sci-Fi'],
				summary: '',
				description_full: '',
				synopsis: '',
				yt_trailer_code: 'FEIp8XK0gCw',
				language: 'ja',
				mpa_rating: '',
				background_image:
					'https://yts.mx/assets/images/movies/knights_of_sidonia_the_movie_2015/background.jpg',
				background_image_original:
					'https://yts.mx/assets/images/movies/knights_of_sidonia_the_movie_2015/background.jpg',
				small_cover_image:
					'https://yts.mx/assets/images/movies/knights_of_sidonia_the_movie_2015/small-cover.jpg',
				medium_cover_image:
					'https://yts.mx/assets/images/movies/knights_of_sidonia_the_movie_2015/medium-cover.jpg',
				large_cover_image:
					'https://yts.mx/assets/images/movies/knights_of_sidonia_the_movie_2015/large-cover.jpg',
				state: 'ok',
				torrents: [
					{
						url: 'https://yts.mx/torrent/download/34137A09CF74603C72190D697827E7C0FF3EBC8F',
						hash: '34137A09CF74603C72190D697827E7C0FF3EBC8F',
						quality: '720p',
						type: 'bluray',
						is_repack: '0',
						video_codec: 'x264',
						bit_depth: '8',
						audio_channels: '2.0',
						seeds: 147,
						peers: 29,
						size: '1.2 GB',
						size_bytes: 1288490189,
						date_uploaded: '2023-09-04 02:22:03',
						date_uploaded_unix: 1693786923,
					},
					{
						url: 'https://yts.mx/torrent/download/1783DDBA2C2C2AED121C5F1F309749B5109527BC',
						hash: '1783DDBA2C2C2AED121C5F1F309749B5109527BC',
						quality: '1080p',
						type: 'bluray',
						is_repack: '0',
						video_codec: 'x264',
						bit_depth: '8',
						audio_channels: '5.1',
						seeds: 227,
						peers: 40,
						size: '2.47 GB',
						size_bytes: 2652142305,
						date_uploaded: '2023-09-04 03:58:54',
						date_uploaded_unix: 1693792734,
					},
				],
				date_uploaded: '2023-09-04 02:22:03',
				date_uploaded_unix: 1693786923,
			},
			{
				id: 55203,
				url: 'https://yts.mx/movies/the-danger-of-love-the-carolyn-warmus-story-1992',
				imdb_code: 'tt0104050',
				title: 'The Danger of Love: The Carolyn Warmus Story',
				title_english: 'The Danger of Love: The Carolyn Warmus Story',
				title_long: 'The Danger of Love: The Carolyn Warmus Story (1992)',
				slug: 'the-danger-of-love-the-carolyn-warmus-story-1992',
				year: 1992,
				rating: 5,
				runtime: 94,
				genres: ['Thriller'],
				summary: '',
				description_full: '',
				synopsis: '',
				yt_trailer_code: 'OaQqwndH9x4',
				language: 'en',
				mpa_rating: 'R',
				background_image:
					'https://yts.mx/assets/images/movies/the_danger_of_love_the_carolyn_warmus_story_1992/background.jpg',
				background_image_original:
					'https://yts.mx/assets/images/movies/the_danger_of_love_the_carolyn_warmus_story_1992/background.jpg',
				small_cover_image:
					'https://yts.mx/assets/images/movies/the_danger_of_love_the_carolyn_warmus_story_1992/small-cover.jpg',
				medium_cover_image:
					'https://yts.mx/assets/images/movies/the_danger_of_love_the_carolyn_warmus_story_1992/medium-cover.jpg',
				large_cover_image:
					'https://yts.mx/assets/images/movies/the_danger_of_love_the_carolyn_warmus_story_1992/large-cover.jpg',
				state: 'ok',
				torrents: [
					{
						url: 'https://yts.mx/torrent/download/A32E75D86D27048C78E9EA73EB1ED2CDBE145F59',
						hash: 'A32E75D86D27048C78E9EA73EB1ED2CDBE145F59',
						quality: '720p',
						type: 'web',
						is_repack: '0',
						video_codec: 'x264',
						bit_depth: '8',
						audio_channels: '2.0',
						seeds: 97,
						peers: 36,
						size: '802.97 MB',
						size_bytes: 841975071,
						date_uploaded: '2023-09-03 12:19:10',
						date_uploaded_unix: 1693736350,
					},
					{
						url: 'https://yts.mx/torrent/download/0A8530984CE67B0E6BAC2890324287DE59DFFF57',
						hash: '0A8530984CE67B0E6BAC2890324287DE59DFFF57',
						quality: '1080p',
						type: 'web',
						is_repack: '0',
						video_codec: 'x264',
						bit_depth: '8',
						audio_channels: '2.0',
						seeds: 97,
						peers: 27,
						size: '1.45 GB',
						size_bytes: 1556925645,
						date_uploaded: '2023-09-03 13:10:18',
						date_uploaded_unix: 1693739418,
					},
				],
				date_uploaded: '2023-09-03 12:19:10',
				date_uploaded_unix: 1693736350,
			},
			{
				id: 55202,
				url: 'https://yts.mx/movies/the-rain-bride-2022',
				imdb_code: 'tt10788416',
				title: 'The Rain Bride',
				title_english: 'The Rain Bride',
				title_long: 'The Rain Bride (2022)',
				slug: 'the-rain-bride-2022',
				year: 2022,
				rating: 4.4,
				runtime: 97,
				genres: ['Drama'],
				summary: '',
				description_full: '',
				synopsis: '',
				yt_trailer_code: 'fVAPwhThb_k',
				language: 'ku',
				mpa_rating: '',
				background_image: 'https://yts.mx/assets/images/movies/the_rain_bride_2022/background.jpg',
				background_image_original:
					'https://yts.mx/assets/images/movies/the_rain_bride_2022/background.jpg',
				small_cover_image:
					'https://yts.mx/assets/images/movies/the_rain_bride_2022/small-cover.jpg',
				medium_cover_image:
					'https://yts.mx/assets/images/movies/the_rain_bride_2022/medium-cover.jpg',
				large_cover_image:
					'https://yts.mx/assets/images/movies/the_rain_bride_2022/large-cover.jpg',
				state: 'ok',
				torrents: [
					{
						url: 'https://yts.mx/torrent/download/E8272261FEB95D912B5869E9D0915B0A8F65E696',
						hash: 'E8272261FEB95D912B5869E9D0915B0A8F65E696',
						quality: '720p',
						type: 'web',
						is_repack: '0',
						video_codec: 'x264',
						bit_depth: '8',
						audio_channels: '2.0',
						seeds: 32,
						peers: 8,
						size: '869.66 MB',
						size_bytes: 911904604,
						date_uploaded: '2023-09-03 13:38:25',
						date_uploaded_unix: 1693741105,
					},
					{
						url: 'https://yts.mx/torrent/download/55106079CB867FD9640ED5425BD5905BF19EC500',
						hash: '55106079CB867FD9640ED5425BD5905BF19EC500',
						quality: '1080p',
						type: 'web',
						is_repack: '0',
						video_codec: 'x264',
						bit_depth: '8',
						audio_channels: '5.1',
						seeds: 45,
						peers: 10,
						size: '1.75 GB',
						size_bytes: 1879048192,
						date_uploaded: '2023-09-03 14:37:43',
						date_uploaded_unix: 1693744663,
					},
				],
				date_uploaded: '2023-09-03 13:38:25',
				date_uploaded_unix: 1693741105,
			},
			{
				id: 55201,
				url: 'https://yts.mx/movies/passenger-side-2009',
				imdb_code: 'tt1227170',
				title: 'Passenger Side',
				title_english: 'Passenger Side',
				title_long: 'Passenger Side (2009)',
				slug: 'passenger-side-2009',
				year: 2009,
				rating: 5.9,
				runtime: 85,
				genres: ['Comedy', 'Drama'],
				summary:
					"Michael Brown's birthday begins with a telephone call from his estranged, drug addicted brother Tobey. Tobey is totally unaware that it is his older brother's birthday, but he is very aware that his car is broken, and he begs Michael to drive him on various apparently legitimate, vital errands. As Bruce Springsteen has astutely noted, \"a man who turns his back on his family just ain't no good\". So Michael puts off his seemingly romantic birthday plans, and with his brother embarks on a sketchy, meandering day long odyssey though the mysteries of Los Angeles County. As the day wears on, it becomes clear that this drive will lead them to some very unexpected destinations.—Passenger Side",
				description_full:
					"Michael Brown's birthday begins with a telephone call from his estranged, drug addicted brother Tobey. Tobey is totally unaware that it is his older brother's birthday, but he is very aware that his car is broken, and he begs Michael to drive him on various apparently legitimate, vital errands. As Bruce Springsteen has astutely noted, \"a man who turns his back on his family just ain't no good\". So Michael puts off his seemingly romantic birthday plans, and with his brother embarks on a sketchy, meandering day long odyssey though the mysteries of Los Angeles County. As the day wears on, it becomes clear that this drive will lead them to some very unexpected destinations.—Passenger Side",
				synopsis:
					"Michael Brown's birthday begins with a telephone call from his estranged, drug addicted brother Tobey. Tobey is totally unaware that it is his older brother's birthday, but he is very aware that his car is broken, and he begs Michael to drive him on various apparently legitimate, vital errands. As Bruce Springsteen has astutely noted, \"a man who turns his back on his family just ain't no good\". So Michael puts off his seemingly romantic birthday plans, and with his brother embarks on a sketchy, meandering day long odyssey though the mysteries of Los Angeles County. As the day wears on, it becomes clear that this drive will lead them to some very unexpected destinations.—Passenger Side",
				yt_trailer_code: 'rM-AiVu4JDg',
				language: 'en',
				mpa_rating: '',
				background_image: 'https://yts.mx/assets/images/movies/passenger_side_2009/background.jpg',
				background_image_original:
					'https://yts.mx/assets/images/movies/passenger_side_2009/background.jpg',
				small_cover_image:
					'https://yts.mx/assets/images/movies/passenger_side_2009/small-cover.jpg',
				medium_cover_image:
					'https://yts.mx/assets/images/movies/passenger_side_2009/medium-cover.jpg',
				large_cover_image:
					'https://yts.mx/assets/images/movies/passenger_side_2009/large-cover.jpg',
				state: 'ok',
				torrents: [
					{
						url: 'https://yts.mx/torrent/download/3EE5B4D946AA0F6C4B3D41E0FB5C3A35BD258137',
						hash: '3EE5B4D946AA0F6C4B3D41E0FB5C3A35BD258137',
						quality: '720p',
						type: 'web',
						is_repack: '0',
						video_codec: 'x264',
						bit_depth: '8',
						audio_channels: '2.0',
						seeds: 79,
						peers: 20,
						size: '778.55 MB',
						size_bytes: 816368845,
						date_uploaded: '2023-09-03 08:17:16',
						date_uploaded_unix: 1693721836,
					},
					{
						url: 'https://yts.mx/torrent/download/0D1A1B7E98D447806A0D4F99A3EF252F2495878C',
						hash: '0D1A1B7E98D447806A0D4F99A3EF252F2495878C',
						quality: '1080p',
						type: 'web',
						is_repack: '0',
						video_codec: 'x264',
						bit_depth: '8',
						audio_channels: '5.1',
						seeds: 141,
						peers: 13,
						size: '1.56 GB',
						size_bytes: 1675037245,
						date_uploaded: '2023-09-03 09:18:22',
						date_uploaded_unix: 1693725502,
					},
				],
				date_uploaded: '2023-09-03 08:17:16',
				date_uploaded_unix: 1693721836,
			},
		]);
	};

	//useEffect()의 두번째 인자로 빈배열을 넣을 경우
	//컴포넌트가 Mount된 직후 딱 한 번만 함수를 호출한다.
	useEffect(() => {
		getMovies();

		//영화데이터를 다운로드 받는 시간이 1초 걸린다.
		setTimeout(() => {
			setLoading(!isLoading);
		}, 1000);
	}, []);

	if (isLoading) {
		return <Loading>로딩중...</Loading>;
	}

	const List = styled.ul`
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
	`;

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

			<List>
				{movies.map((movie) => {
					return <Movie key={movie.id} movie={movie} />;
				})}
			</List>
		</>
	);
};

export default Home;

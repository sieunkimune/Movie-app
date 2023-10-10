import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// const basename = 'process.env.PUBLIC_URL';
// github 배포시 basename 설정 필수
// 도메인의 하위폴더에 react-router 배포시 이슈 해결법

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter basename={process.env.PUBLIC_URL}>
		<App />
	</BrowserRouter>
);

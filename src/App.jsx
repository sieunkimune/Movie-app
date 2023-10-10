import React from 'react';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import About from './pages/About';
import Detail from './pages/Detail';

const App = () => {
	return (
		<Routes>
			<Route path={`/`} element={<Layout />}>
				<Route index element={<Home />} />
				<Route path={`/about`} element={<About />} />
				<Route path={`/detail`} element={<Detail />} />
			</Route>
		</Routes>
	);
};

export default App;

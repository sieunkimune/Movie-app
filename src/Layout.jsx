import React from 'react';
import { createGlobalStyle, styled } from 'styled-components';
import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';

const GlobalStyle = createGlobalStyle`
html,
body {
   width: 100%;
   height: 100%;
}

html,
body,
div,
span,
h1,
h2,
h3,
h4,
h5,
h6,
small,
p,
blockquote,
q,
address,
strong,
em,
img,
video,
ul,
ol,
li,
dl,
dt,
dd,
a,
figure,
figcaption,
mark,
i,
b,
header,
section,
article,
footer,
nav,
aside,
table,
thead,
tbody,
tfoot,
tr,
th,
td {
   margin: 0;
   padding: 0;
   border: 0;
}

table {
   border-collapse: collapse;
}

ul,
ol,
li {
   list-style: none;
}
address,
em {
   font-style: normal;
}

hr,
caption {
   display: none;
}

a:link,
a:visited,
a:hover,
a:active {
   color: #222;
   text-decoration: none;
}

q {
   /* 인용따옴표 제거 */
   quotes: none;
}

body {
   color: #222;
   font-weight: 300;
   font-size: 13px;
   font-family: 'Noto Sans KR', 돋움, 굴림;
}

.text-center {
   height: 100px;
   line-height: 100px;
   text-align: center;
}

.blind {
   display: none;
}

`;

const Header = styled.header`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 72px;
	background-color: #fff;
	box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
`;

const Title = styled.h1`
	position: absolute;
	left: 7%;
	top: 50%;
	font-size: 24px;
	transform: translate(0, -50%);
`;

const Section = styled.section`
	padding: 104px 7%;
	box-sizing: border-box;
`;

const Footer = styled.footer`
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	background-color: #d879de;
`;

const Copyright = styled.address`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 96px;
	color: #fff;
`;

const Layout = () => {
	return (
		<>
			<GlobalStyle />
			<Header>
				<Title>WM</Title>
				<Navigation />
			</Header>
			<hr />
			<Section>
				<Outlet />
			</Section>
			<hr />
			<Footer>
				<Copyright>Copyright © 2023.김시은.All rights reserved.</Copyright>
			</Footer>
		</>
	);
};

export default Layout;

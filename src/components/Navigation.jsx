import React from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

const Nav = styled.nav`
	position: absolute;
	right: 7%;
	top: 50%;
	transform: translate(0, -50%);

	> a {
		font-size: 14px;

		&.on {
			font-weight: 600;
		}

		&:nth-of-type(1) {
			margin-right: 20px;
		}
	}
`;

const Navigation = () => {
	return (
		<div>
			<Nav>
				<NavLink to={'/'} className={({ isActive }) => (isActive ? 'on' : undefined)}>
					Home
				</NavLink>
				<NavLink to={'/about'} className={({ isActive }) => (isActive ? 'on' : undefined)}>
					About
				</NavLink>
			</Nav>
		</div>
	);
};

export default Navigation;

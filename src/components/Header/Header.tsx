import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import styles from './Header.module.css';

const Header: React.FC = () => {
	const totalBoxes = useSelector((state: RootState) => state.marble.boxes.length);
	const totalMarbles = useSelector((state: RootState) => state.marble.totalMarbles);

	return (
		<header className={styles.header}>
			<h1>Marble Boxes</h1>
			<p>Boxes count: {totalBoxes} | Marbles count: {totalMarbles}</p>
		</header>
	);
};

export default Header;

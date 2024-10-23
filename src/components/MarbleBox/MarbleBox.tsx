import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementMarbles, decrementMarbles, removeBox } from '../../store/marbleSlice';
import type { AppDispatch } from '../../store/store';
import HoldButton from '../HoldButton/HoldButton';
import styles from './MarbleBox.module.css';

interface MarbleBoxProps {
	id: number;
	marbles: number;
}

const MarbleBox: React.FC<MarbleBoxProps> = ({ id, marbles }) => {
	const dispatch = useDispatch<AppDispatch>();

	return (
		<div className={styles.marbleBox}>
			{/* Decrement Button */}
			<HoldButton onClick={() => dispatch(decrementMarbles(id))} onHold={() => dispatch(decrementMarbles(id))}>
				-
			</HoldButton>

			{/* Marble Count */}
			<p className={styles.marblesCount}>{marbles}</p>

			{/* Increment Button */}
			<HoldButton onClick={() => dispatch(incrementMarbles(id))} onHold={() => dispatch(incrementMarbles(id))}>
				+
			</HoldButton>

			{/* Delete Button */}
			<button onClick={() => dispatch(removeBox(id))} className={styles.deleteButton}>
				Delete
			</button>
		</div>
	);
};

export default MarbleBox;

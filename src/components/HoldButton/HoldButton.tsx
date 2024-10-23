import React, { useEffect, useRef, MouseEventHandler } from 'react';
import styles from './HoldButton.module.css';

interface HoldButtonProps {
	onClick: () => void;
	onHold: () => void;
	children: React.ReactNode;
}

const HoldButton: React.FC<HoldButtonProps> = ({ onClick, onHold, children }) => {
	const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
	const isHolding = useRef(false);

	const startHold = () => {
		isHolding.current = true;
		timer.current = setTimeout(() => {
			if (isHolding.current) {
				onHold();
				timer.current = setInterval(onHold, 100);
			}
		}, 500);
	};

	const stopHold = () => {
		isHolding.current = false;
		if (timer.current) {
			clearTimeout(timer.current);
			timer.current = null;
		}
	};

	const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
		e.preventDefault();
		onClick();
	};

	useEffect(() => {
		return () => stopHold();
	}, []);

	return (
		<button
			className={styles.holdButton}
			onMouseDown={startHold}
			onMouseUp={stopHold}
			onMouseLeave={stopHold}
			onClick={handleClick}
		>
			{children}
		</button>
	);
};

export default HoldButton;

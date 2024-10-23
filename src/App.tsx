import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from './store/store';
import { addBox } from './store/marbleSlice';
import Header from './components/Header/Header';
import MarbleBox from './components/MarbleBox/MarbleBox';
import './App.css';

const App: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();
	const boxes = useSelector((state: RootState) => state.marble.boxes);

	return (
		<div className="App">
			<Header />
			<button onClick={() => dispatch(addBox())} className="addBoxButton">
				Add New Box
			</button>
			<div className="marbleBoxes">
				{boxes.map(box => (
					<MarbleBox key={box.id} id={box.id} marbles={box.marbles} />
				))}
			</div>
		</div>
	);
};

export default App;

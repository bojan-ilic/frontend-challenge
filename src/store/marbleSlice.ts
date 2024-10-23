import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MarbleBox {
	id: number;
	marbles: number;
}

interface MarbleState {
	boxes: MarbleBox[];
	totalMarbles: number;
}

const initialState: MarbleState = {
	boxes: [],
	totalMarbles: 0,
};

const marbleSlice = createSlice({
	name: 'marble',
	initialState,
	reducers: {
		addBox: (state) => {
			const newBox: MarbleBox = { id: Date.now(), marbles: 0 };
			state.boxes.push(newBox);
		},
		removeBox: (state, action: PayloadAction<number>) => {
			state.boxes = state.boxes.filter(box => box.id !== action.payload);
			state.totalMarbles = state.boxes.reduce((sum, box) => sum + box.marbles, 0);
		},
		incrementMarbles: (state, action: PayloadAction<number>) => {
			const box = state.boxes.find(box => box.id === action.payload);
			if (box) {
				box.marbles += 1;
				state.totalMarbles += 1;
			}
		},
		decrementMarbles: (state, action: PayloadAction<number>) => {
			const box = state.boxes.find(box => box.id === action.payload);
			if (box && box.marbles > 0) {
				box.marbles -= 1;
				state.totalMarbles -= 1;
			}
		},
	},
});

export const { addBox, removeBox, incrementMarbles, decrementMarbles } = marbleSlice.actions;
export default marbleSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
    isOpenAdd: boolean;
    edit: {
        isOpen: boolean;
        id: number;
    };
}

const initialState: CounterState = {
    isOpenAdd: false,
    edit: {
        isOpen: false,
        id: 0,
    },
};

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        toggleAddProject(state) {
            state.isOpenAdd = !state.isOpenAdd;
        },
        handleEditProject(state, action: PayloadAction<number | null>) {
            state.edit.isOpen = !state.edit.isOpen;
            if (action.payload) {
                state.edit.id = action.payload;
            }
        },
    },
});

// Action creators are generated for each case reducer function
export const { toggleAddProject, handleEditProject } = modalSlice.actions;

export default modalSlice.reducer;

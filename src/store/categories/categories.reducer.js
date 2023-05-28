import { createSlice } from "@reduxjs/toolkit";

const CATEGORIES_INITITAL_STATE = {
  categoriesArray: [],
  // isLoading: false,
  // error: null,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: CATEGORIES_INITITAL_STATE,
  reducers: {
    setCategories(state, { payload }) {
      state.categoriesArray = payload;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;

// import { CATEGORIES_ACTION_TYPES } from "./categories.types";

// const CATEGORIES_INITITAL_STATE = {
//   categoriesArray: [],
//   isLoading: false,
//   error: null,
// };

// export const categoriesReducer = (
//   state = CATEGORIES_INITITAL_STATE,
//   action = {}
// ) => {
//   const { type, payload } = action;

//   switch (type) {
//     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
//       return { ...state, categoriesArray: payload, isLoading: false };
//     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
//       return { ...state, isLoading: true };
//     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
//       return { ...state, error: payload, isLoading: false };
//     default:
//       return state;
//   }
// };

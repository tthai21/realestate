import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  email: null,
  likedHouses: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    logoutUser(state) {
      state.name = null;
      state.email = null;
      state.likedHouses = [];
    },
    likeHouse(state, action) {
      const { houseId } = action.payload;
      const index = state.likedHouses.indexOf(houseId);

      if (index === -1) {
        // houseId not in array, so add it
        state.likedHouses.push(houseId);
      } else {
        // houseId already in array, so remove it
        state.likedHouses.splice(index, 1);
      }
    },
  },
});

export const { setUser, logoutUser, likeHouse } = userSlice.actions;

export default userSlice.reducer;

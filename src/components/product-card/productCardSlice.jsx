import { createSlice } from '@reduxjs/toolkit'

export const productCardSlice = createSlice({
  name: 'counter',
  initialState: {
    slug: "",
  },
  reducers: {
    setSlug: (state,action) => {
      state.slug = action.payload
    },
  },
})

export const { setSlug } = productCardSlice.actions;

export default productCardSlice.reducer;
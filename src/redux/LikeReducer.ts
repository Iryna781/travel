import { createSlice } from "@reduxjs/toolkit";

type LikeArticlesState = {
    [id:number]: boolean
}
const initialState:LikeArticlesState = {}
export const LikeSlice = createSlice({
    name:"like",
    initialState,
    reducers:{
          addLike: (prevState, action) => ({
              ...prevState,
              [action.payload] : true
          }),
          removeLike: (prevState, action) => ({
            ...prevState,
            [action.payload] : false
        }),

    }
})
export const {addLike, removeLike} = LikeSlice.actions
export default LikeSlice.reducer
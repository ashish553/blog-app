const { createSlice } = require("@reduxjs/toolkit");

const blogSlice = createSlice({
    name: 'blogInfo',
    initialState: {
        title: 'initial',
        desc: '',
        tags: '',
        image: '',
        date: ''
    },
    reducers: {
        updateBlogDetails: (state, action) => {
            state = {...state, ...action.payload}
        }
    }
})

export const {updateBlogDetails} = blogSlice.actions;
export default blogSlice.reducer;
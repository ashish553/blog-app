const { createSlice } = require("@reduxjs/toolkit");

const blogSlice = createSlice({
    name: 'blogInfo',
    initialState: {
        details: {
            title: '',
            desc: '',
            tags: [],
            image: '',
            date: ''
        }
    },
    reducers: {
        updateBlogDetails: (state, action) => {
            console.log('action.payload',action.payload);
            state = {...action.payload}
            // state = {...state, ...{tags: 'newtag'}}
            console.log(state);
        },
        addTag: (state, action) => {
            state.tags.push(action.payload);
        }
    }
})

export const {updateBlogDetails,addTag} = blogSlice.actions;
export default blogSlice.reducer;
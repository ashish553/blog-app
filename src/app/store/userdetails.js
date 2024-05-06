const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        userDetails: {
            name: ''
        }
    },
    reducers: {
        updateUserDetails: (state, action) => {
            console.log('action.payload',action.payload);
            state = {...action.payload}
            // state = {...state, ...{tags: 'newtag'}}
            console.log(state);
        },
    }
})

export const {updateUserDetails} = userSlice.actions;
export default userSlice.reducer;
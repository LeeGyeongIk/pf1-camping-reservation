import { configureStore, createSlice } from '@reduxjs/toolkit';
import NoticeJSON from '../notice.json';

let notice = createSlice({
    name: 'notice',
    initialState: NoticeJSON.notice
})

export default configureStore({
    reducer: {
        notice: notice.reducer
    }
}) 
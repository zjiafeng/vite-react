import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
// createAsyncThunk 创建一个异步的action，这个方法触发时候会有3个状态
// pending(进行中)  fulfilled(成功) reject(失败)

import {increment} from './counterSlice'

// 发起网络请求
const loadMovicsApi = () => fetch('http://120.79.0.20:3011/mock/10')
      .then((res) => res.json())


export const loadData:any = createAsyncThunk('movic/loadData', async () => {
    let res = await loadMovicsApi()
    return res
})

export const movicSlice = createSlice({
    name: 'movic',
    initialState: {
        list: [],
        total: 0
    },
    reducers: {
        loadDataEnd(state, {payload}){
            state.list = payload
            state.total = payload.length
        }
    },
    // 可以额外触发其他slice中的数据关联
    extraReducers: {
        // [increment](state, {payload}){
        //     state.list.push(1)
        //     state.total = state.list.length
        // },
        [loadData.pending](state, {payload}){
            console.log('进行中');
        },
        [loadData.fulfilled](state, {payload}){
            console.log(payload);
        },
        [loadData.rejected](state,err){
            console.log(err);
        }
    }
})

export const {loadDataEnd} = movicSlice.actions

export default movicSlice.reducer
import  {configureStore} from '@reduxjs/toolkit'
import counterSlice from './redux-toolkit/counterSlice'
import movicSlice from './redux-toolkit/movicSlice'

export default configureStore({
    reducer: {
        counter: counterSlice,
        movic: movicSlice
    }
})
import { configureStore } from '@reduxjs/toolkit'

import winner from './winner'
import ovel from './ovel'

export default configureStore({
    reducer: {
        winner,
        ovel
    }
})
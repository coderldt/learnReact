import { configureStore } from '@reduxjs/toolkit'

import winner from './winner'

export default configureStore({
    reducer: {
        winner
    }
})
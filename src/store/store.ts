import { configureStore } from '@reduxjs/toolkit'
import { frasesSlice } from './slices/frases/frases'
// ...

export const store = configureStore({
  reducer: {
    phrasesState: frasesSlice.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import contacts from "./slices/contacts"

const preloadedState = JSON.parse(localStorage.getItem('state') || '{}')

const rootReducer = combineReducers({
	contacts
})

export const setupStore = () => {
	return configureStore({
		preloadedState,
		reducer: rootReducer
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppState = ReturnType<typeof setupStore>
export type AppDispatch = AppState['dispatch']
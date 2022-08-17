import { createSlice } from "@reduxjs/toolkit";
import { 
	initialContactsState, 
	ContactActionType, 
	ContactsActionType, 
	IContacts, 
	SearchContactsActionType, 
	DeleteContactsActionType 
} from "../types/contacts";

const contactsSlice = createSlice({
	name: 'contacts',
	initialState: initialContactsState,
	reducers: {
		setContacts(state: IContacts, action: ContactsActionType) {
			state.contacts = [...action.payload];
		},
		addNewContact(state: IContacts, action: ContactActionType) {
			state.contacts.push(action.payload);
		},
		editContact(state: IContacts, action: ContactActionType) {
			state.contacts = state.contacts.map(item => item.id == action.payload.id ? action.payload : item)
		},
		deleteContact(state: IContacts, action: DeleteContactsActionType) {
			state.contacts = state.contacts.filter(item => item.id != action.payload)
		},
		searchContacts(state: IContacts, action: SearchContactsActionType) {
			if(action.payload.length > 0) {
				state.search.results = state.contacts.filter(item => {
					const itemName = item.name.toLowerCase(); 
					const searchValue = action.payload.toLowerCase()
					if(itemName === searchValue || itemName.includes(searchValue)) {
						return item
					}
				})
				state.search.results.length == 0 ? state.search.error = true : state.search.error = false
			} else {
				state.search.error =  false
				state.search.results = []
			}
		}
	}
})

export const {
	addNewContact,
	deleteContact,
	editContact,
	searchContacts,
	setContacts
} = contactsSlice.actions;

export default contactsSlice.reducer
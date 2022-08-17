export interface IContact {
	id: string;
	name: string;
	email: string;
	phone: string;
	website: string;
}

export interface IContacts {
	contacts: IContact[];
	search: {
		error: boolean,
		results:IContact[] 
	}
}

export const initialContactsState: IContacts = {
	contacts: [],
	search: {
		error: false,
		results: []
	}
}

export type ContactActionType = {
	type: string;
	payload: IContact;
}

export type ContactsActionType = {
	type: string;
	payload: IContact[];
}

export type SearchContactsActionType = {
	type: string;
	payload: string;
}

export type DeleteContactsActionType = {
	type: string;
	payload: string;
}
import React, { ChangeEvent, createRef } from 'react'

import { useAppDispatch } from '../../store/hooks';
import { searchContacts } from '../../store/slices/contacts';

import './SearchContactsForm.css'

export default function SearchContactsForm() {
	const dispatch = useAppDispatch();
	const formRef = createRef<HTMLFormElement>();

	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.currentTarget.value;
		dispatch(searchContacts(inputValue))
	}
	
	return (
		<form className='search-contacts' ref={formRef}>
			<input className='search-contacts__input' type="text" placeholder='Поиск контактов' onChange={onInputChange} />
		</form>
	)
}
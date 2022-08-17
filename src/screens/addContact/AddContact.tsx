import React, { FormEvent } from 'react';

import { IContact } from '../../store/types/contacts';
import { addNewContact } from '../../store/slices/contacts';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import './AddContact.css';

function AddContact() {
	const dispatch = useAppDispatch();
	const contacts = useAppSelector(state => state.contacts.contacts);

	const addContactHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.target as HTMLFormElement);

		const id = contacts.length.toString(); 
		const name = formData.get('name')?.toString() || '';
		const email = formData.get('email')?.toString() || '';
		const phone = formData.get('phone')?.toString() || '';
		const website = formData.get('website')?.toString() || '';
		const websiteValid = 
			website.length != 0 && !website.includes('http://') && !website.includes('https://')
				? `https://${website}` 
				: website
		
		const newContactData: IContact = { id, email,	name,	phone, website: websiteValid	};
		dispatch(addNewContact(newContactData));
		window.location.assign('/');
	}
	
	return (
		<div className='add-contact'>
			<a className='add-contact__back' href="/">Назад</a>
			<form className='add-contact-form' onSubmit={addContactHandler}>
				<label className='add-contact__label' htmlFor="name">Name</label>
				<input required className='add-contact__input' type="text" name="name" id="name" />

				<label className='add-contact__label' htmlFor="email">E-mail</label>
				<input className='add-contact__input' type="email" name="email" id="email" />

				<label className='add-contact__label' htmlFor="phone">Phone number</label>
				<input className='add-contact__input' type="tel" name="phone" id="phone" />
				
				<label className='add-contact__label' htmlFor="website">Website</label>
				<input className='add-contact__input' type="text" name="website" id="website" />

				<input className='add-contact__submit' type="submit" value="Добавить" />
			</form>
		</div>
	)
}

export default React.memo(AddContact);
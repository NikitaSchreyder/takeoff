import React, { FormEvent } from 'react';

import { useParams } from 'react-router-dom';
import { IContact } from '../../store/types/contacts';
import { editContact } from '../../store/slices/contacts';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import NotFound from '../notFound/NotFound';

import './EditContact.css';

function Contact() {
	const { id } = useParams();
	const dispatch = useAppDispatch();
	const contact = useAppSelector(state => state.contacts.contacts.filter(item => item.id === id)[0]);

	const saveChanges = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.target as HTMLFormElement)

		const name = formData.get('name')?.toString() || '';
		const email = formData.get('email')?.toString() || '';
		const phone = formData.get('phone')?.toString() || '';
		const website = formData.get('website')?.toString() || '';
		const websiteValid = 
			website.length != 0 && !website.includes('http://') && !website.includes('https://')
				? `https://${website}` 
				: website

		const changedContactData: IContact = { id: `${id}`, email, name, phone, website: websiteValid };		
		dispatch(editContact(changedContactData));
		window.location.assign('/');
	}

	if(!contact) return <NotFound />

	return (
		<div className='edit-contact'>
			<a className='edit-contact__back' href="/">Назад</a>
			<form className='edit-contact-form' onSubmit={saveChanges}>
				<label className='edit-contact__label' htmlFor="name">Name</label>
				<input className='edit-contact__input' type="text" name="name" id="name" defaultValue={contact.name}/>

				<label className='edit-contact__label' htmlFor="email">E-mail</label>
				<input className='edit-contact__input' type="text" name="email" id="email" defaultValue={contact.email}/>

				<label className='edit-contact__label' htmlFor="phone">Phone number</label>
				<input className='edit-contact__input' type="text" name="phone" id="phone" defaultValue={contact.phone}/>

				<label className='edit-contact__label' htmlFor="website">Website</label>
				<input className='edit-contact__input' type="text" name="website" id="website" defaultValue={contact.website}/>

				<input className='edit-contact__submit' type="submit" value="Сохранить" />
			</form>
		</div>
	)
}

export default React.memo(Contact);
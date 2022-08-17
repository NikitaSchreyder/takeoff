import React, { useState } from 'react'
import { useAppDispatch } from '../../store/hooks'
import { deleteContact } from '../../store/slices/contacts'
import { IContact } from '../../store/types/contacts'

import './ContactsListItem.css'

type Props = {
	contact: IContact
}

function ContactsListItem({contact}: Props) {
	const [showDetails, setShowDetails] = useState(false);
	const { email, id, name, phone, website} = contact;

	const dispatch = useAppDispatch();
	const deleteContactHandler = () => dispatch(deleteContact(id));
	const toggleDetails = () => setShowDetails(!showDetails)

	const ContactDetails = () => (
		<div className='contacts-list__item-details'>
			{!phone && !email && !website && <p className='no-contact-data'>Нет данных</p>}
			<a className='details-item details-item__phone' href={`tel:${phone}`}>{phone}</a>
			<a className='details-item details-item__email' href={`mailto:${email}`}>{email}</a>
			<a className='details-item details-item__website' target={'_blank'} href={website}>{website}</a>
		</div>
	)

	return (
		<div className='contacts-list__item'>
			<div className='contacts-list__item-header' onClick={toggleDetails}>
				<p className='contacts-list__item-name'>{name}</p>
				<div className='contacts-list__item-actions'>
					<a className='contacts-list__item-action edit-action' href={`/edit-contact/${id}`}>Редактировать</a>
					<button className='contacts-list__item-action delete-action' onClick={deleteContactHandler}>Удалить</button>
				</div>
			</div>
			{ showDetails && <ContactDetails /> }
		</div>
	)
}

export default React.memo(ContactsListItem);
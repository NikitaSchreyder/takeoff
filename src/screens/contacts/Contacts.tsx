import React from 'react';

import { useAppSelector } from '../../store/hooks';

import ContactsListItem from '../../components/contactsListItem/ContactsListItem';
import SearchContactsForm from '../../components/searchContactsForm/SearchContactsForm';

import './Contacts.css';

function Contacts() {
  const сontacts = useAppSelector(state => state.contacts.contacts);
  const searchError = useAppSelector(state => state.contacts.search.error);
	const searchResults = useAppSelector(state => state.contacts.search.results);

	const sortedSearchResults = [...searchResults].sort((a, b) => a.name > b.name ? 1 : - 1 || 0);
	
	const contactsToShow = () => {
		if(searchError) {
			return <p>Поиск не дал результатов</p>
		}
		if(searchResults.length > 0) {	
			return sortedSearchResults.map(item => <ContactsListItem key={item.id} contact={item} />)
		} else {
			return сontacts.map(item => <ContactsListItem key={item.id} contact={item} />)
		}
	} 

	return (
		<div className='contacts'>
			<SearchContactsForm />
			<a className='contacts__new-contact' href="/add-contact">Новый контакт</a>
			<div className='contacts-list'>
				{contactsToShow()}			
			</div>
		</div>
	)
}

export default React.memo(Contacts);
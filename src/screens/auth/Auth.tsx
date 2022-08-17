import React, { FormEvent, ChangeEvent, useState } from 'react';

import { auth } from '../../services/contacts';

import './Auth.css'

function Auth() {
	const [authError, setAuthError] = useState(false);

	const onSubmit = (e: FormEvent) => {
		e.preventDefault();
		const formData = new FormData(e.target as HTMLFormElement)
		const email = formData.get('email')?.toString();
		const password = formData.get('password')?.toString();

		auth(email, password)
			.then(data => {
				if(data.status == 200) {
					const { token } = data.data;
					localStorage.setItem('token', token);
					window.location.assign('/')
				}
			})
				.catch(() => setAuthError(true))
	}

	const removeError = (e: ChangeEvent<HTMLInputElement>) => e.currentTarget.classList.remove('error') 
	
	return (
		<div className="auth">
			<p className='auth-title'>Вход</p>
			<form className='auth-form' onSubmit={onSubmit}>
				<input onChange={removeError} required name="email" type="email" className={`auth-form__input ${authError && 'error'}`} placeholder='Почта' />
				<input onChange={removeError} required name="password" type="password" className={`auth-form__input ${authError && 'error'}`} placeholder='Пароль'/>
				<input className='auth-form__submit' type="submit" value="Войти" />
			</form>
		</div>
	)
}

export default React.memo(Auth);
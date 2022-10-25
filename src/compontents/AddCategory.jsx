import { useState } from 'react';

export const AddCategory = ({ onAddSetCategories, onNewCategory }) => {
	const [inputValue, setInputValue] = useState('');

	const onInputChange = ({ target }) => {
		// console.log(event.target.value);
		// Si destructuro el event, {event}, puedo hacerlo de la siguiente forma
		// console.log(target.value);
		setInputValue(target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		console.log(inputValue);
		if (inputValue.trim().length <= 1) return;
		// onAddSetCategories((categoryes) => {
		// 	return [inputValue, ...categoryes];
		// });
		onNewCategory(inputValue.trim().toLowerCase());
		setInputValue('');
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				<input
					type="text"
					placeholder="Buscar gifs"
					value={inputValue}
					onChange={onInputChange}
				/>
			</form>
		</>
	);
};

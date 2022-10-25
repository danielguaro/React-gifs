import { AddCategory, GifGrid } from './compontents/index'; // Colocar el index es redundante(No es necesario)

import { useState } from 'react';

// import { GifGrid } from './compontents/GifGrid';


export const GifExpertApp = () => {
	const [categories, setCategories] = useState(['One Punch Man']);

	const onAddCategory = (category) => {
		console.log(category);
		// // Para evitar duplicados
		// const inCategory = categories.find((e) => {
		// 	return e === category;
		// });
		// if (!!inCategory) return;
		// Otra forma de evitar duplicado
		if (categories.includes(category)) return;
		return setCategories([category, ...categories]);

		// // Otra forma
		// return setCategories((category) => {
		// 	return [...category, 'Demon Slayer'];
		// });
	};
	console.log(categories);

	return (
		<>
			{/* titulo */}
			<h1>GifExpertApp</h1>

			{/* Input */}
			<AddCategory
				onNewCategory={(event) => onAddCategory(event)}
				// onAddSetCategories={setCategories}
			/>

			{/* Listado de Gif */}

			{categories.map((category) => (
				<GifGrid category={category} key={category} />
			))}
			{/* Gif Item */}
		</>
	);
};

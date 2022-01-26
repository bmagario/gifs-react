import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
	const baseCategories = ['Terror', 'Comedy', 'Drama'];
	const [categories, setCategories] = useState(baseCategories);

	return (
	<>
		<h1>Gif Expert App</h1>
		<AddCategory setCategories={ setCategories }/>
		<hr/>
		<ol>
			{
				categories.map(category => (
					<GifGrid 
						key={category}
						category={ category }
					></GifGrid>
				))
			}
		</ol>
	</>
	);
};

import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from '../components/GifGridItem';

export const GifGrid = ({ category }) => {

	const { data, loading } = useFetchGifs(category);

	// const [images, setImages] = useState([]);

	
	return (
		<>
			<h3>{ category }</h3>
			{ loading && <p className='animate__animated animate__flash'>Loading...</p> }
			<div className='card-grid'>
				{
					data.map(img => (
						<GifGridItem 
							key={img.id} 
							{...img}
						/>
					))
				}
			</div>
		</>
	);
};
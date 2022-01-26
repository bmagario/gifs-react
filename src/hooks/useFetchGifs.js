import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

	const [state, setState] = useState({
		data: [],
		loading: true
	});

	useEffect(() => {
		setState({
			data: [],
			loading: true
		})
		getGifs(category)
		.then(imgs => {
			setState({
				data: imgs,
				loading: false
			})
		})
		.catch((err) => {
			console.log(err);	
		});
	}, [category]);

	return state;
}
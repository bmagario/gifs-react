
export const getGifs = async( category ) => {
	const http = 'https://api.giphy.com/v1/gifs';
	const apiKey = 'Cbbw9rL7BXO76877wMldk6jlbTeiMZ5M';
	const url = `${http}/search?api_key=${apiKey}&q=${encodeURI(category)}&limit=20&offset=0&rating=g&lang=en`;
	const resp = await fetch(url);
	const { data } = await resp.json();
	const gifs = data.map((img) => {
		return {
			id: img.id,
			title: img.title,
			url: img.images?.downsized_medium.url
		}
	});
	
	return gifs;
}
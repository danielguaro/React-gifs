export const getGifs = async (category) => {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=TbOx4Qsz6v37Az201veTPzcigmERZKwT&q=${category}&limit=10`;
	const resp = await fetch(url);
	const { data } = await resp.json();
	const gifs = data.map((img) => ({
		id: img.id,
		url: img.images.downsized_medium.url,
		title: img.title,
	}));
	// console.log(gifs);
	return gifs;
};

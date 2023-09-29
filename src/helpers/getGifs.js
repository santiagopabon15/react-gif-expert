
export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/trending?api_key=OrzhoN6S8VpXtBc2UGFO9znmwIYhVCoR&q=${ category }&limit=10`;
    // peticion http
    const resp = await fetch (url);
    const {data} = await resp.json();
    
    const gifs = data.map( img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
    }));
    
    return gifs;
    }
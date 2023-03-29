export const getGifs= async(category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=x7CO1D5BCMfrLxm0dIK1N7EDHPrK4QWx&q=${category}&limit=10`;
    const resp = await fetch (url);
    const { data}= await resp.json();

    const gifs = data.map(img =>({
        id:img.id,
        title:img.title,
        url:img.images.downsized_medium.url
    }));
    
    return gifs;
}
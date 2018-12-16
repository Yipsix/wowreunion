// http://rallycoding.herokuapp.com/api/music_albums


async function fetchAlbums(){
    
    const res = await fetch('http://rallycoding.herokuapp.com/api/music_albums');
    const json = res.json();

    console.log(json);

}

fetchAlbums();
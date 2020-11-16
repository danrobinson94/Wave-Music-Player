import React from 'react';


const LibrarySong = ({song, songs, setCurrentSong, id, audioRef, isPlaying, setSongs, setIsPlaying}) => {
    const songSelectHandler = async () => {
        await setCurrentSong(song);
        audioRef.current.play();
        //Pause Icon
     

        //Add Active state
        const newSongs = songs.map((song) => {
            if(song.id === id){
                return{
                    ...song,
                    active:true,
                };
            } else {
                return {
                    ...song,
                    active: false,
                }
            }
        });
        setSongs(newSongs);

        //Check if is playing
        if (isPlaying) audioRef.current.play();
    }
    return (
        <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ""}`}>
        <img alt={song.name} src={song.cover}></img>
        <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
        </div>
        </div>
    )   
}

export default LibrarySong;
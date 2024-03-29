import React from 'react';
import LibrarySong from './LibrarySong';

const Library = ({isPlay, setIsPlay, songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus, song, setIsPlaying}) => {

    
    return (
        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
            <h2>Library</h2>
            <div className="library-songs">
            {songs.map((song) => <LibrarySong songs={songs}  setCurrentSong={setCurrentSong} song={song} id={song.id} key={song.id} audioRef={audioRef} isPlaying={isPlaying} setSongs={setSongs} setIsPlaying={setIsPlaying}/>)}
            </div>
        </div>
    )
}

export default Library;

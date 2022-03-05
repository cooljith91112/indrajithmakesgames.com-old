import { useEffect, useState } from 'react';
import './MusicPlaying.css';

const MusicPlaying = (props) => {

    const [currentMusic, setCurrentMusic] = useState(null);

    useEffect(()=>{
        getCurrentMusic();
    },[]);

    const getCurrentMusic = async () => {
        try {
            const response = await fetch('https://now-playing.experimentsofindrajith.in/currentmusic').then(res => res.json());
            setCurrentMusic(response);
        }catch(err){

        }
    }

    return (
        <div className="current-music">
            {currentMusic && <>
            <a target="_blank" title="click me to see the preview" href={currentMusic.preview_url}> 
            <img src={currentMusic.cover_images[2].url} alt="" height="32" /></a>
            </>}
        </div>
    );
}

export default MusicPlaying;
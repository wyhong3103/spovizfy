import { apiHandler } from '../apiHandler';
import { useEffect, useState } from 'react';
import '../styles/Home.css';

export const Home = ({setPageState}) => {
    //authenticate here, check if token is valid
    //if valid, setPageState = 1,
    //loading screen, start fetching
    const [msg, setMsg] = useState("");
    const grantURL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&redirect_uri=http://localhost:3000/&response_type=token&scope=user-read-private%20user-top-read%20playlist-read-private%20`;


    useEffect(
        () => {
            (async ()=>{
                const ret = await apiHandler.isValid();
                if (ret === 1){
                    setPageState(1);
                }else if (ret === -1){
                    setMsg("Something went wrong! Please try again!");
                }
            })();
        }
    ,[])

    return(
        <div className="home-page">
            <h1 className="home-title">
                Spovizfy
            </h1>
            <p className="home-desc">
                A way to experience your music with stunning visualizations that transform your favorite songs into immersive journeys.
            </p>
            <a href={grantURL} className="view-result-btn">
                START 
            </a>
            <p className='error-msg'>
                {msg}
            </p>
        </div>
    )
};
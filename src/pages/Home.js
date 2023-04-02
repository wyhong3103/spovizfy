import { apiHandler } from '../apiHandler';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { siteURL } from './siteURL';
import '../styles/Home.css';

export const Home = ({setPageState, reset}) => {
    //authenticate here, check if token is valid
    //if valid, setPageState = 1,
    //loading screen, start fetching
    const [msg, setMsg] = useState("");
    const grantURL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&redirect_uri=${siteURL}&response_type=token&scope=user-read-private%20user-top-read%20playlist-read-private%20`;
    const navigate = useNavigate();

    const login = () => {
        window.location.href = grantURL;
    }

    useEffect(
        () => {
            (async ()=>{
                const ret = await apiHandler.isValid();
                if (ret === 1){
                    setPageState(1);
                    navigate("/");
                }else if (ret === -1){
                    setMsg("Something went wrong! Please try again!");
                    reset();
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
            <button className="view-result-btn" onClick={login}>
                START 
            </button>
            <p className='error-msg'>
                {msg}
            </p>
        </div>
    )
};
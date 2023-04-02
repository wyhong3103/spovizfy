import './styles/App.css';
import { useEffect, useState } from "react";
import { apiHandler } from './apiHandler';
import { Home } from "./pages/Home";
import { Result } from "./pages/Result";
import { Loading } from './pages/Loading';

export const App = () => {
    
    //0 = home page, 1 = result page
    const [pageState, setPageState] = useState(0);
    const [info, setInfo] = useState({});

    const reset = () => {
        apiHandler.logOut();
        const url = "https://accounts.spotify.com/en/logout";
        const spotifyLogoutWindow = window.open(url, 'Spotify Logout', 'width=700,height=500,top=40,left=40')                                                                                                
        setTimeout(() => spotifyLogoutWindow.close(), 2000)
        setPageState(0);
        setInfo({});
    }

    useEffect(
        () => {
            if (pageState === 1){
                (async () => {
                    const data = await apiHandler.getData();
                    if (data.status === false){
                        setPageState(0);
                        reset();
                    }else{
                        setInfo(data.info);
                    }
                })()
            }
        }
    , [pageState])

    useEffect(
        () => {
            if (Object.keys(info).length !== 0){
                setPageState(2);
            }
        }
    , [info])

    return(
        <>
            {
                pageState === 0 ?
                <Home setPageState={setPageState} reset={reset}/>
                :
                (
                    pageState === 1 ?
                    <Loading/>
                    :
                    <Result reset={reset} info={info}/>
                )
            }
        </>
    )
};
import './styles/App.css';
import { useEffect, useState } from "react";
import { apiHandler } from './apiHandler';
import { Home } from "./pages/Home";
import { Result } from "./pages/Result";

export const App = () => {
    
    //0 = home page, 1 = result page
    const [pageState, setPageState] = useState(0);
    const [info, setInfo] = useState({});

    useEffect(
        () => {
            if (pageState === 1){
                (async () => {
                    const data = await apiHandler.getData();
                    if (data.status === false){
                        setPageState(0);
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
                <Home setPageState={setPageState}/>
                :
                (
                    pageState === 1 ?
                    null
                    :
                    <Result setPageState={setPageState} info={info}/>
                )
            }
        </>
    )
};
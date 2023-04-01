import { useState } from "react";
import { Home } from "./pages/Home";
import { Result } from "./pages/Result";

export const App = () => {
    
    //0 = home page, 1 = result page
    const [pageState, setPageState] = useState(0);

    return(
        <>
            {
                pageState === 0 ?
                <Home/>
                :
                <Result/>
            }
        </>
    )
};
import '../styles/Loading.css';
import { PuffLoader } from 'react-spinners';

export const Loading = () => {
    return(
        <div className='loading-page'>
            <PuffLoader color="#1DB954" size={100}/>
        </div>
    )
}


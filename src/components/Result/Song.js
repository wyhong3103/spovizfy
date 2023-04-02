import { useElementOnSreen } from '../../hooks/elementOnScreen';
import '../../styles/Song.css';

export const Song = ({data, title, flip}) => {
    const [containerRef, visible] = useElementOnSreen();
    return (
        <div ref={containerRef} className={`song-box ${visible ? "song-reveal" : "song-hidden"}`}>
            <h1 className={`song-box-title ${flip ? "flip-column" : null}`}>
                {title}
            </h1>
            <div className="song-list">
                {
                    data.map(
                        (item) => {
                            return(
                            <div className="song-grid">
                                <div className="song-img-box">
                                    <img src={item.img} alt="song-img" className="song-img"/>
                                </div>
                                <div className="song-detail">
                                    <h2 className='song-name'>
                                        <a href={item.link} target="_blank" rel="noreferrer">{item.name}</a>
                                    </h2>
                                    <h3 className="song-artists"> 
                                        {item.artists.join(', ')}
                                    </h3>
                                </div>
                            </div>
                            )
                        }
                    )
                }
            </div>
        </div>
    )
};
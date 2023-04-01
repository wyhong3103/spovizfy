import '../../styles/Song.css';

export const Song = ({data, title}) => {
    return (
        <div className="song-box">
            <h1 className="result-title">
                {title}
            </h1>
            <div className="song-list">
                {
                    data.map(
                        (item) => {
                            return(
                            <div className="song-grid">
                                <img src={item.img} alt="song-img" className="song-img"/>
                                <h2 className="song-name">
                                    <a href={item.link} target="_blank" rel="noreferrer">{item.name}</a>
                                </h2>
                                <h3 className="song-artists"> 
                                    {item.artists.join(', ')}
                                </h3>
                            </div>
                            )
                        }
                    )
                }
            </div>
        </div>
    )
};
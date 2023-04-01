import '../../styles/Artist.css';

export const Artist = ({data, title}) => {
    return(
        <div className="artist-box">
            <h1 className="artist-box-title">
                {title}
            </h1>
            <div className="artist-list">
                {
                    data.map(
                        (item) => {
                            return(
                                <div className="artist-card">
                                    <img src={item.img} alt="artist-avatar" className="artist-avatar"/>
                                     
                                    <h2 className="artist-name">
                                        <a href={item.link} target="_blank" rel="noreferrer">{item.name}</a>
                                    </h2>
                                    <div className="artist-genre-box">
                                        {
                                            item.genre.map(
                                                (g) => {
                                                    return(
                                                        <div className="genre-tag">
                                                            {g}
                                                        </div>
                                                    )
                                                }
                                            )
                                        }
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
import '../../styles/Genre.css';


export const Genre = ({data, title}) => {
    return(
        <div className="genre-box">
            <h1 className="genre-title">
                {title}
            </h1>
            <div className="genre-list">
                {
                    data.map(
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
};
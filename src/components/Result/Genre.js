import { useElementOnSreen } from '../../hooks/elementOnScreen';
import '../../styles/Genre.css';


export const Genre = ({data, title}) => {
    const [containerRef, visible] = useElementOnSreen();

    return(
        <div ref={containerRef} className={`genre-box ${visible ? "genre-reveal" : "genre-hidden"}`}>
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
import { useElementOnSreen } from '../../hooks/elementOnScreen';
import '../../styles/Greeting.css';

export const Greeting = ({data}) => {
    const [containerRef, visible] = useElementOnSreen();
    return(
        <div ref={containerRef} className={`greeting-box ${visible ? "greeting-reveal" : "greeting-hidden"}`}>
            <h1 className="greeting">Hi, <span className='green-span'>{data.name}</span></h1>
            <img src={data.pfp} alt="user-avatar" className="user-avatar"/>
            <p>
                This is your <span className="green-span">Vizfy</span> report.
            </p>
        </div>
    )
};
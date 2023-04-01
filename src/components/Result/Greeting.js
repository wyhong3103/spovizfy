import '../../styles/Greeting.css';

export const Greeting = ({data}) => {
    return(
        <div className="greeting-box">
            <h1 className="greeting">Hi, <span className='green-span'>{data.name}</span></h1>
            <img src={data.pfp} alt="user-avatar" className="user-avatar"/>
            <p>
                This is your <span className="green-span">Spovizfy</span> report.
            </p>
        </div>
    )
};
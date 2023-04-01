export const Greeting = ({data}) => {
    return(
        <div className="greeting-box">
            <h1 className="greeting">Hi, {data.name}</h1>
            <img src={data.pfp} alt="user-avatar" className="user-avatar"/>
            <p>
                This is your Spovizfy report.
            </p>
        </div>
    )
};
import '../styles/Home.css';

export const Home = ({setPageState}) => {
    return(
        <div className="home-page">
            <h1 className="home-title">
                Spovizfy
            </h1>
            <p className="home-desc">
                A way to experience your music with stunning visualizations that transform your favorite songs into immersive journeys.
            </p>
            <button className="view-result-btn">
                Start 
            </button>
        </div>
    )
};
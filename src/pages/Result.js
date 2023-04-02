import '../styles/Result.css';
import { Artist } from "../components/Result/Artist";
import { Genre } from "../components/Result/Genre";
import { Greeting } from "../components/Result/Greeting";
import { Song } from "../components/Result/Song";
import { Treemap } from "../components/Result/Treemap";
import { useEffect } from 'react';

export const Result = ({info}) => {
    return(
        <div className="result-page">
            <Greeting data={info.personal}/>
            <Song data={info.top10_songs} title="Your Top 10 Tracks" flip={0}/>
            <Artist data={info.top10_artists} title="Your Top 10 Artists"/>
            <Treemap data={info.artist_treemap_data} title="Your Favorite Artists"/>
            <Genre data={info.top5_genre} title="Your Top 5 Genres"/>
            <Treemap data={info.genre_treemap_data} title="Your Favourite Genre"/>
            <Song data={info.recommended_songs} title="Recommended Tracks Just for You" flip={1}/>
            {/* try again button */}
        </div>
    );
};
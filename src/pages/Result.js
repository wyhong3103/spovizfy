import '../styles/Result.css';
import { Artist } from "../components/Result/Artist";
import { Genre } from "../components/Result/Genre";
import { Greeting } from "../components/Result/Greeting";
import { Song } from "../components/Result/Song";
import { Treemap } from "../components/Result/Treemap";
import { useState } from "react";

export const Result = () => {
    const [info, setInfo] = useState(
        {
            personal : {
                name : "test",
                pfp : "https://www.booksie.com/files/profiles/22/mr-anonymous.png"
            },
            top10_songs : [
                {
                    name : "Test",
                    img : "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQOVufU8wxA_MXq8h8JjEeekVsT86vNL3AZIBYWdQuJF9n_7wTJixKUm8Qf_u8ilvAn6sOtqDmEQXmPMyI",
                    artists : ["artist 1", "artist 2"],
                    link : "https://www.youtube.com/"
                },
                {
                    name : "Test",
                    img : "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQOVufU8wxA_MXq8h8JjEeekVsT86vNL3AZIBYWdQuJF9n_7wTJixKUm8Qf_u8ilvAn6sOtqDmEQXmPMyI",
                    artists : ["artist 1", "artist 2"],
                    link : "https://www.youtube.com/"
                },
                {
                    name : "Test",
                    img : "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQOVufU8wxA_MXq8h8JjEeekVsT86vNL3AZIBYWdQuJF9n_7wTJixKUm8Qf_u8ilvAn6sOtqDmEQXmPMyI",
                    artists : ["artist 1", "artist 2"],
                    link : "https://www.youtube.com/"
                },
                {
                    name : "Test",
                    img : "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQOVufU8wxA_MXq8h8JjEeekVsT86vNL3AZIBYWdQuJF9n_7wTJixKUm8Qf_u8ilvAn6sOtqDmEQXmPMyI",
                    artists : ["artist 1", "artist 2"],
                    link : "https://www.youtube.com/"
                },
                {
                    name : "Test",
                    img : "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQOVufU8wxA_MXq8h8JjEeekVsT86vNL3AZIBYWdQuJF9n_7wTJixKUm8Qf_u8ilvAn6sOtqDmEQXmPMyI",
                    artists : ["artist 1", "artist 2"],
                    link : "https://www.youtube.com/"
                },
                {
                    name : "Test",
                    img : "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQOVufU8wxA_MXq8h8JjEeekVsT86vNL3AZIBYWdQuJF9n_7wTJixKUm8Qf_u8ilvAn6sOtqDmEQXmPMyI",
                    artists : ["artist 1", "artist 2"],
                    link : "https://www.youtube.com/"
                },

            ],
            top10_artists : [
                {
                    name : "Artist 1",
                    img : "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQOVufU8wxA_MXq8h8JjEeekVsT86vNL3AZIBYWdQuJF9n_7wTJixKUm8Qf_u8ilvAn6sOtqDmEQXmPMyI",
                    link : "www.google.com",
                    genre : ["genre 1", "genre 2"]
                },
                {
                    name : "Artist 1",
                    img : "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQOVufU8wxA_MXq8h8JjEeekVsT86vNL3AZIBYWdQuJF9n_7wTJixKUm8Qf_u8ilvAn6sOtqDmEQXmPMyI",
                    link : "www.google.com",
                    genre : ["genre 1", "genre 2"]
                },
                {
                    name : "Artist 1",
                    img : "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQOVufU8wxA_MXq8h8JjEeekVsT86vNL3AZIBYWdQuJF9n_7wTJixKUm8Qf_u8ilvAn6sOtqDmEQXmPMyI",
                    link : "www.google.com",
                    genre : ["genre 1", "genre 2"]
                },
                {
                    name : "Artist 1",
                    img : "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQOVufU8wxA_MXq8h8JjEeekVsT86vNL3AZIBYWdQuJF9n_7wTJixKUm8Qf_u8ilvAn6sOtqDmEQXmPMyI",
                    link : "www.google.com",
                    genre : ["genre 1", "genre 2"]
                },
                {
                    name : "Artist 1",
                    img : "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQOVufU8wxA_MXq8h8JjEeekVsT86vNL3AZIBYWdQuJF9n_7wTJixKUm8Qf_u8ilvAn6sOtqDmEQXmPMyI",
                    link : "www.google.com",
                    genre : ["genre 1", "genre 2"]
                },
                {
                    name : "Artist 1",
                    img : "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQOVufU8wxA_MXq8h8JjEeekVsT86vNL3AZIBYWdQuJF9n_7wTJixKUm8Qf_u8ilvAn6sOtqDmEQXmPMyI",
                    link : "www.google.com",
                    genre : ["genre 1", "genre 2"]
                },
            ],
            artist_treemap_data : [
                {
                    x : "test 1",
                    y : 2
                },
                {
                    x : "test 1",
                    y : 3
                },
                {
                    x : "test 1",
                    y : 1
                },
                {
                    x : "test 1",
                    y : 1
                },
                {
                    x : "test 1",
                    y : 1
                },
                {
                    x : "test 1",
                    y : 1
                },
                {
                    x : "test 1",
                    y : 1
                },
            ],
            top5_genre : [
                "Genre 1",
                "Genre 2",
                "Genre 2",
                "Genre 3",
                "Genre 3",
            ],
            genre_treemap_data : [
                {
                    x : "test 1",
                    y : 2
                },
                {
                    x : "test 1",
                    y : 3
                },
                {
                    x : "test 1",
                    y : 1
                },
                {
                    x : "test 1",
                    y : 1
                },
                {
                    x : "test 1",
                    y : 1
                },
                {
                    x : "test 1",
                    y : 1
                },
                {
                    x : "test 1",
                    y : 1
                },
            ],
            recommended_songs : [
                {
                    name : "Test",
                    img : "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQOVufU8wxA_MXq8h8JjEeekVsT86vNL3AZIBYWdQuJF9n_7wTJixKUm8Qf_u8ilvAn6sOtqDmEQXmPMyI",
                    artists : ["artist 1", "artist 2"],
                    link : "https://www.youtube.com/"
                },
                {
                    name : "Test",
                    img : "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQOVufU8wxA_MXq8h8JjEeekVsT86vNL3AZIBYWdQuJF9n_7wTJixKUm8Qf_u8ilvAn6sOtqDmEQXmPMyI",
                    artists : ["artist 1", "artist 2"],
                    link : "https://www.youtube.com/"
                },
                {
                    name : "Test",
                    img : "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQOVufU8wxA_MXq8h8JjEeekVsT86vNL3AZIBYWdQuJF9n_7wTJixKUm8Qf_u8ilvAn6sOtqDmEQXmPMyI",
                    artists : ["artist 1", "artist 2"],
                    link : "https://www.youtube.com/"
                },
                {
                    name : "Test",
                    img : "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQOVufU8wxA_MXq8h8JjEeekVsT86vNL3AZIBYWdQuJF9n_7wTJixKUm8Qf_u8ilvAn6sOtqDmEQXmPMyI",
                    artists : ["artist 1", "artist 2"],
                    link : "https://www.youtube.com/"
                },
                {
                    name : "Test",
                    img : "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQOVufU8wxA_MXq8h8JjEeekVsT86vNL3AZIBYWdQuJF9n_7wTJixKUm8Qf_u8ilvAn6sOtqDmEQXmPMyI",
                    artists : ["artist 1", "artist 2"],
                    link : "https://www.youtube.com/"
                },
                {
                    name : "Test",
                    img : "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQOVufU8wxA_MXq8h8JjEeekVsT86vNL3AZIBYWdQuJF9n_7wTJixKUm8Qf_u8ilvAn6sOtqDmEQXmPMyI",
                    artists : ["artist 1", "artist 2"],
                    link : "https://www.youtube.com/"
                },
            ],
            recommended_artists : [
                {
                    name : "Artist 1",
                    img : "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQOVufU8wxA_MXq8h8JjEeekVsT86vNL3AZIBYWdQuJF9n_7wTJixKUm8Qf_u8ilvAn6sOtqDmEQXmPMyI",
                    link : "www.google.com",
                    genre : ["genre 1", "genre 2"]
                },
                {
                    name : "Artist 1",
                    img : "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQOVufU8wxA_MXq8h8JjEeekVsT86vNL3AZIBYWdQuJF9n_7wTJixKUm8Qf_u8ilvAn6sOtqDmEQXmPMyI",
                    link : "www.google.com",
                    genre : ["genre 1", "genre 2"]
                },
                {
                    name : "Artist 1",
                    img : "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQOVufU8wxA_MXq8h8JjEeekVsT86vNL3AZIBYWdQuJF9n_7wTJixKUm8Qf_u8ilvAn6sOtqDmEQXmPMyI",
                    link : "www.google.com",
                    genre : ["genre 1", "genre 2"]
                },
                {
                    name : "Artist 1",
                    img : "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQOVufU8wxA_MXq8h8JjEeekVsT86vNL3AZIBYWdQuJF9n_7wTJixKUm8Qf_u8ilvAn6sOtqDmEQXmPMyI",
                    link : "www.google.com",
                    genre : ["genre 1", "genre 2"]
                },
                {
                    name : "Artist 1",
                    img : "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQOVufU8wxA_MXq8h8JjEeekVsT86vNL3AZIBYWdQuJF9n_7wTJixKUm8Qf_u8ilvAn6sOtqDmEQXmPMyI",
                    link : "www.google.com",
                    genre : ["genre 1", "genre 2"]
                },
            ]


        }
    )

    return(
        <div className="result-page">
            <Greeting data={info.personal}/>
            <Song data={info.top10_songs} title="Your Top 10 Tracks" flip={0}/>
            <Artist data={info.top10_artists} title="Your Top 10 Artists"/>
            <Treemap data={info.artist_treemap_data} title="Your Favorite Artists"/>
            <Genre data={info.top5_genre} title="Your Top 5 Genres"/>
            <Treemap data={info.genre_treemap_data} title="Your Favourite Genre"/>
            <Song data={info.recommended_songs} title="Recommended Tracks Just for You" flip={1}/>
            <Artist data={info.recommended_artists} title="Artist Suggestions Based on Your Tastes"/>
            {/* try again button */}
        </div>
    );
};
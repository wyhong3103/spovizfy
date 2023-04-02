export const apiHandler = (() => {
    let access_token = "";
    
    const isValid = async () => {
        const accessToken = window.location.hash
        .substring(1)
        .split('&')
        .reduce((acc, curr) => {
            const [key, value] = curr.split('=')
            acc[key] = value
            return acc
        }, {})['access_token']

        if (accessToken === undefined){
            return 0;
        }

        const response = await fetch('https://api.spotify.com/v1/me', 
            {
                headers: {
                'Authorization': `Bearer ${accessToken}`
                }
            }
        );
        
        if (response.status === 200){
            access_token = accessToken;
            return 1;
        }else{
            return -1;
        }
    }; 

    const sendRequest = async (url) => {
        const response = await fetch(
            url, 
            {
                headers: {
                    'Authorization': `Bearer ${access_token}`
                }
            }
        );

        if (!response.ok){
            return {
                status : false
            }
        }

        const res =  await response.json();

        return{
            status : true,
            res : res 
        }
    }

    const getPersonal = async () => {
        const personal = await sendRequest("https://api.spotify.com/v1/me");

        if (personal.status === false){
            return {
                status : false
            };
        }else{
            return {
                status : true,
                ret : {
                    name : personal.res["display_name"],
                    pfp : personal.res["images"][0].url
                }
            }
        }
    }

    const getTop10Songs = async () => {
        const top10_songs = await sendRequest("https://api.spotify.com/v1/me/top/tracks?limit=10");

        if (top10_songs.status === false){
            return{
                status : false
            }
        }else{
            const ret = [];

            for(const i of top10_songs.res.items){
                ret.push(
                    {
                        name : i.name,
                        img : i.album.images[Math.min(1, i.album.images.length - 1)].url,
                        link : i.external_urls.spotify,
                        artists : [],
                    }
                )
                for(const j of i.artists){
                    ret[ret.length-1].artists.push(j.name);
                }
            }

            return {
                status : true,
                ret : ret
            };
        }

    }

    const getTop10Artists = async () => {
        const top10_artists = await sendRequest("https://api.spotify.com/v1/me/top/artists?limit=10");

        if (top10_artists.status === false){
            return{
                status : false
            }
        }else{
            const ret = [];

            for(const i of top10_artists.res.items){
                ret.push(
                    {
                        name : i.name,
                        img : i.images[Math.min(1, i.images.length - 1)].url,
                        link : i.external_urls.spotify,
                        genres : []
                    }
                )
                //only get 5 genres at max
                for(let j = 0; j < Math.min(5, i.genres.length); j++){
                    ret[ret.length-1].genres.push(i.genres[j]);
                }
            }

            return {
                status : true,
                ret : ret
            };
        }
    }

    const getArtistTreemapData = async () => {
        const playlists = await sendRequest("https://api.spotify.com/v1/me/playlists");

        const artists = {};

        if (playlists.status === false){
            return {
                status : false
            }
        }else{
            //get every tracks on the playlist, count number of times an artist get included
            
            for(let i = 0; i < playlists.res.items.length; i++){
                const playlist = await sendRequest(`https://api.spotify.com/v1/playlists/${playlists.res.items[i].id}/tracks`);

                if (playlist.status === false){
                    return {
                        status : false
                    };
                }
                
                for (const j of playlist.res.items){
                    if (j.track){
                        for(const k of j.track.artists){
                            if (!(k.name in artists)){
                                artists[k.name] = 0;
                            } 
                            artists[k.name]++;
                        }
                    }
                }
            }
        }

        const ret = [];

        for(const i in artists){
            ret.push(
                {
                    x : i,
                    y : artists[i]
                }
            )
        }

        return {
            status : true,
            ret : ret
        }
    }

    const getGenreData = async () => {
        const artists = await sendRequest("https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=100");

        const genre = {};

        if (artists.status === false){
            return {
                status : false
            }
        }else{
            //get every tracks on the playlist, count number of times an artist get included
            for(const i of artists.res.items){
                //only get 5 genres at max
                for(let j = 0; j < i.genres.length; j++){
                    if (!(i.genres[j] in genre)){
                        genre[i.genres[j]] = 0;
                    }
                    genre[i.genres[j]]++;
                }
            }
        }
        
        const ret = [];

        for(const i in genre){
            ret.push(
                {
                    x : i,
                    y : genre[i]
                }
            )
        }

        const temp = [];

        for(const i in genre){
            temp.push([genre[i], i]);
        }
        temp.sort((a, b) => b[0] - a[0]);

        const top5_genre = [];
        for(let i = 0; i < Math.min(temp.length, 5); i++) top5_genre.push(temp[i][1]);

        return {
            status : true,
            genre_treemap_data : ret,
            top5_genre : top5_genre
        }
    }

    const getRecommendation = async (genres) => {
        const tracks = await sendRequest(`https://api.spotify.com/v1/recommendations?limit=10&seed_genres=${genres}`);


        if (tracks.status === false){
            return{
                status : false
            }
        }else{
            const ret = [];

            for(const i of tracks.res.tracks){
                ret.push(
                    {
                        name : i.name,
                        img : i.album.images[Math.min(1, i.album.images.length - 1)].url,
                        link : i.external_urls.spotify,
                        artists : [],
                    }
                )
                for(const j of i.artists){
                    ret[ret.length-1].artists.push(j.name);
                }
            }

            return {
                status : true,
                ret : ret
            };
        }
    };


    const getData = async () => {
        let ok = true;
        const data = {
            status : true,
            info : {}
        };

        const personal = await getPersonal();
        if (personal.status === false){
            ok = false;
        }else{
            data.info.personal = personal.ret;
        }

        const top10_songs = await getTop10Songs();

        if (top10_songs.status === false){
            ok = false;
        }else{
            data.info.top10_songs = top10_songs.ret;
        }

        const top10_artists = await getTop10Artists();

        if (top10_artists.status === false){
            ok = false;
        }else{
            data.info.top10_artists = top10_artists.ret;
        }

        const artist_treemap_data = await getArtistTreemapData();

        if (artist_treemap_data.status === false){
            ok = false;
        }else{
            data.info.artist_treemap_data = artist_treemap_data.ret;
        }

        const genre_data = await getGenreData();

        if (genre_data.status === false){
            ok = false;
        }else{
            data.info.top5_genre = genre_data.top5_genre;
            data.info.genre_treemap_data = genre_data.genre_treemap_data;
        }

        const recommendation = await getRecommendation(genre_data.top5_genre.join(","));

        if (recommendation.status === false){
            ok = false;
        }else{
            data.info.recommended_songs = recommendation.ret;
        }

        if (!ok){
            return {
                status : false
            }
        }

        return data;
    };

    const logOut = () => {
        access_token = "";
    }

    return{
        isValid,
        getData,
        logOut
    }
})();
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

        return data;
    };

    return{
        isValid,
        getData
    }
})();
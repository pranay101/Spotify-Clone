
import { useRecoilState } from "recoil"
import useSpotify from "./useSpotify"
import {currentTrackIdState} from "../atoms/songAtom"
import { useEffect, useState } from "react"

function useSongInfo() {
    const SpotifyApi = useSpotify();
    const [currentIdTrack,setCurrentIdTrack] =  useRecoilState(currentTrackIdState)
    const [songInfo,setSongInfo] =  useState(null)

    useEffect(() =>{
    const fetchSongInfo = async() =>{
        if (currentIdTrack) {
            console.log(currentIdTrack);
            const trackInfo = await fetch(
                `https://api.spotify.com/v1/tracks/${currentIdTrack}`,
                {
                    headers:{
                        Authorization : `Bearer ${SpotifyApi.getAccessToken()}`
                    }
                }
            ).then(data => data.json())
            setSongInfo(trackInfo)
        }
    }

    fetchSongInfo();
    },[currentIdTrack,SpotifyApi])

    return songInfo
}


export default useSongInfo;
import { useRecoilState } from "recoil";
import useSpotify from "../../../hooks/useSpotify";
import {millisToMinutesAndSeconds} from "../../../lib/time"
import {isPlayingState,currentTrackIdState} from "../../../atoms/songAtom"


const Song = ({ order, track }) => {
  const SpotifyApi = useSpotify();
  const [currentTrackId,setCurrentStateId] = useRecoilState(currentTrackIdState)
  const [isPlaying,setIsPlaying] = useRecoilState(isPlayingState)


  const playSong = () =>{
    setCurrentStateId(track.track.id);
    setIsPlaying(true)
    // SpotifyApi.play({
    //     uris:[track.track.uri],
    // });
  }
  return (
    <div onClick={playSong} className="grid grid-cols-2 text-gray-500 py-4 px-5 cursor-pointer rounded-lg hover:bg-gray-900">
      <div className="flex items-center space-x-4">
        <p>{order + 1}</p>
        <img
          className="h-10 w-10"
          src={track.track.album.images[0].url}
          alt=""
        />
        <div>
          <p className="w-36 lg:w-64 text-white truncate">{track.track.name}</p>
          <p className="w-40">{track.track.artists[0].name}</p>
        </div>
      </div>
      <div className="flex items-center justify-between ml-auto md:ml-0">
        <p className="w-40 hidden md:inline">{track.track.album.name}</p>
        <p>{millisToMinutesAndSeconds(track.track.duration_ms)}</p>
      </div>
    </div>
  );
};

export default Song;

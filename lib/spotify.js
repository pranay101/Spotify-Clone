import SpotifyWebApi from "spotify-web-api-node/src/spotify-web-api";

const scopes = [
  "user-read-email",
  "playlist-read-private",
  "playlist-read-collaborative",
  "user-read-email",
  "streaming",
  "user-read-private",
  "user-library-read",
  "user-top-read",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-follow-read",
].join(",");

const params = {
  scopes: scopes,
};

const queryParamsString = new URLSearchParams(params)

const LOGIN_URL = "https:accounts.spotify.com/authorize?" + queryParamsString.toString();

const SpotifyAPi = new SpotifyWebApi({
    clientId:process.env.NEXT_PUBLIC-CLIENT_SECRET,
    clientSecret:process.env.NEXT_PUBLIC-CLIENT_ID,
})


export default SpotifyAPi

export {LOGIN_URL};
import React from "react";
import Body from "./Body";
import Right from "./Right";
import Sidebar from "./Sidebar";
import SpotifyWebApi from "spotify-web-api-node";
import { playingTrackState } from "../atoms/playerAtom";
import { useRecoilState } from "recoil";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import Player from "./Player";

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
});

function Dashboard() {
  const { data: session } = useSession();
  const { accessToken } = session;
  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);
  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    setShowPlayer(true);
  });

  const chooseTrack = (track) => {
    setPlayingTrack(track);
  };
  return (
    <main className=" flex min-h-screen min-w-max bg-black lg:pb-24">
      <Sidebar />
      <Body spotifyApi={spotifyApi} chooseTrack={chooseTrack} />
      <Right spotifyApi={spotifyApi} chooseTrack={chooseTrack} />
      <div className="fixed bg-red-400 bottom-0 left-0 right-0 z-50">
        <Player accessToken={accessToken} trackUri={playingTrack.uri} />
      </div>
    </main>
  );
}

export default Dashboard;

import React from 'react'
import { useEffect } from 'react';
import { useState, useRef } from 'react'

const Participant = ({participant}) => {
    const [videoTracks, setVideoTracks] = useState([]);
    const [audioTracks, setAudioTracks] = useState([]);
    
    const videoRef = useRef();
    const audioRef = useRef();

    const trackpubsToTracks = (trackMap) =>
        Array.from(trackMap.values())
            .map((publication) => publication.track)
            .filter((track) => track !== null);

    useEffect(() => {
        setVideoTracks(trackpubsToTracks(participant.videoTracks));
        setAudioTracks(trackpubsToTracks(participant.audioTracks));

        const trackSubscribed = (track)=> {
            if(track.kind === "video"){
                setVideoTracks((videoTracks)=> [...videoTracks, track]);
            }
            else if (track.kind === "audio") {
                setAudioTracks((audioTracks) => [...audioTracks, track]);
            }
        };

        const trackUnsubscribed = (track)=> {
            if(track.kind === "video"){
                setVideoTracks((videoTracks)=> videoTracks.filter((v) => v !== track));
            }
            else if (track.kind === "audio") {
                setAudioTracks((audioTracks) => audioTracks.filter((a) => a !== track));
            }
        };

        participant.on("trackSubscribed", trackSubscribed);
        participant.on("trackUnsubscribed", trackUnsubscribed);

        return ()=> {
            setVideoTracks([])
            setAudioTracks([])
            participant.removeAllListeners();
        }
    },[participant]);
  return (
    <div>Participant</div>
  )
}

export default Participant
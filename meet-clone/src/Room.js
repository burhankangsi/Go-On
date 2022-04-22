import React from 'react'
import { useEffect, useState } from 'react';

const Room = ({roomName, room, handleLogout}) => {
    const [participants, setParticipants] = useState([]);
    useEffect (() => {
        const participantConnected = (participant) => {
            setParticipants((prevParticipants) => [...prevParticipants, participant]
            );
        };

        const participantDisconnected = (participant) => {
            setParticipants((prevParticipants) => {
                prevParticipants.filter((p) => p !== participant)
            });
        };

        room.on("participantConnected", participantConnected);
        room.on("participantDisconnected", participantDisconnected);
        room.participants.forEach(participantConnected);
    }, [room]);
  return (
    <div>Room</div>
  )
}

export default Room
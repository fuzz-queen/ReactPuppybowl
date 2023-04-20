import React from "react";
import { useNavigate } from "react-router-dom";
import { deletePlayer } from "../api";

export default function PlayerCard({ player }) {
    const navigate = useNavigate();

    async function handleDelete() {
        try {
            const result = await deletePlayer(player.id);
            console.log(result);
            navigate("/");
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div>
            <figure>
                <img 
                    src={player.imageUrl}
                    alt="A pic of a furry player"
                />
                <figcaption>
                    <p>Name: {player.name}</p>
                    <p>Breed: {player.breed}</p>
                </figcaption>
            </figure>
            <button onClick>Delete Player</button>
        </div>
    )
}
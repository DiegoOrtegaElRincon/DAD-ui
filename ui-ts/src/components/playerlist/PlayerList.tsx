import React, { useState, useEffect } from 'react';
import './PlayerList.css'

interface Player {
  name: string;
  rank: string;
  points: number;
}

const PlayerList: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    // Simulación de datos JSON directamente en el componente
    const jsonData: Player[] = [
      { name: 'Jugador1', rank: 'A', points: 100 },
      { name: 'Jugador2', rank: 'B', points: 85 },
      { name: 'Jugador3', rank: 'C', points: 72 },
      { name: 'Jugador4', rank: 'A', points: 95 },
      { name: 'Jugador5', rank: 'B', points: 78 },
      { name: 'Jugador6', rank: 'C', points: 64 },
      { name: 'Jugador7', rank: 'A', points: 88 },
      { name: 'Jugador8', rank: 'B', points: 76 },
      { name: 'Jugador9', rank: 'C', points: 82 },
      { name: 'Jugador10', rank: 'A', points: 93 },
      { name: 'Jugador11', rank: 'B', points: 70 },
      { name: 'Jugador12', rank: 'C', points: 68 },
      { name: 'Jugador13', rank: 'A', points: 97 },
      { name: 'Jugador14', rank: 'B', points: 84 },
      { name: 'Jugador15', rank: 'C', points: 79 },
    ];

    setPlayers(jsonData);
  }, []);

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='container'>
      <input
        type="text"
        placeholder="Search by name"
        className='box box1'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredPlayers.map((player, index) => (
          <li key={index} className='list-box box1'>
            {player.points}{' '}{player.rank}{' '}{player.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;

import React, { useState } from 'react';
import fakeData from '../../fakeData/MOCK_DATA.json';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Players.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Selection from '../Selection/Selection';

const Players = () => {
    const first15 = fakeData.slice(0, 15);
    const [players] = useState(first15);
    const [selection, setSelection] = useState([]);
    const handleAddPlayer = (player) => {
        const newSelection = [...selection, player];
        setSelection(newSelection);
    };
    return (
        <div className='team-container'>
            <div className='players-container row row-cols-auto'>
                {players.map((player) => (
                    <div className='card single-player '>
                        <img
                            style={{ width: '10rem' }}
                            src={player.image}
                            alt=''
                        />
                        <div className='card-body'>
                            <h5 className='card-title'>{player.name}</h5>
                            <p className='card-text'>
                                Salary : tk. {player.salary}
                            </p>
                            <button
                                onClick={() => handleAddPlayer(player)}
                                className='btn btn-success'
                            >
                                {' '}
                                <FontAwesomeIcon icon={faUserPlus} /> Add To
                                Team
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='selection-container'>
                <Selection selection={selection} players={players}></Selection>
            </div>
        </div>
    );
};

export default Players;

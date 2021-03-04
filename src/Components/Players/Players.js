import React, { useState } from 'react';
import fakeData from '../../fakeData/MOCK_DATA.json';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Players.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Selection from '../Selection/Selection';

const Players = () => {
	const first15 = fakeData.slice(0, 15);
	const [players, setPlayers] = useState(first15);
	const [selection, setSelection] = useState([]);
	const handleAddPlayer = (player) => {
		console.log('player added', player);
		const newSelection = [...selection, players];
		setSelection(newSelection);
	};
	return (
		<div className='team-container'>
			<div className='players-container row row-cols-auto'>
				{players.map((player) => (
					<div class='card single-player '>
						<img style={{ width: '10rem' }} src={player.image} alt='' />
						<div class='card-body'>
							<h5 class='card-title'>{player.name}</h5>
							<p class='card-text'>Salary : {player.salary}</p>
							<button
								onClick={() => handleAddPlayer(player.name)}
								className='btn btn-success'
							>
								{' '}
								<FontAwesomeIcon icon={faUserPlus} /> Add To Team
							</button>
						</div>
					</div>
				))}
			</div>
			<div className='selection-container'>
				<Selection selection={selection}></Selection>
				{/* <h3>this is cart</h3>
				<h3>Players selected : {selection.length}</h3> */}
			</div>
		</div>
	);
};

export default Players;

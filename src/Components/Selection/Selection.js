import React from 'react';
import './Selection.css';

const Selection = (props) => {
    const selection = props.selection;
    const total = selection.reduce((total, player) => total + player.salary, 0);
    return (
        <div>
            <h4>Players Selected : {selection.length}</h4>
            <h3>Total Cost : {total} tk</h3>
            <div>
                {selection.map((selected) => (
                    <ul>
                        <li className='selected'>
                            {selected.name} ({selected.salary} tk)
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    );
};

export default Selection;

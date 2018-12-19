import React from 'react';
import TextField from '../components/TextField';
import Button from '../components/Button';

const AddPlayer = () => {
    return(
        <form>
            <TextField id="player-name" label="Player's name"/><Button/>
        </form>
    )
};

export default AddPlayer;
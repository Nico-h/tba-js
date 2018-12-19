import React from 'react';
import Select from '../components/Select';
import AutoCompleteSelect from '../components/AutoCompleteSelect';
import NumberTextField from '../components/NumberTextField';

const AddGame = () => {
    const autoCompleteTournament = [
        {label: 'Moscow'},
        {label: 'Tokyo'},
        {label: 'Paris'}
    ];

    const autoCompleteRound = [
        {label: 'R128'},
        {label: 'R64'},
        {label: 'R32'},
        {label: 'R16'},
        {label: 'QF'},
        {label: 'SF'},
        {label: 'F'},
    ];

    const autoCompletePlayer = [
        {label: 'Tsonga'},
        {label: 'Roger'},
        {label: 'Mahut'},
    ];
    return (
        <form>
            <AutoCompleteSelect placeholder="Select a tournament" suggestions={autoCompleteTournament}/>
            <AutoCompleteSelect placeholder="Select a round" suggestions={autoCompleteRound}/>
            <AutoCompleteSelect placeholder="Player A" suggestions={autoCompletePlayer}/>
            <NumberTextField label="Odd A"/>
            <AutoCompleteSelect placeholder="Player B" suggestions={autoCompletePlayer}/>
            <NumberTextField label="Odd B"/>
        </form>
    )
};

export default AddGame;
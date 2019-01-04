import React from 'react';
import {storiesOf} from '@storybook/react';
import Button from '../components/Button';
import AddButton from '../components/AddButton';
import Menu from '../components/Menu';
import TextField from '../components/TextField'
import NumberTextField from '../components/NumberTextField';
import AddPlayer from '../views/AddPlayer';
import AddGame from '../views/AddGame';
import Select from '../components/Select';
import AutoCompleteSelect from '../components/AutoCompleteSelect';
import DatePicker from '../components/DateTimePicker';
import Card from '../components/Card';
import Avatar from '../components/Avatar';

const autoCompleteSuggestions = [
    { label: 'Val 1' },
    { label: 'Val 2' },
    { label: 'Val 3' },
];

storiesOf('Button', module)
    .add('classic', () => (
        <Button/>
    ))
    .add('add', () => (
        <AddButton/>
    ));

storiesOf('Menu', module)
    .add('classic', () => (
        <Menu/>
    ));

storiesOf('TextFiled', module)
    .add('classic', () => (
        <TextField label="My TextField"/>
    ))
    .add('number', () => (
        <NumberTextField label="My Number"/>
    ));

storiesOf('Select', module)
    .add('classic', () => (
        <Select label="My Select"/>
    ))
    .add('auto complete', () => (
        <AutoCompleteSelect label="My Autocomplete Select" suggestions={autoCompleteSuggestions}/>
    ));

storiesOf('Picker', module)
    .add('date', () => (
        <DatePicker label="Game Date" gameDate/>
    ));

storiesOf('Avatar', module)
    .add('round', () => (
        <Avatar classeName="avatar"/>
    ));

storiesOf('Card', module)
    .add('card', () => (
        <Card/>
    ));

storiesOf('Pages', module)
    .add('add player', () => (
        <AddPlayer/>
    ))
    .add('add game', () => (
        <AddGame/>
    ));
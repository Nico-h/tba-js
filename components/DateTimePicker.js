import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const today = new Date;

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    label: '',
    gameDate: today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate() + 'T10:30'
});

function DateAndTimePickers(props) {
    const { classes } = props;

    return (
        <TextField
            id="datetime-local"
            label={classes.label}
            type="datetime-local"
            defaultValue={classes.gameDate}
            className={classes.textField}
            InputLabelProps={{
                shrink: true,
            }}
        />
    );
}

DateAndTimePickers.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DateAndTimePickers);
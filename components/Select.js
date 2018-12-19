import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class MNativeSelect extends React.Component {
    state = {
        value: ''
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    render() {
        const { classes } = this.props;

        return (
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-native-simple">{this.props.label}</InputLabel>
                <Select
                    native
                    value={this.state.value}
                    onChange={this.handleChange(this.props.name)}
                    inputProps={{
                        name: this.props.name,
                        id: this.props.id,
                    }}
                >
                    <option value="" />
                    
                </Select>
            </FormControl>
        );
    }
}

MNativeSelect.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MNativeSelect);
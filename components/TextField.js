import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    }
});


class MTextField extends React.Component {
    state = {
        name: '',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        return (
            <TextField
                id={this.props.id}
                label={this.props.label}
                value={this.state.name}
                onChange={this.handleChange('name')}
                margin="normal"
            />
        );
    }
}

MTextField.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MTextField);
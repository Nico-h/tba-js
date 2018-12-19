import React from 'react';
import TextField from '@material-ui/core/TextField';

class MNumberTextField extends React.Component {
    state = {
        odd: 0,
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
                value={this.state.odd}
                onChange={this.handleChange('odd')}
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                margin="normal"
            />
        )
    }
}

export default MNumberTextField;
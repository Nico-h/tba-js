import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
    avatar: {
        display: 'inline-flex'
    }
};

function MAvatars(props) {
    const { classes } = props;
    return (
        <Avatar className={classes.avatar}>QF</Avatar>
    );
}

MAvatars.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MAvatars);
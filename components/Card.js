import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MAvatars from "./Avatar";

const styles = {
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

function MCard(props) {
    const { classes } = props;
    const bull = <span className={classes.bullet}>/</span>;

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    <MAvatars className="avatar"/> Player 1 {bull} Player 2
                </Typography>
            </CardContent>
        </Card>
    );
}

Card.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MCard);
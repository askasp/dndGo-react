import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {A} from 'hookrouter'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor:theme.palette.card,
        padding: theme.spacing(3, 2),
    },
    fab: {
        margin: theme.spacing(1),
        backgroundColor:theme.palette.button.primary,
        color:"black",
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    card:{
        //width:'70%',
        backgroundColor:"#1e1e1e",
        color: theme.palette.text.primary,
        margin:"10%",
        marginTop:"50%"
    },
}));

function WelcomeCard() {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                <Typography variant="h5" component="h3">
                    DnDGo
                </Typography>
                <Typography component="p">
                    Import an existing character from the menu or..
                </Typography>
                </CardContent>
                <A href={"/newcharacter"} style={{textDecoration:"none"}}>
                <Fab variant="extended" aria-label="Delete" className={classes.fab}>
                    <AddIcon className={classes.extendedIcon} />
                    Create new
                </Fab>
                </A>
            </Card>
        </div>
    );
}

export default WelcomeCard;

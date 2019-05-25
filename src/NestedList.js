import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Divider from "@material-ui/core/Divider";
import {mdiDumbbell,mdiBookOpenPageVariant, mdiHeart,mdiShield,mdiDiceMultiple,mdiShapePlus,mdiAccountAlert,mdiRunFast } from '@mdi/js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell,faHeart,faShieldAlt,faDiceFive,faShoePrints, faCoffee,faPrescriptionBottleAlt,faHatWizard,faBookReader,faRunning,faLaughBeam,faLightbulb } from '@fortawesome/free-solid-svg-icons'
import Icon from '@mdi/react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
//        backgroundColor: "#121212",
        color:theme.palette.text.secondary,
    },
    listItem:{
        color:theme.palette.text.secondary,
    },
    card:{
        //width:'70%',
        backgroundColor:"#1e1e1e",
        color: theme.palette.text.primary,
    },
    icon: {
        color: theme.palette.text.secondary,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    }
}));

//<Icon size={1} path={mdiHeart} color={"rgba(255,255,255,0.60"} />
function NestedList() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    let isOpen = ''

    //const [expanded, setExpanded] = React.useState(false);

    //const handleChange = panel => (event, isExpanded) => {
   //     setExpanded(isExpanded ? panel : false);
    //};

    const handleClick = myitem => (event) => {
        setOpen(open==myitem ? false:myitem)
    }


   // function handleClick() {
     //   setOpen(!open);
    //}

    return (
            <Grid
                container
                spacing={1}
                //direction="column"
               // alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
            >
                <Grid className={classes.root} item xs={12} md={4}>
        <List
            component="nav"
            className={classes.root}
        >
            <Card className={classes.card}>
                <CardContent>
                    <ListSubheader component="div">Stats</ListSubheader>
            <ListItem button onClick={handleClick('open1')}>
                <ListItemIcon className={classes.listItem} >
                    <FontAwesomeIcon size={"1x"} icon={faHeart}/>
                </ListItemIcon>
                <ListItemText primary="HP 30/100" />
                { (open ==='open1') ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open==='open1'} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon className={classes.listItem} >
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </ListItem>
                </List>
            </Collapse>
            <MyDivider/>
            <ListItem button onClick={handleClick('open2')}>
                <ListItemIcon className={classes.listItem} >
                    <FontAwesomeIcon size={"1x"} icon={faShieldAlt}/>
                </ListItemIcon>
                <ListItemText primary="AC: 17" />
                { (open ==='open2') ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open==='open2'} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon className={classes.listItem} >
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </ListItem>
                </List>
            </Collapse>
            <MyDivider/>
            <ListItem button onClick={handleClick('open3')}>
                <ListItemIcon className={classes.listItem} >
                    <FontAwesomeIcon size={"1x"} icon={faDiceFive}/>
                </ListItemIcon>
                <ListItemText primary="Hit Dice: 5d12" />
                { (open ==='open3') ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open==='open3'} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon className={classes.listItem} >
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </ListItem>
                </List>
            </Collapse>
            <MyDivider/>
            <ListItem button onClick={handleClick('open4')}>
                <ListItemIcon className={classes.listItem} >
                    <FontAwesomeIcon size={"1x"} icon={faShoePrints}/>
                </ListItemIcon>
                <ListItemText primary="Speed: 30" />
                { (open ==='open4') ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open==='open4'} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon className={classes.listItem} >
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </ListItem>
                </List>
            </Collapse>
            <MyDivider/>
            <ListItem button onClick={handleClick('open5')}>
                <ListItemIcon className={classes.listItem} >
                    <FontAwesomeIcon size={"1x"} icon={faLightbulb}/>
                </ListItemIcon>
                <ListItemText primary="Initiative : 3" />
                { (open ==='open5') ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open==='open5'} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon className={classes.listItem} >
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </ListItem>
                </List>
            </Collapse>
            <MyDivider/>
            <ListItem button onClick={handleClick('open6')}>
                <ListItemIcon className={classes.listItem} >
                    <Icon size={1} path={mdiShapePlus} color={"rgba(255,255,255,0.60"} />
                </ListItemIcon>
                <ListItemText primary="Profficiency +4" />
                { (open ==='open6') ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open==='open6'} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon className={classes.listItem} >
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </ListItem>
                </List>
            </Collapse>
                </CardContent>
            </Card>
        </List>
                </Grid>
                <Grid item className={classes.root} xs={12} md={4}>
        <List
    component="nav"
    //subheader={<ListSubheader component="div">Stats</ListSubheader>}
    className={classes.root}
        >
            <Card className={classes.card}>
                <CardContent>
                    <ListSubheader component="div">Attributes</ListSubheader>
            <ListItem button onClick={handleClick('open7')}>
                <ListItemIcon className={classes.listItem} >
                    <FontAwesomeIcon size={"1x"} icon={faDumbbell}/>
                </ListItemIcon>
                <ListItemText primary="STR: 18" />
                { (open ==='open7') ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open==='open7'} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon className={classes.listItem} >
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </ListItem>
                </List>
            </Collapse>
            <MyDivider/>
            <ListItem button onClick={handleClick('open8')}>
                <ListItemIcon className={classes.listItem} >
                    <FontAwesomeIcon size={"1x"} icon={faPrescriptionBottleAlt}/>
                </ListItemIcon>
                <ListItemText primary="Constitution: 13" />
                { (open ==='open8') ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open==='open8'} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon className={classes.listItem} >
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </ListItem>
                </List>
            </Collapse>
            <MyDivider/>
            <ListItem button onClick={handleClick('open9')}>
                <ListItemIcon className={classes.listItem} >
                    <FontAwesomeIcon icon={faRunning}/>
                </ListItemIcon>
                <ListItemText primary="Dexterity 15" />
                { (open ==='open9') ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open==='open9'} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon className={classes.listItem} >
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </ListItem>
                </List>
            </Collapse>
            <MyDivider/>
            <ListItem button onClick={handleClick('open10')}>
                <ListItemIcon className={classes.listItem} >
                    <FontAwesomeIcon icon={faHatWizard}/>
                </ListItemIcon>
                <ListItemText primary="Intelligence 13" />
                { (open ==='open10') ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open==='open10'} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon className={classes.listItem} >
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </ListItem>
                </List>
            </Collapse>
            <MyDivider/>
            <ListItem button onClick={handleClick('open11')}>
                <ListItemIcon className={classes.listItem} >
                    <FontAwesomeIcon icon={faBookReader}/>
                </ListItemIcon>
                <ListItemText primary="Wisdom: 10" />
                { (open ==='open11') ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open==='open11'} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon className={classes.listItem} >
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </ListItem>
                </List>
            </Collapse>
            <MyDivider/>
            <ListItem button onClick={handleClick('open12')}>
                <ListItemIcon className={classes.listItem} >
                    <FontAwesomeIcon icon={faLaughBeam} size={'1em'}/>
                </ListItemIcon>
                <ListItemText primary="Charisma: 19" />
                { (open ==='open12') ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open==='open12'} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon className={classes.listItem} >
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </ListItem>
                </List>
            </Collapse>
                </CardContent>
            </Card>
        </List>
            </Grid>
            </Grid>
    );
}

export default NestedList;

const MyDivider = () => {
    return(
        <hr style={{opacity:0.05}}/>
    )
}

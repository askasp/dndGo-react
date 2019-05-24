import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
    collapsible:{
      backgroundColor:"#121212",
    },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
    color: theme.palette.text.primary,
  },
  expandIcon:{
    color: theme.palette.text.secondary,
},
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const ControlledExpansionPanels = (props) =>{
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <ExpansionPanel className={classes.collapsible} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
         {props.myicon} <Typography className={classes.heading}> 10/22</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className={classes.collapsible} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
        >
          {props.myicon} <Typography className={classes.heading}> 10/22</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className={classes.collapsible} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
        >
          {props.myicon} <Typography className={classes.heading}> 10/22</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className={classes.collapsible} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
        >
          {props.myicon} <Typography className={classes.heading}> 10/22</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default ControlledExpansionPanels;

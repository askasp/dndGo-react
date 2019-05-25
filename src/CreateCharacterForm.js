import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Card from '@material-ui/core/Card';
import ListSubheader from '@material-ui/core/ListSubheader';

import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';


const valueList = (n) => {
    let list = []
    for (let i=0;i<n;i++){
        list.push({label:i.toString(),value:i})
    }
    return list
}


const ranges = [
    {
        value: '0-20',
        label: '0 to 20',
    },
    {
        value: '21-50',
        label: '21 to 50',
    },
    {
        value: '51-100',
        label: '51 to 100',
    },
];

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: 360,
        color:theme.palette.text.primary,
    },
    card:{
        color:theme.palette.text.primary,
        backgroundColor:theme.palette.card,
        margin:theme.spacing(1),
        minWidth:300
    },
    menu: {
        width: 200,
        color:theme.palette.text.primary,
    },
    margin: {
        //margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        '& label.Mui-focused': {
            color: theme.palette.button.primary,
        },
        '& .MuiInput-underline:after': {
            borderBottomColor:theme.palette.button.primary,
        },
        flexBasis: 200,
        width:"120px",
        margin:theme.spacing(1),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: "120px",
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    dropdownStyle:
        {
            backgroundColor:theme.palette.focus,
            opacity:1,
        },
    inputLabel:
        {color:theme.palette.text.primary
        },
    errorRoot:{
        color:"white",
        '&$error': {
            color: theme.errorColor,
        },
    },
    errorAsterisk: {
        '&$error': {
            color: theme.errorColor,
        },
    },
        error:{
        fontSize:"18px"
    },
    }
));

function InputAdornments() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '21-50',
        showPassword: false,
        Name:'',
        Strength:'',
        Dexterity:'',
        Constitution:'',
        Wisdom:'',
        Intelligence:'',
        Charisma:'',


    });

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };


    const SelectComponent = (props) => {
        return(
        <TextField
            id="standard-select-currency"
            select
            label={props.label}
            InputLabelProps={{style:{color:'rgba(255,255,255,0.87)'}}}
            className={classes.textField}
            value={values[props.label]}
            onChange={handleChange(props.label )}
            SelectProps={{
                MenuProps: {
                    classes:{paper: classes.dropdownStyle,}
                },
            }}
        >
            {props.item.map(option => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
        )
    }

    const abilityList = valueList(20)
    // Mobile first, but it did look really bad on desktop before this
    let dir  ="column"
    let ali = "center"
    if  (window.innerWidth > 600){
        dir=""
        ali=""
    }
    return (
        <Grid
            container
            spacing={1}
            direction={dir}
            alignItems={ali}
            justify="center"
        >
            <Grid item className={classes.root} xs={12} md={6}>
                <Card className={classes.card}>
                    <CardContent>
                        <ListSubheader component="div">Basics</ListSubheader>
                        <Grid container>
                            <Grid item xs={6}>
                                <FormControl className={clsx(classes.margin, classes.textField)}>
                                    <InputLabel className={classes.inputLabel} htmlFor="adornment-amount">Name</InputLabel>
                                    <Input
                                        id="adornment-amount"
                                        value={values.amount}
                                        onChange={handleChange('amount')}
                                    />
                                </FormControl>
                        <SelectComponent item={ranges} label={"Race"}/>
                            </Grid>
                        <Grid item xs={6}>
                            <SelectComponent item={ranges} label={"Class"}/>
                            <SelectComponent item={ranges} label={"Subrace"}/>
                        </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item className={classes.root} xs={12} md={6}>
                <Card className={classes.card}>
                    <CardContent>
                        <ListSubheader component="div">Ability Scores Before Racial Bonus</ListSubheader>
                        <Grid container>
                            <Grid item xs={6}>
                                <SelectComponent item={abilityList} label={"Strength"}/>
                                <SelectComponent item={abilityList}label={"Dexterity"}/>
                                <SelectComponent item={abilityList}label={"Constitution"}/>
                            </Grid>
                            <Grid item xs={6}>
                                <SelectComponent item={abilityList} label={"Intelligence"}/>
                                <SelectComponent item={abilityList} label={"Wisdom"}/>
                                <SelectComponent item={abilityList} label={"Charisma"}/>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
                <Grid item className={classes.root} xs={12} md={6}>
                    <Card className={classes.card}>
                        <CardContent>
                            <ListSubheader component="div">Hit Points</ListSubheader>
                            <ListSubheader component="div">Class Hit Die: 1d12</ListSubheader>
                                    <FormControl className={clsx(classes.margin, classes.textField)}>
                                        <InputLabel htmlFor="adornment-amount">HP</InputLabel>
                                        <Input
                                            id="adornment-amount"
                                            value={values.amount}
                                            onChange={handleChange('amount')}
                                        />
                                    </FormControl>
                        </CardContent>
                    </Card>
            </Grid>
            <Grid item className={classes.root} xs={12} md={6}>
                <Card className={classes.card}>
                    <Grid container justify={"center"}>
                    <CardContent>
                        <ListSubheader component="div">Profficiency Choices</ListSubheader>
                        <ListSubheader component="div">Choose x</ListSubheader>
                        <CheckboxesGroup/>
                    </CardContent>
                    </Grid>

                </Card>
            </Grid>
        </Grid>
    );
}
export default InputAdornments

function CheckboxesGroup() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: false,
    });

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };

    const { gilad, jason, antoine } = state;
    const error = [gilad, jason, antoine].filter(v => v).length !== 2;

    return (
        <div className={classes.root}>
            <FormControl required error={error} component="fieldset" className={classes.formControl}>
                <FormLabel classes={{root:classes.errorRoot,error:classes.error,asterisk:classes.errorAsterisk}} component="legend">Pick two</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={gilad} onChange={handleChange('gilad')} value="gilad" />}
                        label="Gilad Gray"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={jason} onChange={handleChange('jason')} value="jason" />}
                        label="Jason Killian"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={antoine} onChange={handleChange('antoine')} value="antoine" />
                        }
                        label="Antoine Llorca"
                    />
                </FormGroup>
                <FormHelperText classes={{root:classes.formHelperRoot,error:classes.error}}>You can display an error</FormHelperText>
            </FormControl>
        </div>
    );
}

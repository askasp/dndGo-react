import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Icon from '@mdi/react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

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
    },
    card:{
        backgroundColor:theme.palette.card,
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        flexBasis: 200,
    },
}));

function InputAdornments() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    return (
            <Grid
            container
            spacing={1}
            //direction="column"
            // alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
            >
                <Grid item xs={12} md={6}>
            <Card className={classes.card}>
                <CardContent>
            <TextField
                label="With normal TextField"
                id="simple-start-adornment"
                className={clsx(classes.margin, classes.textField)}
                InputProps={{
                    startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
                }}
            />
            <TextField
                select
                label="With Select"
                className={clsx(classes.margin, classes.textField)}
                value={values.weightRange}
                onChange={handleChange('weightRange')}
                InputProps={{
                    startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
                }}
            >
                {ranges.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <FormControl fullWidth className={classes.margin}>
                <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
                <Input
                    id="adornment-amount"
                    value={values.amount}
                    onChange={handleChange('amount')}
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                />
            </FormControl>
            <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
                <Input
                    id="adornment-weight"
                    value={values.weight}
                    onChange={handleChange('weight')}
                    endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
                    aria-describedby="weight-helper-text"
                    inputProps={{
                        'aria-label': 'Weight',
                    }}
                />
                <FormHelperText id="weight-helper-text">Weight</FormHelperText>
            </FormControl>
            <FormControl className={clsx(classes.margin, classes.textField)}>
                <InputLabel htmlFor="adornment-password">Password</InputLabel>
                <Input
                    id="adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton aria-label="Toggle password visibility" onClick={handleClickShowPassword}>
                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
                </CardContent>
            </Card>
                </Grid>
            </Grid>
    );
}
export default InputAdornments;

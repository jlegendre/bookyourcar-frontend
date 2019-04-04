import React, {useEffect} from 'react';
import * as PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
<<<<<<< HEAD:src/composant/Admin/ValidUser/ValidateUser.jsx
import {CssBaseline, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@material-ui/core";
=======
import {CssBaseline, IconButton, Paper, Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check'
>>>>>>> 49789d0750c49a9861843ed0581da4c2c5fc1214:src/composant/Admin/ValidateUser/ValidateUser.jsx

const ValidateUser = props => {

    const {classes, fetchUserInValidation, datapage} = props;


    useEffect(() => {
        fetchUserInValidation();
    }, []);


    /**
     * Accepte l'utilisateur
     * @param id identifiant de l'utilisateur
     */
    const acceptUser = id => {

    };

    /**
     * Refuse l'utilisateur
     * @param id identifiant de l'utilisateur
     */
    const refuseUser = id => {

    };

    return (
        <div className={classes.main}>
            <CssBaseline/>
            <Typography variant="h3" gutterBottom>Utilisateurs à valider :</Typography>
            <Paper className={classes.paper}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>First Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Pole</TableCell>
                            <TableCell/>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {datapage && datapage.map((row, i) =>
                            <TableRow key={i}>
                                <TableCell>{row.userName}</TableCell>
                                <TableCell>{row.userFirstname}</TableCell>
                                <TableCell>{row.userEmail}</TableCell>
                                <TableCell>{row.userPole} ?? a remonté du back</TableCell>
                                <TableCell>
                                    <IconButton onClick={() => acceptUser(row.userId)}>
                                        <CheckIcon/>
                                    </IconButton>
                                </TableCell>
                                <TableCell>
                                    <IconButton onClick={() => refuseUser(row.userId)}>
                                        <DeleteIcon/>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    )
};

ValidateUser.propTypes = {
    classes: PropTypes.object,
    fetchUserInValidation: PropTypes.func,
    datapage: PropTypes.array
};

export default withStyles(theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 1000,
            marginLeft: 'auto',
            marginRight: 'auto',
        }
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: '100%',
            padding: 0
        }
    },
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        }
    }
}))(ValidateUser);
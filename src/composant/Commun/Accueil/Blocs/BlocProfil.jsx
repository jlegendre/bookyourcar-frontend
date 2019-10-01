import React, {Fragment, useEffect, useRef, useState} from 'react';
import * as PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
import {Card} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent/index";
import Typography from "@material-ui/core/Typography/index";
import CardActions from "@material-ui/core/CardActions/index";
import Button from "@material-ui/core/Button/index";
import Grid from "@material-ui/core/Grid/index";
import _ from 'lodash';
import PopupUpdateProfil from "./Popup/PopupUpdateUser";
import PopupUpdatePwd from "./Popup/PopupUpdatePwd";
import Icon from "@material-ui/core/Icon";

const BlocProfil = props => {

    const {classes, user, updateProfil, updatePassword, fetchImageUser, updateImage} = props;

    const [openPopupProfil, setOpenPopupProfil] = useState(false);
    const [openPopupPassword, setOpenPopupPassword] = useState(false);
    const [image, setImage] = useState();
    const [showEditImage, setShowEditImage] = useState(false);


    const fileSelect = useRef(null);

    useEffect(() => {
        fetchImageUser(setImage)
    }, [fetchImageUser]);


    const getPhoneNumer = () => {
        let str = '';
        if (user && user.phoneNumber) {
            _.each(user.phoneNumber, (char, i) => {
                str += char;
                if (i % 2 === 1) {
                    str += ' ';
                }
            })
        }
        return str;
    };

    const getNumeroPermis = () => {
        let str = 'Aucun numéro de permis';
        if (user && user.drivingLicence) {
            str = user.drivingLicence;
        }

        return str;
    };

    return (
        <React.Fragment>
            <PopupUpdateProfil
                open={openPopupProfil}
                onClose={() => setOpenPopupProfil(false)}
                data={user}
                onAccept={user => {
                    setOpenPopupProfil(false);
                    updateProfil(user);
                }}
            />

            <PopupUpdatePwd
                open={openPopupPassword}
                onClose={() => setOpenPopupPassword(false)}
                onAccept={(password) => updatePassword(password, success => {
                    setOpenPopupPassword(!success)
                })}
            />

            <Card className={classes.card}>
                {image &&
                <Fragment>
                    <input
                        type={"file"}
                        id={"fileSelect"}
                        ref={fileSelect}
                        style={{display: 'none'}}
                        onChange={event => {
                            updateImage(event.target.files[0], () => {
                                fetchImageUser(setImage)
                            });
                        }}
                    />
                    <div
                        className={classes.imageContainer}
                        onClick={() => fileSelect.current.click()}
                        onMouseOver={() => setShowEditImage(true)}
                        onMouseOut={() => setShowEditImage(false)}
                    >
                        <img
                            className={classes.image}
                            src={image}
                            alt={"button"}
                        />
                        {showEditImage && <Icon
                            style={{fontSize: 209 / 4, position: 'absolute', zIndex: 4}}>
                            edit
                        </Icon>}
                    </div>
                </Fragment>
                }
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            {user && user.firstName} {user && user.lastName}
                        </Typography>

                        <Grid container>
                            <Grid item xs={12} md={6}>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {user && user.email}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {user && user.pole}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {getPhoneNumer()}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {getNumeroPermis()}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" onClick={() => setOpenPopupProfil(true)}>
                            Modifier
                        </Button>
                        <Button size="small" color="primary" onClick={() => setOpenPopupPassword(true)}>
                            Changer mot de passe
                        </Button>
                    </CardActions>
                </div>
            </Card>
        </React.Fragment>
    )
};

BlocProfil.propTypes = {
    classes: PropTypes.object,
    user: PropTypes.object,
    updateProfil: PropTypes.func,
    updatePassword: PropTypes.func,
    fetchImageUser: PropTypes.func,
    updateImage: PropTypes.func
};

export default withStyles(theme => ({
    card: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    },
    content: {
        flex: '1 0 auto'
    },
    imageContainer: {
        width: 209,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        position: 'relative',
        height: '100%',
        width: '100%',
        zIndex: 2
    }
}))(BlocProfil);
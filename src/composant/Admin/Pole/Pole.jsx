import React, {useEffect, useState} from 'react';
import * as PropTypes from 'prop-types';
import Table from "../../Commun/Table/Table";
import Ajouter from './action/Ajouter';

import columns from './columns';
import Supprimer from "./action/Supprimer";

const Pole = props => {

    const {fetchPoles, poleList, fetchNewPole, fetchDeletePole} = props;
    const [nouveauPole, setNouveauPole] = useState(false);
    const [supressionPole, setSuppressionPole] = useState();

    useEffect(() => {
        fetchPoles();
    }, [fetchPoles]);

    const openPole = row => {

    };

    const ajouterPole = nouveauPole => {
        fetchNewPole(nouveauPole, success => {
            if (success) {
                setNouveauPole(false);
            }
        });
    };

    const supprimerPole = () => {
        supressionPole.forEach(pole => {
            fetchDeletePole(pole.poleId);
        })
        setSuppressionPole(undefined);
    };

    return (
        <React.Fragment>
            <Table
                title={"Gestion des pôles"}
                columns={columns}
                data={poleList}
                onRowClicked={openPole}
                onAdd={() => setNouveauPole(true)}
                onDelete={setSuppressionPole}
            />

            <Ajouter
                open={nouveauPole}
                onClose={() => setNouveauPole(false)}
                onAccept={ajouterPole}
            />

            <Supprimer
                open={supressionPole}
                onClose={() => setSuppressionPole(undefined)}
                onAccept={supprimerPole}
            />

        </React.Fragment>
    )
};

Pole.propTypes = {
    fetchPoles: PropTypes.func,
    poleList: PropTypes.array,
    fetchNewPole: PropTypes.func,
    fetchDeletePole: PropTypes.func
};

export default Pole;

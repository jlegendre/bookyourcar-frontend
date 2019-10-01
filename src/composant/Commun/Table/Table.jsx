import React from "react";
import * as PropTypes from 'prop-types';
import Paper from "@material-ui/core/Paper";
import DataTable from "react-data-table-component"
import Typography from "@material-ui/core/Typography";
import _ from 'lodash';
import {Button} from "@material-ui/core";


const Table = props => {

    const createColonne = ligne => {
        return {
            name: <Typography color="primary">{ligne.name}</Typography>,
            sortable: ligne.sortable,
            selector: ligne.selector,
            cell: row => <Typography>{row[ligne.selector]}</Typography>
        }
    };

    const boutonAjouter = () => {
        let button = <Button
            variant="contained"
            color="primary"
            onClick={props.onAdd}
        >
            Ajouter
        </Button>;
        return props.onAdd ? button : undefined
    };


    return (
        <Paper>
            <DataTable
                title={<Typography component={"h4"} variant={"h4"}>{props.title}</Typography>}
                columns={_.map(props.columns, createColonne)}
                data={props.data}
                onRowClicked={props.onClick}
                highlightOnHover
                actions={boutonAjouter()}
                noDataComponent={<Typography>Aucune donnée n'a été trouvée.</Typography>}
            />
        </Paper>
    )
};

Table.propTypes = {
    title: PropTypes.string.isRequired,
    columns: PropTypes.array.isRequired,
    data: PropTypes.array,
    onClick: PropTypes.func,
    onAdd: PropTypes.func
};

export default Table;
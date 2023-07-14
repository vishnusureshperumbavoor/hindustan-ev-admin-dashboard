import { Grid } from '@mui/material';
import MuiTypography from '@mui/material/Typography';
import SubCard from 'ui-component/cards/SubCard';
import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

const TableInventory = () => {
    const { data, loading } = useDemoData({
        dataSet: 'Commodity',
        rowLength: 5,
        maxColumns: 7
    });

    return (
        <>
            {/* <SubCard> */}
                <Grid container direction="column">
                    <div style={{ height: 300, width: '100%', padding: '5px' }}>
                        <DataGrid {...data} loading={loading} slots={{ toolbar: GridToolbar }} />
                    </div>
                </Grid>
            {/* </SubCard> */}
        </>
    );
};

export default TableInventory;

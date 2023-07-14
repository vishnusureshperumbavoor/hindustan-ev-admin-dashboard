// material-ui
import { Grid, Link } from '@mui/material';
import MuiTypography from '@mui/material/Typography';

// project imports
import { gridSpacing } from 'store/constant';
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import FormInventory from 'components/inventory/FormInventory';
import TableInventory from 'components/inventory/TableInventory';

// ==============================|| INVENTORY MANAGEMENT ||============================== //

const Inventory = () => (
    <MainCard title="Inventory Management System">
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sm={12}>
                <FormInventory/>
            </Grid>
            <Grid item xs={12} sm={12}>
                <TableInventory/>
            </Grid>
        </Grid>
    </MainCard>
);

export default Inventory;

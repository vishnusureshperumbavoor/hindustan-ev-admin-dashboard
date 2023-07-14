// material-ui
import { Grid, Link } from '@mui/material';
import MuiTypography from '@mui/material/Typography';

// project imports
import { gridSpacing } from 'store/constant';
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import FormCustomers from 'components/customers/FormCustomers';
import TableCustomers from 'components/customers/TableCustomers';

// ==============================|| CUSTOMERS MANAGEMENT ||============================== //
export const meta = () => ({
    title: 'Dashboard | Hindustan EV Motors',
    description:
        'Hindustan EV Motors is a leading electric vehicle manufacturer in Kerala, India. Our mission is to provide affordable and sustainable transportation solutions to the masses.',
    keywords: ['Hindustan EV Motors', 'electric vehicles', 'sustainable transportation', 'Landi Lanzo'],
    ogImage: 'https://hindustanevmotors.com/wp-content/uploads/2022/12/LAN.png'
});

const Customers = () => (
    <MainCard title="Customers Management System">
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sm={12}>
                <FormCustomers />
            </Grid>
            <Grid item xs={12} sm={12}>
                <TableCustomers />
            </Grid>
        </Grid>
    </MainCard>
);

export default Customers;

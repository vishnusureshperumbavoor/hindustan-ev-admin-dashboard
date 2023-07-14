import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import { gridSpacing } from 'store/constant';
import EarningCard from 'components/dashboard/RevenueCard';
import TotalOrderLineCard from 'components/dashboard/SalesCard';
import TotalIncomeDarkCard from 'components/dashboard/ExpensesCard';
import TotalIncomeLightCard from 'components/dashboard/IncomeLightCard';
import TotalGrowthBarCard from 'components/dashboard/GrowthBarCard';
import PopularCard from 'components/dashboard/PopularCard';

// meta export
export const meta = () => ({
    title: 'Dashboard | Hindustan EV Motors',
    description:
        'Hindustan EV Motors is a leading electric vehicle manufacturer in Kerala, India. Our mission is to provide affordable and sustainable transportation solutions to the masses.',
    keywords: ['Hindustan EV Motors', 'electric vehicles', 'sustainable transportation', 'Landi Lanzo'],
    ogImage: 'https://hindustanevmotors.com/wp-content/uploads/2022/12/LAN.png'
});

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <EarningCard isLoading={isLoading} />
                    </Grid>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <TotalOrderLineCard isLoading={isLoading} />
                    </Grid>
                    <Grid item lg={4} md={12} sm={12} xs={12}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <TotalIncomeDarkCard isLoading={isLoading} />
                            </Grid>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <TotalIncomeLightCard isLoading={isLoading} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={8}>
                        <TotalGrowthBarCard isLoading={isLoading} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <PopularCard isLoading={isLoading} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Dashboard;

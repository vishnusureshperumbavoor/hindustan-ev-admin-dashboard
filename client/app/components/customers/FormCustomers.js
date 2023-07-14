import { useTheme } from '@mui/material/styles';
import { Box, Button, TextField, InputLabel, MenuItem, FormControl, Select, Grid, Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import AnimateButton from 'ui-component/extended/AnimateButton';

const useStyles = makeStyles((theme) => ({
    input: {
        display: 'none'
    },
    previewContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: theme.spacing(2)
    },
    previewImage: {
        height: 'auto',
        width: '100%',
        maxWidth: '200px' // Adjust the maximum width as needed
    },
    uploadButton: {
        marginTop: theme.spacing(2)
    }
}));

const FormCustomers = () => {
    const theme = useTheme();
    const [vehicleType, setVehicleType] = useState('');

    const handleChange = (e) => {
        setVehicleType(e.target.value);
    };

    const classes = useStyles();
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setSelectedImage(URL.createObjectURL(file));
    };

    // testing
    const [imageUrl, setImageUrl] = useState(null);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImageUrl(reader.result);
        };

        reader.readAsDataURL(file);
    };
    return (
        <>
            {/* <SubCard> */}
            <Grid container direction="column" justifyContent="flex-end">
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item sx={{ m: { xs: 1, sm: 1 }, mb: 0 }}>
                        <Grid container spacing={2} alignItems="center" justifyContent="center">
                            <Grid item xs={12}>
                                <Formik
                                    initialValues={{
                                        email: '',
                                        password: '',
                                        submit: null
                                    }}
                                    validationSchema={Yup.object().shape({
                                        email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                                        password: Yup.string().max(255).required('Password is required')
                                    })}
                                    onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                                        try {
                                            if (scriptedRef.current) {
                                                setStatus({ success: true });
                                                setSubmitting(false);
                                            }
                                        } catch (err) {
                                            console.error(err);
                                            if (scriptedRef.current) {
                                                setStatus({ success: false });
                                                setErrors({ submit: err.message });
                                                setSubmitting(false);
                                            }
                                        }
                                    }}
                                >
                                    <form noValidate>
                                        <Grid container spacing={1}>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    fullWidth
                                                    label="Customer Name"
                                                    margin="normal"
                                                    name="fname"
                                                    type="text"
                                                    defaultValue=""
                                                    sx={{ ...theme.typography.customInput }}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    fullWidth
                                                    label="Address"
                                                    margin="normal"
                                                    name="fname"
                                                    type="text"
                                                    defaultValue=""
                                                    sx={{ ...theme.typography.customInput }}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    fullWidth
                                                    label="Email Address"
                                                    margin="normal"
                                                    name="lname"
                                                    type="text"
                                                    defaultValue=""
                                                    sx={{ ...theme.typography.customInput }}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    fullWidth
                                                    label="Phone Number"
                                                    margin="normal"
                                                    name="lname"
                                                    type="text"
                                                    defaultValue=""
                                                    sx={{ ...theme.typography.customInput }}
                                                />
                                            </Grid>

                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    fullWidth
                                                    label="Vehicle Number"
                                                    margin="normal"
                                                    name="lname"
                                                    type="text"
                                                    defaultValue=""
                                                    sx={{ ...theme.typography.customInput }}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Box sx={{ mt: 2 }}>
                                            <AnimateButton>
                                                <Button
                                                    disableElevation
                                                    fullWidth
                                                    size="large"
                                                    type="submit"
                                                    variant="contained"
                                                    color="secondary"
                                                >
                                                    Add Details
                                                </Button>
                                            </AnimateButton>
                                        </Box>
                                    </form>
                                </Formik>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {/* </SubCard> */}
        </>
    );
};

export default FormCustomers;

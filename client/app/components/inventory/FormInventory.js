import { useTheme } from '@mui/material/styles';
import { Box, Button, TextField, InputLabel, MenuItem, FormControl, Select, Grid, Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
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

const FormInventory = () => {
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
            <Grid container direction="column" justifyContent="flex-end">
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item sx={{ m: { xs: 1, sm: 1 }, mb: 0 }}>
                        <Grid container spacing={2} alignItems="center" justifyContent="center">
                            <Grid item xs={12}>
                                <form noValidate>
                                    <Grid container spacing={1}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth
                                                label="Vehicle Number"
                                                margin="normal"
                                                name="vehicleNumber"
                                                type="text"
                                                defaultValue=""
                                                sx={{ ...theme.typography.customInput }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth
                                                label="Chassis Number"
                                                margin="normal"
                                                name="chassisNumber"
                                                type="text"
                                                defaultValue=""
                                                sx={{ ...theme.typography.customInput }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth
                                                label="Vehicle Model"
                                                margin="normal"
                                                name="vehicleModel"
                                                type="text"
                                                defaultValue=""
                                                sx={{ ...theme.typography.customInput }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl fullWidth margin="normal">
                                                <InputLabel id="demo-simple-select-label">Vehicle Type</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={vehicleType}
                                                    label="Vehicle Type"
                                                    onChange={handleChange}
                                                    name="vehicleType"
                                                >
                                                    <MenuItem value={'Landi E Horse'}>Landi E Horse</MenuItem>
                                                    <MenuItem value={'Landi Eagle Jet'}>Landi Eagle Jet</MenuItem>
                                                    <MenuItem value={'Landi E Rider'}>Landi E Rider</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth
                                                label="Production Date"
                                                margin="normal"
                                                name="productionDate"
                                                type="text"
                                                defaultValue=""
                                                sx={{ ...theme.typography.customInput }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 3 }}>
                                                <label htmlFor="upload-image">
                                                    <Button variant="contained" component="span" sx={{ p: 1 }}>
                                                        Upload Inventory Image
                                                    </Button>
                                                    <input
                                                        id="upload-image"
                                                        hidden
                                                        accept="image/*"
                                                        type="file"
                                                        onChange={handleFileUpload}
                                                        name="InventoryImage"
                                                    />
                                                </label>
                                                {imageUrl && <img src={imageUrl} alt="Uploaded Image" height="50" />}
                                            </Stack>
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
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default FormInventory;

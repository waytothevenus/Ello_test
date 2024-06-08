// material-ui
import { LinearProgressProps } from '@mui/material/LinearProgress';
import { CircleLoader } from './atoms/circleLoader';
import { LoadingLoader } from './atoms/loadingLoader';
import { Box, Grid, Modal } from '@mui/material';

// loader style

// ==============================|| Loader ||============================== //

export interface LoaderProps extends LinearProgressProps {}

const Loader = () => (
  <Modal open={true}>
    <Box
      sx={{
        position: 'absolute',
        height: '100%',
        width: '100%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 24,
        p: 4
      }}
    >
      <Grid container spacing={5} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircleLoader />
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
          <LoadingLoader content="Loading" />
        </Grid>
      </Grid>
    </Box>
  </Modal>
);

export default Loader;

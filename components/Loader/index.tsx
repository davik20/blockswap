import {Stack, Skeleton} from '@mui/material'

interface Props {
}

export default function Loader(props: Props) {

  return (
    <Stack spacing={1} width={280} height={400}>

    <Skeleton sx={{bgcolor: '#80808026'}} variant="rectangular" width={280} height={100} />
    <Skeleton sx={{bgcolor: '#80808026'}} variant="rectangular" width={280} height={100} />
    <Skeleton sx={{bgcolor: '#80808026'}} variant="rectangular" width={280} height={100} />
    <Skeleton sx={{bgcolor: '#80808026'}} variant="rectangular" width={280} height={100} />

  </Stack>
  );
}

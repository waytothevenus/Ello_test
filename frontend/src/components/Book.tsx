import { Card, Typography, CardMedia, IconButton, Stack } from '@mui/material';
import { IoIosClose } from 'react-icons/io';

interface BookProps {
  title: string;
  author: string;
  coverPhotoURL: string;
  readingLevel: string;
  removeFromReadingList: (title: string) => void;
}

const Book = (props: BookProps) => {
  return (
    <Card
      sx={{
        borderRadius: '10px',
        position: 'relative',
        backgroundColor: '#CFFAFA',
        padding: '5px',
        paddingBottom: '5px',
        width: '96%',
        height: '380px'
      }}
    >
      <IconButton
        sx={{
          position: 'absolute',
          top: 5,
          right: 5,
          zIndex: 1,
          ':hover': {
            backgroundColor: '#F76434'
          }
        }} // Adjusted position values
        onClick={() => props.removeFromReadingList(props.title)}
      >
        <IoIosClose />
      </IconButton>
      <CardMedia image={props.coverPhotoURL} sx={{ height: '300px', width: '100%', borderRadius: '10px', marginBottom: '10px' }} />
      <Typography sx={{ marginBottom: '5px', textAlign: 'center' }}>{props.title}</Typography>
      <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
        <Typography sx={{ fontSize: '14px', color: 'grey' }}>Author: {props.author}</Typography>
        <Typography sx={{ fontSize: '14px', color: 'grey' }}>Level: {props.readingLevel}</Typography>
      </Stack>
    </Card>
  );
};

export default Book;

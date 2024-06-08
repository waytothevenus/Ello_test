import { gql, useQuery } from '@apollo/client';
import { Button, CardMedia, Stack, TextField, Typography } from '@mui/material';
import { Autocomplete, Grid } from '@mui/material';
import Book from 'components/Book';
import Loader from 'components/Loader';
import { useEffect, useState } from 'react';
import { dispatch } from 'store';
import { openSnackbar } from 'store/reducers/snackbar';
import { BookType } from 'types/BookType';

const BOOKS_QUERY = gql`
  query Books {
    books {
      title
      author
      readingLevel
      coverPhotoURL
    }
  }
`;

const Books = () => {
  const { loading, error, data } = useQuery(BOOKS_QUERY); //fetch data from GraphQL backend
  const [books, setBooks] = useState<BookType[]>([]); //Books list to be displayed
  const [readingList, setReadingList] = useState<BookType[]>([]); //Reading List
  const [title, setTitle] = useState<string>('');
  const handleAddReadingList = (event: any, book: BookType) => {
    //add book to reading list
    event?.stopPropagation(); // Optional: Prevent event propagation
    setBooks((books) => books.filter((item) => item.title !== book.title));
    const booksBuffer = [...readingList, book];
    setReadingList(booksBuffer);
  };

  const handleRemoveReadingList = (title: string) => {
    //remove book from reading list
    setBooks((books) => {
      const bookToAdd = readingList.find((book) => book.title === title);

      if (bookToAdd) {
        return [...books, bookToAdd];
      } else {
        // Handle the case where no book with the specified title is found
        console.log('Book with title not found in readingList');
        return books; // Return the original books array
      }
    });
    setReadingList((readingList) => readingList.filter((book) => book.title !== title));
  };

  useEffect(() => {
    //initiate page with fetch result
    if (loading) {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Loading...',
          variant: 'alert',
          alert: {
            color: 'info'
          },
          close: true
        })
      );
    }
    if (error) {
      dispatch(
        openSnackbar({
          open: true,
          message: error.message,
          variant: 'alert',
          alert: {
            color: 'warning'
          },
          close: true
        })
      );
    }
    if (data) {
      setBooks(data.books);
    }
  }, [loading, error, data]);

  const handleSearchChange = (event: React.ChangeEvent<{}>, value: BookType | null) => {
    if (value) {
      setTitle(value.title);
    }
  };

  useEffect(() => {
    //filter book list with title
    if (title) {
      setBooks((prevBooks) => prevBooks.filter((book) => book.title.includes(title)));
    }
  }, [title]);

  return (
    <Grid container spacing={2}>
      <>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', marginTop: '5vh' }}>
              <Autocomplete
                sx={{ width: '500px' }}
                options={books}
                getOptionLabel={(option: BookType) => option?.title}
                renderOption={(props, option: BookType) => (
                  <Stack
                    direction={'row'}
                    spacing={1}
                    sx={{
                      backgroundColor: '#CFFAFA',
                      borderRadius: '0.3rem',
                      marginBottom: '0.1rem',
                      alignItems: 'center',
                      padding: '1vh',
                      justifyContent: 'space-between'
                    }}
                  >
                    <CardMedia
                      image={option.coverPhotoURL}
                      sx={{ height: '50px', width: '50px', borderRadius: '0.3rem', backgroundColor: '#FFE6DC' }}
                    />
                    <Typography sx={{ fontSize: '16px', width: '80%' }}>{option.title}</Typography>
                    <Typography sx={{ fontSize: '14px', color: 'grey' }}>
                      ({option.author}) - {option.readingLevel}
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{ backgroudColor: '#5ACCCC', textTransform: 'none', width: '60px', alignItems: 'right' }}
                      onClick={(event) => handleAddReadingList(event, option)}
                    >
                      Add
                    </Button>
                  </Stack>
                )}
                onChange={handleSearchChange}
                renderTags={() => null}
                renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Please insert book title" />}
              />
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={5} sx={{ paddingLeft: '20px', paddingRight: '20px' }}>
                {readingList.length > 0 &&
                  readingList?.map((item: BookType) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={item.title}>
                      <Book {...item} removeFromReadingList={handleRemoveReadingList} />
                    </Grid>
                  ))}
              </Grid>
            </Grid>
          </>
        )}
      </>
    </Grid>
  );
};

export default Books;

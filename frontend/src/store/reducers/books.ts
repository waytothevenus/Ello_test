// import { PayloadAction, createSlice } from '@reduxjs/toolkit';
// import { RootState } from 'store';
// import { BookType } from 'types/BookType';
// import { useQuery, gql } from '@apollo/client';
// import { openSnackbar } from './snackbar';

// export const getAllJobs = () => async (dispatch: any) => {
//   try {
//     const { error, data } = useQuery(
//       gql`
//         query Books {
//           books {
//             title
//             author
//             readingLevel
//             coverPhotoURL
//           }
//         }
//       `
//     );
//     console.log(data);
//     if (error) {
//       dispatch(
//         openSnackbar({
//           opem: true,
//           message: error.message,
//           variant: 'alert',
//           alert: {
//             color: 'warning'
//           },
//           close: true
//         })
//       );
//     } else {
//       dispatch(setBooks(data));
//     }
//   } catch (error: any) {}
// };

// export const getBookByTitle = (title: string) => async (dispatch: any) => {
//   try {
//     const { data, error } = useQuery(
//       gql`
//         query BooksByTitle($title: String!) {
//           booksByTitle(title: $title) {
//             title
//             author
//             coverPhotoURL
//             readingLevel
//           }
//         }
//       `
//     );
//     if (error) {
//       dispatch(
//         openSnackbar({
//           open: true,
//           message: error.message,
//           variant: 'alert',
//           alert: {
//             color: 'warning'
//           },
//           close: true
//         })
//       );
//     } else {
//       console.log(data);
//       dispatch(setBooks(data));
//     }
//   } catch (error: any) {}
// };

// interface JobState {
//   books: BookType[];
//   readingList: BookType[];
// }

// const initialState: JobState = {
//   books: [],
//   readingList: []
// };

// export const jobSlice = createSlice({
//   name: 'jobs',
//   initialState,
//   reducers: {
//     setBooks: (state, action: PayloadAction<BookType[] | any>) => {
//       state.books = action.payload;
//     },
//     setReadingList: (state, action: PayloadAction<BookType[]>) => {
//       state.readingList = action.payload;
//     }
//   }
// });
// export const { setBooks } = jobSlice.actions;
// export const selectedJobs = (state: RootState) => state.books;
// export default jobSlice.reducer;

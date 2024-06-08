// // action - state management
// import { REGISTER, LOGIN, LOGOUT, VERIFY } from './actions';

// // types
// import { AuthProps, AuthActionProps } from 'types/auth';

// // initial state
// export const initialState: AuthProps = {
//   isLoggedIn: false,
//   isInitialized: false,
//   user: null,
//   isVerified: false
// };

// // ==============================|| AUTH REDUCER ||============================== //

// const auth = (state = initialState, action: AuthActionProps) => {
//   switch (action.type) {
//     case REGISTER: {
//       const { user } = action.payload!;
//       return {
//         ...state,
//         user
//       };
//     }
//     case LOGIN: {
//       const { user } = action.payload!;
//       return {
//         ...state,
//         isLoggedIn: true,
//         isInitialized: true,
//         user
//       };
//     }
//     case VERIFY: {
//       return {
//         ...state,
//         isVerified: true
//       };
//     }
//     case LOGOUT: {
//       localStorage.removeItem('serviceToken');
//       return {
//         ...state,
//         isInitialized: true,
//         isLoggedIn: false,
//         user: null
//       };
//     }
//     default: {
//       return { ...state };
//     }
//   }
// };

// export default auth;

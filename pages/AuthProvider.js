  
//   export const authProvider = {
//     // authentication
//     login: ({ username, password }) => {
//       const request = new Request(
//         process.env.REACT_APP_API_URL + '/users/login',
//         {
//           method: 'POST',
//           body: JSON.stringify({ email: username, password }),
//           headers: new Headers({ 'Content-Type': 'application/json' }),
//         }
//       );
//       return fetch(request)
//         .then((response) => {
//           if (response.status < 200 || response.status >= 300) {
//             throw new Error(response.statusText);
//           }
//           return response.json();
//         })
//         .then((auth) => {
//           localStorage.setItem(
//             'auth',
//             JSON.stringify({ ...auth, fullName: username })
//           );
//         })
//         .catch(() => {
//           throw new Error('Network error');
//         });
//     },
//     checkError: (error) => {
//       const status = error.status;
//       if (status === 401 || status === 403) {
//         localStorage.removeItem('auth');
//         return Promise.reject();
//       }
//       // other error code (404, 500, etc): no need to log out
//       return Promise.resolve();
//     },
//     checkAuth: () =>
//       localStorage.getItem('auth')
//         ? Promise.resolve()
//         : Promise.reject({ message: 'login required' }),
//     logout: () => {
//       localStorage.removeItem('auth');
//       return Promise.resolve();
//     },
//     getIdentity: () => {
//       try {
//         const { id, fullName, avatar } = JSON.parse(localStorage.getItem('auth'));
//         return Promise.resolve({ id, fullName, avatar });
//       } catch (error) {
//         return Promise.reject(error);
//       }
//     },
//     getPermissions: (params) => Promise.resolve(),
//   };
  

export default {
    // called when the user attempts to log in
    login: ({ username }) => {
        localStorage.setItem('username', username);
        // accept all username/password combinations
        return Promise.resolve();
    },
    // called when the user clicks on the logout button
    logout: () => {
        localStorage.removeItem('username');
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        return localStorage.getItem('username')
            ? Promise.resolve()
            : Promise.reject();
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
};
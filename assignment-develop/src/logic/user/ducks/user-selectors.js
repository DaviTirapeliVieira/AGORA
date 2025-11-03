export const usersSelector = state => state.user.userList.users;
export const userListLoadingSelector = state => state.user.userList.loading;
export const userListErrorSelector = state => state.user.userList.error;

export const userDetailsSelector = state => state.user.userDetails.user;
export const userDetailsLoadingSelector = state =>
  state.user.userDetails.loading;
export const userDetailsErrorSelector = state => state.user.userDetails.error;

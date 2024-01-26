const tempUsers = (store) => store.tempData;
const userDataStore = (store) => store.apiSearch;

export const userData = (store) => userDataStore(store).queries;
export const tempData = (store) => tempUsers(store).users.data;

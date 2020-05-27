export const actionType = {
  login: "LOGIN"
};

export function postLogin(email, password) {
  return dispatch => {
    api
      .postLoginApi(email, password)
      .then(login => dispatch({ type: actionType.login, login }));
  };
}

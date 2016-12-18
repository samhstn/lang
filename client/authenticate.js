export default (nextState, replace, next) => {
  const state = nextState.location.state;
  if (state) {
    authenticate(state.credientials)
      .then(() => next())
      .catch(() => {
        replace('/login');
        next();
      });
  } else {
    replace('/login');
    next();
  }
}

const authenticate = (creds) => {
  return new Promise((resolve, reject) => {
    resolve(true);
  });
}

export const increment = payload => {
  return {
    type: "INCREMENT",
    payload
  };
};

export const decrement = payload => {
  return {
    type: "DECREMENT",
    payload
  };
};

export const login = () => {
  return {
    type: "LOGIN"
  };
};

export const logout = () => {
  return {
    type: "LOGOUT"
  };
};

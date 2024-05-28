export const userRegisterReducers = (state = {}, action) => {
  switch (action.type) {
    case "USER_REGISTER_REQUEST":
      return {
        loading: true,
      };
    case "USER_REGISTER_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "USER_REGISTER_FAILED":
      return {
        loading: false,
        success: false,
      };
    default:
      return state;
  }
};

export const userLoginReducers = (state = {}, action) => {
  switch (action.type) {
    case "USER_LOGIN_REQUEST":
      return {
        loading: true,
      };
    case "USER_LOGIN_SUCCESS":
      return {
        loading: false,
        user: action.payload,
      };
    case "USER_LOGIN_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    case "USER_LOGOUT":
      return {
        loading: false,
        user: null,
      };
    default:
      return state;
  }
};

export const allUserReducers = (state = {}, action) => {
  switch (action.type) {
    case "ALL_USER_REQUEST":
      return {
        loading: true,
      };
    case "ALL_USER_SUCCESS":
      return {
        loading: false,
        users: action.payload,
      };
    case "ALL_USER_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

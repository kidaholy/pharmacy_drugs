export const allMedReducers = (state = {}, action) => {
  switch (action.type) {
    case "ALL_MED_REQUEST":
      return {
        loading: true,
      };
    case "ALL_MED_SUCCESS":
      return {
        loading: false,
        success: true,
        medData: action.payload,
      };
    case "ALL_MED_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const deleteMedReducers = (state = {}, action) => {
  switch (action.type) {
    case "DELETE_MED_REQUEST":
      return {
        loading: true,
      };
    case "DELETE_MED_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "DELETE_MED_FAILED":
      return {
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export const addMedReducers = (state = {}, action) => {
  switch (action.type) {
    case "ADD_MED_REQUEST":
      return {
        loading: true,
      };
    case "ADD_MED_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "ADD_MED_FAILED":
      return {
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

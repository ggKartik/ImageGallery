import {
  SHOW_ALL_IMAGE_REQUEST,
  SHOW_ALL_IMAGE_SUCCESS,
  SHOW_ALL_IMAGE_FAIL,
  CLEAR_ERRORS,
  ADD_IMAGE_FAIL,
  ADD_IMAGE_SUCCESS,
  ADD_IMAGE_REQUEST,
  ADD_IMAGE_RESET,
  IMAGE_REQUEST,
  IMAGE_SUCCESS,
  IMAGE_FAIL,
  EDIT_IMAGE_FAIL,
  EDIT_IMAGE_SUCCESS,
  EDIT_IMAGE_REQUEST,
} from "../constants/imageConstants";

export const showallimage = (state = {allimages:[]}, action) => {
  switch (action.type) {
    case SHOW_ALL_IMAGE_REQUEST:
      return {
        loading: true,
        allimages:[]
      };
    case SHOW_ALL_IMAGE_SUCCESS:
      return {
        loading: false,
        allimages: action.payload.images,
        perpageitem:action.payload.perpageitem,
        filteredimagecount:action.payload.filteredimagecount
      };
    case SHOW_ALL_IMAGE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const showoneimage = (state = {image:{}}, action) => {
  switch (action.type) {
    case IMAGE_REQUEST:
      return {
        loading: true,
        image:{}
      };
    case IMAGE_SUCCESS:
      return {
        loading: false,
        image: action.payload.image,
      };
    case IMAGE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const newProductReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_IMAGE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_IMAGE_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
      };
    case ADD_IMAGE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_IMAGE_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const editimage = (state = {}, action) => {
  switch (action.type) {
    case EDIT_IMAGE_REQUEST:
      return {
        loading: true,
      };
    case EDIT_IMAGE_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
      };
    case EDIT_IMAGE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
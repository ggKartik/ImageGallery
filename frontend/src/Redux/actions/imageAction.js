import {
  SHOW_ALL_IMAGE_REQUEST,
  SHOW_ALL_IMAGE_SUCCESS,
  SHOW_ALL_IMAGE_FAIL,
  CLEAR_ERRORS,
  ADD_IMAGE_FAIL,
  ADD_IMAGE_SUCCESS,
  ADD_IMAGE_REQUEST,
  IMAGE_REQUEST,
  IMAGE_SUCCESS,
  IMAGE_FAIL,
  EDIT_IMAGE_FAIL,
  EDIT_IMAGE_SUCCESS,
  EDIT_IMAGE_REQUEST,
  DELETE_IMAGE_FAIL,
  DELETE_IMAGE_REQUEST,
  DELETE_IMAGE_SUCCESS
} from "../constants/imageConstants";
import axios from "axios";

// Show all imgaes
export const imageaction = (keyword="",currentPage=1) => async (dispatch) => {
  try {
    dispatch({
      type: SHOW_ALL_IMAGE_REQUEST,
    });
    let link = `https://image-gallery-ggkartik.vercel.app/home/?keyword=${keyword}&page=${currentPage}`;
    const { data } = await axios.get(link);
    dispatch({
      type: SHOW_ALL_IMAGE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SHOW_ALL_IMAGE_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const addimageaction = (imageData) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_IMAGE_REQUEST,
    });
    const config = {
      headers: { "Content-Type": "application/json" },
    };

    let link = `https://image-gallery-ggkartik.vercel.app/home`;
    const { data } = await axios.post(link,imageData,config);
    dispatch({
      type: ADD_IMAGE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_IMAGE_FAIL,
      payload: error.response.data.message,
    });
  }
};
// Clearing Errors
export const clearerr = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};
  
export const oneimageaction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: IMAGE_REQUEST,
    });
    let link = `https://image-gallery-ggkartik.vercel.app/home/${id}`;
    const { data } = await axios.get(link);
    dispatch({
      type: IMAGE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: IMAGE_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const editimageaction = (imageData,id) => async (dispatch) => {
  try {
    dispatch({
      type: EDIT_IMAGE_REQUEST,
    });
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    let link = `https://image-gallery-ggkartik.vercel.app/home/${id}`;
    const { data } = await axios.patch(link,imageData,config);
    dispatch({
      type: EDIT_IMAGE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EDIT_IMAGE_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const deleteimageaction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_IMAGE_REQUEST,
    });
    let link = `https://image-gallery-ggkartik.vercel.app/home/${id}`;
    const { data } = await axios.delete(link);
    dispatch({
      type: DELETE_IMAGE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_IMAGE_FAIL,
      payload: error.response.data.message,
    });
  }
};
import streamsServer from "../apis/streamsServer";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  EDIT_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  DELETE_STREAM,
} from "../../types";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

// Action creaters for the streams

export const createStream = (formValues) => async (dispatch) => {
  const response = await streamsServer.post("/streams", formValues);
  console.log(response);
  dispatch({ type: CREATE_STREAM, payload: response });
};

export const fetchStreams = () => async (dispatch) => {
  const response = await streamsServer.get("/streams");

  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

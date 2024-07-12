// redux/actions/chatActions.js
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const SET_MESSAGES = 'SET_MESSAGES';

export const addMessage = (message) => {
    return (dispatch, getState) => {
      const currentMessages = getState().chat.messages;
      const updatedMessages = [...currentMessages, message];
      localStorage.setItem('chatMessages', JSON.stringify(updatedMessages));
      dispatch({
        type: ADD_MESSAGE,
        payload: message,
      });
    };
  };

export const setMessages = (messages) => ({
  type: SET_MESSAGES,
  payload: messages,
});

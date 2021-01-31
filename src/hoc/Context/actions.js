import axios from 'axios';

const ROOT_URL = 'https://randomuser.me/api/?results=28&nat=us&seed=e4d1e31b2e97cd57';
 
export async function getUsers(dispatch) {
  
  const requestOptions = {
    method: 'get',
    headers: { 'Content-Type': 'application/json' }
  };
 
  try {
    dispatch({ type: 'REQUEST_GET_USER' });

    let response = await axios(`${ROOT_URL}`, requestOptions);
    let data = await response.data.results;
 
    if (data) {
      dispatch({ type: 'GET_USER_SUCCESS', payload: data });
      localStorage.setItem('listUsers', JSON.stringify(data));
      return data
    }
 
    dispatch({ type: 'GET_USER_ERROR', error: data.errors[0] });
    return;
  } catch (error) {
    dispatch({ type: 'GET_USER_ERROR', error: error.response.data });
  }
}
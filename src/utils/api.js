import axios from 'axios'
import { enhancedURL } from '../constants'



const authHeaders = () => {
  return process.env.NODE_ENV === "production"
  ? { "origin": "https://champs-lol.herokuapp.com", "X-Riot-Token": process.env.REACT_APP_API_KEY }
  : { "X-Riot-Token": process.env.REACT_APP_API_KEY }

}

export const get = (endpoint) => {
  return axios({
    url: enhancedURL + endpoint,
    method: 'get',
    headers: authHeaders(),
  });
};

export const post = (endpoint, data) => {
  
  return axios({
    url: enhancedURL + endpoint,
    method: 'post',
    headers: authHeaders(),
    responseType: 'json',
    data
  }).then((response) => {
      return response
  })
  
};
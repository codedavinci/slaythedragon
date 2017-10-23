import axios from 'axios'
import { enhancedURL } from '../constants'



const authHeaders = () => {
  return { "X-Riot-Token": "RGAPI-7dda96fa-a43b-47ff-97f5-e7d870dc30c7" }
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
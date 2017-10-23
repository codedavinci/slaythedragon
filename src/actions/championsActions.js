import * as api from '../utils/api'
import champs from '../champs-mock.json'

const getChampionsBegin = () => ({ type: "GET_CHAMPIONS_BEGIN" })
const getChampionsSuccess = (champs) => ({ type: "GET_CHAMPIONS_SUCCESS", champs })
const getChampionsError = (err) => ({ type: "GET_CHAMPIONS_ERROR", err })


export const getChampions = () => {

  return (dispatch) => {
    dispatch(getChampionsBegin())
    if (process.env.NODE_ENV === "production") {
      getChampionsTrueSource(dispatch)
    } else {
      getChampionsMock(dispatch)
    }
  }

  const getChampionsTrueSource = (dispatch) => {
    return api.get("/lol/static-data/v3/champions")
      .then(champs => dispatch(getChampionsSuccess(champs.data)))
      .catch(err => dispatch(getChampionsError(err)))
  }
}

const getChampionsMock = (dispatch) => {
  return setTimeout(() => {
    dispatch(getChampionsSuccess(champs))
  }, 2000)
}



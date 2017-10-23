import React from 'react'
import './main.css'
import { connect } from 'react-redux'
import InfoList from './InfoList'
import { Error, Loader } from '../common'



const Main = ({ champs }) => {
  const { isLoading, error, champions } = champs
  
  if(error) { return <Error err={error} />}
  return (
    <div className="main-container">
      {  isLoading 
        ? <Loader /> 
        : <InfoList champs={champions} />
      }
    </div>
  )
}


export default connect(state => ({ champs: {...state.champs}}))(Main)

import React from 'react'

export const NotFound = ({ staticContext = {} }) => {
  staticContext.status = 404
  return <h1>Oops, nothing here!</h1>
}

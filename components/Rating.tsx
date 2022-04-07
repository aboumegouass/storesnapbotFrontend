import React from 'react'

export default function Rating(props: any) {
  switch (props.rate) {
    case 0:
      return (
        <span className='app-rating'>
          <span className="material-icons material-icons-outlined">grade</span>
          <span className="material-icons material-icons-outlined">grade</span>
          <span className="material-icons material-icons-outlined">grade</span>
          <span className="material-icons material-icons-outlined">grade</span>
          <span className="material-icons material-icons-outlined">grade</span>
        </span>
      )
    case 1:
      return (
        <span className='app-rating'>
          <span className="material-icons">grade</span>
          <span className="material-icons material-icons-outlined">grade</span>
          <span className="material-icons material-icons-outlined">grade</span>
          <span className="material-icons material-icons-outlined">grade</span>
          <span className="material-icons material-icons-outlined">grade</span>
        </span>
      )
    case 2:
      return (
        <span className='app-rating'>
          <span className="material-icons">grade</span>
          <span className="material-icons">grade</span>
          <span className="material-icons material-icons-outlined">grade</span>
          <span className="material-icons material-icons-outlined">grade</span>
          <span className="material-icons material-icons-outlined">grade</span>
        </span>
      )
    case 3:
      return (
        <span className='app-rating'>
          <span className="material-icons">grade</span>
          <span className="material-icons">grade</span>
          <span className="material-icons">grade</span>
          <span className="material-icons material-icons-outlined">grade</span>
          <span className="material-icons material-icons-outlined">grade</span>
        </span>
      )
    case 4:
      return (
        <span className='app-rating'>
          <span className="material-icons">grade</span>
          <span className="material-icons">grade</span>
          <span className="material-icons">grade</span>
          <span className="material-icons">grade</span>
          <span className="material-icons material-icons-outlined">grade</span>
        </span>
      )
    case 5:
      return (
        <span className='app-rating'>
          <span className="material-icons">grade</span>
          <span className="material-icons">grade</span>
          <span className="material-icons">grade</span>
          <span className="material-icons">grade</span>
          <span className="material-icons">grade</span>
        </span>
      )

    default:
      return (
        <span className='app-rating'>
          <span className="material-icons material-icons-outlined">grade</span>
          <span className="material-icons material-icons-outlined">grade</span>
          <span className="material-icons material-icons-outlined">grade</span>
          <span className="material-icons material-icons-outlined">grade</span>
          <span className="material-icons material-icons-outlined">grade</span>
        </span>
      )
  }

}

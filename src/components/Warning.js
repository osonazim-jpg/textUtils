import React from 'react'

export default function Warning(props) {
  return (
    props.warning && <div className={`alert alert-${props.warning.tpe} alert-dismissible fade show`} role="alert">
        <strong>{props.warning.tpe}</strong> {props.warning.mesg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

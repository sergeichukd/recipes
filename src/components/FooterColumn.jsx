import React from 'react'

export default function (props) {
  const rows = props.data.content.map((row, index) => {
    return <a className='footer-row' key={index} href={row.href}>
      {row.text}
    </a>
  })

  return <div className="footer-column">
    <div className="footer-column-header">
      {props.data.title}
    </div>
    <div className="footer-column-content">
      {rows}
    </div>
  </div>
}

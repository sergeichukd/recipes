import React from 'react'
import FooterColumn from './FooterColumn.jsx'

import footerData from '../../data/footer_data'

export default function () {
  const columns = Object.keys(footerData).map((key, index) => {
    return <FooterColumn data={footerData[key]} key={key}/>
  })

  return <div className="footer">
    {columns}
  </div>
}

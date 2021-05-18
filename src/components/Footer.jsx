import React from 'react'
import FooterColumn from './FooterColumn.jsx'

export default class Footer extends React.Component {
  render() {
    const columns = Object.keys(this.props.data).map((key, index) => {
      return <FooterColumn data={this.props.data[key]} key={key}/>
    })

    return <div className="footer">
      {columns}
    </div>
  }
}

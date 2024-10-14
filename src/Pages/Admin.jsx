import React from 'react'
import Sidebar from './../Layout/Dashboard/Sidebar/Sidebar'
import Content from './../Layout/Dashboard/Content/Content'

function Admin() {
  return (
    <div style={{background:"black"}}>
        <Sidebar />
        <Content />
    </div>
  )
}

export default Admin
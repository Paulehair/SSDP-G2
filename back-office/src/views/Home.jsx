import React from 'react'
import Sidebar from './../elements/Sidebar'
import Planning from './../elements/Planning'

export default ({ sectors }) => {
  return (
    <div className="wrapper --main">
      {/* <Sidebar sectors={sectors} /> */}
      <Planning />
    </div>
  )
}

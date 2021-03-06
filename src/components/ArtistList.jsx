import React from 'react'
import Artist from './Artist'

const fakeData = new Array(20).fill()

function ArtistList({ data = fakeData }) {
  return (
    <div className="row artist--container">
      {data.length > 0 && data.map((item, index) => <Artist key={item?._id || index} data={item} />)}
    </div>
  )
}

ArtistList.propTypes = {}

export default ArtistList

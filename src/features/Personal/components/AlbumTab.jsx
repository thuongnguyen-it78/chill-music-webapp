import collectionAPI from 'api/collectionAPI'
import AlbumList from 'components/AlbumList'
import EmptyBox from 'components/EmptyBox'
import React, { useEffect, useState } from 'react'

function AlbumTab(props) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({})

  useEffect(() => {
    try {
      ;(async () => {
        setLoading(true)
        const { data } = await collectionAPI.getInfo()
        setData(data)
      })()
    } catch (error) {
      console.log('Failed to fetch')
    } finally {
      setLoading(false)
    }
  }, [])

  const { favoriteAlbumList = [] } = data || {}
  return (
    <div className="grid container__tab tab-album">
      <div className="container__section row">
        <div className="col l-12 m-12 c-12 mb-16">
          <div className="container__header">
            <a href="#" className="container__header-title">
              <h3>Album&nbsp;</h3>
            </a>
          </div>
        </div>
        <div className="col l-12 m-12 c-12">
          <AlbumList data={favoriteAlbumList} />
          {!loading && favoriteAlbumList.length === 0 && <EmptyBox />}
        </div>
      </div>
    </div>
  )
}

AlbumTab.propTypes = {}

export default AlbumTab

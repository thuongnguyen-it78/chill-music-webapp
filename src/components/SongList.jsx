import { pushToSongList } from 'features/MusicPlayer/musicPlayerSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SongItem from './SongItem'

const fakeData = new Array(20).fill()

function SongList({ data = fakeData, showHeader, showAction, showRank, showCheck, hiddenAll }) {
  const dispatch = useDispatch()
  const currentSong = useSelector((state) => state.musicPlayer.songList?.[state.musicPlayer.currentIndex]) || {}
  const playing = useSelector((state) => state.musicPlayer.playing)

  const handlePlayPauseClick = (data) => {
    dispatch(pushToSongList(data))
  }

  return (
    <div className="container__playlist">
      {showHeader && (
        <div className="playlist__header mt-5">
          <span className="playlist__header-title">Bài hát</span>
          <span className="playlist__header-time">Thời gian</span>
        </div>
      )}
      <div className="playlist__list mb-30 overflow-visible">
        {data.length > 0 &&
          data.map((item, index) => (
            <SongItem
              key={item?._id || index}
              index={index}
              data={item}
              active={item?._id === currentSong._id}
              playing={playing}
              showAction={showAction}
              showRank={showRank}
              showCheck={showCheck}
              hiddenAll={hiddenAll}
              onPlayPauseClick={handlePlayPauseClick}
            />
          ))}
      </div>
    </div>
  )
}

SongList.propTypes = {}

export default SongList

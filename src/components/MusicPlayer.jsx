import React from 'react'
import PropTypes from 'prop-types'

function MusicPlayer(props) {
  return (
    // open-popup
    <div
      className="player grid"
      style={{
        background:
          "url('https://vikdang.github.io/Code_web_music_player/assets/img/themeBgs/listTheme1/playerThemes/theme1.png')",
      }}
    >
      <div className="player__container">
        <div className="player__container-song">
          <div className="player__song-info media">
            <div className="media__left">
              <div className="player__song-thumb media__thumb note-1">
                <div
                  className="thumb-img"
                  style={{
                    background:
                      "url('https://i.ytimg.com/vi/kTJczUoc26U/maxresdefault.jpg') no-repeat center center / cover",
                  }}
                ></div>
                <svg fill="#fff" viewBox="0 0 512 512" className="thumb-note note-1">
                  <path d="M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"></path>
                </svg>
                <svg fill="#fff" viewBox="0 0 384 512" className="thumb-note note-2">
                  <path d="M310.94 1.33l-96.53 28.51A32 32 0 0 0 192 60.34V360a148.76 148.76 0 0 0-48-8c-61.86 0-112 35.82-112 80s50.14 80 112 80 112-35.82 112-80V148.15l73-21.39a32 32 0 0 0 23-30.71V32a32 32 0 0 0-41.06-30.67z"></path>
                </svg>
                <svg fill="#fff" viewBox="0 0 512 512" className="thumb-note note-3">
                  <path d="M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"></path>
                </svg>
                <svg fill="#fff" viewBox="0 0 384 512" className="thumb-note note-4">
                  <path d="M310.94 1.33l-96.53 28.51A32 32 0 0 0 192 60.34V360a148.76 148.76 0 0 0-48-8c-61.86 0-112 35.82-112 80s50.14 80 112 80 112-35.82 112-80V148.15l73-21.39a32 32 0 0 0 23-30.71V32a32 32 0 0 0-41.06-30.67z"></path>
                </svg>
              </div>
            </div>
            <div className="media__content">
              <div className="player__song-body media__info">
                <div className="player__song-title info__title">
                  <div className="player__title-animate">
                    <div className="title__item">Music name</div>
                    <div className="title__item">Music name</div>
                  </div>
                </div>
                <div className="player__song-author info__author">Author</div>
              </div>
            </div>
            <div className="media__right hide-on-tablet-mobile">
              <div className="player__song-options">
                <div className="player__song-btn option-btn btn--heart">
                  <i className="btn--icon icon--heart bi bi-heart-fill primary"></i>
                </div>
                <div className="player__song-btn option-btn">
                  <i className="btn--icon bi bi-three-dots"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="player__control">
          <div className="player__control-btn">
            <div className="control-btn btn-random is-small">
              <i className="bi bi-shuffle"></i>
            </div>
            <div className="control-btn btn-prev">
              <i className="bi bi-skip-start-fill"></i>
            </div>
            <div className="control-btn btn-toggle-play btn--play-song is-medium">
              <i className="bi bi-pause icon-pause"></i>
              <i className="bi bi-play-fill icon-play"></i>
            </div>
            <div className="control-btn btn-next">
              <i className="bi bi-skip-end-fill"></i>
            </div>
            <div className="control-btn btn-repeat is-small is-medium">
              <i className="bi bi-arrow-repeat"></i>
            </div>
          </div>
          <div className="progress-block hide-on-mobile">
            <span className="tracktime">00:00</span>
            <input id="progress--main" className="progress" type="range" value="0" step="1" min="0" max="100" />
            <div className="progress__track song--track">
              <div className="progress__track-update"></div>
            </div>
            <span className="durationtime">--:--</span>
          </div>
        </div>
        <div className="player__options hide-on-mobile">
          <div className="player__options-container">
            <div className="player__options-btn option-btn hide-on-tablet-mobile">
              <i className="bi bi-camera-video btn--icon"></i>
            </div>
            <div className="player__options-btn option-btn hide-on-tablet-mobile">
              <i className="bi bi-mic btn--icon"></i>
            </div>
            <div className="player__options-btn volume option-btn">
              <i className="bi bi-volume-up btn--icon"></i>
            </div>
            <div className="player__volume-progress">
              <input type="range" className="volume__range" value="100" step="1" min="0" max="100" />
              <div className="progress__track volume--track">
                <div className="progress__track-update"></div>
              </div>
            </div>
            <div className="player__list-icon">
              <i className="bi bi-music-note-list"></i>
            </div>
          </div>
        </div>
        <audio id="audio" src=""></audio>
      </div>
      <div className="player__popup">
        <div className="player__popup-header">
          <div className="player__popup-logo">
            <img
              src="https://vikdang.github.io/Code_web_music_player/assets/img/logos/small-logo.svg"
              alt="Logo"
              className="player__logo-img"
            />
          </div>
          <div className="player__popup-container">
            <ul className="player__popup-menu">
              <li className="player__popup-item active">
                <a href="#">Danh Sách Phát</a>
              </li>
              <li className="player__popup-item">
                <a href="#">Karaoke</a>
              </li>
              <li className="player__popup-item hide-on-mobile">
                <a href="#">Lời Bài Hát</a>
              </li>
            </ul>
          </div>
          <div className="player__popup-action">
            <ul className="popup__action-menu">
              <li className="popup__action-btn hide-on-tablet-mobile">
                <i className="bi bi-arrows-angle-expand popup__action-btn-icon"></i>
              </li>
              <li className="popup__action-btn hide-on-tablet-mobile">
                <i className="bi bi-gear popup__action-btn-icon"></i>
              </li>
              <li className="popup__action-btn btn--pop-down">
                <i className="bi bi-chevron-down popup__action-btn-icon"></i>
              </li>
            </ul>
          </div>
        </div>
        <div className="player__popup-cd-display">
          <div
            className="player__popup-cd-img"
            style={{
              background:
                "url('https://vikdang.github.io/Code_web_music_player/assets/img/music/listSong1/song1.jpg') no-repeat center center / cover",
            }}
          ></div>
        </div>
        <div className="player__popup-cd-info">
          <h4>Now playing</h4>
          <h2 className="is-twoline"></h2>
          <h3></h3>
        </div>
        <div className="player__popup-footer">
          <div className="player__container-song hide-on-mobile">
            <div className="player__song-info media">
              <div className="media__left">
                <div className="player__song-thumb media__thumb note-1">
                  <div
                    className="thumb-img"
                    style={{
                      background:
                        "url('https://i.ytimg.com/vi/kTJczUoc26U/maxresdefault.jpg') no-repeat center center / cover",
                    }}
                  ></div>
                  <svg fill="#fff" viewBox="0 0 512 512" className="thumb-note note-1">
                    <path d="M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"></path>
                  </svg>
                  <svg fill="#fff" viewBox="0 0 384 512" className="thumb-note note-2">
                    <path d="M310.94 1.33l-96.53 28.51A32 32 0 0 0 192 60.34V360a148.76 148.76 0 0 0-48-8c-61.86 0-112 35.82-112 80s50.14 80 112 80 112-35.82 112-80V148.15l73-21.39a32 32 0 0 0 23-30.71V32a32 32 0 0 0-41.06-30.67z"></path>
                  </svg>
                  <svg fill="#fff" viewBox="0 0 512 512" className="thumb-note note-3">
                    <path d="M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"></path>
                  </svg>
                  <svg fill="#fff" viewBox="0 0 384 512" className="thumb-note note-4">
                    <path d="M310.94 1.33l-96.53 28.51A32 32 0 0 0 192 60.34V360a148.76 148.76 0 0 0-48-8c-61.86 0-112 35.82-112 80s50.14 80 112 80 112-35.82 112-80V148.15l73-21.39a32 32 0 0 0 23-30.71V32a32 32 0 0 0-41.06-30.67z"></path>
                  </svg>
                </div>
              </div>
              <div className="media__content">
                <div className="player__song-body media__info">
                  <div className="player__song-title info__title">
                    <div className="player__title-animate">
                      <div className="title__item">Music name</div>
                      <div className="title__item">Music name</div>
                    </div>
                  </div>
                  <div className="player__song-author info__author">Author</div>
                </div>
              </div>
              <div className="media__right hide-on-tablet-mobile">
                <div className="player__song-options">
                  <div className="player__song-btn option-btn btn--heart">
                    <i className="btn--icon icon--heart bi bi-heart-fill primary"></i>
                  </div>
                  <div className="player__song-btn option-btn">
                    <i className="btn--icon bi bi-three-dots"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="player__control">
            <div className="player__control-btn">
              <div className="control-btn btn-random is-small">
                <i className="bi bi-shuffle"></i>
              </div>
              <div className="control-btn btn-prev">
                <i className="bi bi-skip-start-fill"></i>
              </div>
              <div className="control-btn btn-toggle-play btn--play-song is-medium">
                <i className="bi bi-pause icon-pause"></i>
                <i className="bi bi-play-fill icon-play"></i>
              </div>
              <div className="control-btn btn-next">
                <i className="bi bi-skip-end-fill"></i>
              </div>
              <div className="control-btn btn-repeat is-small is-medium">
                <i className="bi bi-arrow-repeat"></i>
              </div>
            </div>
            <div className="progress-block">
              <span className="tracktime">00:00</span>
              <input id="progress--pop-up" className="progress" type="range" value="0" step="1" min="0" max="100" />
              <div className="progress__track song--track">
                <div className="progress__track-update"></div>
              </div>
              <span className="durationtime">--:--</span>
            </div>
          </div>
          <div className="player__options hide-on-mobile">
            <div className="player__options-container">
              <div className="player__options-btn option-btn hide-on-tablet-mobile">
                <i className="bi bi-camera-video btn--icon"></i>
              </div>
              <div className="player__options-btn option-btn hide-on-tablet-mobile">
                <i className="bi bi-mic btn--icon"></i>
              </div>
              <div className="player__options-btn volume option-btn">
                <i className="bi bi-volume-up btn--icon"></i>
              </div>
              <div className="player__volume-progress">
                <input type="range" className="volume__range" value="100" step="1" min="0" max="100" />
                <div className="progress__track volume--track">
                  <div className="progress__track-update"></div>
                </div>
                <span className="volume__background"></span>
              </div>
              <div className="player__list-icon">
                <i className="bi bi-music-note-list"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

MusicPlayer.propTypes = {}

export default MusicPlayer

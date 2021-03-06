import { message } from 'antd'
import collectionAPI from 'api/collectionAPI'
import classNames from 'classnames'
import { getFavoriteSuccess, logout } from 'features/Auth/userSlice'
import { changeValueCommon } from 'features/Common/commonSlice'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import { useQuery } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory, useLocation } from 'react-router-dom'

function Header(props) {
  const headerRef = useRef(null)
  const wrapperRef = useRef(null)
  const location = useLocation()
  const dispatch = useDispatch()
  const history = useHistory()
  const [focus, setFocus] = useState(false)

  let mode

  if (location.pathname === '/auth/login') {
    mode = 'LOGIN'
  }

  if (location.pathname === '/auth/register') {
    mode = 'REGISTER'
  }

  const user = useSelector((state) => state.user.current)
  const search = useSelector((state) => state.common.search)

  const isLogin = Boolean(user?._id)

  const {} = useQuery(
    ['favorite-song-id-list', user?._id],
    () => {
      return collectionAPI.getFavoriteSongIdList()
    },
    {
      enabled: Boolean(user?._id),
      onSuccess: (value) => {
        dispatch(
          getFavoriteSuccess({
            name: 'favoriteSongIdList',
            value,
          })
        )
      },
    }
  )

  const {} = useQuery(
    ['favorite-album-id-list', user?._id],
    () => {
      return collectionAPI.getFavoriteAlbumIdList()
    },
    {
      enabled: Boolean(user?._id),
      onSuccess: (value) => {
        dispatch(
          getFavoriteSuccess({
            name: 'favoriteAlbumIdList',
            value,
          })
        )
      },
    }
  )

  const {} = useQuery(
    ['favorite-playlist-id-list', user?._id],
    () => {
      return collectionAPI.getFavoritePlaylistIdList()
    },
    {
      enabled: Boolean(user?._id),
      onSuccess: (value) => {
        dispatch(
          getFavoriteSuccess({
            name: 'favoritePlaylistIdList',
            value,
          })
        )
      },
    }
  )

  const {} = useQuery(
    ['favorite-artist-id-list', user?._id],
    () => {
      return collectionAPI.getFavoriteArtistIdList()
    },
    {
      enabled: Boolean(user?._id),
      onSuccess: (value) => {
        dispatch(
          getFavoriteSuccess({
            name: 'favoriteArtistIdList',
            value,
          })
        )
      },
    }
  )

  useEffect(() => {
    const mainContent = headerRef.current.parentElement.querySelector('.app__container')
    if (!mainContent) {
      return
    }

    mainContent.addEventListener('scroll', () => {
      if (mainContent.scrollTop > 0 || mainContent.scrollTop > 0) {
        headerRef.current.classList.add('active')
      } else {
        headerRef.current.classList.remove('active')
      }
    })

    return () => {
      mainContent.removeEventListener('scroll', null)
    }
  }, [location.pathname])

  useEffect(() => {
    document.addEventListener('click', (e) => {
      if (!wrapperRef.current) return
      const element = wrapperRef.current.querySelector('.setting__menu')
      if (!element) return

      if (e.target.dataset.id === 'avatar') {
        return element.classList.toggle('open')
      }

      if (!wrapperRef.current.contains(e.target)) {
        return element.classList.remove('open')
      }

      return element.classList.remove('open')
    })
  }, [])

  const handleLogoutClick = () => {
    dispatch(logout())
  }

  const handleUploadSongClick = () => {
    if (!isLogin) {
      message.warn('Vui l??ng ????ng nh???p ????? th???c hi???n ch???c n??ng')
      return
    }

    dispatch(
      changeValueCommon({
        name: 'songCreateOpen',
        value: true,
      })
    )
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      history.push({
        pathname: '/search',
      })
    }
  }

  const handleSearch = (e) => {
    const value = e.target.value
    dispatch(
      changeValueCommon({
        value,
        name: 'search',
      })
    )
  }

  const handleFocus = (e) => {
    setFocus(true)
  }

  const handleBlur = (e) => {
    setFocus(false)
  }

  return (
    <header className="header grid" ref={headerRef}>
      <div className="header__with-search">
        <button className="header__button" onClick={history.goBack}>
          <i className="bi bi-arrow-left header__button-icon"></i>
        </button>
        <button className="header__button" onClick={history.goForward}>
          <i className="bi bi-arrow-right header__button-icon"></i>
        </button>
        <div className={`header__search ${focus ? 'focus' : ''}`}>
          <input
            type="text"
            placeholder="Nh???p t??n b??i h??t, ngh??? s?? ho???c album..."
            className="header__search-input"
            value={search}
            onChange={handleSearch}
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <div className="header__search-btn" onClick={() => history.push({ pathname: '/search' })}>
            <i className="bi bi-search header__search-icon"></i>
          </div>
          {/* <div className="header__search-history">
            <ul className="header__search-list">
              <li className="header__search-item">
                <i className="bi bi-search header__item-icon"></i>
                <a href="#" className="header__item-link">
                  T??nh b???n di???u k??
                </a>
              </li>
              <li className="header__search-item">
                <i className="bi bi-search header__item-icon"></i>
                <a href="#" className="header__item-link">
                  G??c l???i ??u lo
                </a>
              </li>
              <li className="header__search-item">
                <i className="bi bi-search header__item-icon"></i>
                <a href="#" className="header__item-link">
                  Hongkong1
                </a>
              </li>
              <li className="header__search-item">
                <i className="bi bi-search header__item-icon"></i>
                <a href="#" className="header__item-link">
                  #zingchart
                </a>
              </li>
              <li className="header__search-item">
                <i className="bi bi-search header__item-icon"></i>
                <a href="#" className="header__item-link">
                  Cheating on You
                </a>
              </li>
              <li className="header__search-item">
                <i className="bi bi-search header__item-icon"></i>
                <a href="#" className="header__item-link">
                  BlackJack
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
      <div className="header__nav">
        <ul className="header__nav-list">
          {/* <li className="header__nav-item">
            <div className="header__nav-btn nav-btn--theme" title="Thay ?????i ch??? ????? c???a giao di???n">
              <svg width="20" height="20" className="header__nav-icon" viewBox="0 0 20 20">
                <defs>
                  <linearGradient id="j32lhg93hd" x1="62.206%" x2="18.689%" y1="70.45%" y2="39.245%">
                    <stop offset="0%" stopColor="#F81212"></stop>
                    <stop offset="100%" stopColor="red"></stop>
                  </linearGradient>
                  <linearGradient id="hjoavsus6g" x1="50%" x2="11.419%" y1="23.598%" y2="71.417%">
                    <stop offset="0%" stopColor="#00F"></stop>
                    <stop offset="100%" stopColor="#0031FF"></stop>
                  </linearGradient>
                  <linearGradient id="la1y5u3dvi" x1="65.655%" x2="25.873%" y1="18.825%" y2="56.944%">
                    <stop offset="0%" stopColor="#FFA600"></stop>
                    <stop offset="100%" stopColor="orange"></stop>
                  </linearGradient>
                  <linearGradient id="2dsmrlvdik" x1="24.964%" x2="63.407%" y1="8.849%" y2="55.625%">
                    <stop offset="0%" stopColor="#13EFEC"></stop>
                    <stop offset="100%" stopColor="#00E8DF"></stop>
                  </linearGradient>
                  <filter id="4a7imk8mze" width="230%" height="230%" x="-65%" y="-65%" filterUnits="objectBoundingBox">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="3.9"></feGaussianBlur>
                  </filter>
                  <filter
                    id="301mo6jeah"
                    width="312.7%"
                    height="312.7%"
                    x="-106.4%"
                    y="-106.4%"
                    filterUnits="objectBoundingBox"
                  >
                    <feGaussianBlur in="SourceGraphic" stdDeviation="3.9"></feGaussianBlur>
                  </filter>
                  <filter
                    id="b2zvzgq7fj"
                    width="295%"
                    height="295%"
                    x="-97.5%"
                    y="-97.5%"
                    filterUnits="objectBoundingBox"
                  >
                    <feGaussianBlur in="SourceGraphic" stdDeviation="3.9"></feGaussianBlur>
                  </filter>
                  <filter id="a1wq161tvl" width="256%" height="256%" x="-78%" y="-78%" filterUnits="objectBoundingBox">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="3.9"></feGaussianBlur>
                  </filter>
                  <path
                    id="qtpqrj1oda"
                    d="M3.333 14.167V5.833l-1.666.834L0 3.333 3.333 0h3.334c.04 1.57.548 2.4 1.524 2.492l.142.008C9.403 2.478 9.958 1.645 10 0h3.333l3.334 3.333L15 6.667l-1.667-.834v8.334h-10z"
                  ></path>
                  <path id="jggzvnjgfc" d="M0 0H20V20H0z"></path>
                  <path
                    id="2eiwxjmc7m"
                    d="M3.333 14.167V5.833l-1.666.834L0 3.333 3.333 0h3.334c.04 1.57.548 2.4 1.524 2.492l.142.008C9.403 2.478 9.958 1.645 10 0h3.333l3.334 3.333L15 6.667l-1.667-.834v8.334h-10z"
                  ></path>
                </defs>
                <g fill="none" fillRule="evenodd" transform="translate(2 3)">
                  <mask id="tinejqaasb" fill="#fff">
                    <use xlinkHref="#qtpqrj1oda"></use>
                  </mask>
                  <use fill="#FFF" fillOpacity="0" xlinkHref="#qtpqrj1oda"></use>
                  <g mask="url(#tinejqaasb)">
                    <g transform="translate(-2 -3)">
                      <mask id="uf3ckvfvpf" fill="#fff">
                        <use xlinkHref="#jggzvnjgfc"></use>
                      </mask>
                      <use fill="#D8D8D8" xlinkHref="#jggzvnjgfc"></use>
                      <circle
                        cx="8.9"
                        cy="6.8"
                        r="9"
                        fill="url(#j32lhg93hd)"
                        filter="url(#4a7imk8mze)"
                        mask="url(#uf3ckvfvpf)"
                      ></circle>
                      <circle
                        cx="9.3"
                        cy="13.7"
                        r="5.5"
                        fill="url(#hjoavsus6g)"
                        filter="url(#301mo6jeah)"
                        mask="url(#uf3ckvfvpf)"
                      ></circle>
                      <circle
                        cx="15.9"
                        cy="6.9"
                        r="6"
                        fill="url(#la1y5u3dvi)"
                        filter="url(#b2zvzgq7fj)"
                        mask="url(#uf3ckvfvpf)"
                      ></circle>
                      <circle
                        cx="16.4"
                        cy="17.7"
                        r="7.5"
                        fill="url(#2dsmrlvdik)"
                        filter="url(#a1wq161tvl)"
                        mask="url(#uf3ckvfvpf)"
                      ></circle>
                    </g>
                  </g>
                  <use fill="#FFF" fillOpacity="0.05" xlinkHref="#2eiwxjmc7m"></use>
                </g>
              </svg>
            </div>
          </li> */}
          <li className="header__nav-item hide-on-mobile">
            <div className="header__nav-btn" title="T???i l??n b??i h??t c???a b???n" onClick={handleUploadSongClick}>
              <label htmlFor="header__nav-input">
                <i className="bi bi-upload header__nav-icon"></i>
              </label>
            </div>
          </li>
          {!isLogin && (
            <Fragment>
              <li className="header__nav-item hide-on-mobile">
                <Link to="/auth/register">
                  <div className={classNames('header__nav-btn-auth', { active: mode === 'REGISTER' })}>????ng k??</div>
                </Link>
              </li>

              <li className="header__nav-item hide-on-mobile">
                <Link to="/auth/login">
                  <div className={classNames('header__nav-btn-auth', { active: mode === 'LOGIN' })}>????ng nh???p</div>
                </Link>
              </li>
            </Fragment>
          )}
          <div className={classNames('header__nav-item avatar hide-on-mobile', { hideAll: !isLogin })} ref={wrapperRef}>
            <div className="header__nav-btn btn--nav-setting">
              <li className="header__nav-item" style={{ margin: 0 }}>
                <img
                  src={user.avatarURL}
                  alt=""
                  className="header__nav-btn"
                  data-id="avatar"
                  title="Th??ng tin c?? nh??n"
                />
              </li>
              <div className={classNames('setting__menu')}>
                <div className="setting__nav">
                  <Link className="setting__item" to="/my-account">
                    <div className="setting__item-content">
                      <i className="bi bi-shield-lock setting__item-icon"></i>
                      <span>Th??ng tin c?? nh??n</span>
                    </div>
                  </Link>
                  {/* <div className="setting__item">
                    <div className="setting__item-content">
                      <i className="bi bi-badge-hd setting__item-icon"></i>
                      <span>Ch???t l?????ng nh???c</span>
                    </div>
                    <i className="bi bi-chevron-right setting__item-icon"></i>
                  </div>
                  <div className="setting__item">
                    <div className="setting__item-content">
                      <i className="bi bi-play-circle setting__item-icon"></i>
                      <span>Tr??nh ph??t nh???c</span>
                    </div>
                    <i className="bi bi-chevron-right setting__item-icon"></i>
                  </div> */}
                </div>
                <div className="setting__subnav">
                  {/* <div className="setting__item">
                    <div className="setting__item-content">
                      <i className="bi bi-exclamation-circle setting__item-icon"></i>
                      <span>Gi???i thi???u</span>
                    </div>
                  </div>
                  <div className="setting__item">
                    <div className="setting__item-content">
                      <i className="bi bi-flag setting__item-icon"></i>
                      <span>G??p ??</span>
                    </div>
                  </div>
                  <div className="setting__item">
                    <div className="setting__item-content">
                      <i className="bi bi-telephone setting__item-icon"></i>
                      <span>Li??n h???</span>
                    </div>
                  </div> */}
                  <Link className="setting__item" to="/change-pw">
                    <div className="setting__item-content">
                      <i className="bi bi-flag setting__item-icon"></i>
                      <span>?????i m???t kh???u</span>
                    </div>
                  </Link>
                  {/* <div className="setting__item">
                    <div className="setting__item-content">
                      <i className="bi bi-badge-ad setting__item-icon"></i>
                      <span>Qu???ng c??o</span>
                    </div>
                  </div> */}
                  <div className="setting__item">
                    <div className="setting__item-content" onClick={handleLogoutClick}>
                      <i className="bi bi-file-text setting__item-icon"></i>
                      <span>????ng xu???t</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </header>
  )
}

Header.propTypes = {}

export default Header

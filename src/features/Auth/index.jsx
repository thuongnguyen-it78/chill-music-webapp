import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'

function AuthFeature(props) {
  const match = useRouteMatch()
  const isLogin = Boolean(useSelector((state) => state.user.current._id))

  if (isLogin) {
    return <Redirect to="/" />
  }

  return (
    <div class="app__container tab--explore">
      <div class="app__container-content">
        <div class="explore__container">
          <div class="grid">
            <div class="row container__section">
              <div class="col l-12 m-12 c-12">
                <Switch>
                  <Route path={`${match.url}/login`} exact component={Login} />
                  <Route path={`${match.url}/register`} exact component={Register} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

AuthFeature.propTypes = {}

export default AuthFeature

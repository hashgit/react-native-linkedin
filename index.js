/**
 * @providesModule LinkedInModal
 * @flow
 */

import React from 'react'
import PropTypes from 'prop-types'
import { pipe, evolve } from 'ramda'
import { v4 } from 'uuid'

// $DisableFlow
import { WebView, Modal, StatusBar } from 'react-native'
import querystring from 'query-string'

const AUTHORIZATION_URL: string =
  'https://www.linkedin.com/uas/oauth2/authorization'
const ACCESS_TOKEN_URL: string =
  'https://www.linkedin.com/uas/oauth2/accessToken'

type QueryAuth = {
  response_type: string,
  client_id: string,
  scope: string,
  state: string,
  redirect_uri: string,
}

type PayloadToken = {
  grant_type: string,
  code: string,
  redirect_uri: string,
  client_id: string,
  client_secret: string,
}

const cleanState = (state: string) => state.replace('#!', '')

const getCodeAndStateFromUrl = pipe(
  querystring.extract,
  querystring.parse,
  evolve({ state: cleanState }),
)

export default class LinkedInModal extends React.Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    callback: PropTypes.func.isRequired,
    error: PropTypes.func,
    clientID: PropTypes.string.isRequired,
    clientSecret: PropTypes.string.isRequired,
    permissions: PropTypes.array,
    redirectUri: PropTypes.string.isRequired,
    authState: PropTypes.string,
  }
  static defaultProps = {
    permissions: ['r_basicprofile', 'r_emailaddress'],
    // eslint-disable-next-line
    error: (error, payload) => console.error(error, payload),
    authState: v4(),
  }
  state = {
    raceCondition: false,
  }

  componentWillMount() {
    StatusBar.setHidden(true)
  }

  componentWillUnmount() {
    StatusBar.setHidden(false)
  }

  onNavigationStateChange = ({ url, loading }: Object) => {
    const { raceCondition } = this.state
    const { authState, callback, redirectUri, error } = this.props
    if (url.includes(redirectUri) && loading && !raceCondition) {
      const { code, state } = getCodeAndStateFromUrl(url)
      this.setState(async () => {
        if (state !== authState) {
          error(`state is not the same ${state}`)
        } else {
          const token = await this.getAccessToken(code)
          callback(token)
        }
        return { raceCondition: true }
      })
    }
  }

  getAuthorizationUrl = () => {
    const { authState, clientID, permissions, redirectUri } = this.props
    const query: QueryAuth = {
      response_type: 'code',
      client_id: clientID,
      scope: permissions.join(' ').trim(),
      state: authState,
      redirect_uri: redirectUri,
    }
    return `${AUTHORIZATION_URL}?${querystring.stringify(query)}`
  }

  getAccessToken = async (code: string) => {
    const { clientID, clientSecret, redirectUri, error } = this.props
    const payload: PayloadToken = {
      grant_type: 'authorization_code',
      code,
      redirect_uri: redirectUri,
      client_id: clientID,
      client_secret: clientSecret,
    }
    const response = await fetch(ACCESS_TOKEN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: querystring.stringify(payload),
    })
    const token = await response.json()
    if (token.error || token.error_description) {
      error(token.error_description || token.error, __DEV__ && payload)
      return {}
    }
    return token
  }

  render() {
    const { visible } = this.props
    return (
      <Modal animationType="slide" transparent={false} visible={visible}>
        <WebView
          source={{ uri: this.getAuthorizationUrl() }}
          onNavigationStateChange={this.onNavigationStateChange}
          startInLoadingState
          javaScriptEnabled
          domStorageEnabled
        />
      </Modal>
    )
  }
}

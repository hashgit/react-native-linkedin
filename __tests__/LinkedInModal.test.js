import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import LinkedInModal, {
  cleanUrlString,
  getCodeAndStateFromUrl,
  getErrorFromUrl,
  transformError,
  isErrorUrl,
  getAuthorizationUrl,
  getPayloadForToken,
  injectedJavaScript,
  fetchToken,
} from '../'

jest.mock('WebView', () => 'WebView')

global.fetch = jest.fn().mockImplementation(
  () =>
    new Promise(resolve => {
      resolve({
        ok: true,
        json: () => ({
          access_token: 'access_token',
          expires_in: 'expires_in',
        }),
      })
    }),
)

it('<LinkedInModal /> render correctly', () => {
  const tree = renderer
    .create(
      <LinkedInModal
        onSuccess={() => {}}
        clientID="clientID"
        clientSecret="clientSecret"
        redirectUri="https://xaviercarpentier.fr"
        authState="authState"
      />,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('cleanUrlString', () => {
  expect(cleanUrlString('https://xaviercarpentier.com#!')).toBe(
    'https://xaviercarpentier.com',
  )
  expect(cleanUrlString('https://xaviercarpentier.com')).toBe(
    'https://xaviercarpentier.com',
  )
})

it('getCodeAndStateFromUrl', () => {
  expect(
    getCodeAndStateFromUrl('https://xaviercarpentier.com?code=code&state=1234'),
  ).toMatchObject({ code: 'code', state: '1234' })
})

it('isErrorUrl', () => {
  expect(
    isErrorUrl(
      'https://xaviercarpentier.com?' +
        'error=error&error_description=error_description',
    ),
  ).toBe(true)
})

it('getErrorFromUrl', () => {
  expect(
    getErrorFromUrl(
      'https://xaviercarpentier.com?' +
        'error=error&error_description=error_description',
    ),
  ).toMatchObject({ error: 'error', error_description: 'error_description' })
})

it('transformError', () => {
  expect(
    transformError({
      error: 'error',
      error_description: 'error_description',
    }),
  ).toMatchObject({
    type: 'error',
    message: 'error_description',
  })
})

it('getAuthorizationUrl', () => {
  expect(
    getAuthorizationUrl({
      authState: 'authState',
      clientID: 'clientID',
      permissions: ['r_basicprofile', 'r_emailaddress'],
      redirectUri: 'https://xaviercarpentier.com',
    }),
  ).toBe(
    'https://www.linkedin.com/uas/oauth2/authorization?' +
      'client_id=clientID&redirect_uri=https%3A%2F%2Fxaviercarpentier.com&' +
      'response_type=code&scope=r_basicprofile%20r_emailaddress&' +
      'state=authState',
  )
})

it('getPayloadForToken', () => {
  expect(
    getPayloadForToken({
      clientID: 'clientID',
      clientSecret: 'clientSecret',
      code: 'code',
      redirectUri: 'https://xaviercarpentier.com',
    }),
  ).toBe(
    'client_id=clientID&client_secret=clientSecret&' +
      'code=code&grant_type=authorization_code&' +
      'redirect_uri=https%3A%2F%2Fxaviercarpentier.com',
  )
})

it('injectedJavaScript', () => {
  expect(injectedJavaScript()).toBe(
    'document.querySelector("input[type=text]")' +
      '.setAttribute("autocapitalize", "off")',
  )
})

it('fetchToken', async () => {
  const token = await fetchToken('payload')
  expect(token).toMatchObject({
    access_token: 'access_token',
    expires_in: 'expires_in',
  })
})

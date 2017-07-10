import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import LinkedInModal from '../'

jest.unmock('ScrollView')

it('<LinkedInModal /> render correctly', () => {
  const tree = renderer
    .create(
      <LinkedInModal
        visible
        callback={() => {}}
        clientID="clientID"
        clientSecret="clientSecret"
        redirectUri="https://xaviercarpentier.fr"
      />,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

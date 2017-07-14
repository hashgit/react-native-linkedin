// @flow
import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'

import LinkedInModal from 'react-native-linkedin'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default class AppContainer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LinkedInModal
          clientID="86vrfyx76mucrq"
          clientSecret="as8w6lkXydkY94Is"
          redirectUri="https://xaviercarpentier.com"
          onSuccess={token => {
            // eslint-disable-next-line
            console.log(token)
            this.setState({ linkedInModalOpen: false })
          }}
        />
      </View>
    )
  }
}

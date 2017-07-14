// @flow
import React from 'react'
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native'

import LinkedInModal from 'react-native-linkedin'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  img: {
    width: Dimensions.get('window').width - 30,
    resizeMode: 'contain',
  },
})

export default class AppContainer extends React.Component {
  state = {
    linkedInModalOpen: false,
  }
  render() {
    return (
      <View style={styles.container}>
        <LinkedInModal
          visible={this.state.linkedInModalOpen}
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

# :link: React-Native LinkedIn

[![Greenkeeper badge](https://badges.greenkeeper.io/xcarpentier/react-native-linkedin.svg)](https://greenkeeper.io/)
[![NPM version](https://badge.fury.io/js/react-native-linkedin.svg)](http://badge.fury.io/js/react-native-linkedin)
[![Downloads](https://img.shields.io/npm/dm/react-native-linkedin.svg)](https://www.npmjs.com/package/react-native-linkedin)
[![Circle CI](https://circleci.com/gh/xcarpentier/react-native-linkedin.svg?style=svg)](https://circleci.com/gh/xcarpentier/react-native-linkedin)

Simple **LinkedIn** login library for **React-Native** with *WebView* into a *Modal*

## Benefits & others:
* **Light**: No need to link a native library like others alternatives
* **Simple**: Get the token and the expires, you handle your own login with the access_token
* **Sure**: open-source
* **Almost readable & understandable code**: JavaScript & React

## Installation
```bash
$ yarn add react-native-linkedin
```
or
```bash
$ npm i react-native-linkedin --save
```

## Documentation

### Props
| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| clientID | string | **required** | | Your client id from https://www.linkedin.com/developer/apps |
| clientSecret | string | **required** | | Your client secret from https://www.linkedin.com/developer/apps |
| redirectUri | string | **required** | | Your redirectUri set here https://www.linkedin.com/developer/apps |
| onSuccess | function | **required** | | Function  will be call back on success |
| authState | string | optional | `require('uuid').v4()` | The state of auth, to be more secure |
| onError | function | optional | `console.error(err)` | Function  will be call back on error |
| onClose | function | optional | | Function  will be call back on close modal |
| onOpen | function | optional | | Function  will be call back on open modal |
| permissions | array | optional | `['r_basicprofile', 'r_emailaddress']` | The LinkedIn access token permissions |
| renderButton | function | optional | | Render function for customize LinkedIn button  |
| renderClose | function | optional | | Render function for customize close button  |
| linkText | string | optional | `'Login with LinkedIn'` | Link label |
| containerStyle | View.propTypes.style | optional | | Customize container style |
| wrapperStyle | View.propTypes.style | optional | | Customize wrapper style |
| closeStyle | View.propTypes.style | optional | | Customize close style |
| animationType | Modal.propTypes.animationType | optional | `fade` | Customize animationType style: 'none', 'slide' or 'fade' |

### Example
```JavaScript
// See ./example folder for details
import LinkedInModal from 'react-native-linkedin'
import { View, TouchableOpacity } from 'react-native'

class AppContainer extends React.Component {
  state = {
    isLinkedInModalVisible: false,
  }
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.setState({ isLinkedInModalVisible: true })}
        >
          Connect with LinkedIn!
        </TouchableOpacity>

        <LinkedInModal
          visible={this.state.isLinkedInModalVisible}
          clientID="[ Your client id from https://www.linkedin.com/developer/apps ]"
          clientSecret="[ Your client secret from https://www.linkedin.com/developer/apps ]"
          redirectUri="[ Your redirect uri set into https://www.linkedin.com/developer/apps ]"
          callback={token => {
            console.log(token)
            this.setState({ isLinkedInModalVisible: false })
          }}
        />
      </View>
    )
  }
```

## Security

Please not that you should pass your linkedin client id and you secret key to the component.
You should be aware that key can be found if you store it directly to your code.
**I strongly recommand to not declare both on your code but found a way to keep it secret (ie. get it from server, encrypt it, ...)**
## Roadmap & TODOs
- [ ] Better style for modal: border, padding, transparency
- [ ] Button to close the modal
- [ ] Add gif example in README
- [ ] Test every line of code
- [ ] Pubish example to expo

[> Propose](https://github.com/xcarpentier/react-native-linkedin/issues/new)

## Contribution

- [@xcapentier](mailto:contact@xaviercarpentier.com) The main author.

**PRs are welcome!**

## FAQ
### Is it supported and tested both on android and iOS?
**YES**

## Questions
Feel free to [contact me](mailto:contact@xaviercarpentier.com) or [create an issue](https://github.com/xcarpentier/react-native-linkedin/issues/new)

## Alternatives
* [react-native-linkedin-login](https://www.npmjs.com/package/react-native-linkedin-login)
* [react-native-linkedin-sdk](https://www.npmjs.com/package/react-native-linkedin-sdk)
* [react-native-linkedin-oauth](https://www.npmjs.com/package/react-native-linkedin-oauth)

## Licence
[MIT](https://github.com/xcarpentier/react-native-linkedin/blob/master/LICENSE)

> made with ♥

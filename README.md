# :link: React-Native LinkedIn

[![Greenkeeper badge](https://badges.greenkeeper.io/xcarpentier/react-native-linkedin.svg)](https://greenkeeper.io/)
[![NPM version](https://badge.fury.io/js/react-native-linkedin.svg)](http://badge.fury.io/js/react-native-linkedin)
[![Downloads](https://img.shields.io/npm/dm/react-native-linkedin.svg)](https://www.npmjs.com/package/react-native-linkedin)
[![Circle CI](https://circleci.com/gh/xcarpentier/react-native-linkedin.svg?style=svg)](https://circleci.com/gh/xcarpentier/react-native-linkedin)

Simple **LinkedIn** login library for **React-Native** with *WebView* into a *Modal*

*Please note that is on WIP (ie. work in progress)!*

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
| visible | boolean | required | | Show the LinkedIn modal |
| clientID | string | required | | Your client id from https://www.linkedin.com/developer/apps |
| clientSecret | string | required | | Your client secret from https://www.linkedin.com/developer/apps |
| redirectUri | string | required | | Your redirectUri set here https://www.linkedin.com/developer/apps |
| callback | function | required | | Function  will be call back on success |
| error | function | optional | `console.error(err)` | Function  will be call back on error |
| permissions | array | optional | `['r_basicprofile', 'r_emailaddress']` | The LinkedIn access token permissions |
| authState | string | optional | `require('uuid').v4()` | The state of auth, to be more secure |

### Example
```JavaScript
// See ./example folder for details
import LinkedInModal from 'react-native-linkedin'

class AppContainer extends React.Component {
  state = {
    linkedInModalOpen: false,
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.setState({ linkedInModalOpen: true })}
        >
          Connect with LinkedIn!
        </TouchableOpacity>

        <LinkedInModal
          visible={this.state.linkedInModalOpen}
          clientID="[ Your client id from https://www.linkedin.com/developer/apps ]"
          clientSecret="[ Your client secret from https://www.linkedin.com/developer/apps ]"
          redirectUri="[ your redirectUri set into https://www.linkedin.com/developer/apps ]"
          callback={token => {
            console.log(token)
            this.setState({ linkedInModalOpen: false })
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

## Others alternatives
* [react-native-linkedin-login](https://www.npmjs.com/package/react-native-linkedin-login)
* [react-native-linkedin-sdk](https://www.npmjs.com/package/react-native-linkedin-sdk)
* [react-native-linkedin-oauth](https://www.npmjs.com/package/react-native-linkedin-oauth)

## Contribution

- [@xcapentier](mailto:contact@xaviercarpentier.com) The main author.

**PRs are welcome!**

## Roadmap & TODOs
- [ ] Better style for modal: border, padding, transparency
- [ ] Button to close the modal
- [ ] Add gif example in README
- [ ] Test every line of code

[> Propose](https://github.com/xcarpentier/react-native-linkedin/issues/new)

## FAQ
### Is it supported and tested both on android and iOS?
**YES**

## Questions
Feel free to [contact me](mailto:contact@xaviercarpentier.com) or [create an issue](https://github.com/xcarpentier/react-native-linkedin/issues/new)

> made with ♥

## Licence
[MIT](https://github.com/xcarpentier/react-native-linkedin/blob/master/LICENSE)

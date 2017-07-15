# :link: React-Native LinkedIn
[![exponent
support](https://img.shields.io/badge/exponent-ios%20%7C%20android-blue.svg?style=flat-square&logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAAC4AAAAoCAYAAACB4MgqAAAAAXNSR0IArs4c6QAAA2VJREFUWAnFmTtoVEEYhbOJL0hIRDBqZYQEEUQsRBHxAYr4wM5CBKuAsRJUFAQjaKN2WpginaIi2GgjaBQtLKKFBh%2BFKIaIjwgi8a3xsX7%2FurvuvTs788%2FMXRw4ZGf%2B859zdrl7d%2BamoSGjkc%2Fnp4KT4Bn4Bn6BcfAanAddGVllJ0OoZnAf2MZbip3ZuWagRKB%2BW%2BKK2m1eT8jAMl6CIKsqgmle7ol3jVQgZRNwXSLpN%2FOehRmR1nHtBOhJp1LO%2B%2BOcI7oJ2AreKIOmaXLHWRBhH96K8ZF0Gs%2F51XD3wE4CzgZfPYOa6OsDI4S1keCMKUXA2kN6msJSeHZhtAj8DghZq2W7Z4QwOu43ayUIXJctQbNvmkafBgw2wV%2Fp06PgzoSzV8FLUHKJmWVCaLkWH4B5Flpo6TONnblcblQr4POJdyOqDX0WruwGDyiDyKVySMnV0%2BQaBK%2BAZgxBmlxS57X2DvQTrvaDKcnb%2FyLYCzRD9uHzK9WYt4HnmmY4lyp7o14j1g4%2BKo33mczoXa3sF9pyk4b3GkJyqtGMO5Bq%2FphQ0%2B7ZB71Dphsw6wI%2FgGt8h5C4RAxasil74RIq1jen%2B73miFxQGh3UCKO1Uan3GF7YSYnGxUoT2W9M1AQXDtxzSt0dWs0ED%2FEbCgPZsyxNNDom8OXL%2Fk6h7b8VQHSDQlgofY6cxjJ93Ur9XqOAaRHBRqA5R76E12rScK3RlwOazdoHeNNdeoU6xG1AM6K%2B%2BRjMBXI3co3jzuAoTALDLiXql51iCgI6hxVe8uY6rHIQdiqEvsCZYxVSFtGZAp4qPE%2FXlKS5BWhO7ftrigQU8FyrCC5PBcw%2FcBQ0G6lH8NT3bO37QFMeirrGxSo9OqaBMVcn9axPP4Us6M4C8oTLNZYkwsM%2B6uqgfirRlPEEfc33a6BsS4P8kn0CtiG%2FdO3lpjq8QF%2BeQ961hSjWVhTsmRxTkHvqkLVKkhyyP5Ivom1cKwV%2FYmNRGwTqQ3VVGs8FvPoceaTcJru16xainAMXenpH0fGTf8mMWjKNiYGc8v9%2B9Ga7EzwyGDKX6rOKnwTbbVEvXypymJUtZHqMsNBiEahrCe8r6UDM5TT27%2FE0kzUgveFZV9dkDnHydID0IX1XVRukZWAA3ANbqwj%2FYaGY6RZ%2F5QaxpTLCH1MMfbtE9CyFAAAAAElFTkSuQmCC&link=https%3A%2F%2Fgetexponent.com)](https://exp.host/@xcarpentier/linked-in-login-example)
[![Greenkeeper badge](https://badges.greenkeeper.io/xcarpentier/react-native-linkedin.svg)](https://greenkeeper.io/)
[![NPM version](https://badge.fury.io/js/react-native-linkedin.svg)](http://badge.fury.io/js/react-native-linkedin)
[![Downloads](https://img.shields.io/npm/dm/react-native-linkedin.svg)](https://www.npmjs.com/package/react-native-linkedin)
[![Circle CI](https://circleci.com/gh/xcarpentier/react-native-linkedin.svg?style=svg)](https://circleci.com/gh/xcarpentier/react-native-linkedin)
[![codecov](https://codecov.io/gh/xcarpentier/react-native-linkedin/branch/master/graph/badge.svg)](https://codecov.io/gh/xcarpentier/react-native-linkedin)

Simple **LinkedIn** login library for **React-Native** with *WebView* into a *Modal*

## Demo

![](https://media.giphy.com/media/l4FGCGPtBn9meI7Pa/giphy.gif)

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
| clientID | string | **required** | | [Your client id](https://www.linkedin.com/developer/apps) |
| clientSecret | string | **required** | | [Your client secret](https://www.linkedin.com/developer/apps) |
| redirectUri | string | **required** | | [Your redirectUri](https://www.linkedin.com/developer/apps) |
| onSuccess | function | **required** | | Function  will be call back on success |
| authState | string | optional | `require('uuid').v4()` | The state of auth, to be more secure |
| onError | function | optional | `console.error(err)` | Function  will be call back on error |
| onClose | function | optional | | Function  will be call back on close modal |
| onOpen | function | optional | | Function  will be call back on open modal |
| permissions | array | optional | `['r_basicprofile', 'r_emailaddress']` | The LinkedIn access token permissions |
| renderButton | function | optional | | Render function for customize LinkedIn button  |
| renderClose | function | optional | | Render function for customize close button  |
| linkText | string | optional | `'Login with LinkedIn'` | Link label |
| containerStyle | ViewPropTypes.style | optional | | Customize container style |
| wrapperStyle | ViewPropTypes.style | optional | | Customize wrapper style |
| closeStyle | ViewPropTypes.style | optional | | Customize close style |
| animationType | Modal.propTypes.animationType | optional | `fade` | Customize animationType style: 'none', 'slide' or 'fade' |

### Example
```JavaScript
// See ./example folder for details
import React from 'react'
import { StyleSheet, View } from 'react-native'

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
          clientID="[ Your client id from https://www.linkedin.com/developer/apps ]"
          clientSecret="[ Your client secret from https://www.linkedin.com/developer/apps ]"
          redirectUri="[ Your redirect uri set into https://www.linkedin.com/developer/apps ]"
          onSuccess={token => console.log(token)}
        />
      </View>
    )
  }
}

```

## Security

Please not that you should pass your linkedin client id and you secret key to the component.
You should be aware that key can be found if you store it directly to your code.
**I strongly recommand to not declare both on your code but found a way to keep it secret (ie. get it from server, encrypt it, ...)**
## Roadmap & TODOs
- [x] Better style for modal: border, padding, transparency
- [x] Button to close the modal
- [x] Test every line of code
- [x] Better catch of error into login url
- [x] Add gif example in README
- [x] Publish example to expo
- [ ] Add props or other function to fetch more informations like basic profile information


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

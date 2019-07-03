# AC IP
This is a little helper for IP and network operations.

This is currently just a preliminary version with limited documentation.

## Usage

```
const acts = require('ac-ip')
```

### Determine IP
Determines the IP from the request object
```
const ip = acts.determineIP(req) 
// -> 1.2.3.4
```
Use X-AdmiralCloud-Test "true" to overwrite the real IP with params.ip from request object.


### IP to privacy
Makes the IP GDRP ready by removing the last two octecs of the IP(s)
```
const privacyIP = acts.ipsToPrivacy(['1.2.3.4', ...])
// -> ['1.2.x.x', ...]
```

## Links
- [Website](https://www.admiralcloud.com/)
- [Twitter (@admiralcloud)](https://twitter.com/admiralcloud)
- [Facebook](https://www.facebook.com/MediaAssetManagement/)

## License
[MIT License](https://opensource.org/licenses/MIT) Copyright © 2009-present, AdmiralCloud, Mark Poepping
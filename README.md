# AC IP
This is a little helper for IP and network operations.

This is currently just a preliminary version with limited documentation.

## Usage
Use X-AdmiralCloud-Test "true" to overwrite the real IP with params.ip from request object.

```
const acts = require('ac-ip')

// req is the request object (e.g. from expressjs)
const ip = acts.determineIP(req) // 1.2.3.4
```

## Links
- [Website](https://www.admiralcloud.com/)
- [Twitter (@admiralcloud)](https://twitter.com/admiralcloud)
- [Facebook](https://www.facebook.com/MediaAssetManagement/)

## License
[MIT License](https://opensource.org/licenses/MIT) Copyright © 2009-present, AdmiralCloud, Mark Poepping
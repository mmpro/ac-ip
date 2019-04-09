# AC IP
This is a little helper for IP and network operations.

## Usage
Use X-AdmiralCloud-Header "true" to overwrite the real IP with params.ip from request object.

```
const acts = require('ac-ip')

// req is the request object (e.g. from expressjs)
const ip = acts.determineIP(req) // 1.2.3.4
```


<a name="1.3.5"></a>

## [1.3.5](https://github.com/mmpro/ac-ip/compare/v1.3.4..v1.3.5) (2021-05-08 07:22:35)


### Bug Fix

* **App:** Force version bump | MP | [0cae9b46eb613b86bd6471fe8940fd9c9c4f1a30](https://github.com/mmpro/ac-ip/commit/0cae9b46eb613b86bd6471fe8940fd9c9c4f1a30)    
Force version bump
### Tests

* **Misc:** Added test | MP | [9093f7b0bb5c4cf58fb0ce9f41fa708a3f406220](https://github.com/mmpro/ac-ip/commit/9093f7b0bb5c4cf58fb0ce9f41fa708a3f406220)    
Test coverage is now ~99%
### Chores

* **App:** Updated gitignore | MP | [29748cfe061af03bd162e39f388b1e4537b60c6f](https://github.com/mmpro/ac-ip/commit/29748cfe061af03bd162e39f388b1e4537b60c6f)    
Updated gitignore
### Chores

* **Misc:** Updated packages | MP | [f4ace7c58b7c1d60b01c1c6634cf816b4bceadf8](https://github.com/mmpro/ac-ip/commit/f4ace7c58b7c1d60b01c1c6634cf816b4bceadf8)    
Updated packages
<a name="1.3.4"></a>

## [1.3.4](https://github.com/mmpro/ac-ip/compare/v1.3.3..v1.3.4) (2020-05-12 08:50:47)


### Bug Fix

* **App:** Add error codes | MP | [3e70c7818554c3837ce4ebeec768fe95352212b4](https://github.com/mmpro/ac-ip/commit/3e70c7818554c3837ce4ebeec768fe95352212b4)    
Add error codes in addition to error message
### Tests

* **App:** Fixed test | MP | [cf5a8d8399e597ad4d8e1a0e6b1dde43255941f2](https://github.com/mmpro/ac-ip/commit/cf5a8d8399e597ad4d8e1a0e6b1dde43255941f2)    
Add code to error response
### Chores

* **App:** Updated packages | MP | [83c937eeed2eab9bba89974277b87fd52ef79885](https://github.com/mmpro/ac-ip/commit/83c937eeed2eab9bba89974277b87fd52ef79885)    
Updated packages
* **undefined:** Updated packages | MP | [18845753d849c612113a9a6b0a74bd5454db0da8](https://github.com/mmpro/ac-ip/commit/18845753d849c612113a9a6b0a74bd5454db0da8)    
Updated packages
<a name="1.3.3"></a>

## [1.3.3](https://github.com/mmpro/ac-ip/compare/v1.3.2..v1.3.3) (2020-04-03 10:14:20)


### Bug Fix

* **App:** Fallback to development environment if none set | MP | [83c11ce93938ff00e2e70e0972bd9746fe032abd](https://github.com/mmpro/ac-ip/commit/83c11ce93938ff00e2e70e0972bd9746fe032abd)    
If process has not set any environment via NODE_ENV, then fallback to development
<a name="1.3.2"></a>

## [1.3.2](https://github.com/mmpro/ac-ip/compare/v1.3.1..v1.3.2) (2020-04-01 09:10:16)


### Bug Fix

* **App:** Use statusCode 420 in message if ip is not in range | MP | [995b22dd92a4914fc6272a5e24af588e3c328982](https://github.com/mmpro/ac-ip/commit/995b22dd92a4914fc6272a5e24af588e3c328982)    
IP no in range is not typcical error, but more like a preconditon fail. That's why we now use statusCode 420 in addition to the error message. This way you can decide whether you want to treat it as error or as warning.
<a name="1.3.1"></a>

## [1.3.1](https://github.com/mmpro/ac-ip/compare/v1.3.0..v1.3.1) (2020-03-29 14:04:57)


### Bug Fix

* **App:** Prepare repository for AC semantic release  | MP | [30dadc928a5ed428d73b01ea0efe1afc1dffc94c](https://github.com/mmpro/ac-ip/commit/30dadc928a5ed428d73b01ea0efe1afc1dffc94c)    
Cleaned up repository and use ac-semantic-release
<a name="1.3.0"></a>
# [1.3.0](https://github.com/mmpro/ac-ip/compare/v1.2.0...v1.3.0) (2020-03-18 11:05)


### Features

* **Misc:** checkCIDR now returns the matching CIDR instead of true | MP ([8a34f26c328d666ae803f5bef3b6aa5f14677051](https://github.com/mmpro/ac-ip/commit/8a34f26c328d666ae803f5bef3b6aa5f14677051))    
  checkCIDR now returns the matching CIDR instead of true



<a name="1.2.0"></a>
# [1.2.0](https://github.com/mmpro/ac-ip/compare/v1.1.4...v1.2.0) (2019-11-08 10:32)


### Features

* **Misc:** CHeck if IP is private | MP ([a83311517acfa828c1ca6f2fe9dc42a0d986a955](https://github.com/mmpro/ac-ip/commit/a83311517acfa828c1ca6f2fe9dc42a0d986a955))    
  New function "isPrivate" to check if a given IP is public or private



<a name="1.1.4"></a>
## [1.1.4](https://github.com/mmpro/ac-ip/compare/v1.1.3...v1.1.4) (2019-10-06 12:53)


### Bug Fixes

* **Misc:** Send IP as parameter if not in production mode | MP ([2a5725c](https://github.com/mmpro/ac-ip/commit/2a5725c))    
  For easier debugging it is now possible to just send the IP address as query parameter.



<a name="1.1.3"></a>
## [1.1.3](https://github.com/mmpro/ac-ip/compare/v1.1.2...v1.1.3) (2019-10-06 09:15)


### Bug Fixes

* **Misc:** Updated packages / Security fix | MP ([8e4c21c](https://github.com/mmpro/ac-ip/commit/8e4c21c))    
  Updated packages / Security fix



<a name="1.1.2"></a>
## [1.1.2](https://github.com/mmpro/ac-ip/compare/v1.1.1...v1.1.2) (2019-07-24 19:28)


### Bug Fixes

* **Misc:** Updated packages | MP ([8cec625](https://github.com/mmpro/ac-ip/commit/8cec625))    
  Updated packages



<a name="1.1.1"></a>
## [1.1.1](https://github.com/mmpro/ac-ip/compare/v1.1.0...v1.1.1) (2019-07-03 15:56)


### Bug Fixes

* **Misc:** Return unique array for ipsToPrivacy | MP ([c51318f](https://github.com/mmpro/ac-ip/commit/c51318f))    
  Make sure to group ips



<a name="1.1.0"></a>
# [1.1.0](https://github.com/mmpro/ac-ip/compare/v1.0.4...v1.1.0) (2019-07-03 15:20)


### Features

* **Misc:** New functions to make IPs GDPR ready and to check IPs against a list of IPs | MP ([40c2e24](https://github.com/mmpro/ac-ip/commit/40c2e24))    
  New functions to make IPs GDPR ready and to check IPs against a list of IPs



<a name="1.0.4"></a>
## [1.0.4](https://github.com/mmpro/ac-ip/compare/v1.0.3...v1.0.4) (2019-06-09 17:16)


### Bug Fixes

* **Misc:** Do not user req.allParams | MP ([57e5e4e](https://github.com/mmpro/ac-ip/commit/57e5e4e))    
  req.allParams is not available for non-sails APIs



<a name="1.0.3"></a>
## [1.0.3](https://github.com/mmpro/ac-ip/compare/v1.0.2...v1.0.3) (2019-04-09 16:22)


### Bug Fixes

* **Misc:** Allow custom IP with X-AdmiralCloud-Test header | MP ([89cc08c](https://github.com/mmpro/ac-ip/commit/89cc08c))    
  If you want to set a custom IP for testing or development, use X-AdmiralCloud-Test header as true
and send ip with request params.



<a name="1.0.2"></a>
## [1.0.2](https://github.com/mmpro/ac-ip/compare/v1.0.1...v1.0.2) (2019-01-20 10:54)


### Bug Fixes

* **Misc:** Minor code cleanup | MP ([a65b674](https://github.com/mmpro/ac-ip/commit/a65b674))    
  Minor code cleanup



<a name="1.0.1"></a>
## [1.0.1](https://github.com/mmpro/ac-ip/compare/v1.0.0...v1.0.1) (2018-09-22 10:27)


### Bug Fixes

* **Misc:** Updated packages | MP ([6c6014d](https://github.com/mmpro/ac-ip/commit/6c6014d))    
  Updated packages



<a name="1.0.0"></a>
# 1.0.0 (2018-08-22 15:39)


### Features

* **Misc:** Added methods for IP detection and IPs from CIDR | MP ([64377dc](https://github.com/mmpro/ac-ip/commit/64377dc))    
  + Detect IPs from Express-like request object
* **Misc:** First commit | MP ([617d724](https://github.com/mmpro/ac-ip/commit/617d724))    
  First commit




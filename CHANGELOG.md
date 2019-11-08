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




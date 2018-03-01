const _ = require('lodash')
const ipPackage = require('ip')

const acip = function() {
  /**
   * Checks an array (list) of CIDR for validity
   *
   * @param params.cidr array of objects containing keys "cidr" and optional "type". If no type => ipv4
   * @param params.ip string ip address to check against the given cidrs -> return true if matching
   * @param params.noMatchAllowed BOOL Only in combination with param.ip - if true, no error if returned if there is no match for the IP in given CIDR
   *
   * @param params.cb OPT (err, match) -> match is true if ip is given and matches CIDR
   *
   * [{
    "cidr": "2001:280::/32",
    "type"; "ipv6"
   },...]
   *
   */

  const checkCIDR = function(params, cb) {
    // 1 check if array
    const cidr = _.isArray(params.cidr) && params.cidr.length > 0 && params.cidr
    if (!cidr) {
      if (cb) return cb({ message: 'acip_checkCIDR_listIsEmpty' })
      return { message: 'acip_checkCIDR_listIsEmpty' }
    }

    if (params.ip) {
      let error = { message: 'acip_checkCIDR_ipNotInCIDRrange' }
      if (params.noMatchAllowed) error = null

      // check if IP is a match for any of the given CIDR
      let match = _.some(cidr, function(c) {
        if (ipPackage.cidrSubnet(c.cidr).contains(params.ip)) {
          error = null
          return true
        }
      })
      if (cb) return cb(error, match)
      return error
    }
    else {
      // check if all cidrs are valid
      let error
      _.some(cidr, function(c) {
        if (!_.isString(c.cidr)) error = { message: 'acip_checkCIDR_cidrIsNotValid' }
        else if (c.cidr.indexOf('/') < 0) error = { message: 'acip_checkCIDR_thisIsNoCIDR' }
        else if (!c.type || c.type === 'ipv4') {
          // check mask (max is 32)
          let mask = _.last(_.split(_.get(c, 'cidr', ''), '/'))
          if (mask > 32) {
            error = { message: 'acip_checkCIDR_maskInvalid' }
          }
          else if (!ipPackage.isV4Format(ipPackage.cidr(c.cidr))) {
            error = { message: 'acip_checkCIDR_invalid' }
          }
        }
        else if (c.type === 'ipv6') {
          // check mask (max is 128)
          let mask = _.last(_.split(_.get(c, 'cidr', ''), '/'))
          if (mask > 128) {
            error = { message: 'acip_checkCIDR_maskInvalid' }
          }
          else if (!ipPackage.isV6Format(ipPackage.cidr(c.cidr))) {
            error = { message: 'acip_checkCIDR_invalid' }
          }
        }

        if (error) {
          _.merge(error, { additionalInfo: { cidr: c.cidr, type: _.get(c, 'type', 'ipv4') } })
        }
        return error
      })
      if (cb) return cb(error)
      return error
    }
  }

  return {
    checkCIDR: checkCIDR
  }
}

module.exports = acip()

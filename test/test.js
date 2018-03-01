const expect = require('expect')
const acip = require('../index')

describe('Testing CIDR', function () {
  const validCIDRs = [{ cidr: '8.8.0.0/16' }]
  const invalidCIDRs = [{ cidr: '8.8.0.0' }]
  const validv6CIDRs = [{ cidr: '2001:4d20::/32', type: 'ipv6' }]

  it('Check if CIDR is valid', function(done) {
    let test = acip.checkCIDR({ cidr: validCIDRs })
    expect(test).toBeUndefined()
    return done()
  })

  it('Check if CIDR IPv6 is valid', function(done) {
    let test = acip.checkCIDR({ cidr: validv6CIDRs })
    expect(test).toBeUndefined()
    return done()
  })

  it('Check if CIDR is invalid', function(done) {
    let test = acip.checkCIDR({ cidr: invalidCIDRs })
    expect(test).toEqual({ 'additionalInfo': { 'cidr': '8.8.0.0', 'type': 'ipv4' }, 'message': 'acip_checkCIDR_thisIsNoCIDR' })
    return done()
  })
})

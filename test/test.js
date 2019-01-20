const expect = require('expect')
const acip = require('../index')

describe('Testing CIDR', function () {
  const validCIDRs = [{ cidr: '8.8.0.0/16' }]
  const invalidCIDRs = [{ cidr: '8.8.0.0' }]
  const validv6CIDRs = [{ cidr: '2001:4d20::/32', type: 'ipv6' }]

  let test1 = '85.182.224.128'
  let test2 = [{ 'cidr': '85.182.224.128/26' }, { 'cidr': '62.96.36.146/32' }, { 'cidr': '62.84.220.138/32' }]

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

  it('Check if IP is in CIDR ', function(done) {
    let test = acip.checkCIDR({ ip: test1, cidr: test2 })
    expect(test).toBe(null)
    return done()
  })

  it('Check if IP is in CIDR using callback ', function(done) {
    acip.checkCIDR({ ip: test1, cidr: test2 }, (err, result) => {
      if (err) return done(err)
      expect(result).toBe(true)
      return done()
    })
  })
})

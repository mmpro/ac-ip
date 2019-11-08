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

describe('IPs to privacy', () => {
  const ips = ['8.8.8.8', '4.4.4.4']

  it('Check that IPs are masked properly', (done) => {
    let test = acip.ipsToPrivacy(ips)
    expect(test).toEqual(['8.8.x.x', '4.4.x.x'])
    return done()
  })
})

describe('IP in IP list', () => {
  const ip = '4.4.x.x'
  const ipFail = '1.1.x.x'
  const ips = ['8.8.x.x', '4.4.x.x']

  it('Check that IP is in list', (done) => {
    let test = acip.ipInIPList({ ips, ip })
    expect(test).toEqual(true)
    return done()
  })

  it('Check that IP is not in list', (done) => {
    let test = acip.ipInIPList({ ips, ipFail })
    expect(test).toEqual(false)
    return done()
  })
})

describe('Is IP private', () => {
  const privateIPv4 = '127.0.0.1'
  const privateIPv6 = '::ffff:172.31.7.78'
  const publicIPv4 = '8.8.8.8'
  const publicIPv6 = '2001:4860:4860::8888'

  it('Check private IPv4 address', done => {
    let test = acip.isPrivate(privateIPv4)
    expect(test).toEqual(true)
    return done()
  })

  it('Check private IPv6 address', done => {
    let test = acip.isPrivate(privateIPv6)
    expect(test).toEqual(true)
    return done()
  })

  it('Check public IPv4 address', done => {
    let test = acip.isPrivate(publicIPv4)
    expect(test).toEqual(false)
    return done()
  })

  it('Check public IPv6 address', done => {
    let test = acip.isPrivate(publicIPv6)
    expect(test).toEqual(false)
    return done()
  })

})

var os = require('os')
var path = require('path')

function darwin (name) {
  return path.join(process.env['HOME'], 'Library', 'Caches', name)
}

function linux (name) {
  if (process.env['XDG_CACHE_HOME']) {
    return path.join(process.env['XDG_CACHE_HOME'], name)
  }

  return path.join(process.env['HOME'], '.cache', name)
}

function win32 (name) {
  if (process.env['LOCALAPPDATA']) {
    return path.join(process.env['LOCALAPPDATA'], 'data', 'Cache', name)
  }

  return path.join(process.env['USERPROFILE'], 'Application Data', 'Cache', name)
}

module.exports = function applicationCachePath (name) {
  if (typeof name !== 'string') {
    throw new TypeError('First parameter must be a string')
  }

  switch (os.platform()) {
    case 'darwin': return darwin(name)
    case 'linux': return linux(name)
    case 'win32': return win32(name)
    default: throw new Error('Platform not supported')
  }
}

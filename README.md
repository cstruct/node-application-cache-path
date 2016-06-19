# node-application-cache-path

Store your application cache in the right location.

## Installation

```bash
npm install --save application-cache-path
```

## Usage

```javascript
var applicationCachePath = require('application-cache-path')

// cachePath is a string with the path to a directory
// where you can store your cache.
var cachePath = applicationCachePath('My App')
```

## API

### `applicationCachePath(name)`

Return a string with the path to a directory where you can store your
application specific cache.

## Acknowledgments

Heavily inspired by [node-application-config-path](https://github.com/LinusU/node-application-config-path)

## License

MIT
mimosa-requirebuild-include
===========

Based on [mimosa-requirebuild-textplugin-include](https://github.com/dbashford/mimosa-requirebuild-textplugin-include)

## Overview

This is a Mimosa module.  It intercepts the r.js configurations before optimization occurs in order to include additional dependencies that the optimizer might not find during it's static analysis.

The actual function of this module is to find text dependencies and include them in the `include` array for a r.js run via the requirejs text plugin.

For more information regarding Mimosa, see http://mimosajs.com

## Usage

Add `'requirebuild-include'` to your list of modules.  That's all!  Mimosa will install the module for you when you start up.

## Functionality

The `'mimosa-requirebuild-include'` module configuration is a pointer to a directory of files to include. The patterns option is an array of [glob patterns](http://en.wikipedia.org/wiki/Glob_%28programming%29) relative to the mimosa base url and is used to identify additional files to add to the 'include' array for r.js.

## Default Config

```
requireBuildInclude:
  folder: null,
  patterns: [],
  exclude:[/-built.js$/,/reload-client.js$/]
```

* `folder`: The folder to scan for files to include. This defaults to the `baseUrl` of the r.js run config, but this setting allows for providing an override. If provided, `folder` should be absolute or relative to the `watch.sourceDir`
* `patterns`: an array of glob patterns, (ex: `"some/dynamically/loaded/folder/**/*.js"`) used to match files to include in the r.js config's 'include' array.  Ex: foo/*.js. All files in the watch.javascriptDir/foo folder will be pushed into the array and already present array entries will be left alone.
* `exclude`: a list of regexes or strings used to match files to be excluded files that match any patterns. By default a few common mimosa files/patterns that should not be bundled in an r.js run are included.
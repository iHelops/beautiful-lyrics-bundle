# Beautiful Lyrics Bundle
This repository contains a built version of the [`Beautiful Lyrics`](https://github.com/surfbryce/beautiful-lyrics) extension for `Spicetify` with modified references to static files. This is a temporary solution that replaces links to static files from the author's CDN with public sources. The reason for this was [non-functioning CDN](https://github.com/surfbryce/beautiful-lyrics/issues/1080) by the author of the extension.

## Changes:
- Fonts are used from the repository https://github.com/awdev1/beautitifullyricsfont (thanks @awdev1)
- The `kuromoji` dictionaries are used from the original repository `kuromoji.js` https://github.com/takuyaa/kuromoji.js/tree/master/dict.
- The `beautiful-lyrics.mjs` script has been rebuilt to use the build from the current repository, and auto-updates have been cut out.

## Installation
1. Download the [`beautiful-lyrics.mjs`](https://github.com/iHelops/beautiful-lyrics-bundle/blob/main/beautiful-lyrics.mjs) file from this repository and place it in the following directory

| Platform      | Path                             |
| ------------- |:--------------------------------:|
| Windows       | `%appdata%\spicetify\Extensions` |
| Linux/MacOS	| `~/.config/spicetify/Extensions` |

2. Activate the extension using the following commands
```console
$ spicetify config extensions beautiful-lyrics.mjs
$ spicetify apply
```

## Uninstall
1. Disable the extension using the following commands
```console
$ spicetify config extensions beautiful-lyrics.mjs-
$ spicetify apply
```

2. Delete the file from step #1 in the installation instructions. (Optional)

## Conclusion
Please do not use this method to install the extension unless you have problems with the original [`Beautiful Lyrics`](https://github.com/surfbryce/beautiful-lyrics) extension. This version will not update automatically and the next Spotify update may break it.

/*
 * The original script belongs to @surfbryce and can be found in this repository
 * https://github.com/surfbryce/beautiful-lyrics/blob/main/Builds/Release/beautiful-lyrics.mjs
 */

const version = "4.2.0";
const repository = "https://cdn.jsdelivr.net/gh/iHelops/beautiful-lyrics-bundle@main";

// Wait for Spicetify/Snackbar to load
await new Promise((resolve) => {
  const interval = setInterval(() => {
    if (Spicetify !== undefined && Spicetify.Snackbar !== undefined) {
      clearInterval(interval);
      resolve();
    }
  }, 10);
});

const load = () => {
  // Load CSS
  const css = document.createElement("link");
  css.rel = "stylesheet";
  css.href = `${repository}/releases/${version}/bundle.css`;
  document.body.appendChild(css);

  // Load JS
  import(`${repository}/releases/${version}/bundle.mjs`);
};

load();

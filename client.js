import { ReactInstance } from 'react-360-web';

function init(bundle, parent, options = {}) {

  const SIZE = 300;

  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  });

  // Creating a Video Player
  // const player = r360.compositor.createVideoPlayer('FOREST_VIDEO');
  // player.setSource(r360.getAssetURL('forest.mp4'), '3DLR', 'mp4');
  // player.load();
  // player.play();

  r360.renderToSurface(
    r360.createRoot('VrBase', {}),
    r360.getDefaultSurface()
  );

  // r360.compositor.setBackgroundVideo('FOREST_VIDEO');
  // set background image
  r360.compositor.setBackground(r360.getAssetURL('forestImage.jpeg'));
}

window.React360 = {init};

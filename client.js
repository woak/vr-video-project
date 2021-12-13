import { ReactInstance, Surface } from 'react-360-web';

function init(bundle, parent, options = {}) {

  const SIZE = 300;

  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  });

  // Creating a Video Player
  const player = r360.compositor.createVideoPlayer('FOREST_VIDEO');
  player.setSource('forest.mp4', '3D');

  r360.renderToSurface(
    r360.createRoot('VrBase', {}),
    r360.getDefaultSurface()
  );

  r360.compositor.setBackgroundVideo('FOREST_VIDEO');
}

window.React360 = {init};

import { ReactInstance } from 'react-360-web';

function init(bundle, parent, options = {}) {

  const SIZE = 300;

  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  });

  // Creating a Video Player
  // const player = r360.compositor.createVideoPlayer('FOREST_VIDEO');
  // player.setSource(r360.getAssetURL('forest.mp4'), '3D', "mp4");

  r360.renderToSurface(
    r360.createRoot('VrBase', {}),
    r360.getDefaultSurface()
  );

  // r360.compositor.setBackgroundVideo('FOREST_VIDEO');
  r360.compositor.setBackground(r360.getAssetURL('3d_scene.jpg'));
}

window.React360 = {init};

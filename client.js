import { ReactInstance, Surface } from 'react-360-web';

function init(bundle, parent, options = {}) {

  const SIZE = 300;

  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  });

  // CAPSULE
  const capsuleSurface = new Surface(
    SIZE,
    SIZE,
    Surface.SurfaceShape.Flat,
  );
  capsuleSurface.setAngle(0, 0);
  r360.renderToSurface(
    r360.createRoot('VrBase', { name: 'Capsule' }),
    capsuleSurface,
  );

  r360.compositor.setBackground(r360.getAssetURL('3d_scene.jpg'));
}

window.React360 = {init};

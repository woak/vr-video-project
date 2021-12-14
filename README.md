# vr-video-project
Personal vr video project

NOTE: when cloning this project you will need to follow this step: 
https://stackoverflow.com/questions/58268958/i-am-getting-invalid-regular-expression-error-while-running-npm-start
Note that the fix is in metro-bundler not metro-config


See tutorials: https://codeburst.io/react-360-by-example-part-1-c652443cfd8a
                https://blog.logrocket.com/building-a-vr-app-with-react-360/

Develop locally: npm run start
NOTE: local development occurs here: http://localhost:8081/index.html

Generate prod bundle: npm run bundle
NOTE: The bundle script has a bug, must first run this in the terminal: 
export NODE_OPTIONS=--openssl-legacy-provider
(thank you for this solution: https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported)

Deploy the application: npm run deploy
The application is hosted at this location: https://woak.github.io/vr-video-project/

REACT 360 DOCS: https://github.com/facebookarchive/react-360/tree/master/docs

For VR Video:
https://github.com/facebookarchive/react-360/blob/master/docs/photos-and-videos.md

Specifically... : 
https://github.com/facebookarchive/react-360/blob/master/docs/photos-and-videos.md#video-uis

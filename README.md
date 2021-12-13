# vr-video-project
Personal vr video project


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

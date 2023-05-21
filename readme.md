# jsbundle hoster
Hosts some .bundle.js files in /dist/ for the other backends to use.
Basically a way to share JS locally between backends. 
Silly.

## filestructure
Run `npm start` or use the dockerfile to run.
The main hoster bundle just builds to the root, but all the rest will be served directly from /dist/, which the express server maps to /.
Accessing "global_module.bundle.js" means accessing http://localhost:PORT/global_module.bundle.js.
All bundles are just statically hosted.

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "b6d00ad079cb2dd63cbe99e08f068010"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.f6b83664.css",
    "revision": "e0a7da072f821dd2428797e33897aec1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.62e26f44.js",
    "revision": "c4774515ce9f6b5e95fa18ad8f67ef55"
  },
  {
    "url": "assets/js/10.1f8e435c.js",
    "revision": "e065eca5ea686ec9f05f4e15eeee584a"
  },
  {
    "url": "assets/js/13.04d5551e.js",
    "revision": "a9f8173d5cf0baef60fa34c75aad6a88"
  },
  {
    "url": "assets/js/14.69b33200.js",
    "revision": "77d17475c9b8ad304bb72c47f020c9d3"
  },
  {
    "url": "assets/js/15.36ece724.js",
    "revision": "6f480fc48aefdf2339b48b2f409d751f"
  },
  {
    "url": "assets/js/16.385bdaa8.js",
    "revision": "0e6a4cf7495dc25ccbe19d6aaf3a4e44"
  },
  {
    "url": "assets/js/17.f7498c42.js",
    "revision": "d3bc6a0493fa1730ed403006773654dd"
  },
  {
    "url": "assets/js/18.cb523fb8.js",
    "revision": "0ed5a987aaee77829015b68b22056680"
  },
  {
    "url": "assets/js/19.88c44e1c.js",
    "revision": "7d39b97edb606c113074cf9c9d2140b6"
  },
  {
    "url": "assets/js/2.6714ab6b.js",
    "revision": "d13ed92ec8c18eedb898c47c79bb7d66"
  },
  {
    "url": "assets/js/20.85580ecd.js",
    "revision": "f9633b4709fc51ef202ef916157786a0"
  },
  {
    "url": "assets/js/21.e4c216b9.js",
    "revision": "daa666228de399dc049969950fa3ed85"
  },
  {
    "url": "assets/js/22.2fbc1182.js",
    "revision": "cddb52eaa1d7c425cb22d4dc210d7c7e"
  },
  {
    "url": "assets/js/23.d2f0dc37.js",
    "revision": "ea9812a5d3e5eae92a593d87a09ce8fb"
  },
  {
    "url": "assets/js/24.bd9f3436.js",
    "revision": "ead5652a6bf19f8a36d033ab5fb74b17"
  },
  {
    "url": "assets/js/25.a73de08e.js",
    "revision": "f190e5225e33ff12dbe582937a572177"
  },
  {
    "url": "assets/js/26.ae6958f0.js",
    "revision": "832b34210ab4eea94602d0f81ef82dca"
  },
  {
    "url": "assets/js/27.41d532f9.js",
    "revision": "d15f2e9a4421cdf362f812c3c24c5475"
  },
  {
    "url": "assets/js/28.43d514d7.js",
    "revision": "cf90743245097d1a116d9e8d1b630671"
  },
  {
    "url": "assets/js/29.eb2d1bc4.js",
    "revision": "cd80ec4e383e48862fba0b203f20b699"
  },
  {
    "url": "assets/js/3.c3b4eec0.js",
    "revision": "87b233894e1bb4a6d3d9e727cc12f175"
  },
  {
    "url": "assets/js/30.22d593af.js",
    "revision": "63429c8fc09d4243e40532a264b9753a"
  },
  {
    "url": "assets/js/31.aec1a0e4.js",
    "revision": "9ee51c9e1459dc5e04df4691921f9b1a"
  },
  {
    "url": "assets/js/32.6ca5e380.js",
    "revision": "95ad9d2eb7486e2de075aa686c4fd4d5"
  },
  {
    "url": "assets/js/33.cbc684bf.js",
    "revision": "24b74dfb1a4998caf3eeda402b48deec"
  },
  {
    "url": "assets/js/34.b30a12e2.js",
    "revision": "e8f907ad34ed1c8e7cf46661534d1648"
  },
  {
    "url": "assets/js/35.e645a771.js",
    "revision": "93e9adae19cc5264f2e26cf1dd3dc998"
  },
  {
    "url": "assets/js/36.34540075.js",
    "revision": "9727300668158d5b98448a7519143f47"
  },
  {
    "url": "assets/js/37.16e6737a.js",
    "revision": "2a31850dfa88fa0c33f495f492d8fac9"
  },
  {
    "url": "assets/js/38.f269d822.js",
    "revision": "cbd577385af576242e3517acf0ec2364"
  },
  {
    "url": "assets/js/39.e6f86251.js",
    "revision": "09d0cb65a1ec95370d33c132fed879f6"
  },
  {
    "url": "assets/js/4.69e4e1b9.js",
    "revision": "a965f61bc470d41a373b05febaf5a171"
  },
  {
    "url": "assets/js/41.3fe40e51.js",
    "revision": "d33b8fe489e7938b5294cab96d1a7faf"
  },
  {
    "url": "assets/js/5.54ee6721.js",
    "revision": "c13e9d331da581ab2624595d36d35f9b"
  },
  {
    "url": "assets/js/6.2d83eac6.js",
    "revision": "49bc18da6c9f9bc787b5957f9be5bba0"
  },
  {
    "url": "assets/js/7.b1995e33.js",
    "revision": "5d64159f04f02cd4146ef66cfef63ade"
  },
  {
    "url": "assets/js/8.330203a9.js",
    "revision": "c643042a4a37c03548b344819b1e90a9"
  },
  {
    "url": "assets/js/9.1a9c7768.js",
    "revision": "b344120c5d163a728ce559cce35eac92"
  },
  {
    "url": "assets/js/app.b03cf35e.js",
    "revision": "0b2de857a1b4923e434245814c69d44a"
  },
  {
    "url": "assets/js/vendors~docsearch.ad1b6247.js",
    "revision": "294b247c6ab62b4e7e84055aafee5eb6"
  },
  {
    "url": "conclusion/index.html",
    "revision": "caecd2e2c91feea63ad4ab256c0003d0"
  },
  {
    "url": "design/index.html",
    "revision": "7b14706bb8af961f6334d631a5144964"
  },
  {
    "url": "index.html",
    "revision": "076eba6471996f4d83008be49dafc101"
  },
  {
    "url": "intro/index.html",
    "revision": "2641577a8298fe131de0de8d7f8922ab"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "dfc0260358c3b059324ff83281fab482"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "1e4a98b88b4c290000d9a6c699b807eb"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "3e94729457ab42b9b490f3550fc7b45b"
  },
  {
    "url": "software/index.html",
    "revision": "6763ff5856719c57876da3cd52f3efb7"
  },
  {
    "url": "test/index.html",
    "revision": "94010b8b98e4943b4d4967071332c59d"
  },
  {
    "url": "use cases/index.html",
    "revision": "d498c8a7fc19cc4b7677b990632c40e4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

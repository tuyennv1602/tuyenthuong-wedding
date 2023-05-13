'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "957246cbb412ad626f143ef045683780",
"index.html": "5b460a6e7abe24db0799047083dddaec",
"/": "5b460a6e7abe24db0799047083dddaec",
"CNAME": "ba9c0d3a643646bf22b8cea7f6e40133",
"main.dart.js": "a6a6b6fffec7ab7ff49a5c1da00997fa",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5e91ab2dbf041e47080e52b5578c1a24",
"icons/Icon-192.png": "ad4c6ba373268b163ae988f035f7fa84",
"icons/Icon-maskable-192.png": "ad4c6ba373268b163ae988f035f7fa84",
"icons/Icon-maskable-512.png": "5829d85878cb20f0291f4a0495517ade",
"icons/Icon-512.png": "5829d85878cb20f0291f4a0495517ade",
"manifest.json": "5f23f963ce7ecaac09d645eb64dade88",
".git/config": "d6e0f053cf263d6b70e9ffb6627ea196",
".git/objects/0d/0b3c98012f619ef6417a00595947132fa3d08d": "0c784277e345961dfc1aa2a03a5f0c7c",
".git/objects/92/4e819a891445c2430baa6b7b08bb8818ffdfc9": "a4d7237fba0b0e1e04839f09b8822852",
".git/objects/92/861492931dda052edab2509bb447e67d2fd514": "3a6fea74fdc642bc34e247d414ca1c95",
".git/objects/0c/816c9a48491416e4ba028c8c6c6bc74ed5e2a7": "44e994b86bb1ceaf08a58d94a4c885f0",
".git/objects/57/241ee04ecad5b8acf570206608702aa59fd916": "4b5fa75ae3263419eb8afd82187f0baa",
".git/objects/56/de0c2e92bb61c070e39a5b1ee77e7717a82c33": "0a4483790a31f6c5ab214602aa741166",
".git/objects/94/102cd017c5d6e351a48e964ee809654b76475b": "a44a54ae0d809a6687d726e1505de21e",
".git/objects/9d/940e5e1ccd60ca4084d613ab85fedf7eaaff20": "1de730b2fae3beffa14d4daaa7fd3b33",
".git/objects/b5/effaf35433b355d2cfce368d0383eb26f6339b": "49ecfeb6bd20545f9d920276c5a6d031",
".git/objects/ad/6869685dfe100f32031af98ccfeecc91d860aa": "71c70ee65d01a9f3912d037a384eca5b",
".git/objects/ad/97025017b4e41db92f855ba934337515b2089a": "432c3c691d3a14fcd976e2f656c4593a",
".git/objects/b3/8e7d14afaba56cddad5af5296044a4f40193a9": "48e47de39762ff707c3c829aa083f3e4",
".git/objects/d1/efc8c6c4c50d503c9f7fc2332af329e73460fd": "d554227c94312d59926a644aa6d0efea",
".git/objects/d1/e978fb7b229de153e0f17d91c30dd2e3906bb9": "1155ed5e597ec5d602ee4640aecd3718",
".git/objects/ab/7a9c2c0c4037fb2319417c5895dc1c8669318a": "60acd3ebca95cfaa8b6d6757804dea72",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/19f68b63551b6fb801e3449213e42409b8aabc": "e7f0aa7375556794879a7d167f06ef46",
".git/objects/ee/69ad42e04b076c8cfdce606a976ba3e04dd1ec": "d4d42902e12490b846e8de0647ae21ea",
".git/objects/ee/9ce656ec5c74b51966368c488b8477cfdcf252": "bcb35e2ce762fe7891f49722702bfb10",
".git/objects/20/fae8412bdd81bccf8637e11b9b49faa0569049": "a1059c26753b53a5bb24536e317956ab",
".git/objects/pack/pack-e05c95ffb5502288d9b744eac2f48aea42d22e23.pack": "e702a6d03c40a3aad9e281bbc9ffc99b",
".git/objects/pack/pack-e05c95ffb5502288d9b744eac2f48aea42d22e23.idx": "b56b4d657dd2855c6af189c01f397ace",
".git/objects/73/50762d738504d260a1fdb12cce220fb4488ba8": "028ad15ec0e39925a25d0971280c57ba",
".git/objects/4d/8da0f48dbda29da04d330167ab07850b09a556": "2bcca7383d97ca7178a04b5169ae9662",
".git/objects/72/66c397eddd1a5ae97705d243c540468dbad7cf": "725f3766026960be903baca727a54a7f",
".git/objects/2a/2c3c6e73dd1fed662f689416ce1d13990a4b2c": "dddb467fae69c7cdb3d746ffa5dcec1d",
".git/objects/09/3357cb3ff9de6ac008b6ef57c9fbe0b66c4e66": "42986d6eb7768d7e6c42d9cd850bc7fe",
".git/objects/5d/fbc022993dfbef6d99093dfa61482728329431": "099c3641b8d41d17e0b25c4749e92888",
".git/objects/62/d4923eb4291198f3371ebb146a3132c7ffe5bc": "d72f9598493361b8865c69f87ef426bb",
".git/objects/54/882f361931294d3347f97404f4c13c82404063": "e2fe7f701c648f704a0e8c5ee21dbc25",
".git/objects/08/1db0bb3c1a008940bcc79817128c0959f107f9": "4f57bb00ad12052806df5e39a6f5de1d",
".git/objects/06/2f69576600db9aabab7e00704d24358893cda2": "4e33557370835e9d6c470d98030c77bb",
".git/objects/06/1cce3f2e0bc74f8ec932b039b874cb453d1bfa": "0606933127f3c3e1b435cc4df27c3a3c",
".git/objects/0f/3b2c39eab7dff0db9ce63c9f03c857307a8eca": "01ae99b90a8d2af4a5595070b0b2eb57",
".git/objects/0f/165402399c7608b8a12dbed0807051a37c8065": "79e1574067c4d4b732ecf0462c376e51",
".git/objects/90/be18c811175cb4f6ecab8da00515f82a54de39": "2f33a714dd24794f7aee74ccf0f26938",
".git/objects/bf/01a04a2a8cbfc568dec6d551329c32884148c4": "5489a25a3f1ee08953e10969b6f42adb",
".git/objects/dc/2344a3b2e6a01c84b452c2561a85ebc22ebc8e": "fa53407188ca94f808b12ce818fb4467",
".git/objects/aa/f58c15aae36afaeee2eed1fcd748f460155240": "bbd4cdacf11c5c6b24cff54a9f8c5e2c",
".git/objects/de/fd00e2f55813eda9b445a1c3d173bc32051d04": "b9d3b9628beaa91974f1ff035dbd385a",
".git/objects/a6/6410e9400328989b3595450253809dd0a0d245": "0bef5baa12592eff521e4a74e5e360f7",
".git/objects/b9/793c314c632ecc0fc1545bfd4dd5cb1059ba9d": "6700b32b1a959937eb64428ff8010bcd",
".git/objects/a1/398b338084cbaf0e99d89cb6089715baa78a6d": "02dc4e91b5e7a3ec6ab241de1c601d92",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/6442e9b7ca91cf661be2392826af35548c2190": "36ea4876b76f9f0a0458462f004e37ab",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/1e/36b23069194a29dc870a4a79d67a4c786026a4": "5e3ae060fafa2c3ee43b26f694dc2134",
".git/objects/15/bef4593327d44f7e4b17ddaedbcf1eed10e14a": "24b4cd68aba9c6462b5fb6236d59e7ca",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/1d/c226ddc00a11a9813844b00fb5edaf87921c38": "d73b813d540247e93f9aa23afe6b3f47",
".git/objects/76/1ac2d08d4de8b48de426bbebe7cfd92f4f134d": "93e389d85177fc3a7c7ec1cf3de0f9d5",
".git/objects/82/f8da7de12b9770fefe273f5217fbcb894875c3": "2bf89a3e4e975542a849c2d1a8f03a37",
".git/objects/49/0194c829b0a0dde08023bd3a10f19d7c16e6a8": "7b86fa3628b2c0ebe3546bdddeb1feaf",
".git/objects/13/29fa2ae95aa8f7f8d1fe83515efe728c25b899": "b6a5212c7109ddacd00bd37635ecbea5",
".git/objects/22/ac02cde5b7968cf0291cc8d522ff84ef1968fa": "793f2b0556cd1e6695cd01e3ce8f1e73",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "390fd990de694219f41b6392f4e5a031",
".git/logs/refs/heads/develop": "6caad9f3e09876415a26e6ee9c4d674f",
".git/logs/refs/heads/master": "5f9b8838c22cd43da1fc5ca68b49d497",
".git/logs/refs/heads/main": "5d2ff431bb3a3ab899b32d35f00ac06f",
".git/logs/refs/remotes/origin/develop": "53c01acf1eeb1283c8a58651fb8aa702",
".git/logs/refs/remotes/origin/main": "563b9e47badd7a102ea97f0f96e2e972",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/develop": "2f26fac97fa46b1c5e717157044b298c",
".git/refs/heads/master": "2f26fac97fa46b1c5e717157044b298c",
".git/refs/heads/main": "4f214b0057435f446a35360d5cb56b67",
".git/refs/remotes/origin/develop": "2f26fac97fa46b1c5e717157044b298c",
".git/refs/remotes/origin/main": "4f214b0057435f446a35360d5cb56b67",
".git/index": "d90ca2bd1f58e1a81a99fac2935e821c",
".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/FETCH_HEAD": "2225c3aa7e983f225bd5e4f37fa990ef",
"assets/AssetManifest.json": "27015e8f8c0ef71033712e70f80979e6",
"assets/NOTICES": "4b840b49823e7fdf69cbe11dffabf6b4",
"assets/FontManifest.json": "cf20abe5b58a10a69d79ff04d372b7c4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/icon.png": "f43539df83452d1b7ee37e27b2e54a75",
"assets/assets/images/rvsp.png": "99f27203a063a76e3a639e758047fe56",
"assets/assets/images/background1.jpg": "371b6c73e6dce371077301352c0b0d2a",
"assets/assets/images/acb.jpg": "0279d182ca0c4fa48f0fdfa303c7725d",
"assets/assets/images/girl.png": "4ea2790264793481ce24e2cc150e29b1",
"assets/assets/images/f1.png": "f15223d1b401fc6dd11ee123b75852ee",
"assets/assets/images/rose_gold.json": "178f31d36ef1fd65393d05f99562fcb4",
"assets/assets/images/circle_flower.json": "0af9c8ce2a102e75daa3aea380869788",
"assets/assets/images/divider3.png": "aa63f12160a803821e1253db2b3958d4",
"assets/assets/images/f2.png": "704f58cb933649dced17e5995ceb959d",
"assets/assets/images/background.jpg": "304c79107eea10fe53030a8c2c9ef5d9",
"assets/assets/images/divider2.png": "312b346e6cc27fd79874a7f183415d1a",
"assets/assets/images/heart.png": "3ea7ff412716d06b835607225b3429f3",
"assets/assets/images/ring.png": "1f93ec7bb0ea36ceb3fda9d20c325ff4",
"assets/assets/images/date_frame.png": "1a8dacdf51e5792b639a09cb6174dbaf",
"assets/assets/images/img3.jpg": "726c7b5f5e6307dd10dd3c8e33c14419",
"assets/assets/images/heart2.png": "f5ce19778d7e030ad94b4e9e4c3ed7a7",
"assets/assets/images/heart3.png": "02663ef9956eb2f601dae9baac0861cb",
"assets/assets/images/img2.jpg": "a9dd9139344ea7837122da5c93a48b53",
"assets/assets/images/vcb.jpg": "489581714874db659ef16f9385ea0109",
"assets/assets/images/bg2.png": "1ceabceb01a66126a32da84a76aa27e7",
"assets/assets/images/img1.jpg": "331942426e75e39827d6ac3292dea193",
"assets/assets/images/heart_feedback.json": "01fdb8427506ea45be4e2ad4ff6eb339",
"assets/assets/images/heart_fly.json": "8a251faf889dcb8b23f1b6a1dbfa74ce",
"assets/assets/images/leaf.png": "66ba7529440f2b1acace57fe53b9d48e",
"assets/assets/images/boy.png": "501c28c3528fe713040d5c7474a33791",
"assets/assets/images/circle_frame.png": "9aab34f83854036021d63be053f78404",
"assets/assets/fonts/wedding.ttf": "add9a64425e5411a280ac0f6ad7c2ab2",
"assets/assets/fonts/OpenSans-Bold.ttf": "8ff9b5735ccb338267f0034d83fe8214",
"assets/assets/fonts/OpenSans-Regular.ttf": "22ab03a6b890f2f142a137a38bf1d4ae",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

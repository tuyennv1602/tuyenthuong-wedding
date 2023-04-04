'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "961643e1794347654394bc9ce301c3ad",
"index.html": "f343b940b9ad26bff4b065a4f7054956",
"/": "f343b940b9ad26bff4b065a4f7054956",
"CNAME": "ba9c0d3a643646bf22b8cea7f6e40133",
"main.dart.js": "7002bfe591a4b2a631a1880321b02806",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5e91ab2dbf041e47080e52b5578c1a24",
"icons/Icon-192.png": "ad4c6ba373268b163ae988f035f7fa84",
"icons/Icon-maskable-192.png": "ad4c6ba373268b163ae988f035f7fa84",
"icons/Icon-maskable-512.png": "5829d85878cb20f0291f4a0495517ade",
"icons/Icon-512.png": "5829d85878cb20f0291f4a0495517ade",
"manifest.json": "5f23f963ce7ecaac09d645eb64dade88",
".git/ORIG_HEAD": "1167dd309fb1e1fefc487935df9a1709",
".git/config": "d6e0f053cf263d6b70e9ffb6627ea196",
".git/objects/ad/97025017b4e41db92f855ba934337515b2089a": "432c3c691d3a14fcd976e2f656c4593a",
".git/objects/d0/b03da541907a0e92fddb02763dcd7ee433a947": "bb94fc34097442f6d0a3faaed2753dd8",
".git/objects/e2/dcdcae971cb85ad1948e0473b9f1be5d248238": "32f1aace60653b7bc57888308cfcc56f",
".git/objects/ee/9ce656ec5c74b51966368c488b8477cfdcf252": "bcb35e2ce762fe7891f49722702bfb10",
".git/objects/fd/28bef01570880d3395b7e0d2021926e640b42c": "18b3c5aadfd1ea0f9b52fbc624fe5610",
".git/objects/18/906507b873f59210e827e4e580dd27129fc5d0": "6d9808fb058a7f1610f78ebd7e218519",
".git/objects/pack/pack-a6ade3d9ec6754b53d88945e8d0eef39a2f504f0.pack": "09df9f85f84b0997eedca773e5f0d41a",
".git/objects/pack/pack-a6ade3d9ec6754b53d88945e8d0eef39a2f504f0.idx": "68b8ea27a3bd068bfd2953e13e3d6ec8",
".git/objects/11/f7d32a385d322d3783e94bcb5f65046383a81a": "0814a06ed8ac004e8034c6874d560280",
".git/objects/42/e03dc198dbc7fec8acf30e5de79bfd4b0abbc6": "03fa9a6749bb5529c115098eeb90a0d3",
".git/objects/87/f0737e4a0b5b00b6f391eed2310431fe1d5db0": "92ae55562305555afcdff4f426d528a7",
".git/objects/7e/83ca277cabca3f3610057457ff8323a26f4f2f": "780839bea24bc5c002d5806f6aabd842",
".git/objects/26/5612b5937754d06ddcd0bc1df5f929c5441c72": "88a35c3d4e88858903552977e2d780db",
".git/objects/00/492e3b0c6423664dc44c0041cadd29e253e902": "9bc1384d3a25185096ede519eb22f7b5",
".git/objects/91/483f9034620ebe41b45c81417ad9f818c80f4c": "a5c05f2dd46f86ececa5e64535dcef98",
".git/objects/37/56b93c77ffe5795c5f49e0a7eb9fe897dd3148": "3df3d8eb74699a84cb4557ef49ffabbf",
".git/objects/a6/6410e9400328989b3595450253809dd0a0d245": "0bef5baa12592eff521e4a74e5e360f7",
".git/objects/a1/398b338084cbaf0e99d89cb6089715baa78a6d": "02dc4e91b5e7a3ec6ab241de1c601d92",
".git/objects/fa/97d587a4a562b7ca7d1b82295a7611bbae48d2": "64cb95282f9764a8f775e3b88c763a0b",
".git/objects/48/05ae7c9e3b46018e5799c8eccdfcfbcb6369f8": "9a75df6f93d3f88ab749e1d50a7414a6",
".git/objects/24/1840358df9dc150a55e8f7241f431b3933b1ac": "2f29ee4628617005d367e6d172ff2fdf",
".git/objects/1d/c226ddc00a11a9813844b00fb5edaf87921c38": "d73b813d540247e93f9aa23afe6b3f47",
".git/objects/82/c55612a6adf43de416e5ca9926a402144f8c78": "b178648f163a97d63e6a7369b54b6e06",
".git/objects/2b/980b37da18e50133187416036d5a7a709e221a": "4a37bf6fe465f4ced0710d7f520303d0",
".git/objects/8e/7eb6c48b67d20fcb52890ec98bde28c00bb6a7": "932b093ce31346e80d5aaeb50fbe1f4e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "8a0023b978074560da568367159feb0e",
".git/logs/refs/heads/main": "8a0023b978074560da568367159feb0e",
".git/logs/refs/remotes/origin/HEAD": "6d305f7e6263cc16e8759b3f253e1e36",
".git/logs/refs/remotes/origin/main": "6e63588f36fd95f6fdb1cf2fefc9f0ea",
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
".git/refs/heads/main": "aaed5ace33960c2908465ee1f3af9fd0",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "aaed5ace33960c2908465ee1f3af9fd0",
".git/index": "f67dbe9461bdff61543a3a9cc54ef654",
".git/packed-refs": "dc9751a00b5db63e17dc26a648eb23c3",
".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/FETCH_HEAD": "02f033df0d9aa41f5e83b847d68aeb5d",
"assets/AssetManifest.json": "01fcce1e85fe2afe2d8fbd94af222715",
"assets/NOTICES": "4b840b49823e7fdf69cbe11dffabf6b4",
"assets/FontManifest.json": "cf20abe5b58a10a69d79ff04d372b7c4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/icon.png": "f43539df83452d1b7ee37e27b2e54a75",
"assets/assets/images/rvsp.png": "99f27203a063a76e3a639e758047fe56",
"assets/assets/images/background1.jpg": "371b6c73e6dce371077301352c0b0d2a",
"assets/assets/images/acb.jpg": "0279d182ca0c4fa48f0fdfa303c7725d",
"assets/assets/images/happy_wedding.png": "080cb01f97cb65b0bd2999bf81c30f72",
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
"assets/assets/images/img3.jpg": "ab66c42fb0ca5c26977c765d9536a17e",
"assets/assets/images/heart2.png": "f5ce19778d7e030ad94b4e9e4c3ed7a7",
"assets/assets/images/heart3.png": "02663ef9956eb2f601dae9baac0861cb",
"assets/assets/images/img2.jpg": "8b999e6bd5583d2c9b1ab21df18723ae",
"assets/assets/images/vcb.jpg": "489581714874db659ef16f9385ea0109",
"assets/assets/images/bg2.png": "1ceabceb01a66126a32da84a76aa27e7",
"assets/assets/images/img1.png": "3df92ea3af2f282d50fcc51d9672881e",
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

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "961643e1794347654394bc9ce301c3ad",
"index.html": "4224563a1ebd99f5f04c43a944becc80",
"/": "4224563a1ebd99f5f04c43a944becc80",
"CNAME": "ba9c0d3a643646bf22b8cea7f6e40133",
"main.dart.js": "5c2681e6802a1b4923a751d1dd996769",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5e91ab2dbf041e47080e52b5578c1a24",
"icons/Icon-192.png": "ad4c6ba373268b163ae988f035f7fa84",
"icons/Icon-maskable-192.png": "ad4c6ba373268b163ae988f035f7fa84",
"icons/Icon-maskable-512.png": "5829d85878cb20f0291f4a0495517ade",
"icons/Icon-512.png": "5829d85878cb20f0291f4a0495517ade",
"manifest.json": "5f23f963ce7ecaac09d645eb64dade88",
".git/ORIG_HEAD": "9212ffbc001e74b6419cfe2402ff4580",
".git/config": "d6e0f053cf263d6b70e9ffb6627ea196",
".git/objects/0d/0b3c98012f619ef6417a00595947132fa3d08d": "0c784277e345961dfc1aa2a03a5f0c7c",
".git/objects/92/4e819a891445c2430baa6b7b08bb8818ffdfc9": "a4d7237fba0b0e1e04839f09b8822852",
".git/objects/92/861492931dda052edab2509bb447e67d2fd514": "3a6fea74fdc642bc34e247d414ca1c95",
".git/objects/3e/c149edabe97af242099b7a97071108a43338c1": "5056951560e99c51548de57b591126e1",
".git/objects/57/241ee04ecad5b8acf570206608702aa59fd916": "4b5fa75ae3263419eb8afd82187f0baa",
".git/objects/9b/f7063b60fad39306194000aa3124a7eeadb3ad": "25e4598e2f2b46a0f82fb29c524b51af",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/56/de0c2e92bb61c070e39a5b1ee77e7717a82c33": "0a4483790a31f6c5ab214602aa741166",
".git/objects/94/102cd017c5d6e351a48e964ee809654b76475b": "a44a54ae0d809a6687d726e1505de21e",
".git/objects/05/1c834f2cdf4f229f7cf1d5123675605db01d57": "5e98a296c791c2277a31544b9344caa3",
".git/objects/9d/77987980812792df58ca99f218f3fc807a9907": "2d1686ded7862c502fcb0fc48afb203a",
".git/objects/9d/940e5e1ccd60ca4084d613ab85fedf7eaaff20": "1de730b2fae3beffa14d4daaa7fd3b33",
".git/objects/9c/ff9267b5e6b2c2d0874d922ed9a42e3bbd1a36": "bbbb669a00f7c7f4949730c078ad7c72",
".git/objects/a4/415ddd74674b5a361ea538d916c3e1646caeda": "2924bd322127f6d8a0cf8b3517fcd952",
".git/objects/a3/eddc5250a512425880dab9e806cdb52611cbb9": "31a65efdd7382beb605618f554be50b2",
".git/objects/b5/467aec5a9c6e07d2fbd5cb44a20f5efd3680a2": "b5d81073d38fa5ed9088fba1ca42853e",
".git/objects/b5/effaf35433b355d2cfce368d0383eb26f6339b": "49ecfeb6bd20545f9d920276c5a6d031",
".git/objects/b2/694efb2a763a1cf46febc2738df71428c2381c": "457b782fdc54708f921bd03c6d3d1dd7",
".git/objects/d9/8fa3f2e307a11018bce89c6d1ab54a665c09ce": "09f212b8904c9a5b9e9d3e32c398836f",
".git/objects/d0/9641ce83e4dd86a6924d74a808aafdbb057dfa": "c18dce1e4c4c28367314605cf1d1955f",
".git/objects/b3/8e7d14afaba56cddad5af5296044a4f40193a9": "48e47de39762ff707c3c829aa083f3e4",
".git/objects/da/5109dd23acf8bc0dcf447ade97f5a36ab717c0": "5df648a96f64d7ee20afd30113acc7ef",
".git/objects/ab/7a9c2c0c4037fb2319417c5895dc1c8669318a": "60acd3ebca95cfaa8b6d6757804dea72",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/19f68b63551b6fb801e3449213e42409b8aabc": "e7f0aa7375556794879a7d167f06ef46",
".git/objects/eb/63abc98109bb329abd63cf9c5b25238bb8b4e5": "2cf37798ad91168d09b1839f2e612556",
".git/objects/ee/ed0393a1d3d851b4705ed98f00fb2a9c3e4ae1": "e987658cac778b000e69ab1bade40d09",
".git/objects/ee/69ad42e04b076c8cfdce606a976ba3e04dd1ec": "d4d42902e12490b846e8de0647ae21ea",
".git/objects/c9/306bf95d92d9792013cb014bd372670df20613": "834b9131de88f6ac70f20d93f54bbb23",
".git/objects/fc/27edd7cb1f33d1545eb54af57a3fe497f16d2b": "c794681aad035c5f9de367ee58d8b233",
".git/objects/e4/e426958fbaf6fc217c3d1ea27665fb70796e16": "6f49d86b20bb854ce58fdf84e1fa73ad",
".git/objects/c8/733f4a6c34e5c45aecceefa410adfb90c1b89e": "ee86b8a05063467da195fca1b67f43eb",
".git/objects/fb/547961f11de43ab392649b3494853eed56b99a": "0f654ec4c8724406b5117f99249b21d6",
".git/objects/c1/8e1a62282e2b5b1b45f7e7bedf4677e2503420": "383a3a4fb8397e89ebf61479fd881301",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/7d/1e39ac14058c1565f43c15f16c7335b22f006f": "34db59d0d4acc9cd00a7bbcd1ec9bcf4",
".git/objects/73/50762d738504d260a1fdb12cce220fb4488ba8": "028ad15ec0e39925a25d0971280c57ba",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/87/983817b5c8b134a2f9d5a358edf5edc8e62baa": "96d9b06970f13e46e505f8ba42e21ae4",
".git/objects/8f/70a6060d16415b47975bf78ceb6e96f0734af1": "3bbbacab017aad46abef2eada21c3b95",
".git/objects/10/e95d92b2cbefee9ff50d165295cf25d5c67b0a": "dd926a794dde7f3a182a0ddda5a89213",
".git/objects/10/f1d06930af4b553b2b113d80e71969d0d4e3c9": "2f829b5eb2b11f192b5c1f5c7d17dbc1",
".git/objects/4c/2903a08205eec61e92ec965b77b2f821270616": "85c697cdb0595996c7b989f78329c4b2",
".git/objects/72/66c397eddd1a5ae97705d243c540468dbad7cf": "725f3766026960be903baca727a54a7f",
".git/objects/2a/203cc1da1ce93b394f9fd6af6e495f36fc7a22": "79216c5cd8c46ccae71cf575734b4131",
".git/objects/2a/2c3c6e73dd1fed662f689416ce1d13990a4b2c": "dddb467fae69c7cdb3d746ffa5dcec1d",
".git/objects/43/2985baab25fcd2882e778a118132c7b2632bd2": "00743e7d4965ddb96a40965f875941f7",
".git/objects/6e/4d1732b0982e165193c5b4cb5a267f726aa8f8": "14deb114b42493aa5e84139360e36200",
".git/objects/9a/9b7ba1a0154becb7d722167465e4886fdeb0aa": "dcde86b9dac956070ac63776866475e0",
".git/objects/09/3357cb3ff9de6ac008b6ef57c9fbe0b66c4e66": "42986d6eb7768d7e6c42d9cd850bc7fe",
".git/objects/5d/fbc022993dfbef6d99093dfa61482728329431": "099c3641b8d41d17e0b25c4749e92888",
".git/objects/65/f8ec59900a6959532320c399643ad5de9739e5": "2b8d1a1e1500a2f778c6cc5eb434a88d",
".git/objects/62/b6d01c87c6ce14c536cd2b186e7d011718faf5": "a65bca0b1415f88886f99c9916e8bee7",
".git/objects/3a/066583b3b90675f0a61044ba07524a47a64f09": "0f5c3ec474d62a04d406fe4fd0d247f3",
".git/objects/54/882f361931294d3347f97404f4c13c82404063": "e2fe7f701c648f704a0e8c5ee21dbc25",
".git/objects/37/865eba122d656568d5ed1bdaff227411af52fe": "b022dd90077efdf0821b8b0e001d5189",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/01/9696b7a09fc848ef557ea46e118b6e465f5ec9": "42e37ebd0a1a13ae9ac4a0c087e59734",
".git/objects/06/2f69576600db9aabab7e00704d24358893cda2": "4e33557370835e9d6c470d98030c77bb",
".git/objects/06/171b0c5b18cd750851b0b7d5af5854a722aa69": "40779a07d53aa5114a630e7a1bcc3dfd",
".git/objects/39/1f4390758563be69b24e8db4c2ff9ac70a166c": "422682bd0d25c082473c2c6ddd9994b1",
".git/objects/39/61c0870ecab881f6e2c6503d2bc2593e7bcb51": "eba780fe117e380a7a423d1237d68b07",
".git/objects/52/04f0ad052ef2beb5d96f90fd667ac2a0720273": "c24ce58d8cde30f67f2a1bd73036e49f",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/63/96cfabd1135fedd5a53d7a669a955747217fa3": "d00d02ebb66a4c893e7cea41e241b388",
".git/objects/0f/165402399c7608b8a12dbed0807051a37c8065": "79e1574067c4d4b732ecf0462c376e51",
".git/objects/bf/01a04a2a8cbfc568dec6d551329c32884148c4": "5489a25a3f1ee08953e10969b6f42adb",
".git/objects/b8/807a24c600b4f000f5993e6668aaf7eb093bc0": "026d5621a38630e34e0d6c4ff0a27579",
".git/objects/b1/9cd3117ef5dac8f3d245e9e65c7a445435e3c4": "ec4e718faab62e066e141c1b66608a99",
".git/objects/dc/d593d07d5584df1eaa8653b944086fb655e0c2": "060ba11a8e972eaea80ed0c1675a0e9d",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/aa/f58c15aae36afaeee2eed1fcd748f460155240": "bbd4cdacf11c5c6b24cff54a9f8c5e2c",
".git/objects/af/c9142d7575e77e73f6a2cd58ab01520b509631": "8a5d195429ea5945a197dccebedbb11d",
".git/objects/de/fd00e2f55813eda9b445a1c3d173bc32051d04": "b9d3b9628beaa91974f1ff035dbd385a",
".git/objects/b0/3742efea98136f806e136d6b4f1080bac64fab": "2186d07a81ac2df9d81cac5a2408e840",
".git/objects/b9/793c314c632ecc0fc1545bfd4dd5cb1059ba9d": "6700b32b1a959937eb64428ff8010bcd",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/6442e9b7ca91cf661be2392826af35548c2190": "36ea4876b76f9f0a0458462f004e37ab",
".git/objects/c3/d09dbbf8c3bd5bb4128c36edc283b0db5b062d": "e6a44c41f04824daf7e886be339b2878",
".git/objects/c4/a4a1e0b469fa79a1bb6f463c5f40d2e78847a6": "56e629733db43cc4cd527de359a4ac20",
".git/objects/e8/5a43a4d47d13cd691596776a8e65bc7b436d2d": "41a584b7cbe1cd0aa61d2c09ffd88b18",
".git/objects/fa/85de86abf65fee8f18ac6604ccc1ea538f4729": "78224de5942fcaf93be55db4d0388149",
".git/objects/c5/97187cc36d59a2b6557c40406e7a5ced078e14": "e25a4e2028d90ebd03d4e225eecfc085",
".git/objects/e0/853470b6ad4853d6bd10cd6f068c74d49cc330": "2c41e9f442e4ce3ef524dadf67126111",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/f9591f50221e2b05ac2a3349e320c282bb5f2f": "8174123881ff6efaf37f017cc31cb72b",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/77/19911e5bea340d4c56b40049313395a504ceb1": "e07ef1e13857255d3b41579168830f4a",
".git/objects/1e/36b23069194a29dc870a4a79d67a4c786026a4": "5e3ae060fafa2c3ee43b26f694dc2134",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/76/1ac2d08d4de8b48de426bbebe7cfd92f4f134d": "93e389d85177fc3a7c7ec1cf3de0f9d5",
".git/objects/1c/f3242417e3345d9f704a681fa78c026944ce7a": "7d71e3da352526085d2f7fafde10d273",
".git/objects/82/f8da7de12b9770fefe273f5217fbcb894875c3": "2bf89a3e4e975542a849c2d1a8f03a37",
".git/objects/49/0194c829b0a0dde08023bd3a10f19d7c16e6a8": "7b86fa3628b2c0ebe3546bdddeb1feaf",
".git/objects/8b/7bab0a707ebba04995233d4833fa6591468822": "d9f3107cfad20f3c160026882d0c9aa8",
".git/objects/13/29fa2ae95aa8f7f8d1fe83515efe728c25b899": "b6a5212c7109ddacd00bd37635ecbea5",
".git/objects/8e/ce6fa32c6a18faec54b30debdaa9d489e1c6f9": "392130e03aadd4b6ad055577c4986eab",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "873310f770d64b277d15cfa2b820c485",
".git/logs/refs/heads/main": "4f80f9f74948612d0160a6eeddf72438",
".git/logs/refs/remotes/origin/main": "2565279348a5e5659c8f4127fbdb2db8",
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
".git/refs/heads/main": "38fa8780b8cceed423d2ef4b4d03959b",
".git/refs/remotes/origin/main": "38fa8780b8cceed423d2ef4b4d03959b",
".git/index": "bfced13c42c92c24ee3f9e5084478071",
".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "0310c06fa60ac4f525b618d8173cdce4",
"assets/NOTICES": "237bf1a71ea2b8968188c3beda39e525",
"assets/FontManifest.json": "eb8caecdffa8ecdbdf05e4fb21375296",
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
"assets/assets/images/divider.json": "84f9d8e177227b184ff3620cdbd4fbd9",
"assets/assets/images/circle_flower.json": "0af9c8ce2a102e75daa3aea380869788",
"assets/assets/images/divider3.png": "aa63f12160a803821e1253db2b3958d4",
"assets/assets/images/f2.png": "704f58cb933649dced17e5995ceb959d",
"assets/assets/images/background.jpg": "304c79107eea10fe53030a8c2c9ef5d9",
"assets/assets/images/divider2.png": "312b346e6cc27fd79874a7f183415d1a",
"assets/assets/images/heart.png": "3ea7ff412716d06b835607225b3429f3",
"assets/assets/images/ring.png": "1f93ec7bb0ea36ceb3fda9d20c325ff4",
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
"assets/assets/fonts/Roboto-Regular.ttf": "70cb6a6eebbd70ed7c8cab3ba3cf2970",
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

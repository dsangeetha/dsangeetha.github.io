'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "3fadc202f6fca122d5f76723adcb329e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "67cca75c6916d13ac05961831a8b35a3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "aabad06e6dde551df3abdf84bd2baf6b",
".git/logs/refs/heads/main": "fd9aca0f3b9fdbfdcbc435892af71375",
".git/logs/refs/remotes/origin/main": "c100a9b409ebc7c75f72d4be2a39560b",
".git/objects/00/9808076a7c80d0918cf5f69aebc95ed08b297d": "d1ced104870dfd2bd9fc54b6ebcbdd6f",
".git/objects/0a/b9720aef75965ce29dcacf5ff1ff8ae17fcdd5": "9bb33f97d620e204b0c38c70e5c388d4",
".git/objects/0f/7da66dadd1236d074f26e0dde50bb46dbaa383": "a267b6a274391b7a9e0f3bf6ee3f6788",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/26/959d32cdd13f02ce0171eac296383d31b704d6": "83ff5eb188bb9eac77d9755e83019b6f",
".git/objects/29/a65cd2420b4f283fcd3c07a5ef96157b8c81a4": "bf87790dce02ec07fe5b767cd36b4476",
".git/objects/2b/afefe8922b89b0dc55f9f6b4f0869816afa7cf": "c549b01f8620c365016bf6835cb280ba",
".git/objects/2e/fa1594a1346e00dd636b508bea2f0f1d53d477": "d8c9956b4cc0e4c23258e8fdaa0b85bd",
".git/objects/38/1bed5773abee796f4bd882b80d00a873629ab6": "50d2cd022808da8e1050f27af426b98a",
".git/objects/3e/6cc53b887b28bca50738d2a98eba4ee19f09e7": "1afa83a20f05ed97cc6bb915c42c12a9",
".git/objects/3f/043b4c7f85107c395f27d2214c3373a912f30e": "67bb68dd7716d38890ce4d113398149e",
".git/objects/41/6eaf88e4eef2c0ae8d825091e56746cf95bc85": "7ae403aef313c4bf25579f5e0fa5d7cd",
".git/objects/4b/9ba304359c5bc02ffe07549f4a571c9a2e9a6c": "2a0194da438b52e34079c2c6e5be0402",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/5f/22c6b6e4fad0182952832690123bfb1be4a79d": "9d6842ad0fe247b40bdd3b6c7967fed1",
".git/objects/65/0c74b0c1def2e32ea7e11e8210106966aadcaa": "192486739a01a5a420f955e789948f61",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/74/2d5d1386fda0b68c49940bff86cc44df3f84be": "6b711724dada2ff8edfd3b66fb0a1b56",
".git/objects/84/2c29c1e21d76960d7c8366fd78bd547acf91ce": "93be718780ff86f2bdd42fa7e5a2109a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8f/0533db7cfe49bb3dd37851a4c26f92416616e5": "310be79abc10de5648e2a25ccd616c3c",
".git/objects/8f/ba327acbb51cb6d05bd271b2f61da06ef2d1b0": "4fb237e4a21f846d65b097edc68c90de",
".git/objects/90/69de7c67afe6771b3d3e6f49b5834d536a2f3f": "3d2644ad6ace350dcae50214d706649b",
".git/objects/91/c67fd1a98da229f2c51f1c7ef5bfa21164a7ef": "de938a0aa6b4dbb5bcdbacacdf6ccfe0",
".git/objects/92/7ade566a58b2d14af8d20392f8a53ec364fdfe": "1fab24d5d1bf5ae82be185ae95eee8d8",
".git/objects/97/3b381989cc5ec6eb3a691cf1f9c93bc0dff5a3": "997648d9b565f9d1479d3ad53c6b7352",
".git/objects/9b/1f4256be1935438929b73c3bfc24d412c68361": "2a3bbf2f8ef273b441bd3254d06ef0a0",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9f/8c0b72714e4e2a65684da08e0cec606c4b5387": "72abd1259b7cdb18e296b08bb8e3893a",
".git/objects/a4/187560bdcb84a2d6e9826865a52602edbba1a9": "540aa87558f7fb5fac5270adbea7a89a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/bd/ab29132f2b599a61582e24a8d843a9dd7b70cb": "3ecd521eac6f232aa709ea889352d771",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/cc/b4ffb2ebc8d7e2b063dfa8d4851f4b5b38b2ba": "cec76b5f9de06bb951c7b732b7856f99",
".git/objects/ce/8b7349c6ffa2deb880c8d16b08816832152227": "be41d07e603807143ee44c3671b3796f",
".git/objects/d3/0512abed47c9bb09ed013a4ac5c91beed1556e": "e78beb719b7ef9093cfaee272436eefa",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/09c14356a08ff1876630dbc9489215dc08038c": "57dfa84666de3855197b0f43e9d8700a",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e1/129d7208502f5138a86cd627ca8f5d7510c38e": "669e403c6cfac7b7ab5b1f8718ed5e79",
".git/objects/e7/900517ca6818a61bbc3613b4b5a30396e2ab1c": "35afec58c9b667a6e378fc42d79bd532",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/f1e5b88a013e4ec57cd56634fad9ad8d51d283": "adc3d8b4fb82693b1aeaabbd69122ada",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/refs/heads/main": "28d14362597df785e56797b0cd44cfbd",
".git/refs/remotes/origin/main": "28d14362597df785e56797b0cd44cfbd",
"assets/AssetManifest.bin": "01f76fe79336338be99f45c0f8839a98",
"assets/AssetManifest.bin.json": "92acb6bb337f68a3f8f39868a7331053",
"assets/AssetManifest.json": "464746fede13cf8545aa2fbe305812bf",
"assets/assets/fonts/Urbanist-Black.ttf": "1a069669a689cde59d09eb06c47ce345",
"assets/assets/images/facebook.png": "e9f04b0e4ccaa14a4c45fde65311c5e3",
"assets/assets/images/google.png": "53679787545a8a5fd223e50d35b4b293",
"assets/assets/svg/ic_add.svg": "28bd189259f9962b4c977809dec1a451",
"assets/assets/svg/ic_favorite.svg": "6de828c1e6c08ec422ba5753d6659c06",
"assets/assets/svg/ic_home.svg": "f37b860bd82807e3542c6bd28edeeab9",
"assets/assets/svg/ic_location.svg": "e85225cdb6d437683f8827985500fc64",
"assets/assets/svg/ic_messages.svg": "ad30aed8f8fa0bbe2a70442c114609bc",
"assets/assets/svg/ic_user.svg": "93423b064de58b950030a8f77b37fd70",
"assets/assets/temp/post1.jpg": "4f5a27fe9adcbf8591b958c1d88d3e3a",
"assets/assets/temp/user1.png": "3c1101d43f19f0a52b186ae9e4ddd93b",
"assets/FontManifest.json": "b130097319855809fa881c32463a80ea",
"assets/fonts/MaterialIcons-Regular.otf": "f9cb926a1c6b825ba9158f0d297180fd",
"assets/NOTICES": "56f80d17f08141f5d659db12b07dacbf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "037bae0b4acae649bea9cef5330a4afe",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "389016119dcaef1d1056c240d5091278",
"/": "389016119dcaef1d1056c240d5091278",
"main.dart.js": "a72ff79ef1612b36c6cfc55397048f2d",
"manifest.json": "f7aba424cfab5eeec158cc9cbe2d1739",
"version.json": "aafcf49894be0e98c1b5f8bee8786adc"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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

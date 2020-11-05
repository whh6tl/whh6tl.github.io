/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["404.html","32cc1be35e48b6e017f7fdb3a3bcbbdf"],["AMQP协议0_1/index.html","e83d9d99968a3aacb807fa0c76ac72ff"],["ARM汇编01/index.html","827e924492117d5f4c66d42bd315e6f4"],["ARM汇编02/index.html","cb1d7976470d25be249da0032c9f2b4e"],["ARM汇编指令集/index.html","ea94c512d786bd744a5ba598f31c45af"],["Andoird反编译01/index.html","547cfd0530e74704c207f417a03684ec"],["BLE协议01/index.html","ceff53c8394ffd2ba13c0c07e48a4c48"],["CVE-2019-5418/index.html","38d916efc02eca17058f67d7ef66c92f"],["CVE-2019-9766/index.html","61d8c508c5be7b1a56ad183ca4bc500a"],["CoAP协议01/index.html","94de0012d0bcd0505d07068b936b7d41"],["JS_0X02/index.html","62ce1b82083036639a34a090e6081bdd"],["JS_0X03/index.html","6c62bcd3a5fd8b3884f31da368a8fa94"],["JS_0X04/index.html","94579284ce97a9579cd4ee40e51c3c71"],["JS_0X05/index.html","1cff52214fe2486b8c005f0bbd2d367a"],["JS_0X06/index.html","c389c586683a9b576c619102b4ebe35f"],["JS_0X07/index.html","c2279883779d8fb35e9d4603ff0bad50"],["JS_0X08/index.html","2dd169a23101c743b14134cb359df19e"],["JS_0X09/index.html","e2a799a9500edfee331def84541c9357"],["JS_0X10/index.html","411d36bd4fd17869ecfc173c1de1a582"],["JS笔记(0X01)/index.html","060729f7b0b5a06ddec05305d1d7e742"],["JT808协议01/index.html","90dd19b737468874c9049b059c55be11"],["MQTT协议01/index.html","9f3e67e54b6daf287cba290edadaabbe"],["NFC协议01/index.html","7d446daa93934a20b5d1c0bcc1aea594"],["RF协议01/index.html","8caf71408fdf43c215da6bfaa1a8bc60"],["Wi-Fi协议01/index.html","772c376c4b3f66a40eaf2d163ba5f3ca"],["ZigBee协议01/index.html","6b8ac2a14d55d4b0f2f3183486c94028"],["archives/2020/08/index.html","7b1aebeb75b26a4087c1942139018c1a"],["archives/2020/09/index.html","790eeddd4d6ac05c963380163040db11"],["archives/2020/09/page/2/index.html","9716aae79f718f2e7f153ab50b2abf73"],["archives/2020/09/page/3/index.html","16339a431b86115e275593e56c6d64e4"],["archives/2020/10/index.html","018ff0b46bc9ef99053a6f38f4b88f0e"],["archives/2020/10/page/2/index.html","b81aaf5e8d46f1a0932c90f743098ec7"],["archives/2020/11/index.html","95567d65f6266149700b4e263251b22a"],["archives/2020/12/index.html","44aa615fc36948dca172aa33472c8f8d"],["archives/2020/index.html","8ce242ce603c2e2946e05e05a9932be2"],["archives/2020/page/2/index.html","46e561c88bd180cf78c1550c07203536"],["archives/2020/page/3/index.html","4119d76802f8ed08466d7ab85fb9d8b3"],["archives/2020/page/4/index.html","b384506c528ac708f76b51e100ae7ffc"],["archives/2020/page/5/index.html","fdf4ea86e318bf3168a22a06d5b9ff42"],["archives/2020/page/6/index.html","ee83fd811a322fa5aeda4adf6a38eaa2"],["archives/index.html","5851f46ede60cdf9407422cfafedff8b"],["archives/page/2/index.html","73a56cd7ffbf6a9f00d38dd37b6be1dc"],["archives/page/3/index.html","6c1add2fb34ffcda9873779e1d7a92fc"],["archives/page/4/index.html","a6d3992332df82935bc05dfc4f237566"],["archives/page/5/index.html","57550e5c651e2b11546aea1c7e1ba801"],["archives/page/6/index.html","295aa04729c6207b68f061e8f442c2e8"],["categories/ARM汇编/index.html","83e2913e42ab60e615e899cf6c53509a"],["categories/Android反编译/index.html","7517c33d5e7060b954ed2b5c2721560c"],["categories/CVE/index.html","dfff92d8e7ca294e497461d27da9db58"],["categories/JS学习笔记/index.html","b752d3d9fcd3c480eb4fa59bb81297e6"],["categories/index.html","34b294c7a67d7b73b6504bfae046d768"],["categories/x86汇编/index.html","7803e367200beb75cf405920aad4d63c"],["categories/x86汇编/page/2/index.html","21e28e7cb43b6dfc1e0051401f4e4fd9"],["categories/固件逆向/index.html","82bf2bf17af89156b7cad8539ca81517"],["categories/智能硬件安全/index.html","f3fdfdcd2ab33c31c767d1fbb8e19150"],["categories/硬件电路构成/index.html","6529bf157cf328f0638e03423524c479"],["categories/网络通信协议/index.html","9290718ff7042a3d01377a5ad59d34fb"],["categories/逆向/index.html","02de57eaf7257ae244de47dcf8739497"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","7d76458d847327904994a6902626f627"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","c5dfd8efac510a1a3299d0170a93214b"],["page/2/index.html","4895bc3e838528ed29ceddb4f0b8c174"],["page/3/index.html","5fa93ce0f3fe317745e14ec45780e24c"],["page/4/index.html","6807446bb4e5cb95403922aac8858cda"],["page/5/index.html","75af5f7fe729b373bcb0faf34df91419"],["page/6/index.html","846d91c09a34302f7adc616c21a1d116"],["tags/AMQP协议/index.html","fbf60085d4f3bd5bc2196d5e2c814822"],["tags/ARM汇编/index.html","c3b90243b17fd05477fa89660f6301a0"],["tags/Android反编译/index.html","e3d5cc30aeb010f6e8dd1c1842844bd1"],["tags/BLE协议/index.html","4f1652cbd7b435ce901e0a418f295b13"],["tags/CoAP协议/index.html","1d58f0715039a0c46567d157e38f9469"],["tags/JT808协议/index.html","b9af7ae39018038eb0026d204f65e9da"],["tags/JavaScript/index.html","c4291a791f380778e35038905e6e8778"],["tags/MQTT协议/index.html","76df5fdbf4d8fe4136b630d2c2cd427b"],["tags/NFC协议/index.html","266e2b74255c7f8a30525c633354a72f"],["tags/RF协议/index.html","4e2184e9e2a15b2cb4f118ed0d9be8e1"],["tags/Wi-Fi协议/index.html","d2d63d71f34d8887f4a5c41dbe1f6188"],["tags/ZigBee协议/index.html","4c3d8be33288ceced4e6dab29dabfdba"],["tags/index.html","344c29013a6a264f5101bb84c64a11d0"],["tags/x86汇编/index.html","de1ca7f7cd34648fb9575c0c1773e456"],["tags/x86汇编/page/2/index.html","50c6224f68fcde1a60ee3313502cf46e"],["tags/固件逆向/index.html","66d830294ed01958e24d5fcaadbf6bbc"],["tags/智能硬件安全/index.html","395b6e37ec42db0dde6b61094d566ab9"],["tags/漏洞复现/index.html","7afc89aa3057c70dfb17686777a0ac3f"],["tags/硬件电路构成/index.html","817d35e127053fc6b6b44495af01c7bc"],["tags/逆向（基础）/index.html","984669b97ea5fbbdb80d107060cb9c9c"],["tags/逆向（调试）/index.html","8a259222ee9917aceef6475d58b0bed0"],["x86汇编学习笔记_0x01/index.html","804167a903030c1176f6e9dffc29a9cb"],["x86汇编学习笔记_0x02/index.html","880188fd90c74e0267b2d761f302607f"],["x86汇编学习笔记_0x03/index.html","6a4e424eabf4df16dc0d286d3ef877c5"],["x86汇编学习笔记_0x04/index.html","a2c550211733fb44446dea4226ea6a15"],["x86汇编学习笔记_0x05/index.html","89db42f2df22db26be94c9c816e0db19"],["x86汇编学习笔记_0x06/index.html","880edc4ca804e6c2d8eb335bfa052727"],["x86汇编学习笔记_0x07/index.html","b2214def9851e16b22e70057db0849c9"],["x86汇编学习笔记_0x08/index.html","8b38aea5c4516eeb972f2b352953fe3e"],["x86汇编学习笔记_0x09/index.html","0382df156725326af97e7932de80f582"],["x86汇编学习笔记_0x10/index.html","c3b9838c4934e03fe88be08a48caadff"],["x86汇编学习笔记_0x11/index.html","08f7468e21d84a6595f0fe474ffc7b84"],["x86汇编学习笔记_0x12/index.html","b253971f1696e11b5994c3636f4277a8"],["x86汇编学习笔记_0x13/index.html","ca2454908787c8b9001e1d3664a0b167"],["固件逆向01/index.html","6988c247c62f0b776fad7e0145028617"],["汇编指令集/index.html","b6abdb4035a64ec19c7ea6265b247b01"],["硬件智能安全(0x01)/index.html","3118ecae654cd9b23f3de07f886cfdf2"],["硬件智能安全(0x02)/index.html","51b8bd440ce5313e71b85af741c126ae"],["硬件智能安全(0x03)/index.html","257c48575a7de91c4c56b5e0fbd7b6cb"],["硬件智能安全(0x04)/index.html","daca8929c5f2ddabad556c0ca0a3493a"],["硬件智能安全(0x05)_/index.html","d90f8e7c386f38cd35c288a6ff2337a1"],["硬件智能安全(0x06)_/index.html","d554381d367124014a647472e614c605"],["硬件智能安全(0x07)_/index.html","b229499dcd263aa5ff8e7943121c1051"],["硬件智能安全导航/index.html","b1ef0a76c2cbef77b72e2980ffde04a5"],["硬件电路构成01/index.html","f51feca8fc30aa47b6f33a02b806e079"],["逆向-基础-笔记_0x01/index.html","b6c19f11f69cb269530bcf9aa67ba5be"],["逆向-调试-笔记_0x01/index.html","6f4d6096c41d8f6ed849eef42f915d80"],["逆向-调试-笔记_0x02/index.html","ec45744672924350b69bcaf141c1ce5a"],["逆向-调试-笔记_0x03/index.html","d4189ae899f0ac71008a39a900518ed7"],["逆向-调试-笔记_0x04/index.html","59c791186939a6136078ba8be59237c3"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});








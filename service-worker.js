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

var precacheConfig = [["404.html","1dbadcbafb74807460ab4a1440d9c2e0"],["AMQP协议0_1/index.html","8c793fa967dc9feca3daf6affa3efae6"],["ARM汇编01/index.html","340a6a0733f9fbab84c3abfd22e23e61"],["Andoird反编译01/index.html","0befc0ce1c0046205b929a3384add784"],["BLE协议01/index.html","0d1f0bd640e9cb2ea97dab6c178ba2f6"],["CVE-2019-5418/index.html","d982aabddc442d68784b00e9a619d243"],["CVE-2019-9766/index.html","0c04d042173d711874792e9982bb79a9"],["CoAP协议01/index.html","e9429450d052f19d7af8132461b46d22"],["JS_0X02/index.html","cd3c9583496c7465d9c824d6cf86e6a4"],["JS_0X03/index.html","5db61315119cfafb86157120f127ba0d"],["JS_0X04/index.html","a52b8f938e09aa722fa58a707a0317ad"],["JS_0X05/index.html","7db68c966fe27bd33137aacd855e8866"],["JS_0X06/index.html","c4471eb40ee3deaf9f319075ee8ad3b4"],["JS_0X07/index.html","dd7d64b846dfa5278db69d11f31ef983"],["JS_0X08/index.html","cedf5cfd59867ff3b2a2656b870275f7"],["JS_0X09/index.html","8c5ab355fd79729ee630ce442f546293"],["JS_0X10/index.html","bba573d5036e0c4bc3290ecdd06d81c7"],["JS笔记(0X01)/index.html","c90e012effcca1d95ce99dad86cf2289"],["JT808协议01/index.html","4963b279ef13ad86b27b0c7e526ecc01"],["MQTT协议01/index.html","75ca5fb4fce2fe218848483fdd1f2a1b"],["NFC协议01/index.html","ae453415b73e8c64f9f4df8069f277cf"],["RF协议01/index.html","4320535985d970f155e8d9c460ec36ac"],["Wi-Fi协议01/index.html","89058fb690bfaa480289d58679d0b2ee"],["ZigBee协议01/index.html","115f16c26a7e95e3f3396b778f102dd2"],["archives/2020/08/index.html","5a425dad58b65b89f41f40b1ffdff000"],["archives/2020/09/index.html","9a75d8806411eb848249683fdf4c8607"],["archives/2020/09/page/2/index.html","e482f0db829224c58e9e689ed581b92b"],["archives/2020/09/page/3/index.html","fb014ad9fd7651ffb87410ca98f8736c"],["archives/2020/09/page/4/index.html","2af5a043a7fdc2c7b45ebb0a6e30ecad"],["archives/2020/10/index.html","73897f9e84f894a8b425138c74a09913"],["archives/2020/12/index.html","0de08b6366f59f749fa752d0cde11b1c"],["archives/2020/index.html","add28cacaf276e160ca19de19e1a8609"],["archives/2020/page/2/index.html","097fc3164f1875475901bf79dd075786"],["archives/2020/page/3/index.html","56aed54915a2586d305c462139c06a46"],["archives/2020/page/4/index.html","e580d175925364468d1db5c194aaf520"],["archives/2020/page/5/index.html","68adb6fb3adcbec37ba91c6e652c898b"],["archives/index.html","8ec1bfd74c29be1174701edeced54bcb"],["archives/page/2/index.html","5b851e8564c0dd3a3add535cae161847"],["archives/page/3/index.html","48f5149477adc40bb08b3bc83c1513a4"],["archives/page/4/index.html","aa9950f0623fd46613b780770998113c"],["archives/page/5/index.html","b9119fcccb4ab6808f07ca7d5023a1f7"],["categories/ARM汇编/index.html","01abf9f4073d1fb9a3335d879820af16"],["categories/Android反编译/index.html","9e65a0e7622776c0ca742691176c29e6"],["categories/CVE/index.html","75902835256f3fbb6e24181c7759b58d"],["categories/JS学习笔记/index.html","16c235a9aa30af5e53bfa8f85cb0ecd1"],["categories/index.html","a48ec1c730ad23a529e96159e5ff30b9"],["categories/x86汇编/index.html","47c29d95ed4c3b0e3caa9aa5adee5a4d"],["categories/x86汇编/page/2/index.html","3ebd74f1b485f0488df1a016d8a11703"],["categories/固件逆向/index.html","d4d0c7757470d2e35d95a19900ace328"],["categories/硬件电路构成/index.html","ac0d29c54c6b522c99ff4e1a4c571f9d"],["categories/网络通信协议/index.html","0504678171c428efcffcc3af8bf047b4"],["categories/逆向/index.html","057df210c7f0b580915dc581bd29820b"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","5a0a6d71c22ab4782235b947cfdd8ded"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","479fb1e075b7d38fc3565e4aa4141e24"],["page/2/index.html","ed97c17e3a08ed24066c492687c16f61"],["page/3/index.html","fefe9f40f290cf7dc8b4b4665f49315f"],["page/4/index.html","cad6b4a771292fd6885e8544ca58a66e"],["page/5/index.html","d48c6d6ad2489f45724243bff42dcfa3"],["tags/AMQP协议/index.html","1c3e737f54d9517b99b6cfee68885f4c"],["tags/ARM汇编/index.html","166f3e9ff7fc750830726b5d57f9fc34"],["tags/Android反编译/index.html","1eec71cc04b8daf2a331d31cbe0d609a"],["tags/BLE协议/index.html","d3dbe32f260e8790f7bfd5774b8ac663"],["tags/CoAP协议/index.html","07ffc86953932ddc70b44c4672adf1a7"],["tags/JT808协议/index.html","e089859b4f08777d065cb71292aac7c6"],["tags/JavaScript/index.html","16a34c6e471150b78fa74e1a0de74354"],["tags/MQTT协议/index.html","35300d163cf998230c818226120603d3"],["tags/NFC协议/index.html","f5d71ecab0b3d33b1343d34fbcefdef9"],["tags/RF协议/index.html","d19bf4c424c7b299b28f8d9907535a0c"],["tags/Wi-Fi协议/index.html","eef201630620ed292bee47890ed05c15"],["tags/ZigBee协议/index.html","5f5431488a390cea8bd4827fb604ca10"],["tags/index.html","70b3383f3bda8e54587f336a37a43024"],["tags/x86汇编/index.html","8b0e281912424a9bc50a927658bac1bf"],["tags/x86汇编/page/2/index.html","ea738e405b41d7d3767b6f4def2f9b0b"],["tags/固件逆向/index.html","f5867ed52cb70e27e0c27166b8093d8e"],["tags/漏洞复现/index.html","8373ef92d7a0cb128f29ec5c5b405cbc"],["tags/硬件电路构成/index.html","893ebc0ae34e25e1f75ff21fbf2a2d8c"],["tags/逆向（基础）/index.html","f377c3b889352468d53361b0bd87f00f"],["tags/逆向（调试）/index.html","e06b3d5a39811312d722e73b2ce5ad6a"],["x86汇编学习笔记_0x01/index.html","40bc3c082cd24d3e7b465d600ab1a9e0"],["x86汇编学习笔记_0x02/index.html","8dab5c13f5a5577ab3e078f7ee03a337"],["x86汇编学习笔记_0x03/index.html","717a1a4ab2c9606a305c77c49295c673"],["x86汇编学习笔记_0x04/index.html","5eb7f1a606dcbec90dc27389cd5be845"],["x86汇编学习笔记_0x05/index.html","d0ed100b27616f8379c6585d82b2d868"],["x86汇编学习笔记_0x06/index.html","fd081f01a1d152d8dd4021fd351b6185"],["x86汇编学习笔记_0x07/index.html","e21fae6bcebe228cd23535905056fd7d"],["x86汇编学习笔记_0x08/index.html","e90c1beab6f1ff591110ad7d13309744"],["x86汇编学习笔记_0x09/index.html","df65eef1726cb5d70c24f9aee78c2a6e"],["x86汇编学习笔记_0x10/index.html","42ba78d13c936ace47e6619286a95367"],["x86汇编学习笔记_0x11/index.html","d188a9b4bb32230e4923be6b1af46ac1"],["x86汇编学习笔记_0x12/index.html","6b3c0a1f656165f009d6741afceae57a"],["x86汇编学习笔记_0x13/index.html","7ba2ddf9af6b7558734f49c18d529d88"],["固件逆向01/index.html","3f29c856b33f69f1bdc97e819e2da51a"],["汇编指令集/index.html","2c3fad2168cbb7c5e71761ddbc3b5de5"],["硬件电路构成01/index.html","3628f2b99658efe577b4157dde399cce"],["逆向-基础-笔记_0x01/index.html","83d7c212eee8d24d1c1228d886106fd0"],["逆向-调试-笔记_0x01/index.html","fe5045af3a07949468befe7cd10a1211"],["逆向-调试-笔记_0x02/index.html","182bdda364ce85bd8b46815c5fb9d79f"],["逆向-调试-笔记_0x03/index.html","b1ed9c33548c399a821068069c9335c1"]];
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








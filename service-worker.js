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

var precacheConfig = [["2020/08/23/CVE-2019-5418/index.html","5679e3518e85f8e065c4d48598dd4048"],["2020/08/25/CVE-2019-9766/index.html","d96b04e33f0b50fc17b5d2214621b652"],["2020/08/25/JS笔记(0X01)/index.html","8347b694130ebf18abbf860a882c3595"],["2020/08/26/JS_0X02/index.html","430d22a31de2131c7dd7c2717548e806"],["2020/08/27/JS_0X03/index.html","b91161c9c5eee8ca8c9aa7dc1e088722"],["2020/08/28/JS_0X04/index.html","e29c5c150427d87daba134faa012fe3d"],["2020/08/29/JS_0X05/index.html","9a03c0173c29c6f2fdfab2f2259ee80c"],["2020/08/30/JS_0X06/index.html","ac1e9caecf9266164a84297e6af709ba"],["2020/08/31/JS_0X07/index.html","5a5b9c2a692b448b073d28e869bf2331"],["2020/09/01/JS_0X08/index.html","112b4a98d2e4912050cb89118131948e"],["2020/09/02/JS_0X09/index.html","b25f2aaf32b77c3986d8eedb1a67bea1"],["2020/09/02/x86汇编学习笔记_0x01/index.html","463e912eb05248f58f1256bf371c0889"],["2020/09/03/JS_0X10/index.html","f361b09a39743dfcbd7c8d9c27d1961d"],["2020/09/03/x86汇编学习笔记_0x02/index.html","fe10b3293a9431542b1cd5d44761d863"],["2020/09/04/x86汇编学习笔记_0x03/index.html","f29d1a1d37dc28a6e4811432ba43f670"],["2020/09/05/x86汇编学习笔记_0x04/index.html","a6fafc7bd87cda2ddf17cf8c7aad4d87"],["2020/09/06/x86汇编学习笔记_0x05/index.html","e047ceffb95cf802c59b9ff48168642e"],["2020/09/07/x86汇编学习笔记_0x06/index.html","4eebebc7142129f868d77b7bfcb4e6d6"],["2020/09/08/x86汇编学习笔记_0x07/index.html","27c946f2d9397460944cc9c9fe894b96"],["2020/09/09/x86汇编学习笔记_0x08/index.html","18f8f69e62f3aecf655eb5a042c8af9d"],["2020/09/10/x86汇编学习笔记_0x09/index.html","f4ff3e135a9504f7d71d66e943ff2209"],["2020/09/10/逆向-基础-笔记_0x01/index.html","d19565536c247677de4e83ae3cc5a468"],["2020/09/21/逆向-调试-笔记_0x01/index.html","e1c609774b5cfbe5cc74a3f1b69a3e74"],["2020/09/26/x86汇编学习笔记_0x10/index.html","877fc354d97ce80ae5583dfcfc36aa4d"],["2020/09/26/x86汇编学习笔记_0x11/index.html","e869b6a9ad8dfc98e43e41335d492218"],["2020/09/27/x86汇编学习笔记_0x12/index.html","33752082e97840095bf9502b7a210fb6"],["2020/10/01/AMQP协议0_1/index.html","48a05bb8494921b6072c35ba8ad6bf84"],["2020/10/01/ARM汇编01/index.html","06e93c83e3bc8c1a3c43903c597378f7"],["2020/10/01/Andoird反编译01/index.html","b26663d386c1e90dd38d478b974e6559"],["2020/10/01/BLE协议01/index.html","24add97518fe04c7757bfc7a9398e833"],["2020/10/01/CoAP协议01/index.html","dcb9d359e5c84da8792935e886dc1b63"],["2020/10/01/JT808协议01/index.html","d33e031a3015a3a92c648ee0569a592e"],["2020/10/01/MQTT协议01/index.html","b491389e6ae40f01ee1bc0c8d6b1bdd0"],["2020/10/01/NFC协议01/index.html","be4fb9e5f8f23d70501ad608d9434cfe"],["2020/10/01/RF协议01/index.html","ea5542ed316b85dd486524cfa9f172c5"],["2020/10/01/Wi-Fi协议01/index.html","9e793a8b91e2e54542ba25549f4588ad"],["2020/10/01/ZigBee协议01/index.html","1c20d0d18a528912efe560eacce2656e"],["2020/10/01/固件逆向01/index.html","33767195f9a1988e6431b1df53089002"],["2020/10/01/硬件电路构成01/index.html","abc777f3cbd72f0d016bf2253f8dd945"],["2020/12/31/汇编指令集/index.html","b95328d64a69db6ee6e99afc3ac24a2e"],["404.html","c2c6af3a057be51a2a68d1c66dd9c170"],["archives/2020/08/index.html","73fa42333b7e3a227928ce3fb5c39b4c"],["archives/2020/09/index.html","660012db5fc001d8402bf67278ce2c2e"],["archives/2020/09/page/2/index.html","16b73c2f22fd9e349ce4da18e63762d9"],["archives/2020/10/index.html","0b7a166d264719641e9de67b72ef663c"],["archives/2020/10/page/2/index.html","328785f21059a7cec55a9fb04b1ef034"],["archives/2020/12/index.html","df8f7db63b050e50f8d936814e5e5e44"],["archives/2020/index.html","c281ea08c0be37f442e9d39d28da119e"],["archives/2020/page/2/index.html","8b65cd2676cf01678ed12052382d8487"],["archives/2020/page/3/index.html","9cf8ffeb6c12ccf7f9d574a6e13861fc"],["archives/2020/page/4/index.html","7ecaa69d469ff3e88785f8f916c7268a"],["archives/index.html","ab0abc5ad9af8b01b57faefe75647c53"],["archives/page/2/index.html","880f48c136e2c853f7c42b9b570e8b20"],["archives/page/3/index.html","fd003dc240741d33303bc2b3e1e8a918"],["archives/page/4/index.html","07309644295e2207b303161dc46c9431"],["categories/ARM汇编/index.html","683f97308fc570e4d8ca216dbb97c4c8"],["categories/Android反编译/index.html","03e0dd30becbd17d9543cd4733602e68"],["categories/CVE/index.html","fef8955344f61104b981f8a98bdefe2e"],["categories/JS学习笔记/index.html","2a16b0e2494d48a2ddd87f008d831d59"],["categories/index.html","f10ec093209ca023ba7f56f0e0b82e74"],["categories/x86汇编/index.html","a368c9742aff6dad0724aaa3cc6eb1c5"],["categories/x86汇编/page/2/index.html","423148715db70e71e81d0dea857a307c"],["categories/固件逆向/index.html","8ebb4a4935f46fd4d0300d901ccfbe18"],["categories/硬件电路构成/index.html","608881d1c8fff0fc6ee42b50d17d66bf"],["categories/网络通信协议/index.html","f4297ac70c454661827dfaeb457e6bb8"],["categories/逆向/index.html","22002d369bdd3502cf18ed8b53ee52e1"],["css/index.css","e190ce4fce7067c6a08b6350927527e2"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","32029f881d32e112bf8ea86bd2eb35ef"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","60f1e027c116002b67c3e99482e86184"],["page/2/index.html","d378395e441bc49eb84431214b1d127e"],["page/3/index.html","d6c3c13c903e4c7138d168099e7fb3b0"],["page/4/index.html","2709a0df7ece810e800324d78fee6a69"],["tags/AMQP协议/index.html","94d5b1d7367d3720cad996717caa3b8e"],["tags/ARM汇编/index.html","dacc830f8deaa3de34e8dfe879acf0b7"],["tags/Android反编译/index.html","69d6b9e7dca94d81acfcc1b893c25b48"],["tags/BLE协议/index.html","ce0c32b845e422a3649580f83d4d2a39"],["tags/CoAP协议/index.html","9a3fa835414765385513cc31d39d6f88"],["tags/JT808协议/index.html","2804ffac72ba05845277d65eaf7911a1"],["tags/JavaScript/index.html","76f79239fbfe33c54abae41ec5dcc424"],["tags/MQTT协议/index.html","c6059edfa5d9efd1989a064ced777191"],["tags/NFC协议/index.html","a0675031c6912a5e00c54a638aa65dbf"],["tags/RF协议/index.html","5c8e2cbf933b8cf16436d8626f1fd21c"],["tags/Wi-Fi协议/index.html","ebe4e1381135ab7a22b4f93d0b66fd10"],["tags/ZigBee协议/index.html","120f262ee83fd0fc95eb667f26c184d9"],["tags/index.html","62bea2f93cc50ef4421161695f6ae8e5"],["tags/x86汇编/index.html","62807683d787377195dd40023490db50"],["tags/x86汇编/page/2/index.html","30ebe17297867f20a30664cbf0bb34cc"],["tags/固件逆向/index.html","d57f6302b15a8b2a5c49398d1d802132"],["tags/漏洞复现/index.html","67c4f7dc1afbdf06dac935108a730368"],["tags/硬件电路构成/index.html","fd556ca3715bf0866556a3aa87b29ad1"],["tags/逆向（基础）/index.html","98463d2193939120662bbd52a3530606"],["tags/逆向（调试）/index.html","77582b153c25974c8a7220b6c38d9f8f"]];
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








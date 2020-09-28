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

var precacheConfig = [["2020/08/23/CVE-2019-5418/index.html","5679e3518e85f8e065c4d48598dd4048"],["2020/08/25/CVE-2019-9766/index.html","d96b04e33f0b50fc17b5d2214621b652"],["2020/08/25/JS笔记(0X01)/index.html","8347b694130ebf18abbf860a882c3595"],["2020/08/26/JS_0X02/index.html","430d22a31de2131c7dd7c2717548e806"],["2020/08/27/JS_0X03/index.html","b91161c9c5eee8ca8c9aa7dc1e088722"],["2020/08/28/JS_0X04/index.html","e29c5c150427d87daba134faa012fe3d"],["2020/08/29/JS_0X05/index.html","9a03c0173c29c6f2fdfab2f2259ee80c"],["2020/08/30/JS_0X06/index.html","ac1e9caecf9266164a84297e6af709ba"],["2020/08/31/JS_0X07/index.html","5a5b9c2a692b448b073d28e869bf2331"],["2020/09/01/JS_0X08/index.html","112b4a98d2e4912050cb89118131948e"],["2020/09/02/JS_0X09/index.html","b25f2aaf32b77c3986d8eedb1a67bea1"],["2020/09/02/x86汇编学习笔记_0x01/index.html","463e912eb05248f58f1256bf371c0889"],["2020/09/03/JS_0X10/index.html","f361b09a39743dfcbd7c8d9c27d1961d"],["2020/09/03/x86汇编学习笔记_0x02/index.html","fe10b3293a9431542b1cd5d44761d863"],["2020/09/04/x86汇编学习笔记_0x03/index.html","f29d1a1d37dc28a6e4811432ba43f670"],["2020/09/05/x86汇编学习笔记_0x04/index.html","a6fafc7bd87cda2ddf17cf8c7aad4d87"],["2020/09/06/x86汇编学习笔记_0x05/index.html","e047ceffb95cf802c59b9ff48168642e"],["2020/09/07/x86汇编学习笔记_0x06/index.html","4eebebc7142129f868d77b7bfcb4e6d6"],["2020/09/08/x86汇编学习笔记_0x07/index.html","27c946f2d9397460944cc9c9fe894b96"],["2020/09/09/x86汇编学习笔记_0x08/index.html","18f8f69e62f3aecf655eb5a042c8af9d"],["2020/09/10/x86汇编学习笔记_0x09/index.html","f4ff3e135a9504f7d71d66e943ff2209"],["2020/09/10/逆向-基础-笔记_0x01/index.html","d19565536c247677de4e83ae3cc5a468"],["2020/09/21/逆向-调试-笔记_0x01/index.html","e1c609774b5cfbe5cc74a3f1b69a3e74"],["2020/09/26/x86汇编学习笔记_0x10/index.html","877fc354d97ce80ae5583dfcfc36aa4d"],["2020/09/26/x86汇编学习笔记_0x11/index.html","e869b6a9ad8dfc98e43e41335d492218"],["2020/09/27/x86汇编学习笔记_0x12/index.html","33752082e97840095bf9502b7a210fb6"],["2020/10/01/AMQP协议0_1/index.html","48a05bb8494921b6072c35ba8ad6bf84"],["2020/10/01/ARM汇编01/index.html","06e93c83e3bc8c1a3c43903c597378f7"],["2020/10/01/Andoird反编译01/index.html","b26663d386c1e90dd38d478b974e6559"],["2020/10/01/BLE协议01/index.html","24add97518fe04c7757bfc7a9398e833"],["2020/10/01/CoAP协议01/index.html","dcb9d359e5c84da8792935e886dc1b63"],["2020/10/01/JT808协议01/index.html","d33e031a3015a3a92c648ee0569a592e"],["2020/10/01/MQTT协议01/index.html","b491389e6ae40f01ee1bc0c8d6b1bdd0"],["2020/10/01/NFC协议01/index.html","be4fb9e5f8f23d70501ad608d9434cfe"],["2020/10/01/RF协议01/index.html","ea5542ed316b85dd486524cfa9f172c5"],["2020/10/01/Wi-Fi协议01/index.html","9e793a8b91e2e54542ba25549f4588ad"],["2020/10/01/ZigBee协议01/index.html","1c20d0d18a528912efe560eacce2656e"],["2020/10/01/固件逆向01/index.html","33767195f9a1988e6431b1df53089002"],["2020/10/01/硬件电路构成01/index.html","abc777f3cbd72f0d016bf2253f8dd945"],["2020/12/31/汇编指令集/index.html","b95328d64a69db6ee6e99afc3ac24a2e"],["404.html","36130165e4b8d78c18e8d9310851c5eb"],["archives/2020/08/index.html","ea7a04abc58b39cf10ddded7b8d28ead"],["archives/2020/09/index.html","cb1581f698e59c09019ddad60dce289d"],["archives/2020/09/page/2/index.html","400d7d6630a9330f13896d96a819a484"],["archives/2020/10/index.html","9bde619da9df005e2947274e286dab01"],["archives/2020/10/page/2/index.html","70d3239dc747ce8733f6dcac75cb74e8"],["archives/2020/12/index.html","87ac76dc79bfa1ded401fbdf10c847c3"],["archives/2020/index.html","600a42f8687742b56ddedf02a0140e43"],["archives/2020/page/2/index.html","462d263028050617101faf9b207b4030"],["archives/2020/page/3/index.html","fd43fe992f32d8fd664d100758c111e7"],["archives/2020/page/4/index.html","cd882dfe045e1ae1b850b46eb4303ff0"],["archives/index.html","9b3d800f44b8e4a1377b574711e0e7c1"],["archives/page/2/index.html","f6ea0e0bebe6f8b31cd754ac7c51b31b"],["archives/page/3/index.html","e67dd84e36bfbeb86192b047cb5a136b"],["archives/page/4/index.html","57cff3e4b98ee4573bc1d098116d511d"],["categories/ARM汇编/index.html","7092250b7fbd89588ed1d9c4c6d459da"],["categories/Android反编译/index.html","2e9992c1a1cfaf1c82ab6a431a5f79b6"],["categories/CVE/index.html","4c6b17376210de8d908e10c2ccbcdcf5"],["categories/JS学习笔记/index.html","6565df1faec9d5901866cccdbdfa4f92"],["categories/index.html","f10ec093209ca023ba7f56f0e0b82e74"],["categories/x86汇编/index.html","1b96a08958e768f2f20aa5f835b6beec"],["categories/x86汇编/page/2/index.html","f13b47cfb900d72978a2b9cd5a8ee0fc"],["categories/固件逆向/index.html","877bf9e7e86910a1f666eea242966af1"],["categories/硬件电路构成/index.html","9bf625beb3e7a2928a5c20ea26837492"],["categories/网络通信协议/index.html","0c014ad4c6bcda0a48f82a2a0a826160"],["categories/逆向/index.html","c191da4857641981b0f37bd38e8eeb23"],["css/index.css","e190ce4fce7067c6a08b6350927527e2"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","86063a8e5f8bf39430bb03ece30a8890"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","60f1e027c116002b67c3e99482e86184"],["page/2/index.html","c7eb1d71679d24d08669dd3418593395"],["page/3/index.html","4206b0cdf503918299a7f1a78edfe68e"],["page/4/index.html","28197b59df82f26f3ecc00586b63d738"],["tags/AMQP协议/index.html","3c5c2f103d35c6fc01d2dd4101d65de5"],["tags/ARM汇编/index.html","a9f5c45c95a3acc50b32a982ec6c5525"],["tags/Android反编译/index.html","40f80b588f7c7f03a34647da7767b3e3"],["tags/BLE协议/index.html","830fc54b4d33c5f9034280b78ab008c4"],["tags/CoAP协议/index.html","7c1de15c54a24ea8ad46466b2a2ca515"],["tags/JT808协议/index.html","e8546067a2efe03b9a247f4454dc1ac3"],["tags/JavaScript/index.html","04feeedfc33a0cdb6be886a2236bf0f5"],["tags/MQTT协议/index.html","f7c4a26b507e3908740c597e53741edf"],["tags/NFC协议/index.html","fef5302d1ef09269b1bfc2cfce2fa39f"],["tags/RF协议/index.html","d1137f0ae765d3faeb418ca5de28d82e"],["tags/Wi-Fi协议/index.html","28405d1b2a11503c20b715129ece4d82"],["tags/ZigBee协议/index.html","a722b0fbcf46e77a902bda7780c08195"],["tags/index.html","9f934f794d5786a57ac14a6784333b7f"],["tags/x86汇编/index.html","7513e572df49479492e31fe56ac7e954"],["tags/x86汇编/page/2/index.html","ee4a436bec63a44105469ca35bf12f85"],["tags/固件逆向/index.html","516a52782040a3de0debc25b914caa29"],["tags/漏洞复现/index.html","84ad653311901c6760014270f1516d6d"],["tags/硬件电路构成/index.html","7ce8feb85dc560ec5acdc685d048f0b9"],["tags/逆向（基础）/index.html","c46d1f618155a8c43852640af2b7bf71"],["tags/逆向（调试）/index.html","775ab7bcbb0369bfd97645112a016396"]];
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








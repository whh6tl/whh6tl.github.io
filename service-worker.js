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

var precacheConfig = [["2020/08/23/CVE-2019-5418/index.html","d8ba1cf71d137413fe9df98a69e9fc3d"],["2020/08/25/CVE-2019-9766/index.html","db5aad4934fa08d912650944e7dab484"],["2020/08/25/JS笔记(0X01)/index.html","d41cd80a3cf00148161cb54c6b481525"],["2020/08/26/JS_0X02/index.html","32f988afb9fe8965f38b1fb56154c1f7"],["2020/08/27/JS_0X03/index.html","449e75b04916a7ec41f7906aa2bffa20"],["2020/08/28/JS_0X04/index.html","26a618b0815c148b5737c63124f23d68"],["2020/08/29/JS_0X05/index.html","de60aaeb3bfb2296b3fcafe25cb1c846"],["2020/08/30/JS_0X06/index.html","9503056ed8b9ed5beaa73e4161be0db2"],["2020/08/31/JS_0X07/index.html","c399a77b1e630e6c43e942fc4c8cc8da"],["2020/09/01/JS_0X08/index.html","57d61f244307243ce56aa9d3f0cd8e2e"],["2020/09/02/JS_0X09/index.html","f16abca230a1ce972444e41aa651ebcb"],["2020/09/02/x86汇编学习笔记_0x01/index.html","b7c81c7ce440dbe5477c4abc608c8e68"],["2020/09/03/JS_0X10/index.html","ae7ac7979422305219a67999e61d8422"],["2020/09/03/x86汇编学习笔记_0x02/index.html","4e2e2e6bf750f5c368526b8065adefb5"],["2020/09/04/x86汇编学习笔记_0x03/index.html","6f40a522bddc6735ef4b7c5bc58e28ad"],["2020/09/05/x86汇编学习笔记_0x04/index.html","5c522cc5465284be1d251ec08a9cd63f"],["2020/09/06/x86汇编学习笔记_0x05/index.html","8acb81153b14b0797b715a0fc096858e"],["2020/09/07/x86汇编学习笔记_0x06/index.html","c593519e1fde2e2638bc1b406989dd67"],["2020/09/08/x86汇编学习笔记_0x07/index.html","8e28f770bef4276d5a6fe59632503117"],["2020/09/09/x86汇编学习笔记_0x08/index.html","c7b1a4d9c57e056d3b3eb69ee5b84932"],["2020/09/10/x86汇编学习笔记_0x09/index.html","1b2dcbd1634293204750e4b04731afc6"],["2020/09/10/逆向-基础-笔记_0x01/index.html","a2e2c40f5c6fc0cc4e12d6b66f0e966c"],["2020/09/21/逆向-调试-笔记_0x01/index.html","fc9f1ba8b90e223d6f71c6d6bed41620"],["2020/09/26/x86汇编学习笔记_0x10/index.html","8fbd066601e281fa1b5cbb8c1b6a43c3"],["2020/09/26/x86汇编学习笔记_0x11/index.html","e275c131687533b46ac4817d75fe79d4"],["2020/10/01/AMQP协议0_1/index.html","60ea6e8929c125c4ab3c3016bc39a58a"],["2020/10/01/ARM汇编01/index.html","9bdf03af20e70e8ab50b254b40b71169"],["2020/10/01/Andoird反编译01/index.html","807424dbf3cdb9f56064921dbe5e0a84"],["2020/10/01/BLE协议01/index.html","eca01a72c556adc39d5cb672b6f5a906"],["2020/10/01/CoAP协议01/index.html","b95f05e6390cd950f6094409d1a3a5be"],["2020/10/01/JT808协议01/index.html","a4d5ca8d0a63abf8ecadd4d9d87258ab"],["2020/10/01/MQTT协议01/index.html","a8f61e2630f1c7e01e1b8a511d5f7b95"],["2020/10/01/NFC协议01/index.html","37eda1c21b87c0ff3bf26863559d9fc7"],["2020/10/01/RF协议01/index.html","ff817320e18edd377671b7e235428951"],["2020/10/01/Wi-Fi协议01/index.html","13cdbaed5e66e939cd9f6a5ce526400f"],["2020/10/01/ZigBee协议01/index.html","cbac9b9e597c58e901a16d076963d855"],["2020/10/01/固件逆向01/index.html","09031094b1afed8308fcd9a95c7e15c5"],["2020/10/01/硬件电路构成01/index.html","08b6bdee532b90bc83a338bdd978d46d"],["404.html","16c9165cf64e0cea71c7ae08682b9d55"],["archives/2020/08/index.html","036ebfc5df004de12e17a336b6d4a5b8"],["archives/2020/09/index.html","6d189d0c487605e9083e21d5efec58fb"],["archives/2020/09/page/2/index.html","21009a98b88893a3085a0b9b794263be"],["archives/2020/10/index.html","de47cf5e1087c59f61c32b85f2c29134"],["archives/2020/10/page/2/index.html","065df9857a493a03b26c2c39d44b147a"],["archives/2020/index.html","42df67c69de8f00e72eae2a7f2378e1e"],["archives/2020/page/2/index.html","15055aba670a2ab40b0d77be855a6008"],["archives/2020/page/3/index.html","7b592b65d40db1e96e6c951f2b9721c9"],["archives/2020/page/4/index.html","9a56105f62eb57e37f8b635ebda1b539"],["archives/index.html","ca53c24fbeedb1ee2dfec49d43963118"],["archives/page/2/index.html","1b5e53c459cab46473470903ecba2de1"],["archives/page/3/index.html","8ef6d5f868fe38d3b1de588b33dd464e"],["archives/page/4/index.html","31f7ceb1495c928d807d7802f1cc8545"],["categories/ARM汇编/index.html","1012695758edfb98ca2b52ab58180d04"],["categories/Android反编译/index.html","dd0e8e6ebcc9e3b0bd927ddb9f58ce7f"],["categories/CVE/index.html","cc0957ed4a7bc68e9db27880dc1a084f"],["categories/JS学习笔记/index.html","b5e1a2494454d5323070ef9f5e3279db"],["categories/index.html","b2c4c70006f038aa12bea3f8eff43c93"],["categories/x86汇编/index.html","9be54135042f1f1aabd0a92ed42b83e3"],["categories/x86汇编/page/2/index.html","af2a67dc6f7425896d2738797b6b209d"],["categories/固件逆向/index.html","04e20624828b351b26a6279a7166b77b"],["categories/硬件电路构成/index.html","582357de19e8f319410f2b96730187a4"],["categories/网络通信协议/index.html","4c4750790a8a5aa9179bcfb8d0ca67b3"],["categories/逆向/index.html","6f326bcd42c52c53f61441951f142d79"],["css/index.css","e190ce4fce7067c6a08b6350927527e2"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","7be52f88b7f03d98bbdeabccb46c153e"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","c6abad4f76feaece371c8ce873e42e02"],["page/2/index.html","bac58e859eb8556c848f2c2e7ddcc781"],["page/3/index.html","7f6342f3bb06b51c0613fa1794de39fe"],["page/4/index.html","c316269d33a578c2e897f5f76df0b5bc"],["tags/AMQP协议/index.html","fd8ac3c8a92d9b67a0dffcfd001ab04b"],["tags/ARM汇编/index.html","ff7153383a9cace0015211d0d9cfb556"],["tags/Android反编译/index.html","6a45f98c76edeab0bf2f4b96285eec4d"],["tags/BLE协议/index.html","2727dfbac09c043d545328845ad7ce46"],["tags/CoAP协议/index.html","8215192211c5b62460c0598debb572e7"],["tags/JT808协议/index.html","64d87a1005a044a0150ebbe5b1fc4e4d"],["tags/JavaScript/index.html","66fe4ff83244811d5ec1f111c53d04c7"],["tags/MQTT协议/index.html","dae8a200e992f5fb64e509ca98e14d18"],["tags/NFC协议/index.html","f8edd513ee8d3880d86e08a174e329ec"],["tags/RF协议/index.html","5c118499b65e138d5fb8fbbd13c99f14"],["tags/Wi-Fi协议/index.html","fc5dbaf856dd558b5545abb5b8195722"],["tags/ZigBee协议/index.html","4e3afd680512336e0fa96cc3ae7c7b62"],["tags/index.html","723f24e01e6f2a3b4d9dcbafebccb1bc"],["tags/x86汇编/index.html","b3db4d798de06c58741394fc0489c386"],["tags/x86汇编/page/2/index.html","8218dbb6310b94e328a923b8152ae5a7"],["tags/固件逆向/index.html","131d5ee43cb3e329bc0e92571ed5317b"],["tags/漏洞复现/index.html","a065a0ee9795e5da0722995afcb20630"],["tags/硬件电路构成/index.html","1269d8819604be4a6a9e64487e3a969e"],["tags/逆向（基础）/index.html","cb9ea502ac77264a9f80c65bba524554"],["tags/逆向（调试）/index.html","b6adf9a0f9e117b2f2bacd5161a5bfbe"]];
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








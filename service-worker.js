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

var precacheConfig = [["2020/08/23/CVE-2019-5418/index.html","d8ba1cf71d137413fe9df98a69e9fc3d"],["2020/08/25/CVE-2019-9766/index.html","db5aad4934fa08d912650944e7dab484"],["2020/08/25/JS笔记(0X01)/index.html","d41cd80a3cf00148161cb54c6b481525"],["2020/08/26/JS_0X02/index.html","32f988afb9fe8965f38b1fb56154c1f7"],["2020/08/27/JS_0X03/index.html","449e75b04916a7ec41f7906aa2bffa20"],["2020/08/28/JS_0X04/index.html","26a618b0815c148b5737c63124f23d68"],["2020/08/29/JS_0X05/index.html","de60aaeb3bfb2296b3fcafe25cb1c846"],["2020/08/30/JS_0X06/index.html","9503056ed8b9ed5beaa73e4161be0db2"],["2020/08/31/JS_0X07/index.html","c399a77b1e630e6c43e942fc4c8cc8da"],["2020/09/01/JS_0X08/index.html","57d61f244307243ce56aa9d3f0cd8e2e"],["2020/09/02/JS_0X09/index.html","f16abca230a1ce972444e41aa651ebcb"],["2020/09/02/x86汇编学习笔记_0x01/index.html","b7c81c7ce440dbe5477c4abc608c8e68"],["2020/09/03/JS_0X10/index.html","ae7ac7979422305219a67999e61d8422"],["2020/09/03/x86汇编学习笔记_0x02/index.html","4e2e2e6bf750f5c368526b8065adefb5"],["2020/09/04/x86汇编学习笔记_0x03/index.html","6f40a522bddc6735ef4b7c5bc58e28ad"],["2020/09/05/x86汇编学习笔记_0x04/index.html","5c522cc5465284be1d251ec08a9cd63f"],["2020/09/06/x86汇编学习笔记_0x05/index.html","8acb81153b14b0797b715a0fc096858e"],["2020/09/07/x86汇编学习笔记_0x06/index.html","c593519e1fde2e2638bc1b406989dd67"],["2020/09/08/x86汇编学习笔记_0x07/index.html","8e28f770bef4276d5a6fe59632503117"],["2020/09/09/x86汇编学习笔记_0x08/index.html","c7b1a4d9c57e056d3b3eb69ee5b84932"],["2020/09/10/x86汇编学习笔记_0x09/index.html","1b2dcbd1634293204750e4b04731afc6"],["2020/09/10/逆向-基础-笔记_0x01/index.html","a2e2c40f5c6fc0cc4e12d6b66f0e966c"],["2020/09/21/逆向-调试-笔记_0x01/index.html","698849e846ef4dd0bde593151f17017b"],["2020/09/26/x86汇编学习笔记_0x10/index.html","efb2bf14680b5211ce22a5fcec6323c3"],["2020/09/26/x86汇编学习笔记_0x11/index.html","f013b1cecfb8003e908dcca5c8640ecf"],["2020/10/01/AMQP协议0_1/index.html","60ea6e8929c125c4ab3c3016bc39a58a"],["2020/10/01/ARM汇编01/index.html","9bdf03af20e70e8ab50b254b40b71169"],["2020/10/01/Andoird反编译01/index.html","807424dbf3cdb9f56064921dbe5e0a84"],["2020/10/01/BLE协议01/index.html","eca01a72c556adc39d5cb672b6f5a906"],["2020/10/01/CoAP协议01/index.html","b95f05e6390cd950f6094409d1a3a5be"],["2020/10/01/JT808协议01/index.html","a4d5ca8d0a63abf8ecadd4d9d87258ab"],["2020/10/01/MQTT协议01/index.html","a8f61e2630f1c7e01e1b8a511d5f7b95"],["2020/10/01/NFC协议01/index.html","37eda1c21b87c0ff3bf26863559d9fc7"],["2020/10/01/RF协议01/index.html","ff817320e18edd377671b7e235428951"],["2020/10/01/Wi-Fi协议01/index.html","13cdbaed5e66e939cd9f6a5ce526400f"],["2020/10/01/ZigBee协议01/index.html","cbac9b9e597c58e901a16d076963d855"],["2020/10/01/固件逆向01/index.html","09031094b1afed8308fcd9a95c7e15c5"],["2020/10/01/硬件电路构成01/index.html","066d2e61ca25416696fc83f126d50f82"],["404.html","8dc0dc4f143fe0bfb075865459abc4f5"],["archives/2020/08/index.html","7e3f4e795f8bfd95cb00ddddd3039afc"],["archives/2020/09/index.html","c0ff1729ff316e2a5b5930008c3897fd"],["archives/2020/09/page/2/index.html","38853fa19dd5cdb2020ce0a40152895f"],["archives/2020/10/index.html","2abdedd6bb49e4222eda8fb72215f1ce"],["archives/2020/10/page/2/index.html","dc14f13ccb5b83d6a63841d89f26ef4d"],["archives/2020/index.html","b0c0adc46f88700c4739151b7ca00241"],["archives/2020/page/2/index.html","c79e791a8efeca8718232e763b8f140b"],["archives/2020/page/3/index.html","4d0a41947877951d111ae8ad7d580328"],["archives/2020/page/4/index.html","454150e43f1f4c10c834b1cfcfaf38a1"],["archives/index.html","3f6ae50c2a71a5357e616dd14ca82e63"],["archives/page/2/index.html","901a448771c8e15cfee8d7f00bc352c7"],["archives/page/3/index.html","7052049712f99f8966d1993a5268d95f"],["archives/page/4/index.html","f6c60843cc61339c8bdd22a156c6e05a"],["categories/ARM汇编/index.html","e718131639c657f5326b1d5dca56526c"],["categories/Android反编译/index.html","f22637c5557054bddae929e585611b4c"],["categories/CVE/index.html","c814629b63ce5971f82160d5ef538242"],["categories/JS学习笔记/index.html","fb20f48d07003def9f5f01f9c950d682"],["categories/index.html","b2c4c70006f038aa12bea3f8eff43c93"],["categories/x86汇编/index.html","293af5a1116de94be7b545c090ce7e44"],["categories/x86汇编/page/2/index.html","254c3d309ff6c7b7b36dedb4af4f9c0c"],["categories/固件逆向/index.html","ba19ea7fa67e4049ff533aca25948b8e"],["categories/硬件电路构成/index.html","df9e2e01bb6f0558b18621b92837b9ce"],["categories/网络通信协议/index.html","c09e706e866cc455732210a65a574213"],["categories/逆向/index.html","bd5bef0ebadfe64f973283cb3e71f1f9"],["css/index.css","e190ce4fce7067c6a08b6350927527e2"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","155c9dd2d4e139e4e60e105c343d72e6"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","c6abad4f76feaece371c8ce873e42e02"],["page/2/index.html","d4e3f44c81ba8d855a5989e078afe8f5"],["page/3/index.html","aa6a239f9037b9750775e8cce233069a"],["page/4/index.html","cd0c603b1d2e581011e691de6fff1b08"],["tags/AMQP协议/index.html","b1b54ad6c97b140dc66e71e4f1075227"],["tags/ARM汇编/index.html","e320ac66bdaf2a0b74a697f31aea0e86"],["tags/Android反编译/index.html","2e7c3d57d385fea88b922812d9b72edf"],["tags/BLE协议/index.html","260a676f116a406c41200562a1848a62"],["tags/CoAP协议/index.html","14326edd883665460bf1a8bf852bbd34"],["tags/JT808协议/index.html","3c1e4671b629b6c66cc5a280630529d3"],["tags/JavaScript/index.html","f404ce2fffe242886e02b7a161ee57cf"],["tags/MQTT协议/index.html","04f3882d97e3118777ebefb1f3486f44"],["tags/NFC协议/index.html","ee9233dccc5190ba8d24a89de4e240e0"],["tags/RF协议/index.html","7fefb7c088ee141407033af5157f0911"],["tags/Wi-Fi协议/index.html","7e35c4a0818b76f06e100dc5d1e3740e"],["tags/ZigBee协议/index.html","7a2ec007684ba4ba57744dfd4c1af978"],["tags/index.html","8996db52870901f0cc5f0a81b8802840"],["tags/x86汇编/index.html","206c80bb4c0e6aaff1f98457ffcc28bc"],["tags/x86汇编/page/2/index.html","1643cfde17390b5c31cc2ac4c0787b75"],["tags/固件逆向/index.html","2b710b4f3a91f7b5466e04a52b72a4ca"],["tags/漏洞复现/index.html","e5d1174391b542d60ef555ff3e391aa8"],["tags/硬件电路构成/index.html","5ad9a66b374b5cde3d684bb0a3fff0ab"],["tags/逆向（基础）/index.html","7ae3e50ed77792ea60ad9cfc79480ad8"],["tags/逆向（调试）/index.html","efad2923d3ad85b86f325fd58e9f52bc"]];
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








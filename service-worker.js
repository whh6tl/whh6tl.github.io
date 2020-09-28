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

var precacheConfig = [["404.html","976399f2628cfaec99bb1c78394ed82f"],["AMQP协议0_1/index.html","69ed1ce2535091f9663ba91ce67896f3"],["ARM汇编01/index.html","940334ae5abd62937eed194d0cf11f24"],["Andoird反编译01/index.html","59180fc23e1451d6f3c125a99fb29fa2"],["BLE协议01/index.html","7a4a94a23e6568074b9c31ab8b0e4c3d"],["CVE-2019-5418/index.html","eaaa9c88a1a3228299017193d22cf227"],["CVE-2019-9766/index.html","d461b444527e115f9c3d00d6da327a9b"],["CoAP协议01/index.html","50b289bfeb575a77849eecd9d7143632"],["JS_0X02/index.html","6d73e3084cab59f60335be31a7cd862e"],["JS_0X03/index.html","d75ca3a49f2856af3489dd4c65380d25"],["JS_0X04/index.html","7f0f16ebc1c60e3b9212f2eb836c8dd4"],["JS_0X05/index.html","8fc47497d4fe01536c1bf0fddd40954a"],["JS_0X06/index.html","29fefd56907933b41c443cd574ca4f2f"],["JS_0X07/index.html","c543a1807455766fb05d1345dae4b5fb"],["JS_0X08/index.html","322c5f1543192360a13ef309efab4aa9"],["JS_0X09/index.html","972c33ea258af83320d10d031894f542"],["JS_0X10/index.html","793e1410048193f932d04b9163ac4b99"],["JS笔记(0X01)/index.html","abf2225dcd6f1ea276c7ee15a584776c"],["JT808协议01/index.html","88fc4e0a756c8f0de68b9023c1b346ea"],["MQTT协议01/index.html","bb3704a1a18b54b213debd5bd0b656f2"],["NFC协议01/index.html","85bc9d4519933bc6c9063b79db59f8d2"],["RF协议01/index.html","835dae9c20ccf2671c3faba5bf7bcd7c"],["Wi-Fi协议01/index.html","02a0109671b11f38e1badb89d9f684b2"],["ZigBee协议01/index.html","ffee938ea37118509f44f5d5e889dbaa"],["archives/2020/08/index.html","880430d399e309a9a3a41ee4597bfc4f"],["archives/2020/09/index.html","e14c299e4c57bd2019061b55aac14e9c"],["archives/2020/09/page/2/index.html","c435f0b04646147877c8ea3958731b01"],["archives/2020/10/index.html","8710a3b583ac3dcc1317d9fabcc415c6"],["archives/2020/10/page/2/index.html","6f2b9afb2753d3bf6305ee6c68df04b6"],["archives/2020/12/index.html","c67df2086d47ffda377237f75f056732"],["archives/2020/index.html","89a3ac69e81f9dee0734e8f8ea761b30"],["archives/2020/page/2/index.html","aad1e4a3b36af17b20412e2a41290a18"],["archives/2020/page/3/index.html","5b7e61b7f473db0701a4914d5ba28517"],["archives/2020/page/4/index.html","7b71e062bbe8594549150353a0d70920"],["archives/index.html","6e073b3c850c1eafc6c68e30baa7beb6"],["archives/page/2/index.html","9b072bba4ee49a9c54e12584237ae387"],["archives/page/3/index.html","a272b1203441e88bf05d9beecc55601e"],["archives/page/4/index.html","0d6e439141bca729d4dfdb9d7727e602"],["categories/ARM汇编/index.html","cce958295fc8987012b8313bc43b823a"],["categories/Android反编译/index.html","629c1fabf8e26368b277f2578aae7812"],["categories/CVE/index.html","28ceb6127e923c5993c727606cd86a66"],["categories/JS学习笔记/index.html","811c90328842c092b13f4ef51305da01"],["categories/index.html","00261acce88e62ef9ba8c2889f0f0726"],["categories/x86汇编/index.html","d978c76303a72092804ea3570e1966c8"],["categories/x86汇编/page/2/index.html","35456aefc4ee3e96a7f823096cd09d8f"],["categories/固件逆向/index.html","4401fc1279c70920cff8ee8d0b43b220"],["categories/硬件电路构成/index.html","f55f7c0c8188d2e0255bb8b15687b7c9"],["categories/网络通信协议/index.html","065809c9335f6c6ac5007f08747691ee"],["categories/逆向/index.html","8fc0eb77c35c09e95227bad6259dd10b"],["css/index.css","57ddfe330d43d455a741d80564941694"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","8c886cf615c7a45b18e367667cd14a72"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","184d111012f59a72793123b934809317"],["page/2/index.html","0847086e58d58395290726545563e8fc"],["page/3/index.html","a8c72d137ffb8bdb084d2c2e6e3c64c4"],["page/4/index.html","9cc6896e09c725b4aee213344ffca4ee"],["tags/AMQP协议/index.html","af0bc4dbb62450b2911e18f3333304a1"],["tags/ARM汇编/index.html","9154f53cc10f3bad3a0bd5b240174db5"],["tags/Android反编译/index.html","2e850229a9d68d0a4e9a3d906059f993"],["tags/BLE协议/index.html","330f2658fc9e75e56649910d968f8636"],["tags/CoAP协议/index.html","e0190115928d4d4d882e11aafa1e991b"],["tags/JT808协议/index.html","12e01bdf157469a3c3f6f1195e8a3be3"],["tags/JavaScript/index.html","e2bb541b35181c9fffba4a7940fb8c32"],["tags/MQTT协议/index.html","d57b048119a4ff4b8794e86d2da412ae"],["tags/NFC协议/index.html","e385f4b80e3347d8461baa8db3fae2af"],["tags/RF协议/index.html","f52f4c141cafe85a24b2e840268092dc"],["tags/Wi-Fi协议/index.html","8a52d45ccf63651bfb5cf87b32e8e024"],["tags/ZigBee协议/index.html","d347e81d567fb582ddaa133ab5689a63"],["tags/index.html","eceda8d268cdcf6ead05402a747d77ab"],["tags/x86汇编/index.html","dacebb4c05352cecdb3f145086bc3660"],["tags/x86汇编/page/2/index.html","9b9e71d2ab8a62f3faa0c77c25d76453"],["tags/固件逆向/index.html","a0dbe0688d46c8eaa89e0e15fa6610e3"],["tags/漏洞复现/index.html","437673a40bba3b451dbe1daafbc01e55"],["tags/硬件电路构成/index.html","bb8661581995b5fbc2d821dfad867fe7"],["tags/逆向（基础）/index.html","cc3a6d696fd39e7bc705282d138c1f37"],["tags/逆向（调试）/index.html","34d40e4d722b63534ba91faab9b030a1"],["x86汇编学习笔记_0x01/index.html","f3650e5a92c54f7118d7ff4366faa609"],["x86汇编学习笔记_0x02/index.html","fdd11b358d21e6b59ab2e1498be7d703"],["x86汇编学习笔记_0x03/index.html","3a70f7e37e37c5cc166c388250d18fbc"],["x86汇编学习笔记_0x04/index.html","6085504be2cc4edee43b1983b0dc114d"],["x86汇编学习笔记_0x05/index.html","3ee774fc0f12a3d71c8da11eb53a8084"],["x86汇编学习笔记_0x06/index.html","6ad5354ba44f408449a289533a586160"],["x86汇编学习笔记_0x07/index.html","83d8ee8fc949b46086b73ee438d3c720"],["x86汇编学习笔记_0x08/index.html","0d6a3987f2e13a6f40fbe1d96b2989c0"],["x86汇编学习笔记_0x09/index.html","c3d54ad28bc2fb8ab122d069030235dd"],["x86汇编学习笔记_0x10/index.html","8bd2a46bbe87ca79612cb4221de63c9a"],["x86汇编学习笔记_0x11/index.html","33d3ee079a75e8d8d96f140cd106d4d4"],["x86汇编学习笔记_0x12/index.html","2b8aa4a86003148a4f44a1c369c0d93c"],["固件逆向01/index.html","3353e1c163c090f89fe1158a407f8e2c"],["汇编指令集/index.html","bf2a2103d30b29f37bcb0e8219caf4fe"],["硬件电路构成01/index.html","21b0613882133dcdbb2f2ca5370ba235"],["逆向-基础-笔记_0x01/index.html","33b91c2ef4e9ed890fcdb602f92b9883"],["逆向-调试-笔记_0x01/index.html","bcab85b38133b8bfda78f20a887261fd"]];
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








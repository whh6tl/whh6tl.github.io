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

var precacheConfig = [["2020/08/23/CVE-2019-5418/index.html","03f9f7a5012052690b4271284e409b7a"],["2020/08/25/CVE-2019-9766/index.html","f71baaf45f63a03573692e0a435c9095"],["2020/08/25/JS笔记(0X01)/index.html","58a292dd7cb31e31bf5b26f8e1d26d93"],["2020/08/26/JS_0X02/index.html","7a29576a328c5017f6495acbd6f077e1"],["2020/08/27/JS_0X03/index.html","f50e3d74fe5ba628643e71f6db5d8513"],["2020/08/28/JS_0X04/index.html","627d183ec3c55ba2758775c0798833e4"],["2020/08/29/JS_0X05/index.html","5ad09c60f1ce9695540be43823f24d79"],["2020/08/30/JS_0X06/index.html","7032f99e8ab23d11b45f8e61c8ddf2ec"],["2020/08/31/JS_0X07/index.html","c623a8c20bd1fc0e201f5299426efb31"],["2020/09/01/JS_0X08/index.html","60ebdeb73387c1ff2f1b50cdeb5356e0"],["2020/09/02/JS_0X09/index.html","58f7c74612f20ac108057a017a2e6763"],["2020/09/02/x86汇编学习笔记_0x01/index.html","9f766f0ac9b20c750a1c36bf9acd1c07"],["2020/09/03/JS_0X10/index.html","d4c9eb5c24b34f88e863916c69efa991"],["2020/09/03/x86汇编学习笔记_0x02/index.html","507f2e86c64580d03053a4844d443063"],["2020/09/04/x86汇编学习笔记_0x03/index.html","c9802128a6fa31490786a5740f7a9889"],["2020/09/05/x86汇编学习笔记_0x04/index.html","c69335ddc4f5feda73089b24a5627970"],["2020/09/06/x86汇编学习笔记_0x05/index.html","cd6db3c1e4ebadaaa0519b81f006c58d"],["2020/09/07/x86汇编学习笔记_0x06/index.html","bb082e89f42f276216719c8706cd7984"],["2020/09/08/x86汇编学习笔记_0x07/index.html","5898ffbb6115b369b38439c0b534f741"],["2020/09/09/x86汇编学习笔记_0x08/index.html","79df7e68b1c445f160c2f76de154d27a"],["2020/09/10/x86汇编学习笔记_0x09/index.html","3873c72822e0736526e56dd30065cc13"],["2020/09/10/逆向-基础-笔记_0x01/index.html","427f23b1641bddc8bc55c64e65fcf773"],["2020/09/21/逆向-调试-笔记_0x01/index.html","bbd63c541cea9403ea59fbdceaaa9193"],["2020/10/01/AMQP协议0_1/index.html","c02f01d17cf3506b232af7e00977eae8"],["2020/10/01/ARM汇编01/index.html","d00aa7b60dc86860f8cb497fe825b760"],["2020/10/01/Andoird反编译01/index.html","38b1db3861f13a3cdc7805e1501c161e"],["2020/10/01/BLE协议01/index.html","6d31e900a00870580598a0ba85cb4ac5"],["2020/10/01/CoAP协议01/index.html","27d8e85b96d60328c85a307ce076a044"],["2020/10/01/JT808协议01/index.html","e25656391325b06c439b7533b8801a7e"],["2020/10/01/MQTT协议01/index.html","ddcc7f58a46e544d304ee3daaff3b4b0"],["2020/10/01/NFC协议01/index.html","ba03335585f44139af696a87e42a13a7"],["2020/10/01/RF协议01/index.html","553687da3b33e4551443c8d787730cdc"],["2020/10/01/Wi-Fi协议01/index.html","a98f0a6922262b2d7ac2291628ed773f"],["2020/10/01/ZigBee协议01/index.html","746aed630d38ebde2a91be479b948492"],["2020/10/01/固件逆向01/index.html","4b1e7b50d0c2a63a276ab37be1b155de"],["2020/10/01/硬件电路构成01/index.html","99a7d93201ef3a27ea6b04213158e95e"],["404.html","db52272ae724a622b2d8868f4db2d069"],["archives/2020/08/index.html","482329ea0607bf634307207d1c4cb2c2"],["archives/2020/09/index.html","4517f72ab5b7b6d77a597314bb102afc"],["archives/2020/09/page/2/index.html","fc49153896a966b60aad1a2f4b6d49fa"],["archives/2020/10/index.html","6011dbca2f8e24501ed184a36eff7859"],["archives/2020/10/page/2/index.html","c22144758d9378265656c8879028d66e"],["archives/2020/index.html","1a831ac199a7dbdc4bfd74466c41ca5d"],["archives/2020/page/2/index.html","164db8148c3ef4cfdb9d2cedf1811510"],["archives/2020/page/3/index.html","3e9e08411bf7002878daf60b97244a5d"],["archives/2020/page/4/index.html","4fe453511bc9d814b98bfeef0f73a275"],["archives/index.html","935ee16a9ea58587804f78cea34bb908"],["archives/page/2/index.html","e0706b60979989787a120aad01ed8d26"],["archives/page/3/index.html","b8c97b7a64401fbfb87d3b64f5492c31"],["archives/page/4/index.html","1c4df40bf39cc3675fcad20a56172f16"],["categories/ARM汇编/index.html","cc565448dec38100056a4be5af38b663"],["categories/Android反编译/index.html","938ee9b73339e0dab07b45187a3152a9"],["categories/CVE/index.html","90e08b34182f3c9b9b3b8b528daffa34"],["categories/JS学习笔记/index.html","02ed489863f7064412792426144ca15b"],["categories/index.html","1cda1bf565fa4b0336e6c2c65d95d6e8"],["categories/x86汇编/index.html","6af60da54b17e4f409108cb2d3c5a110"],["categories/固件逆向/index.html","39eb3e3cc5da814a22c9180b22282f08"],["categories/硬件电路构成/index.html","a2c0b7037107911edef4b12a2e74e06d"],["categories/网络通信协议/index.html","557ec9e99d61442fc7ae9ec051781973"],["categories/逆向/index.html","b46d80af782f03328e885b4ecd01990b"],["css/index.css","e190ce4fce7067c6a08b6350927527e2"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","a375921916f50f0d9b92b25bcd62bd03"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","64b18151791cb5f557f175fe6b34030c"],["page/2/index.html","c62f418022d11230b806f74298ccddc3"],["page/3/index.html","7962bc74bdad30ac119f703663c330b5"],["page/4/index.html","34a086fe9ccb0d4738342f7c4f1f6566"],["tags/AMQP协议/index.html","d06a2ba3fc317d1a39d3248371a248d1"],["tags/ARM汇编/index.html","465d27f6dd8e083fb36330d08b2fea04"],["tags/Android反编译/index.html","87970852b2f6efdd62d649313c6a288f"],["tags/BLE协议/index.html","6246e2ef0c18d8d92041bc01d275d277"],["tags/CoAP协议/index.html","8ed9c9905632e25f4e030525c211a219"],["tags/JT808协议/index.html","312eb93df45ace7a1431266c96860c5b"],["tags/JavaScript/index.html","d1bdf292ef2fbed74887faf394c3cc14"],["tags/MQTT协议/index.html","a069359ce76206d25e99d169c5c6c0b8"],["tags/NFC协议/index.html","41bbf306d170539d409a514d677d5dcc"],["tags/RF协议/index.html","b2aab5e786af4e6457476829fbb96650"],["tags/Wi-Fi协议/index.html","ce80ab2bc0c51b49f1c16e5c8895ffb2"],["tags/ZigBee协议/index.html","7a0f28398a89a34fd514964da421743e"],["tags/index.html","2948211460f1d9b00f3c8375df78a56e"],["tags/x86汇编/index.html","d222982df04596c8206135307f9f3614"],["tags/固件逆向/index.html","30d33cd098159b01a61a1f0a34525d85"],["tags/漏洞复现/index.html","aca168f6dc33df395d71e20323139699"],["tags/硬件电路构成/index.html","bffa9e52d00dc6614841df8d8adcf832"],["tags/逆向（基础）/index.html","2a1b28268f382682055b5e5023513e25"],["tags/逆向（调试）/index.html","a4f297599e42c3468300e101f2c63f43"]];
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








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

var precacheConfig = [["404.html","d04d61d7461b09e7de37cb237bbf934e"],["AMQP协议0_1/index.html","d297b7f3fa17372485ba843ca22da6f1"],["ARM汇编01/index.html","7e6675ce1b3b8b19319877e45408fdc7"],["Andoird反编译01/index.html","8d5c917aba7a2cc69072e29a5678f39e"],["BLE协议01/index.html","a493a287399ab238e2908e9234c6a331"],["CVE-2019-5418/index.html","ea5101ff4bd6d18d42c3fb5362f15bd1"],["CVE-2019-9766/index.html","174156bfbe5fed2b9daea58bac7122b8"],["CoAP协议01/index.html","3322416e4c690f2f684861c15ae2ab55"],["JS_0X02/index.html","727f808f13b7eda108c965463c123f0d"],["JS_0X03/index.html","2093ce72b2f2830fd225d3cc246ef910"],["JS_0X04/index.html","1392e11fdfb88501ae8332ef902cfa36"],["JS_0X05/index.html","2fc97700d7bb26bd000129cf082d855d"],["JS_0X06/index.html","eef2b256bce025d3dea1b5dbd1ca3fb0"],["JS_0X07/index.html","172b3a05d83e68329605edd91d33394f"],["JS_0X08/index.html","78b6f8eee1399c1a43b064bdd037f2a3"],["JS_0X09/index.html","28d66ac94d165dc3796754495043b2d9"],["JS_0X10/index.html","01292c3c924c5734249806274d429759"],["JS笔记(0X01)/index.html","92177278ae853e45c41c6025b6c68abd"],["JT808协议01/index.html","4f6ccf37a214456553743ee94c7c2121"],["MQTT协议01/index.html","d251d8440dd7d83ae37e0e521b598056"],["NFC协议01/index.html","86aadd966debb85171f5ee7462983d68"],["RF协议01/index.html","1b088a48a54b8f934d360338cc4fd3d7"],["Wi-Fi协议01/index.html","4f5fe3712df6ca7a7fe1f51a95ae1132"],["ZigBee协议01/index.html","b42e779ff647ae9696af774d46db5aed"],["archives/2020/08/index.html","822fb6396f1d702c158be8e61fab22d2"],["archives/2020/09/index.html","48916c86154144286e42255cf746f26e"],["archives/2020/09/page/2/index.html","223943f6536094d2a51fb20a7ec54669"],["archives/2020/10/index.html","d289170891ee7c62ecede286568c099b"],["archives/2020/10/page/2/index.html","44aa72c2794b52eed6fc440802611c7f"],["archives/2020/12/index.html","9bc88bc2f0d82740ee8e06ae86abb412"],["archives/2020/index.html","d39784c2d7bd307e2b79028d6a6d4c27"],["archives/2020/page/2/index.html","bd10d9ae6b501efcb871787e967598ad"],["archives/2020/page/3/index.html","4fd6477c573150a750c03163bc49f7a5"],["archives/2020/page/4/index.html","2da066ac120070e9a292e1bad70bb2f2"],["archives/2020/page/5/index.html","da76050be3a04a1b24fb5d724efbba38"],["archives/index.html","d5f0cfb8addc894ea5d464447377da74"],["archives/page/2/index.html","8dead82aca01543d279f76e5ac5a947e"],["archives/page/3/index.html","2c2c21ba082ba684b6ce38a24c595ce3"],["archives/page/4/index.html","b6fd3119fa58f5eba0d5cfe59663ed98"],["archives/page/5/index.html","99874bda2e9473bfd541947b25bf672f"],["categories/ARM汇编/index.html","44a506eb3a00efe0347c10b4ec974723"],["categories/Android反编译/index.html","6410005faed12222feabc5b2956a5604"],["categories/CVE/index.html","db555a0131f1c14506a31c332dfa4236"],["categories/JS学习笔记/index.html","a97cd0d3325cbcc5f22d0b87dcc2b34b"],["categories/index.html","4bc4e5b247cd5d76bc79132ca153209c"],["categories/x86汇编/index.html","58364400a5ec414014a5801b8ae861c0"],["categories/x86汇编/page/2/index.html","f52bd1b5412a73c56ba1e66d0d774d1e"],["categories/固件逆向/index.html","ecfa0ce496efc734277ec279e0ef89bc"],["categories/硬件电路构成/index.html","050993293c1b962dbdd27cfc562964f1"],["categories/网络通信协议/index.html","330025ac9b7bd04320dd36a5e0416891"],["categories/逆向/index.html","ca80f199a9373103f521d9dabeb9019c"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","5ed7b6a34933e0ba89c3ab46adb0657f"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","7c3d0115a014a61aa4650c2220beed0d"],["page/2/index.html","3c197f204460b8491089dd0731f87e47"],["page/3/index.html","d6f5f386a8f14bb0e28ee18631b1e926"],["page/4/index.html","9de47ef15bb82d6551f53ab281a32921"],["page/5/index.html","fe7bd4aa8bf158f6ec64d9a91ccb97e4"],["tags/AMQP协议/index.html","f986c7ab4f5daf740108b5729ea21524"],["tags/ARM汇编/index.html","490c523f307a2c548af0661d6303c27e"],["tags/Android反编译/index.html","049f893c61b878071a02f05faf2c6221"],["tags/BLE协议/index.html","e02e75edea4991bc5b4311f6000ad617"],["tags/CoAP协议/index.html","03679e88a3ba45123570b9e06209f9c9"],["tags/JT808协议/index.html","ac33c0b647201b41acd37f59042485f5"],["tags/JavaScript/index.html","bb468daca4aa9dd1ee03569f81e889bc"],["tags/MQTT协议/index.html","faf5b07db29cd3035adec9fa20c69f17"],["tags/NFC协议/index.html","60fb2549bb358df7122238d5651f42f5"],["tags/RF协议/index.html","66eccbf661963fb1ff9b73b725d39c01"],["tags/Wi-Fi协议/index.html","d4c92244ffda08d2e1ac73428b058ac7"],["tags/ZigBee协议/index.html","9ecb8fd5eb8d6a333a47bfa22d06e2e3"],["tags/index.html","4b1240f3c7dcdb0c55be7dfc18e32bfe"],["tags/x86汇编/index.html","1f8b0ccba49d4f12318bc640c5d526c6"],["tags/x86汇编/page/2/index.html","6b51a85245ff848d0cbf851474a86063"],["tags/固件逆向/index.html","b5d2f40b80cc6e17d472c31fadeb3260"],["tags/漏洞复现/index.html","363ae0034149e54e8d08fb156884d75e"],["tags/硬件电路构成/index.html","74b63f9dc5b15d39a01baead6da6c8dd"],["tags/逆向（基础）/index.html","21f33dfb848e1593cd4dcf06c18abc5f"],["tags/逆向（调试）/index.html","d2eac6a16650f0c65bd2176d09f5973d"],["x86汇编学习笔记_0x01/index.html","680636079fd1809e24958e8eada5c13e"],["x86汇编学习笔记_0x02/index.html","69280c002845a43928c55ff3b0373f68"],["x86汇编学习笔记_0x03/index.html","43a2569a5a4e8ed579c1b59083b9340d"],["x86汇编学习笔记_0x04/index.html","77f6fbc8e88451360e7c3b48f93ec1e6"],["x86汇编学习笔记_0x05/index.html","463b73659f7d29ec965148828d60315a"],["x86汇编学习笔记_0x06/index.html","f8ac44a4139a0a5e39ac306bee741ca8"],["x86汇编学习笔记_0x07/index.html","2018f59df058dac268fcebdda06ba5be"],["x86汇编学习笔记_0x08/index.html","7f8d680f0c37acbb6c5f4768f220fb50"],["x86汇编学习笔记_0x09/index.html","41fa256b4488904be052758c93a45460"],["x86汇编学习笔记_0x10/index.html","8bf60abbc308554e58a96a895fdcb08e"],["x86汇编学习笔记_0x11/index.html","06ff28689e1a20811d061dee20712f12"],["x86汇编学习笔记_0x12/index.html","fb8b5d952c74becc856b5e09b22a4b55"],["x86汇编学习笔记_0x13/index.html","444f4cae460c77cc0029e79ce7c36ec5"],["固件逆向01/index.html","d88d55f238dbb1cc5dbe571943351ade"],["汇编指令集/index.html","3ceedca70dd5a40791ef58239e9e967c"],["硬件电路构成01/index.html","624546ca733517f83dd40eb873b8e0ed"],["逆向-基础-笔记_0x01/index.html","eb5d3734419ec3cc51584b62d7f8bf8d"],["逆向-调试-笔记_0x01/index.html","d7bdd24988e6267bc2983e6ed860aead"]];
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








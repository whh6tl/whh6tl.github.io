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

var precacheConfig = [["404.html","7a0d35bcfb956e8ac398416ec8614909"],["AMQP协议0_1/index.html","d297b7f3fa17372485ba843ca22da6f1"],["ARM汇编01/index.html","7e6675ce1b3b8b19319877e45408fdc7"],["Andoird反编译01/index.html","8d5c917aba7a2cc69072e29a5678f39e"],["BLE协议01/index.html","a493a287399ab238e2908e9234c6a331"],["CVE-2019-5418/index.html","ea5101ff4bd6d18d42c3fb5362f15bd1"],["CVE-2019-9766/index.html","174156bfbe5fed2b9daea58bac7122b8"],["CoAP协议01/index.html","3322416e4c690f2f684861c15ae2ab55"],["JS_0X02/index.html","727f808f13b7eda108c965463c123f0d"],["JS_0X03/index.html","2093ce72b2f2830fd225d3cc246ef910"],["JS_0X04/index.html","1392e11fdfb88501ae8332ef902cfa36"],["JS_0X05/index.html","2fc97700d7bb26bd000129cf082d855d"],["JS_0X06/index.html","eef2b256bce025d3dea1b5dbd1ca3fb0"],["JS_0X07/index.html","172b3a05d83e68329605edd91d33394f"],["JS_0X08/index.html","78b6f8eee1399c1a43b064bdd037f2a3"],["JS_0X09/index.html","28d66ac94d165dc3796754495043b2d9"],["JS_0X10/index.html","01292c3c924c5734249806274d429759"],["JS笔记(0X01)/index.html","92177278ae853e45c41c6025b6c68abd"],["JT808协议01/index.html","4f6ccf37a214456553743ee94c7c2121"],["MQTT协议01/index.html","d251d8440dd7d83ae37e0e521b598056"],["NFC协议01/index.html","86aadd966debb85171f5ee7462983d68"],["RF协议01/index.html","1b088a48a54b8f934d360338cc4fd3d7"],["Wi-Fi协议01/index.html","4f5fe3712df6ca7a7fe1f51a95ae1132"],["ZigBee协议01/index.html","b42e779ff647ae9696af774d46db5aed"],["archives/2020/08/index.html","1a5793f27227ae5e215f0def9968a325"],["archives/2020/09/index.html","70a70ce6d49373bf848da6f4ae3802f9"],["archives/2020/09/page/2/index.html","6265564ad6ca02ca3177599c4257c082"],["archives/2020/10/index.html","0262c9800f143b544fcecc44e2b02272"],["archives/2020/10/page/2/index.html","eb1e615337d37b96a923c0a8a0969c44"],["archives/2020/12/index.html","b2ee75b56a5bc724bbf27b87f07005bf"],["archives/2020/index.html","a72907bf82c19eb44a4815075458d919"],["archives/2020/page/2/index.html","52a7ac72d2002c053ef5d3fba2ab608f"],["archives/2020/page/3/index.html","4728667ce5d1f2fac08e7c094ff8a84a"],["archives/2020/page/4/index.html","dae1cfe8e299d28923107d3571677c39"],["archives/2020/page/5/index.html","8c68ba18e3a35c64a68705df4ff66240"],["archives/index.html","18b49e5ec6e421251123ee1e9aef8473"],["archives/page/2/index.html","1ed39c451421b51f6be7eecd83af436a"],["archives/page/3/index.html","41e447f7a0766df44573d169f9f061ff"],["archives/page/4/index.html","d729b328d7da194c50d8f76dca38b1ec"],["archives/page/5/index.html","ae113f0a760bf270183a5f5eb7b0fa1f"],["categories/ARM汇编/index.html","5371814172b01768a1358bd6855c0c9f"],["categories/Android反编译/index.html","55594abdcd7c6027b4a0f9edb5f3893e"],["categories/CVE/index.html","043cf9709b6a17ca9f146fcd843da841"],["categories/JS学习笔记/index.html","c00f1458f7ffd7a23414819768dabde2"],["categories/index.html","4bc4e5b247cd5d76bc79132ca153209c"],["categories/x86汇编/index.html","99f8b190a4a2b660ae2f3a5ad596161d"],["categories/x86汇编/page/2/index.html","b720682f137fa42c70f3169f2538093e"],["categories/固件逆向/index.html","2bed9ce9ed77d70d0d87391b5d82037b"],["categories/硬件电路构成/index.html","db9c7fabb6691285e953587e44dcfa1e"],["categories/网络通信协议/index.html","3c078f93e6f83fd59f3088e1ddefbe7f"],["categories/逆向/index.html","125a3903b5e7e25ad348e5c34c44d457"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","a0e8728600bec85e3d46ecb5bd3ef349"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","7c3d0115a014a61aa4650c2220beed0d"],["page/2/index.html","52a2c0c176a3c5d5be311752a5b1cf9d"],["page/3/index.html","1c882cefaf3dd835086a21fdc42e440b"],["page/4/index.html","3bc3015237adbb52ce62b4b9097a7634"],["page/5/index.html","4ecedc669b44bf351b5ad7b70705f35d"],["tags/AMQP协议/index.html","1ca97df83a02b6f107e9bcb9ef39b62b"],["tags/ARM汇编/index.html","eea2555e72fa572e15c302b0ed91d671"],["tags/Android反编译/index.html","78eb64aebac082a95f375470738d6383"],["tags/BLE协议/index.html","ec26439416ad0f17f5354686d985db8e"],["tags/CoAP协议/index.html","169e10b72c5e18e36c951dc5434d987e"],["tags/JT808协议/index.html","e1c10758aba7fdff0407bd39167335e7"],["tags/JavaScript/index.html","dee579966e0d707f8031ec9d0795ff16"],["tags/MQTT协议/index.html","110aa7b5077faaaff7394c2e7b5e487a"],["tags/NFC协议/index.html","b6acc123e8e2b5b50f669c8c74e3cc07"],["tags/RF协议/index.html","42edde29f7f7938c6affda8467c28821"],["tags/Wi-Fi协议/index.html","f0da7a02f6d6e2d89dc0622ae7b45271"],["tags/ZigBee协议/index.html","75b4625479cf7df9b6f1d25a64c0e400"],["tags/index.html","13e2262c472aa5fb80c8aefb60cfb6c3"],["tags/x86汇编/index.html","5f7775ce1c612fd52d9380ccd5645435"],["tags/x86汇编/page/2/index.html","7984c23bceda28916a1474b2fa7d6a4a"],["tags/固件逆向/index.html","700179826604c5c8b4a3a531046058a0"],["tags/漏洞复现/index.html","359204c0aa1bf67cc9a8ff23604ece3d"],["tags/硬件电路构成/index.html","7c7d8327f623e1f82eb103792dd13dbf"],["tags/逆向（基础）/index.html","fa1f912cb7f6f4a7364087c36a6d8995"],["tags/逆向（调试）/index.html","4a7ac36c8ac673d6063d491640c4e495"],["x86汇编学习笔记_0x01/index.html","680636079fd1809e24958e8eada5c13e"],["x86汇编学习笔记_0x02/index.html","69280c002845a43928c55ff3b0373f68"],["x86汇编学习笔记_0x03/index.html","43a2569a5a4e8ed579c1b59083b9340d"],["x86汇编学习笔记_0x04/index.html","77f6fbc8e88451360e7c3b48f93ec1e6"],["x86汇编学习笔记_0x05/index.html","463b73659f7d29ec965148828d60315a"],["x86汇编学习笔记_0x06/index.html","f8ac44a4139a0a5e39ac306bee741ca8"],["x86汇编学习笔记_0x07/index.html","2018f59df058dac268fcebdda06ba5be"],["x86汇编学习笔记_0x08/index.html","7f8d680f0c37acbb6c5f4768f220fb50"],["x86汇编学习笔记_0x09/index.html","41fa256b4488904be052758c93a45460"],["x86汇编学习笔记_0x10/index.html","8bf60abbc308554e58a96a895fdcb08e"],["x86汇编学习笔记_0x11/index.html","06ff28689e1a20811d061dee20712f12"],["x86汇编学习笔记_0x12/index.html","fb8b5d952c74becc856b5e09b22a4b55"],["x86汇编学习笔记_0x13/index.html","444f4cae460c77cc0029e79ce7c36ec5"],["固件逆向01/index.html","d88d55f238dbb1cc5dbe571943351ade"],["汇编指令集/index.html","3ceedca70dd5a40791ef58239e9e967c"],["硬件电路构成01/index.html","624546ca733517f83dd40eb873b8e0ed"],["逆向-基础-笔记_0x01/index.html","eb5d3734419ec3cc51584b62d7f8bf8d"],["逆向-调试-笔记_0x01/index.html","d7bdd24988e6267bc2983e6ed860aead"]];
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








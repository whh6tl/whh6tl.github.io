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

var precacheConfig = [["404.html","5de4c6e322004dea0d3f64f6a73bf85d"],["AMQP协议0_1/index.html","d297b7f3fa17372485ba843ca22da6f1"],["ARM汇编01/index.html","7e6675ce1b3b8b19319877e45408fdc7"],["Andoird反编译01/index.html","8d5c917aba7a2cc69072e29a5678f39e"],["BLE协议01/index.html","a493a287399ab238e2908e9234c6a331"],["CVE-2019-5418/index.html","ea5101ff4bd6d18d42c3fb5362f15bd1"],["CVE-2019-9766/index.html","174156bfbe5fed2b9daea58bac7122b8"],["CoAP协议01/index.html","3322416e4c690f2f684861c15ae2ab55"],["JS_0X02/index.html","727f808f13b7eda108c965463c123f0d"],["JS_0X03/index.html","2093ce72b2f2830fd225d3cc246ef910"],["JS_0X04/index.html","1392e11fdfb88501ae8332ef902cfa36"],["JS_0X05/index.html","2fc97700d7bb26bd000129cf082d855d"],["JS_0X06/index.html","eef2b256bce025d3dea1b5dbd1ca3fb0"],["JS_0X07/index.html","172b3a05d83e68329605edd91d33394f"],["JS_0X08/index.html","78b6f8eee1399c1a43b064bdd037f2a3"],["JS_0X09/index.html","28d66ac94d165dc3796754495043b2d9"],["JS_0X10/index.html","01292c3c924c5734249806274d429759"],["JS笔记(0X01)/index.html","92177278ae853e45c41c6025b6c68abd"],["JT808协议01/index.html","4f6ccf37a214456553743ee94c7c2121"],["MQTT协议01/index.html","d251d8440dd7d83ae37e0e521b598056"],["NFC协议01/index.html","86aadd966debb85171f5ee7462983d68"],["RF协议01/index.html","1b088a48a54b8f934d360338cc4fd3d7"],["Wi-Fi协议01/index.html","4f5fe3712df6ca7a7fe1f51a95ae1132"],["ZigBee协议01/index.html","b42e779ff647ae9696af774d46db5aed"],["archives/2020/08/index.html","bf9bd680691f7f504b8d419e827175fc"],["archives/2020/09/index.html","d1e52036d6d12d97bd4e96ab4fb0b924"],["archives/2020/09/page/2/index.html","d5c169a619596e8f6f0bcd925fb7ebf6"],["archives/2020/10/index.html","53ba53fada2ff2ad27381526b3f47776"],["archives/2020/10/page/2/index.html","70e3872993e361576427356dbe53616f"],["archives/2020/12/index.html","85853eeec8c07c1b11c0ae7c30acd161"],["archives/2020/index.html","61a833c593b29da890473d693bb1ecfe"],["archives/2020/page/2/index.html","11d5e3b3aef2bf50a89a829de16dadf5"],["archives/2020/page/3/index.html","5b5361fa47d4a62534886775ee84c553"],["archives/2020/page/4/index.html","e9a6ddb46b71cbb69c2d0f7e106d3e47"],["archives/2020/page/5/index.html","31ae217a941de4176818bc7221a06e65"],["archives/index.html","18d2d86d1d65595f68689f07835543ea"],["archives/page/2/index.html","5cfc2bb91c53f874f6a01068156e1d18"],["archives/page/3/index.html","2552a65ad6ba01bf3e969f02df977795"],["archives/page/4/index.html","52ed9f711fa888bba664acda63624119"],["archives/page/5/index.html","7c18cc7c3e32639dcaae1b9c999897f1"],["categories/ARM汇编/index.html","46973808c85f2eb88dcca7a3bd0c1369"],["categories/Android反编译/index.html","1dac1346283f787d08fa25a3b98bdde0"],["categories/CVE/index.html","e862506393f46866629a40b20d37ecb6"],["categories/JS学习笔记/index.html","f59f2b8ab0c8c5028bfde84536dc7bc4"],["categories/index.html","4bc4e5b247cd5d76bc79132ca153209c"],["categories/x86汇编/index.html","24f1731b6c704ffd27633c744a865dd2"],["categories/x86汇编/page/2/index.html","a80f09bf9a573eb7a3a1b0e61c89fa75"],["categories/固件逆向/index.html","05db027756cfe2501f439bbbf262510b"],["categories/硬件电路构成/index.html","4c15b9b27e48eb4dcd6e433719187e51"],["categories/网络通信协议/index.html","5bcd7421dd568ac22a9c9a4f3060cf9d"],["categories/逆向/index.html","b105d4e84a45ea0ad8b2f3a9529f60fa"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","2944a9dcc3fd6afb19e9d3c90ed51b7f"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","7c3d0115a014a61aa4650c2220beed0d"],["page/2/index.html","2ef0b90721b45b6410ef576bd9526134"],["page/3/index.html","f5f39a78f05fc7248fe04767df4058e2"],["page/4/index.html","e668a7c4985a1f60d3444d56ac48e74f"],["page/5/index.html","aedfee283633ff80b59715f9f66fc13d"],["tags/AMQP协议/index.html","17982ae8c7f5b696a23ae5ea13c2978a"],["tags/ARM汇编/index.html","d79124a5f4d4e1084f29a24e0ec661dc"],["tags/Android反编译/index.html","64e76818f9e30a3ba182808c37bf6a0a"],["tags/BLE协议/index.html","f35d12451d598caa42e0580d42ef7e43"],["tags/CoAP协议/index.html","668d18c0e51e44c91bad19a6e36f29f6"],["tags/JT808协议/index.html","9f8eeaa43be6d00e5e6bb4f5fd2a7e05"],["tags/JavaScript/index.html","b8dc3c909f8fe80b5e76a833b20c19c2"],["tags/MQTT协议/index.html","b2c4363785c52673f0fe81e3e597d694"],["tags/NFC协议/index.html","b3c28f1e47decf775d453d3499726d0f"],["tags/RF协议/index.html","ed281e45297aa73f948a0d78d0b3ccb1"],["tags/Wi-Fi协议/index.html","25b3f87edd94de91c0ab04fa9146e826"],["tags/ZigBee协议/index.html","13b187d7f949189cacf9d77035a23367"],["tags/index.html","6decd8cfdcaf6f6e0f45d0d659fe52a1"],["tags/x86汇编/index.html","43b8fe8b126f29361e93bb5c924208da"],["tags/x86汇编/page/2/index.html","963483f81e36412a6fe6fab97a1cb1d5"],["tags/固件逆向/index.html","29ef7a967fc9a0962c13e678e53992a7"],["tags/漏洞复现/index.html","e1edd051eb4ad83b91496e709f10fb39"],["tags/硬件电路构成/index.html","72286ba70cd99ade8345f5d2fd71ef71"],["tags/逆向（基础）/index.html","605acee5576d08c1323a16a57a136e12"],["tags/逆向（调试）/index.html","e9f0649326f32c4e873cac02d1878c64"],["x86汇编学习笔记_0x01/index.html","680636079fd1809e24958e8eada5c13e"],["x86汇编学习笔记_0x02/index.html","69280c002845a43928c55ff3b0373f68"],["x86汇编学习笔记_0x03/index.html","43a2569a5a4e8ed579c1b59083b9340d"],["x86汇编学习笔记_0x04/index.html","77f6fbc8e88451360e7c3b48f93ec1e6"],["x86汇编学习笔记_0x05/index.html","463b73659f7d29ec965148828d60315a"],["x86汇编学习笔记_0x06/index.html","f8ac44a4139a0a5e39ac306bee741ca8"],["x86汇编学习笔记_0x07/index.html","2018f59df058dac268fcebdda06ba5be"],["x86汇编学习笔记_0x08/index.html","7f8d680f0c37acbb6c5f4768f220fb50"],["x86汇编学习笔记_0x09/index.html","41fa256b4488904be052758c93a45460"],["x86汇编学习笔记_0x10/index.html","8bf60abbc308554e58a96a895fdcb08e"],["x86汇编学习笔记_0x11/index.html","06ff28689e1a20811d061dee20712f12"],["x86汇编学习笔记_0x12/index.html","fb8b5d952c74becc856b5e09b22a4b55"],["x86汇编学习笔记_0x13/index.html","444f4cae460c77cc0029e79ce7c36ec5"],["固件逆向01/index.html","d88d55f238dbb1cc5dbe571943351ade"],["汇编指令集/index.html","3ceedca70dd5a40791ef58239e9e967c"],["硬件电路构成01/index.html","624546ca733517f83dd40eb873b8e0ed"],["逆向-基础-笔记_0x01/index.html","eb5d3734419ec3cc51584b62d7f8bf8d"],["逆向-调试-笔记_0x01/index.html","d7bdd24988e6267bc2983e6ed860aead"]];
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








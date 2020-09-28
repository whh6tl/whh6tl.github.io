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

var precacheConfig = [["404.html","ffad4f3b66a18ccc90a3d50467db1550"],["AMQP协议0_1/index.html","69ed1ce2535091f9663ba91ce67896f3"],["ARM汇编01/index.html","940334ae5abd62937eed194d0cf11f24"],["Andoird反编译01/index.html","59180fc23e1451d6f3c125a99fb29fa2"],["BLE协议01/index.html","7a4a94a23e6568074b9c31ab8b0e4c3d"],["CVE-2019-5418/index.html","eaaa9c88a1a3228299017193d22cf227"],["CVE-2019-9766/index.html","d461b444527e115f9c3d00d6da327a9b"],["CoAP协议01/index.html","50b289bfeb575a77849eecd9d7143632"],["JS_0X02/index.html","6d73e3084cab59f60335be31a7cd862e"],["JS_0X03/index.html","d75ca3a49f2856af3489dd4c65380d25"],["JS_0X04/index.html","7f0f16ebc1c60e3b9212f2eb836c8dd4"],["JS_0X05/index.html","8fc47497d4fe01536c1bf0fddd40954a"],["JS_0X06/index.html","29fefd56907933b41c443cd574ca4f2f"],["JS_0X07/index.html","c543a1807455766fb05d1345dae4b5fb"],["JS_0X08/index.html","322c5f1543192360a13ef309efab4aa9"],["JS_0X09/index.html","972c33ea258af83320d10d031894f542"],["JS_0X10/index.html","793e1410048193f932d04b9163ac4b99"],["JS笔记(0X01)/index.html","abf2225dcd6f1ea276c7ee15a584776c"],["JT808协议01/index.html","88fc4e0a756c8f0de68b9023c1b346ea"],["MQTT协议01/index.html","bb3704a1a18b54b213debd5bd0b656f2"],["NFC协议01/index.html","85bc9d4519933bc6c9063b79db59f8d2"],["RF协议01/index.html","835dae9c20ccf2671c3faba5bf7bcd7c"],["Wi-Fi协议01/index.html","02a0109671b11f38e1badb89d9f684b2"],["ZigBee协议01/index.html","ffee938ea37118509f44f5d5e889dbaa"],["archives/2020/08/index.html","efc5719271d39a09ad0713bb3e2a0a05"],["archives/2020/09/index.html","67d370d51e9e035d60e66f42a8ae53d9"],["archives/2020/09/page/2/index.html","18b462ea2e078128d557c7138a676590"],["archives/2020/10/index.html","cf3dfc3f7dbee6d649a9271be5ecc330"],["archives/2020/10/page/2/index.html","c931722764d8dd10e8ca8d2a733e23b8"],["archives/2020/12/index.html","fb0b415c4e0d929b0334eafe0f9fadca"],["archives/2020/index.html","9932f6263159472abc7a2c507e042642"],["archives/2020/page/2/index.html","919d3e21c6125a6ecf29b1991e1cad8a"],["archives/2020/page/3/index.html","b636e5b431b25189c9eef573f29e37cb"],["archives/2020/page/4/index.html","6888c7dd866d05e6c6968a9ceec3eeca"],["archives/index.html","afc4d750c60c312eb457e3c3ffe3d002"],["archives/page/2/index.html","39329e05f96b1399616cca5a5cc3aaab"],["archives/page/3/index.html","81708fb860bce67f8d89350e0d4307c5"],["archives/page/4/index.html","968eb262aa14a12c32677cf827917413"],["categories/ARM汇编/index.html","f7bbded0ecf47076d249c5f7c51c2121"],["categories/Android反编译/index.html","9d7b44468d3e4f3e6e206b43e4b13496"],["categories/CVE/index.html","d40f23c01417686ce2a530fb19222338"],["categories/JS学习笔记/index.html","efe534fb655ac05a7f006a28402ab2ac"],["categories/index.html","00261acce88e62ef9ba8c2889f0f0726"],["categories/x86汇编/index.html","33b40930177c56943f649b1ed00fd1e7"],["categories/x86汇编/page/2/index.html","f1dc722c0cae0280fc9919c7d3f092d0"],["categories/固件逆向/index.html","2db283a619f06cfd9d86878d637e0e5d"],["categories/硬件电路构成/index.html","f85c12a2445670a4cc6f998e81a848d2"],["categories/网络通信协议/index.html","7408743dc65ab24cd23de3bd224ead98"],["categories/逆向/index.html","1c303abb6672b64329a7ae0ec493f14c"],["css/index.css","57ddfe330d43d455a741d80564941694"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","85cc89c6aab61796a6146e0c73febc22"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","184d111012f59a72793123b934809317"],["page/2/index.html","991c01214a18c2954df9899c6b7c2838"],["page/3/index.html","7849fec1da4fc0ebe5e8faa5b968e709"],["page/4/index.html","b6d5906c925b6a993a71edc6d8c5aae8"],["tags/AMQP协议/index.html","8e1f48e2362c382bac572c63afa19973"],["tags/ARM汇编/index.html","456fbd40d16e5a70d1cc9595e201a4b8"],["tags/Android反编译/index.html","086ae062763d24d7c3a8c9a1b15b9c24"],["tags/BLE协议/index.html","572e7f3d21d62990c821ea7262084026"],["tags/CoAP协议/index.html","8fc7e1265f3214a5b03b43dcb144b82d"],["tags/JT808协议/index.html","f0850bd6e6dc0f6b7caaeba0f4444d04"],["tags/JavaScript/index.html","3176f71bcbfd37db3133f8dfe36d9356"],["tags/MQTT协议/index.html","14aaf5bd78e298d46fa62f677800674a"],["tags/NFC协议/index.html","e56ddb876a9bf4f53c4aab211b285398"],["tags/RF协议/index.html","06a4ca6b015e82930dfee99bf2dbd748"],["tags/Wi-Fi协议/index.html","452929b46878a3ca8782a1677cb60d47"],["tags/ZigBee协议/index.html","ee47f78ace28957596205fa86a0a15f9"],["tags/index.html","4730cc6568c11a5f83b97da307cef9aa"],["tags/x86汇编/index.html","2e972ae054641fae7fcad51082d33b12"],["tags/x86汇编/page/2/index.html","8291777d846476aaf9c3876a50b6fd48"],["tags/固件逆向/index.html","1217381771a522060f4c9147482f1f10"],["tags/漏洞复现/index.html","b05bc140b499eccbe0fcedde06b76f3f"],["tags/硬件电路构成/index.html","2d851bbdb182baf5fc656b98ce6729c8"],["tags/逆向（基础）/index.html","dfb8d7d85e33a612d93a70000813c1ab"],["tags/逆向（调试）/index.html","69cefbc57ae677cc6496b991c5005659"],["x86汇编学习笔记_0x01/index.html","f3650e5a92c54f7118d7ff4366faa609"],["x86汇编学习笔记_0x02/index.html","fdd11b358d21e6b59ab2e1498be7d703"],["x86汇编学习笔记_0x03/index.html","3a70f7e37e37c5cc166c388250d18fbc"],["x86汇编学习笔记_0x04/index.html","6085504be2cc4edee43b1983b0dc114d"],["x86汇编学习笔记_0x05/index.html","3ee774fc0f12a3d71c8da11eb53a8084"],["x86汇编学习笔记_0x06/index.html","6ad5354ba44f408449a289533a586160"],["x86汇编学习笔记_0x07/index.html","83d8ee8fc949b46086b73ee438d3c720"],["x86汇编学习笔记_0x08/index.html","0d6a3987f2e13a6f40fbe1d96b2989c0"],["x86汇编学习笔记_0x09/index.html","c3d54ad28bc2fb8ab122d069030235dd"],["x86汇编学习笔记_0x10/index.html","8bd2a46bbe87ca79612cb4221de63c9a"],["x86汇编学习笔记_0x11/index.html","33d3ee079a75e8d8d96f140cd106d4d4"],["x86汇编学习笔记_0x12/index.html","2b8aa4a86003148a4f44a1c369c0d93c"],["固件逆向01/index.html","3353e1c163c090f89fe1158a407f8e2c"],["汇编指令集/index.html","bf2a2103d30b29f37bcb0e8219caf4fe"],["硬件电路构成01/index.html","21b0613882133dcdbb2f2ca5370ba235"],["逆向-基础-笔记_0x01/index.html","33b91c2ef4e9ed890fcdb602f92b9883"],["逆向-调试-笔记_0x01/index.html","bcab85b38133b8bfda78f20a887261fd"]];
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








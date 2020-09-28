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

var precacheConfig = [["404.html","aeea2a2bb7dce2c229c2956ce112305f"],["AMQP协议0_1/index.html","5c6c5a653640a449d4bfc8142b825889"],["ARM汇编01/index.html","de361b27e39dbed32460a897604ab015"],["Andoird反编译01/index.html","1ac65b7955f7a3c3d2a52a26df55d1f8"],["BLE协议01/index.html","90e72fac67f5158a498363558001eee7"],["CVE-2019-5418/index.html","298d1a1c404110f082e3293922655d1c"],["CVE-2019-9766/index.html","386250d3bab8840fbb75104ca6b9411d"],["CoAP协议01/index.html","8259dadcc9bae0e8866d683e6a44b876"],["JS_0X02/index.html","3d4e2c0b4879ad24a9cb1f2fa79b5b4b"],["JS_0X03/index.html","728387dd28aa5f9d0d8d087a961d4bb7"],["JS_0X04/index.html","84c384b2f94ec92a9a95d39aea176913"],["JS_0X05/index.html","a7a8394e3e661dc677f1f5f1ff2ef890"],["JS_0X06/index.html","18270d20599cce8249a31c1482cdc40e"],["JS_0X07/index.html","feebdb82dda86c6d5b37e554e8ef9358"],["JS_0X08/index.html","3c80d0c72f46d86edda7d987f2c1ea28"],["JS_0X09/index.html","549957a23e466a70170af719becd0987"],["JS_0X10/index.html","b62a6af544a5375e2a8b88f311e0eea9"],["JS笔记(0X01)/index.html","9e0e906b3149c6e843d3964ab519fbb2"],["JT808协议01/index.html","5e4e54d46ea840845fec372536a4e0d5"],["MQTT协议01/index.html","7031ea1f54af29fcd9197603cba76cd5"],["NFC协议01/index.html","5dc4447cb7b7cdba98cc394c822e5b66"],["RF协议01/index.html","3b191c483ab8655f243ea0a19cd2b7c0"],["Wi-Fi协议01/index.html","ff5c846bdcfbf3903512f0ff964a0adc"],["ZigBee协议01/index.html","cc59628693a60f1201eb372edb4ada08"],["archives/2020/08/index.html","b20ff2f5c9923629a78fe528e8591c3d"],["archives/2020/09/index.html","761cf6d6856c86e445aab0237d6e7ffd"],["archives/2020/09/page/2/index.html","6c27c8cb7791c047807a0bf51f312339"],["archives/2020/10/index.html","bc7f3297d09b49a84e475ef4abfa0478"],["archives/2020/10/page/2/index.html","253fb887ab73335223e462456fad22c4"],["archives/2020/12/index.html","60f67a60d420ea7543e284f229f4ee32"],["archives/2020/index.html","364048e59df0465eb5a80216bdbcd9cf"],["archives/2020/page/2/index.html","5e05abbdd7c47f589a7cd45ac671072f"],["archives/2020/page/3/index.html","b81609e2ab9768bce7ee4a2445d8e51e"],["archives/2020/page/4/index.html","244b493973b7305d3679f9b05bb493bf"],["archives/index.html","d9885b6d7f40db45ad505ae69a2cf06b"],["archives/page/2/index.html","5aab80a1b51b9726ccbc973afd310f72"],["archives/page/3/index.html","5d50d4c19c5b7a5759ad501da9ed78d6"],["archives/page/4/index.html","39e0ec31dd0791743191692ddef0e8dd"],["categories/ARM汇编/index.html","5891fa7f414acfd6d44b879277a80d36"],["categories/Android反编译/index.html","86a58b9ddba6e567bf4707d63a41e1c6"],["categories/CVE/index.html","25ed1be03e669bb27cffe3c103d43d12"],["categories/JS学习笔记/index.html","b31eb9feba23370b1c8a76ad5f8899e6"],["categories/index.html","b20860c7f7c7df452b1b159e6384b8f8"],["categories/x86汇编/index.html","3d9d8f740f39a7ff2bf06d5a5eef65a3"],["categories/x86汇编/page/2/index.html","c140a95fad7402582ce0f9e085ef1a56"],["categories/固件逆向/index.html","c08588299f504c437745a4e92568c4d2"],["categories/硬件电路构成/index.html","27e4de830a6a543267e3edeb44c6603e"],["categories/网络通信协议/index.html","2acb58b03b061bf7bbddfc39d1726793"],["categories/逆向/index.html","bcb750d3d762c1d84e545fe352f4cd26"],["css/index.css","e190ce4fce7067c6a08b6350927527e2"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","ffd64d1e44bc89ed7cbcb17dc4e78a0c"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","89e3f00f0711ab5e56479499e5d5670f"],["page/2/index.html","bb47c5dca17b12d87c89150ba51cd889"],["page/3/index.html","d8bd9e448256de0f6eb8eb97761f3244"],["page/4/index.html","67b54b448c55d8f1efc4fa231fb5c280"],["tags/AMQP协议/index.html","25ee2701edcf8001ea7b19cbbbcb3c53"],["tags/ARM汇编/index.html","fb7b93bae9ecb2808b5fbe41b01bd28c"],["tags/Android反编译/index.html","3df399e3b941ea22051d549c8e5e9677"],["tags/BLE协议/index.html","25001d2cf77228c6878b2d58d40af3bd"],["tags/CoAP协议/index.html","b1460eb6f58979ef6d5b84625f5d6580"],["tags/JT808协议/index.html","82866d4fa2e95105c6be54dddc3f2fcf"],["tags/JavaScript/index.html","38c5798402f2afef99170418d4899332"],["tags/MQTT协议/index.html","9df14a994fcce497f2e4adec8ded28ad"],["tags/NFC协议/index.html","b9c69d6343acb1ce7cd2d86360e9d7a2"],["tags/RF协议/index.html","08a0719e483d95d1134f4b90024f5a9c"],["tags/Wi-Fi协议/index.html","3463e4481ecf10d2155fe0bd08b6a5ca"],["tags/ZigBee协议/index.html","1350369c20fe840d7a619bcf48410440"],["tags/index.html","a0f2c29b3dae3976618dc4357d5c0860"],["tags/x86汇编/index.html","e86b445db4d3083e16ba6182c8b3fe02"],["tags/x86汇编/page/2/index.html","2f321467a6a3da69f12e6254574b0d1c"],["tags/固件逆向/index.html","a681604e2b8b7ca0b340f2de6a2c16a2"],["tags/漏洞复现/index.html","80d1f079ce4fb6f133776aef001cd89f"],["tags/硬件电路构成/index.html","4dc89ce84253e42cc49fe88dc0439db6"],["tags/逆向（基础）/index.html","afa2ee388d37d35814d6728a6a53e09e"],["tags/逆向（调试）/index.html","cebcf7bcdb5f81c4b082facd337117d0"],["x86汇编学习笔记_0x01/index.html","715c5713cb6d57f46a3e0d5f58fa2dd4"],["x86汇编学习笔记_0x02/index.html","0ea7c6658cdc7da73dc5ad3a0b2395bd"],["x86汇编学习笔记_0x03/index.html","6dc7b12528d8b91c94ed9d245bb0ed6a"],["x86汇编学习笔记_0x04/index.html","7611db8da72502ee8ee297d107951fd3"],["x86汇编学习笔记_0x05/index.html","0810750841ad96953dcc1538e7deb8f8"],["x86汇编学习笔记_0x06/index.html","0290ac8580e018fa59686ff9796a7801"],["x86汇编学习笔记_0x07/index.html","89909ecd6984b3c55a48d84add788a5d"],["x86汇编学习笔记_0x08/index.html","0467ba1e180908770f6b9dcb2e948ee1"],["x86汇编学习笔记_0x09/index.html","0bc4e1e4a17b05f305dd251c2a2fb4e6"],["x86汇编学习笔记_0x10/index.html","e1673685eb9cf4aa0097a618caebd86b"],["x86汇编学习笔记_0x11/index.html","e9e854f78e15e6800f882b6a9cb9d117"],["x86汇编学习笔记_0x12/index.html","d8e44750170df835128ec6987dc1e367"],["固件逆向01/index.html","c11e21a00b6e31b877312fa733faf81c"],["汇编指令集/index.html","65f5b05776e518d7bafab96de4186edf"],["硬件电路构成01/index.html","f9ed0719b876951936d42264b9f2fcf8"],["逆向-基础-笔记_0x01/index.html","f90944bb228b3292e0e353400bd0a208"],["逆向-调试-笔记_0x01/index.html","7090bd5d4f912166caca45cd01d51a7d"]];
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








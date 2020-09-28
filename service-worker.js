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

var precacheConfig = [["404.html","e2db28a579090c827bc35c29ed62d3d1"],["AMQP协议0_1/index.html","628e9a0014f2fbc152fbbfbf185e0c67"],["ARM汇编01/index.html","c18b99e2bc5ceaf104ec2a37f47a4b1a"],["Andoird反编译01/index.html","2d4fc5ba5f895970591759a99cab25e0"],["BLE协议01/index.html","6a1e4f0bf9f7047d17ea0831bb591141"],["CVE-2019-5418/index.html","5f6cd4faa863a58ee7c164386c654303"],["CVE-2019-9766/index.html","70e99a42d44e48042911c52b267b3877"],["CoAP协议01/index.html","69220a1766a5d25ac755019a92ee5f34"],["JS_0X02/index.html","c976741636cd2ee692ecc377a5784916"],["JS_0X03/index.html","d6a4bec2d23bba2a5ae18186c0d16c2b"],["JS_0X04/index.html","0b627e877698036e9747464262ca6fe5"],["JS_0X05/index.html","47ea28b883e01a8d771a1636a3994c17"],["JS_0X06/index.html","6bc775b179e7758a2a228f4dd83fd6aa"],["JS_0X07/index.html","94b6cbed1f42e0e4e73de6ad9da40657"],["JS_0X08/index.html","7bea79814513bfbf534b0b2e7dcca756"],["JS_0X09/index.html","1d85c737072c2af89d255159c846cb59"],["JS_0X10/index.html","5124ca0bc1b996bda120f5aa680769ab"],["JS笔记(0X01)/index.html","92e505a2609028027dff83b7e2573484"],["JT808协议01/index.html","187ee2d8b4c390431f7fdf2e217af289"],["MQTT协议01/index.html","feb0349e5a9d3d0092d819f1f51dcf10"],["NFC协议01/index.html","10c576bc61a031187b7dbcc9917ca9bd"],["RF协议01/index.html","3c3f5f4469fd79f325b0277e0a79c40e"],["Wi-Fi协议01/index.html","d68aace44203eae6de785fa333409c0c"],["ZigBee协议01/index.html","4a5a6bdc8d860cc28632db2817b761c8"],["archives/2020/08/index.html","012b93f356a48166849e8ed4841d2129"],["archives/2020/09/index.html","13828a9f409a78b820ad65ebfc880836"],["archives/2020/09/page/2/index.html","80040f49227fbc205944de9146ee19b3"],["archives/2020/10/index.html","1ad353430f58078c9fc240af9d637cbc"],["archives/2020/10/page/2/index.html","dc4844be7ad41fb7849a7e0a2e49d223"],["archives/2020/12/index.html","329cccf42e3aefdbfbd5cee0d8580f26"],["archives/2020/index.html","d81df6c0b54ea5d46f2d37fb225be41d"],["archives/2020/page/2/index.html","8ce95f06fdee705fa28f59543c89fc09"],["archives/2020/page/3/index.html","72757d8813eb7e0012ce735863f64e39"],["archives/2020/page/4/index.html","184695caeeb1842c74e99ee4153cfa73"],["archives/index.html","216bd228107e74602dc1384bf1dfb637"],["archives/page/2/index.html","25ddb933c3eaec229b3d72ba73b13232"],["archives/page/3/index.html","42ff021f4620fb3dfc6e53f959ce1d0b"],["archives/page/4/index.html","ed175f6875dd58a0ef23826e6559ee16"],["categories/ARM汇编/index.html","0b89eca9069c3e1682073c2292c8c7dd"],["categories/Android反编译/index.html","ae49f19d39c2ce93e521925c9b931c3b"],["categories/CVE/index.html","d840b0e086a81d3811c59cd19e33b52d"],["categories/JS学习笔记/index.html","baa9fec50b17a95de690005f690f0cfb"],["categories/index.html","ad118d72130d7c7558c6ad0a3d8752ea"],["categories/x86汇编/index.html","75723c565ef147c7c1ec253981b0ba36"],["categories/x86汇编/page/2/index.html","581b8e5df6af53fedf28d8ab0d03c61d"],["categories/固件逆向/index.html","fa0864a8150b7983e81036111884fb10"],["categories/硬件电路构成/index.html","c1715c7e959ce20ac7fb68f15256143c"],["categories/网络通信协议/index.html","588906c5d2e9386462d276b6f3c327c9"],["categories/逆向/index.html","d978fed88ebada8bdb3d22c191bc9319"],["css/index.css","57ddfe330d43d455a741d80564941694"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","109e51159b40e840f7c77b015b021419"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","84cf40973c7ed7ef332267000f8e052f"],["page/2/index.html","7a24512f2f360e71ec04a1774277bbc5"],["page/3/index.html","072ae53e7131ed6359ec515a7e2d4284"],["page/4/index.html","7554fbb22b88c5e4000b7750f15da88f"],["tags/AMQP协议/index.html","3cfad56185dac465503d26649dd4f323"],["tags/ARM汇编/index.html","5d727a4a3032621a07753977039c53bd"],["tags/Android反编译/index.html","ef7da0ae44ddaba85dfed12e140ad299"],["tags/BLE协议/index.html","25ad1c1c9c16cdd24e5b193600fc2796"],["tags/CoAP协议/index.html","632657e052ca82e1f42304d83da79a2a"],["tags/JT808协议/index.html","526df45c00b80f371471992d4c5d1f3c"],["tags/JavaScript/index.html","8bf4bbc83bb6393338be39d7d5e531ad"],["tags/MQTT协议/index.html","630fe565ffc62e091629e61d6c4ddd5a"],["tags/NFC协议/index.html","58f9354ef6e4be5025a4b06330fabd7f"],["tags/RF协议/index.html","ccbf09b9e83baa567822e325688c3d05"],["tags/Wi-Fi协议/index.html","699aa62b8779bdf349a395da704c7890"],["tags/ZigBee协议/index.html","e320764a9a013a765128af4e7e3d1db4"],["tags/index.html","2188bef587ef85a8253896024c532cae"],["tags/x86汇编/index.html","be3f0dbdafa0b3c626a0ae49bc4473c4"],["tags/x86汇编/page/2/index.html","fc8d7ad6514a57095a4d9c305637c59c"],["tags/固件逆向/index.html","90fa411328b5efeb3bc434a45f20e186"],["tags/漏洞复现/index.html","0fd0e99242de2ba3ac993936de58ca4c"],["tags/硬件电路构成/index.html","679f229e2f24b33647b72418b32e4d55"],["tags/逆向（基础）/index.html","8ae4ba9af7a6daf36991cea630f9e17b"],["tags/逆向（调试）/index.html","31b4b73f17fe70348624d2d056d90b5a"],["x86汇编学习笔记_0x01/index.html","b237f80db36db4db1804bfaff45b1089"],["x86汇编学习笔记_0x02/index.html","ada4a7cc51027eb51b7d5af83be7e9af"],["x86汇编学习笔记_0x03/index.html","61d66ed9c6b4a53d157c921b0a90dcb6"],["x86汇编学习笔记_0x04/index.html","8aeafc14c8fb62336ea176f6e2f9fc75"],["x86汇编学习笔记_0x05/index.html","84b55dc66b9d8e552fb23ac8f3e3ed14"],["x86汇编学习笔记_0x06/index.html","68af576df11f802d82999604c7a286fb"],["x86汇编学习笔记_0x07/index.html","ffde1f02ef009df8fcf3be7259f90141"],["x86汇编学习笔记_0x08/index.html","6afa6e2d0ffd061ef89cbb07bc5a0445"],["x86汇编学习笔记_0x09/index.html","1013789268ddeddad5a39e39c5b335f1"],["x86汇编学习笔记_0x10/index.html","2358b0e22a4a2530d4fce024b51255ee"],["x86汇编学习笔记_0x11/index.html","7530f7dd4fb14fe23ce78c98bddc34a0"],["x86汇编学习笔记_0x12/index.html","390393df925a57f8c689acaa7a4424db"],["固件逆向01/index.html","d86edb692e9e209351d354098e0c23fd"],["汇编指令集/index.html","061efac52ce4efb470650c485ad20158"],["硬件电路构成01/index.html","4a1f3ebcb45aa8528dcc40af65c290e0"],["逆向-基础-笔记_0x01/index.html","240fa4d5840d7619e5d3ebcc102ad528"],["逆向-调试-笔记_0x01/index.html","cfa75b6987b2d85c2e74a7bb2d0b3103"]];
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








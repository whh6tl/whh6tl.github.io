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

var precacheConfig = [["404.html","65f88eb1c8b1e993d4ff8d4034ca3cc6"],["AMQP协议0_1/index.html","628e9a0014f2fbc152fbbfbf185e0c67"],["ARM汇编01/index.html","c18b99e2bc5ceaf104ec2a37f47a4b1a"],["Andoird反编译01/index.html","2d4fc5ba5f895970591759a99cab25e0"],["BLE协议01/index.html","6a1e4f0bf9f7047d17ea0831bb591141"],["CVE-2019-5418/index.html","5f6cd4faa863a58ee7c164386c654303"],["CVE-2019-9766/index.html","70e99a42d44e48042911c52b267b3877"],["CoAP协议01/index.html","69220a1766a5d25ac755019a92ee5f34"],["JS_0X02/index.html","c976741636cd2ee692ecc377a5784916"],["JS_0X03/index.html","d6a4bec2d23bba2a5ae18186c0d16c2b"],["JS_0X04/index.html","0b627e877698036e9747464262ca6fe5"],["JS_0X05/index.html","47ea28b883e01a8d771a1636a3994c17"],["JS_0X06/index.html","6bc775b179e7758a2a228f4dd83fd6aa"],["JS_0X07/index.html","94b6cbed1f42e0e4e73de6ad9da40657"],["JS_0X08/index.html","7bea79814513bfbf534b0b2e7dcca756"],["JS_0X09/index.html","1d85c737072c2af89d255159c846cb59"],["JS_0X10/index.html","5124ca0bc1b996bda120f5aa680769ab"],["JS笔记(0X01)/index.html","92e505a2609028027dff83b7e2573484"],["JT808协议01/index.html","187ee2d8b4c390431f7fdf2e217af289"],["MQTT协议01/index.html","feb0349e5a9d3d0092d819f1f51dcf10"],["NFC协议01/index.html","10c576bc61a031187b7dbcc9917ca9bd"],["RF协议01/index.html","3c3f5f4469fd79f325b0277e0a79c40e"],["Wi-Fi协议01/index.html","d68aace44203eae6de785fa333409c0c"],["ZigBee协议01/index.html","4a5a6bdc8d860cc28632db2817b761c8"],["archives/2020/08/index.html","c16832d7bb065ad1944744668f0cd4b5"],["archives/2020/09/index.html","f680461adc94fe6130e72eeac799acaa"],["archives/2020/09/page/2/index.html","2902ba715ba8ff67933216428791a571"],["archives/2020/10/index.html","af03163fce3cc50076668aaf3dd18528"],["archives/2020/10/page/2/index.html","7cb3ef85fd72bec3ad30198f478e0113"],["archives/2020/12/index.html","6d012a933b14678a7cf0b00444a5520e"],["archives/2020/index.html","a6703989f07ecbe9827dec41d9701d22"],["archives/2020/page/2/index.html","f7ad7f8fd61ccd22086b438ec8710e92"],["archives/2020/page/3/index.html","5c5bea39f54518ddca29ac383c608603"],["archives/2020/page/4/index.html","e064b5970f4efaa2d23c32546f703aac"],["archives/index.html","bdac439eef9bfc19abb8ba92ee6ad72c"],["archives/page/2/index.html","26770ec2a9b25617d5c55b0512917512"],["archives/page/3/index.html","5236fd0ca321eb0c5d662df07a0b9e78"],["archives/page/4/index.html","a3690c8d53475ff23eb27464108a54d9"],["categories/ARM汇编/index.html","1577c81fa2ba50418699510b3e4c6075"],["categories/Android反编译/index.html","4aa37c2014ec997cee91ba0464ec5740"],["categories/CVE/index.html","1d384876fd35d4a96ed81a3ae7d1f8c0"],["categories/JS学习笔记/index.html","9b00acfecf5aec9b7bcbbbea6d1b792e"],["categories/index.html","ad118d72130d7c7558c6ad0a3d8752ea"],["categories/x86汇编/index.html","17425022f465da889c5da66e3f1542ce"],["categories/x86汇编/page/2/index.html","4461711a2665bb4e50a2101e3692c937"],["categories/固件逆向/index.html","7bff84da381b63593bb16928d6a060f7"],["categories/硬件电路构成/index.html","5ab3b9f89daca40279549845d0983872"],["categories/网络通信协议/index.html","e99a977f51b7944919a9aa8ae83b2628"],["categories/逆向/index.html","61c49819668e7e20929a95115637f4df"],["css/index.css","57ddfe330d43d455a741d80564941694"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","6feebb782c33c0888e5a3d82e34e7261"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","84cf40973c7ed7ef332267000f8e052f"],["page/2/index.html","5b97659e4d4f535058061564c10ae2c9"],["page/3/index.html","752c4afa7add440bfb801e53600fa47a"],["page/4/index.html","bc9bc92cd634af19e766854d6f2e51ae"],["tags/AMQP协议/index.html","cc44f11e561dd64574f39fb472273623"],["tags/ARM汇编/index.html","ecab6fd1d501f76d535f46c063e812cf"],["tags/Android反编译/index.html","3e16f0b853c3da7739450ed6c0218a86"],["tags/BLE协议/index.html","635c631fe51a9668255f3818886f3e2e"],["tags/CoAP协议/index.html","97c5483f8e914de6bfe551277af63524"],["tags/JT808协议/index.html","84f346b14d032a30811dac0cf656829c"],["tags/JavaScript/index.html","1ef888a9ff679aa9d56d38147fb8d319"],["tags/MQTT协议/index.html","53f64815e3f0e55d1e007b482d09e03b"],["tags/NFC协议/index.html","1c12f513cb4785f4d8ec0a0f913b64d9"],["tags/RF协议/index.html","8280114b99aed7263950b37a5d62e6a5"],["tags/Wi-Fi协议/index.html","724fa4c325cf5d44ef5247f568d78a65"],["tags/ZigBee协议/index.html","02210ac165d309505952d693626c0f83"],["tags/index.html","d7185ffeb2245ee104cbe4ec79de0f36"],["tags/x86汇编/index.html","711b7554082c93193b6fdfb45085d74f"],["tags/x86汇编/page/2/index.html","a374b27c2acb475ba6fadd4a0ee43aab"],["tags/固件逆向/index.html","ec653ca008cdf56e50644c37ebabadfa"],["tags/漏洞复现/index.html","c073127b92c277be62168f041322af4a"],["tags/硬件电路构成/index.html","9ca2d120e00bdfda48d1c2d07ea4abdc"],["tags/逆向（基础）/index.html","f610a149f0f16269539bd45d903d2adb"],["tags/逆向（调试）/index.html","8b6f4c3eb17a9fc8188012b2caaacd84"],["x86汇编学习笔记_0x01/index.html","b237f80db36db4db1804bfaff45b1089"],["x86汇编学习笔记_0x02/index.html","ada4a7cc51027eb51b7d5af83be7e9af"],["x86汇编学习笔记_0x03/index.html","61d66ed9c6b4a53d157c921b0a90dcb6"],["x86汇编学习笔记_0x04/index.html","8aeafc14c8fb62336ea176f6e2f9fc75"],["x86汇编学习笔记_0x05/index.html","84b55dc66b9d8e552fb23ac8f3e3ed14"],["x86汇编学习笔记_0x06/index.html","68af576df11f802d82999604c7a286fb"],["x86汇编学习笔记_0x07/index.html","ffde1f02ef009df8fcf3be7259f90141"],["x86汇编学习笔记_0x08/index.html","6afa6e2d0ffd061ef89cbb07bc5a0445"],["x86汇编学习笔记_0x09/index.html","1013789268ddeddad5a39e39c5b335f1"],["x86汇编学习笔记_0x10/index.html","2358b0e22a4a2530d4fce024b51255ee"],["x86汇编学习笔记_0x11/index.html","7530f7dd4fb14fe23ce78c98bddc34a0"],["x86汇编学习笔记_0x12/index.html","390393df925a57f8c689acaa7a4424db"],["固件逆向01/index.html","d86edb692e9e209351d354098e0c23fd"],["汇编指令集/index.html","061efac52ce4efb470650c485ad20158"],["硬件电路构成01/index.html","4a1f3ebcb45aa8528dcc40af65c290e0"],["逆向-基础-笔记_0x01/index.html","240fa4d5840d7619e5d3ebcc102ad528"],["逆向-调试-笔记_0x01/index.html","cfa75b6987b2d85c2e74a7bb2d0b3103"]];
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








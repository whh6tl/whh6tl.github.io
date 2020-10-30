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

var precacheConfig = [["404.html","7e318d6a565f075bc2963812745f3cd4"],["AMQP协议0_1/index.html","77b29bd16014e16ff38a869f96677cf8"],["ARM汇编01/index.html","ef158287a5dfae6ec20d6973036661c5"],["ARM汇编02/index.html","b6559be49f1901db158e33e5973bb138"],["ARM汇编指令集/index.html","95f98474bc168fb675915fc330fbe5ee"],["Andoird反编译01/index.html","d0378bc567e1cc64e89556b7aaace08d"],["BLE协议01/index.html","7a594762d9511799d33a24460a6c67f1"],["CVE-2019-5418/index.html","bf14b0c7d09455ade86f24cea1be40cd"],["CVE-2019-9766/index.html","29e9da34a1713ce8fbe5eb01202b1b74"],["CoAP协议01/index.html","7f0f259953e42a1a39f1c41c44c76a2c"],["JS_0X02/index.html","4b4e5773f34c37ced0d6932a680962af"],["JS_0X03/index.html","5ea2d4ed3ee640c1c717829e09ca458e"],["JS_0X04/index.html","56b11253ecf9cc6199604a15ac9da36a"],["JS_0X05/index.html","fb53b6b390b4348ba31775ec4be54cd6"],["JS_0X06/index.html","b1d3088c6298242627e10954b8a82b4f"],["JS_0X07/index.html","15f25589b576cd9e8e3c85392297a726"],["JS_0X08/index.html","65eb9d038ee5aea2243994590fe7b8ae"],["JS_0X09/index.html","cdad62339c7e262f08a5356e10d48781"],["JS_0X10/index.html","6bf144449803fc3f3e88b40245083874"],["JS笔记(0X01)/index.html","e7344dc23e3bb9f599d0fad9f2e6444e"],["JT808协议01/index.html","6d8192fc88e507007421a78052ca23dc"],["MQTT协议01/index.html","3fdf281d407b95684e1bfb1c7b49e4c5"],["NFC协议01/index.html","93928741576b459fa07ed860794f1d9c"],["RF协议01/index.html","b7e60db66a719384ded21e30b3aa1b5c"],["Wi-Fi协议01/index.html","7e39f4701003ed7ba73e3526770a8b62"],["ZigBee协议01/index.html","4bed7f9ca34aa9ce177059ef78a83fc6"],["archives/2020/08/index.html","a31612e098fe2c300469861519d95090"],["archives/2020/09/index.html","5cc70ee710d484dbea4cc1e5dec22283"],["archives/2020/09/page/2/index.html","02d5669378fc534de60abe30680e941c"],["archives/2020/09/page/3/index.html","89d5868f3039f14ac4fcb75927c5b94f"],["archives/2020/10/index.html","00256cf7bfcc083005fb3646bc1434fc"],["archives/2020/10/page/2/index.html","13eaccc3fb6c930489cff6ce226cfc75"],["archives/2020/11/index.html","0f4f8403b8474644db103ca906451b9d"],["archives/2020/12/index.html","e9be63b67a0d8ae99a6639c66409b224"],["archives/2020/index.html","7faf762c0cf60d1507036ede918c8333"],["archives/2020/page/2/index.html","45ca14bb0372947529b3596ac4ecbda1"],["archives/2020/page/3/index.html","52df05d0bb53f86bdcdf3ecef413e835"],["archives/2020/page/4/index.html","0fd4cefb764d2a5d8401db699a65e70e"],["archives/2020/page/5/index.html","2f3be61ef6c7fbf4cb02877a39c32335"],["archives/2020/page/6/index.html","e3f132e50b66d2335bc707a1002d3c25"],["archives/index.html","2cf8f57e908def29a9aa11059d77f7f9"],["archives/page/2/index.html","8ba8a6aa50d94a4577f4b86ad37caa10"],["archives/page/3/index.html","014b992ab4ec5478e46dc69d2c6fe9fb"],["archives/page/4/index.html","0148464ab9ac71b9f0b7b1d1174ffd83"],["archives/page/5/index.html","0bb6176b5c3b02d14d47f08258f2bd93"],["archives/page/6/index.html","ea194592beaefde1bccdb9c8300fb58c"],["categories/ARM汇编/index.html","11dff766f983ccfb61ccb176952512fa"],["categories/Android反编译/index.html","21beec9e4209058f87d67847a26a1440"],["categories/CVE/index.html","6afa5dcc411835ccb936b31709c5c9c3"],["categories/JS学习笔记/index.html","1beae917e38ba53b115d664e3d9958d7"],["categories/index.html","563d20e0124ba135a4750cabebf400d4"],["categories/x86汇编/index.html","a73325ddcbd598456598f90c330f0e0a"],["categories/x86汇编/page/2/index.html","16ddd44644c960bee52a36ec85d669ae"],["categories/固件逆向/index.html","2a03cf5cadf50fcf045dae9bfd2dc4d2"],["categories/智能硬件安全/index.html","c108257699b9e2e50a589a8a4253c25b"],["categories/硬件电路构成/index.html","1515495a324341517ae7563925e4f317"],["categories/网络通信协议/index.html","30b75334c5c3721504adcdf6ed59efff"],["categories/逆向/index.html","622b250245e5fe180ef553fd3492390f"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","15934d86713e9d9d22e8f9c46c0dcef6"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","30e29efce5cfa3281034e858ec00fe1f"],["page/2/index.html","916ceee42bbbee4c884933f7742c04c3"],["page/3/index.html","8cb78909fc4efcccb4e5d99457607e42"],["page/4/index.html","5176c5d3da3662d3fb1abc85d4a26c1c"],["page/5/index.html","64ec5d62bd207cd972b3275d22d3b8ae"],["page/6/index.html","596a7ac8ec7e9f483c88ca53b7e840c6"],["tags/AMQP协议/index.html","1673aea7512f98615431ae45c99e0bb2"],["tags/ARM汇编/index.html","1cf7f5908b952296851c6eb0c24668e5"],["tags/Android反编译/index.html","e33233ece9005a0fa92f0c11bdcf7d76"],["tags/BLE协议/index.html","60eabeaee36da8ae1ddf9575e1353727"],["tags/CoAP协议/index.html","1ef3cba994d338e58f5536fac7f16ae9"],["tags/JT808协议/index.html","d8e3cc9ba37742afdd6e1f32174f6f2a"],["tags/JavaScript/index.html","7b13c69069a720a2c089fea1663785d9"],["tags/MQTT协议/index.html","7567463a4dbe76daf4f07d93520a6711"],["tags/NFC协议/index.html","450ed65293e4bf5dbd98f6912f1c9b36"],["tags/RF协议/index.html","ff35a4a03ff22869d312721d9f217899"],["tags/Wi-Fi协议/index.html","5a65bd6789515fd064719b00549f0ae9"],["tags/ZigBee协议/index.html","490a0315f25223bad049d9484d890b44"],["tags/index.html","dd54fdf813a2375622cfda4e35c3ccd0"],["tags/x86汇编/index.html","2abdf590404b1d0219082887fc3372b1"],["tags/x86汇编/page/2/index.html","a3fbac525fe3378ceec3e5abd040e036"],["tags/固件逆向/index.html","4e081c42301cc92873e5c7bc3398a04d"],["tags/智能硬件安全/index.html","98ad5ba1030143ddc901b5ff94871509"],["tags/漏洞复现/index.html","f7563690ebb08415b571500b96d7075f"],["tags/硬件电路构成/index.html","dbfd43ce2a9b34fbee7f4712f924088b"],["tags/逆向（基础）/index.html","4a39ca144e8ca331ea05e148c7b042b6"],["tags/逆向（调试）/index.html","4cb1a8836896a2b481591d0610f26888"],["x86汇编学习笔记_0x01/index.html","d6e8a91e20b2aad12f5073784cf2d041"],["x86汇编学习笔记_0x02/index.html","4a44ef94561991358aaef925628ce24a"],["x86汇编学习笔记_0x03/index.html","cdbf3de69fe39c6abc6bd74813b99b51"],["x86汇编学习笔记_0x04/index.html","437ca3e2c284ef1d5bd8a0ca0767ce1c"],["x86汇编学习笔记_0x05/index.html","a53f734d83f06f4283c9dbd936f102ba"],["x86汇编学习笔记_0x06/index.html","97937360ad5b5e3425c7e9e173c441c6"],["x86汇编学习笔记_0x07/index.html","b8f94339b99198233e314552d0e0661b"],["x86汇编学习笔记_0x08/index.html","3ea04192ea29f89956b7d496e6445d5b"],["x86汇编学习笔记_0x09/index.html","f2745fcb34ec86708e886b0273e7718d"],["x86汇编学习笔记_0x10/index.html","80538e0ce7cfcacf9a7170e26578db62"],["x86汇编学习笔记_0x11/index.html","0c485c0ba2fd5740cfba97ecd8a5998e"],["x86汇编学习笔记_0x12/index.html","64a55c90f62eea7d3856117d18225f5a"],["x86汇编学习笔记_0x13/index.html","f0cf6265c69a74ee39b0ff62190c7fec"],["固件逆向01/index.html","8887ecb98fd05d032a81144a5c4cf319"],["汇编指令集/index.html","6ac72ab3453b300c40c819c5c79ddfb9"],["硬件智能安全(0x01)/index.html","714adcdfc235a1614e3dcdc9b52fe2cc"],["硬件智能安全(0x02)/index.html","d86e18df9ae087cbe706b7df080d845a"],["硬件智能安全(0x03)/index.html","e7156ea61479c652fc56a7ad33cb4ffb"],["硬件智能安全(0x04)/index.html","cea3399e3e755bd74da4f3b270fc552f"],["硬件智能安全(0x05)_/index.html","9be2f2f7c64f2a8fc874cbf54dc8a570"],["硬件智能安全(0x06)_/index.html","a1506b7f48334158fc625d7325b0d45f"],["硬件智能安全(0x07)_/index.html","a32ec06d4383364a946f58c735000c23"],["硬件智能安全导航/index.html","cbf3d76b1ae9e2ac76c7a66ee86e0ea0"],["硬件电路构成01/index.html","a19880304cb3d78166efe0a0585b7c4e"],["逆向-基础-笔记_0x01/index.html","b4b150c82a68b7dce1a7a95695c73cb2"],["逆向-调试-笔记_0x01/index.html","5911b8f402905ad7ec24517d3cd20bd8"],["逆向-调试-笔记_0x02/index.html","169d95faa4fe6e64d5a378c23b9bd561"],["逆向-调试-笔记_0x03/index.html","633125702d3407936c3ef78854acdf98"],["逆向-调试-笔记_0x04/index.html","7f13d2e7407da46b54d41c2fb7d8c8e0"]];
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








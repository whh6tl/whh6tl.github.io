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

var precacheConfig = [["404.html","26d160efcb94c307cb948474e3fd372e"],["AMQP协议0_1/index.html","01a9fe37b94a6f63f4093ad13d9be1d4"],["ARM汇编01/index.html","1481e98d4bc81bc8d6da2f1f4457adc8"],["Andoird反编译01/index.html","32650b8743ca5ff69347a97e001431cf"],["BLE协议01/index.html","c52119ed54ef285bd78531c1cc21b072"],["CVE-2019-5418/index.html","598264add5cbf92abaeceb109f22331f"],["CVE-2019-9766/index.html","43ba27f31633bdb55f9cf4274fe5d71f"],["CoAP协议01/index.html","7a4dc790a594038549f05be2e8946ab4"],["JS_0X02/index.html","3357a919ac86599956b05511186fb5d7"],["JS_0X03/index.html","b5f496caa91ea42cd297ad2f71e80ea8"],["JS_0X04/index.html","dc3502e34ee8f111d45f31797c2c06bc"],["JS_0X05/index.html","d13d3b863da865c0599e75ab4db3a256"],["JS_0X06/index.html","81056e419732f194dc966cf29263c411"],["JS_0X07/index.html","1ffb8b66591b7c042d93effc8e39846d"],["JS_0X08/index.html","f2f8068153096a66ab690cb6eb7c89e8"],["JS_0X09/index.html","87add58042b8874c34ec0abf80fd31be"],["JS_0X10/index.html","5b1e7d469948d878d8ff8c1775f8699c"],["JS笔记(0X01)/index.html","be230741624d075b9ba5819fbe659510"],["JT808协议01/index.html","3f844e7fc86d63b89b87c98e0678c3dc"],["MQTT协议01/index.html","22cf713af6a5cadb48ff38611d8f37b7"],["NFC协议01/index.html","735071b2180429bfa09a6ee75e6c8a89"],["RF协议01/index.html","dddc94b83658311df4beb77ce4e2fdbe"],["Wi-Fi协议01/index.html","ffac713e216da9268776c2537842e4d6"],["ZigBee协议01/index.html","c9dc4daea47e43983a75a1b31a1cb8ff"],["archives/2020/08/index.html","23c04012d9db9c688a76df88eff38af7"],["archives/2020/09/index.html","02337cfc43ecf9c49cd8fa6589e96325"],["archives/2020/09/page/2/index.html","4032935493d5d75f4034d2cc714c1216"],["archives/2020/10/index.html","97df47d21d1e5829f19ac2bbdf730d81"],["archives/2020/10/page/2/index.html","3eeaaa14ef5d9d2a9c6e543be0f92ca5"],["archives/2020/12/index.html","7bb66eb9e8dff909449dce200cbc6d58"],["archives/2020/index.html","e356acb2f271fcd10266bb8eed56e125"],["archives/2020/page/2/index.html","29f8d361248116ebd2624ee0bfe885c0"],["archives/2020/page/3/index.html","1adcb60f6ba5f56237b744f9d3d4174c"],["archives/2020/page/4/index.html","ab230f956ebf4406a04466c10aeed3c4"],["archives/index.html","925080cfc01d79ce06dd2204445c3203"],["archives/page/2/index.html","8f90dfb143ac17476ff0fa884bf20d6e"],["archives/page/3/index.html","3b18fc3028095a3cf64f72e301b58769"],["archives/page/4/index.html","3c6709f932397bc07ecae232d41703ab"],["categories/ARM汇编/index.html","f7c4f339e8fcdce681b57a0a07125e95"],["categories/Android反编译/index.html","26baa977291d5073f87bfcd0bb155065"],["categories/CVE/index.html","753272c549a09a11c5b25d3297c0d9c0"],["categories/JS学习笔记/index.html","64beaf08972d3d952cf88f3029c7d718"],["categories/index.html","bb8e102cc41c1b4255dd98533913cf0a"],["categories/x86汇编/index.html","cffbc7ffe486e774f724b3e421d1db47"],["categories/x86汇编/page/2/index.html","322f8ad5c9bfa119296597b27c24fd05"],["categories/固件逆向/index.html","ff4aae83c21ea732e3f263f141b12455"],["categories/硬件电路构成/index.html","19d0444334b3d79b556bdaf8492fde2f"],["categories/网络通信协议/index.html","9073b3a5ac28dc7bdeb3f8a1aeb6fa74"],["categories/逆向/index.html","58bd46c16613e2de3f5c3b773e214645"],["css/index.css","e190ce4fce7067c6a08b6350927527e2"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","2efcff543b6cd9eb930511191938217b"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","002849493557ac796c0926f5c294dcc7"],["page/2/index.html","787f7302376c8ca87f4cac53b6324e2e"],["page/3/index.html","5a498d0a70cddc46bc25991567f50af2"],["page/4/index.html","b807a0d86a254d65afb0cd6b12077d90"],["tags/AMQP协议/index.html","94bc52160e97847250053973539edff5"],["tags/ARM汇编/index.html","4be8d4d112fb227d68f0b634ff5212ba"],["tags/Android反编译/index.html","6de028b2e6fba89e42ffbb875f8e5ab6"],["tags/BLE协议/index.html","715ac1dc3ad2e7804d5f28506cb231d6"],["tags/CoAP协议/index.html","e293c946a7f301f685f91f1d0a530eec"],["tags/JT808协议/index.html","b46935a345a91f4219d6a37fd2afa0fc"],["tags/JavaScript/index.html","2a14c68e55c80b0df618468dadc38bef"],["tags/MQTT协议/index.html","40bff81c277e833617251e3d9acae972"],["tags/NFC协议/index.html","a37f3f7162a5839e65dd239e1eb45ade"],["tags/RF协议/index.html","701383e33b72495298549b1d32c0446e"],["tags/Wi-Fi协议/index.html","ce33599765e02edde9bdff77b772c813"],["tags/ZigBee协议/index.html","8b81c9157e6b19832131525d3d5a29db"],["tags/index.html","9888d6b9422a3ca3dc50d5af10ec4a4e"],["tags/x86汇编/index.html","c4a715adae11a9076f297d036e83aefa"],["tags/x86汇编/page/2/index.html","eea9935b894ec7f88725700cf2c22ea3"],["tags/固件逆向/index.html","9ce2993e142806b1c6c24849a95a2f11"],["tags/漏洞复现/index.html","0f79432021f1a946b4006ea96e4b5747"],["tags/硬件电路构成/index.html","71a89a13db7423b03b9b2e4004c21068"],["tags/逆向（基础）/index.html","bca3b4398d7d4819579e2257d1b35d09"],["tags/逆向（调试）/index.html","6d2dffd34a169a3ef6ac6aae34f56f62"],["x86汇编学习笔记_0x01/index.html","d43ccc26434220f0db7c645b1203b214"],["x86汇编学习笔记_0x02/index.html","abc53f6a2b6dbf4b1d7390cc60f86f5a"],["x86汇编学习笔记_0x03/index.html","d5b4c4de71d96190534dc6c11c5389f6"],["x86汇编学习笔记_0x04/index.html","fa3a7b2641110fd21c7529d22ab985e0"],["x86汇编学习笔记_0x05/index.html","e60f8986d0ce1342be0e96b49b5697c1"],["x86汇编学习笔记_0x06/index.html","a179194e01f15218f879e2e4e445446d"],["x86汇编学习笔记_0x07/index.html","fe79d70c9d16c467fe418327b8624f3b"],["x86汇编学习笔记_0x08/index.html","3d04e34f24e2dfd65771d42a558fad41"],["x86汇编学习笔记_0x09/index.html","48c710304d51697269c94ad3a40bb4ec"],["x86汇编学习笔记_0x10/index.html","1de054c254e9f5945f94c0dd2be146b7"],["x86汇编学习笔记_0x11/index.html","7194f629cc3400a6a8ca35276be85009"],["x86汇编学习笔记_0x12/index.html","4991586953ce3237ccda4734710d47d9"],["固件逆向01/index.html","e339c4b1aef2bbddf7ab8bd68e89dfb7"],["汇编指令集/index.html","e6cce992801b55f904d4a0ba28752284"],["硬件电路构成01/index.html","6afd39b2706f8bbb21cbea10b0d65bf2"],["逆向-基础-笔记_0x01/index.html","576782e0f7a78c3b1a0889f41d923301"],["逆向-调试-笔记_0x01/index.html","bad6b4675151c2a4a21d00e6d3e050de"]];
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








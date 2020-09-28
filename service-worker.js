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

var precacheConfig = [["404.html","6d07a0553d7733037296a5395b4e48b5"],["AMQP协议0_1/index.html","da750fbc8b8d4caeab3475e15d204380"],["ARM汇编01/index.html","e6ecf64a00f99aecb4fab8bf3082e22a"],["Andoird反编译01/index.html","8fee2f67be4b7a48f3d4d828de188948"],["BLE协议01/index.html","c51cd0d9682d0cb1cc2166f39d6f6ec3"],["CVE-2019-5418/index.html","a0a1acbba06b8d9a1647a53d681267da"],["CVE-2019-9766/index.html","37369a3983141564c041ff2d5011b2d7"],["CoAP协议01/index.html","1bcd9a1e63b4dee84f7832acc65e6197"],["JS_0X02/index.html","59760b21a43cb134cc0fac1255d85526"],["JS_0X03/index.html","7b966ad62be18412e04b9d3b3558b2cf"],["JS_0X04/index.html","200929881ca91c98c248245d02b3b9c0"],["JS_0X05/index.html","1c4e34eb42c85d5f8ec13e545d8214e4"],["JS_0X06/index.html","14cb0aebf4856f6fac3c8bfb64bc409b"],["JS_0X07/index.html","8b74d556236d679a7ea5afaca1710671"],["JS_0X08/index.html","f579c9845f31a1f836c9e7ffd1fb36a6"],["JS_0X09/index.html","5bf85e3a035effe429700527635d51e3"],["JS_0X10/index.html","654f034e7304e4061b0d2e776873517e"],["JS笔记(0X01)/index.html","c1a09861b3a5ee8ef3644f5e19089418"],["JT808协议01/index.html","9cdea2c95e224d6cec319ee3e748ac1e"],["MQTT协议01/index.html","6995234e1b49486609cc4262b38e14ea"],["NFC协议01/index.html","b6f5ab0388fe15027ad8284fc952f026"],["RF协议01/index.html","2bf2ae7f7178d98ec5c95cd63d7f7a6f"],["Wi-Fi协议01/index.html","a49ff23ae2be9470def9e7ba9ae6d69b"],["ZigBee协议01/index.html","0b3545856539632db4c4f73152124592"],["archives/2020/08/index.html","ae9656cacb2d99e6868fa7070b404e71"],["archives/2020/09/index.html","5aa668500c45aaa9267c9aacbc8579db"],["archives/2020/09/page/2/index.html","a10909760d239f09fdcca20d24370124"],["archives/2020/10/index.html","a0a8e499ec43e9b392a9b50484c6343e"],["archives/2020/10/page/2/index.html","b52a5111435edb6264032013bbf217a0"],["archives/2020/12/index.html","6fe0cf447b0eb0fae79e27ff982069a1"],["archives/2020/index.html","eed7ed2727d9d2efbee8bf7af65c432a"],["archives/2020/page/2/index.html","8efeaa2b7f304648351538b7053d0ac7"],["archives/2020/page/3/index.html","6089dac5e08426f626b94ab8456d2651"],["archives/2020/page/4/index.html","e6b7b6cb960bfb394623a29b25026c60"],["archives/index.html","93b5976b3b2a437931b8545785f6bf64"],["archives/page/2/index.html","1f991933582b1a31ef0cd71da80df0d1"],["archives/page/3/index.html","5e3792063b79611eb064a6126629a484"],["archives/page/4/index.html","6ca6dc9c2f0ac0fdc64cd3eec1884e09"],["categories/ARM汇编/index.html","31e76c062d66102809f16f8f2532ecb0"],["categories/Android反编译/index.html","241eaa3e6e939c571a6215e50aecf620"],["categories/CVE/index.html","8f14242698469fade2c20965402e0db0"],["categories/JS学习笔记/index.html","15417099f106c95c365ff443261f3a8c"],["categories/index.html","e10f6ab1736af9082e0518f0f388e4e7"],["categories/x86汇编/index.html","2715e7b8d14fb46ccb0c1430523b2a2e"],["categories/x86汇编/page/2/index.html","f2a33321e1cbc8087d486b9ec749eec6"],["categories/固件逆向/index.html","6829cbe772bf13e535a927ee79dfe891"],["categories/硬件电路构成/index.html","2d8eb2714d69102246e1f521b720e2c0"],["categories/网络通信协议/index.html","1f118973a207fb3bfb091d877e9aebbc"],["categories/逆向/index.html","6af19ef885c329783df3c065cdb5b185"],["css/index.css","e190ce4fce7067c6a08b6350927527e2"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","677bf39e6458e4b7acb8a014c1c11d83"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","d2cb31440e5a8ea27ee90985eddaf276"],["page/2/index.html","6fbe6ec9651bbabe669d7946c01f622b"],["page/3/index.html","c78b86b8df2f030a1bfdb5c92695e850"],["page/4/index.html","d3992367f3a1d2f7077fdc0a5491586d"],["tags/AMQP协议/index.html","e8cc5ba57480a1d50bfc348455842ffc"],["tags/ARM汇编/index.html","45f5b9304bc83b51d3c92eb772f04663"],["tags/Android反编译/index.html","c376abe7f621ee67eded82fba037901d"],["tags/BLE协议/index.html","0e41fcbbee4a993f86627bc22f86f01d"],["tags/CoAP协议/index.html","3f39ea1cacbe0629a067520da94c6e84"],["tags/JT808协议/index.html","c6648c59adc0c3d0ff403f7017822eb4"],["tags/JavaScript/index.html","647ce3e14621527f05b5d93a7b768eeb"],["tags/MQTT协议/index.html","b2c0b59f07d7b2c0d97ad2bcea271b7c"],["tags/NFC协议/index.html","db8d0cdc643bd2a26ed6e09204ececb3"],["tags/RF协议/index.html","32611388740f39a049fee0a82dc3b1a5"],["tags/Wi-Fi协议/index.html","bdf59455e82a0e5a304be9ad935d0d38"],["tags/ZigBee协议/index.html","5ab225725570f5f7a43da05262c3c4d2"],["tags/index.html","16809722739dd1d56d4d2b5028272a34"],["tags/x86汇编/index.html","f4a9d450f96ee0f0b73aaaba7da1adb5"],["tags/x86汇编/page/2/index.html","92449013d83b9158672bc6af64e67384"],["tags/固件逆向/index.html","62d389e71f8a2609dd2b88825f147803"],["tags/漏洞复现/index.html","107cc1153849514e621bae65527d1d7b"],["tags/硬件电路构成/index.html","1d2105b75f96c43f000eae834a59e825"],["tags/逆向（基础）/index.html","4c4945942254bb4170da063d33c25056"],["tags/逆向（调试）/index.html","c1af5bc849e268f2c0d7f60a15ca87f2"],["x86汇编学习笔记_0x01/index.html","ac07d1dc813d13d3e8a0781b65ccfcf5"],["x86汇编学习笔记_0x02/index.html","7edf73a7c97dfc68969526faad005a3f"],["x86汇编学习笔记_0x03/index.html","536188a646aa64f74e1a321b905c857c"],["x86汇编学习笔记_0x04/index.html","cbe6f3ad473235e34eece1a714600df0"],["x86汇编学习笔记_0x05/index.html","970b2c6a5b9e8240812023223ab2e60d"],["x86汇编学习笔记_0x06/index.html","096e45987690fc04974578878286a0d5"],["x86汇编学习笔记_0x07/index.html","c4b75f6b4ecd55d91ef1c1cba75924e4"],["x86汇编学习笔记_0x08/index.html","62901115799fdeb1358e7931bb0e34a8"],["x86汇编学习笔记_0x09/index.html","0e974446a07c4afbfd072416ac922e70"],["x86汇编学习笔记_0x10/index.html","9ee6d7b8fcbc1c190fae7238c3a97ccb"],["x86汇编学习笔记_0x11/index.html","a49937d6931d62975991f5385f98fbe4"],["x86汇编学习笔记_0x12/index.html","192a632e49d78aae1f3f7cbeb6443d3f"],["固件逆向01/index.html","643ffb54911a0695c106f54dff107efb"],["汇编指令集/index.html","8301790dce6e7eea07047587742824de"],["硬件电路构成01/index.html","845a5cfc43e91b1e26759833f5b01841"],["逆向-基础-笔记_0x01/index.html","8740e88087208d0da3bf977e28a3e9e9"],["逆向-调试-笔记_0x01/index.html","9f20935f279c6ef8abe3fa6d40c11928"]];
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








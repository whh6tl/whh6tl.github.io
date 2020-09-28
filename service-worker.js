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

var precacheConfig = [["404.html","dfc539951bc3aa38c5b1bede9b4e5fab"],["AMQP协议0_1/index.html","f6a756d8d4f72587c880259cb3d17763"],["ARM汇编01/index.html","652ef617b3d1fe435f32245900566700"],["Andoird反编译01/index.html","0ba15ab4ec29d46c3ebcee72aa91ba51"],["BLE协议01/index.html","8360d112f040d32be49a87825bb99d85"],["CVE-2019-5418/index.html","06631ccf59b992145bdc795197f994a5"],["CVE-2019-9766/index.html","43b9b238c579795c0ffe6fcabb2b116d"],["CoAP协议01/index.html","ba5ef629291aa532d1d6ee0f78264b8f"],["JS_0X02/index.html","8d99f31ccf989fff7a97d7ebb25307c9"],["JS_0X03/index.html","ec3a39ad2793a378211800ea00408360"],["JS_0X04/index.html","2745d4091bdad62ac01768ab62712759"],["JS_0X05/index.html","2eb97cb5cf5f0287c37afe96c04a9a64"],["JS_0X06/index.html","0fbecfc1e1b92d859e95d7c11696995e"],["JS_0X07/index.html","7701382299ad9534d3691eec52825bb2"],["JS_0X08/index.html","b6c7e383b1e6c4e7760f1488a7440229"],["JS_0X09/index.html","97accbca45d94ff2ec936c4df3ad1a69"],["JS_0X10/index.html","f1b848955c19504e095f9416e50e3c4c"],["JS笔记(0X01)/index.html","faef7b840ce3fd69b3191e3949670e52"],["JT808协议01/index.html","128cfe3895588a187b8c9cff82602aa8"],["MQTT协议01/index.html","904ab6df3e34b70f874138992413cd1c"],["NFC协议01/index.html","6555144555d7b34b16cc8e529e7ffec4"],["RF协议01/index.html","883c39f7ff45a1a1ad985b92f1f354ba"],["Wi-Fi协议01/index.html","7babd3487dcb5700b78abdc4678c9ca3"],["ZigBee协议01/index.html","915a0b6ba906f0929e47142ae0863542"],["archives/2020/08/index.html","64ed379053f3f324efe7cc92c4fe587b"],["archives/2020/09/index.html","17f294f3d3a368b01d11ca8078853d26"],["archives/2020/09/page/2/index.html","83beb0d0bd45a46582698bf1b25248af"],["archives/2020/10/index.html","ce25e0c35b8cf522854ec47f177a68c4"],["archives/2020/10/page/2/index.html","9db7b175a37db452a3d36f0092a4d252"],["archives/2020/12/index.html","3c7048347d1d5467ff947494e542f958"],["archives/2020/index.html","be3cc0d8fb44d13f48e0acd2460d57d0"],["archives/2020/page/2/index.html","d8104e0a0dfbadb63f8fa71eeb71d404"],["archives/2020/page/3/index.html","1ff6ffa41fb49ed50224ea2ede35e15c"],["archives/2020/page/4/index.html","e0525a42e995896f597a82a3f30ceaf9"],["archives/index.html","c5c53740465b39862468b5cd1cd76c2a"],["archives/page/2/index.html","7fdf0adde9f0bdb4ccbb60428cdff03e"],["archives/page/3/index.html","1d59fbd0804cfeaeea80d3a1cd35c045"],["archives/page/4/index.html","b19ca56307520c4b0a6b5b0cf81705a7"],["categories/ARM汇编/index.html","c7d75f8c3f6422e3faccc7b1b5a60eb5"],["categories/Android反编译/index.html","f21617c460e14207a88858ce2204dcfb"],["categories/CVE/index.html","a99a0e9a8a13b660d5fcef332914ddb8"],["categories/JS学习笔记/index.html","e9b7f345c08d881b8c53437d5f914a6f"],["categories/index.html","84cb0e765484331ddc46ee0cf9aa48b7"],["categories/x86汇编/index.html","2bbcb44660b874d78fac632fa99be70c"],["categories/x86汇编/page/2/index.html","a0fe0fda098204a0f132418dbc1be6c6"],["categories/固件逆向/index.html","ec5a650a33ded5a57254d74c3232f838"],["categories/硬件电路构成/index.html","4a147aa1ede3cd314cb36c4c4f2937fe"],["categories/网络通信协议/index.html","4ad90ee39e66d7e510773a2b43453ccf"],["categories/逆向/index.html","ade2aa07a7adec1ed8c31a278428f136"],["css/index.css","57ddfe330d43d455a741d80564941694"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","ad70570e3e21e13ff518216846180c26"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","9a870669c43b03cb43088683ddee21a9"],["page/2/index.html","a84b2cc52c7f77695b1230c0551d9749"],["page/3/index.html","6d12117e77ba38243cc9b3d639ff3140"],["page/4/index.html","73000dd46c4b0fa99e2bea437e0f0bd8"],["tags/AMQP协议/index.html","4dbde32a3fe96885a0c3f32e9701eb95"],["tags/ARM汇编/index.html","a4a1a76317fc8280be6810141202158b"],["tags/Android反编译/index.html","787bdeed2ff5f66d3dfed76c05bd1432"],["tags/BLE协议/index.html","4c4b77a1dcc684c596b56424112739df"],["tags/CoAP协议/index.html","d92cfce0e356884f751221bb4e9e1f1d"],["tags/JT808协议/index.html","27e2c2112aebef6a8382f50f11f3a1b8"],["tags/JavaScript/index.html","fc26721829d3f889df9bd6607bda98a1"],["tags/MQTT协议/index.html","286bcb73d0a1b63b0befeea47a5d0d75"],["tags/NFC协议/index.html","5bc037622d38c885f3f52431488362bc"],["tags/RF协议/index.html","e2404bf820323ce2b6b3d344ee9a335e"],["tags/Wi-Fi协议/index.html","e2f373f5a69f2604633d7c3752e4d5b6"],["tags/ZigBee协议/index.html","e50883417b48058df2a67b302811c340"],["tags/index.html","074e816f612108742c32b7022f97a32e"],["tags/x86汇编/index.html","7ad7775d5e8df21c309f3351043b8b8c"],["tags/x86汇编/page/2/index.html","72384d1953fe2adf9b3855c4c6b94d3d"],["tags/固件逆向/index.html","ace56dd6bf2385bd5a1ed896d5aaab05"],["tags/漏洞复现/index.html","2b2fe17e1ac8452854cf5b4f9eb2152f"],["tags/硬件电路构成/index.html","aad17852b8ef2cd59f791bc41e0748f4"],["tags/逆向（基础）/index.html","ce4076d38973bd84ac8d62c649f696ec"],["tags/逆向（调试）/index.html","7f9169bcf5932b21887a35da335d3b03"],["x86汇编学习笔记_0x01/index.html","5c7ea1312b648444debf603c9bbfea38"],["x86汇编学习笔记_0x02/index.html","ba29ab2ef9bafca6fde96eb9c7b9e1e0"],["x86汇编学习笔记_0x03/index.html","fb4df2f17d31b730d0c71a5026d7ebfa"],["x86汇编学习笔记_0x04/index.html","73cd48681b6698dd100ca317247bbab4"],["x86汇编学习笔记_0x05/index.html","e4ae4efd9dc4ea0c835165745ca989ed"],["x86汇编学习笔记_0x06/index.html","898ab59fffa85914a93e794efd194713"],["x86汇编学习笔记_0x07/index.html","a7ba9b70883207ac9d9ccba83f7f126e"],["x86汇编学习笔记_0x08/index.html","ab7e9d9b391f0768cef5eafe51df603b"],["x86汇编学习笔记_0x09/index.html","8e7d63e0d13947964b88b4e71541aea9"],["x86汇编学习笔记_0x10/index.html","7a53dc8ee7dc3484d380f81c3172e4b0"],["x86汇编学习笔记_0x11/index.html","bcb4140dea70882222425f65dd089b83"],["x86汇编学习笔记_0x12/index.html","7574b2a4be2f4b8181edc50e9a49455e"],["固件逆向01/index.html","eb4b3c2442c92f18f25de185d023c66d"],["汇编指令集/index.html","20aa0dbaf53e04fc1abcbb65c649ac6c"],["硬件电路构成01/index.html","3ac31b5a3b53c11d0f86429eaa74db9b"],["逆向-基础-笔记_0x01/index.html","9a19c48fed1286ad8b4c552b1c0a7298"],["逆向-调试-笔记_0x01/index.html","5366a5a6e30f3b5b6c39e88b36eed7cd"]];
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








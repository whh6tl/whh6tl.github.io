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

var precacheConfig = [["404.html","025700493e8c4141f23d2005f53b7409"],["AMQP协议0_1/index.html","f6a756d8d4f72587c880259cb3d17763"],["ARM汇编01/index.html","652ef617b3d1fe435f32245900566700"],["Andoird反编译01/index.html","0ba15ab4ec29d46c3ebcee72aa91ba51"],["BLE协议01/index.html","8360d112f040d32be49a87825bb99d85"],["CVE-2019-5418/index.html","06631ccf59b992145bdc795197f994a5"],["CVE-2019-9766/index.html","43b9b238c579795c0ffe6fcabb2b116d"],["CoAP协议01/index.html","ba5ef629291aa532d1d6ee0f78264b8f"],["JS_0X02/index.html","8d99f31ccf989fff7a97d7ebb25307c9"],["JS_0X03/index.html","ec3a39ad2793a378211800ea00408360"],["JS_0X04/index.html","2745d4091bdad62ac01768ab62712759"],["JS_0X05/index.html","2eb97cb5cf5f0287c37afe96c04a9a64"],["JS_0X06/index.html","0fbecfc1e1b92d859e95d7c11696995e"],["JS_0X07/index.html","7701382299ad9534d3691eec52825bb2"],["JS_0X08/index.html","b6c7e383b1e6c4e7760f1488a7440229"],["JS_0X09/index.html","97accbca45d94ff2ec936c4df3ad1a69"],["JS_0X10/index.html","f1b848955c19504e095f9416e50e3c4c"],["JS笔记(0X01)/index.html","faef7b840ce3fd69b3191e3949670e52"],["JT808协议01/index.html","128cfe3895588a187b8c9cff82602aa8"],["MQTT协议01/index.html","904ab6df3e34b70f874138992413cd1c"],["NFC协议01/index.html","6555144555d7b34b16cc8e529e7ffec4"],["RF协议01/index.html","883c39f7ff45a1a1ad985b92f1f354ba"],["Wi-Fi协议01/index.html","7babd3487dcb5700b78abdc4678c9ca3"],["ZigBee协议01/index.html","915a0b6ba906f0929e47142ae0863542"],["archives/2020/08/index.html","5abd0e98d204b758f2e4d0046a2e5760"],["archives/2020/09/index.html","4fa979f9f4f55b226e091468bfdac092"],["archives/2020/09/page/2/index.html","dca9a7eb567b8f277519f80ecd089cda"],["archives/2020/10/index.html","c09f424068a1699931a29a02925bef08"],["archives/2020/10/page/2/index.html","b2c900b0f4874c3e25c2b45868cd7d11"],["archives/2020/12/index.html","7fa4b69614f2ca2a21efd2d890d8daea"],["archives/2020/index.html","35b5a666fc9f1d4e79568dc7ad6be33a"],["archives/2020/page/2/index.html","a87938130c82ee505fe299199686787c"],["archives/2020/page/3/index.html","568c95c0e8896ca2e9af2abf95f89b8a"],["archives/2020/page/4/index.html","1fd8b83b5e3c4fa872389fd2d9942d6b"],["archives/index.html","9133cb846013e6f6a358a19961af19ed"],["archives/page/2/index.html","b23067838eff16257cf846fa11d53619"],["archives/page/3/index.html","2a3c2098b8a14f57d1bca63bcab6395c"],["archives/page/4/index.html","586680e0f48a468bf669173e793b0943"],["categories/ARM汇编/index.html","b762e425a1f324ea440ab2ff6a777b2c"],["categories/Android反编译/index.html","ad6e958b5a2ebbce8fa0c4c2b386300f"],["categories/CVE/index.html","7681cd79a752fe56ad33847782e4138a"],["categories/JS学习笔记/index.html","864f76cd334a0b6e64196c4773f65501"],["categories/index.html","124dbe66d69607fe03bf0f4e4cbe92aa"],["categories/x86汇编/index.html","795868da326652404942a81bb239d4ba"],["categories/x86汇编/page/2/index.html","b616816319dc65e3662e3a2b72f4899c"],["categories/固件逆向/index.html","a5f39e0c7b305647ce84ad78b0997fb0"],["categories/硬件电路构成/index.html","f8008f39ebb7b05a53ada1f90ebf4a2d"],["categories/网络通信协议/index.html","f7e1006f114555d9107c7ad5a02ccdc9"],["categories/逆向/index.html","c458cde6ca36bddca18d4b7204bcfc7c"],["css/index.css","57ddfe330d43d455a741d80564941694"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","f6127be31915b2f1ca2341c986341dbb"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","d361c5756117435edbc2acd3be507dfd"],["page/2/index.html","9f3ecf42dac63d77b4896bc8f6e5aa67"],["page/3/index.html","db17368b280338a0b2b9cf17a53f2115"],["page/4/index.html","f1eef72489e62dd5fa905673df4bd379"],["tags/AMQP协议/index.html","51492ff71382a7c05ec7691ffd8b5412"],["tags/ARM汇编/index.html","9a3f8fd983cc056f8d153f3db2548d1c"],["tags/Android反编译/index.html","4b98c08cbf2f998cb1fda67bf065aa57"],["tags/BLE协议/index.html","e3119cfb39fe5a7e9a5664166c520338"],["tags/CoAP协议/index.html","bcafa4667e4289da41d08959bde5aa77"],["tags/JT808协议/index.html","8cf05aa23d5c1c3850236c9a026334aa"],["tags/JavaScript/index.html","790e5260d38fd10f7e42d73ce28c4c0d"],["tags/MQTT协议/index.html","369621b4619211a8933e402b080821c9"],["tags/NFC协议/index.html","5a880a5671943bc528cecc39f8ab9633"],["tags/RF协议/index.html","2b94b756590f34a5de41e54f98e1a932"],["tags/Wi-Fi协议/index.html","87035870f73d40168d1573d9b961da64"],["tags/ZigBee协议/index.html","ef8e24fb2bfa2edd1a6f0b55ae0e1a3b"],["tags/index.html","1640c60ec6bc0fd2fab66953f8ef974e"],["tags/x86汇编/index.html","ed7fde920cb3dab75529a3046dc17bdb"],["tags/x86汇编/page/2/index.html","d4e3b69ff5ffa11d228acce8c2146d6b"],["tags/固件逆向/index.html","d96d996aa327f32139c9b86751c037b8"],["tags/漏洞复现/index.html","3269233b128d9f1185a76abb191b277c"],["tags/硬件电路构成/index.html","c1a55898e80e5def4b3a946b913fd1e7"],["tags/逆向（基础）/index.html","3c2b7ac160acd6222dd397c0b11a6242"],["tags/逆向（调试）/index.html","198184fcb08331710761b55652b9be5f"],["x86汇编学习笔记_0x01/index.html","5c7ea1312b648444debf603c9bbfea38"],["x86汇编学习笔记_0x02/index.html","ba29ab2ef9bafca6fde96eb9c7b9e1e0"],["x86汇编学习笔记_0x03/index.html","fb4df2f17d31b730d0c71a5026d7ebfa"],["x86汇编学习笔记_0x04/index.html","73cd48681b6698dd100ca317247bbab4"],["x86汇编学习笔记_0x05/index.html","e4ae4efd9dc4ea0c835165745ca989ed"],["x86汇编学习笔记_0x06/index.html","898ab59fffa85914a93e794efd194713"],["x86汇编学习笔记_0x07/index.html","a7ba9b70883207ac9d9ccba83f7f126e"],["x86汇编学习笔记_0x08/index.html","ab7e9d9b391f0768cef5eafe51df603b"],["x86汇编学习笔记_0x09/index.html","8e7d63e0d13947964b88b4e71541aea9"],["x86汇编学习笔记_0x10/index.html","7a53dc8ee7dc3484d380f81c3172e4b0"],["x86汇编学习笔记_0x11/index.html","bcb4140dea70882222425f65dd089b83"],["x86汇编学习笔记_0x12/index.html","7574b2a4be2f4b8181edc50e9a49455e"],["固件逆向01/index.html","eb4b3c2442c92f18f25de185d023c66d"],["汇编指令集/index.html","20aa0dbaf53e04fc1abcbb65c649ac6c"],["硬件电路构成01/index.html","3ac31b5a3b53c11d0f86429eaa74db9b"],["逆向-基础-笔记_0x01/index.html","9a19c48fed1286ad8b4c552b1c0a7298"],["逆向-调试-笔记_0x01/index.html","5366a5a6e30f3b5b6c39e88b36eed7cd"]];
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








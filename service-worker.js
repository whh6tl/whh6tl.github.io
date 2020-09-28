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

var precacheConfig = [["404.html","f9e9134a0ed5729d3808f416f537fd8a"],["AMQP协议0_1/index.html","08d8190df5dde12acf30c87bb4d1026a"],["ARM汇编01/index.html","652ef617b3d1fe435f32245900566700"],["Andoird反编译01/index.html","0ba15ab4ec29d46c3ebcee72aa91ba51"],["BLE协议01/index.html","8360d112f040d32be49a87825bb99d85"],["CVE-2019-5418/index.html","06631ccf59b992145bdc795197f994a5"],["CVE-2019-9766/index.html","43b9b238c579795c0ffe6fcabb2b116d"],["CoAP协议01/index.html","ba5ef629291aa532d1d6ee0f78264b8f"],["JS_0X02/index.html","8d99f31ccf989fff7a97d7ebb25307c9"],["JS_0X03/index.html","ec3a39ad2793a378211800ea00408360"],["JS_0X04/index.html","2745d4091bdad62ac01768ab62712759"],["JS_0X05/index.html","2eb97cb5cf5f0287c37afe96c04a9a64"],["JS_0X06/index.html","0fbecfc1e1b92d859e95d7c11696995e"],["JS_0X07/index.html","7701382299ad9534d3691eec52825bb2"],["JS_0X08/index.html","b6c7e383b1e6c4e7760f1488a7440229"],["JS_0X09/index.html","97accbca45d94ff2ec936c4df3ad1a69"],["JS_0X10/index.html","f1b848955c19504e095f9416e50e3c4c"],["JS笔记(0X01)/index.html","faef7b840ce3fd69b3191e3949670e52"],["JT808协议01/index.html","128cfe3895588a187b8c9cff82602aa8"],["MQTT协议01/index.html","904ab6df3e34b70f874138992413cd1c"],["NFC协议01/index.html","6555144555d7b34b16cc8e529e7ffec4"],["RF协议01/index.html","883c39f7ff45a1a1ad985b92f1f354ba"],["Wi-Fi协议01/index.html","8fb02d05ece219d818fc9c33a36dc148"],["ZigBee协议01/index.html","71bb4628fcdc20d22e10d3739b416e7c"],["archives/2020/08/index.html","0ed93193b7a0e07d399707e1205aef9b"],["archives/2020/09/index.html","68c069573fcd4e4313fca16b6723a369"],["archives/2020/09/page/2/index.html","dd691e0ee63a6b21953b4c152db6fe0f"],["archives/2020/10/index.html","41292773c85f058faa89e2fba27ab83d"],["archives/2020/10/page/2/index.html","3a0b29d194ba3135dcf84c72a99d2500"],["archives/2020/12/index.html","da55f9b0e61df39abe448945f949d62b"],["archives/2020/index.html","51bf814a97cb26871571a27703a6131b"],["archives/2020/page/2/index.html","76351af1f40a54ba412e2325402ff435"],["archives/2020/page/3/index.html","9430bb4e1568f33a4b3e42e26029f28a"],["archives/2020/page/4/index.html","078364cceda948507b5d19409d385b69"],["archives/index.html","0b2ce9d18f153114323e109b85434fe3"],["archives/page/2/index.html","3709c491f9eab828dab73c0204a19775"],["archives/page/3/index.html","65533efd6d3c19474ab6549ea64da699"],["archives/page/4/index.html","b8d2a7ae86f97d04250529d0d9fc6690"],["categories/ARM汇编/index.html","77c95cd3a3b6647ef49443ca8a31a439"],["categories/Android反编译/index.html","57719c27ac03fe8b224a281efafb571f"],["categories/CVE/index.html","08f0a8a30b9a2a5cad7665b585cb7f1b"],["categories/JS学习笔记/index.html","329b1d301423ead718de506fa146588d"],["categories/index.html","db80baeb520b2209777d910289f611ba"],["categories/x86汇编/index.html","fa94265e4bd32f1dae0df81e8a9dcb03"],["categories/x86汇编/page/2/index.html","9d634f6ec7675a63d7605859a2ed2f63"],["categories/固件逆向/index.html","459c5f2b1efa23da7316f48f779193cc"],["categories/硬件电路构成/index.html","cb18a0b2611125c6ca6e1cb8322a5382"],["categories/网络通信协议/index.html","b7c9a10148b2087b668d8fb20ecc42ed"],["categories/逆向/index.html","2882c52ec7d83d09d96a9bcf83a6878a"],["css/index.css","57ddfe330d43d455a741d80564941694"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","86b0f26d099d66eea0b0a428c626036a"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","6d62778f1f28dbc1b6c635f766c5a568"],["page/2/index.html","ed0f5ea3e1b8e703a7aca989c74962b3"],["page/3/index.html","7cb7a28848ce9671ed59d3742efdd7d6"],["page/4/index.html","e6acaf500b6c17ebdc40a86ad9f938e8"],["tags/AMQP协议/index.html","236f2b2bc4a108cbf6801815b7b275f6"],["tags/ARM汇编/index.html","3bfa2ff974c8cae1ee77b5462769e680"],["tags/Android反编译/index.html","f3d060525ea7ca0731a1d5624fad1c8a"],["tags/BLE协议/index.html","ef57c71a35b2745dd94d6f2e6638b88e"],["tags/CoAP协议/index.html","68fadff089bad4514b3c961936c3896d"],["tags/JT808协议/index.html","9aa3e2371f9ea6e726e211ccc6d2a0ce"],["tags/JavaScript/index.html","d88d665ae73f6363cb6e0ecf24815323"],["tags/MQTT协议/index.html","9b4964996d92bd687d8066fab9602850"],["tags/NFC协议/index.html","5c2933be2eea6222034ec5b01abeb00d"],["tags/RF协议/index.html","20abe4facac21a0c2995cfce5ab38ed5"],["tags/Wi-Fi协议/index.html","a535211061c821202aaf647e4d85afc1"],["tags/ZigBee协议/index.html","7010f1730d5c2d16358a038002ae120c"],["tags/index.html","44383ede2888abca71b6c65fc09cca75"],["tags/x86汇编/index.html","160273b2ba43984e733c592ed9b6d406"],["tags/x86汇编/page/2/index.html","9fd01750715d201f322de3ac149aa66c"],["tags/固件逆向/index.html","c032d360e42cd242f3e48c87c957dd59"],["tags/漏洞复现/index.html","c36183f33caa7ebb1d3731d6735d9fb9"],["tags/硬件电路构成/index.html","f2fcca045759bb4d88710773e4314a2c"],["tags/逆向（基础）/index.html","979aa57dd5a209eb99a627399b3821ba"],["tags/逆向（调试）/index.html","ec2427749f49b4ba705f2a3cd91a80fd"],["x86汇编学习笔记_0x01/index.html","5c7ea1312b648444debf603c9bbfea38"],["x86汇编学习笔记_0x02/index.html","ba29ab2ef9bafca6fde96eb9c7b9e1e0"],["x86汇编学习笔记_0x03/index.html","fb4df2f17d31b730d0c71a5026d7ebfa"],["x86汇编学习笔记_0x04/index.html","73cd48681b6698dd100ca317247bbab4"],["x86汇编学习笔记_0x05/index.html","e4ae4efd9dc4ea0c835165745ca989ed"],["x86汇编学习笔记_0x06/index.html","898ab59fffa85914a93e794efd194713"],["x86汇编学习笔记_0x07/index.html","a7ba9b70883207ac9d9ccba83f7f126e"],["x86汇编学习笔记_0x08/index.html","87306e6dc45af5226709f61086b75f2f"],["x86汇编学习笔记_0x09/index.html","6a8827e442ef74db46d811dadeae78b8"],["x86汇编学习笔记_0x10/index.html","7115d7c218481aa183a033db4e439a26"],["x86汇编学习笔记_0x11/index.html","bcb4140dea70882222425f65dd089b83"],["x86汇编学习笔记_0x12/index.html","1482cc17fc9955503eef94eda6416837"],["固件逆向01/index.html","ff67fc4e14c5b31cbf1c202a766c672d"],["汇编指令集/index.html","8bf044544e62b119a6b19175666b735f"],["硬件电路构成01/index.html","adebb069e4fee52c680f8650e94b75a9"],["逆向-基础-笔记_0x01/index.html","49ddfa77f5b618d6ec99c38a067830be"],["逆向-调试-笔记_0x01/index.html","d20c6ccdd89983988b814a6f91d86e1c"]];
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








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

var precacheConfig = [["404.html","9f0d4f61cc92d307e5f56a43419dc893"],["AMQP协议0_1/index.html","25931a8c5c3c92bdbbe08f6590e49273"],["ARM汇编01/index.html","945b630f9c100507fc86e4bbe11c8012"],["ARM汇编02/index.html","d7661c748602ad4d4ed1860eac2e8fc6"],["ARM汇编指令集/index.html","0c4f9f9d528925d7a025284152206052"],["Andoird反编译01/index.html","3a8f785ee0f3ce2a7de078fb2a6a1edb"],["BLE协议01/index.html","11926a07ccd9bb7631865bb7b53af3d4"],["CVE-2019-5418/index.html","a7f97f2b39f0981bb5ae4d878b621824"],["CVE-2019-9766/index.html","30329d0a8498b181011d9e54be337505"],["CoAP协议01/index.html","67a846b52748d4c6fbd9a5437e2c5941"],["JS_0X02/index.html","1a269c2b96a8fb8261f0dc8261410de2"],["JS_0X03/index.html","9d9f80aeaa41c04b699d4d32e88a2cec"],["JS_0X04/index.html","90d9611678e48d43c9978962af78cb6f"],["JS_0X05/index.html","f5fa45427fb8af9ef1a97c4cd197eec0"],["JS_0X06/index.html","b0c3542a01688124904498c2014bb6ef"],["JS_0X07/index.html","0814b6f440b7e5f42ed61f7d48e8513d"],["JS_0X08/index.html","b0389195e8b38f17c488417a6f19b027"],["JS_0X09/index.html","306f7f32551320ff7f8d4ce0e00a2211"],["JS_0X10/index.html","ae4083826754d9650ca45e14b62855c7"],["JS笔记(0X01)/index.html","b8a84ff9e724b53ec1b4d78b8db8117c"],["JT808协议01/index.html","97c9a0428708329595b516a8458442c3"],["MQTT协议01/index.html","b92e398fd755fc90cbec6f32833c72ae"],["NFC协议01/index.html","1a80721485b7b412e4971ff2f4fe6384"],["RF协议01/index.html","2628bc90814df8d7797db7b93d5cfaa2"],["Wi-Fi协议01/index.html","78d99690924954f2e93138eb6e466e9c"],["Wi-Fi协议02/index.html","b133a73f01f859ec51b9cb6fdcee2568"],["Wi-Fi协议03/index.html","7136e89c18661298d22a0f6ed74de260"],["Wi-Fi协议04/index.html","3a29e9d46633785df0ce5f72d26a16b7"],["Wi-Fi协议05/index.html","d32e82fb38de05052fc894fffb176d0e"],["Wi-Fi协议06/index.html","a1158068810d665d8e2efd33c6ab4d0e"],["Wi-Fi协议07/index.html","3bee7ee3ea0d0cbc0224c3e4f12ea676"],["Wi-Fi协议08/index.html","d1d686618429ba1bc5db376de5fe1fc7"],["ZigBee协议01/index.html","fd5b9b435f680a59788663a0df53c143"],["archives/2020/08/index.html","52deaf0ea30c3d2f6d495d02857a3dfa"],["archives/2020/09/index.html","c44c4b1893959af9a3a65119a7acf402"],["archives/2020/09/page/2/index.html","d3bef144ca1736b0b02972d103a11f14"],["archives/2020/09/page/3/index.html","40a8ff8e9ab49543a83e3a26812d94c2"],["archives/2020/10/index.html","285b9c8c41ec51470aa8232703e27d4c"],["archives/2020/10/page/2/index.html","a1dcd4aa4fc7936a266042789ff57dd1"],["archives/2020/11/index.html","8d24aa836e06d91c9816415565c3dfe9"],["archives/2020/12/index.html","1f6dc0650a97a5ec3db383ddab8238ea"],["archives/2020/index.html","43230aba086f23477ca2947553ef9a0d"],["archives/2020/page/2/index.html","80246aa0dd4d2810a177f9ee7c28d3d2"],["archives/2020/page/3/index.html","05400e0f5b71dcce0f5d2a5dd817c6a1"],["archives/2020/page/4/index.html","43ccf29e30d6e38b13a1db93fd2c7dd6"],["archives/2020/page/5/index.html","389646165e8a08f9f37f439778da304c"],["archives/2020/page/6/index.html","aea87a130ba5f33d8c5a4bee35e87baa"],["archives/2020/page/7/index.html","22374e2bdfc40a7bc8448d7cf9a70d55"],["archives/index.html","8a3f58876c80d6e599277352e9a9340b"],["archives/page/2/index.html","c60a44d894417cb37e7c9f73362ed48a"],["archives/page/3/index.html","1addb7791ef839ce516f23d31dc14431"],["archives/page/4/index.html","64f714a1aecd1aef5d3ee208c43ff0e0"],["archives/page/5/index.html","a0a909983a100236a45ab28c66415c08"],["archives/page/6/index.html","799a46d3a859da94b06c3ab061e7a2d1"],["archives/page/7/index.html","7242e5661d39bca462f9381539f38fbc"],["categories/ARM汇编/index.html","eac72e670f91a91213ec4a438809bb98"],["categories/Android反编译/index.html","662536e636f8947dfbec2791a96b8033"],["categories/CVE/index.html","d7e092749b98a25b09b92c991bc8d093"],["categories/JS学习笔记/index.html","18ff9d070cd51344bde71c4f8086dc32"],["categories/index.html","b20815fb86920d63ed3f58cefa9ec7fc"],["categories/x86汇编/index.html","14d3a6f059cc179573e73242ca0c4449"],["categories/x86汇编/page/2/index.html","904861ac10dbb02d4a5f4948439b2810"],["categories/固件逆向/index.html","6bb414f230de310d31c64446cb0131d0"],["categories/智能硬件安全/index.html","4f27ca947f6db8619920bc789a7c4a9e"],["categories/硬件电路构成/index.html","55966a1942c86b9572d3b221d3ad2970"],["categories/网络通信协议/index.html","7f863ffee5d7ed66e6428c83729ad427"],["categories/网络通信协议/page/2/index.html","648b02ae66727a05764c9483a3612ca6"],["categories/逆向/index.html","bdacdd0c054a7f6aba3682183b7c2b02"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","115f1134cc9e8e51e28a53cb69790423"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","e559832672a530bcbea784bb4ba6480a"],["page/2/index.html","594152c5347700f4b58347557dbffd2c"],["page/3/index.html","908bc672a2092758a1c27598a716733a"],["page/4/index.html","d693ea9ab3d3fe6954af7f99bf999603"],["page/5/index.html","7704c8e3bb33794b49d70f7496c7ace6"],["page/6/index.html","b2e2ce8868da6370e269b35ec0fc9630"],["page/7/index.html","cdab259ca1f2a776d2dd7c6732d7255e"],["tags/AMQP协议-暂无/index.html","72a58186269bee1944f3e2a7951390a7"],["tags/ARM汇编/index.html","c0575c88480bda4e3cdde1891e455f2e"],["tags/Android反编译/index.html","5fd8166db161411aef1020a534763a95"],["tags/BLE协议/index.html","3f8c8c75bb544ce200acb2ea32b0aeb5"],["tags/CoAP协议/index.html","fc2e3bfeae0ecee22088121a73dea9aa"],["tags/JT808协议/index.html","940f5500edf974ae92023ab30d9ac395"],["tags/JavaScript/index.html","b56af692057f00db7440659813f33310"],["tags/MQTT协议/index.html","34b5f46998b004de3ae2601c3032eadd"],["tags/NFC协议/index.html","0671fcf00c797fe7fd51ee0140e857ef"],["tags/RF协议/index.html","9610a7a1ad5fa7f21cd9ef96dca086bb"],["tags/Wi-Fi协议/index.html","de0df91f113c283d6d318c6e73a06f02"],["tags/ZigBee协议/index.html","bf959ea16a2d020958b07e57484f5f8e"],["tags/index.html","174f8ba99e511230f2248442de71b3d2"],["tags/x86汇编/index.html","e71ae494d1b29a254725c77e3c784c77"],["tags/x86汇编/page/2/index.html","c614149ceef6605f2ebea00507f83e28"],["tags/固件逆向/index.html","0f428e39f2a2749e234143ec84acee11"],["tags/智能硬件安全/index.html","d0295488726feada04bb6e0ab10f24a9"],["tags/漏洞复现/index.html","dd78f79338560c59782543aad2563474"],["tags/硬件电路构成/index.html","60be65279897723a3dbecf597fd7e245"],["tags/逆向（基础）/index.html","3692f888a866df6dd2e97b6fa0dfdaca"],["tags/逆向（调试）/index.html","ae334bab53fcd4838cc57c3fd234ed87"],["x86汇编学习笔记_0x01/index.html","a59e9ddb4d0ada3278af546802e13281"],["x86汇编学习笔记_0x02/index.html","52b55bee08d726eae4c727126d5c0ee1"],["x86汇编学习笔记_0x03/index.html","3a61a671c16425130c7ed252de4b5ca7"],["x86汇编学习笔记_0x04/index.html","d4baa3a37c3ea5f0a3cf44fa9d3a81f2"],["x86汇编学习笔记_0x05/index.html","a5e968deb672a1643cf69de4a3363763"],["x86汇编学习笔记_0x06/index.html","a996eae413b9b820ffc705f753d467e7"],["x86汇编学习笔记_0x07/index.html","e4f041eb78c9b0c394a0ef8585890c8c"],["x86汇编学习笔记_0x08/index.html","08ba8c2bc6e4abd131635020fb9cd1f7"],["x86汇编学习笔记_0x09/index.html","85c7deb0a8d2149e3a3bdf2b596613d1"],["x86汇编学习笔记_0x10/index.html","e2d5026c78803a0101967bfe5d188dd3"],["x86汇编学习笔记_0x11/index.html","a418d3d8c60e8ce748489267957004e4"],["x86汇编学习笔记_0x12/index.html","50bfec2d0e39a517179d00302c4fbca7"],["x86汇编学习笔记_0x13/index.html","58484fd976148acd9d3dd87a91667cc9"],["固件逆向01/index.html","30c955834a9debe26afcb7e7d7ceb30c"],["汇编指令集/index.html","bdd7356fc3751e5bae4eb757b3ce4c37"],["硬件智能安全(0x01)/index.html","eddd23b53f15f1154f484d62082c04a6"],["硬件智能安全(0x02)/index.html","adcda5e147608a74c471f9d7418987d2"],["硬件智能安全(0x03)/index.html","97da98237d6525a66e66ae9ac7fd6b7d"],["硬件智能安全(0x04)/index.html","a11f1331a8f03fbaaff6530b4949cde1"],["硬件智能安全(0x05)_/index.html","255a96484829ddbae8d9e7f787a0b6c1"],["硬件智能安全(0x06)_/index.html","00e0dc99d43c8ddc08b0398918e3954a"],["硬件智能安全(0x07)_/index.html","28d747b8c068ebd7867ea47fbb4c2a97"],["硬件智能安全导航/index.html","cc690210c3b1e406502a17be6c51d750"],["硬件电路构成01/index.html","72c9d1d53d211443c2345800a748f341"],["逆向-基础-笔记_0x01/index.html","6cde42e05fb0d42c775c2402fc0235fd"],["逆向-调试-笔记_0x01/index.html","20a5408f7d45a9dc8a5054aa99d1aaab"],["逆向-调试-笔记_0x02/index.html","be13bcfd63c3c6fbc8794970439ca0bd"],["逆向-调试-笔记_0x03/index.html","89c4d70c84243a59cc9d57b62a5353e0"],["逆向-调试-笔记_0x04/index.html","29a0fc16db8685adac0c8446f125e71f"]];
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








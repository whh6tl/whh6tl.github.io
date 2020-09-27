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

var precacheConfig = [["2020/08/23/CVE-2019-5418/index.html","7524dedce46fa4a5deca7d8eaea40a96"],["2020/08/25/CVE-2019-9766/index.html","af76e476afbdcc57820ef84b26d8ca7a"],["2020/08/25/JS笔记(0X01)/index.html","67f304efd756350a0bf62a5b536810ca"],["2020/08/26/JS_0X02/index.html","9d434f43bbdcdc23f989a88e55a1c740"],["2020/08/27/JS_0X03/index.html","b68d2968635ff98345cb80f0d33e99da"],["2020/08/28/JS_0X04/index.html","c984ffb63142b3a5a53b9a3c3038d71f"],["2020/08/29/JS_0X05/index.html","c74221e6f9e105bee0f18fbd6fc2a080"],["2020/08/30/JS_0X06/index.html","9b4d6a52e553cfd7b2b3027c58bf66a8"],["2020/08/31/JS_0X07/index.html","5f428a2aa8a30aa76a0aa2b59c4b23ea"],["2020/09/01/JS_0X08/index.html","43885057123003576f7cac3cb6b6bda3"],["2020/09/02/JS_0X09/index.html","e4b744b6be218559166a422ccaec8058"],["2020/09/02/x86汇编学习笔记_0x01/index.html","c420fc115773ab7eb7de82ffe4c1c10e"],["2020/09/03/JS_0X10/index.html","94829e540d8dafdcda7a33b88da87bb1"],["2020/09/03/x86汇编学习笔记_0x02/index.html","4f06bc806cef079da464621cef8be98e"],["2020/09/04/x86汇编学习笔记_0x03/index.html","c4cd4767d59fd4b7cea462c03b4ae2a5"],["2020/09/05/x86汇编学习笔记_0x04/index.html","a67c36375bceb774984231f605af3f01"],["2020/09/06/x86汇编学习笔记_0x05/index.html","bda54fa4ebaea01c66bb392cc97a5143"],["2020/09/07/x86汇编学习笔记_0x06/index.html","b17de621471d46d0bc1fd17fda0e0601"],["2020/09/08/x86汇编学习笔记_0x07/index.html","d47742f5f80222a9526f643ebd94729c"],["2020/09/09/x86汇编学习笔记_0x08/index.html","b86c024817c227f3232df26bf44422fc"],["2020/09/10/x86汇编学习笔记_0x09/index.html","28d6f5012a0379e61a6f88bf75bfa93e"],["2020/09/10/逆向-基础-笔记_0x01/index.html","7b54faf5121cb47ef9103f1676b8b1a6"],["2020/09/21/逆向-调试-笔记_0x01/index.html","d2288fd22b9261ac676186a2e1667669"],["2020/09/26/x86汇编学习笔记_0x10/index.html","27039a8b21a5233c2217d423316d3847"],["2020/09/26/x86汇编学习笔记_0x11/index.html","98bfc5c96411564974155cab2c3c3b2b"],["2020/10/01/AMQP协议0_1/index.html","bdd24e476af8673e8581908a48b71809"],["2020/10/01/ARM汇编01/index.html","172a717e684f63bc17a060bd55600e54"],["2020/10/01/Andoird反编译01/index.html","ad34070b055cf6a377243d36193e96ab"],["2020/10/01/BLE协议01/index.html","bef2578281b7fc49f6914814b1319d3e"],["2020/10/01/CoAP协议01/index.html","e7c3ee4ddfc7b7ab82c6d89279edc38f"],["2020/10/01/JT808协议01/index.html","e205351dbcaf81e16e8da277fbd203ab"],["2020/10/01/MQTT协议01/index.html","4aaeecf154b9d9b3f0fd8272cf655198"],["2020/10/01/NFC协议01/index.html","41c1a65dcd60bf8ecfc67b41e44e1be3"],["2020/10/01/RF协议01/index.html","745a981e3a32d08ad7a468307b3ed239"],["2020/10/01/Wi-Fi协议01/index.html","49e989a0eca15d364a7ddee0e80efa3d"],["2020/10/01/ZigBee协议01/index.html","d1a27935606b0e738dd8936477d429cd"],["2020/10/01/固件逆向01/index.html","5986f8f972b8535a43a86632af08dc0d"],["2020/10/01/硬件电路构成01/index.html","55c15f5a8fc26fe532052d9e02fe89d2"],["2020/12/31/汇编指令集/index.html","261256bf45568533d12c797fdf7f88f2"],["404.html","827469846de85db2437bcb12ea0d2eec"],["archives/2020/08/index.html","f718a261571a883d1bbdb24353b97bd7"],["archives/2020/09/index.html","5550800f2d382d48e814e2e213abe527"],["archives/2020/09/page/2/index.html","98a313c8035fb9b1e349170035fdf644"],["archives/2020/10/index.html","688dd3494e4ea54a5c425b8566de47c8"],["archives/2020/10/page/2/index.html","aaa5f8379578d0b7f35f208ce363016f"],["archives/2020/12/index.html","0feb5617efc91d1196e50fb505609cd5"],["archives/2020/index.html","2d5e2298e3db063de383b3616f1010ed"],["archives/2020/page/2/index.html","e01f05757ab05a713a328b40e1937847"],["archives/2020/page/3/index.html","469d3e158331a20672ee53f72e689315"],["archives/2020/page/4/index.html","007816dd788f0be3e521240bad07011b"],["archives/index.html","c2f8832c0370b0189d48a93684c36ff9"],["archives/page/2/index.html","c377f4cf36698379aa450f1582eba5dc"],["archives/page/3/index.html","ed328785161ee38df749a028a778c902"],["archives/page/4/index.html","d93fc47f693267b4a7c72cd973cab983"],["categories/ARM汇编/index.html","d8314e261c22362fa1de8ce7b206029d"],["categories/Android反编译/index.html","6cd861fecfb7d59f1b1f454641cad0ab"],["categories/CVE/index.html","f273d250a153de05a4326442670e6bc4"],["categories/JS学习笔记/index.html","4ae49000f35d455e3ad9a7682400f8dd"],["categories/index.html","6eddc7830b23f46e4f8462d26fdac683"],["categories/x86汇编/index.html","1104e43ddf1895870eb7f48337414a78"],["categories/x86汇编/page/2/index.html","dd4fda09706f1d7b81abda86bfd4a31a"],["categories/固件逆向/index.html","5ef6394ac476009f49686c7254c4023b"],["categories/硬件电路构成/index.html","0db24503536fd852b102e1b459d8fc7e"],["categories/网络通信协议/index.html","2b688d4a8d7f8bece20897d7048e0f87"],["categories/逆向/index.html","38db0b7db18a47138dd4a0fc6652836d"],["css/index.css","e190ce4fce7067c6a08b6350927527e2"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","aa3950b82a535af22ecf51308c417278"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","aeb50400fc5027f9265b6ff51360eb39"],["page/2/index.html","427847ef6e90246b6a4567e1f0ba93ee"],["page/3/index.html","41eb5c2d5d8d81309dd2b433a9e62896"],["page/4/index.html","75ca85e7f4c8261d3001de100fec3f4a"],["tags/AMQP协议/index.html","40d7cd4c91d4ef6a85aaa5b6db3fbe84"],["tags/ARM汇编/index.html","27829cfe2498bb9dcbd4aba54fd28bd8"],["tags/Android反编译/index.html","8754d011c8b33815d4b8dc62643442c8"],["tags/BLE协议/index.html","ceec7db8bf23e2be110550b19662eb33"],["tags/CoAP协议/index.html","d3c6eb64c5faa4a7e62bbea61eaf917e"],["tags/JT808协议/index.html","b62cd3e79455b1e95d0c85cc34f012da"],["tags/JavaScript/index.html","3d5376313d7d8535aaaccb4c30fe3d53"],["tags/MQTT协议/index.html","94e1750302959532796818dad019818d"],["tags/NFC协议/index.html","1a2b2dd29a023aeb2584091706b62aec"],["tags/RF协议/index.html","dfd10a7c72478ff538694d7d7e9130e7"],["tags/Wi-Fi协议/index.html","18db0b24f920f445ed9d298b87f64fcd"],["tags/ZigBee协议/index.html","f64064fb4c6f523488bc6a55dcd99026"],["tags/index.html","f8ff63dc1640ce2dfcf9c8108e3216ad"],["tags/x86汇编/index.html","5e5b890409524836d15eb7f2a514ac93"],["tags/x86汇编/page/2/index.html","393889559956cff09788cc796d6a3983"],["tags/固件逆向/index.html","862a5bb58a5c27eb0bf7bf79188cb7c6"],["tags/漏洞复现/index.html","2a821ed0c257d943c79b4aed2e9ed5ec"],["tags/硬件电路构成/index.html","b8f93c78e17cccf579400a3f0fc80861"],["tags/逆向（基础）/index.html","1d58d87f68d9457bc91d345c688fe990"],["tags/逆向（调试）/index.html","9ec68fd72d048e878c9a2d73e36355fd"]];
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








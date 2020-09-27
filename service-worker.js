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

var precacheConfig = [["2020/08/23/CVE-2019-5418/index.html","7524dedce46fa4a5deca7d8eaea40a96"],["2020/08/25/CVE-2019-9766/index.html","af76e476afbdcc57820ef84b26d8ca7a"],["2020/08/25/JS笔记(0X01)/index.html","67f304efd756350a0bf62a5b536810ca"],["2020/08/26/JS_0X02/index.html","9d434f43bbdcdc23f989a88e55a1c740"],["2020/08/27/JS_0X03/index.html","b68d2968635ff98345cb80f0d33e99da"],["2020/08/28/JS_0X04/index.html","c984ffb63142b3a5a53b9a3c3038d71f"],["2020/08/29/JS_0X05/index.html","c74221e6f9e105bee0f18fbd6fc2a080"],["2020/08/30/JS_0X06/index.html","9b4d6a52e553cfd7b2b3027c58bf66a8"],["2020/08/31/JS_0X07/index.html","5f428a2aa8a30aa76a0aa2b59c4b23ea"],["2020/09/01/JS_0X08/index.html","43885057123003576f7cac3cb6b6bda3"],["2020/09/02/JS_0X09/index.html","e4b744b6be218559166a422ccaec8058"],["2020/09/02/x86汇编学习笔记_0x01/index.html","c420fc115773ab7eb7de82ffe4c1c10e"],["2020/09/03/JS_0X10/index.html","94829e540d8dafdcda7a33b88da87bb1"],["2020/09/03/x86汇编学习笔记_0x02/index.html","4f06bc806cef079da464621cef8be98e"],["2020/09/04/x86汇编学习笔记_0x03/index.html","c4cd4767d59fd4b7cea462c03b4ae2a5"],["2020/09/05/x86汇编学习笔记_0x04/index.html","a67c36375bceb774984231f605af3f01"],["2020/09/06/x86汇编学习笔记_0x05/index.html","bda54fa4ebaea01c66bb392cc97a5143"],["2020/09/07/x86汇编学习笔记_0x06/index.html","b17de621471d46d0bc1fd17fda0e0601"],["2020/09/08/x86汇编学习笔记_0x07/index.html","d47742f5f80222a9526f643ebd94729c"],["2020/09/09/x86汇编学习笔记_0x08/index.html","b86c024817c227f3232df26bf44422fc"],["2020/09/10/x86汇编学习笔记_0x09/index.html","28d6f5012a0379e61a6f88bf75bfa93e"],["2020/09/10/逆向-基础-笔记_0x01/index.html","7b54faf5121cb47ef9103f1676b8b1a6"],["2020/09/21/逆向-调试-笔记_0x01/index.html","d2288fd22b9261ac676186a2e1667669"],["2020/09/26/x86汇编学习笔记_0x10/index.html","27039a8b21a5233c2217d423316d3847"],["2020/09/26/x86汇编学习笔记_0x11/index.html","98bfc5c96411564974155cab2c3c3b2b"],["2020/10/01/AMQP协议0_1/index.html","2308a7dabf8fa1761553dc0b6c2cb109"],["2020/10/01/ARM汇编01/index.html","172a717e684f63bc17a060bd55600e54"],["2020/10/01/Andoird反编译01/index.html","ad34070b055cf6a377243d36193e96ab"],["2020/10/01/BLE协议01/index.html","bef2578281b7fc49f6914814b1319d3e"],["2020/10/01/CoAP协议01/index.html","e7c3ee4ddfc7b7ab82c6d89279edc38f"],["2020/10/01/JT808协议01/index.html","e205351dbcaf81e16e8da277fbd203ab"],["2020/10/01/MQTT协议01/index.html","4aaeecf154b9d9b3f0fd8272cf655198"],["2020/10/01/NFC协议01/index.html","41c1a65dcd60bf8ecfc67b41e44e1be3"],["2020/10/01/RF协议01/index.html","745a981e3a32d08ad7a468307b3ed239"],["2020/10/01/Wi-Fi协议01/index.html","49e989a0eca15d364a7ddee0e80efa3d"],["2020/10/01/ZigBee协议01/index.html","d1a27935606b0e738dd8936477d429cd"],["2020/10/01/固件逆向01/index.html","5986f8f972b8535a43a86632af08dc0d"],["2020/10/01/硬件电路构成01/index.html","55c15f5a8fc26fe532052d9e02fe89d2"],["2021/09/01/汇编指令集/index.html","7a0ec1e13503eb2a9e21920d4c6c4ab7"],["404.html","7d2c26cb7b93d955b857a1361e261943"],["archives/2020/08/index.html","3467e85d653b172d05a8dfbe5d6ca884"],["archives/2020/09/index.html","805161f60e4e599a2ed46c0609918526"],["archives/2020/09/page/2/index.html","08bdd568c0299fd5170c9886efa3a890"],["archives/2020/10/index.html","82f04fb9a796c7cf5b6340fdc1cc6679"],["archives/2020/10/page/2/index.html","cee47240747f96054161532c65e23a6e"],["archives/2020/index.html","fe9831758233bcda7929205786ff42aa"],["archives/2020/page/2/index.html","b1cde0482ec76620a200d67a2f7acd13"],["archives/2020/page/3/index.html","cbc044040cec4383767945307f59a1de"],["archives/2020/page/4/index.html","0692edc4034a426f4e922f318e36f677"],["archives/2021/09/index.html","019ef27795e2a3a891303753edf33911"],["archives/2021/index.html","2480ccf4907b45ccaa095de88fb89394"],["archives/index.html","5710f3cabff2d1570f950336342f0e03"],["archives/page/2/index.html","723a5fdd14d0fa6eedb10479eb406329"],["archives/page/3/index.html","131f2d311a7a9f0d5377f65e0f792093"],["archives/page/4/index.html","ddcfe0757c9d5266ae3aecb26a9d93bd"],["categories/ARM汇编/index.html","be1fa3a513a35e4ec361f8cc698e4487"],["categories/Android反编译/index.html","676ac485757ad4b6ba512d0d3e0d7e1e"],["categories/CVE/index.html","4d03510e45ddc64945627a718f42e92e"],["categories/JS学习笔记/index.html","58b07115fb2ebd0e4ac09cd164c796c3"],["categories/index.html","c6e729f653dd2e8bbcffde5767491a80"],["categories/x86汇编/index.html","806238fbc146537d1e99888b65d6489e"],["categories/x86汇编/page/2/index.html","1961f35c1e74a73ea4b658a641dd719a"],["categories/固件逆向/index.html","19b049b81d180d397e13700ca3b95009"],["categories/硬件电路构成/index.html","0fc025d30068df7e746479d21110ad44"],["categories/网络通信协议/index.html","70fbb89907232fa90190b8538ed2838b"],["categories/逆向/index.html","872a980c08eabad712afb044f83c971f"],["css/index.css","e190ce4fce7067c6a08b6350927527e2"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","2f6da19dec234fac1e2bf051a31c6979"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","e28d59997468a118ebdb19a82c57a7d3"],["page/2/index.html","69edd78384ad9ef2520d10651d9b24c5"],["page/3/index.html","57a2df426fedcb217c40247ebb350777"],["page/4/index.html","505f90aa760266c1ff4a3f4470f1a1a8"],["tags/AMQP协议/index.html","82505ea8faeddc45704292957275add3"],["tags/ARM汇编/index.html","cc1d5cea8f7f6f76def038bd11304922"],["tags/Android反编译/index.html","3594c367ca3af37dbfb88cac43f63b1e"],["tags/BLE协议/index.html","e104cc55251b50660dbdfc72f20d0adb"],["tags/CoAP协议/index.html","a50f22d8e60f87a4fb5c14f5e176562a"],["tags/JT808协议/index.html","7dfa2173254cbc3115ad08be7599f941"],["tags/JavaScript/index.html","c7e6e3256b2fd2ef200296ffa83d00eb"],["tags/MQTT协议/index.html","d32e84faafb8f9d09c345f36cb7b501e"],["tags/NFC协议/index.html","de0e19186ac64c42fd27943111cd3eea"],["tags/RF协议/index.html","db80d79ebb4384a292f0478fba30499f"],["tags/Wi-Fi协议/index.html","0f63580b92334251ab63fe6842f1bb18"],["tags/ZigBee协议/index.html","646eab103bbeb9ac1d5f81ab351b1995"],["tags/index.html","2b4bfb5f4caeac209900325badc74fc3"],["tags/x86汇编/index.html","b015194901efa6a7639c212fa4924252"],["tags/x86汇编/page/2/index.html","885f41f5d6f95653d07580428e528153"],["tags/固件逆向/index.html","dea5637ea42e69a3d2dfbfa10a3165e8"],["tags/漏洞复现/index.html","d17e77521e50fd5501e404a17917516b"],["tags/硬件电路构成/index.html","48fb3087759a9e14b4e2fce375be0a32"],["tags/逆向（基础）/index.html","7b6d5a1dc4d947ee215e29d27ec779c4"],["tags/逆向（调试）/index.html","c57b33fd1b1e922116592bced91eaeae"]];
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








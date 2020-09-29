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

var precacheConfig = [["404.html","8e71b9bc3e9d41dcf41a8358c090c57b"],["AMQP协议0_1/index.html","a52ea514f0b2b6bba08263145aabd92a"],["ARM汇编01/index.html","ab4b22a8e9b17d449eafcf363c4fa27a"],["Andoird反编译01/index.html","16eb46c4dce0dd1b9d7530a0feef5e17"],["BLE协议01/index.html","2fd28f0c4216e6dccec3e778bca2ca98"],["CVE-2019-5418/index.html","98aa1c409157e6482d52ae4807a2c567"],["CVE-2019-9766/index.html","f5ddb423afb64f0d4ec476f3034b2664"],["CoAP协议01/index.html","276a2cc406fd742a7fe87902b0e0adb8"],["JS_0X02/index.html","b0bfd8315fd7f5e01f5a8584a4d39959"],["JS_0X03/index.html","c65371caf3a43a4db5744b4cb8f2c8e6"],["JS_0X04/index.html","4e1c5f37a676fb5aade4102a22140905"],["JS_0X05/index.html","a06ccf642d2f09378bb8d95d18b047e0"],["JS_0X06/index.html","e358e6f4105119ca1c187027bdc46e02"],["JS_0X07/index.html","78c05e0951b5c408de5a54e7faed81d7"],["JS_0X08/index.html","0935856cb75f5273d84e00039b9ad8d7"],["JS_0X09/index.html","d83776aacea82e7bc220f2c33c2078b5"],["JS_0X10/index.html","bdb3aaced1e0a5b970abf7966332d2d2"],["JS笔记(0X01)/index.html","bfd110cc04b600a81e82ff790f5bf082"],["JT808协议01/index.html","30e1ad069366dae1839a3798a9fcbbe3"],["MQTT协议01/index.html","96e11dac9737eaabcf57821237638db3"],["NFC协议01/index.html","3a1aac2a8994a08d9304f46541410efa"],["RF协议01/index.html","4521febab2bdd61119085a2bdd0dac9d"],["Wi-Fi协议01/index.html","963b6aa476420bd2766ba3de4cf0750a"],["ZigBee协议01/index.html","ac43fd835b2dd5c0cbfd915dadd97083"],["archives/2020/08/index.html","c4c002b939bb9a93e4afba26bf1575f5"],["archives/2020/09/index.html","6721ac2db05dd31b4a4ddcd4986fe008"],["archives/2020/09/page/2/index.html","8a114a7e8fb2031285c9ae4f04f7c037"],["archives/2020/10/index.html","72ecd555122f86f83e40082eefeda175"],["archives/2020/10/page/2/index.html","781f99298e2ef6b3e4fd1ab94a6a4ea2"],["archives/2020/12/index.html","45e56d912ed080ef94a5b14994791b7b"],["archives/2020/index.html","9cae109051f4d8f2eb08e1edd09c6f06"],["archives/2020/page/2/index.html","92502a67cf0fb50f03120d819f0fcf0c"],["archives/2020/page/3/index.html","570062a836fa20013e4844009176613c"],["archives/2020/page/4/index.html","409c9cf9ff1b0730fc2f68bdf5349147"],["archives/2020/page/5/index.html","f9839ac29ba4e9c447c742159fbc857a"],["archives/index.html","7fd2ffcfe48e4fb839b389afef8d8f20"],["archives/page/2/index.html","8db7c26bc588bb8dd0367a2d33aab639"],["archives/page/3/index.html","ad0532c740d46c33527105195bd1beb1"],["archives/page/4/index.html","3fce211ad56f9cfbc4adedbeda487a4b"],["archives/page/5/index.html","1a97d6b55db6b92762f0f466f66d2260"],["categories/ARM汇编/index.html","2439079df9f01a0dd04171009f346bda"],["categories/Android反编译/index.html","db9f031f8aba01943f16d28d1755798c"],["categories/CVE/index.html","e1da0f0b9945a591b68bcfd28826b3e3"],["categories/JS学习笔记/index.html","e24b21f9bd3dfddbd417103ceaee11c2"],["categories/index.html","a0e1b2a39ebd51f57560f73dc53b1b89"],["categories/x86汇编/index.html","12dce4f5628f32ae62414d34e38394fa"],["categories/x86汇编/page/2/index.html","3fe6081f1151b70a4e3074f4ee7e347e"],["categories/固件逆向/index.html","fe8be6cb238f39d4851db9c62e39f07a"],["categories/硬件电路构成/index.html","da175f2ebf3a102f83b9072cdd988c17"],["categories/网络通信协议/index.html","e1b19983a61ff33baab2806ba7d72e58"],["categories/逆向/index.html","e8f708296e55b90c0147213a2d78195a"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","96c57787fdb25c8f8fff4e60ba17eb75"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","e8db1e87c404d31a9d735d099bbe13d4"],["page/2/index.html","fa4c6eb3f42bae94ca0e7b8b2f71a2cd"],["page/3/index.html","dfc60fa51294ed350627fe45deabe760"],["page/4/index.html","d8440cb6d8947eb338b8254ca0269b6e"],["page/5/index.html","f9e5c93a73406264930ece7bce211fd7"],["tags/AMQP协议/index.html","001de66b107386c200e55e0a23b8a414"],["tags/ARM汇编/index.html","d455df259378f17972cd8d386dfeece9"],["tags/Android反编译/index.html","6a1fc020ac54f7385379358a05e687f4"],["tags/BLE协议/index.html","bf20a9eeff62a05c52f8a847a1de748a"],["tags/CoAP协议/index.html","f94e0f98d30fb430a2922c467271cc16"],["tags/JT808协议/index.html","6ea46c08fb88439d0b719cc8f9db45cc"],["tags/JavaScript/index.html","db37002b74cc1c85fbddc9281b2992a0"],["tags/MQTT协议/index.html","44adeb067ca23fa39ca4d326e7bc41e5"],["tags/NFC协议/index.html","ca6336c6d64c455b629f4a6cbf614fe1"],["tags/RF协议/index.html","7f1517521d3c8c80d78919d25a507573"],["tags/Wi-Fi协议/index.html","e70e12622b68f0be5a33375562a982c8"],["tags/ZigBee协议/index.html","98b693305bd1bb4b0b5d74634ce7f33c"],["tags/index.html","0d2361827fc1bb1578a711a3fbc0437b"],["tags/x86汇编/index.html","3b355b6b9107bcd9d9f360a33b8fba8d"],["tags/x86汇编/page/2/index.html","0cf90e5e5fc2b6b51ebfbf855e7ac9df"],["tags/固件逆向/index.html","1b51f5fd88ff90d49678513c785a9ec8"],["tags/漏洞复现/index.html","81474596656e18369f7c8376318d0e02"],["tags/硬件电路构成/index.html","93d5555aa810d0b91d5350d873710494"],["tags/逆向（基础）/index.html","9545d53a71b45b3ea25388deefcfb5b0"],["tags/逆向（调试）/index.html","45359c0219f8bc6739332c02fdf7442e"],["x86汇编学习笔记_0x01/index.html","4e28183e1d5d380afcb6bea593ddb9ee"],["x86汇编学习笔记_0x02/index.html","49f4149c1f4447d00abd3cbd6e397689"],["x86汇编学习笔记_0x03/index.html","63ef9d92ba38dc8210cbdeaba3327bf1"],["x86汇编学习笔记_0x04/index.html","f8666246900420ed02c5a59f5aab3825"],["x86汇编学习笔记_0x05/index.html","745ca0c3f18e2e619f4dbafc48162d36"],["x86汇编学习笔记_0x06/index.html","390916b460f4f5ee3f582e99cb73e336"],["x86汇编学习笔记_0x07/index.html","5b9127f4cf329ee6c9140cfe3de366dc"],["x86汇编学习笔记_0x08/index.html","0e390bca958d9fb36f53d75bea8549dc"],["x86汇编学习笔记_0x09/index.html","d273d062f425ba463fc8d37c921780ad"],["x86汇编学习笔记_0x10/index.html","f415d4c15dbf168b5c39cba3a0888318"],["x86汇编学习笔记_0x11/index.html","d316641a7fd5cb83a3fd2b41eec29696"],["x86汇编学习笔记_0x12/index.html","3fb1a4641db00099da7bc11fe5709a40"],["x86汇编学习笔记_0x13/index.html","d9b85d7e213109382728d3cb04aa6a41"],["固件逆向01/index.html","a102229ab4902bf6cf1e1b5746960f5b"],["汇编指令集/index.html","44cb4f7f00848629c5d1c449d88ea81d"],["硬件电路构成01/index.html","dc740405281e8ab2f0cecafb5e0cb386"],["逆向-基础-笔记_0x01/index.html","3a7ed7328ebcd273bdd0202dbaa02c39"],["逆向-调试-笔记_0x01/index.html","7a2880ea2b6fad538493324d57926cb3"]];
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








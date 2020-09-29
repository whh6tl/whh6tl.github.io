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

var precacheConfig = [["404.html","bae0835ab40b298b1fcf7fbf80d8b979"],["AMQP协议0_1/index.html","03f1f35cbd825693ec95fcbb6173bd2b"],["ARM汇编01/index.html","429e9780f0c736e5484db13e52ace87a"],["Andoird反编译01/index.html","8e3192492e33eeca78b03843e5a2355d"],["BLE协议01/index.html","8acf7a7907d9133598c234e9eb76963e"],["CVE-2019-5418/index.html","9b754933f2c4fee2da222c6438abbed7"],["CVE-2019-9766/index.html","3c74b73bdb3ea4a785451e1fb5d3addf"],["CoAP协议01/index.html","7ddde0a6f52068f82dc200a78895bf8a"],["JS_0X02/index.html","da0db3a79492d96e7920157c54fbefb7"],["JS_0X03/index.html","b44c3d9237a8d32197ab16e021a92d0a"],["JS_0X04/index.html","9257f326595780455525c103e1cde26c"],["JS_0X05/index.html","f5d3c62642b5fd0960139c617d543adc"],["JS_0X06/index.html","4dcc118e3fd834094796a3b1febb8f57"],["JS_0X07/index.html","a86ffa456f70af735519ecd5419e1b09"],["JS_0X08/index.html","9d874ffbc58f19af991dfc6b984a2844"],["JS_0X09/index.html","4df2dd383a7eb1c040c645755390453b"],["JS_0X10/index.html","4f82a707a286b32290cff6aff620376f"],["JS笔记(0X01)/index.html","7e013893a7a09627f03840fc69d70fb6"],["JT808协议01/index.html","0aad9baf9f82e6d20b67999f0cc01dcc"],["MQTT协议01/index.html","edaac0e76cf946efc3ade8fb65ec157c"],["NFC协议01/index.html","db9bd975950ba7a4db15edb72898964e"],["RF协议01/index.html","22c222b1955fbaa7ea52e88faa4298f1"],["Wi-Fi协议01/index.html","5ca3b13964e76267767c998b5ff03757"],["ZigBee协议01/index.html","cde6f1203e98c346292a90aa2cde902b"],["archives/2020/08/index.html","1f2a8cf4c87feb5d289e119faf942c59"],["archives/2020/09/index.html","86c25c775abe1896ed0a1309cbc4188b"],["archives/2020/09/page/2/index.html","ea2a0fc3cf5aeb933b13a12e2a27655f"],["archives/2020/10/index.html","2de49267c1ff273ef5bebca5e454d5e2"],["archives/2020/10/page/2/index.html","663e1643312ecfd3c67a33343ba0c010"],["archives/2020/12/index.html","30ba38473110d038705516ca7fa79051"],["archives/2020/index.html","421f71e9a6244106aef3055ba96e253f"],["archives/2020/page/2/index.html","f958c7f9cc1e79992dd64b81e8c7b91f"],["archives/2020/page/3/index.html","8f1ad6ddde7ed1aad21d1279ac0c0fda"],["archives/2020/page/4/index.html","d499ed9994a08d4f1b64d3fb6aaf2078"],["archives/2020/page/5/index.html","d452ef5cb56c602b23a6c91873902156"],["archives/index.html","3024a70625daa46fdc4892cd5d8e7077"],["archives/page/2/index.html","3c4938a6219ba6c68a2dd113c4f70642"],["archives/page/3/index.html","4687513c0f37a8bc34cea119e126581c"],["archives/page/4/index.html","825e7071afebecbb5e621d4b51d1403b"],["archives/page/5/index.html","baf875f77ac144e8942bd0ea137d9bac"],["categories/ARM汇编/index.html","6cf2ac82ab05a3f4f48b20cea691465c"],["categories/Android反编译/index.html","d5ef1bdd03a6bc2e5d75224bc87f57d8"],["categories/CVE/index.html","8567cc4a1bbf9a8b7a4fd353f9d22e36"],["categories/JS学习笔记/index.html","4b538ac66e2ad31828da4f47e4022765"],["categories/index.html","9c407375f359d87019f9f1bb6dcfeef8"],["categories/x86汇编/index.html","a2c9df1516eb664b9ae1d92c7085ab3f"],["categories/x86汇编/page/2/index.html","d953c8fb215fdeaf85e9212be55cd61d"],["categories/固件逆向/index.html","8781dca8533a77532051074a8a8260f8"],["categories/硬件电路构成/index.html","fb5728e80eac9823c5563647045fe009"],["categories/网络通信协议/index.html","7946f786f896c4e8ad51b030ccfc9a3a"],["categories/逆向/index.html","c211824e3398484ab13374bb31ead794"],["css/index.css","af9ec41259ae34482829a93ca509a619"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","a930992b843e937e566f0b9f871a9b7a"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","e1ec5d5ecaf84a9c114a8dc3bffbef4b"],["page/2/index.html","26bb775952b5f0ad325ea8715627323d"],["page/3/index.html","c81a3c90769ea4f198f7e3248b1532d3"],["page/4/index.html","483a0e0b7799757abfe593fc7ff569f3"],["page/5/index.html","afa7314de56a1a741de7e8a84a2be883"],["tags/AMQP协议/index.html","c630641aaf9f17335adbf66a5fb6a3e3"],["tags/ARM汇编/index.html","3e8b609b2b1a70184a8c2e6e8cd17942"],["tags/Android反编译/index.html","97c8ecbe7900448a4df5216dad448805"],["tags/BLE协议/index.html","2b2aefdc93c8a9679de766ba2db78b53"],["tags/CoAP协议/index.html","4b8d4d0a06961e665a75da778991c982"],["tags/JT808协议/index.html","4a19503f6a5474c88a2f97a40aa5c554"],["tags/JavaScript/index.html","a30e04bc55aac838a93ce42757641269"],["tags/MQTT协议/index.html","fe65b71c7a9bb871d5c2bbf3ade2bc99"],["tags/NFC协议/index.html","f8089cfcc527f82b4d5379718eb237e0"],["tags/RF协议/index.html","552da4cd1f34cd3b464e1eccfd4a836a"],["tags/Wi-Fi协议/index.html","32f1df5f558028d23f8cf28ee9319fbe"],["tags/ZigBee协议/index.html","f0fcf78a803e09dd3604edc5f29660c1"],["tags/index.html","dca757891a11e4609aae3f8f942fab20"],["tags/x86汇编/index.html","6a8d1dc9a0bf1f8207b552f6f64e30ea"],["tags/x86汇编/page/2/index.html","a23f08eb9a8dd507d5de230ba547b67c"],["tags/固件逆向/index.html","db354a40c3dc22a98d3d9e9b0f09bac5"],["tags/漏洞复现/index.html","999ea2640c5392e6ab2c3a94c53b05d4"],["tags/硬件电路构成/index.html","b172b90c7e78834e00a25be61f38dcd5"],["tags/逆向（基础）/index.html","8b6e9987732187c1f3d5e5d290576b18"],["tags/逆向（调试）/index.html","3d9f8f26c6dd14df5d6b3585e266a7dd"],["x86汇编学习笔记_0x01/index.html","9c57d760146a74f8f8354361b7426b7f"],["x86汇编学习笔记_0x02/index.html","053f8b4a25d9e6c9c492c0a84c7aff15"],["x86汇编学习笔记_0x03/index.html","36120fefdfa59f6d07e86a375d1b26ce"],["x86汇编学习笔记_0x04/index.html","bca3191a05c89879dc1dff99089e3690"],["x86汇编学习笔记_0x05/index.html","a629fafd2ac8fecd86574d215e5ed056"],["x86汇编学习笔记_0x06/index.html","c9ee2fc20af31f782ba73e847782f8a2"],["x86汇编学习笔记_0x07/index.html","f64ed536e7c252ae786c2c98bb558633"],["x86汇编学习笔记_0x08/index.html","e2fec5a2283f7287c201e09ca05fbb43"],["x86汇编学习笔记_0x09/index.html","0c9d2f0c80b40504d0651a84a5aca6d6"],["x86汇编学习笔记_0x10/index.html","f689372bd2098ccb69cc8aba66e12a48"],["x86汇编学习笔记_0x11/index.html","57de7e9055d3f0f876887809035a868c"],["x86汇编学习笔记_0x12/index.html","491a7a4e1b770270075ee365046128e1"],["x86汇编学习笔记_0x13/index.html","e1f3d6309acfab9b291fa310c2531b0d"],["固件逆向01/index.html","76d1a162b1db2254d64bd8dcc8b8eec0"],["汇编指令集/index.html","6ab892b5eeb0911ea985f6aabf40e9a9"],["硬件电路构成01/index.html","1d152f20c41f5247fdb557eb05ee277a"],["逆向-基础-笔记_0x01/index.html","4a1757686d2a3bf9dc054803a1f0ff7b"],["逆向-调试-笔记_0x01/index.html","7a5a5b5fc4dbc49391f4094f01d40be4"]];
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








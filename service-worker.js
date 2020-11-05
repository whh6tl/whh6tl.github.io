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

var precacheConfig = [["404.html","b0f574c3c27ace3ecaf463ae13aafbf4"],["AMQP协议0_1/index.html","e5680628923c6ad4c63caf26286f4538"],["ARM汇编01/index.html","0c666aace81edc29a7d977682190acf3"],["ARM汇编02/index.html","eaac8c20a4864145bb3e818b5ea8279c"],["ARM汇编指令集/index.html","f6194bba3b43c009768543e1025d18da"],["Andoird反编译01/index.html","4b4ea5efee318d211bce17a2be5d043d"],["BLE协议01/index.html","34a139631bf8c9387e72e857348dd8fe"],["CVE-2019-5418/index.html","6e856a4218692dd37451d3ffaeab17ab"],["CVE-2019-9766/index.html","16655c75c1170e017b7ce9e612b5ac4b"],["CoAP协议01/index.html","c8611e4eaa6b910c4b3846f2116a24e9"],["JS_0X02/index.html","96ce30ce446e7ab38b7580f80045b303"],["JS_0X03/index.html","9a07ddb0ce4eef89dab13c72df7a6ad4"],["JS_0X04/index.html","7f06300ffe71f2ae37efe3924cdd178f"],["JS_0X05/index.html","f17b1944293b229de655960e5308dea9"],["JS_0X06/index.html","b810e0db932be4ff34f12e20052993e7"],["JS_0X07/index.html","3da6c949329a5c6c356311ca7439119e"],["JS_0X08/index.html","cf456221a1099373a2d36dfd1d8617b8"],["JS_0X09/index.html","9ce8cf81d44be1a5e90a368df2445ecc"],["JS_0X10/index.html","3176aaa3a6faa2b7426314570cf8f653"],["JS笔记(0X01)/index.html","b0873bdacf8f227e8ddc6ab7c9fc662e"],["JT808协议01/index.html","c1b63bf66168c1e5d52b440d4cdca5c8"],["MQTT协议01/index.html","29389dca61cc12f2d69ef39c807da5e2"],["NFC协议01/index.html","6487844d0d761472ebd0366073b1e515"],["RF协议01/index.html","a1864dbce8318045db9aae6217cac43e"],["Wi-Fi协议01/index.html","0fb6b4cdc95cf275e75dd38ad3a60a74"],["Wi-Fi协议02/index.html","7d366fc9e22ef162e6eccdf10e18c816"],["ZigBee协议01/index.html","85c4d64435efcebeb767f8b72b4bb66f"],["archives/2020/08/index.html","e5dd337bbcf47dd550fc50fbba3563a8"],["archives/2020/09/index.html","f23cf1fb2b2ac18dcc444c414efed09d"],["archives/2020/09/page/2/index.html","7efd500cde39057d5a58e6ce225449e0"],["archives/2020/09/page/3/index.html","b12a5c49cc6d02f59926c1683ff4faf9"],["archives/2020/10/index.html","49d4cb0920874d80bc629a8c025cdb8f"],["archives/2020/10/page/2/index.html","37a6f5ac4734941adbd7466eaf26523e"],["archives/2020/11/index.html","cc4b3671d5b8c1e7e40b1d288d371609"],["archives/2020/12/index.html","06c5f1c74fd525ac3d43c93379a28dac"],["archives/2020/index.html","691b92e74dda5a48bc6800a9873cb6cd"],["archives/2020/page/2/index.html","fe7ab4ce1806fc8d5ce0cc303d144522"],["archives/2020/page/3/index.html","8359f1ec53bbd85eca9b2f177ad38988"],["archives/2020/page/4/index.html","15dc9c5bb0dd4609c8ee687b25ecf8d2"],["archives/2020/page/5/index.html","5f7a7f189a0e9a90ef8e3e2a5864b5e1"],["archives/2020/page/6/index.html","823d7ff2cd82e88fdf5cc1e037b8ca0c"],["archives/index.html","90dc361e8618f46975e187968be32517"],["archives/page/2/index.html","0a4b0746f16d907639f043394a1820b8"],["archives/page/3/index.html","8dc2bd6080c25c0aa85e284b312d9c5b"],["archives/page/4/index.html","0a116c75eec7936982c3600af14dee77"],["archives/page/5/index.html","e1908fbd1f7e8277d008be77f49b6c36"],["archives/page/6/index.html","f1601571c9d83e54bde53178951d5b94"],["categories/ARM汇编/index.html","2ef597a02a14e2643ddcdaef7238b40d"],["categories/Android反编译/index.html","aeb8b95845a0198438d4e3937588be40"],["categories/CVE/index.html","7342f0f76e517a78ba1719b01f1a6330"],["categories/JS学习笔记/index.html","b8e2d71a080ade30f256fcd652084b0d"],["categories/index.html","9628e4bc507a33cbbf2ceea82ac94a3e"],["categories/x86汇编/index.html","97b96e98641f1a3693dbd8b7962926c7"],["categories/x86汇编/page/2/index.html","5f0a9e93b1cf546b37ace708677084b0"],["categories/固件逆向/index.html","494572a4139d4ebfd111fddf1090e9b1"],["categories/智能硬件安全/index.html","9483e813cb6f2c4ac29b5e5c4d9362ff"],["categories/硬件电路构成/index.html","498f880489dd6f508aa72e549295eb02"],["categories/网络通信协议/index.html","c7137e3517a17bf05f102e217effde17"],["categories/逆向/index.html","736e529992e08b1c782e01cba34cd21d"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","fbc0a18c901c6d38bc4f5636a7e60d19"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","683879511abe780003abc00b2a1b6fa7"],["page/2/index.html","76354efd22bed41f900982a26b929a1d"],["page/3/index.html","487deb8de5e7d094ce768e6352962d23"],["page/4/index.html","fa24024e67738b6ed71b0554d53d116a"],["page/5/index.html","ffa808179aae965f5675c5e473738c5b"],["page/6/index.html","6c0e55b0bbd1a724ce1ac1f13a39fc46"],["tags/AMQP协议/index.html","9b79b5a3464ff15fd5a39c1e287dba96"],["tags/ARM汇编/index.html","32223d5659c0f78334c2feeabb6676a6"],["tags/Android反编译/index.html","8aa5329df95a202ed6a109a3449fcee4"],["tags/BLE协议/index.html","20fcebc48528a34f529b17b8481a6e8e"],["tags/CoAP协议/index.html","8e4fd571cf73e903bc5e0b5619f72c9a"],["tags/JT808协议/index.html","02d374d273f311744a1f9bf8df170924"],["tags/JavaScript/index.html","5d9712776be1e9090ab916abc0747170"],["tags/MQTT协议/index.html","a356f7ff8b9fa5d0b7367b32bcef4ba8"],["tags/NFC协议/index.html","d1ca22fc8f78058e55666a8197c34151"],["tags/RF协议/index.html","5434cc5c8ed7f812c55c906c38335a13"],["tags/Wi-Fi协议/index.html","6a047e8dc429433d4b85df2a08d24e65"],["tags/ZigBee协议/index.html","9aab5f0af4aec806486bb4c42c6fc6bf"],["tags/index.html","23bffd517a35b5a979238f7945baf59a"],["tags/x86汇编/index.html","a9e6ecc3e1ea4708dfe20d345aa150d4"],["tags/x86汇编/page/2/index.html","f51f7bef5b8a2071bd58ac53eec5e0bf"],["tags/固件逆向/index.html","7e3f4a410b814a5744bba9e5a9228da1"],["tags/智能硬件安全/index.html","dde19f60f108c601dd749bdbb04e5786"],["tags/漏洞复现/index.html","9df914f598b0ab13a1cba8f89edbbf83"],["tags/硬件电路构成/index.html","5dcd562bdb7f261dcd804f7a181a4d4e"],["tags/逆向（基础）/index.html","cfc8de7808378ea976f17a1ffc5c0608"],["tags/逆向（调试）/index.html","95abd3e4cbb63ebe30a3c03ab2be6b55"],["x86汇编学习笔记_0x01/index.html","96afee0e978879d3035d7529c93cebf6"],["x86汇编学习笔记_0x02/index.html","859a2adc3fb75001663470971b63d9cd"],["x86汇编学习笔记_0x03/index.html","1d2f984a5c1710fa9cdba1cd670b36d1"],["x86汇编学习笔记_0x04/index.html","908cf755d58fb3c72b4f184cd7fbb6f0"],["x86汇编学习笔记_0x05/index.html","5074c2ab1faf8946aa32811ce01af2aa"],["x86汇编学习笔记_0x06/index.html","235f8110eeb13e2b7cf434ebb1eb2c97"],["x86汇编学习笔记_0x07/index.html","121b60cadaef3d9b87acfd93138f283f"],["x86汇编学习笔记_0x08/index.html","a3ffc63505dc56a055db16ff3653694e"],["x86汇编学习笔记_0x09/index.html","bffc50b8a60abb7f37bc84c2bb4657fe"],["x86汇编学习笔记_0x10/index.html","0a2008d3ba6b8b01b78fd4533de3d0ab"],["x86汇编学习笔记_0x11/index.html","7f78816cd236f11675f35a2fce6c795c"],["x86汇编学习笔记_0x12/index.html","9b3b09f2d02204023193f146af0976ea"],["x86汇编学习笔记_0x13/index.html","269595f03d3cae85cae4518a646e739f"],["固件逆向01/index.html","47a305f8a17bd6999ba4e706465e59bd"],["汇编指令集/index.html","5e0729b11800aa85a9d578037712aca2"],["硬件智能安全(0x01)/index.html","cd7b1b8e0f0ace808dc5fdedbc092f75"],["硬件智能安全(0x02)/index.html","0c90e7dfc878a44b6eeb403028ce6054"],["硬件智能安全(0x03)/index.html","5be5bd43fb3a0aaf8fb0cf57970ab199"],["硬件智能安全(0x04)/index.html","bee88fdc9f69b6bd17f1f68fd56592b3"],["硬件智能安全(0x05)_/index.html","ca077b08d68713479e49b8d59abe49de"],["硬件智能安全(0x06)_/index.html","c5f65324ddade19e6aad93f886fad862"],["硬件智能安全(0x07)_/index.html","ebb7d1be574515d9a339125592ad9720"],["硬件智能安全导航/index.html","99bc190cbcb9a32674a26e0f0b27e88d"],["硬件电路构成01/index.html","53ad02a4d0681d0444633a0023279dec"],["逆向-基础-笔记_0x01/index.html","3ab62b3830b3614c3eb295fac2eab892"],["逆向-调试-笔记_0x01/index.html","73e4629bafcf08a7fdca18cf86002b2d"],["逆向-调试-笔记_0x02/index.html","58e6e5ed075ff153dc9e7f07159ccb4c"],["逆向-调试-笔记_0x03/index.html","4d3eb22819877b944db3c629b72bd288"],["逆向-调试-笔记_0x04/index.html","45afdd185db2cb70182689d069ad29a6"]];
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








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

var precacheConfig = [["404.html","446f75dbc9e3cefb420d1c090670281e"],["AMQP协议0_1/index.html","e5680628923c6ad4c63caf26286f4538"],["ARM汇编01/index.html","0c666aace81edc29a7d977682190acf3"],["ARM汇编02/index.html","eaac8c20a4864145bb3e818b5ea8279c"],["ARM汇编指令集/index.html","f6194bba3b43c009768543e1025d18da"],["Andoird反编译01/index.html","4b4ea5efee318d211bce17a2be5d043d"],["BLE协议01/index.html","34a139631bf8c9387e72e857348dd8fe"],["CVE-2019-5418/index.html","6e856a4218692dd37451d3ffaeab17ab"],["CVE-2019-9766/index.html","16655c75c1170e017b7ce9e612b5ac4b"],["CoAP协议01/index.html","c8611e4eaa6b910c4b3846f2116a24e9"],["JS_0X02/index.html","96ce30ce446e7ab38b7580f80045b303"],["JS_0X03/index.html","9a07ddb0ce4eef89dab13c72df7a6ad4"],["JS_0X04/index.html","7f06300ffe71f2ae37efe3924cdd178f"],["JS_0X05/index.html","f17b1944293b229de655960e5308dea9"],["JS_0X06/index.html","b810e0db932be4ff34f12e20052993e7"],["JS_0X07/index.html","3da6c949329a5c6c356311ca7439119e"],["JS_0X08/index.html","cf456221a1099373a2d36dfd1d8617b8"],["JS_0X09/index.html","9ce8cf81d44be1a5e90a368df2445ecc"],["JS_0X10/index.html","3176aaa3a6faa2b7426314570cf8f653"],["JS笔记(0X01)/index.html","b0873bdacf8f227e8ddc6ab7c9fc662e"],["JT808协议01/index.html","c1b63bf66168c1e5d52b440d4cdca5c8"],["MQTT协议01/index.html","29389dca61cc12f2d69ef39c807da5e2"],["NFC协议01/index.html","6487844d0d761472ebd0366073b1e515"],["RF协议01/index.html","a1864dbce8318045db9aae6217cac43e"],["Wi-Fi协议01/index.html","12f097eab6c5183ef6306173873ae178"],["Wi-Fi协议02/index.html","74dfb6c8bedf3bdd4b876844fd0c8f82"],["ZigBee协议01/index.html","85c4d64435efcebeb767f8b72b4bb66f"],["archives/2020/08/index.html","30e5783c06235880a72506c2ebf645ea"],["archives/2020/09/index.html","31e6458ed9287f0d8d283cbebfbd6ac7"],["archives/2020/09/page/2/index.html","503a5fec9e591acd9b782b59e6265e9d"],["archives/2020/09/page/3/index.html","e89ab0d3c2b7dddeece6639f927bed27"],["archives/2020/10/index.html","d6e224d36b2cec52734a5b2809f3f301"],["archives/2020/10/page/2/index.html","6bc207157740ddccf837df53ba83020a"],["archives/2020/11/index.html","7d8c0ff29602a3517462f430044b870c"],["archives/2020/12/index.html","d05ee9ec1ba2b7792312e0ba31f6d2bb"],["archives/2020/index.html","27c86332eea4f7b0187e5f3ee4eef49e"],["archives/2020/page/2/index.html","a81cfeebb395a7b405de346dd41989dc"],["archives/2020/page/3/index.html","6b516c23d7591f060679f6b283ffe4d1"],["archives/2020/page/4/index.html","5792ea03971b224c63b6db2faa05f1e9"],["archives/2020/page/5/index.html","fdfb9ccf55d080e8afbf13eb2f410b77"],["archives/2020/page/6/index.html","44b30957a17368db5640d4c74ecd26b7"],["archives/index.html","b91987e275c091b9c33ff82421f6b81f"],["archives/page/2/index.html","93f3d726433d1c078249fb5959273493"],["archives/page/3/index.html","3e7b39763983b5bee4c9823bfe73a544"],["archives/page/4/index.html","e070a1d536935d6f15072afa81c2c08d"],["archives/page/5/index.html","c6ed5d3a0de557822a9dd290a71bed2e"],["archives/page/6/index.html","751125ce6157ef3d62c1e274f9a7540e"],["categories/ARM汇编/index.html","ba05c05933421eddb2f07a1286fbd9ab"],["categories/Android反编译/index.html","91fb9e8333c8c7945f49f1c5c81de6ce"],["categories/CVE/index.html","16d259fb24faed715c2e6bfa68237ec0"],["categories/JS学习笔记/index.html","c34b1cef23faa93eff585b890706a16d"],["categories/index.html","9628e4bc507a33cbbf2ceea82ac94a3e"],["categories/x86汇编/index.html","beb2883011c87de97a496e37b7110995"],["categories/x86汇编/page/2/index.html","6eefb913e24d9f54a70b91d3a1cfdd66"],["categories/固件逆向/index.html","06ceaf13b98d1b9e16ee23c997a12e2a"],["categories/智能硬件安全/index.html","e89696c9a959b21322e60b82255be293"],["categories/硬件电路构成/index.html","83c0c8149c43e45457a2cf66af75eeeb"],["categories/网络通信协议/index.html","0cc78f63b5251f8e1de23f87da2df2fe"],["categories/逆向/index.html","efbff1d9e531db3767dc79a8448b0f6e"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","a480a5b0db9a504ba33f400e9a2772f3"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","683879511abe780003abc00b2a1b6fa7"],["page/2/index.html","391432213c65e05e8ef86a631cf0289a"],["page/3/index.html","2a8e351cb0d66d0aef52d9bf1c4025eb"],["page/4/index.html","0351ee6bcc3a22a164216f57616a7798"],["page/5/index.html","2f5a48406aea877b7674da57a1fce5e8"],["page/6/index.html","bc74f4ff2511260a6a35df8bf649286e"],["tags/AMQP协议/index.html","db9b1b7da5c7f964f1f3ae5c7721679e"],["tags/ARM汇编/index.html","7e434e91937bff28045eda73e9eae9a9"],["tags/Android反编译/index.html","dee72aa3c693e23c8f63ffa1dd344002"],["tags/BLE协议/index.html","d3c28d4050c5266a76714106f61d7528"],["tags/CoAP协议/index.html","3027eee998054f7157da81a7c6d44a13"],["tags/JT808协议/index.html","4318b2009382256ec83275314fda9b1f"],["tags/JavaScript/index.html","6c4c56203d4c40f215a6629b91bb6bde"],["tags/MQTT协议/index.html","6faf1dffd54ca98c864f5b2578caa734"],["tags/NFC协议/index.html","68d3d1fb54c9922aa708b9044baabd5d"],["tags/RF协议/index.html","15db85f36dc8d803274fe7e8b8e27f80"],["tags/Wi-Fi协议/index.html","2f2ff8b41854ecdbb36e211a8da2ff30"],["tags/ZigBee协议/index.html","b7e57bc9c67b189c1cfb360d14b4026d"],["tags/index.html","d4685118816638aa7f2e965ed9025c85"],["tags/x86汇编/index.html","9efa815fd61810026379c939fef2a13a"],["tags/x86汇编/page/2/index.html","dbf8dd683e8c86ac8d3aa6587e01decf"],["tags/固件逆向/index.html","120ef550ae5c31ee52c7a00145106d13"],["tags/智能硬件安全/index.html","b7c23af7d27886fcfc3b3a4114f8c9b2"],["tags/漏洞复现/index.html","77817d85e66e2691ee5a379974b5b33b"],["tags/硬件电路构成/index.html","0aa487d862d694e32180120fc69d9d62"],["tags/逆向（基础）/index.html","e906cb81a18b04e9bf30547962afe387"],["tags/逆向（调试）/index.html","89ada0f783e9d2d4c107725a355923d8"],["x86汇编学习笔记_0x01/index.html","96afee0e978879d3035d7529c93cebf6"],["x86汇编学习笔记_0x02/index.html","859a2adc3fb75001663470971b63d9cd"],["x86汇编学习笔记_0x03/index.html","1d2f984a5c1710fa9cdba1cd670b36d1"],["x86汇编学习笔记_0x04/index.html","908cf755d58fb3c72b4f184cd7fbb6f0"],["x86汇编学习笔记_0x05/index.html","5074c2ab1faf8946aa32811ce01af2aa"],["x86汇编学习笔记_0x06/index.html","235f8110eeb13e2b7cf434ebb1eb2c97"],["x86汇编学习笔记_0x07/index.html","121b60cadaef3d9b87acfd93138f283f"],["x86汇编学习笔记_0x08/index.html","a3ffc63505dc56a055db16ff3653694e"],["x86汇编学习笔记_0x09/index.html","bffc50b8a60abb7f37bc84c2bb4657fe"],["x86汇编学习笔记_0x10/index.html","0a2008d3ba6b8b01b78fd4533de3d0ab"],["x86汇编学习笔记_0x11/index.html","7f78816cd236f11675f35a2fce6c795c"],["x86汇编学习笔记_0x12/index.html","9b3b09f2d02204023193f146af0976ea"],["x86汇编学习笔记_0x13/index.html","269595f03d3cae85cae4518a646e739f"],["固件逆向01/index.html","47a305f8a17bd6999ba4e706465e59bd"],["汇编指令集/index.html","5e0729b11800aa85a9d578037712aca2"],["硬件智能安全(0x01)/index.html","cd7b1b8e0f0ace808dc5fdedbc092f75"],["硬件智能安全(0x02)/index.html","0c90e7dfc878a44b6eeb403028ce6054"],["硬件智能安全(0x03)/index.html","5be5bd43fb3a0aaf8fb0cf57970ab199"],["硬件智能安全(0x04)/index.html","bee88fdc9f69b6bd17f1f68fd56592b3"],["硬件智能安全(0x05)_/index.html","ca077b08d68713479e49b8d59abe49de"],["硬件智能安全(0x06)_/index.html","c5f65324ddade19e6aad93f886fad862"],["硬件智能安全(0x07)_/index.html","ebb7d1be574515d9a339125592ad9720"],["硬件智能安全导航/index.html","99bc190cbcb9a32674a26e0f0b27e88d"],["硬件电路构成01/index.html","53ad02a4d0681d0444633a0023279dec"],["逆向-基础-笔记_0x01/index.html","3ab62b3830b3614c3eb295fac2eab892"],["逆向-调试-笔记_0x01/index.html","73e4629bafcf08a7fdca18cf86002b2d"],["逆向-调试-笔记_0x02/index.html","58e6e5ed075ff153dc9e7f07159ccb4c"],["逆向-调试-笔记_0x03/index.html","4d3eb22819877b944db3c629b72bd288"],["逆向-调试-笔记_0x04/index.html","45afdd185db2cb70182689d069ad29a6"]];
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








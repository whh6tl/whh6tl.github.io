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

var precacheConfig = [["404.html","7c32bb83329e04fb7fceafc4350352c9"],["AMQP协议0_1/index.html","e5680628923c6ad4c63caf26286f4538"],["ARM汇编01/index.html","0c666aace81edc29a7d977682190acf3"],["ARM汇编02/index.html","eaac8c20a4864145bb3e818b5ea8279c"],["ARM汇编指令集/index.html","f6194bba3b43c009768543e1025d18da"],["Andoird反编译01/index.html","4b4ea5efee318d211bce17a2be5d043d"],["BLE协议01/index.html","34a139631bf8c9387e72e857348dd8fe"],["CVE-2019-5418/index.html","6e856a4218692dd37451d3ffaeab17ab"],["CVE-2019-9766/index.html","16655c75c1170e017b7ce9e612b5ac4b"],["CoAP协议01/index.html","c8611e4eaa6b910c4b3846f2116a24e9"],["JS_0X02/index.html","96ce30ce446e7ab38b7580f80045b303"],["JS_0X03/index.html","9a07ddb0ce4eef89dab13c72df7a6ad4"],["JS_0X04/index.html","7f06300ffe71f2ae37efe3924cdd178f"],["JS_0X05/index.html","f17b1944293b229de655960e5308dea9"],["JS_0X06/index.html","b810e0db932be4ff34f12e20052993e7"],["JS_0X07/index.html","3da6c949329a5c6c356311ca7439119e"],["JS_0X08/index.html","cf456221a1099373a2d36dfd1d8617b8"],["JS_0X09/index.html","9ce8cf81d44be1a5e90a368df2445ecc"],["JS_0X10/index.html","3176aaa3a6faa2b7426314570cf8f653"],["JS笔记(0X01)/index.html","b0873bdacf8f227e8ddc6ab7c9fc662e"],["JT808协议01/index.html","c1b63bf66168c1e5d52b440d4cdca5c8"],["MQTT协议01/index.html","29389dca61cc12f2d69ef39c807da5e2"],["NFC协议01/index.html","6487844d0d761472ebd0366073b1e515"],["RF协议01/index.html","a1864dbce8318045db9aae6217cac43e"],["Wi-Fi协议01/index.html","12f097eab6c5183ef6306173873ae178"],["Wi-Fi协议02/index.html","74dfb6c8bedf3bdd4b876844fd0c8f82"],["ZigBee协议01/index.html","85c4d64435efcebeb767f8b72b4bb66f"],["archives/2020/08/index.html","edf6f2fdeae95745c604b88065841c22"],["archives/2020/09/index.html","85b4a56d4b1a7bfaa656757383135582"],["archives/2020/09/page/2/index.html","ca15665e52afdc30b2912dd6b54b59fe"],["archives/2020/09/page/3/index.html","d80dada1b5cf6c4d208bba05113b4289"],["archives/2020/10/index.html","552abe4f03fcacb529ea540624774593"],["archives/2020/10/page/2/index.html","52796f0a5294074bd8fc16f770fd5964"],["archives/2020/11/index.html","41436410ec1123a3fadfe60673f4c2bf"],["archives/2020/12/index.html","79444bb5eb494b0e1c08e4253cdbecd7"],["archives/2020/index.html","2b1d39852e42fcdcef85ad91034a02b8"],["archives/2020/page/2/index.html","e1898c7d993660a68789087c46cc8d10"],["archives/2020/page/3/index.html","b3325bbd0a194b9054d5f5a97a52fa9b"],["archives/2020/page/4/index.html","4b6dbc4a9bbe89e6dac944498d898186"],["archives/2020/page/5/index.html","5a408ae1a2075be78be5639fc93ab78b"],["archives/2020/page/6/index.html","c1c3803d70d270c17e09667883db6f66"],["archives/index.html","8657c561f0e841a5a90a994de0a7605a"],["archives/page/2/index.html","4b337a16ecf20cbb458dfda2fbd7a73f"],["archives/page/3/index.html","b3507a7e869b951511661ead26e71bf0"],["archives/page/4/index.html","537411acd715078bfe0136531c4a1a30"],["archives/page/5/index.html","b57a662c756fe8c3436236ad5032be23"],["archives/page/6/index.html","45bbc0f9d0c0415aa1e0864860730b98"],["categories/ARM汇编/index.html","395108dd8a47d6522a035b57bf4ba15f"],["categories/Android反编译/index.html","69b9c060bc06c2b1969936caf3488965"],["categories/CVE/index.html","c4c8206e5899859468bb5c11aeedddb0"],["categories/JS学习笔记/index.html","788883f604aec2f1fbb756b7d044e53c"],["categories/index.html","9628e4bc507a33cbbf2ceea82ac94a3e"],["categories/x86汇编/index.html","779375c923016ae14044b31f7f389a28"],["categories/x86汇编/page/2/index.html","d2b735cdde6591f3732a07eb6337103c"],["categories/固件逆向/index.html","6541767223df635bebaa8a01500b0671"],["categories/智能硬件安全/index.html","54448a6813d1542ce0e0b2c71bcbb2d6"],["categories/硬件电路构成/index.html","0c740ac709e3e33a342a1e7d9ccfb3bb"],["categories/网络通信协议/index.html","5a3b93becd224df981d447882df0be03"],["categories/逆向/index.html","0637e86bbbad164ec77adc8e068bd746"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","8c53b64582045fc2e1890777a5d9c8f3"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","683879511abe780003abc00b2a1b6fa7"],["page/2/index.html","554a198e7d15b7c53d8ab4d3e6048125"],["page/3/index.html","535c9fe312abe8b2eb77d5a07cd3c419"],["page/4/index.html","9157304e69b9de52622011746a3cb75c"],["page/5/index.html","eaf8dec4e7a2fb985b294170f882e2af"],["page/6/index.html","9928633a594b6606983219f2054c5bca"],["tags/AMQP协议/index.html","5e51d2d6bf10a7861144b253f790c7e6"],["tags/ARM汇编/index.html","94a9fb3a0f1ab45b80bc3acef1ddcfdc"],["tags/Android反编译/index.html","4e5f03288d2398b416a947430cd73e3b"],["tags/BLE协议/index.html","9e563bd79c0d65ec2231aec90ae3c7e3"],["tags/CoAP协议/index.html","dd4dd1912ae088f81cc84696818bfae2"],["tags/JT808协议/index.html","f919b810a80bb025c4b7e2ae81e4aa60"],["tags/JavaScript/index.html","f779adceecc853b0526aad0e4c3e22ee"],["tags/MQTT协议/index.html","4d23ae6b7d4aaebba369e3fb7bd70413"],["tags/NFC协议/index.html","758fe5e37b38f3a6e14656d3a2f39c1c"],["tags/RF协议/index.html","9c1b1a99c261cb6194feb2368cfab525"],["tags/Wi-Fi协议/index.html","38e26eea11ab62e6cfc9002ed608e530"],["tags/ZigBee协议/index.html","203feab33fd6322e8bb94b64346e4a70"],["tags/index.html","6ac075628b500f5550cd9542d6985648"],["tags/x86汇编/index.html","d757dc10e4e4686016baf4e7fc48498d"],["tags/x86汇编/page/2/index.html","b652edacade2752b49e1805020e102bd"],["tags/固件逆向/index.html","c8b566783ef887c02ecb574d287c3267"],["tags/智能硬件安全/index.html","eb444e4057fa8266b6ee51d7907a9a68"],["tags/漏洞复现/index.html","7267d56e706830925dbdf4e835e328d8"],["tags/硬件电路构成/index.html","6b1978f7f2444037754b2e6ffa756f78"],["tags/逆向（基础）/index.html","0d8e7cf82382dcad8bf2693121245503"],["tags/逆向（调试）/index.html","9aee8efda4db6fe0a32b4eba42ee19ef"],["x86汇编学习笔记_0x01/index.html","96afee0e978879d3035d7529c93cebf6"],["x86汇编学习笔记_0x02/index.html","859a2adc3fb75001663470971b63d9cd"],["x86汇编学习笔记_0x03/index.html","1d2f984a5c1710fa9cdba1cd670b36d1"],["x86汇编学习笔记_0x04/index.html","908cf755d58fb3c72b4f184cd7fbb6f0"],["x86汇编学习笔记_0x05/index.html","5074c2ab1faf8946aa32811ce01af2aa"],["x86汇编学习笔记_0x06/index.html","235f8110eeb13e2b7cf434ebb1eb2c97"],["x86汇编学习笔记_0x07/index.html","121b60cadaef3d9b87acfd93138f283f"],["x86汇编学习笔记_0x08/index.html","a3ffc63505dc56a055db16ff3653694e"],["x86汇编学习笔记_0x09/index.html","bffc50b8a60abb7f37bc84c2bb4657fe"],["x86汇编学习笔记_0x10/index.html","0a2008d3ba6b8b01b78fd4533de3d0ab"],["x86汇编学习笔记_0x11/index.html","7f78816cd236f11675f35a2fce6c795c"],["x86汇编学习笔记_0x12/index.html","9b3b09f2d02204023193f146af0976ea"],["x86汇编学习笔记_0x13/index.html","269595f03d3cae85cae4518a646e739f"],["固件逆向01/index.html","47a305f8a17bd6999ba4e706465e59bd"],["汇编指令集/index.html","5e0729b11800aa85a9d578037712aca2"],["硬件智能安全(0x01)/index.html","cd7b1b8e0f0ace808dc5fdedbc092f75"],["硬件智能安全(0x02)/index.html","0c90e7dfc878a44b6eeb403028ce6054"],["硬件智能安全(0x03)/index.html","5be5bd43fb3a0aaf8fb0cf57970ab199"],["硬件智能安全(0x04)/index.html","bee88fdc9f69b6bd17f1f68fd56592b3"],["硬件智能安全(0x05)_/index.html","ca077b08d68713479e49b8d59abe49de"],["硬件智能安全(0x06)_/index.html","c5f65324ddade19e6aad93f886fad862"],["硬件智能安全(0x07)_/index.html","ebb7d1be574515d9a339125592ad9720"],["硬件智能安全导航/index.html","99bc190cbcb9a32674a26e0f0b27e88d"],["硬件电路构成01/index.html","53ad02a4d0681d0444633a0023279dec"],["逆向-基础-笔记_0x01/index.html","3ab62b3830b3614c3eb295fac2eab892"],["逆向-调试-笔记_0x01/index.html","73e4629bafcf08a7fdca18cf86002b2d"],["逆向-调试-笔记_0x02/index.html","58e6e5ed075ff153dc9e7f07159ccb4c"],["逆向-调试-笔记_0x03/index.html","4d3eb22819877b944db3c629b72bd288"],["逆向-调试-笔记_0x04/index.html","45afdd185db2cb70182689d069ad29a6"]];
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








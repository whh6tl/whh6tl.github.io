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

var precacheConfig = [["404.html","5ee52f4a1b255704dab50e10ef8372bc"],["AMQP协议0_1/index.html","706cefa4cf2f6a945ad15d16a2512fd4"],["ARM汇编01/index.html","d6fc360a46b106f36b292cba8150db2d"],["Andoird反编译01/index.html","ad7925b0f9f4c86e3380e71f374d603d"],["BLE协议01/index.html","d9f1d446f9623490ed83f9f32be564ac"],["CVE-2019-5418/index.html","670205ff226e4014d9726cb99655d75d"],["CVE-2019-9766/index.html","4a2741a9a9bd4b53638dd0184e0420db"],["CoAP协议01/index.html","14c56d776a0dea95a114604a2b65c485"],["JS_0X02/index.html","bccca507f3435aa1d436b51713746777"],["JS_0X03/index.html","2834c9948c1e4fabe411fa31230dff09"],["JS_0X04/index.html","1b76e527b1989f597a4b34473e5e1f19"],["JS_0X05/index.html","a5bc50650a9f87fc7a6e2473491a25ea"],["JS_0X06/index.html","79a29b912f8df1374ee8b0cce22eca0b"],["JS_0X07/index.html","f354a6e850d718cc82d551ae18f0fb23"],["JS_0X08/index.html","dbdd907755c46f4f9facc9f698f98d2e"],["JS_0X09/index.html","71b5fad3b6c12ae5cf8fcb48792517ad"],["JS_0X10/index.html","361dcbe405bf1ed750bf42cea6c5c655"],["JS笔记(0X01)/index.html","9c4e3d1de6110ba09f6a231e699c90c4"],["JT808协议01/index.html","7204ccb3797b73bf7b70789ccc1cbebf"],["MQTT协议01/index.html","da30611f397da252a97c860ee3d9ca55"],["NFC协议01/index.html","7e96bc4d1265d18ebbb68c3da12899a6"],["RF协议01/index.html","9a0c29ee4b90a3227e1927263a1aaff8"],["Wi-Fi协议01/index.html","06d2959213d78c772b6ccbd947f776c6"],["ZigBee协议01/index.html","11f607cb51e2fe84c2dff617e6aec296"],["archives/2020/08/index.html","f7d2aa13360edb4590480a74c7501bb8"],["archives/2020/09/index.html","55de7829a71b89e754a139da968abd59"],["archives/2020/09/page/2/index.html","c315ad2bfc3d23de02a9140b956a11c1"],["archives/2020/09/page/3/index.html","0687962d09e3050d6f1ca6ad01715f99"],["archives/2020/09/page/4/index.html","d6956b5ba2be2bf9dcdc0dcb2bc017fd"],["archives/2020/10/index.html","60bddb4d67472275c654b13660e0f4e7"],["archives/2020/12/index.html","a58719c444907c8ae86b395d713352fe"],["archives/2020/index.html","dde13fec9770881be8bd63493cb78502"],["archives/2020/page/2/index.html","f6337a52e0f6b8b8602f4346623666e7"],["archives/2020/page/3/index.html","9ddc7cdbebd878ad98d996a9ecd4b320"],["archives/2020/page/4/index.html","7fa6e0aac7091a9368d92c5f66d0063b"],["archives/2020/page/5/index.html","eebd4443cffd3451136c63df76c260fe"],["archives/index.html","b9510f23677c4c8529d15c661d14e70f"],["archives/page/2/index.html","0f50e9a187f15f5f079c58897470e202"],["archives/page/3/index.html","9c81d74f112c43c4b8c5366a28e6bdab"],["archives/page/4/index.html","bde6b6a3feb76868018d30d60f426f2b"],["archives/page/5/index.html","50fba835fa551d12ce0bfb002ff5a606"],["categories/ARM汇编/index.html","ed0fc548d750c09485d9af286403023c"],["categories/Android反编译/index.html","b63ca416f504400b78a6e10154dbca70"],["categories/CVE/index.html","450072cc0f3d84c2c17ff7e4fe7f382d"],["categories/JS学习笔记/index.html","68fe0f98b3de05d56a930bff6ad3b9ec"],["categories/index.html","a343cfe5f7d5242c9dd9b7c4430f87af"],["categories/x86汇编/index.html","9ecd622a95b9d1eff1df8edafe00a0c3"],["categories/x86汇编/page/2/index.html","70b1c0d25e6a83aa606ef9932b79c43a"],["categories/固件逆向/index.html","4d07959efa2765e4b4f23cd176a42980"],["categories/智能硬件安全/index.html","63ca88880b75a58f3df56ab36166e19f"],["categories/硬件电路构成/index.html","963b149292c30f1d71261665ade6c119"],["categories/网络通信协议/index.html","86bc9729fc4f95debd3f73603310285c"],["categories/逆向/index.html","1c47b476f00d5a863e2d56c8940377bb"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","f1aa202d3cad4cd6c95f8688290c037d"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","59569306b7f40e41bdf4b1d1aa8c23a4"],["page/2/index.html","8c7fafae8da7ba6542e7cec6ba38a298"],["page/3/index.html","e10ede40e7b185a3fd9dc7ae27fac3d2"],["page/4/index.html","2347af870a5959c6c54f6453a89322df"],["page/5/index.html","9f308d3566b35b161ca636d17b9929d6"],["tags/AMQP协议/index.html","6176f692587c92d72cb984441b57da8f"],["tags/ARM汇编/index.html","4e4e674bc9c65e070c6f963f12cb9cb8"],["tags/Android反编译/index.html","1827528f2f23913612bcfdacd4246a13"],["tags/BLE协议/index.html","ed2832cb7cb773e50c7774bacd3b6709"],["tags/CoAP协议/index.html","17dd668038c4ab537e910cdf84ae6aae"],["tags/JT808协议/index.html","8d1b49cd7427710dee5a87cd407a3e83"],["tags/JavaScript/index.html","35ca29d904174896a7a3b06466788384"],["tags/MQTT协议/index.html","56d3ac85aff14b75caf761ce32a990ba"],["tags/NFC协议/index.html","5e203c8bc558505f5b6a601f19c4d8ac"],["tags/RF协议/index.html","a4d7bcc2adad9927658aeea973c02b36"],["tags/Wi-Fi协议/index.html","4038c55fa801bcbcff21ec07cbf8f7f4"],["tags/ZigBee协议/index.html","010bdc99777541ff7ed43cf67836b590"],["tags/index.html","c7143ee161e2c2a98923c863b5258cce"],["tags/x86汇编/index.html","ad2edc48aaf057de3083c566e3285864"],["tags/x86汇编/page/2/index.html","bc12a471d94faadc7890b92ca0d52e8b"],["tags/固件逆向/index.html","b22b2c8226929ac435dba59a11b8fd60"],["tags/智能硬件安全/index.html","9f203b17a11610604354fb4edb9a0280"],["tags/漏洞复现/index.html","99e005f3a84a6aaab3fdaf0cd5a559d5"],["tags/硬件电路构成/index.html","97c3a1172572c626c6f48bfefb4b7769"],["tags/逆向（基础）/index.html","5815d0812225fba00be1e2cb007a28a3"],["tags/逆向（调试）/index.html","9aa4197dc2dcfc7aaecb2b0768e86e3b"],["x86汇编学习笔记_0x01/index.html","fbc5626b9f17f688c161baa9cc9e0f17"],["x86汇编学习笔记_0x02/index.html","2f52ee3c15d75f457f779e9833b864f7"],["x86汇编学习笔记_0x03/index.html","068fdb429ed5cad7fc9ae164fde9734f"],["x86汇编学习笔记_0x04/index.html","a810db4f2a5bf19286e2eddadf29248a"],["x86汇编学习笔记_0x05/index.html","2509494e4a884ab12f845fd33c3f54fb"],["x86汇编学习笔记_0x06/index.html","b90d514bed8f8f35f2f0c01869885fb9"],["x86汇编学习笔记_0x07/index.html","1c12701cc879b5349d9f51f7e74a4655"],["x86汇编学习笔记_0x08/index.html","45c29a4fb49305a8f6356fb9b53e6410"],["x86汇编学习笔记_0x09/index.html","21e24cc854d0008161413a98e75c4b96"],["x86汇编学习笔记_0x10/index.html","bbdb07a0b9c8bab86051dc60939e701d"],["x86汇编学习笔记_0x11/index.html","05e4e7c362b61aa7c4401b20af48d5de"],["x86汇编学习笔记_0x12/index.html","1ff452248c874c6ace8c1c7add2a61d7"],["x86汇编学习笔记_0x13/index.html","a4d93e8e5d588d61dbbc19f093c94375"],["固件逆向01/index.html","8dc64aac3dc81da156f98e0e5024f344"],["汇编指令集/index.html","a0c89816dd497b49aef6d8a2ed92163e"],["硬件智能安全(0x01)/index.html","eaace73074f538a2d4ea9ff8699f2aaa"],["硬件电路构成01/index.html","9923851c01d7f49f52f987aa1613f5fa"],["逆向-基础-笔记_0x01/index.html","c50aa5b31fbcee702376c044cab098e4"],["逆向-调试-笔记_0x01/index.html","edcb43723e5ed8afe5c3079abb222f29"],["逆向-调试-笔记_0x02/index.html","37131ee984955992ebfc56a81e0ec29e"],["逆向-调试-笔记_0x03/index.html","a42d542e0c0185458656b9df514a870a"],["逆向-调试-笔记_0x04/index.html","f8b395d019a10a75f67366e3a0214765"]];
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








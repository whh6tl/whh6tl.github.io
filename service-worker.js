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

var precacheConfig = [["404.html","208d4ad12bc7bbdcf97e312b462ff2ca"],["AMQP协议0_1/index.html","500fd8e4f41201e70bdf83105cae22ec"],["ARM汇编01/index.html","a86e252fba2b979a5096e7b463fd00aa"],["Andoird反编译01/index.html","2422c4b91786553e432a306d112a9bf3"],["BLE协议01/index.html","e5dc58049a6e1fa9bdc9fd2bd6c03b49"],["CVE-2019-5418/index.html","8703397b8d208fe382938aad2e49fe9c"],["CVE-2019-9766/index.html","c1850e3ef078548dda2b0b0a0a17723c"],["CoAP协议01/index.html","b7f75759228394f4ff6b380fdb5364ba"],["JS_0X02/index.html","6179ee78b7fd64d56144f0d2a06aa2b2"],["JS_0X03/index.html","9eecb5c98b8efa5f3650f90a02924022"],["JS_0X04/index.html","853c2ef9b99fb2c4e1520af2ce13a647"],["JS_0X05/index.html","010c0e46fcb9f8eeb761a3d005462359"],["JS_0X06/index.html","fc25654066ce8040f6f1931ad262c365"],["JS_0X07/index.html","3923be9c364fd245b2afee6408f80bba"],["JS_0X08/index.html","aa4a005db861605785691ed292c1e384"],["JS_0X09/index.html","7993f968949162b972c1e85b50da7ed6"],["JS_0X10/index.html","4b895f3baa167c8a713f5981473121a1"],["JS笔记(0X01)/index.html","592aded553a6970fe30950c5731c97c3"],["JT808协议01/index.html","78778897d342d89386b94180b2e32495"],["MQTT协议01/index.html","638845c6a4039446375c789f35602c19"],["NFC协议01/index.html","5defe17c89998b2053dfba5e0388118b"],["RF协议01/index.html","228263bab784918f5d0a4c844bad4d81"],["Wi-Fi协议01/index.html","2f306c67d265234beb197864baee04a8"],["ZigBee协议01/index.html","4c1595ee7363e873240827ae3c7d4f3a"],["archives/2020/08/index.html","36df8d9841f7586c40c586a8a5e2773a"],["archives/2020/09/index.html","ae8d151f4b69ddee348e961b88a8cab5"],["archives/2020/09/page/2/index.html","aa40c2db327310089921351963adf33e"],["archives/2020/10/index.html","a651ae3fb676469eda9ca0abfac63f18"],["archives/2020/10/page/2/index.html","a2e7d24ca0ce92397a6497da81df71a0"],["archives/2020/12/index.html","bcadcb4e3323260c3be9a1c271844ca6"],["archives/2020/index.html","8603d03d2aa4b2d978a5160ba2c65df6"],["archives/2020/page/2/index.html","6c8d35cfb43843c921a3ac190c0e2f92"],["archives/2020/page/3/index.html","038749d24624df7476838abf76ac48d2"],["archives/2020/page/4/index.html","561d87e80c8bf5a9c99180fc2f685783"],["archives/index.html","d15202d693b27671bb0196363d485ec7"],["archives/page/2/index.html","c2c18e6332849977aee8734449ba2a7c"],["archives/page/3/index.html","d7e8fe38fc6d9a7fb033c7641b82a478"],["archives/page/4/index.html","138af0a48c38bbff2662c3be5203e1ef"],["categories/ARM汇编/index.html","3fdde7c43c3c539c1608f541290ca73b"],["categories/Android反编译/index.html","54f0e7cc66db19ca5a9fe5202f40ac94"],["categories/CVE/index.html","e9ab9ac9f58790793e312058aa0f0007"],["categories/JS学习笔记/index.html","eb268f7606ab5ac64d5ce2bb169d7739"],["categories/index.html","87754447409fdb2540ad3fdd4eb4eccc"],["categories/x86汇编/index.html","e6ba9c0ef308350353926b6b99501bae"],["categories/x86汇编/page/2/index.html","216813759301ea89b5726aaa5ecf8ef4"],["categories/固件逆向/index.html","5ebf860c2814615b501860b717a86336"],["categories/硬件电路构成/index.html","4a30f379cee6e309469e6a1fb80bd427"],["categories/网络通信协议/index.html","2196b85371f88489ed8ec3babee0ff12"],["categories/逆向/index.html","58c670f7b35d7a9eb9d27134dc5f685a"],["css/index.css","57ddfe330d43d455a741d80564941694"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","8e16b6833b4fe43fd8c3568dd632912a"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","b1e52a61504e1145aa866c8d406df246"],["page/2/index.html","6e1e20c3fd066d92e83fc51346839ef1"],["page/3/index.html","9b04453fce9b2c961821c19050d822e6"],["page/4/index.html","0f90ef24c9e124e01dc3082a6f3cd01e"],["tags/AMQP协议/index.html","4596e7853a673bff758c158ce5465eef"],["tags/ARM汇编/index.html","d7ef0eedaf891757509b5c9f16b60e4a"],["tags/Android反编译/index.html","76cff2bfb383837161dac52cffbe5f36"],["tags/BLE协议/index.html","7068c6ba065e082e6744218489dfdd54"],["tags/CoAP协议/index.html","9024c9294c94ef1a570d3c35644e68d5"],["tags/JT808协议/index.html","19bd3a802702f0ad510598eb137b6b8d"],["tags/JavaScript/index.html","3aa52b23d498827080ff48edaff721dc"],["tags/MQTT协议/index.html","3c277d655294b495248f82b86ef9312d"],["tags/NFC协议/index.html","56cd2726504e024f61db493b802a97cd"],["tags/RF协议/index.html","e86af4c94df1859a02ebb55fb2c18e8f"],["tags/Wi-Fi协议/index.html","03e9f4182d03c83e38a34ac01b57ff50"],["tags/ZigBee协议/index.html","7c30ccca6d6322c60bbb9de62af7d7b9"],["tags/index.html","9084a995daee6bde12d6d9ecb080cf61"],["tags/x86汇编/index.html","652ac16bbdae116095654b09baf6c74a"],["tags/x86汇编/page/2/index.html","5704f59681da7f88ed89abb4d3f57a2c"],["tags/固件逆向/index.html","23cb7ecdb3f1515a78af5e549947f716"],["tags/漏洞复现/index.html","922368810d86e11646f4102803f3e5ea"],["tags/硬件电路构成/index.html","b8cf6719831050755f8e70b0b95cb8d3"],["tags/逆向（基础）/index.html","3c64b7597459bfa269b18834e2386afb"],["tags/逆向（调试）/index.html","036c05b77d18e17f12c903ac64c3d91d"],["x86汇编学习笔记_0x01/index.html","38675a6d679eadaf4202cb8706e6caf4"],["x86汇编学习笔记_0x02/index.html","ca49a27bfdaa3556ead83ba1450d1e74"],["x86汇编学习笔记_0x03/index.html","cd02b16ea69cdfc8d89fca26284d3668"],["x86汇编学习笔记_0x04/index.html","20a3bbad786e0c44b392ef89a00a3d8f"],["x86汇编学习笔记_0x05/index.html","4ffbe37172da5fb077b2f6e8eb50b540"],["x86汇编学习笔记_0x06/index.html","126724b98a8202dea36031d4c0bb6936"],["x86汇编学习笔记_0x07/index.html","5755b6a261e5fc8c2e9b65701c0d9790"],["x86汇编学习笔记_0x08/index.html","fbc978c7a671aad5d0eb118a32f29c99"],["x86汇编学习笔记_0x09/index.html","7df26660fa441884b471628d6a81ddcb"],["x86汇编学习笔记_0x10/index.html","73ae0fe46dad51618ef1202b24d1294a"],["x86汇编学习笔记_0x11/index.html","681804ed55258f764e950ab0c3e924e3"],["x86汇编学习笔记_0x12/index.html","252bb754ad23f05f46bdc491be3995c9"],["固件逆向01/index.html","ac13e1597c55f867368de9e609842b3a"],["汇编指令集/index.html","695f2b81284f8da22c136f85a33fcb70"],["硬件电路构成01/index.html","739124505a0d2ca77ad0b162a52566d1"],["逆向-基础-笔记_0x01/index.html","588f259ade41137a9773c6e08551fc94"],["逆向-调试-笔记_0x01/index.html","58103e807ef4beff0fc7954ce8db2a4f"]];
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








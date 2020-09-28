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

var precacheConfig = [["404.html","1f44ff516f19e1ac70556db497fc26aa"],["AMQP协议0_1/index.html","894a82fa771fe584c56c06b0ea423de1"],["ARM汇编01/index.html","80b7bc6274719ea6554859f57cee0d48"],["Andoird反编译01/index.html","81e4a0fce73c9a0fe4a0e00ef09b6a14"],["BLE协议01/index.html","6ac4c345c0e5b2377c293553cadf8d3d"],["CVE-2019-5418/index.html","8b209305d0c748151fba1a4553d3dde6"],["CVE-2019-9766/index.html","bbd35fdb70614026cffc299267033761"],["CoAP协议01/index.html","3a589440731837ca9f9ab80be76d73e5"],["JS_0X02/index.html","23bf82efd2391810adb99d1ed65fd74e"],["JS_0X03/index.html","a82bf1e7c197b5bbbd97beb519792ca8"],["JS_0X04/index.html","8f55bb941fcb3d3a90a708ef09dec6f8"],["JS_0X05/index.html","49b112d0e8d9b67c58aa9138b614e0db"],["JS_0X06/index.html","10d15668ebfe40cdb5f735828ac864ae"],["JS_0X07/index.html","26efb765c5a57a89b759a9ad78270b7d"],["JS_0X08/index.html","331e3dfddb780b27795bf7cb237cc957"],["JS_0X09/index.html","5ed256e6dd8aa6d902a6f55e5b392711"],["JS_0X10/index.html","1e4b11855319bd688176e4937f6141b1"],["JS笔记(0X01)/index.html","7243bfb099e5749c1e8e7a5040664e49"],["JT808协议01/index.html","45bab3b7a412b3ef2448d8e61ba19155"],["MQTT协议01/index.html","356264ffd14f035f30bf328d8bd8adbc"],["NFC协议01/index.html","17b91df4075a131515e5066aad53e20c"],["RF协议01/index.html","c421d51e30abf4a12abd2e5730338de6"],["Wi-Fi协议01/index.html","cc58560c16aa1b9b0f4c8d0a8cdb1011"],["ZigBee协议01/index.html","72183b93b2c949e150faf64fb17e14bc"],["archives/2020/08/index.html","e6e785e7dc492b2ddaf0dfaa6fb18425"],["archives/2020/09/index.html","52554ae412b6731f53c28a8951522692"],["archives/2020/09/page/2/index.html","63770ac4ee27e01a3a1b18604c121caa"],["archives/2020/10/index.html","2508172accdba41cb368b42a86f338da"],["archives/2020/10/page/2/index.html","0a34617c0e4235895245e7acca23a00d"],["archives/2020/12/index.html","98dfd69f382547bada3767318f12af09"],["archives/2020/index.html","a6b2809604f6815fa534e1c043845284"],["archives/2020/page/2/index.html","df5010a56d12a997736e5bce745d21a1"],["archives/2020/page/3/index.html","728d483d989973dd1bac4ec23561d6e1"],["archives/2020/page/4/index.html","79a19ed89fd2fe2f3b777c129c62a0da"],["archives/index.html","ac6af6cdcd42add2c23cf57cf175b41e"],["archives/page/2/index.html","de27f2f9e95cff2f17fe77d84ee40657"],["archives/page/3/index.html","8ad23ee9ef76877ad5f11efed73bfe22"],["archives/page/4/index.html","8248f41f0e9df4784041e6fc57ceef79"],["categories/ARM汇编/index.html","19df61dce2199d0496bbfa6edbca06a7"],["categories/Android反编译/index.html","59c27b4c7b364fd39371b34fa36f012d"],["categories/CVE/index.html","a7d59a8f3d3fd67dfe0e51843a837149"],["categories/JS学习笔记/index.html","17f5e4c2f0c4e9b0d4baa5e551cd329b"],["categories/index.html","404b6699106dde5b84549aed2aad696e"],["categories/x86汇编/index.html","a1f351c1796a2fceca016c414784b35c"],["categories/x86汇编/page/2/index.html","182c4b73fbc31c792603e6b14182e9d1"],["categories/固件逆向/index.html","9a6a79f781fb79a662126a72ee01ff5c"],["categories/硬件电路构成/index.html","6872dccff02c869d10bbf357d1776ab0"],["categories/网络通信协议/index.html","3c28f50bdc1763b0d92e5da043be8948"],["categories/逆向/index.html","e2eb70220189369391b877e553a29989"],["css/index.css","e190ce4fce7067c6a08b6350927527e2"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","1c91ce542d7b931e55d2ef15a929d28d"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","4890c0ae969a68a39d2ea884866ed21b"],["page/2/index.html","abd4711daf9abaa76f79b76bf7a7ea4a"],["page/3/index.html","e065d1250d084fa0e681fe1ddede367a"],["page/4/index.html","fb6640ac15c4a6b1fdab86f4442d450a"],["tags/AMQP协议/index.html","63af56e964b304d72cb2c46388fdef37"],["tags/ARM汇编/index.html","8c876f801cd382f0872d1c39227ab816"],["tags/Android反编译/index.html","ee40cc613b229354c875757c029daf7e"],["tags/BLE协议/index.html","074c89c728fa7546dc8002596f650e04"],["tags/CoAP协议/index.html","a20ba2914cf7468eca902f974dbf5320"],["tags/JT808协议/index.html","6574e9046fedfe699ef535d9cd06d14b"],["tags/JavaScript/index.html","7848d2d23fd419ccd8ef375ed4534d53"],["tags/MQTT协议/index.html","a6ac9f324f5d673fcb0f540e26def26e"],["tags/NFC协议/index.html","efd3d0eac3c451276aee9f1859c0f086"],["tags/RF协议/index.html","cff5b71f275cbf89480f8dccc5cc459c"],["tags/Wi-Fi协议/index.html","59d0cf0f5ce16fb555caab084db83e30"],["tags/ZigBee协议/index.html","6e9cf7ee5867f11f36a8235e0dc689c2"],["tags/index.html","2577b52e6a9f5194dd27ed553f82f827"],["tags/x86汇编/index.html","6dd5ab78a6d7010e2791fdf16b933453"],["tags/x86汇编/page/2/index.html","ec4701c1c3f59128454c8d91d487668f"],["tags/固件逆向/index.html","151b0d8ae5a03bbdf217e5882c37a9a0"],["tags/漏洞复现/index.html","99c5138515172a1550cd32b1985768fe"],["tags/硬件电路构成/index.html","afdd68448e9fd5c76021a37c1c604ad8"],["tags/逆向（基础）/index.html","3b24b275b84da4ff999c94494d82185a"],["tags/逆向（调试）/index.html","b274e426091c61332ee368f9695e0fbe"],["x86汇编学习笔记_0x01/index.html","e5af761d332d203600e1f692bc2e29a1"],["x86汇编学习笔记_0x02/index.html","d755b15602bf80bc500b6d6d8f20fdb3"],["x86汇编学习笔记_0x03/index.html","05f2dd80af4261f22f7103c8ff3943c2"],["x86汇编学习笔记_0x04/index.html","f8fe709780544334af9f2aad3b12b902"],["x86汇编学习笔记_0x05/index.html","67fe100fc1916e3d72bb9676169e205c"],["x86汇编学习笔记_0x06/index.html","f965845de08cd587e0d7664bc03d0504"],["x86汇编学习笔记_0x07/index.html","a3ded0e576272f9c78192f2db98c2ad0"],["x86汇编学习笔记_0x08/index.html","91c94034ad5bf13969b1fd84560cfba4"],["x86汇编学习笔记_0x09/index.html","0ac86a1b6a7cd2f1adba9d341e91c279"],["x86汇编学习笔记_0x10/index.html","f7d15b151a834a161dafd5075d98f646"],["x86汇编学习笔记_0x11/index.html","4a821ae0a6ebea2731e78eba3baa8ad6"],["x86汇编学习笔记_0x12/index.html","7adae7f3b2600400dfb3b50120627a4a"],["固件逆向01/index.html","7f35ba6e3900e443e7d687a555bb91e4"],["汇编指令集/index.html","65909e838034f90a90d9ac6ba1bf034d"],["硬件电路构成01/index.html","24174fd07b169c1a67b71015b03e2c5f"],["逆向-基础-笔记_0x01/index.html","b1ae89c242d9a18c3c99430f7b429b83"],["逆向-调试-笔记_0x01/index.html","3e11a0b354241012476b58064cbe9e2d"]];
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








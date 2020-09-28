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

var precacheConfig = [["404.html","564ba78dc0fc8038585184498c27d8a2"],["AMQP协议0_1/index.html","5c6c5a653640a449d4bfc8142b825889"],["ARM汇编01/index.html","de361b27e39dbed32460a897604ab015"],["Andoird反编译01/index.html","1ac65b7955f7a3c3d2a52a26df55d1f8"],["BLE协议01/index.html","90e72fac67f5158a498363558001eee7"],["CVE-2019-5418/index.html","298d1a1c404110f082e3293922655d1c"],["CVE-2019-9766/index.html","386250d3bab8840fbb75104ca6b9411d"],["CoAP协议01/index.html","8259dadcc9bae0e8866d683e6a44b876"],["JS_0X02/index.html","3d4e2c0b4879ad24a9cb1f2fa79b5b4b"],["JS_0X03/index.html","728387dd28aa5f9d0d8d087a961d4bb7"],["JS_0X04/index.html","84c384b2f94ec92a9a95d39aea176913"],["JS_0X05/index.html","a7a8394e3e661dc677f1f5f1ff2ef890"],["JS_0X06/index.html","18270d20599cce8249a31c1482cdc40e"],["JS_0X07/index.html","feebdb82dda86c6d5b37e554e8ef9358"],["JS_0X08/index.html","3c80d0c72f46d86edda7d987f2c1ea28"],["JS_0X09/index.html","549957a23e466a70170af719becd0987"],["JS_0X10/index.html","b62a6af544a5375e2a8b88f311e0eea9"],["JS笔记(0X01)/index.html","9e0e906b3149c6e843d3964ab519fbb2"],["JT808协议01/index.html","5e4e54d46ea840845fec372536a4e0d5"],["MQTT协议01/index.html","7031ea1f54af29fcd9197603cba76cd5"],["NFC协议01/index.html","5dc4447cb7b7cdba98cc394c822e5b66"],["RF协议01/index.html","3b191c483ab8655f243ea0a19cd2b7c0"],["Wi-Fi协议01/index.html","ff5c846bdcfbf3903512f0ff964a0adc"],["ZigBee协议01/index.html","cc59628693a60f1201eb372edb4ada08"],["archives/2020/08/index.html","10fb3982960e495c8e833e98e92de71a"],["archives/2020/09/index.html","180d7454b9446af921dcbc2847c10439"],["archives/2020/09/page/2/index.html","16fd5172e82009103dd0c40cdd6d9d5a"],["archives/2020/10/index.html","b5671a144acc850926e56f1f14ac32ff"],["archives/2020/10/page/2/index.html","9ba84f193dbe75bf0b5ffaf6bc34e23c"],["archives/2020/12/index.html","25e86384777a48dee34935a363bd1be2"],["archives/2020/index.html","3db3ebe60d9c3d615b5a31781101f921"],["archives/2020/page/2/index.html","24d1ec0437aa9b9b6e5949d384be4a84"],["archives/2020/page/3/index.html","86efed88d69763cc4f35488c614a05a1"],["archives/2020/page/4/index.html","3ef5b0a26880731d23b372d3dbc03a45"],["archives/index.html","6d3e2612ad864f83bcd1e5ae2c5933b8"],["archives/page/2/index.html","64c6e6b41827c259fb19925839f5545d"],["archives/page/3/index.html","dc1058c8c455fadf04d8a59ec77670b5"],["archives/page/4/index.html","c44d027003c515696ea507fa7acf7731"],["categories/ARM汇编/index.html","931f8ceed12a764ba711eec6e5fdd003"],["categories/Android反编译/index.html","047b6d31ab25ad326a1bfc29bdb248f4"],["categories/CVE/index.html","bfab93af1fea3ead8693b42ba2dd1d52"],["categories/JS学习笔记/index.html","53edd9e84e5a2deda64ec198a2e10fb1"],["categories/index.html","b20860c7f7c7df452b1b159e6384b8f8"],["categories/x86汇编/index.html","71fbe159d150a27baa814d50e31a9e92"],["categories/x86汇编/page/2/index.html","33500969d1df303e02078de2cbdb1dbc"],["categories/固件逆向/index.html","8cb92efbd0127b8d68afbf43a7af88f3"],["categories/硬件电路构成/index.html","c7a9ca0ad720bce6342444fc80ab4ea5"],["categories/网络通信协议/index.html","8a5664d2b5704a1aad92126a8cd0de56"],["categories/逆向/index.html","ffa8e7c26446fa8437e85eb052023ce7"],["css/index.css","e190ce4fce7067c6a08b6350927527e2"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","f6522cc332df8d4d9c0b1c99c2d30f6c"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","89e3f00f0711ab5e56479499e5d5670f"],["page/2/index.html","5242dedf4ce5a8e506286b52be2983c3"],["page/3/index.html","4267b8515b3e52bc2279d891c212d316"],["page/4/index.html","5e8954f976cfe1d7d78f83e54d04faf0"],["tags/AMQP协议/index.html","7c501b9b9e6f4c925aec445d232431da"],["tags/ARM汇编/index.html","6ede78eb82fbac7c4dd254df735cdadd"],["tags/Android反编译/index.html","ae56c662e4e9599e7ebfd017d436273f"],["tags/BLE协议/index.html","c0780ee0542d09ecc14e645a424eef7e"],["tags/CoAP协议/index.html","b8bfccd9dff1cb5fe40351aacfe1f7f3"],["tags/JT808协议/index.html","f1b3609bfecf7cae0bca49202b870608"],["tags/JavaScript/index.html","509f13baff72b08a5a2832a2970f59de"],["tags/MQTT协议/index.html","4521ce349ac80aeb8e9fe081cc963658"],["tags/NFC协议/index.html","6bbf4e500e3bd0a6957dba35dadd0191"],["tags/RF协议/index.html","ac85ff5e4d46d547d454d1d1af0e1d75"],["tags/Wi-Fi协议/index.html","ebd02c4ba024aa06d330197712d69925"],["tags/ZigBee协议/index.html","49ff8374a94632cc14ea7750e7f7fd85"],["tags/index.html","568510583034b97b3c88da52689bc775"],["tags/x86汇编/index.html","baa76c1f1ef363a021162afe0e2758c7"],["tags/x86汇编/page/2/index.html","886a0bcbc6bcfa06e2555beb978d0f32"],["tags/固件逆向/index.html","65e59abdaab174542cf4d8ff0ee58712"],["tags/漏洞复现/index.html","79331eca1f628b620e260d5172862f88"],["tags/硬件电路构成/index.html","37c6f42863aa482f48b91361004e147c"],["tags/逆向（基础）/index.html","c2b6f441fb348ad836ed668bc47f299a"],["tags/逆向（调试）/index.html","607189b4338f66b6d002e160f875b41f"],["x86汇编学习笔记_0x01/index.html","715c5713cb6d57f46a3e0d5f58fa2dd4"],["x86汇编学习笔记_0x02/index.html","0ea7c6658cdc7da73dc5ad3a0b2395bd"],["x86汇编学习笔记_0x03/index.html","6dc7b12528d8b91c94ed9d245bb0ed6a"],["x86汇编学习笔记_0x04/index.html","7611db8da72502ee8ee297d107951fd3"],["x86汇编学习笔记_0x05/index.html","0810750841ad96953dcc1538e7deb8f8"],["x86汇编学习笔记_0x06/index.html","0290ac8580e018fa59686ff9796a7801"],["x86汇编学习笔记_0x07/index.html","89909ecd6984b3c55a48d84add788a5d"],["x86汇编学习笔记_0x08/index.html","0467ba1e180908770f6b9dcb2e948ee1"],["x86汇编学习笔记_0x09/index.html","0bc4e1e4a17b05f305dd251c2a2fb4e6"],["x86汇编学习笔记_0x10/index.html","e1673685eb9cf4aa0097a618caebd86b"],["x86汇编学习笔记_0x11/index.html","e9e854f78e15e6800f882b6a9cb9d117"],["x86汇编学习笔记_0x12/index.html","d8e44750170df835128ec6987dc1e367"],["固件逆向01/index.html","c11e21a00b6e31b877312fa733faf81c"],["汇编指令集/index.html","65f5b05776e518d7bafab96de4186edf"],["硬件电路构成01/index.html","f9ed0719b876951936d42264b9f2fcf8"],["逆向-基础-笔记_0x01/index.html","f90944bb228b3292e0e353400bd0a208"],["逆向-调试-笔记_0x01/index.html","7090bd5d4f912166caca45cd01d51a7d"]];
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








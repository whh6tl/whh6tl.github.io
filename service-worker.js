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

var precacheConfig = [["404.html","78bb8d5c68c65c31cc64ecf3e2234e6e"],["AMQP协议0_1/index.html","c494df5ce5f457e28fd7ce69eebe6deb"],["ARM汇编01/index.html","336f0ea6553435f015832e5ebc623b0b"],["Andoird反编译01/index.html","e8b7797c1aa1cb2085b7f78e5b9a9587"],["BLE协议01/index.html","a7dbcd283e6ee4091dfe109cf2b32f80"],["CVE-2019-5418/index.html","5280dc7bf897983c0c3ac2ffa6e86eb2"],["CVE-2019-9766/index.html","13f504cac06b9f6a91fb3a7890050b69"],["CoAP协议01/index.html","6ca222969dae82f897a0add1707b1851"],["JS_0X02/index.html","06f725fbbe62456e23e7e4b1d491ce52"],["JS_0X03/index.html","f96fd179b4216d9f6c16ae13d2f60f99"],["JS_0X04/index.html","4bfd98152d471b261c19972cda6a2b7c"],["JS_0X05/index.html","dc307f822b3e3dcd318f3e598e4cb18d"],["JS_0X06/index.html","2dc01a867ad3fd2af153d3e269eda7fa"],["JS_0X07/index.html","e1d5818b03beadf4fdd8821c167c4df9"],["JS_0X08/index.html","eec8c2935767954c9766986362965098"],["JS_0X09/index.html","051b94eb8ca6c35f6cead6ab75feba7f"],["JS_0X10/index.html","cfea07c8a986a9996c768af0216be1be"],["JS笔记(0X01)/index.html","3d6bd08e5847bd58e8de77fd980d2afd"],["JT808协议01/index.html","d08844c7ea221945ae80e4c7aaebbe74"],["MQTT协议01/index.html","991c5e3ba8fc27b9692a5d53a4d54712"],["NFC协议01/index.html","0f8e7963dc54ad84f0f2493784005d95"],["RF协议01/index.html","0972e4c6a0cb695874b8cb73560fc113"],["Wi-Fi协议01/index.html","b0f28fc32a4da2645d82aa23a157afce"],["ZigBee协议01/index.html","2b82202831f90d52eb58016e52df16fd"],["archives/2020/08/index.html","1b963d1feb213e175c818ec6b3209417"],["archives/2020/09/index.html","10aa55870083100f8eea9f0f57a9d8d8"],["archives/2020/09/page/2/index.html","c1681af62c70be5c007a348143507602"],["archives/2020/10/index.html","b44fdc4e5b8dc2b4383ed25f2442fc8e"],["archives/2020/10/page/2/index.html","ab70c9922890e380c4494fa1297c4f32"],["archives/2020/12/index.html","b44884bd106710c9234662a08b15367b"],["archives/2020/index.html","b897a30d52344b3a747b925162c1975f"],["archives/2020/page/2/index.html","69024e27bdbc4fd632ede312beeaaa36"],["archives/2020/page/3/index.html","2120716a4f974c0e584f89eb4f9c2168"],["archives/2020/page/4/index.html","8221013096e0e666e31b01c0d183283a"],["archives/index.html","8fd0e110db4ad42c3da3cf2c91d51d0f"],["archives/page/2/index.html","6f3baf2653931d579dd8dbbc6a0eaf9a"],["archives/page/3/index.html","d030f6793194ddb92924fd03740d6ae0"],["archives/page/4/index.html","d452d1dab96fa383d180538f94731d66"],["categories/ARM汇编/index.html","230be48060db04331154636e9bc78f8e"],["categories/Android反编译/index.html","9058fff79174b49f0789fe062bc40ae2"],["categories/CVE/index.html","ad4f52dcecb10ad7a78d590b89a49500"],["categories/JS学习笔记/index.html","a348e7a3df9366a1bc8304ce8f69fe5e"],["categories/index.html","3f08be266f01932361e26681482237e6"],["categories/x86汇编/index.html","ced4e4376fbd68640399feab5410a5c8"],["categories/x86汇编/page/2/index.html","f1dd082ccafc7a0accbc052e62436423"],["categories/固件逆向/index.html","6cf8cfed89027508ce3b36e464d01466"],["categories/硬件电路构成/index.html","3cdea661fedaa45ce4c7d1ccb157eccb"],["categories/网络通信协议/index.html","1f17558f9691a561afe600a8291d60a7"],["categories/逆向/index.html","e56ad20a42839038ec0ee8eb8bde536d"],["css/index.css","e190ce4fce7067c6a08b6350927527e2"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","84db262d39f7ac67f5e4217e7f29b6ab"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","9fd55c9e2ba736b280fb7234f80a3889"],["page/2/index.html","fa7a217ec45167fa653a6b8e80522d9f"],["page/3/index.html","7eab7eb7e41360bedb4d0b1da6fb09f4"],["page/4/index.html","2624067cd9e7b0fb13a72289a6c6d2b2"],["tags/AMQP协议/index.html","7f83cfddd544c40e793fdf9a2aff4a4d"],["tags/ARM汇编/index.html","0ade172ffe4cde1dd1659bbb3c7d4a23"],["tags/Android反编译/index.html","cc38a4886dddac0696a20f231cc9278d"],["tags/BLE协议/index.html","d01927ddfc416b899df9e381fee8fa58"],["tags/CoAP协议/index.html","32934c51ed061373159c25bf656482c3"],["tags/JT808协议/index.html","af76a28651b85369bd97dbbf55db26b9"],["tags/JavaScript/index.html","9082610a8c20bfd66beba4353feef3d6"],["tags/MQTT协议/index.html","1a3a65eb8cb6fce274367b3c3b9b6abb"],["tags/NFC协议/index.html","392ba855a866e1fb668eddae626385a7"],["tags/RF协议/index.html","ea9db21141e9d1d7d57e8a621ca15712"],["tags/Wi-Fi协议/index.html","b24b1cbbc20b5410e8d522a68b7713d7"],["tags/ZigBee协议/index.html","a68331ac52d74c79b7a062a7b45220d3"],["tags/index.html","197ed5b7db05fa209c6dc382273b92ef"],["tags/x86汇编/index.html","acb81061aac5b35a918f23ebdeb407c4"],["tags/x86汇编/page/2/index.html","5f2eb01506a0acbe5dfa041d29f7312f"],["tags/固件逆向/index.html","ee750e5d53868830425bc052b1768437"],["tags/漏洞复现/index.html","06c90297a0e222243ee910ae1f51c81a"],["tags/硬件电路构成/index.html","bd9921df496d5565c06357f1fda1e812"],["tags/逆向（基础）/index.html","09e057428aae9715eca5f9159b9955ea"],["tags/逆向（调试）/index.html","ad56db32e4b8b2b1be24425c4d5250c3"],["x86汇编学习笔记_0x01/index.html","fd33c1ce708cbc03aaa5272192861f68"],["x86汇编学习笔记_0x02/index.html","57ec618717f90eb72fcedd104a98d1f5"],["x86汇编学习笔记_0x03/index.html","763c28156771fb047211328924d3d17c"],["x86汇编学习笔记_0x04/index.html","710d5cf6395ddb29e9583c7742ed2bfe"],["x86汇编学习笔记_0x05/index.html","4a979b4c9fb4fe202d0c303812a5b1ff"],["x86汇编学习笔记_0x06/index.html","08e568807ff0cada4351a80a04d9657c"],["x86汇编学习笔记_0x07/index.html","bffc2c6f62f84628455aaa112c9ab49d"],["x86汇编学习笔记_0x08/index.html","d48c8ee17b582a5669769bdd3e09efc3"],["x86汇编学习笔记_0x09/index.html","dca56667d71e4afefb2d130c0499f7da"],["x86汇编学习笔记_0x10/index.html","5ca8eec5c4e18a927da38dafbc5e53a0"],["x86汇编学习笔记_0x11/index.html","71fd266e25ba6c15a421a025cfaefd53"],["x86汇编学习笔记_0x12/index.html","cda1803fec3a10b570a36e81a46803aa"],["固件逆向01/index.html","ab1fffc43da6db3cb3930652a0053ccf"],["汇编指令集/index.html","a9bddd13e9b935ea47aa1d4a740217fa"],["硬件电路构成01/index.html","11f0558f07ade4e53bd2050a62e43084"],["逆向-基础-笔记_0x01/index.html","5f59d01671f156771df578dca47b768c"],["逆向-调试-笔记_0x01/index.html","f5ffff15d92f7ece68be84cd8e351f7b"]];
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








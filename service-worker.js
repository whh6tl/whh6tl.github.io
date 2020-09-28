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

var precacheConfig = [["404.html","a3c7cf3ccf31d46e371e05a339f3f062"],["AMQP协议0_1/index.html","c494df5ce5f457e28fd7ce69eebe6deb"],["ARM汇编01/index.html","336f0ea6553435f015832e5ebc623b0b"],["Andoird反编译01/index.html","e8b7797c1aa1cb2085b7f78e5b9a9587"],["BLE协议01/index.html","a7dbcd283e6ee4091dfe109cf2b32f80"],["CVE-2019-5418/index.html","5280dc7bf897983c0c3ac2ffa6e86eb2"],["CVE-2019-9766/index.html","13f504cac06b9f6a91fb3a7890050b69"],["CoAP协议01/index.html","6ca222969dae82f897a0add1707b1851"],["JS_0X02/index.html","06f725fbbe62456e23e7e4b1d491ce52"],["JS_0X03/index.html","f96fd179b4216d9f6c16ae13d2f60f99"],["JS_0X04/index.html","4bfd98152d471b261c19972cda6a2b7c"],["JS_0X05/index.html","dc307f822b3e3dcd318f3e598e4cb18d"],["JS_0X06/index.html","2dc01a867ad3fd2af153d3e269eda7fa"],["JS_0X07/index.html","e1d5818b03beadf4fdd8821c167c4df9"],["JS_0X08/index.html","eec8c2935767954c9766986362965098"],["JS_0X09/index.html","051b94eb8ca6c35f6cead6ab75feba7f"],["JS_0X10/index.html","cfea07c8a986a9996c768af0216be1be"],["JS笔记(0X01)/index.html","3d6bd08e5847bd58e8de77fd980d2afd"],["JT808协议01/index.html","d08844c7ea221945ae80e4c7aaebbe74"],["MQTT协议01/index.html","991c5e3ba8fc27b9692a5d53a4d54712"],["NFC协议01/index.html","0f8e7963dc54ad84f0f2493784005d95"],["RF协议01/index.html","0972e4c6a0cb695874b8cb73560fc113"],["Wi-Fi协议01/index.html","b0f28fc32a4da2645d82aa23a157afce"],["ZigBee协议01/index.html","2b82202831f90d52eb58016e52df16fd"],["archives/2020/08/index.html","35877dc86678c5603bc6179ca7801621"],["archives/2020/09/index.html","bd7f4b3db499bf66bffa4db906500707"],["archives/2020/09/page/2/index.html","1f0f3ed979a9ccf11de512e6a960169d"],["archives/2020/10/index.html","7dfc61bbaaa73f0fb9326aee12bdbea8"],["archives/2020/10/page/2/index.html","2df7d2ffc14c0ef34df37c9edf1ce36d"],["archives/2020/12/index.html","a03cd266c642f6cf0ed3442a66fb460b"],["archives/2020/index.html","a6eaa2b422ebfca9df185e6227b6d58c"],["archives/2020/page/2/index.html","62186839b697bebad0c2cd811e977281"],["archives/2020/page/3/index.html","5771480a9855e8e05217b18755ae7a5e"],["archives/2020/page/4/index.html","ff950658ca3643e68b18613094ee6132"],["archives/index.html","36038c66cc24ef138b394c8d23862ef2"],["archives/page/2/index.html","ed3903ab08bdc8b02cc4603c560b32ff"],["archives/page/3/index.html","7db9ee5902f31beac70ee62cae268da1"],["archives/page/4/index.html","e0e7a33292ef9402527de82a95529692"],["categories/ARM汇编/index.html","e4996fa6a26c187d7ee14c6b4b3ec820"],["categories/Android反编译/index.html","642501702d55090d809ce314d28792d4"],["categories/CVE/index.html","0b0655f1e89ab57ac2b07e87d50244ab"],["categories/JS学习笔记/index.html","c15cff767d0c6be7df7f3a5165bd07f4"],["categories/index.html","3f08be266f01932361e26681482237e6"],["categories/x86汇编/index.html","866ce57db0da4475f81b1dc3b0723f13"],["categories/x86汇编/page/2/index.html","cf3d2f120f669d219a04aa1756a57f6f"],["categories/固件逆向/index.html","6232b4717832ad87d652310137b82507"],["categories/硬件电路构成/index.html","324fe4c754b74386b70395fef116f665"],["categories/网络通信协议/index.html","702e9ba8ee0fce4e4ef1bbe238106944"],["categories/逆向/index.html","d63f8f3f93d583646ca218b9c9e181a1"],["css/index.css","e190ce4fce7067c6a08b6350927527e2"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","06bdd962ff074574f88b0c256b6fd6f8"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","9fd55c9e2ba736b280fb7234f80a3889"],["page/2/index.html","2a6b49e5925da8747245e45df77e8c97"],["page/3/index.html","a5b3ecb24e7ed7f8a4b5bf7fadfcb25f"],["page/4/index.html","b705aa4a2b327a77560cf5473af400fb"],["tags/AMQP协议/index.html","947c2f22b6b835562aacc8e4fad2c4bc"],["tags/ARM汇编/index.html","b09040c4dea4f49e6dd94d41d32522c2"],["tags/Android反编译/index.html","c6918cd4f968871201c54e109ab7fe18"],["tags/BLE协议/index.html","d4050e073259bc27c419b372983ffdf0"],["tags/CoAP协议/index.html","fae515d0455ccecbcf9afeb5ba61c80f"],["tags/JT808协议/index.html","04e410560370917a4b252929d76be1b5"],["tags/JavaScript/index.html","72aee7e68f6e1164143968540ed55adc"],["tags/MQTT协议/index.html","7691736f729f8090f276855a18ceb097"],["tags/NFC协议/index.html","54bcdb2ba60b8a87f60f3ef0f66523d3"],["tags/RF协议/index.html","dafe416ed2a435f84647714f1bb850c0"],["tags/Wi-Fi协议/index.html","b78b3da2131a4f928a37fa4ae4a98c56"],["tags/ZigBee协议/index.html","627c58912bff1a4c01c40555fdf13a06"],["tags/index.html","eb1497b1f1f357aa7d68337f4f401640"],["tags/x86汇编/index.html","6e1f34c322776e9c13508a61abb3a42b"],["tags/x86汇编/page/2/index.html","730975113740bdc64e4594f44cdbf5f2"],["tags/固件逆向/index.html","6924de19bbe28434562b67a4e30fc298"],["tags/漏洞复现/index.html","d287f8bba01c64fa248ed1f070ebe3dd"],["tags/硬件电路构成/index.html","a430000b0f7efc7fa19cb7789b13111d"],["tags/逆向（基础）/index.html","fa2afaf3805af375bef50dd90b5aee36"],["tags/逆向（调试）/index.html","a1b120b231929b2a5cc65e400e0e70a9"],["x86汇编学习笔记_0x01/index.html","fd33c1ce708cbc03aaa5272192861f68"],["x86汇编学习笔记_0x02/index.html","57ec618717f90eb72fcedd104a98d1f5"],["x86汇编学习笔记_0x03/index.html","763c28156771fb047211328924d3d17c"],["x86汇编学习笔记_0x04/index.html","710d5cf6395ddb29e9583c7742ed2bfe"],["x86汇编学习笔记_0x05/index.html","4a979b4c9fb4fe202d0c303812a5b1ff"],["x86汇编学习笔记_0x06/index.html","08e568807ff0cada4351a80a04d9657c"],["x86汇编学习笔记_0x07/index.html","bffc2c6f62f84628455aaa112c9ab49d"],["x86汇编学习笔记_0x08/index.html","d48c8ee17b582a5669769bdd3e09efc3"],["x86汇编学习笔记_0x09/index.html","dca56667d71e4afefb2d130c0499f7da"],["x86汇编学习笔记_0x10/index.html","5ca8eec5c4e18a927da38dafbc5e53a0"],["x86汇编学习笔记_0x11/index.html","71fd266e25ba6c15a421a025cfaefd53"],["x86汇编学习笔记_0x12/index.html","cda1803fec3a10b570a36e81a46803aa"],["固件逆向01/index.html","ab1fffc43da6db3cb3930652a0053ccf"],["汇编指令集/index.html","a9bddd13e9b935ea47aa1d4a740217fa"],["硬件电路构成01/index.html","11f0558f07ade4e53bd2050a62e43084"],["逆向-基础-笔记_0x01/index.html","5f59d01671f156771df578dca47b768c"],["逆向-调试-笔记_0x01/index.html","f5ffff15d92f7ece68be84cd8e351f7b"]];
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








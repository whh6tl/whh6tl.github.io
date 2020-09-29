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

var precacheConfig = [["404.html","2ddfdda11043dc5d6abc231a1c7464d3"],["AMQP协议0_1/index.html","dcf6b73159e621895697cec61c1129e2"],["ARM汇编01/index.html","bb9820006166cff5ff607634344d225f"],["Andoird反编译01/index.html","0ce366040df3dbfd4b41e68ac4a5fcb0"],["BLE协议01/index.html","0422d352d217a5ce6da5005b962a58f9"],["CVE-2019-5418/index.html","365e8d64ec43c94f972da2d2041d5a20"],["CVE-2019-9766/index.html","00b1edeacc3cc0a75214ecde96a97f5f"],["CoAP协议01/index.html","e80f7b9a7651fffd640968128b93175f"],["JS_0X02/index.html","6485ffcfa9b21b1ec9778da69bc86023"],["JS_0X03/index.html","c89d5b93dcfd901aa377d06112287549"],["JS_0X04/index.html","e546e8db9aabe007b133dfce29cb7baa"],["JS_0X05/index.html","0b9fa52b13975247121050039e6e85e9"],["JS_0X06/index.html","d16619a798de0c750fe636f6ac8c1e7c"],["JS_0X07/index.html","b7ec00ccfd8aec216d38fde9ac608e01"],["JS_0X08/index.html","d9a81c4fffa0fff78af436949c8e11ca"],["JS_0X09/index.html","9b386f597ad8f41611559c77e373a0cd"],["JS_0X10/index.html","984e50d96b0b9a0ef72283ea77d82a1b"],["JS笔记(0X01)/index.html","c22b117ece5b595ae72dc45529deddf5"],["JT808协议01/index.html","89437b5cb07409ad093158ed1ddf0b58"],["MQTT协议01/index.html","877f2f9f76faa07c76fc3936db078daa"],["NFC协议01/index.html","abfdd1997b6f576e148d345c594abef7"],["RF协议01/index.html","1e262fb5bea274569b1b0e538a73daf9"],["Wi-Fi协议01/index.html","7b5f12816d8da5bc58a547422615834d"],["ZigBee协议01/index.html","15dd38999771ec9fa63ac8e1feda1b00"],["archives/2020/08/index.html","511b3dcb71edd9675c32ae393ce6dd15"],["archives/2020/09/index.html","11254d8a2c0fa0ada415175f6f56af64"],["archives/2020/09/page/2/index.html","9c1e8b3e569759dc6748752bc17aee5c"],["archives/2020/10/index.html","697476142e72f9884263adc85c7e926a"],["archives/2020/10/page/2/index.html","9dbb2954a54b68e3e91d4107ac55a903"],["archives/2020/12/index.html","c2e9d1bd9317a445dc126d4ba31818e5"],["archives/2020/index.html","200f9cb8255007ec92f0a32d282ae5c2"],["archives/2020/page/2/index.html","79aca47758be5e69b1b44d556c083a91"],["archives/2020/page/3/index.html","7ad2cf6d5357e68fd30c810f3291c922"],["archives/2020/page/4/index.html","ad94b2c541435814499c61ac2efce5aa"],["archives/2020/page/5/index.html","1c9f0c0bfff7720c2a876ec5434dd4c0"],["archives/index.html","c0aec61b50f76c35ef1d2758364547ec"],["archives/page/2/index.html","19ca7a124bf1f01b0636ec324ece1295"],["archives/page/3/index.html","df6b55e819a9561744cf146aa38dedad"],["archives/page/4/index.html","6d0f75a77990279f8900381d5f8082d3"],["archives/page/5/index.html","8979b9f4803bcab5699a572d96c8627d"],["categories/ARM汇编/index.html","83f549aa6c7e576fda0c5acca8d3d39f"],["categories/Android反编译/index.html","d367557c4ecaf31db6673d84dc386526"],["categories/CVE/index.html","67957b8910edbb56b5494f8f3147dd4e"],["categories/JS学习笔记/index.html","6dc82c93e39ca68ad6a87a85191366cf"],["categories/index.html","7af3e185f29f33a15299ec778b51afb0"],["categories/x86汇编/index.html","e2df9ab53c21f34d2a46775eadd79528"],["categories/x86汇编/page/2/index.html","5a41260b3e3f8770c247c3c9b410dc81"],["categories/固件逆向/index.html","27eef7a9282fbf5b8eeb69896af25f7d"],["categories/硬件电路构成/index.html","9bbb4193195d1c6fa6561e7f61ae0288"],["categories/网络通信协议/index.html","87e7bcbeface1b2d5e394d3491e4f408"],["categories/逆向/index.html","29e5e6106211b89a160f55fa3b82eefa"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","3fff2a057efb4bbeb132cd76169a414a"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","7e7c89d9216f4dca10bbe12c8658e454"],["page/2/index.html","e4f2c4fad03a6efdc879f944b7693070"],["page/3/index.html","1b7e52356cb857da362e2aad87a6eaef"],["page/4/index.html","ef6984a07167ce150c04bab50595b1ef"],["page/5/index.html","82ce3050b3d84f8b9e1de5fab9630a75"],["tags/AMQP协议/index.html","4c2b492841fab73e056ce7cece177312"],["tags/ARM汇编/index.html","6eb21258ce1cac6160369e821074f1ce"],["tags/Android反编译/index.html","aa615b0396703ca671308893baa860ac"],["tags/BLE协议/index.html","a0b663fb6e3d0f8190cff7cc13275f47"],["tags/CoAP协议/index.html","523b73d149d63dd475b9b485a2fcf4dd"],["tags/JT808协议/index.html","aaa8445755aa88df1bd5cabebd3d7825"],["tags/JavaScript/index.html","01e1fce3336c80fa007ce1b1aa7a3fd5"],["tags/MQTT协议/index.html","f4d9cfb662596cbb11c0b2607e8194ec"],["tags/NFC协议/index.html","b318e4a42f211fd92a3a5535dd15786c"],["tags/RF协议/index.html","d2d0dc5ce6bece7f523c0b528743a3ec"],["tags/Wi-Fi协议/index.html","98988eab5ab1d3831fb354b741a7f107"],["tags/ZigBee协议/index.html","11dd19b4c467fe218fa13d86c1c3f756"],["tags/index.html","3d0dc15d269ddc2f95ceb71184f53485"],["tags/x86汇编/index.html","8d3849d47115a73581ac334cb47aabf7"],["tags/x86汇编/page/2/index.html","f86829f3230a091d0ebb7bd1dd94f65e"],["tags/固件逆向/index.html","aa9dad90b5f5294faa50f373922efed0"],["tags/漏洞复现/index.html","908db4984f4e8d50c7c7c00a3763e51e"],["tags/硬件电路构成/index.html","7ff2a4dc22116407655b87019603f65e"],["tags/逆向（基础）/index.html","60c113a5a31c3412eae74232f9492f54"],["tags/逆向（调试）/index.html","2098b0bf852da41e411102fb9a78e6c7"],["x86汇编学习笔记_0x01/index.html","7865b5b03d8741ae33a3b225db0bab88"],["x86汇编学习笔记_0x02/index.html","473e7decee2388d02f7b87ac882666e8"],["x86汇编学习笔记_0x03/index.html","a4ba1d495888229f737d137a6b089581"],["x86汇编学习笔记_0x04/index.html","dc143bcff101f7a7c5ac329da877b1c8"],["x86汇编学习笔记_0x05/index.html","cff469b17e85cb010c35b40bf5adc53d"],["x86汇编学习笔记_0x06/index.html","6a215918b4d6ca4ad84fa56f6ef5cd4f"],["x86汇编学习笔记_0x07/index.html","00f325de7ec3e44b0376339e4ff9d961"],["x86汇编学习笔记_0x08/index.html","44b2dcbe05f9973dc353091ce3c33749"],["x86汇编学习笔记_0x09/index.html","982ad5df35e33a94d60c7fd97d0e3150"],["x86汇编学习笔记_0x10/index.html","44c10f12d84833c4ef5dbbd8f5498ac9"],["x86汇编学习笔记_0x11/index.html","5d66b04ef099e83220452edb9ba762f5"],["x86汇编学习笔记_0x12/index.html","1650091faf8e0a6767fe3ca8e8d4e747"],["x86汇编学习笔记_0x13/index.html","1562b436e498cd279f66bc67fc48b001"],["固件逆向01/index.html","cfde2087ce7521fee611298a74b2b649"],["汇编指令集/index.html","e3991a121ed3889f3114016eebd2c33a"],["硬件电路构成01/index.html","9d49a689b48248a01b0691c335005f98"],["逆向-基础-笔记_0x01/index.html","87fb55a4a889629763a13a7041983e3b"],["逆向-调试-笔记_0x01/index.html","65784c63d4ba479f2307c181a9d883a1"]];
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








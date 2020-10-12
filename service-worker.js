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

var precacheConfig = [["404.html","13d1902ce393c42e60701d8d27cf9ee8"],["AMQP协议0_1/index.html","32e2e836b21c86b408977630871d8ba2"],["ARM汇编01/index.html","e53666d0709b1171768a497cd5db5a4e"],["Andoird反编译01/index.html","bead4742ee577c13eab1c80b319b3c2d"],["BLE协议01/index.html","5b05a1dc57049ec964d73baf50515a6c"],["CVE-2019-5418/index.html","819063b9d3346303d53d0983c3662cb6"],["CVE-2019-9766/index.html","4a2a2f0cb82991174d40c4b2cbcb3317"],["CoAP协议01/index.html","e7ff838bf45aaa9489528db6fd97006e"],["JS_0X02/index.html","61dfb6109b92a94422374e4dcf54efb4"],["JS_0X03/index.html","be2d5c3ec625d9ebf409303b967bba3b"],["JS_0X04/index.html","392d90958cbde1e0d0fc512e9a0ac910"],["JS_0X05/index.html","8b8c0e1fccd422efead33e964a2cca09"],["JS_0X06/index.html","51aa5d21ad7224a4a6bd2c7f153209ce"],["JS_0X07/index.html","80692c2784c17b167ca1a9a663978c22"],["JS_0X08/index.html","16dd9a358b0851f2bd314302585d103e"],["JS_0X09/index.html","109da194d8090218f0ba0c9ba46817eb"],["JS_0X10/index.html","f045120ccbdf360aedbf6d55ea6b3285"],["JS笔记(0X01)/index.html","107c0e39e3454c2d29e7b5c2098f56bc"],["JT808协议01/index.html","f23e182f81528a29f53a7cc0eed7e3e1"],["MQTT协议01/index.html","b8975d502f0faffc9ac8ad9d51e07686"],["NFC协议01/index.html","70b5e0ad2733adc1b5409e5b0637bda4"],["RF协议01/index.html","25e1146e9f2a7d53875c35bb0669b469"],["Wi-Fi协议01/index.html","a889418708f02745954190a2257312e0"],["ZigBee协议01/index.html","8e40148cd08527841babb421f461c248"],["archives/2020/08/index.html","fd7efa510b63257292673963ca294df5"],["archives/2020/09/index.html","9391d7b23d5d90c37416e87185043f10"],["archives/2020/09/page/2/index.html","5727cb1ec246d525e9d5b173fc4f540d"],["archives/2020/09/page/3/index.html","a0c081dabf63dccc4b1adac6a753f39f"],["archives/2020/09/page/4/index.html","46301a62fe3ebcd7d620086b3e8aa014"],["archives/2020/12/index.html","ae97df81bfa70122624c8f3bf6518f0f"],["archives/2020/index.html","951db216ec16d93cf3f17206f3e01f94"],["archives/2020/page/2/index.html","38fdd0a9050bf440b1f51b90025acaf6"],["archives/2020/page/3/index.html","642518a737d5504e48c091a186a08e80"],["archives/2020/page/4/index.html","ddd3685f0ccc8fb0d996d0b135c4897a"],["archives/2020/page/5/index.html","292b697b846b3446879975bebce0fdfb"],["archives/index.html","97887e3f440de3a889fbf5c8c8c93b83"],["archives/page/2/index.html","87c7168a1f765cc28837a5c18a6c1f17"],["archives/page/3/index.html","63898004fc2073f4ca46eab09b1633d6"],["archives/page/4/index.html","4c7708bbb4f411af360d8f8625ef50f0"],["archives/page/5/index.html","bb508f8810aa9ad67c87e959e0d11dbb"],["categories/ARM汇编/index.html","d3f5264eb3b2db468ac114c74bf6f6e7"],["categories/Android反编译/index.html","604f93f4db718a1c7cb3cc05fe06f341"],["categories/CVE/index.html","ed7bdb9e3fa441f53ecd413dd5f56c79"],["categories/JS学习笔记/index.html","a3774b4d828467d3e4040c2c73646883"],["categories/index.html","d5719a77e4edb5b404eda11253a93b3a"],["categories/x86汇编/index.html","69f8ef96e785c98c8bd75f1647c7a302"],["categories/x86汇编/page/2/index.html","26892baf35c753ea0cd02b7fcd3c39f4"],["categories/固件逆向/index.html","edb991a7bd42fca9ca694dd206e6bf0f"],["categories/硬件电路构成/index.html","34bb720864c3960961fe44ae8aa8b8e0"],["categories/网络通信协议/index.html","5616691d1341f5262933762034a9eefc"],["categories/逆向/index.html","e2bc9f0efef330436e9a3cd72915e71a"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","4a1bdfaeacbba768a5b3da8f54f4d6c4"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","593ce0695e9918165c5c759b49e81fd6"],["page/2/index.html","d5d35835de8c37ec219ab1f3d3279b77"],["page/3/index.html","730521b3a58a117766ac6d0154bfae7d"],["page/4/index.html","aa18ee1fe0b1dafc1a4ac17891eb34f3"],["page/5/index.html","8bedb92bf134bf41195a9731b0578603"],["tags/AMQP协议/index.html","f78f4a2817e82ed7fd471f3cebab0e86"],["tags/ARM汇编/index.html","7bb80477f43fe105c6f20630ea237e0e"],["tags/Android反编译/index.html","997420e3b860e19125925f79d0e8fbfe"],["tags/BLE协议/index.html","7867d223833b5a4f5a1eda61c7ab4f5a"],["tags/CoAP协议/index.html","992ce7762e5977d33c5f20ca3b7f60cb"],["tags/JT808协议/index.html","896caf97e45386f13fe6e0b8c66173d8"],["tags/JavaScript/index.html","fdf1cb8fcc1b523ad911b17ef58771f3"],["tags/MQTT协议/index.html","e02afb4f48f370cedc92810b04c5711e"],["tags/NFC协议/index.html","a999069d325701d05d61a318fbf0a43b"],["tags/RF协议/index.html","17a1303f5631fa4fada7f768966cdc00"],["tags/Wi-Fi协议/index.html","3bc77365b06e06c393b90e35b3b4821f"],["tags/ZigBee协议/index.html","e094f753221a8e8693cf46277f6887d6"],["tags/index.html","0a1943f0869ce6efa2b2e2a7dd102a27"],["tags/x86汇编/index.html","437d63196959eba60850de40c4a23f52"],["tags/x86汇编/page/2/index.html","43df083509ef7ceb50d521922d73a7a1"],["tags/固件逆向/index.html","21d2817382a74c4ead29bac66bb282f3"],["tags/漏洞复现/index.html","a838c806a1e19089aaa4bd837649582b"],["tags/硬件电路构成/index.html","b35ab6d8fd26a99d5d234ca8d873895a"],["tags/逆向（基础）/index.html","af0e9ff4a2e24c12096b48f3eee6f9c8"],["tags/逆向（调试）/index.html","86265562faafa7d4d1a5b0b430034c87"],["x86汇编学习笔记_0x01/index.html","e38e13ee72791370597735b3f9567b6a"],["x86汇编学习笔记_0x02/index.html","d5b179c6c4824e818c108ccfcd80549d"],["x86汇编学习笔记_0x03/index.html","68813b6cd01734b11a445a1c8434943f"],["x86汇编学习笔记_0x04/index.html","9df393f6b9ee1f30a5bf14a900dfcad8"],["x86汇编学习笔记_0x05/index.html","4c1e86a4616d4bbe8f11e347d2208ae0"],["x86汇编学习笔记_0x06/index.html","e80ee5e07d5c1f1e0bd5ba72c5a2dab2"],["x86汇编学习笔记_0x07/index.html","bff0a0fe4a28414efbd318c0f65a6436"],["x86汇编学习笔记_0x08/index.html","c96765bd19f0d507aca33666b1c81656"],["x86汇编学习笔记_0x09/index.html","ee80f2d78a8c6e700dc68b745904830c"],["x86汇编学习笔记_0x10/index.html","2a976f150661b6cb05290fd8eb7ef96e"],["x86汇编学习笔记_0x11/index.html","4daf582506b8df072c88a72bce55f5d2"],["x86汇编学习笔记_0x12/index.html","e9139216a1461b1c1e9e10d53f1fbadd"],["x86汇编学习笔记_0x13/index.html","f5a5c849a9171a9fcec76c1fa7c18888"],["固件逆向01/index.html","339f4e279f04f87d9aa372084f93a839"],["汇编指令集/index.html","badf08c65ed2b851536a0987468fc84e"],["硬件电路构成01/index.html","3d0c6401015b9b9f33d86dd250c4691b"],["逆向-基础-笔记_0x01/index.html","1e9e57d344a76be105a2b86461de84d6"],["逆向-调试-笔记_0x01/index.html","4538b9649e6c96f54f2e7c13e8a06014"]];
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








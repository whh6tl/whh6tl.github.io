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

var precacheConfig = [["404.html","c20dab46474231d9eae3c231781dd4b6"],["AMQP协议0_1/index.html","32e2e836b21c86b408977630871d8ba2"],["ARM汇编01/index.html","e53666d0709b1171768a497cd5db5a4e"],["Andoird反编译01/index.html","bead4742ee577c13eab1c80b319b3c2d"],["BLE协议01/index.html","5b05a1dc57049ec964d73baf50515a6c"],["CVE-2019-5418/index.html","819063b9d3346303d53d0983c3662cb6"],["CVE-2019-9766/index.html","4a2a2f0cb82991174d40c4b2cbcb3317"],["CoAP协议01/index.html","e7ff838bf45aaa9489528db6fd97006e"],["JS_0X02/index.html","61dfb6109b92a94422374e4dcf54efb4"],["JS_0X03/index.html","be2d5c3ec625d9ebf409303b967bba3b"],["JS_0X04/index.html","392d90958cbde1e0d0fc512e9a0ac910"],["JS_0X05/index.html","8b8c0e1fccd422efead33e964a2cca09"],["JS_0X06/index.html","51aa5d21ad7224a4a6bd2c7f153209ce"],["JS_0X07/index.html","80692c2784c17b167ca1a9a663978c22"],["JS_0X08/index.html","16dd9a358b0851f2bd314302585d103e"],["JS_0X09/index.html","109da194d8090218f0ba0c9ba46817eb"],["JS_0X10/index.html","f045120ccbdf360aedbf6d55ea6b3285"],["JS笔记(0X01)/index.html","107c0e39e3454c2d29e7b5c2098f56bc"],["JT808协议01/index.html","f23e182f81528a29f53a7cc0eed7e3e1"],["MQTT协议01/index.html","b8975d502f0faffc9ac8ad9d51e07686"],["NFC协议01/index.html","70b5e0ad2733adc1b5409e5b0637bda4"],["RF协议01/index.html","25e1146e9f2a7d53875c35bb0669b469"],["Wi-Fi协议01/index.html","a889418708f02745954190a2257312e0"],["ZigBee协议01/index.html","8e40148cd08527841babb421f461c248"],["archives/2020/08/index.html","107f6ea76fc1c5e0beed6123973c7497"],["archives/2020/09/index.html","63bd9cba2af8b0153939a6a2dd735aa1"],["archives/2020/09/page/2/index.html","de7e3a33820012efe588969c78306fdc"],["archives/2020/09/page/3/index.html","13374bbc2f79649b049303a917035498"],["archives/2020/09/page/4/index.html","4bd4a02e3914c3edb7b48abbb2aadff5"],["archives/2020/12/index.html","a200dbb06267b4ec1a1c80f57f094e71"],["archives/2020/index.html","0f0cad6a51f319a1a3dbdb3e6277e8e8"],["archives/2020/page/2/index.html","a43367dfb46ba12ee4553bd4f80b3a38"],["archives/2020/page/3/index.html","02ef059866a0c66276807e15652898d2"],["archives/2020/page/4/index.html","6c0138d24f65c293748792f64af3a6ec"],["archives/2020/page/5/index.html","db84d27c3bfac465e52fbf8ab9c218c3"],["archives/index.html","448fd2e0de74893552f82ce84bb90c6e"],["archives/page/2/index.html","50e59de6ffd0620c82e69e9a1365b4de"],["archives/page/3/index.html","db90d43563cbae7b2e6914396ef88a11"],["archives/page/4/index.html","1bf15de7ba7a534c8ba96e74fef97152"],["archives/page/5/index.html","4aa42e4188a2a1bfec3c675d3af6826a"],["categories/ARM汇编/index.html","60c00d10d280698d9e6cc6dd144a483f"],["categories/Android反编译/index.html","7f6484d03c9df7a065b2628d0ee4bce6"],["categories/CVE/index.html","30a4aa3332e417f874183b8b4e527d33"],["categories/JS学习笔记/index.html","289460de11c8488d4465810a3278df07"],["categories/index.html","809d528ecf7425b75cd49130c771a2a9"],["categories/x86汇编/index.html","422d484b1dc0e6ad6bff6fdbbda2c399"],["categories/x86汇编/page/2/index.html","85d27717e626f3518cdfdcb8bae275db"],["categories/固件逆向/index.html","bf2a2c9cab541d28beed859257aff06d"],["categories/硬件电路构成/index.html","bec94178c96874e175808d7aaab272c3"],["categories/网络通信协议/index.html","34293003a14499d5f0c3af6209118747"],["categories/逆向/index.html","f5ef1b469e4870a14db259a5b31fbf62"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","b838a0bb20c1402fbe1560151ec2fd31"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","0f24d8d7350e011dc29ac315042ab394"],["page/2/index.html","9ee47c6a71f57866945264a190580891"],["page/3/index.html","33b40b542cf61531314ee619d0b48cd0"],["page/4/index.html","1e6b40d0e0d7fbbf157e543004ee81eb"],["page/5/index.html","23ee7afb49b1f8c0c662e0b160fde5c7"],["tags/AMQP协议/index.html","7518e32a08b34f18ebdd07ffdea2a899"],["tags/ARM汇编/index.html","b914a628e0f58e49941f52650572cba4"],["tags/Android反编译/index.html","75baa50dfe036f06e676f96fca09ed3c"],["tags/BLE协议/index.html","1f1c429237a0a7fd04937e10e5c44017"],["tags/CoAP协议/index.html","4bac02ca0fe458a8e0bcb3ce6c7a419b"],["tags/JT808协议/index.html","10a5482c6f6cffdedfce667361d44e5d"],["tags/JavaScript/index.html","ed5911693e23c72933468d5ba6143541"],["tags/MQTT协议/index.html","b622f7900b577921c8b1cd804d5bcef4"],["tags/NFC协议/index.html","5020fb5abed7ad8bc949ecf727aa1bc0"],["tags/RF协议/index.html","9fe6f1e611d7ffc5053e1dccfe74bf90"],["tags/Wi-Fi协议/index.html","992ecc99b88f50993c702ff74d202e58"],["tags/ZigBee协议/index.html","0c3fdb4ed804ce583c229ad6ba8c4b58"],["tags/index.html","ffa82d95e93e2623c1e7c657c3710610"],["tags/x86汇编/index.html","d131da36b5ef579dbc5d03fbc15d7fe8"],["tags/x86汇编/page/2/index.html","1b8746e3da57ae493bed1f1336ff7011"],["tags/固件逆向/index.html","5cf0f3e61093d835e79843eac2b67df1"],["tags/漏洞复现/index.html","4a9ca1b0b9d37a0e846a4241da1d6fd7"],["tags/硬件电路构成/index.html","04a4d5dc13219d44e9b98151d18e6078"],["tags/逆向（基础）/index.html","2fd240076f77a7bfc4e8e63e579db7b7"],["tags/逆向（调试）/index.html","5bfa482235662245b444538f6200f715"],["x86汇编学习笔记_0x01/index.html","e38e13ee72791370597735b3f9567b6a"],["x86汇编学习笔记_0x02/index.html","d5b179c6c4824e818c108ccfcd80549d"],["x86汇编学习笔记_0x03/index.html","68813b6cd01734b11a445a1c8434943f"],["x86汇编学习笔记_0x04/index.html","9df393f6b9ee1f30a5bf14a900dfcad8"],["x86汇编学习笔记_0x05/index.html","4c1e86a4616d4bbe8f11e347d2208ae0"],["x86汇编学习笔记_0x06/index.html","e80ee5e07d5c1f1e0bd5ba72c5a2dab2"],["x86汇编学习笔记_0x07/index.html","bff0a0fe4a28414efbd318c0f65a6436"],["x86汇编学习笔记_0x08/index.html","c96765bd19f0d507aca33666b1c81656"],["x86汇编学习笔记_0x09/index.html","ee80f2d78a8c6e700dc68b745904830c"],["x86汇编学习笔记_0x10/index.html","2a976f150661b6cb05290fd8eb7ef96e"],["x86汇编学习笔记_0x11/index.html","4daf582506b8df072c88a72bce55f5d2"],["x86汇编学习笔记_0x12/index.html","e9139216a1461b1c1e9e10d53f1fbadd"],["x86汇编学习笔记_0x13/index.html","f5a5c849a9171a9fcec76c1fa7c18888"],["固件逆向01/index.html","339f4e279f04f87d9aa372084f93a839"],["汇编指令集/index.html","badf08c65ed2b851536a0987468fc84e"],["硬件电路构成01/index.html","3d0c6401015b9b9f33d86dd250c4691b"],["逆向-基础-笔记_0x01/index.html","1e9e57d344a76be105a2b86461de84d6"],["逆向-调试-笔记_0x01/index.html","4538b9649e6c96f54f2e7c13e8a06014"]];
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








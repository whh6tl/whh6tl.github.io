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

var precacheConfig = [["404.html","276d81b0d91665a09089cd40bb39d044"],["AMQP协议0_1/index.html","20a440064e427dfeba27ad6218a60052"],["ARM汇编01/index.html","a0767a33a3f36767ada7ca417b257762"],["Andoird反编译01/index.html","5212cb2b69dea4c399378000e175696e"],["BLE协议01/index.html","6af785fb35cb07feb8c1c88c6431f9ab"],["CVE-2019-5418/index.html","819063b9d3346303d53d0983c3662cb6"],["CVE-2019-9766/index.html","4a2a2f0cb82991174d40c4b2cbcb3317"],["CoAP协议01/index.html","d4a93a4dae08eb1cb96c7973e5b079ad"],["JS_0X02/index.html","61dfb6109b92a94422374e4dcf54efb4"],["JS_0X03/index.html","be2d5c3ec625d9ebf409303b967bba3b"],["JS_0X04/index.html","392d90958cbde1e0d0fc512e9a0ac910"],["JS_0X05/index.html","8b8c0e1fccd422efead33e964a2cca09"],["JS_0X06/index.html","51aa5d21ad7224a4a6bd2c7f153209ce"],["JS_0X07/index.html","1da390261b4a28cf569cbe1e5b33026f"],["JS_0X08/index.html","c11faa9b1d223ff5c3a83b3d39748700"],["JS_0X09/index.html","109da194d8090218f0ba0c9ba46817eb"],["JS_0X10/index.html","f045120ccbdf360aedbf6d55ea6b3285"],["JS笔记(0X01)/index.html","107c0e39e3454c2d29e7b5c2098f56bc"],["JT808协议01/index.html","de4cbe389492a1d469e2edf4b87c3274"],["MQTT协议01/index.html","78928b5a3e12c72463724bf271882cf8"],["NFC协议01/index.html","33861ce3b3de9df50db1b6beb76624ae"],["RF协议01/index.html","213c62a30298eedebb04eb6e4f746c5a"],["Wi-Fi协议01/index.html","d3e553a10e07fb13a23aa830fcccbe38"],["ZigBee协议01/index.html","69c53e80a694af9ea4de6408b2e59429"],["archives/2020/08/index.html","e278742b8b3104d4ca20b673c1852197"],["archives/2020/09/index.html","fb5503c697513688ef2cfe92a6e583c6"],["archives/2020/09/page/2/index.html","2fefe481850a6cd9a1ca3dc961b38c15"],["archives/2020/10/index.html","e429bb0458229c6089688701e1682494"],["archives/2020/10/page/2/index.html","a0de44e355b0110abb592587859633e5"],["archives/2020/12/index.html","4e4da3c28292b241c0a86ad60da5b672"],["archives/2020/index.html","d8436a15f725b287ea74ee67b3add23d"],["archives/2020/page/2/index.html","89b8f55dc67e5f4ab6872b26c8d108c9"],["archives/2020/page/3/index.html","ce21d9e728ae5b2031a72031a6988278"],["archives/2020/page/4/index.html","6a1898f72b87eff8ae9f85a07b861dee"],["archives/2020/page/5/index.html","51ad32caa3228ddadba5de3702d59134"],["archives/index.html","0483a48840903c2fec9092e38e1cf305"],["archives/page/2/index.html","e5f37abe5c1a07af7ab5c1a1fe82b134"],["archives/page/3/index.html","f38fa218de14a1b9f3d0682b616479a8"],["archives/page/4/index.html","42194543d6bb9ed93079967fb4246130"],["archives/page/5/index.html","98368cbb1e849e741249fa173c455976"],["categories/ARM汇编/index.html","1fd67d54c5b65b92e2d6dca51ead4402"],["categories/Android反编译/index.html","e15064d1cfb977e448c2e59ba9c721a9"],["categories/CVE/index.html","141458a65b2390d1ceebd8be0bcad1ee"],["categories/JS学习笔记/index.html","1cc1e3a8c2c44e4435f8cf143fd43d67"],["categories/index.html","1fae468993a090622e748b4980b02b92"],["categories/x86汇编/index.html","553299c374a404054692a2b9e495b090"],["categories/x86汇编/page/2/index.html","985eb8d30502109c3d6c96f4d38a830b"],["categories/固件逆向/index.html","db321aea27f3a5b04783a0cb96a86d16"],["categories/硬件电路构成/index.html","628bccf1db2b21d38ed8e127689f1b52"],["categories/网络通信协议/index.html","b4c27dbfbbeeb666ba87e613138e64ab"],["categories/逆向/index.html","fea89d0515b7f7992f6bb89cb0385a4e"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","da18ab566fc2e5d55105f4be7d7f1e74"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","e59d793fb9577e3b005e55e007ed5278"],["page/2/index.html","aabcfc0b9f5c8ecd654a85b63eb62e13"],["page/3/index.html","d49dedc0de062631648992cde9b1b9ff"],["page/4/index.html","3f2c641238475f039f1f1b1570776e16"],["page/5/index.html","d7190c06b4cf18497c33cb40084bf338"],["tags/AMQP协议/index.html","855ce457e8940b0ec9c34bc82d08e5dd"],["tags/ARM汇编/index.html","c39950f9ac028cd85c1527538cba8034"],["tags/Android反编译/index.html","68d44ce8237d9f6c82e1ff32deb918c7"],["tags/BLE协议/index.html","7ad2d61ee34c8539c4e01da1197d9b7e"],["tags/CoAP协议/index.html","dd31a002fd5dca812d66eb2ebb75720c"],["tags/JT808协议/index.html","756be91e3e2610505bb7401b08cbe2fe"],["tags/JavaScript/index.html","be4539aeae886688fba406b66f25d59b"],["tags/MQTT协议/index.html","e0c9c36c1d5e9969f797c4019466131b"],["tags/NFC协议/index.html","d3a9a8b68d4a7049621a96e4fd1812f5"],["tags/RF协议/index.html","0082db2bea8d3105d94f813ff64846d4"],["tags/Wi-Fi协议/index.html","667469b144b085ec55ad317b74cfb35a"],["tags/ZigBee协议/index.html","b792a2092a961b969c718b48c77d9574"],["tags/index.html","dbbf876dce4fe0b64b7cf4b46973c9ae"],["tags/x86汇编/index.html","cf30415150076e12efc8d884bf675ff6"],["tags/x86汇编/page/2/index.html","b93c756c3e56107a3a981a86320d2258"],["tags/固件逆向/index.html","1cbf2cdf097e58d07954e2de4fffb2f3"],["tags/漏洞复现/index.html","eca199dccc193a2aa7fe1c63ebd98ffa"],["tags/硬件电路构成/index.html","8a39e51b6329a75d015b44c1e70b926c"],["tags/逆向（基础）/index.html","8d4609dd8fa03bbc3e39bdb18bcdcf34"],["tags/逆向（调试）/index.html","9a6a02ef4492d7bb60f9b7d3c59b8e30"],["x86汇编学习笔记_0x01/index.html","7f318a0ebf725d1268e1b17afc883a0b"],["x86汇编学习笔记_0x02/index.html","d5b179c6c4824e818c108ccfcd80549d"],["x86汇编学习笔记_0x03/index.html","68813b6cd01734b11a445a1c8434943f"],["x86汇编学习笔记_0x04/index.html","9df393f6b9ee1f30a5bf14a900dfcad8"],["x86汇编学习笔记_0x05/index.html","4c1e86a4616d4bbe8f11e347d2208ae0"],["x86汇编学习笔记_0x06/index.html","e80ee5e07d5c1f1e0bd5ba72c5a2dab2"],["x86汇编学习笔记_0x07/index.html","bff0a0fe4a28414efbd318c0f65a6436"],["x86汇编学习笔记_0x08/index.html","c96765bd19f0d507aca33666b1c81656"],["x86汇编学习笔记_0x09/index.html","ee80f2d78a8c6e700dc68b745904830c"],["x86汇编学习笔记_0x10/index.html","2a976f150661b6cb05290fd8eb7ef96e"],["x86汇编学习笔记_0x11/index.html","4daf582506b8df072c88a72bce55f5d2"],["x86汇编学习笔记_0x12/index.html","e9139216a1461b1c1e9e10d53f1fbadd"],["x86汇编学习笔记_0x13/index.html","905241e2a65097ab39627fc29e8947ed"],["固件逆向01/index.html","5980faa59c362982bccb05959b95b74d"],["汇编指令集/index.html","97df38a3a8db01103164bcc54c4e2322"],["硬件电路构成01/index.html","1bdf6e0cc4e51d82217ad8c155710d01"],["逆向-基础-笔记_0x01/index.html","1e9e57d344a76be105a2b86461de84d6"],["逆向-调试-笔记_0x01/index.html","4538b9649e6c96f54f2e7c13e8a06014"]];
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








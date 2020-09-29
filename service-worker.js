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

var precacheConfig = [["404.html","7f2fb770ba26d8e00d3bbf49847ac761"],["AMQP协议0_1/index.html","7ec8e3ce42db88896c37ea3b9892a8e6"],["ARM汇编01/index.html","d717024773948b8134e97fa43bb5ae8d"],["Andoird反编译01/index.html","b0e6fe747864c063b1d1902b399e3fb8"],["BLE协议01/index.html","12f93465ca7bbbb36180a184a1593103"],["CVE-2019-5418/index.html","11ed9d454dc3e501b3f8a7451cf82768"],["CVE-2019-9766/index.html","b3be49c997d1d36c24afd9c540e4d186"],["CoAP协议01/index.html","b301284e400f136bfce5670e0243c1cf"],["JS_0X02/index.html","36f3ab6da109c6de2b9efc0bfb1219af"],["JS_0X03/index.html","9a79d7ffa0d7c0e0f2d8e8cabfc9dcac"],["JS_0X04/index.html","4047ba3aaaf83623cb8defeb206d0a8a"],["JS_0X05/index.html","d8fa88abadfade514af772c1b2468317"],["JS_0X06/index.html","c51ce5dc4eba2cf7cf110eb322192a75"],["JS_0X07/index.html","b754670c3a42f4de17ca98f00b2345fb"],["JS_0X08/index.html","f2faa86e17d817607574170025323679"],["JS_0X09/index.html","22631e4cf5ab6dc62e77030c8f5aea35"],["JS_0X10/index.html","11174857556b62c2adfbc66215ff10bf"],["JS笔记(0X01)/index.html","602f041f43900244e1b5b5905515be08"],["JT808协议01/index.html","112827f27c1a26ea9a44227119652166"],["MQTT协议01/index.html","9b12f4bbb5b155326cc42c66db714387"],["NFC协议01/index.html","323f827a612e6e63b2fb0989dcc8bac0"],["RF协议01/index.html","e9f23b7f4a1e82d9b7b181f03716abf1"],["Wi-Fi协议01/index.html","50ed0bac69be373f2ebebeff00a1e643"],["ZigBee协议01/index.html","948a1796d63c53d98e498067c47500c3"],["archives/2020/08/index.html","0d3752014b78c7fab46daa25e07da3b0"],["archives/2020/09/index.html","7e8ad46e5aa7e165a5cb3a1ed5818b5a"],["archives/2020/09/page/2/index.html","20f1fab60676c240674a853626bed7ee"],["archives/2020/10/index.html","1db11c7fcf58b0f7a1e789db7eab3ec6"],["archives/2020/10/page/2/index.html","6211376d402b7c31b49e2b283e91de0d"],["archives/2020/12/index.html","9723251729490610c140b4d5eb6a334a"],["archives/2020/index.html","47b09b381ca8be2a15be0f2824cdff56"],["archives/2020/page/2/index.html","42e42f2de9dea48f0e7bad1b1f775cde"],["archives/2020/page/3/index.html","999d4f235dc2b16a35c932510ff048a2"],["archives/2020/page/4/index.html","1ee5c499ffccd528eef53562f89f115a"],["archives/2020/page/5/index.html","70cd63a043e19a8f488baf465390c3d3"],["archives/index.html","d60d856c330abfb388b33a4afd7984af"],["archives/page/2/index.html","1919996eceafa7ce4fd0ed1261556ea1"],["archives/page/3/index.html","e6a48bc90acf8fd7c8a81c1129534fb6"],["archives/page/4/index.html","87fa084fbd7a9db1520c988b29e19719"],["archives/page/5/index.html","ec0f7709f26e32fb237ac5552499b42c"],["categories/ARM汇编/index.html","425a05423482513caa773308b4b9f76a"],["categories/Android反编译/index.html","f1a9b07e7b2701ba2feefa353775a430"],["categories/CVE/index.html","1d41465d27a753be0d0b858c38b2ebe4"],["categories/JS学习笔记/index.html","272f3f21bdebba36482eda1883117013"],["categories/index.html","a878e6f7095e95185c5cf4ab6da79560"],["categories/x86汇编/index.html","6027ce2b26dc9f4b8ea2c9d451f442a9"],["categories/x86汇编/page/2/index.html","7876d1c0c91d22324e4aaa25ccb28ac0"],["categories/固件逆向/index.html","0f7c789b72bf74974d111909d748a0cf"],["categories/硬件电路构成/index.html","125be5730e1c487c0766c9529495119b"],["categories/网络通信协议/index.html","982c79bb10aba1e062d6100abc7b3aca"],["categories/逆向/index.html","e8b49542eb6f52b75bad29023d16d218"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","1e2dcf944d1bbf571cc8ad229d131591"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","3fe09f1a95f383f36778d20f2963148b"],["page/2/index.html","612e96a98a8d2ed238fd03dd1256d212"],["page/3/index.html","8507ed56b62a3d74180298018ffd7ce5"],["page/4/index.html","82c547eb6e84a28ce2e2cfb5288df7fd"],["page/5/index.html","b3ccd877a36c3682d570af17a91e06e8"],["tags/AMQP协议/index.html","d95246fe3be2a0fe486bc540b297adbe"],["tags/ARM汇编/index.html","96f2a988b5930a7ed3f1d69034688a47"],["tags/Android反编译/index.html","ba1a355f88002d302cef38dbf2dc14de"],["tags/BLE协议/index.html","0c272af3729b4442b4a9c01a9ff125ae"],["tags/CoAP协议/index.html","6ba10390a0c27c551fac5525e8386aee"],["tags/JT808协议/index.html","bddcd833bc3a734e74ba0578a710a25e"],["tags/JavaScript/index.html","2d821ef280a2245221876c4ef3f76b15"],["tags/MQTT协议/index.html","62319ad6297f6d118f2e8d8964f24ad8"],["tags/NFC协议/index.html","4066020c9a4d3d5100e20cadf191258c"],["tags/RF协议/index.html","e54847f3153ca5eb23195a9f1f73408b"],["tags/Wi-Fi协议/index.html","161c3439cac7246ecafc9e7c8d74e789"],["tags/ZigBee协议/index.html","9577f3ed49d4c72a8f0330c324e01b8f"],["tags/index.html","1fcc2be82e67c5e75d6e3759497522bc"],["tags/x86汇编/index.html","d7f8db64aff2a8e95a7a753285d6feb8"],["tags/x86汇编/page/2/index.html","1ff78f5d781a50d36a093d461b20ee35"],["tags/固件逆向/index.html","4fe0100a335b1bb508352e00da162956"],["tags/漏洞复现/index.html","819819fc24928fe571ceba28fb85f1f5"],["tags/硬件电路构成/index.html","ae95c22716cc11912eaeb3ae8be601e6"],["tags/逆向（基础）/index.html","61219acb6b662cddcf4454ef3a7ba845"],["tags/逆向（调试）/index.html","913e15dc95efea334b6215ae140b35db"],["x86汇编学习笔记_0x01/index.html","8a9dcf9572234c0f5337327216646d7f"],["x86汇编学习笔记_0x02/index.html","82f1d2943246977b0cd2f0b49d1550ad"],["x86汇编学习笔记_0x03/index.html","7a7490e6d29b0c1e44f07bd86669e753"],["x86汇编学习笔记_0x04/index.html","647879e3c1396e1fbce93defb72dc5c2"],["x86汇编学习笔记_0x05/index.html","b1f85afb90f3e5bc9c59f383499e2e9d"],["x86汇编学习笔记_0x06/index.html","3fded6ad845675c0a30568774e1734e9"],["x86汇编学习笔记_0x07/index.html","03830def110ac05100a576d013cf89b7"],["x86汇编学习笔记_0x08/index.html","0d50dfaea43bc7dff5f56cd9958c215b"],["x86汇编学习笔记_0x09/index.html","d74c8ebbc3a445556d9ccc1379fda0ef"],["x86汇编学习笔记_0x10/index.html","401b8e78d8b2bed3e9970cddeafeb932"],["x86汇编学习笔记_0x11/index.html","93831519cfbf2afea12151ae68179e0f"],["x86汇编学习笔记_0x12/index.html","b9fc2b9f10313328b05df4a4c3f75601"],["x86汇编学习笔记_0x13/index.html","41d21fb7c86fc72b7773cd126a8033e9"],["固件逆向01/index.html","b55f43e2a01c824bb4508c8caf53c281"],["汇编指令集/index.html","72199e7d1eb7c11bedbcf508936bb42b"],["硬件电路构成01/index.html","886af8f4f5b15013312ec15a30b29d3b"],["逆向-基础-笔记_0x01/index.html","2118619873ddb38727390468e99030e8"],["逆向-调试-笔记_0x01/index.html","4c3369136a175523abe5b762679b9cd2"]];
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








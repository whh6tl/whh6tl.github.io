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

var precacheConfig = [["404.html","1b3be1410adcb13c5a5d5a86a2e9572a"],["AMQP协议0_1/index.html","c5ed69dba2f55df5ee22a4f3d40e786d"],["ARM汇编01/index.html","4c0fb0b0b085ce3334bdf5e209685201"],["Andoird反编译01/index.html","7cc5733caba95ddfeb64588b735679be"],["BLE协议01/index.html","71c05bf4684896fc4783fc92fb5e29a1"],["CVE-2019-5418/index.html","af3026a542963afcb61f8016b5103ece"],["CVE-2019-9766/index.html","959aa0bf5eb144cdd25db42fcac80b49"],["CoAP协议01/index.html","38ac30ed6aa0931a4c68f6169110cbd0"],["JS_0X02/index.html","24b5de91b7513944ff1d464f330d0e64"],["JS_0X03/index.html","9b7008af35d26ca9acbea3be9efde332"],["JS_0X04/index.html","d13e5a02e72cb59736016a159a87fb9f"],["JS_0X05/index.html","4d862c64b5aeb2689476b088f91389a5"],["JS_0X06/index.html","5139216feb099453a7185ef5ed0e6c08"],["JS_0X07/index.html","ce9b35ba726a9536ae5006c4f79b6425"],["JS_0X08/index.html","784eb169551d8f9882fb11d5dc1cce98"],["JS_0X09/index.html","157d0b940fa24b8cb3409b4e4c200af7"],["JS_0X10/index.html","eb3cbe873828bfa3319e57d2d00c825b"],["JS笔记(0X01)/index.html","c29a6e161a78552f4f0c0c6165df0e11"],["JT808协议01/index.html","beda4bc44f697457cbb9c7fde6e3fc01"],["MQTT协议01/index.html","f909870845b3ffa167a2effb91713440"],["NFC协议01/index.html","7a9384c686d67674d75856e0c23b18df"],["RF协议01/index.html","d3f495af79ee01f69ba550d6f542575b"],["Wi-Fi协议01/index.html","2ae19d900cb024a7edf234b5c5b4800d"],["ZigBee协议01/index.html","7e2eccec5f9679a994f980b88f6553d3"],["archives/2020/08/index.html","8fe41ff060cd4fbb5d4b2666b144dab3"],["archives/2020/09/index.html","5ccf1abed88c9aab785610bc990aeaa3"],["archives/2020/09/page/2/index.html","3110b984d7ce904705889d8e108803a3"],["archives/2020/09/page/3/index.html","4346d4639a85e54f218169ec79208214"],["archives/2020/09/page/4/index.html","c46ebb1d7f9aa07ad5094ceae5d05bef"],["archives/2020/10/index.html","969915d2d16a7823e3a46400b149eb85"],["archives/2020/12/index.html","dcf87ffe293dc492639aedd92713413f"],["archives/2020/index.html","943694aaede257da78867ff1df699346"],["archives/2020/page/2/index.html","a9f1f5d2ce7491d9b6ce101aee6d5b90"],["archives/2020/page/3/index.html","a18ae19392d392b0ed79e4156e66790a"],["archives/2020/page/4/index.html","a11a78f5feec451d999a341c3e1ec3d6"],["archives/2020/page/5/index.html","f1fb7bc5e288ee2e8e9893ee5a78f567"],["archives/2020/page/6/index.html","da87bfdd025d4ccb97a9796e90e8180d"],["archives/index.html","490b63cb1736a44a969b36a96c658b06"],["archives/page/2/index.html","4c0400c075ea7da6cdc6be9d900933e1"],["archives/page/3/index.html","6fc5dc8795f47acd619f9cf8afebcb57"],["archives/page/4/index.html","dd8660c07c5a5f48bcb353352bf05f3d"],["archives/page/5/index.html","d63263eb5d72f9b50ccc4b17fa3f48dc"],["archives/page/6/index.html","74c78acfe4a1ed905ac50054dc90e581"],["categories/ARM汇编/index.html","79c734890514617298e86cea482036a0"],["categories/Android反编译/index.html","2880c17005448a13db1c8aef871257fd"],["categories/CVE/index.html","079decdcacee9cf9658a6eddbc2d1579"],["categories/JS学习笔记/index.html","c057b13c55c3f43460352afa68e106b8"],["categories/index.html","13149425c9b10ad174c23930fdd871a3"],["categories/x86汇编/index.html","c81769fbca1004935b2b85f0d46065b7"],["categories/x86汇编/page/2/index.html","3f2c091708126b981019f9af177b0f03"],["categories/固件逆向/index.html","84d919de4d1463aefbb95a80657f56a4"],["categories/智能硬件安全/index.html","16385944feb0a07737e2879ed0ebf3d7"],["categories/硬件电路构成/index.html","81a61888c8a1bddd8f00ba3aebedcfbb"],["categories/网络通信协议/index.html","e51a844440ba0cddad345c63da6cc331"],["categories/逆向/index.html","37c2cda84278aca763faf082dc51e141"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","89129ade4bd79dd1b22a2c97c4430603"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","b7f099895bce9b5c8fdbde0eda4669b1"],["page/2/index.html","c6016e973f61a2f396155938297d8338"],["page/3/index.html","a9ad24b1679edd43fdcda6675c344182"],["page/4/index.html","e4b3e46d57a42d79bdb2ae9c66ba2704"],["page/5/index.html","c4f3a06553980f2535d71a719e145b06"],["page/6/index.html","bad42b349242f8c6019d42ca4f6231d0"],["tags/AMQP协议/index.html","5a2c3d22d7652d63acd6c68c5bfb3243"],["tags/ARM汇编/index.html","954e7a179b949cd24e983fe8a0127db1"],["tags/Android反编译/index.html","c2ca4b78c51edb8b945aa1fdc7071659"],["tags/BLE协议/index.html","3fe610631fcde8f94e14549ff784a0b2"],["tags/CoAP协议/index.html","d5185c9bfbadfeb430a0fdafd8251be7"],["tags/JT808协议/index.html","63e570b058cd0158b47ac38fcff310b4"],["tags/JavaScript/index.html","d7eccf7acfe9e5f439b01ab03213cc40"],["tags/MQTT协议/index.html","6ea366a7060774e5134f8123b1918d68"],["tags/NFC协议/index.html","558b235e09ea2722c5995f4b0d951d67"],["tags/RF协议/index.html","b393b8553d9a2e9ab60be179c5e43fb2"],["tags/Wi-Fi协议/index.html","26168ae584df4db78135542198d0ff15"],["tags/ZigBee协议/index.html","9a053dbe1213274117ea608a65bb6a10"],["tags/index.html","733958f3b3063756e0e10bbf2d504597"],["tags/x86汇编/index.html","e6d92669cd65a6bfd82240ac42ea7d2b"],["tags/x86汇编/page/2/index.html","0ece0d4095d9353ab2acdd3e035232fc"],["tags/固件逆向/index.html","e4dfe1cf383950fdee07df3226a183f3"],["tags/智能硬件安全/index.html","919e18abc806023ac1002c34829624b2"],["tags/漏洞复现/index.html","49dd0a83f5216202d059cc30aa8c1b33"],["tags/硬件电路构成/index.html","7a2af1af7500ca00a14e0e358586e87f"],["tags/逆向（基础）/index.html","e282aa7e1c3f8fb6572032afb584ec1a"],["tags/逆向（调试）/index.html","e023fe5edc7d655677a225359d9442d6"],["x86汇编学习笔记_0x01/index.html","26b7465c93e1a0ea1913df05f3e248c0"],["x86汇编学习笔记_0x02/index.html","f19e2397e8145d0715343ebe65719aec"],["x86汇编学习笔记_0x03/index.html","2388fada883187d861664421311820b3"],["x86汇编学习笔记_0x04/index.html","e7f78440b8d2afd0e6b230434ce944fb"],["x86汇编学习笔记_0x05/index.html","0666940d0cc8e52b1d2add871c152294"],["x86汇编学习笔记_0x06/index.html","28d54beaeb0b7881090c9b5ecc5fbbdf"],["x86汇编学习笔记_0x07/index.html","56405df82a7c42f14c6617b406e2baa2"],["x86汇编学习笔记_0x08/index.html","a5d28116456cac81683ae04cdc7f673e"],["x86汇编学习笔记_0x09/index.html","c3c8525d8cb45ff6945de0ff986327f1"],["x86汇编学习笔记_0x10/index.html","a10ee4220b34985f2eb4ae3411186872"],["x86汇编学习笔记_0x11/index.html","4abd1f9d8461c594d5a1f770abc6ae3b"],["x86汇编学习笔记_0x12/index.html","9aaa213927d505dcfaf26ab189fefe80"],["x86汇编学习笔记_0x13/index.html","d1c0275f0e929feec6503b1ab72e662e"],["固件逆向01/index.html","119b83cd2f339245de0e41ed8b42e7a9"],["汇编指令集/index.html","c11bcd1b1b2cfc313ec358c990a33a1b"],["硬件智能安全(0x01)/index.html","e9140b8d2b189984e53d3648ca8014f1"],["硬件智能安全(0x02)/index.html","f481d794d247d637c2130e32e57493f6"],["硬件智能安全(0x03)/index.html","9498378c3d59bb14ad6d671f970a3dbf"],["硬件智能安全(0x04)/index.html","f0cf9d93ec4d56f4cf7dac2dc500feff"],["硬件智能安全(0x05)_/index.html","b77bc548f8b11bed96baf31640f33571"],["硬件智能安全(0x06)_/index.html","f587dd3c1c4b242f0788597ea78a3e7c"],["硬件智能安全(0x07)_/index.html","7b0a1ed275d7808fafe6d6e4dce66fd8"],["硬件电路构成01/index.html","ea6903a1e90fa8aa2ab7773a4f03e786"],["逆向-基础-笔记_0x01/index.html","bb85e4f8351ab66e099982fb599b3c88"],["逆向-调试-笔记_0x01/index.html","0498ade18a99ac59238cecafe882f50f"],["逆向-调试-笔记_0x02/index.html","f502a0c17bd38b127cbc918d47393867"],["逆向-调试-笔记_0x03/index.html","c7c27260769708af58cfd72d4b44bb88"],["逆向-调试-笔记_0x04/index.html","f130851ca731cf1f88238bdb4548c4ec"]];
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








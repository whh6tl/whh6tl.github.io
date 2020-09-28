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

var precacheConfig = [["404.html","30993c38447c764d7b53e8e89098a21a"],["AMQP协议0_1/index.html","0460f4761ca427c42836b111ee215aed"],["ARM汇编01/index.html","7b19510a36c80fc9032a50a5d08e9f03"],["Andoird反编译01/index.html","89ca1113e06599d713f2fc6a78587eee"],["BLE协议01/index.html","6db9fd30dca994b79b83dc94142cc629"],["CVE-2019-5418/index.html","06631ccf59b992145bdc795197f994a5"],["CVE-2019-9766/index.html","4d977202346284b296ab5836dd1ed71b"],["CoAP协议01/index.html","085aa641866c88b6122786f47227f5ac"],["JS_0X02/index.html","29540c76585dbd693416aac28a1a6f5f"],["JS_0X03/index.html","cb4a2b9d9300a8474228d94467f4a37c"],["JS_0X04/index.html","9e4fa213a4bf57d215b161d8f5c36fe3"],["JS_0X05/index.html","24227199a859731cfa3b376f4f5b3ee6"],["JS_0X06/index.html","dccaf71e386690f30d8edb3b3dfe6826"],["JS_0X07/index.html","576ea9ca1567f5cf075829a2e1c1c232"],["JS_0X08/index.html","5122c387b1fffb296b32535065dd46e0"],["JS_0X09/index.html","3234881269cd30064485190af0cd73e9"],["JS_0X10/index.html","2b9b2a6f212ecc818efac9cbf5f4e981"],["JS笔记(0X01)/index.html","53d2f8004c0b619f3ec5671ef5d78111"],["JT808协议01/index.html","59056fbb084090c80add36ec09fbdf72"],["MQTT协议01/index.html","212b47160df82fde3c08269ea00c411e"],["NFC协议01/index.html","bf5e6009509efbb939c3381202fdca5d"],["RF协议01/index.html","49e30f9bb69a00971f2eb00cf98145ce"],["Wi-Fi协议01/index.html","be74115b9854739e4ffff3daf5794c0b"],["ZigBee协议01/index.html","d4cc771a261d8c6a31fc625c9897d823"],["archives/2020/08/index.html","c3d0c5ac12fd9b965e0338b89bee69fc"],["archives/2020/09/index.html","02a0a5b1f01d8da4f786fab96100e9d4"],["archives/2020/09/page/2/index.html","92a2851b34676224fa20ccccf5b71d08"],["archives/2020/10/index.html","70821f5125fdae4406129ee7020a26cc"],["archives/2020/10/page/2/index.html","359ce2cdebeade604424913b5ff1e672"],["archives/2020/12/index.html","a1316a2991ba5237c622a1008a466861"],["archives/2020/index.html","49fd90e15645dc12be9bb826d2477146"],["archives/2020/page/2/index.html","938ccc46d8f77efbed3eda85bea65f98"],["archives/2020/page/3/index.html","8dff6fd14ae4967ce8ecb16e24f1b082"],["archives/2020/page/4/index.html","22e7bdcc29d9ebbefc4db2aa68462ef3"],["archives/index.html","7bd2eca6fcde18321d361ebab87c63f7"],["archives/page/2/index.html","d1c172b0681e65d7df14a38592bb3894"],["archives/page/3/index.html","b117e41d1514070e3de090dd50f15804"],["archives/page/4/index.html","f4b67abe6435500d65a257ebaea07c7d"],["categories/ARM汇编/index.html","37f760931c03bb42a6a4ae2860a66e07"],["categories/Android反编译/index.html","5b481ec0fd29efe7ec80c66ef5d72fa2"],["categories/CVE/index.html","4227e102af81e705b6cd59dc37a61a71"],["categories/JS学习笔记/index.html","97d2ede11026fe6609a17e28e027c78b"],["categories/index.html","6e2eb651426c1b6dc9c2e1f4f7795d2c"],["categories/x86汇编/index.html","7751f3fe94c159070012ac740162f26a"],["categories/x86汇编/page/2/index.html","e1164ea0c3204a63b444f9fb931851bc"],["categories/固件逆向/index.html","4fc5c836a7118c2d32f03f7e6c527ecc"],["categories/硬件电路构成/index.html","ae42f5708a8bce3bc774ceafed84f0a8"],["categories/网络通信协议/index.html","602ea90bb68dcc7e4fc659fe3b5d211c"],["categories/逆向/index.html","978433264336f80088e03c07974569d4"],["css/index.css","57ddfe330d43d455a741d80564941694"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","f31bb943b120baaf2af3556e45b1a386"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","0ac2ace324c257b24727f5f11f54e32e"],["page/2/index.html","21cab1a8395996b69ecc8dc1ee11cc31"],["page/3/index.html","17af3cf8321eb7c415a083d0a8ff5688"],["page/4/index.html","b6078d5b4c536b767a240f870bac1dfc"],["tags/AMQP协议/index.html","3d8c04370c37467b03a5968617941815"],["tags/ARM汇编/index.html","8678cd3952e0006c026fd501b03b082a"],["tags/Android反编译/index.html","19dd02aa48c771739034b8e4b25ae677"],["tags/BLE协议/index.html","731130b338e8e0ed10fe1c709764b5be"],["tags/CoAP协议/index.html","5f6a8ceb500f30a2623baf98f6490cfb"],["tags/JT808协议/index.html","42a232eebb89aa600ce56a489d9b13c7"],["tags/JavaScript/index.html","69d476cca68345064ae2d5822e018724"],["tags/MQTT协议/index.html","f19183db7d5cd859b6d8ebd2bb8ad5c6"],["tags/NFC协议/index.html","c5e32fdd01d96901507b0ec6888b42b0"],["tags/RF协议/index.html","da9ce7babd0c4d9c4123c132ec36a909"],["tags/Wi-Fi协议/index.html","53102a10756fc9a3f08fec931c98fba8"],["tags/ZigBee协议/index.html","69170f0569ee1bb3b98172bc2e7af1a5"],["tags/index.html","cd8fbc80e00f15cb6ee06d198aca39e5"],["tags/x86汇编/index.html","0df194145f38f93c1b101de334af8f15"],["tags/x86汇编/page/2/index.html","adcaa82e8cb96bba8a052ebb312e2a20"],["tags/固件逆向/index.html","8650c7d1ba1b1feef95ca722e8105b9d"],["tags/漏洞复现/index.html","44aefdeb187481463b295e49016233b6"],["tags/硬件电路构成/index.html","066d70e2caafc108b629e297868d8b4b"],["tags/逆向（基础）/index.html","8c4d56c53c66f53c9947b386425c2c95"],["tags/逆向（调试）/index.html","8ef79ad101b42e54b0e98431847e7b01"],["x86汇编学习笔记_0x01/index.html","cb0e50bcd8c108bbb7500ef35407cb13"],["x86汇编学习笔记_0x02/index.html","7662624dc311bcd52d619dba24e786cc"],["x86汇编学习笔记_0x03/index.html","91974a62080abe04ce14a73b39d25f1c"],["x86汇编学习笔记_0x04/index.html","e119ff830aa7c2b51c8a0e6b02fc87b7"],["x86汇编学习笔记_0x05/index.html","1103a382aefb15f695f4747251b2e61c"],["x86汇编学习笔记_0x06/index.html","7e18022d1c90cf21c1a96160b6d002dc"],["x86汇编学习笔记_0x07/index.html","78af628937370e651178a248431e2f46"],["x86汇编学习笔记_0x08/index.html","a69e24e57fa4a97ea059ea11247b810f"],["x86汇编学习笔记_0x09/index.html","94cb25334fc866efe63205806958c735"],["x86汇编学习笔记_0x10/index.html","53b70dda2c4ed1e5e3cc4ce7686d98c8"],["x86汇编学习笔记_0x11/index.html","13e01c305575d8fa71cda5409e611489"],["x86汇编学习笔记_0x12/index.html","5d3b4f240a52344d97e741fc93b14d8a"],["固件逆向01/index.html","ff67fc4e14c5b31cbf1c202a766c672d"],["汇编指令集/index.html","3b2d446ac66e7a6fd77dbf1cc2cf2628"],["硬件电路构成01/index.html","bdaf6c7feb9fe41a4072e1ad48aa85cf"],["逆向-基础-笔记_0x01/index.html","9b1a502225dbe6c76c0b47a8a9339272"],["逆向-调试-笔记_0x01/index.html","36566f7ded362908049545a63385021d"]];
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








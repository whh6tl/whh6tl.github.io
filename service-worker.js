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

var precacheConfig = [["404.html","b11fc84d93235dc9ae42654581afbf13"],["AMQP协议0_1/index.html","e83d9d99968a3aacb807fa0c76ac72ff"],["ARM汇编01/index.html","827e924492117d5f4c66d42bd315e6f4"],["ARM汇编02/index.html","cb1d7976470d25be249da0032c9f2b4e"],["ARM汇编指令集/index.html","ea94c512d786bd744a5ba598f31c45af"],["Andoird反编译01/index.html","547cfd0530e74704c207f417a03684ec"],["BLE协议01/index.html","ceff53c8394ffd2ba13c0c07e48a4c48"],["CVE-2019-5418/index.html","38d916efc02eca17058f67d7ef66c92f"],["CVE-2019-9766/index.html","61d8c508c5be7b1a56ad183ca4bc500a"],["CoAP协议01/index.html","94de0012d0bcd0505d07068b936b7d41"],["JS_0X02/index.html","62ce1b82083036639a34a090e6081bdd"],["JS_0X03/index.html","6c62bcd3a5fd8b3884f31da368a8fa94"],["JS_0X04/index.html","94579284ce97a9579cd4ee40e51c3c71"],["JS_0X05/index.html","1cff52214fe2486b8c005f0bbd2d367a"],["JS_0X06/index.html","c389c586683a9b576c619102b4ebe35f"],["JS_0X07/index.html","c2279883779d8fb35e9d4603ff0bad50"],["JS_0X08/index.html","2dd169a23101c743b14134cb359df19e"],["JS_0X09/index.html","e2a799a9500edfee331def84541c9357"],["JS_0X10/index.html","411d36bd4fd17869ecfc173c1de1a582"],["JS笔记(0X01)/index.html","060729f7b0b5a06ddec05305d1d7e742"],["JT808协议01/index.html","90dd19b737468874c9049b059c55be11"],["MQTT协议01/index.html","9f3e67e54b6daf287cba290edadaabbe"],["NFC协议01/index.html","7d446daa93934a20b5d1c0bcc1aea594"],["RF协议01/index.html","8caf71408fdf43c215da6bfaa1a8bc60"],["Wi-Fi协议01/index.html","772c376c4b3f66a40eaf2d163ba5f3ca"],["ZigBee协议01/index.html","6b8ac2a14d55d4b0f2f3183486c94028"],["archives/2020/08/index.html","0de28009543a9c6a12387cfc8316234b"],["archives/2020/09/index.html","5270d8cea2c9ca2e7535b72bf0888c9f"],["archives/2020/09/page/2/index.html","42c3042f4af06d6bd22f54cd111b6bb1"],["archives/2020/09/page/3/index.html","bd637016fe239189b95c9957e63d8b71"],["archives/2020/10/index.html","1a9e4bbf085801e9e4e9b65a09ec0aad"],["archives/2020/10/page/2/index.html","625acfb0c8dc33604f55ad53fcd91b90"],["archives/2020/11/index.html","65b0816350b0f118fa72b9f0f5c24197"],["archives/2020/12/index.html","abd1e856c778649bac92be814ae634c5"],["archives/2020/index.html","e6b8184d040726a70a7da5cbc784fd66"],["archives/2020/page/2/index.html","1866fbb7b7d43b571bcc57cecb6eedf5"],["archives/2020/page/3/index.html","3e4737208e4ecd9dd60aa7efc14e6c5a"],["archives/2020/page/4/index.html","9682ad5c4b4d3cbf2bea9ec7ca8c8934"],["archives/2020/page/5/index.html","2cef47c1cec5d5f99f16e7e4a9fa496b"],["archives/2020/page/6/index.html","3d240e987c870f769f522d10fccee433"],["archives/index.html","e74116aec978b7631cc3783e6b27aed5"],["archives/page/2/index.html","1a512d1f394b8e7ab1953c007e47ec86"],["archives/page/3/index.html","959144eceb8a8bcbc8d885d966176dd3"],["archives/page/4/index.html","9658a2099ef06b9935e714cee199cc55"],["archives/page/5/index.html","b7cdb12b02e03ddbf1d657b3e8088e47"],["archives/page/6/index.html","9184ce19f52502b2f6e9071df7431509"],["categories/ARM汇编/index.html","2aec1da5d165d6ad313477e8e875f0ed"],["categories/Android反编译/index.html","5a160ff2ae840301437726f89b9f563f"],["categories/CVE/index.html","924cbbb08004216af14d359422a6d8bd"],["categories/JS学习笔记/index.html","b21a680c2622de7b4b18fca32aea88c5"],["categories/index.html","34b294c7a67d7b73b6504bfae046d768"],["categories/x86汇编/index.html","e82b73e53dc869948d601006a9b8f669"],["categories/x86汇编/page/2/index.html","e433681d001db8da69a99ba294e905e6"],["categories/固件逆向/index.html","b64dd9c879bd14c206be36c153adeaf6"],["categories/智能硬件安全/index.html","71bef17363a5003c22a090371d8c991e"],["categories/硬件电路构成/index.html","0f7c589eea67b76fd18b821d50cc01e1"],["categories/网络通信协议/index.html","99cfa142f63b1ab197f317ca334cedf8"],["categories/逆向/index.html","fefa4b747cbd1abae34621dbfc441854"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","e23114b0c38c26108d250fd9d7484691"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","c5dfd8efac510a1a3299d0170a93214b"],["page/2/index.html","18db39eb5d7e813f975dc78a2838768e"],["page/3/index.html","ae274be530eaa2ba9dc53165f093a3d0"],["page/4/index.html","5a081501c608998f407da54459df9b47"],["page/5/index.html","f819750c9debd69734a805a4e9706d05"],["page/6/index.html","9dc2d0b3b8cd781d3501ed5459eca97f"],["tags/AMQP协议/index.html","9d261d622bc312a1deb6b60ccdaa08cb"],["tags/ARM汇编/index.html","6cd2599a2c9e0596a522e13e68294fef"],["tags/Android反编译/index.html","40f2e914882ae36dfb605dda9dcd880a"],["tags/BLE协议/index.html","bb453553f3c13bc4b9497181dc58e30e"],["tags/CoAP协议/index.html","ff58259f0a98af2854335dec1da49b62"],["tags/JT808协议/index.html","65713f99d6b52eaaa5c08d428d7f416c"],["tags/JavaScript/index.html","b163a88dca0f1f88ca87fc35c90cc187"],["tags/MQTT协议/index.html","38c6f362b604ae427b952977bcc8c5be"],["tags/NFC协议/index.html","18ce0b9e6c5af46774bf7f295d090004"],["tags/RF协议/index.html","d19f6c6627325c6dfd6a83cc7b0bc7d2"],["tags/Wi-Fi协议/index.html","25b613b661a9194f487a66d7838e6f97"],["tags/ZigBee协议/index.html","48ef5d73d5265283684d52b692bad2ef"],["tags/index.html","0c8071f5eb6192287ebc524cf11ca33b"],["tags/x86汇编/index.html","33f4ad3a9d6cc094c22ba5606f0578e2"],["tags/x86汇编/page/2/index.html","50f0eb292646cb267e2d0775e5bddc52"],["tags/固件逆向/index.html","16c727ea967d53fdd74ce34f737aba0e"],["tags/智能硬件安全/index.html","874ebb352363959c516d760bdb1e82f4"],["tags/漏洞复现/index.html","397ef09991b064043fe9085bcecece46"],["tags/硬件电路构成/index.html","b8f2422a5c2cc60b873250b959ab1ffb"],["tags/逆向（基础）/index.html","6f5c8ad1246ed131d518646a996d1d7c"],["tags/逆向（调试）/index.html","41c0eaaad3f7eabb20ae23a01085e891"],["x86汇编学习笔记_0x01/index.html","804167a903030c1176f6e9dffc29a9cb"],["x86汇编学习笔记_0x02/index.html","880188fd90c74e0267b2d761f302607f"],["x86汇编学习笔记_0x03/index.html","6a4e424eabf4df16dc0d286d3ef877c5"],["x86汇编学习笔记_0x04/index.html","a2c550211733fb44446dea4226ea6a15"],["x86汇编学习笔记_0x05/index.html","89db42f2df22db26be94c9c816e0db19"],["x86汇编学习笔记_0x06/index.html","880edc4ca804e6c2d8eb335bfa052727"],["x86汇编学习笔记_0x07/index.html","b2214def9851e16b22e70057db0849c9"],["x86汇编学习笔记_0x08/index.html","8b38aea5c4516eeb972f2b352953fe3e"],["x86汇编学习笔记_0x09/index.html","0382df156725326af97e7932de80f582"],["x86汇编学习笔记_0x10/index.html","c3b9838c4934e03fe88be08a48caadff"],["x86汇编学习笔记_0x11/index.html","08f7468e21d84a6595f0fe474ffc7b84"],["x86汇编学习笔记_0x12/index.html","b253971f1696e11b5994c3636f4277a8"],["x86汇编学习笔记_0x13/index.html","ca2454908787c8b9001e1d3664a0b167"],["固件逆向01/index.html","6988c247c62f0b776fad7e0145028617"],["汇编指令集/index.html","b6abdb4035a64ec19c7ea6265b247b01"],["硬件智能安全(0x01)/index.html","3118ecae654cd9b23f3de07f886cfdf2"],["硬件智能安全(0x02)/index.html","51b8bd440ce5313e71b85af741c126ae"],["硬件智能安全(0x03)/index.html","257c48575a7de91c4c56b5e0fbd7b6cb"],["硬件智能安全(0x04)/index.html","daca8929c5f2ddabad556c0ca0a3493a"],["硬件智能安全(0x05)_/index.html","d90f8e7c386f38cd35c288a6ff2337a1"],["硬件智能安全(0x06)_/index.html","d554381d367124014a647472e614c605"],["硬件智能安全(0x07)_/index.html","b229499dcd263aa5ff8e7943121c1051"],["硬件智能安全导航/index.html","b1ef0a76c2cbef77b72e2980ffde04a5"],["硬件电路构成01/index.html","f51feca8fc30aa47b6f33a02b806e079"],["逆向-基础-笔记_0x01/index.html","b6c19f11f69cb269530bcf9aa67ba5be"],["逆向-调试-笔记_0x01/index.html","6f4d6096c41d8f6ed849eef42f915d80"],["逆向-调试-笔记_0x02/index.html","ec45744672924350b69bcaf141c1ce5a"],["逆向-调试-笔记_0x03/index.html","d4189ae899f0ac71008a39a900518ed7"],["逆向-调试-笔记_0x04/index.html","59c791186939a6136078ba8be59237c3"]];
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








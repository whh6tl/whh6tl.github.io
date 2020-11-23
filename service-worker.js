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

var precacheConfig = [["404.html","6d67118555a42bcc15ff640fb4e8c59b"],["AMQP协议0_1/index.html","3de61e82f463b084d978000614a13a5e"],["ARM汇编01/index.html","b9a1385118ca341f675cd542fe9545b5"],["ARM汇编02/index.html","22c10230141ed219434f4f27b831e01b"],["ARM汇编指令集/index.html","2d4ca83dbb52f7209baab19725db94b8"],["Andoird反编译01/index.html","45b2f44983c37e12635b347d1112ed60"],["BLE协议01/index.html","d7fd17cf75f9d77a6ebe5d559290a513"],["CVE-2019-5418/index.html","1e1c363398453fa152a2c0f8f0a5c20d"],["CVE-2019-9766/index.html","cb4e5e8cd126ecc94be6481439cb8a6c"],["CoAP协议01/index.html","e48ac0208ee8dee148509f86dac3615f"],["JS_0X02/index.html","74b64df51be99a6d6286c6fb409de169"],["JS_0X03/index.html","5be09fc4a9f830eb0e1fbe73ad211fca"],["JS_0X04/index.html","769617d3838d80ec7ef38b78260c77a6"],["JS_0X05/index.html","def9fa545992f16b001a316b1d19f89c"],["JS_0X06/index.html","4c3abe6f291cf5fce08310f95f1efce4"],["JS_0X07/index.html","e3d589a7f56beaf381f07b3a9151aef6"],["JS_0X08/index.html","dda687a1f4b1d7ad902303e4c6a1c94c"],["JS_0X09/index.html","b6cbb0c098cd064309e605c4f78844b9"],["JS_0X10/index.html","8902623aaacd5dbe80a884b97844c3a6"],["JS笔记(0X01)/index.html","0793babd3326fec8a14bc5a04ff88edf"],["JT808协议01/index.html","273939f77b262d6cc3ce4cfd2fb755a7"],["MQTT协议01/index.html","40896af16c8a09f9b3264021fc45311a"],["NFC协议01/index.html","6cf677be9a62231e157c8b159227c036"],["Wi-Fi协议01/index.html","b24d8daa950fba58699582142050d272"],["Wi-Fi协议02/index.html","f7b678a600fe99bc963127f80c2befd8"],["Wi-Fi协议03/index.html","cb95fc78e75cb13ece9fef6c537de1fa"],["Wi-Fi协议04/index.html","e48fa87a2972011c58c9204da2bb1ece"],["Wi-Fi协议05/index.html","24b391875346bf926e1d7683d5eab044"],["Wi-Fi协议06/index.html","fe8a20b2ea019ee402982a828c3482fb"],["Wi-Fi协议07/index.html","cf1ed8cd2fb08c039be02ef07113b302"],["Wi-Fi协议08/index.html","ce0d634cc4e5c96c2745d5bd2104782b"],["Wi-Fi协议09/index.html","47607d78d61e97ca29cb18ddee90ece3"],["Wi-Fi协议10/index.html","aff3d7588671acad4806c12bd1974c9f"],["Wi-Fi协议11/index.html","0c0dc88bf2ba4de881a3772a2c14292b"],["ZigBee协议01/index.html","aa5c4299a8f74796bb364bb0a0b787fe"],["archives/2020/08/index.html","fd36e54326dc2945bd828ffc93a270dc"],["archives/2020/09/index.html","f4321d6da2c17e16b8c79ba49e0a8203"],["archives/2020/09/page/2/index.html","e144fd3dc8e13233a1cfa864486c23bc"],["archives/2020/09/page/3/index.html","a608c373afbc22d72362cedcf9d49164"],["archives/2020/10/index.html","f9d15349fb66ff2cfa25fb650de0f07a"],["archives/2020/10/page/2/index.html","3ede580e066c45d5ae86dcc243c72c73"],["archives/2020/11/index.html","67c1e36bdf153852a6098b54d17d6762"],["archives/2020/11/page/2/index.html","e0f6ea28ca76a12f6b055aed40bf9d8a"],["archives/2020/12/index.html","b8a11fea8d33b99effe4a1fff084c259"],["archives/2020/index.html","cea6652c47c4254093a6bd97ed8b3f98"],["archives/2020/page/2/index.html","725fb958eacb5427da7f541d13aad472"],["archives/2020/page/3/index.html","94d61706373389ba9cf523127e513e4c"],["archives/2020/page/4/index.html","1578e190e569a0c9b117317e06f80985"],["archives/2020/page/5/index.html","ec3bac61e16239b6cef0f4d29657f091"],["archives/2020/page/6/index.html","0a03a11b37daf65ae78038a2c4580bf5"],["archives/2020/page/7/index.html","8cfb658c1cf55cc81bc2780b3361f6de"],["archives/index.html","203df05635d2ca26c9c973d086f08b46"],["archives/page/2/index.html","fad7a4eb7cc4ee74047e55e96f8e91ec"],["archives/page/3/index.html","b1cde3af13d559f934fe98c901173d9f"],["archives/page/4/index.html","9bc0cf79fa0eb004c0ae20ec1fec673c"],["archives/page/5/index.html","9db7724caef3ccd8dd2f9eb0d7904d06"],["archives/page/6/index.html","6c6bf5224cce7470a654b71c408a09c0"],["archives/page/7/index.html","5597bf84012256ace67e36088a931a53"],["categories/ARM汇编/index.html","c60142c003f458dec00977652bd0cb5c"],["categories/Android反编译/index.html","fc72219d6e4096924e53b8f211cf21e1"],["categories/CVE/index.html","f51f9a5b9ff5ee9158254226def408fe"],["categories/JS学习笔记/index.html","e99d698c2a65bd1714520da545860653"],["categories/index.html","bc76590fc005ac943567be54630e1819"],["categories/x86汇编/index.html","d0607e35a89e4ad618b963e7746e46e4"],["categories/x86汇编/page/2/index.html","b84370fb9c156e6042a868bcc8922613"],["categories/固件逆向/index.html","399327c345985a746ae9caf0e2af0551"],["categories/智能硬件安全/index.html","48e00ade5e47970d1399f63e8b2d4408"],["categories/硬件电路构成/index.html","3b7d01e7a0f8f03b95ebfe30be914432"],["categories/网络通信协议/index.html","c1b0689987a6aa4f8104dcb34d63b6fd"],["categories/网络通信协议/page/2/index.html","60bd6086ddce092b927b404d9563e13d"],["categories/逆向/index.html","ed6e57d4dc616c5f76bb2139d49d3246"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","36e122f5143785699af19f5ef179d90a"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","022dffb2f87c601de1c9eefc21f0f810"],["page/2/index.html","b8ad9d05883da3383ecae71030dc647d"],["page/3/index.html","62efdf47bd2a4855ca235618b0059600"],["page/4/index.html","2d013c516ea1416e90f0bc5e69ac9e23"],["page/5/index.html","3089dae2a31cc8d0f6d25a3dfc033370"],["page/6/index.html","058e94fc4d88a26c7104778a7df09371"],["page/7/index.html","5d8c7e575aa9258c16394cfa9b806b65"],["tags/AMQP协议-暂无/index.html","1f2daf72e6239b12405fb7ac79e79998"],["tags/ARM汇编/index.html","f0483c377edfa05e354d05fa0de2e284"],["tags/Android反编译/index.html","80506e3180b69be964246a60c283c09c"],["tags/BLE协议/index.html","4ccb20d407218bde83599e8e096d5027"],["tags/CoAP协议/index.html","6a417c5c4e25b4c0f3c67d10b18fca5e"],["tags/JT808协议/index.html","fb25a3072450307fc2ce29515524a341"],["tags/JavaScript/index.html","31725d4776c4e69fc67c3066cb46b008"],["tags/MQTT协议/index.html","e9f878b9ab5dcc234a7628ae3c6d7cd7"],["tags/NFC协议/index.html","fbfe18bcb7d56cc27dc01c367384c253"],["tags/Wi-Fi协议/index.html","f1a64fd5b2b993f61d6ec0756622b2a3"],["tags/Wi-Fi协议/page/2/index.html","327a681bed5bbd8bee127497c7f6bbec"],["tags/ZigBee协议/index.html","8e5f80ccda6fac97e520d981a5f9b762"],["tags/index.html","19ad43a25f9c0d226c22965c209f01c0"],["tags/x86汇编/index.html","00a2d061e68242cf8a8698ccb19c86c1"],["tags/x86汇编/page/2/index.html","040c634854eb5e96041354dc3e22f635"],["tags/固件逆向/index.html","3a0e27dafcaac3a4fa658bd0b70feeea"],["tags/智能硬件安全/index.html","5509ec43e7cd1a305e49101d39754501"],["tags/漏洞复现/index.html","854bdb5bba9eecf7f406db6c0199390a"],["tags/硬件电路构成/index.html","c8220318a03286a69ef795645f6a195f"],["tags/逆向（基础）/index.html","19190c4946c685d3c8e76ef6d9a8432d"],["tags/逆向（调试）/index.html","46f77d124d8ed87d9ca9a95e91292ab8"],["x86汇编学习笔记_0x01/index.html","15f40d3ab3fe48258b83e0b63b3cf7b2"],["x86汇编学习笔记_0x02/index.html","5b183fcc455192cf5250a1f08572fdeb"],["x86汇编学习笔记_0x03/index.html","a75ce13c8c4b9fb486a17f05ec49d140"],["x86汇编学习笔记_0x04/index.html","4711530a1049d8093f9933c306504e15"],["x86汇编学习笔记_0x05/index.html","34cbc13ff1a9e3fc19c38f6a8509dec0"],["x86汇编学习笔记_0x06/index.html","816d52ad7862574f97a0e9c4b493647d"],["x86汇编学习笔记_0x07/index.html","928cb08b9d59c48cb078ec21ffce9aeb"],["x86汇编学习笔记_0x08/index.html","dfb871c17c0aca2dc1ebba42f6886bc1"],["x86汇编学习笔记_0x09/index.html","aba18e13d7ca46c9462bf64f38805c2f"],["x86汇编学习笔记_0x10/index.html","2786abc72827190658d09b5f19d11856"],["x86汇编学习笔记_0x11/index.html","789ca0722557d74089d0024d1cc1cde0"],["x86汇编学习笔记_0x12/index.html","070a1f2d53e22e054c38ef3be21a40c6"],["x86汇编学习笔记_0x13/index.html","c46938d5ce4d1c650d04e5d50352052c"],["固件逆向01/index.html","6b0a2101ead10c63c0e581a89ae39488"],["汇编指令集/index.html","bd374f848338fe167fece34ab463f82f"],["硬件智能安全(0x01)/index.html","863021654fcea471d95d5f8c00bff5ec"],["硬件智能安全(0x02)/index.html","0f65b5332b6b1e631130aba96155450c"],["硬件智能安全(0x03)/index.html","41b6078f0b4f3256f4e0c0d3716bf858"],["硬件智能安全(0x04)/index.html","4040efaa561ede45cd2108f5ab8bc99b"],["硬件智能安全(0x05)_/index.html","20dcb56ecd44acc7a44dae1b82170745"],["硬件智能安全(0x06)_/index.html","d8cefc4a07abebe60d9fe12d6a1f7af6"],["硬件智能安全(0x07)_/index.html","cd5cfaf6a6821d788d754da3f0e6fd73"],["硬件智能安全导航/index.html","e47e2ef17032d52527b9a40709b07395"],["硬件电路构成01/index.html","2963b846d31959877bc8f16f0b46a126"],["逆向-基础-笔记_0x01/index.html","3fbc3bfde2f34526549327c9e0f0eb88"],["逆向-调试-笔记_0x01/index.html","41e577cea77b3341cff6cea8e94d2541"],["逆向-调试-笔记_0x02/index.html","5145ca35f01aa82940190fb9167fcb1a"],["逆向-调试-笔记_0x03/index.html","ae236ba4d661be1014f3bcb8387512f0"],["逆向-调试-笔记_0x04/index.html","a7b73cfcce2d0383e3f2e219cc99b9ab"]];
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








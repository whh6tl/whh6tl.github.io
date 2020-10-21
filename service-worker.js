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

var precacheConfig = [["404.html","84bceed60e2e250a1f65cab12b5ae8e6"],["AMQP协议0_1/index.html","efb95cfa15e979bbf71d0a8e568a6f61"],["ARM汇编01/index.html","c012b5a09f135e0ce85043d02043532c"],["Andoird反编译01/index.html","92fe059dc16db5c7ad2df5f3485694ed"],["BLE协议01/index.html","016a3b0775796e7519129d993904c215"],["CVE-2019-5418/index.html","ed931cf2d66ec9af84731cbf14b58dc3"],["CVE-2019-9766/index.html","3f7341aa38ac9409bbc1ce5fb886f006"],["CoAP协议01/index.html","75165c115de1cea0d48134bc6c64f890"],["JS_0X02/index.html","4b89e7c7e970595d990a1c3cb90fc878"],["JS_0X03/index.html","e2aeb3979d4fff2fde21e910f1aa3843"],["JS_0X04/index.html","4ff46d606c5f0203bb5234fe7216c9ea"],["JS_0X05/index.html","e2f551f7737a477e697db217c9760ad3"],["JS_0X06/index.html","ad8399f15e6d5f63b7f976722516b866"],["JS_0X07/index.html","4d3c11a261b7c4933d5e6e4ddee79833"],["JS_0X08/index.html","6cad83bc6d5dfd6a7195da535ef9330f"],["JS_0X09/index.html","0075abf704466a944647f13cdcf162b7"],["JS_0X10/index.html","ea14a1c07fb16adbed4b18ff8f4b129f"],["JS笔记(0X01)/index.html","be81e83d6b0a02eeaf1f37e51122a50a"],["JT808协议01/index.html","c5a4d06c253f05694ef789edf11bcaac"],["MQTT协议01/index.html","4c26779604b589807eae69946011ff83"],["NFC协议01/index.html","22e4297333f431eb2298bbdfe8a31017"],["RF协议01/index.html","c79f7e12f7c286379a021d4d00a07bfb"],["Wi-Fi协议01/index.html","f0dcba36043a499597eaa9dc873e832e"],["ZigBee协议01/index.html","7f6c98552ac97775fba95022253d302f"],["archives/2020/08/index.html","b62d91962af3a565a2bbd808a6e6433f"],["archives/2020/09/index.html","053d17fa2c27e47147b6a0991393d674"],["archives/2020/09/page/2/index.html","e88dc7b5c74977e4bbe6f8702c7339ea"],["archives/2020/09/page/3/index.html","ce9621884b7802c9cabd1d8f31de5ac9"],["archives/2020/09/page/4/index.html","b70b5051593b94f26214d23105dade88"],["archives/2020/10/index.html","4b4831a48994704038149dcc7228a4d7"],["archives/2020/10/page/2/index.html","b2157357779e7f2ef573aafe036c2e45"],["archives/2020/12/index.html","8feff664045d42515b6af9d01d672ab8"],["archives/2020/index.html","87679fbb39c83fa069a87eb2e4b80160"],["archives/2020/page/2/index.html","b988b8375f8c834bf50151f93fecd4e8"],["archives/2020/page/3/index.html","a0115337e07f25ac7ac8e37d41de3e98"],["archives/2020/page/4/index.html","7bebc413d7de26a5ebeae0fd6ed85f2d"],["archives/2020/page/5/index.html","68a3170a288a52bc52e6b93847793dee"],["archives/2020/page/6/index.html","f5ed63a9ff03fc113bf0051b857600b9"],["archives/index.html","41fb6ae17a66898bd9726ffa39d0dba2"],["archives/page/2/index.html","cb64d4d68f41700c670b77034580a62c"],["archives/page/3/index.html","403458ea4d57a9ad8fef84b0172d6a9b"],["archives/page/4/index.html","14204135fcf57508155a801ddc80bed7"],["archives/page/5/index.html","0749c0001e60287f33b7c316a21fa72c"],["archives/page/6/index.html","483c6ff48414aa0d381bba1fc06808fd"],["categories/ARM汇编/index.html","0879149ff27132f20018c129d0596794"],["categories/Android反编译/index.html","6426d390e267ff9d7f1305ada020028f"],["categories/CVE/index.html","a6823710837736e7473487f4e76df884"],["categories/JS学习笔记/index.html","7694cc731febccb0d5028ac4ff9d1a5a"],["categories/index.html","d855801654f5db7a211818029142abec"],["categories/x86汇编/index.html","05cd233325b0c5605f68695c65cb307e"],["categories/x86汇编/page/2/index.html","1d4961dd14664450a96a6c9725580a75"],["categories/固件逆向/index.html","9c2d4ab83e498aabfc1c4147f378f261"],["categories/智能硬件安全/index.html","5e3288aded7a034e441b00ac2257dfdf"],["categories/硬件电路构成/index.html","c44e55233f4fa8d5a59af89fcd046a24"],["categories/网络通信协议/index.html","1cc1c3f44180bb97f58779720f43d587"],["categories/逆向/index.html","dbe5e2037666eb5092d9ee8b1f4dc01d"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","14dcbf088462259e3c3e12f48edd37e9"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","6d7b43e178231a699bb2c50d4e7ebb19"],["page/2/index.html","2712a970c00f399b251323d2896142f9"],["page/3/index.html","3af6c3332608dc18c7457206d2a9b8fb"],["page/4/index.html","b0fdc7d2222d8af14a44606a13cdebea"],["page/5/index.html","6a2afacab053097d25d19ebce7d5f475"],["page/6/index.html","5fce4076240e94848f62a2c3d46b90fa"],["tags/AMQP协议/index.html","c33159009497753fe1aeeccaeec73be8"],["tags/ARM汇编/index.html","550b209645fb9439e9aa84b030b0a694"],["tags/Android反编译/index.html","d7c933ba5129cc4028e2f0035914bf3d"],["tags/BLE协议/index.html","0dca51815cb7f7bd50e56839b71bd404"],["tags/CoAP协议/index.html","292ed1870597878ffeabdf315c3fc43a"],["tags/JT808协议/index.html","7f12f7381fb0e2a0aa062df2721e991b"],["tags/JavaScript/index.html","b5b64ce61b796beeead49b95918fb467"],["tags/MQTT协议/index.html","5a4872a73899b3f2ef1e7c1fd2b3d06c"],["tags/NFC协议/index.html","074f88783704ff3faf5619c7bef2ef2c"],["tags/RF协议/index.html","1fbf5ede1357b04159d90a183af7b2e4"],["tags/Wi-Fi协议/index.html","8c2aa6e3a8f930756a27ffe5d5f1a3fc"],["tags/ZigBee协议/index.html","40e6482a6ba8e0100b9b6e3dd04f209c"],["tags/index.html","c8a51ededf0ae69026e3e52b97b96795"],["tags/x86汇编/index.html","24311ebac8b2653b2cf67c651c9e5792"],["tags/x86汇编/page/2/index.html","dda29427691bf597f08a500279e2617c"],["tags/固件逆向/index.html","1249da13fd73a2c35a40d3d182fd527a"],["tags/智能硬件安全/index.html","db64b96fb7d9b89eda71ede4dbcc9f84"],["tags/漏洞复现/index.html","b6320225a8e281022417f81d29a279c8"],["tags/硬件电路构成/index.html","6478c698d0e9ad888898d04141b5173f"],["tags/逆向（基础）/index.html","204e8a9aa8c776e0293adb1ae4ae93a0"],["tags/逆向（调试）/index.html","9e8a60166f653247ce60403ceb41b041"],["x86汇编学习笔记_0x01/index.html","c6c55883e7a3738daba708cb13b954bc"],["x86汇编学习笔记_0x02/index.html","e596e346c1635e2a40991635fb52f4af"],["x86汇编学习笔记_0x03/index.html","fed784cc6e1cd00c2e6f0912ce054da4"],["x86汇编学习笔记_0x04/index.html","2a10469cae24f12bb0d5b3509ad9438e"],["x86汇编学习笔记_0x05/index.html","1246ec0871b1fd8eee09285e3ec1bdac"],["x86汇编学习笔记_0x06/index.html","366713e0ea48c52dd35c90d5d152e042"],["x86汇编学习笔记_0x07/index.html","38521e13a80b91298372d59a8c775030"],["x86汇编学习笔记_0x08/index.html","7def43b15ca0eb1b628c8d952a23b4d9"],["x86汇编学习笔记_0x09/index.html","b0d3722b972e95e3a07b1382db19524f"],["x86汇编学习笔记_0x10/index.html","b05a7420b1221bd06ee75f6cf7ee032d"],["x86汇编学习笔记_0x11/index.html","182b56fd0f0eb78d18c47f5029ecb3b2"],["x86汇编学习笔记_0x12/index.html","f832cc6d876747e867cbb01bb2477276"],["x86汇编学习笔记_0x13/index.html","659bae566f75dfd25e77150c087fbc14"],["固件逆向01/index.html","0ee61b15b513c1eed723b30c155f7757"],["汇编指令集/index.html","e106a8f89e6337cfaa3bf2a9016270e5"],["硬件智能安全(0x01)/index.html","979a9b799359dd60086626f06a73eaed"],["硬件智能安全(0x02)/index.html","ba1e6f159d1dc8e4c3d93600b17f9c3b"],["硬件智能安全(0x03)/index.html","5024f79d0851c53cce299579ef770093"],["硬件智能安全(0x04)/index.html","6037aedd2bb94095814f3a5b62f1c5c6"],["硬件智能安全(0x05)_/index.html","816c9e666b09034bcb4d06da041992f9"],["硬件智能安全(0x06)_/index.html","c160b76abb6f56f7d1db4d077e608d0e"],["硬件智能安全(0x07)_/index.html","3df893a54391e16102690453b23ab4a3"],["硬件智能安全导航/index.html","598157f6c14d45789192775394587abe"],["硬件电路构成01/index.html","036aa4e0f53ef06959cde0c3c25a4b54"],["逆向-基础-笔记_0x01/index.html","59487d165569d9fb599ca2fdf29f2f49"],["逆向-调试-笔记_0x01/index.html","5ba62c549bb5e302e18f96d95930136e"],["逆向-调试-笔记_0x02/index.html","0a5be71a1063f0bc8bcb57cb0f20d5d9"],["逆向-调试-笔记_0x03/index.html","5b919db871766c0f9018bf33fd674327"],["逆向-调试-笔记_0x04/index.html","4989f73a41f90fa024ffbd2e6412d3a6"]];
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








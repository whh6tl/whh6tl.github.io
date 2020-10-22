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

var precacheConfig = [["404.html","75ec341f24f1de3b6f6822a996114ca0"],["AMQP协议0_1/index.html","efb95cfa15e979bbf71d0a8e568a6f61"],["ARM汇编01/index.html","c012b5a09f135e0ce85043d02043532c"],["Andoird反编译01/index.html","92fe059dc16db5c7ad2df5f3485694ed"],["BLE协议01/index.html","016a3b0775796e7519129d993904c215"],["CVE-2019-5418/index.html","ed931cf2d66ec9af84731cbf14b58dc3"],["CVE-2019-9766/index.html","3f7341aa38ac9409bbc1ce5fb886f006"],["CoAP协议01/index.html","75165c115de1cea0d48134bc6c64f890"],["JS_0X02/index.html","4b89e7c7e970595d990a1c3cb90fc878"],["JS_0X03/index.html","e2aeb3979d4fff2fde21e910f1aa3843"],["JS_0X04/index.html","4ff46d606c5f0203bb5234fe7216c9ea"],["JS_0X05/index.html","e2f551f7737a477e697db217c9760ad3"],["JS_0X06/index.html","ad8399f15e6d5f63b7f976722516b866"],["JS_0X07/index.html","4d3c11a261b7c4933d5e6e4ddee79833"],["JS_0X08/index.html","6cad83bc6d5dfd6a7195da535ef9330f"],["JS_0X09/index.html","0075abf704466a944647f13cdcf162b7"],["JS_0X10/index.html","ea14a1c07fb16adbed4b18ff8f4b129f"],["JS笔记(0X01)/index.html","be81e83d6b0a02eeaf1f37e51122a50a"],["JT808协议01/index.html","c5a4d06c253f05694ef789edf11bcaac"],["MQTT协议01/index.html","4c26779604b589807eae69946011ff83"],["NFC协议01/index.html","22e4297333f431eb2298bbdfe8a31017"],["RF协议01/index.html","c79f7e12f7c286379a021d4d00a07bfb"],["Wi-Fi协议01/index.html","f0dcba36043a499597eaa9dc873e832e"],["ZigBee协议01/index.html","7f6c98552ac97775fba95022253d302f"],["archives/2020/08/index.html","5f434c8e9203cd1fde3abb4f3f31abe1"],["archives/2020/09/index.html","4829e2bf84eeb385d7b88129ca461097"],["archives/2020/09/page/2/index.html","3ffed2bdd7695e0c10d3e63933d5418c"],["archives/2020/09/page/3/index.html","a30c20ee654f9c2a6b5624ec3c32cbe1"],["archives/2020/09/page/4/index.html","eac8d7435a7eb9cfce3180e68c12cf2c"],["archives/2020/10/index.html","7da11812e8b7330068b0f566cbc782d8"],["archives/2020/10/page/2/index.html","42d58bdef5e0063b57881f94317f2205"],["archives/2020/12/index.html","09a214ee6677e43eda551a82259c0ae3"],["archives/2020/index.html","992a6e7785203cd711e3faec23869500"],["archives/2020/page/2/index.html","1b471fc12c9b6838fec514025ea7ebcc"],["archives/2020/page/3/index.html","cfe8d2c28cea47d6de0df469b022d681"],["archives/2020/page/4/index.html","c916f5440d4f761d38c45f686433ee6d"],["archives/2020/page/5/index.html","c24e0724430d4ac53340d2d9885e6678"],["archives/2020/page/6/index.html","016fafc9f786c6e50b5358731bb86f55"],["archives/index.html","03ca3dcbc5880888bea1ccd93c77f93d"],["archives/page/2/index.html","f9afeedab4eca1da1f9c4dce6f4da36e"],["archives/page/3/index.html","2c3cde18b77a692013302a98dbb1980e"],["archives/page/4/index.html","7b2334fc6bb67abec24790a926e0d071"],["archives/page/5/index.html","ecc7b88f858d6aa6d92914ad6de8e6d8"],["archives/page/6/index.html","b81896f17b46ddc8f38c6faf8a7df0c6"],["categories/ARM汇编/index.html","5313385b7c75d49334f73484d3600ab3"],["categories/Android反编译/index.html","48c46e2ef71848bbdf272c6f7d37711d"],["categories/CVE/index.html","5109fcee218f2992372bae24c2d08bbb"],["categories/JS学习笔记/index.html","4ad0e4592374d4a194892b9abc040d9f"],["categories/index.html","d855801654f5db7a211818029142abec"],["categories/x86汇编/index.html","e13ab71b3b87844f24614b6733880ff4"],["categories/x86汇编/page/2/index.html","dac3faf12c53a965212853858a13f5ae"],["categories/固件逆向/index.html","c054188ddb002bb2f5eb86c0ceb53ffd"],["categories/智能硬件安全/index.html","1c40a7c5037d39255c123f515f01b69c"],["categories/硬件电路构成/index.html","2c8d1191c0e6cad1b0820857beb7ed96"],["categories/网络通信协议/index.html","f620109d411b971dda772caac2e23b3c"],["categories/逆向/index.html","564971d97ff788cd82afc71e475eb423"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","6af18b7fcfef7ed3878568d59a6493d3"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","6d7b43e178231a699bb2c50d4e7ebb19"],["page/2/index.html","7c81209b69e5cb8d57d1fc78df2766c6"],["page/3/index.html","dba9e9b7969dd4e520707e95d15f863f"],["page/4/index.html","3f5de29a728d322b4f024b7348274e01"],["page/5/index.html","3c0e1ae7a5d93a9e6bd5695717f0a704"],["page/6/index.html","0472d7eb8552443833bfaf61de8ae311"],["tags/AMQP协议/index.html","33e5d6a36f528d5ac26d37641c856ed0"],["tags/ARM汇编/index.html","f0ce1aea1f33b126cf570e5d337a582f"],["tags/Android反编译/index.html","b815b6312f6be5706165e4055eb25989"],["tags/BLE协议/index.html","7da77f9a1d7aea77aed310c81c885afc"],["tags/CoAP协议/index.html","804ca300f4a5817232a08d99585da07e"],["tags/JT808协议/index.html","4c81b6ad49e8af7d9629c38e025bfa4c"],["tags/JavaScript/index.html","3c20556645f8586b85963cf65f8a29ed"],["tags/MQTT协议/index.html","502a22a05a98f4fd3625497d00427a30"],["tags/NFC协议/index.html","55cf32f79c8394f583cafcd9e2903c29"],["tags/RF协议/index.html","40fba142028c899b860dfbd69ac851aa"],["tags/Wi-Fi协议/index.html","428ba846bcf5a6bc38fbd341be933b96"],["tags/ZigBee协议/index.html","6f6d7bde5cd9824c6119faa6db6516b1"],["tags/index.html","b5c48afc3dc77c68c2eb2d9699058885"],["tags/x86汇编/index.html","d966e50e6e88e784ddea4ce17018e31f"],["tags/x86汇编/page/2/index.html","dc220c8032d2dae89af55940eb2f9124"],["tags/固件逆向/index.html","d1b2392a3423bff7b56f4b48e2de7e90"],["tags/智能硬件安全/index.html","ff33e826e954ed8933a503af22e177c9"],["tags/漏洞复现/index.html","47a6f95a2d93d719d627fea7cfff6b2d"],["tags/硬件电路构成/index.html","9ee37a981b69f9783e9c44139dbbf446"],["tags/逆向（基础）/index.html","023193ec86409d24e9dce5ce8ee83817"],["tags/逆向（调试）/index.html","bb4233c0f38173bd275fe50d06cadf46"],["x86汇编学习笔记_0x01/index.html","c6c55883e7a3738daba708cb13b954bc"],["x86汇编学习笔记_0x02/index.html","e596e346c1635e2a40991635fb52f4af"],["x86汇编学习笔记_0x03/index.html","fed784cc6e1cd00c2e6f0912ce054da4"],["x86汇编学习笔记_0x04/index.html","2a10469cae24f12bb0d5b3509ad9438e"],["x86汇编学习笔记_0x05/index.html","1246ec0871b1fd8eee09285e3ec1bdac"],["x86汇编学习笔记_0x06/index.html","366713e0ea48c52dd35c90d5d152e042"],["x86汇编学习笔记_0x07/index.html","38521e13a80b91298372d59a8c775030"],["x86汇编学习笔记_0x08/index.html","7def43b15ca0eb1b628c8d952a23b4d9"],["x86汇编学习笔记_0x09/index.html","b0d3722b972e95e3a07b1382db19524f"],["x86汇编学习笔记_0x10/index.html","b05a7420b1221bd06ee75f6cf7ee032d"],["x86汇编学习笔记_0x11/index.html","182b56fd0f0eb78d18c47f5029ecb3b2"],["x86汇编学习笔记_0x12/index.html","f832cc6d876747e867cbb01bb2477276"],["x86汇编学习笔记_0x13/index.html","659bae566f75dfd25e77150c087fbc14"],["固件逆向01/index.html","0ee61b15b513c1eed723b30c155f7757"],["汇编指令集/index.html","e106a8f89e6337cfaa3bf2a9016270e5"],["硬件智能安全(0x01)/index.html","f7c4497db5e53b26067ffba554c3653b"],["硬件智能安全(0x02)/index.html","a3469e04adb9999d57dd753207c60d6d"],["硬件智能安全(0x03)/index.html","45f13bebc05ada3459cb449738ec3717"],["硬件智能安全(0x04)/index.html","fac024b434da8d234d3e247be4028e77"],["硬件智能安全(0x05)_/index.html","0b8a95b07413e5d1bb7b6d05cecd3e85"],["硬件智能安全(0x06)_/index.html","2dd3e4c522069ee126ae104c404ff1cd"],["硬件智能安全(0x07)_/index.html","4bedd7bf7e493c5f06771d0a9ddfb8c2"],["硬件智能安全导航/index.html","b5b6fbe114c88b51f265fb53bf9cf662"],["硬件电路构成01/index.html","036aa4e0f53ef06959cde0c3c25a4b54"],["逆向-基础-笔记_0x01/index.html","59487d165569d9fb599ca2fdf29f2f49"],["逆向-调试-笔记_0x01/index.html","5ba62c549bb5e302e18f96d95930136e"],["逆向-调试-笔记_0x02/index.html","0a5be71a1063f0bc8bcb57cb0f20d5d9"],["逆向-调试-笔记_0x03/index.html","5b919db871766c0f9018bf33fd674327"],["逆向-调试-笔记_0x04/index.html","4989f73a41f90fa024ffbd2e6412d3a6"]];
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








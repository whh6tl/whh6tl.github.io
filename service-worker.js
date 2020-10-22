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

var precacheConfig = [["404.html","a94b42321f5e3455f2def5aff62b1be4"],["AMQP协议0_1/index.html","efb95cfa15e979bbf71d0a8e568a6f61"],["ARM汇编01/index.html","c012b5a09f135e0ce85043d02043532c"],["Andoird反编译01/index.html","92fe059dc16db5c7ad2df5f3485694ed"],["BLE协议01/index.html","016a3b0775796e7519129d993904c215"],["CVE-2019-5418/index.html","ed931cf2d66ec9af84731cbf14b58dc3"],["CVE-2019-9766/index.html","3f7341aa38ac9409bbc1ce5fb886f006"],["CoAP协议01/index.html","75165c115de1cea0d48134bc6c64f890"],["JS_0X02/index.html","4b89e7c7e970595d990a1c3cb90fc878"],["JS_0X03/index.html","e2aeb3979d4fff2fde21e910f1aa3843"],["JS_0X04/index.html","4ff46d606c5f0203bb5234fe7216c9ea"],["JS_0X05/index.html","e2f551f7737a477e697db217c9760ad3"],["JS_0X06/index.html","ad8399f15e6d5f63b7f976722516b866"],["JS_0X07/index.html","4d3c11a261b7c4933d5e6e4ddee79833"],["JS_0X08/index.html","6cad83bc6d5dfd6a7195da535ef9330f"],["JS_0X09/index.html","0075abf704466a944647f13cdcf162b7"],["JS_0X10/index.html","ea14a1c07fb16adbed4b18ff8f4b129f"],["JS笔记(0X01)/index.html","be81e83d6b0a02eeaf1f37e51122a50a"],["JT808协议01/index.html","c5a4d06c253f05694ef789edf11bcaac"],["MQTT协议01/index.html","4c26779604b589807eae69946011ff83"],["NFC协议01/index.html","22e4297333f431eb2298bbdfe8a31017"],["RF协议01/index.html","c79f7e12f7c286379a021d4d00a07bfb"],["Wi-Fi协议01/index.html","f0dcba36043a499597eaa9dc873e832e"],["ZigBee协议01/index.html","7f6c98552ac97775fba95022253d302f"],["archives/2020/08/index.html","ed9b9c27961ea87c68c9053bcb5d5b32"],["archives/2020/09/index.html","590b0a497dc68bc0e64960540657fb2a"],["archives/2020/09/page/2/index.html","6bd1a9ff1610d33716132196ef0d3ca7"],["archives/2020/09/page/3/index.html","8bf25addd049618f5ae511ba1a950ba3"],["archives/2020/09/page/4/index.html","197efbd1a8a22f5c45f5ec5a7e56a333"],["archives/2020/10/index.html","999405a88f5c3e9b43345cc9f3b2c0dc"],["archives/2020/10/page/2/index.html","a4cf65d576ff35ec1ee100b263924be4"],["archives/2020/12/index.html","00cfb3aff8b5ddcf10d955d7483bb06b"],["archives/2020/index.html","15279f2ca01637696495b3321b86ec02"],["archives/2020/page/2/index.html","0e59e6364943f7d7c7bf59d408ee52f8"],["archives/2020/page/3/index.html","3a15358c985a926257d4e6a84abbcf2f"],["archives/2020/page/4/index.html","5ff3c9ca79967ae9dc56323456b95e97"],["archives/2020/page/5/index.html","e99f8a9ec22796b0a1dd598802e8903a"],["archives/2020/page/6/index.html","81d96d1b8880ad864f1e009303eba1e9"],["archives/index.html","cd339838b2449ddac862abc3d9b88c3b"],["archives/page/2/index.html","e298049b1e5f61abdbe4432e7a560021"],["archives/page/3/index.html","def69d2188e085b0fbdcdc5c04d693f4"],["archives/page/4/index.html","1abed4e3c829cfeb10453b187730b698"],["archives/page/5/index.html","46b71a2b17be7f74a925cd4f9bab2bf4"],["archives/page/6/index.html","df2ca9e28434226510071362ad336fcb"],["categories/ARM汇编/index.html","154de173af02f312d798a11b07fb6f42"],["categories/Android反编译/index.html","429080ae48f4c57b5b20498d3729f0dc"],["categories/CVE/index.html","64924524ddc4f7256b04b87e91654191"],["categories/JS学习笔记/index.html","e6b0de2c229ad99c77164a0648251b05"],["categories/index.html","d855801654f5db7a211818029142abec"],["categories/x86汇编/index.html","1d329bb7949157b9637fab2f32605336"],["categories/x86汇编/page/2/index.html","917b75a63ba53b6ce32caa646e7208df"],["categories/固件逆向/index.html","6bad7fa0b1bfdaeba826fdd675db05aa"],["categories/智能硬件安全/index.html","2f72e8dfbf8c67e04575c2866b300572"],["categories/硬件电路构成/index.html","70af5247d45d6b09a74936124ce55cb2"],["categories/网络通信协议/index.html","f6bbf20d8d2a6d916e971a255157f4bc"],["categories/逆向/index.html","79f1eade9d67982dcef18cb2bcf7e1df"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","833893108c84c0daaeec0ffbeb18e3c1"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","6d7b43e178231a699bb2c50d4e7ebb19"],["page/2/index.html","93d9c2edbb784a29876ed20fd1d3a4dc"],["page/3/index.html","a8ebb6dc1eff6eac038b35346c5c6b4d"],["page/4/index.html","b898305ee2d9dea1a312008b39143440"],["page/5/index.html","12c045d6799ac277e5757929f3370808"],["page/6/index.html","234b6ef09589f5f9f714cfbf733195fa"],["tags/AMQP协议/index.html","602b161f9f9d01c71a53b5be32fd2d56"],["tags/ARM汇编/index.html","2f079e369ee5e5bea59ea4b82e26ca87"],["tags/Android反编译/index.html","855fe0102e6ccd0c59c12b2608bcf24c"],["tags/BLE协议/index.html","e2a8b713224c4f38b2e810c974e043d1"],["tags/CoAP协议/index.html","0e4f83563f9cefb30cd968735f43945b"],["tags/JT808协议/index.html","62ba959728e774f0fefd6ca47850ec0c"],["tags/JavaScript/index.html","caf417f2b297c7e6de3f9ae44f18e975"],["tags/MQTT协议/index.html","88425cb8c2a7c46ea5398260d818ac78"],["tags/NFC协议/index.html","cbdf5329729d930b886e5778f47927ea"],["tags/RF协议/index.html","d644cd1ac659903e66189b1c770b37ec"],["tags/Wi-Fi协议/index.html","c89b55cf8a54206dd1c6396e5b22092c"],["tags/ZigBee协议/index.html","ccb52c41e15eff98eba836e595c2103f"],["tags/index.html","845135d7fd64c308478568f51e609074"],["tags/x86汇编/index.html","b8b7c69108a1c2906290b417cae496d7"],["tags/x86汇编/page/2/index.html","32f22f0a6ca9b7059d78de6a743f9439"],["tags/固件逆向/index.html","fa72b4967fb9b1bcc0e2b4298aaafbcf"],["tags/智能硬件安全/index.html","f2c80a28b264a65ddbfe955c13566c38"],["tags/漏洞复现/index.html","2ea3be37dd0be19aba03725bda377520"],["tags/硬件电路构成/index.html","1a461b125ed1315e836170ac0b7c1864"],["tags/逆向（基础）/index.html","5b306bf1a0aad95af9b068e2970ea0f0"],["tags/逆向（调试）/index.html","6c7143811096050aad77cffe706347a4"],["x86汇编学习笔记_0x01/index.html","c6c55883e7a3738daba708cb13b954bc"],["x86汇编学习笔记_0x02/index.html","e596e346c1635e2a40991635fb52f4af"],["x86汇编学习笔记_0x03/index.html","fed784cc6e1cd00c2e6f0912ce054da4"],["x86汇编学习笔记_0x04/index.html","2a10469cae24f12bb0d5b3509ad9438e"],["x86汇编学习笔记_0x05/index.html","1246ec0871b1fd8eee09285e3ec1bdac"],["x86汇编学习笔记_0x06/index.html","366713e0ea48c52dd35c90d5d152e042"],["x86汇编学习笔记_0x07/index.html","38521e13a80b91298372d59a8c775030"],["x86汇编学习笔记_0x08/index.html","7def43b15ca0eb1b628c8d952a23b4d9"],["x86汇编学习笔记_0x09/index.html","b0d3722b972e95e3a07b1382db19524f"],["x86汇编学习笔记_0x10/index.html","b05a7420b1221bd06ee75f6cf7ee032d"],["x86汇编学习笔记_0x11/index.html","182b56fd0f0eb78d18c47f5029ecb3b2"],["x86汇编学习笔记_0x12/index.html","f832cc6d876747e867cbb01bb2477276"],["x86汇编学习笔记_0x13/index.html","659bae566f75dfd25e77150c087fbc14"],["固件逆向01/index.html","0ee61b15b513c1eed723b30c155f7757"],["汇编指令集/index.html","e106a8f89e6337cfaa3bf2a9016270e5"],["硬件智能安全(0x01)/index.html","d04222e10a240096610e047519bb95c7"],["硬件智能安全(0x02)/index.html","a3469e04adb9999d57dd753207c60d6d"],["硬件智能安全(0x03)/index.html","45f13bebc05ada3459cb449738ec3717"],["硬件智能安全(0x04)/index.html","fac024b434da8d234d3e247be4028e77"],["硬件智能安全(0x05)_/index.html","0b8a95b07413e5d1bb7b6d05cecd3e85"],["硬件智能安全(0x06)_/index.html","2dd3e4c522069ee126ae104c404ff1cd"],["硬件智能安全(0x07)_/index.html","4bedd7bf7e493c5f06771d0a9ddfb8c2"],["硬件智能安全导航/index.html","2e6cdb66c8d613c57cceba4df851b5e7"],["硬件电路构成01/index.html","036aa4e0f53ef06959cde0c3c25a4b54"],["逆向-基础-笔记_0x01/index.html","59487d165569d9fb599ca2fdf29f2f49"],["逆向-调试-笔记_0x01/index.html","5ba62c549bb5e302e18f96d95930136e"],["逆向-调试-笔记_0x02/index.html","0a5be71a1063f0bc8bcb57cb0f20d5d9"],["逆向-调试-笔记_0x03/index.html","5b919db871766c0f9018bf33fd674327"],["逆向-调试-笔记_0x04/index.html","4989f73a41f90fa024ffbd2e6412d3a6"]];
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








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

var precacheConfig = [["404.html","eb83461bef2c87630608e1ae8ebf1639"],["AMQP协议0_1/index.html","1b6287825cb9e2adffec75446572ab3d"],["ARM汇编01/index.html","ae4dd308837750aab4664c818365de7f"],["ARM汇编02/index.html","301113026230d8bad2ee42fe5537d0a9"],["ARM汇编指令集/index.html","3e8bbb2750eb123bf6116d75e35d2fe4"],["Andoird反编译01/index.html","f39125be64d2437914f4eb46c9bf6b73"],["BLE协议01/index.html","0af9d8c5be0601bad881d71e4c0cc614"],["CVE-2019-5418/index.html","6982a73df6eef36d59db0199fc0f4667"],["CVE-2019-9766/index.html","7b7d0e21b7af72c754aa79ab6efdbf15"],["CoAP协议01/index.html","951a6cd228f5cf360701e4f298c34450"],["JS_0X02/index.html","50d85ec3897c3c7288038f84df471cf0"],["JS_0X03/index.html","9dece92b02596a24d04caebba7043fc5"],["JS_0X04/index.html","9570877a9a4981c1dd78cebdfc8df742"],["JS_0X05/index.html","2ae768669682a02bd3040a90af8ee5ec"],["JS_0X06/index.html","7f382e1d11309a2c3cd22e303f1ca855"],["JS_0X07/index.html","6ce69024d796f9c5fe69433b8a90692d"],["JS_0X08/index.html","1c231fafb66365a98883e56b262e270b"],["JS_0X09/index.html","6005ae5a7017eb152ccd0be34faa11e6"],["JS_0X10/index.html","f90944aad1fc59b8ef5c9a3827eae662"],["JS笔记(0X01)/index.html","54bf134f132f652e6009853fa83167ca"],["JT808协议01/index.html","6184b11df939a60822522ec5a3c09f75"],["MQTT协议01/index.html","41e88db47c4a873f357b88bf1cb2c979"],["NFC协议01/index.html","9ba4ef64408a8c23eeea46eb0be2c3a8"],["RF协议01/index.html","8d8de24f84f2d4f36633d941f27dc7c1"],["Wi-Fi协议01/index.html","aa92ab70752d23b9be82d3e9f25588fa"],["Wi-Fi协议02/index.html","9e1bb170fa9bf14a7b4b2e5c24937f45"],["Wi-Fi协议03/index.html","8609b09ec9db2bab0f9189b4b5815490"],["Wi-Fi协议04/index.html","f15610a097118b38cfc5b2cf479b1c19"],["Wi-Fi协议05/index.html","a6c089ae0363d189428320d63b1b3921"],["Wi-Fi协议06/index.html","07990a09ac94db75b0d7a4e1116fce38"],["Wi-Fi协议07/index.html","e48b3fa5dac6d10745b98f20a96427ac"],["Wi-Fi协议08/index.html","b4b2262ab3b68764e2d7b43c3c043fa3"],["Wi-Fi协议09/index.html","dca770f61b19a73a88b3bc3bf3a2c9cb"],["Wi-Fi协议11/index.html","6cf83ca8717feb30d43506ee00949768"],["ZigBee协议01/index.html","53ad293935bb4a7d1216a57cb47b38c2"],["archives/2020/08/index.html","3f0253c77c8403db1bd1147e1dbbba8d"],["archives/2020/09/index.html","cd4177ff21afe4e991f19379bf21e46d"],["archives/2020/09/page/2/index.html","b89867e957495503b8da1dd10dd8273f"],["archives/2020/09/page/3/index.html","e61bb662f6bcd071ec27e276b291cb47"],["archives/2020/10/index.html","e8a4748b25c6e933395880b02d964664"],["archives/2020/10/page/2/index.html","29c871cf463fd0bed67824fcd0f31c84"],["archives/2020/11/index.html","c6cf8682c190f4228cff902823292853"],["archives/2020/12/index.html","058256f49a9486d2fe1bf8b2ece13f7c"],["archives/2020/index.html","0912662872ef297fb8819bfb31cc201a"],["archives/2020/page/2/index.html","42db9387bf4d2789a7cc12560f98f27d"],["archives/2020/page/3/index.html","db10fb0087ea196d234638ed5afa8f7f"],["archives/2020/page/4/index.html","fc9b7a3f768e3ea32686045d4bfec827"],["archives/2020/page/5/index.html","93ea049eaa81b13b056206ea36f6bb7c"],["archives/2020/page/6/index.html","bfb38c1c0a0247c14ff137325cb48422"],["archives/2020/page/7/index.html","db239f2c52ba04fe40819b6b5d713295"],["archives/index.html","5e8be06774eb1168324594a090deb18c"],["archives/page/2/index.html","4a7109b4f1387b105952d5c6ecb3411e"],["archives/page/3/index.html","ccaea48d059d798716ddbc5dd193a8aa"],["archives/page/4/index.html","15abc79d4ab7cccc8fbbe3d1b58ce1be"],["archives/page/5/index.html","733154f5840cd82f695344918c424899"],["archives/page/6/index.html","338476806e45d801967207576b8bea6f"],["archives/page/7/index.html","4c33a7f5cbe35323a57dc43558341f0c"],["categories/ARM汇编/index.html","a875c3ade8ec7256787ad382e86d1a24"],["categories/Android反编译/index.html","4c50a929c8081ed5ea79a35863764b71"],["categories/CVE/index.html","4fe85e11c83b212bcaaa84435793968d"],["categories/JS学习笔记/index.html","3620b4d580fe7fe52e7347933c412050"],["categories/index.html","a5522f6e523cfaad52dd0dd8010385b3"],["categories/x86汇编/index.html","751637d51153d2758b75fba52b1bda39"],["categories/x86汇编/page/2/index.html","f393b168f25ba7a2a4eb81b16066c4db"],["categories/固件逆向/index.html","b6119770f8ed889f7a4ecf88b36d5676"],["categories/智能硬件安全/index.html","00dd59eeafc0546ee6ea7b5bd66ce3d6"],["categories/硬件电路构成/index.html","0ee7c31321637abc07fc3b1578540458"],["categories/网络通信协议/index.html","98db75ef11604efc3a1ce3b7dc699767"],["categories/网络通信协议/page/2/index.html","0a9eee933d5dcde21707dfe933c5edb5"],["categories/逆向/index.html","8610576f48e8c62abf4e5e9f543395df"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","c5788d9b94e4b1bdedf26baf62bbf5cb"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","1ed046208e4f862587496110b7324ac8"],["page/2/index.html","57424e4d34d9bedd9262782d814f82ed"],["page/3/index.html","8b3af501bae0d473d2f6f78808af1e37"],["page/4/index.html","412b7987b2e16cdb0be79f58ade14527"],["page/5/index.html","ce6942890c7fa9ba72a3e1f9dc1e6af1"],["page/6/index.html","5924346e23696167b7dc4d860a418c3a"],["page/7/index.html","6fdea3fd79220d5273ff1afe5bce5492"],["tags/AMQP协议-暂无/index.html","44dbe846981e9cf56b0ac70813c97f23"],["tags/ARM汇编/index.html","8297f011b8a61c6f5478f3bde5785c88"],["tags/Android反编译/index.html","6b63a9512c11884cab2bfc0a5094b011"],["tags/BLE协议/index.html","85b5467316a9921a482ab98fbaea600e"],["tags/CoAP协议/index.html","e26ef8e6453b920fc60974d59a9481b5"],["tags/JT808协议/index.html","d7347b8a43443e76ef39934a01a7cff2"],["tags/JavaScript/index.html","fd1565b59f82a73b8b841dbf09c8371b"],["tags/MQTT协议/index.html","03f466c50812605b13c99413993c28a4"],["tags/NFC协议/index.html","9a752b50d709e9ccb0a0801ba23d4ab6"],["tags/RF协议/index.html","9fa9cf611b94a3bdabbf2d356d23d27e"],["tags/Wi-Fi协议/index.html","56f99a8474f5858c9d12638650a7a0c7"],["tags/ZigBee协议/index.html","3a74eda65666c4228ea5b75b1d266765"],["tags/index.html","632ccffaf52330fa8a2b2c58315b2ba8"],["tags/x86汇编/index.html","496ac67d4ca5a7e7e0a67f7df28bd602"],["tags/x86汇编/page/2/index.html","490e23058f347d6c78264c57b43e6780"],["tags/固件逆向/index.html","2f1d1d7a8a50913df5d7aaffdcfc1fb2"],["tags/智能硬件安全/index.html","82379715a834c23996e4476ab2c5f8fb"],["tags/漏洞复现/index.html","7e1d1708bc765b087ab57b016929aa23"],["tags/硬件电路构成/index.html","7a91add102f30bc334bbb72783d1078a"],["tags/逆向（基础）/index.html","dc1c7b472fcb35920c40235f6894b417"],["tags/逆向（调试）/index.html","ec6fd0f9596019b3a4b757e9a42805c0"],["x86汇编学习笔记_0x01/index.html","3d3a6bb9c725ef75c15ef547f1c6a49a"],["x86汇编学习笔记_0x02/index.html","2dc26ece69fe1a5aaa58a2040f22e723"],["x86汇编学习笔记_0x03/index.html","c43b66da86f42cdd3deb3c4916208ed1"],["x86汇编学习笔记_0x04/index.html","e83de664bebe4c606a2f9298b81efe67"],["x86汇编学习笔记_0x05/index.html","70348a4414955ebc9ad92b894bfc7bff"],["x86汇编学习笔记_0x06/index.html","588bcef568a34a91cdaf156e98ab48f8"],["x86汇编学习笔记_0x07/index.html","6a92f41106871f10bdc0190aba1f0f8f"],["x86汇编学习笔记_0x08/index.html","a17dded424cc8ec5c8e0447ec9bac37c"],["x86汇编学习笔记_0x09/index.html","fe4c414fd19b6cb44bfdd226e7ea937f"],["x86汇编学习笔记_0x10/index.html","b07b6e9f2b70d23de8ace1b25d02ba54"],["x86汇编学习笔记_0x11/index.html","2c5e9ab05fe38981e019166659649263"],["x86汇编学习笔记_0x12/index.html","8e37f2201aaee4c3bc65671274462c30"],["x86汇编学习笔记_0x13/index.html","9b304e05ccbed7f08ccf98c1909e3aa1"],["固件逆向01/index.html","17ef52a42778438fd10f08723e44ba30"],["汇编指令集/index.html","5221a2060b8dac0f14469bb6f91f0a37"],["硬件智能安全(0x01)/index.html","cfa701a6d630d9f6a5fdd155ab8efd8f"],["硬件智能安全(0x02)/index.html","7cbd48383aa7ffa27036ee34d8a94845"],["硬件智能安全(0x03)/index.html","8ee8d3172afc04d6c7aeb96975564328"],["硬件智能安全(0x04)/index.html","4ab35f7e20187d990047738d05c6b629"],["硬件智能安全(0x05)_/index.html","d414338fd0b67a48078590041efba5e2"],["硬件智能安全(0x06)_/index.html","d5f20528acceff4f6a573d3b2da4221e"],["硬件智能安全(0x07)_/index.html","2803cf2c68b1b3a630c88a6c1fe67a07"],["硬件智能安全导航/index.html","93fe474bd9a6f3b6dc69574977f55c69"],["硬件电路构成01/index.html","5bd0cb088aab4eadaf7410dac9058b6d"],["逆向-基础-笔记_0x01/index.html","74608150457474277d6004ac1380ff7c"],["逆向-调试-笔记_0x01/index.html","066154033c26b53946fa4d3e2dc45f22"],["逆向-调试-笔记_0x02/index.html","0eb21ed1d448995b699890dacf437efd"],["逆向-调试-笔记_0x03/index.html","97877f30af78022470c94038806a26b4"],["逆向-调试-笔记_0x04/index.html","5e621baa73fc914fc5cf15fbd25900ee"]];
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








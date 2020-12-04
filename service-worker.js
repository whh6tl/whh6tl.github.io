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

var precacheConfig = [["404.html","9672a26b0c79b7bf3ef37fcfc257a226"],["AMQP协议0_1/index.html","912a95e96eba03889ce42f0793c54fff"],["ARM汇编01/index.html","834fcfead7094a59cec25f0daaf6d98c"],["ARM汇编02/index.html","257210d84770f40cb1d8709c3b732782"],["ARM汇编指令集/index.html","17a5f5eb0a728114e96b005b9a5b10f6"],["Andoird反编译01/index.html","71dde31a96d381236d3b630dae4ebb6a"],["BLE协议01/index.html","d1d0b6dae7cca563ac756ba84925877e"],["BLE协议02/index.html","9fc1855534dd0cb0120a1f2444a8c80e"],["CVE-2019-5418/index.html","15c0cb43a0478ae9bbd986f37dd6f752"],["CVE-2019-9766/index.html","b8a4bd10f687cfed5d92031393da0315"],["CoAP协议01/index.html","52179ee1c9fd106377de2f9961c1ea56"],["JS_0X02/index.html","4c55433cd35918388c4c4ecb9ff74794"],["JS_0X03/index.html","729d507e100eace2f9c7b71eb1cf22cd"],["JS_0X04/index.html","de6f9f79d85702039531de247aefd6e6"],["JS_0X05/index.html","d0d2aadc988f3b6a94cf8fb2ba4d6c71"],["JS_0X06/index.html","f9ba0bbb3829dea9efc2795a23bf453d"],["JS_0X07/index.html","44ab46fe2cdbf7e6434c99bf309db0eb"],["JS_0X08/index.html","070b5f4e301008916564bfb8eb546358"],["JS_0X09/index.html","617a7c79bfd2021bcca0a11bd2f4487a"],["JS_0X10/index.html","c6240cc405e887999c07dbf58070ec39"],["JS笔记(0X01)/index.html","1ae806082e3fa790b84f15953ebb09db"],["JT808协议01/index.html","9ca80aec3fed647409003f8c23dbcac5"],["MQTT协议01/index.html","e43e8a668a90edffa37c90655374502e"],["NFC协议01/index.html","f11fa7a08fe776e69a382494455fc496"],["RF协议01/index.html","8ae75c4dd944e88cca5f97cae6db583a"],["RF协议02/index.html","7d12ba556850dbc5ac11510511268951"],["RF协议03/index.html","a9c3c2baf3875a8f6fb07439c92578b0"],["Wi-Fi协议01/index.html","4e25d7b4cf4769b03c9994541250ab1c"],["Wi-Fi协议02/index.html","704c1fa46cae2a060a9a8ccae50b577a"],["Wi-Fi协议03/index.html","2aa3510817492742d210e6bcb1cb9c5c"],["Wi-Fi协议04/index.html","1c5dd23f403eb22276924dc61f6f9680"],["Wi-Fi协议05/index.html","9e696e2be7e38455c48354d03c6120a8"],["Wi-Fi协议06/index.html","3e2a1686e5d55470df2c748993f01891"],["Wi-Fi协议07/index.html","32c2481f45628c6bd3373e4836a522ea"],["Wi-Fi协议08/index.html","5bec57da790580d25391ebe4fa275f2b"],["Wi-Fi协议09/index.html","56b369b0fce38135c960b275f0038cba"],["Wi-Fi协议10/index.html","5d7704ea24a5e5f6dab5add25b51a8bd"],["Wi-Fi协议11/index.html","47111ecdd23c856f09405514d50be5ef"],["ZigBee协议01/index.html","814461e07ad0b1f5f5824350424d63e3"],["archives/2020/08/index.html","2fbdbc22f5307749584b55444836fb19"],["archives/2020/09/index.html","a71b28b52e206041a0a7f7ce0b35becb"],["archives/2020/09/page/2/index.html","ad8f2e43a71c6a79b24c3a61f5ae0f2c"],["archives/2020/09/page/3/index.html","01b0c66600d95206814434445c4eb1e3"],["archives/2020/10/index.html","cbf67f3ea29e7be70275ab875b11de1c"],["archives/2020/10/page/2/index.html","e8e8c3d18e0c5a649cd434939dd3fdd1"],["archives/2020/11/index.html","e89e73703a0ae06af126ca3bf5baad35"],["archives/2020/11/page/2/index.html","3908b1001b17ed667a57c81a03184215"],["archives/2020/12/index.html","83895f064dfa23d12642cd0e034be092"],["archives/2020/index.html","5a1b8d55029784ac6e76c8276c25d0a7"],["archives/2020/page/2/index.html","fe957ef1d78fe8288a47869fed88c41a"],["archives/2020/page/3/index.html","fca4e9d0a251b6f7d49fdb63879f431f"],["archives/2020/page/4/index.html","816cb29f35f8b974cc9120345b5bb15c"],["archives/2020/page/5/index.html","e942dcbef17986dafcaae3033fbd4012"],["archives/2020/page/6/index.html","b2f09374c24c0938d7945be735b8c50d"],["archives/2020/page/7/index.html","ac8bc76fb886d43dfbd040b582f41a9d"],["archives/index.html","f044b683205212df99e17c4acd43d37d"],["archives/page/2/index.html","f79ef28f29c1cd8d27355bcfa77487d1"],["archives/page/3/index.html","f1e6a65492b54837b11293d4d88c8887"],["archives/page/4/index.html","3bda0cd97bf1121ba535b1d92950061b"],["archives/page/5/index.html","dfa9b3ed64137b8be717a2fe8630e007"],["archives/page/6/index.html","18dd6c6be3ae8ba8fa463e2e495f3a2d"],["archives/page/7/index.html","6afc3af1c36ac2c164381359a28de133"],["categories/ARM汇编/index.html","8c25f0a5dffa7a2045e0f2d146aa4037"],["categories/Android反编译/index.html","420713339af3ba3fa06b43c100e3a563"],["categories/CVE/index.html","ebc5e36b7e2043cc6aecd5ca96c82c14"],["categories/JS学习笔记/index.html","6a62879b0e6ac32fc616857c808361ce"],["categories/index.html","aaa798473ece2d4f7341510e543627fc"],["categories/x86汇编/index.html","344afa9ccf551a917c83648360dc5374"],["categories/x86汇编/page/2/index.html","dfd8b7c9611ac2d2b71e45588a58648f"],["categories/固件逆向/index.html","8de506cc067b640032dc3ac1c76f8870"],["categories/智能硬件安全/index.html","ea413606bd72688b8a4c32b206cfa899"],["categories/硬件电路构成/index.html","0915ffc86b93cc287482cc6b938a9a99"],["categories/网络通信协议/index.html","c4f7045afdcd1fafa95b25a10588d41e"],["categories/网络通信协议/page/2/index.html","b4878c87426696ad861ebeed96cc076b"],["categories/网络通信协议/page/3/index.html","409f9e952b69841e6db992ec4fb15da3"],["categories/逆向/index.html","f6c6ace8bd1e41428c1da77c79297009"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","add5e46082c7590adae5202a51a7e6e3"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","5bd7e7b95bea7011a1139a868a1c2a8e"],["page/2/index.html","0f7c19f97db08ce1e9a8cabca8fc77f3"],["page/3/index.html","b287e0f3d1df94e8e56e3ab3f3707f1a"],["page/4/index.html","c8e782b8761882701b1b84242967018b"],["page/5/index.html","fd0572a7cbcdc4da2d850c9562128475"],["page/6/index.html","35e84c0234be06dd8b9d8f02c3f5cc67"],["page/7/index.html","7c60ab098f237eec1ede6808f458ff36"],["tags/AMQP协议-暂无/index.html","0aa8510331a437e3048623d3aa5e808c"],["tags/ARM汇编/index.html","d208c37b32ce1766048162aeb1bd446c"],["tags/Android反编译/index.html","a714c4e788fa4d3e0197579494e11a12"],["tags/BLE协议/index.html","97d3b162b33e486f18a4e4010035c6a1"],["tags/CoAP协议/index.html","0a64b0cd919d5b7863401b765d69f7b5"],["tags/JT808协议/index.html","c617eb8628897edd166838bc8fee66bf"],["tags/JavaScript/index.html","5354de7061f4a438d98dc94b2fa70d35"],["tags/MQTT协议/index.html","311a14c3cc420adbfbcd02d1c6e18f51"],["tags/NFC协议/index.html","d78101fb22e0428fdd65934eb78dd76c"],["tags/RF协议/index.html","e1be0ce8a8d6fab592f029a288239fb3"],["tags/Wi-Fi协议/index.html","0bc344ea89cf83e557ebe7869c4f1233"],["tags/Wi-Fi协议/page/2/index.html","64622af2a93c3612e1d5ffd4def7dcfa"],["tags/ZigBee协议/index.html","63d3865eff0da94b1d6167f4358b8b73"],["tags/index.html","ebe07d9a9b8591149786e22c27db3c4a"],["tags/x86汇编/index.html","c2cd4f30dfd7193aa8d78429443f9e06"],["tags/x86汇编/page/2/index.html","fda362cb8a0931e9a7413eaaec38735b"],["tags/固件逆向/index.html","97115912889bb76ae81278e7db0869bc"],["tags/智能硬件安全/index.html","8b3c6651d0f23a956398abf8bbebb759"],["tags/漏洞复现/index.html","81b39311e3cdc2442b20b067db3404c1"],["tags/硬件电路构成/index.html","91a98a7b10ff1fb4e90a376bdaa471f9"],["tags/逆向（基础）/index.html","c0630e9d6a3bb2c90da1f3540888cc2a"],["tags/逆向（调试）/index.html","273fcefa51e98fb279d75a746f1c175c"],["x86汇编学习笔记_0x01/index.html","b762d335eada5f9714b5eecf4c5af60a"],["x86汇编学习笔记_0x02/index.html","99e8584ab9433af3c55db1ad172445e6"],["x86汇编学习笔记_0x03/index.html","54d4258f235bbb179e92c2d493af1027"],["x86汇编学习笔记_0x04/index.html","6023b5e3e70f192f6af6ff522a40894a"],["x86汇编学习笔记_0x05/index.html","17dbd6858949f22607c28edecb8e76af"],["x86汇编学习笔记_0x06/index.html","31da170ecf6e97a2555083beee99eb67"],["x86汇编学习笔记_0x07/index.html","1e261b43b2ab86cb266b51778f224639"],["x86汇编学习笔记_0x08/index.html","c25926152923800651ea2a48f6729e1d"],["x86汇编学习笔记_0x09/index.html","3878567c8001b937ad29d0eb8d741526"],["x86汇编学习笔记_0x10/index.html","ab70b8e86aef6c7ffea72bbdf28486ce"],["x86汇编学习笔记_0x11/index.html","01e963ccaee9ad65ade90160849b4a2e"],["x86汇编学习笔记_0x12/index.html","1c4ef19e71ba0e0ec17e36cc626f66e2"],["x86汇编学习笔记_0x13/index.html","b89d6bb2470fe2b0122efae3d6f7f9db"],["固件逆向01/index.html","91416714f4f218de562dc692134163dc"],["汇编指令集/index.html","aee93f656b2b311b3d7aa264503df154"],["硬件智能安全(0x01)/index.html","2de3f08266c639e58e7c7fa57c724225"],["硬件智能安全(0x02)/index.html","2e919771d382394e412d21a56a6d144b"],["硬件智能安全(0x03)/index.html","4498a1588ca37315435b4e28d1630731"],["硬件智能安全(0x04)/index.html","0f6ab9d8f0894e78a8662d26cdb5667c"],["硬件智能安全(0x05)_/index.html","0d87e52dec715a0a86a2cb40ad0b3edc"],["硬件智能安全(0x06)_/index.html","980a88b6bc82c28386b3271ffbde6a22"],["硬件智能安全(0x07)_/index.html","049568a79aa1b33d243bcf446675bdf6"],["硬件智能安全导航/index.html","253d17b171604b214ab4b0387e4be3b8"],["硬件电路构成01/index.html","d79f2f3a9a1db2e6bc9c0ee9f82cbc3b"],["逆向-基础-笔记_0x01/index.html","bc1e40bf827900e0790a821291e23839"],["逆向-调试-笔记_0x01/index.html","2a5a315597b2ed1efa76ccc09b2afb2b"],["逆向-调试-笔记_0x02/index.html","fe516ef3df7298de9e823d0d075b9048"],["逆向-调试-笔记_0x03/index.html","561bee68b58e0f2cd6a4db6ac46e236e"],["逆向-调试-笔记_0x04/index.html","2f381134cc5d86ffd8387e2bfdd402d4"]];
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








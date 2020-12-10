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

var precacheConfig = [["404.html","cbefa5a85859b768095092b90f789152"],["AMQP协议0_1/index.html","646b91b5ae92b85b9f60f42c57e1347b"],["ARM汇编01/index.html","ff64c97b0ac6032f9daf9e68647d62e6"],["ARM汇编02/index.html","c1fd93e58c9d68b92ea21478542ba326"],["ARM汇编指令集/index.html","fde6e79bf73f18401eff673389c6fa2b"],["Andoird反编译01/index.html","5774ea8750e5a4a7154cdfcc6e328abd"],["BLE协议01/index.html","6aae9c4e652769845df653c19a15b231"],["BLE协议02/index.html","8e4b5eaa53371b4ea8b86e0a0e340d2c"],["CVE-2019-5418/index.html","f8d96d8ce012b88fef679c0d7b9f8812"],["CVE-2019-9766/index.html","1e1279ccfe0fc7670ef5e2bfb738c79b"],["CoAP协议01/index.html","f34bc8ace0c8ffb7fe8d31000a5a7e66"],["JS_0X02/index.html","e28af4399abfeda4e9cb735166374205"],["JS_0X03/index.html","2bfa72f929db32842c718ced3e05f22e"],["JS_0X04/index.html","4f7a40f82b6e54a70edc36f5c4e8d87e"],["JS_0X05/index.html","26b332b7ac8e977bc0adf45c97c7201b"],["JS_0X06/index.html","dca868cbbaa7bbcb42945ba6df196c53"],["JS_0X07/index.html","e74f0c1aeec520fe1386cb9f20e25c12"],["JS_0X08/index.html","9ea700f21f8d813e3d704ebf114c8264"],["JS_0X09/index.html","64a73d11861d1b0243546d66125d0c90"],["JS_0X10/index.html","eaaba45f10dc32ded2bd37b8a2b44f93"],["JS笔记(0X01)/index.html","2c4bc24a822668cc5af17454b864dd9e"],["JT808协议01/index.html","eae484c14050672d496f3bd9bc600516"],["MQTT协议01/index.html","df78a77f209c17301dbd9c18e805550d"],["NFC协议01/index.html","e6a5ae50953e9f56334fbc657d31e803"],["RF协议01/index.html","33e2e4724054cc37f52a1ce993571f96"],["RF协议02/index.html","cbd3a61f15330e1cbee4bc4ac84dfe66"],["RF协议03/index.html","59121b620e90c4beb27156a21bca3f8b"],["Wi-Fi协议01/index.html","a360facf5af7b7cb5fc89201f23f2d22"],["Wi-Fi协议02/index.html","87dd3548a7da12b9cd6cb75573ed4f3a"],["Wi-Fi协议03/index.html","9ff37188b141af8ce683820b4c235269"],["Wi-Fi协议04/index.html","4618209bdefc64434af8a0f454f585cf"],["Wi-Fi协议05/index.html","0938cef7860636edb27a99a9688afcdf"],["Wi-Fi协议06/index.html","20bd36c03c31b8d929e7d7b63c7d106c"],["Wi-Fi协议07/index.html","0a5083093ff06f27aadc16f880e00735"],["Wi-Fi协议08/index.html","675a698dfb994ec6bfa83a6f4f9aa385"],["Wi-Fi协议09/index.html","8c42cbc846ee6363232dd1d7b6bc5a8c"],["Wi-Fi协议10/index.html","8d9ca2dd54479e4a8c86acaeaccbd315"],["Wi-Fi协议11/index.html","d6ba5427ffc153c8052ccd8a5d467027"],["ZigBee协议01/index.html","816efbc925a71f0b4771654d84f5ffee"],["ZigBee协议02/index.html","eff12c036e68991c1bbb48b062830886"],["archives/2020/08/index.html","49245b0745a2c61bd811dddf9fdfe108"],["archives/2020/09/index.html","ecc4e2399d588abd3f3a1e0be8e5f889"],["archives/2020/09/page/2/index.html","43d10f9715364c16be56ae64a08ce01a"],["archives/2020/09/page/3/index.html","90ac1e579b495353fdd337ece69cf269"],["archives/2020/10/index.html","6b48dd93ea69b390d80e0a8d2d4eae53"],["archives/2020/10/page/2/index.html","a85e363dff3179c2004e1e914c068e02"],["archives/2020/11/index.html","1434b3c29ae6c4bbb49bd5165bc4c3d7"],["archives/2020/11/page/2/index.html","731c3d4fbef32f680d13f03fd9b4abae"],["archives/2020/12/index.html","6dbe1a1e4751eafb16afb1f5e6706024"],["archives/2020/index.html","16c2268c27e4923eaa0384d7b7dd9917"],["archives/2020/page/2/index.html","a4e76edbc1cd3baeec6ca37f41b9a93f"],["archives/2020/page/3/index.html","3b5d3f362ac24ffec80c0b193a35af3c"],["archives/2020/page/4/index.html","00d4e990dbde9a75f5cf13b8d5d5085c"],["archives/2020/page/5/index.html","761cebcc0afa248206ce3cae4170ef54"],["archives/2020/page/6/index.html","a0b67db49608c210789330a2f12579ae"],["archives/2020/page/7/index.html","db8dbf22f35131d2220f9dee8585a1a0"],["archives/index.html","45fb056b23ea0767965ed10cc9e9627a"],["archives/page/2/index.html","d16c634388cda2befc51df08002894de"],["archives/page/3/index.html","38b4e0e90953abf5f7e7c7d6ac3dd676"],["archives/page/4/index.html","e7a4f6eeaf2601f422bad11c893ec492"],["archives/page/5/index.html","6b9eb44bfd96c76a45e7e31ff76f0767"],["archives/page/6/index.html","fceca9353add86cf10a30d02e2798eda"],["archives/page/7/index.html","12bc3035166f3618d895c3f4a3a09ce4"],["categories/ARM汇编/index.html","b37e54e7f25b4315c9e947f4551ddd20"],["categories/Android反编译/index.html","91780ed4386c20abb39a15c55a458f1a"],["categories/CVE/index.html","a5fc4518e7f6c9a6e26f833b433d138d"],["categories/JS学习笔记/index.html","57317d68edc66d4362e86eae4830b925"],["categories/index.html","5069020badca8d07ad8c93b0e6f329d2"],["categories/x86汇编/index.html","9b7e596c5b566058771ef94800b9160d"],["categories/x86汇编/page/2/index.html","f21a64eb981f4e1875aed57b6e769ee9"],["categories/固件逆向/index.html","bc88bb2cd7f1e8e4bd5dc0b70db99e5d"],["categories/智能硬件安全/index.html","2ef91fad6c89af77df22e9ff74b5b916"],["categories/硬件电路构成/index.html","62f52dcdde96c7900b2412086fc4085b"],["categories/网络通信协议/index.html","fa111b50e309a9fe1bfdc0d62cf24f47"],["categories/网络通信协议/page/2/index.html","84dbf6b2f2c9747ca9b0b00c10a20be6"],["categories/网络通信协议/page/3/index.html","bb4a30f9d371f18b29dbab470e2ab5c7"],["categories/逆向/index.html","a4dbd7d9d7ec003b9e029b288bf56548"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","aa14c3e7af80efbdd3b9b04f69520a79"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","1c8b056bfea3156f7b38cd6832b944b4"],["page/2/index.html","743c66dead3f0ee3bf534b5a18b66737"],["page/3/index.html","6581dfd0a34fd0db10807deac68454d7"],["page/4/index.html","758571e0e8ac90034d9248545de3c2bf"],["page/5/index.html","dd349ca2e4b02be57fa6bfbcb42a866d"],["page/6/index.html","07a46c37df224d94dda1c2999388afe3"],["page/7/index.html","faa6132c149bb8f2d031859552cb78c7"],["tags/AMQP协议-暂无/index.html","455923f898db38e11f757d785f89346b"],["tags/ARM汇编/index.html","2c3973a67b5e272e7a33b7aaeeb5b83d"],["tags/Android反编译/index.html","aa91a95203b6e751fffa65557d449246"],["tags/BLE协议/index.html","fff24fe6d80236205dd51bd02f5859ec"],["tags/CoAP协议/index.html","1bbaa4866fa9c4e72e36d98d74ff9d77"],["tags/JT808协议/index.html","755d4db6ed708b3c89fec2ddcb545eed"],["tags/JavaScript/index.html","8bbb987f8a3b3cde8a0636e5c884e322"],["tags/MQTT协议/index.html","1eb239fcc929b7f8aae77094a8dff3a7"],["tags/NFC协议/index.html","80bac223616c2fe5aeb8160b82d4abf1"],["tags/RF协议/index.html","ffbdafba6f19349d2a60e7fdb2dcc1d1"],["tags/Wi-Fi协议/index.html","097a0b8169e54ebb29adad6046b585ab"],["tags/Wi-Fi协议/page/2/index.html","50333f1a5b02eb2b2256019f3c3937df"],["tags/ZigBee协议/index.html","05d973c52dae00bb3e99564d3a7d77be"],["tags/index.html","14de70a7f1161e9c5b5b4ae01b1a3cf4"],["tags/x86汇编/index.html","783d1c8f0b0f7efc936c2847c1a643ee"],["tags/x86汇编/page/2/index.html","84e837f6ded6fd678a6f5b655250322d"],["tags/固件逆向/index.html","a8b0ee1e63d9f2eda9b78bc12d4aff59"],["tags/智能硬件安全/index.html","a82943ca5481b520beb67cfcd8df1146"],["tags/漏洞复现/index.html","4a4b48d3590dca48ec455ceeb4e28b04"],["tags/硬件电路构成/index.html","aaa355278c99367bd5c7657f14459401"],["tags/逆向（基础）/index.html","2196ab98b7274d53c64aea4fd16a6f31"],["tags/逆向（调试）/index.html","d345133970716c35d93c667bd49b1d16"],["x86汇编学习笔记_0x01/index.html","0d6d864a024f8111a422d61bb54e6e1f"],["x86汇编学习笔记_0x02/index.html","4609ba63193d3b273da3c945a2f95872"],["x86汇编学习笔记_0x03/index.html","88fce57fa9fda33f7b1f35ee677ba959"],["x86汇编学习笔记_0x04/index.html","d5355d2e2847eb6512205d1302e613e7"],["x86汇编学习笔记_0x05/index.html","c9d5f444764ed51135cc153c9ce2360d"],["x86汇编学习笔记_0x06/index.html","0580a6b1d62b09ce596074f36a6d43f3"],["x86汇编学习笔记_0x07/index.html","1492fba2a15160341f44064ed861454d"],["x86汇编学习笔记_0x08/index.html","19805d77d700a13233e3ddb54cc4d7a8"],["x86汇编学习笔记_0x09/index.html","75e10e9586ea4fbdb8cc7c502f525441"],["x86汇编学习笔记_0x10/index.html","c5b82b30ab806afac4cb5a4a485e374a"],["x86汇编学习笔记_0x11/index.html","10fc3ae3d017220171181f4136dfbcc3"],["x86汇编学习笔记_0x12/index.html","dcd34cc4f1a05f3bda7f0a05806eba6f"],["x86汇编学习笔记_0x13/index.html","0ab12add6aedc2f752d8646e5f9d22de"],["固件逆向01/index.html","6f9730e1d883cd5ff9bcf08fd0a1d156"],["汇编指令集/index.html","42b2dcf4dd4a0f7b59a16a648e3a08b2"],["硬件智能安全(0x01)/index.html","ac35a8e09d28b382739b508c1134c57e"],["硬件智能安全(0x02)/index.html","eaf0d69b92ae640a84622a668a14f938"],["硬件智能安全(0x03)/index.html","3cbed1a66fcac701beee5266f34225c9"],["硬件智能安全(0x04)/index.html","55d4c3f4ee7d45917a3c93a35ef469d5"],["硬件智能安全(0x05)_/index.html","0c8181921c55b6b0bfb1e53d36ecec72"],["硬件智能安全(0x06)_/index.html","59b22da5bcf223dcb28b3161c7f5ecb7"],["硬件智能安全(0x07)_/index.html","03873cc5f771728d13d16495518b3206"],["硬件智能安全导航/index.html","e846eadb85edc4b3c599d36fc6ecc4be"],["硬件电路构成01/index.html","5014fd3adeea12fd28e90cfcd285e580"],["逆向-基础-笔记_0x01/index.html","22612421be9048c3edbf2eaa42d02023"],["逆向-调试-笔记_0x01/index.html","018817148800f108996abcefcd916cb4"],["逆向-调试-笔记_0x02/index.html","528698caff8dcb707d0f40ecf8155e5c"],["逆向-调试-笔记_0x03/index.html","a05a31f44cccff2f4558f0d83650e204"],["逆向-调试-笔记_0x04/index.html","2c53ad120a20b9037ffd85f79a79c441"]];
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








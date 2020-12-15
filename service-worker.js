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

var precacheConfig = [["404.html","183d558325cce2487650f6703276b915"],["AMQP协议0_1/index.html","9625141e3c4f550b72bd470a3429a6fc"],["ARM汇编01/index.html","07c46aa36708c5c68660dd0cfdbe7731"],["ARM汇编02/index.html","baa2ae14e91fddacf1a90d441806ebfb"],["ARM汇编指令集/index.html","307783bb673ac452afef36e94328c858"],["Andoird反编译01/index.html","f8aa1d41ff5c6fdff4c997bd10ab7142"],["BLE协议01/index.html","e693e207286388e156664a0c8940ca86"],["BLE协议02/index.html","9422dd143e0048b1e2f9b97aa97b153b"],["CVE-2019-5418/index.html","c13940eca860b85c112e7a85501c3057"],["CVE-2019-9766/index.html","f128b7ace06c1bb77e96db57675fab8c"],["CoAP协议01/index.html","b9484b4874e858823f30e088a39481af"],["JS_0X02/index.html","b205cb0943a007b66d82d51bc97db6a0"],["JS_0X03/index.html","ae1e4e01e7ac96cc587a6c7fbe532872"],["JS_0X04/index.html","14a8ee21f7b0a62e47b63767420919e3"],["JS_0X05/index.html","27a206bfbbd33d5565d4fb2939a78003"],["JS_0X06/index.html","6cfb528e2c7b2e0f518d519a3853e7ca"],["JS_0X07/index.html","55bed51e6a4aecd9dbf586fa39f87de9"],["JS_0X08/index.html","a9ea7cff92bb4a85e7148df5ee5c6944"],["JS_0X09/index.html","c8f5192bc9d46084b0c251437d071b6c"],["JS_0X10/index.html","d3f2f11f55ce6df7f7df54cff9fcb2c0"],["JS笔记(0X01)/index.html","4210a09ce900292da17a94a40114ec22"],["JT808协议01/index.html","6c3e65f23c48b0883210d64576d83624"],["MQTT协议01/index.html","e8d8bea3174c40a6942b26b7a4ce6914"],["NFC协议01/index.html","5cbd36ae059aad62136181486bbd10c3"],["RF协议01/index.html","ba3a98fd26b7e9c5ff991e7fc8df22f8"],["RF协议02/index.html","2e969683706bbe569dbd56ebcff4ad0d"],["RF协议03/index.html","50499925df994870544cdb5f6a8dfc15"],["Wi-Fi协议01/index.html","b896b7932022871c9f8b985d95e28cdd"],["Wi-Fi协议02/index.html","2d9330dcd6c0a4b74093855c746e8090"],["Wi-Fi协议03/index.html","70bcd6db8ef1df02bdca88476c42624f"],["Wi-Fi协议04/index.html","83069e0c6631d58d32ea3cf72a7c9a85"],["Wi-Fi协议05/index.html","00ed5e16f6f81400c48bae9144d76ccb"],["Wi-Fi协议06/index.html","f2adc23f4b40a913e064a0ec5d12030b"],["Wi-Fi协议07/index.html","28968f2de5fef9b979e27684b6ab773f"],["Wi-Fi协议08/index.html","ef4c298bc6454fac1e2dac8c1ef6eb0c"],["Wi-Fi协议09/index.html","aa882a285304b37c98921e26c0371744"],["Wi-Fi协议10/index.html","a4f5078ffab56a228f3e71d14797538c"],["Wi-Fi协议11/index.html","f682f1e2b94c1136700f399efb6303c2"],["ZigBee协议01/index.html","150bdb21c8678096985fd6154cd67f56"],["ZigBee协议02/index.html","5e3a12fcaf2b44b52e5bc85e765b609d"],["archives/2020/08/index.html","247848af02280c63298d896dda859a11"],["archives/2020/09/index.html","d526c5e1edb14adc277d2e00cf200686"],["archives/2020/09/page/2/index.html","bda3032e728e1f726c000bbb9165ae4b"],["archives/2020/09/page/3/index.html","da03b9cc1ebf4363669aa403ce912ab5"],["archives/2020/10/index.html","942d931888178bab675a80383dc3ea00"],["archives/2020/10/page/2/index.html","892dc38e4e015aa53330f71d132bfc12"],["archives/2020/11/index.html","4420d0ece8cd44bf25b75e0b4893e239"],["archives/2020/11/page/2/index.html","cca16bfc79c180b5f9f2a808d1b45c7a"],["archives/2020/12/index.html","d62c3fea77683fd1a1561d5733bff20a"],["archives/2020/index.html","d8b82661dd57ca78a9d9f77ff281dd6e"],["archives/2020/page/2/index.html","73cc188ade0ea3a64cee9f5c3fa515f8"],["archives/2020/page/3/index.html","c48149df0beebc5c15fd7dce98a407bd"],["archives/2020/page/4/index.html","89243316ac753c303921cffb2c9db274"],["archives/2020/page/5/index.html","6260dca43c9f24bd485828046b79067f"],["archives/2020/page/6/index.html","3187b838485747b2a2117359e00f0c59"],["archives/2020/page/7/index.html","bb08b0775a1620e2a57a1d4ecb9ef87b"],["archives/index.html","e00500992ccdf8a28b17878bf823ab5c"],["archives/page/2/index.html","bc53a0d6549eb5de98e3d232ecf9c4d0"],["archives/page/3/index.html","f09551fd447e8c5c3d9a407e9711a5be"],["archives/page/4/index.html","dca7d6b1800b88fa57683ffed1feacb3"],["archives/page/5/index.html","b6fe8d7340bcc5156c4c69bb4a8c665e"],["archives/page/6/index.html","b24b3572bbede0e3a6c10e0ead86306a"],["archives/page/7/index.html","fe8c341446e058f8acaad1fa45633f38"],["categories/ARM汇编/index.html","1e35003a48fc0ebf11242d4ef2b9e4ee"],["categories/Android反编译/index.html","3e64349ef8fda95096f6be74454eda85"],["categories/CVE/index.html","9941c003d968d17e68543ad6419e6e39"],["categories/JS学习笔记/index.html","5897150bcff78d1e00f9fb9d7f93aa5b"],["categories/index.html","69f0834400c58cc04006466a1dc7723c"],["categories/x86汇编/index.html","7b9c4d038f86e616fa37bd438cfd4411"],["categories/x86汇编/page/2/index.html","ffe918d5be451674c1bc60448cffab3c"],["categories/固件逆向/index.html","bbb92b46c1f199e45fe097d8cc9d9b23"],["categories/智能硬件安全/index.html","71bcca382b75b8e22b87ce04e526ad82"],["categories/硬件电路构成/index.html","a876291fb87b7fbfa9c2ca91e467f102"],["categories/网络通信协议/index.html","9878e8842c71c5b539ae9496bc523316"],["categories/网络通信协议/page/2/index.html","627ad9109e62abd3a50ed1eb922fe74f"],["categories/网络通信协议/page/3/index.html","4f74ba2a0bdc5b708924bafad47dc56f"],["categories/逆向/index.html","b695d969c5bfdf067456e2c1666ceb53"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","0ef58eb7dc9a785d5ddd8a8ace32919f"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","2d22928f45e917aa533fae84c30932d6"],["page/2/index.html","a8e8081f99a823440be7c17c8705fc21"],["page/3/index.html","81f074d37c0a0bd9addea1fbf259401c"],["page/4/index.html","3a763308646782169ff353e378581f95"],["page/5/index.html","b0c7e08a2d588e03e6e15f7d64754f83"],["page/6/index.html","37c6d8d64c462ba12a6d9527386ed65b"],["page/7/index.html","7b85bb98d1383cf575682a0863f5cd5f"],["tags/AMQP协议-暂无/index.html","f001fc5ad06b2d88edf6c0ea3f400559"],["tags/ARM汇编/index.html","0b1e6446e2fa3afab15b991eac842633"],["tags/Android反编译/index.html","43032e08ba4392fac0637b584b777d1b"],["tags/BLE协议/index.html","b3b43e45a44358211a2dabc14a656858"],["tags/CoAP协议/index.html","34eaffb05f89a5d25b8c5cb734a514e2"],["tags/JT808协议/index.html","1a51ac6e62b125a11d9edddaca8d5b6c"],["tags/JavaScript/index.html","5c62973b50122f842123d64ba35164a6"],["tags/MQTT协议/index.html","d3d997980ec76552726d5b4c3e81c641"],["tags/NFC协议/index.html","43b57fc21d876f2ceb9c93e2cea41726"],["tags/RF协议/index.html","13c49a919541961de6dc72c55c3ce7ec"],["tags/Wi-Fi协议/index.html","f5583749210e99917b190d97bd39f81a"],["tags/Wi-Fi协议/page/2/index.html","432cfe130e078bd2748b8be2ec65aa13"],["tags/ZigBee协议/index.html","ad2d3ddbb4175a09e991fdf0751f10bd"],["tags/index.html","442f9227fea0fb33b5cdc070a1fa3456"],["tags/x86汇编/index.html","dd9f502e9ea175b381c17af1a35280b2"],["tags/x86汇编/page/2/index.html","38d53bcac38c4911f2f63fdbdf99135c"],["tags/固件逆向/index.html","f8bda221fdd837526e40262232a64ee5"],["tags/智能硬件安全/index.html","ef9003979472cec116df8de0b388e2d8"],["tags/漏洞复现/index.html","7a8ea4e3f39ebd289f872b48c972ee7d"],["tags/硬件电路构成/index.html","160fa6b4007bc5a56b504152bece5a0b"],["tags/逆向（基础）/index.html","425256ca18b2eb79e1f849825a49e784"],["tags/逆向（调试）/index.html","d406d068184a7b5a4f4335ae957b2dfe"],["x86汇编学习笔记_0x01/index.html","95d21b9402f30fdae7473cdb896d7ced"],["x86汇编学习笔记_0x02/index.html","d7ed33748d09c7d0881fbcd50b0d87bb"],["x86汇编学习笔记_0x03/index.html","fe53942e0939ab22036df2de47655295"],["x86汇编学习笔记_0x04/index.html","88a1f667dc6263193aa8116793211484"],["x86汇编学习笔记_0x05/index.html","c39062c4b1b57e34aa5fcd2c0c495514"],["x86汇编学习笔记_0x06/index.html","90c1fdf31d197b6ce2db460a1b506c33"],["x86汇编学习笔记_0x07/index.html","f42fd08e761a81e42edb0cf72c2c34c3"],["x86汇编学习笔记_0x08/index.html","11d2f6497c3c66bd5388005e6fa691e2"],["x86汇编学习笔记_0x09/index.html","2fb1f2e4103fddc87914abc9017aedc8"],["x86汇编学习笔记_0x10/index.html","74f0a50b29e25f28e637616bd5537878"],["x86汇编学习笔记_0x11/index.html","e210adeece40f92ed9f4f00071de22d4"],["x86汇编学习笔记_0x12/index.html","c9a27e3c5e74129ded315921382a56e4"],["x86汇编学习笔记_0x13/index.html","1c173240f5067e57e666c353a1e7bc24"],["固件逆向01/index.html","31136ecfcc367c1e07791f0b79c99c9f"],["汇编指令集/index.html","16c0c2dd58b14cf602e6917bc1a64152"],["硬件智能安全(0x01)/index.html","666772d51fcae6a20d59c2d5b799dd1a"],["硬件智能安全(0x02)/index.html","ed3672fd8b861301333bbad3f93e2909"],["硬件智能安全(0x03)/index.html","12402e2d09cb6cccb7d2c12e4a51f419"],["硬件智能安全(0x04)/index.html","054305b895935e0df3f7867b190c0177"],["硬件智能安全(0x05)_/index.html","6cd11e0cea72ce78457496762bb5befe"],["硬件智能安全(0x06)_/index.html","e95f822ac5b4db053e4507492412f907"],["硬件智能安全(0x07)_/index.html","4a84a61dab76f6e7641b4f02eb0e763e"],["硬件智能安全导航/index.html","4700be03f4c934d611a98de498f5a55c"],["硬件电路构成01/index.html","ecb0e2dd8bd6865adb2a95fac3917285"],["逆向-基础-笔记_0x01/index.html","1e2bb4eded1389d91b58c115a9f31185"],["逆向-调试-笔记_0x01/index.html","c7b3626fe72e999e7abf50e8f1bd4a6b"],["逆向-调试-笔记_0x02/index.html","58b9362e01a6249ac13b9470af7f8b0f"],["逆向-调试-笔记_0x03/index.html","a5bba81ee44bf74e7564399083f3f5fc"],["逆向-调试-笔记_0x04/index.html","05e43986fc6a7d483f1ec337651fa1d2"]];
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








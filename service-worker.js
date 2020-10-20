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

var precacheConfig = [["404.html","65a3e026c3e8ddc85b77014144377d69"],["AMQP协议0_1/index.html","37647feb5b5161b3df281132db161a7e"],["ARM汇编01/index.html","cd91498d7e2b8f0809670238e39e5a43"],["Andoird反编译01/index.html","cc345b0658ab6a64ff60ad260ceea451"],["BLE协议01/index.html","cbb630e7c4e9ba6492be6495159265df"],["CVE-2019-5418/index.html","d00423c978942ec9841db68eadbf0ef0"],["CVE-2019-9766/index.html","1c750146c7fbfa99ae70889d7814097d"],["CoAP协议01/index.html","98705a863adb1c3a032bccdbafac3b40"],["JS_0X02/index.html","e4307b3261f74eb19d68daff668498f3"],["JS_0X03/index.html","85aa95ec0eb4cab9cb959e497587f225"],["JS_0X04/index.html","565ff455daf11a9645c252479e75f7ee"],["JS_0X05/index.html","fa29d2b46f073752a0b73a88716b0fa3"],["JS_0X06/index.html","92561ea836a2d1b2c0ce4c0acd894f0f"],["JS_0X07/index.html","8743525fd9524d4661fb2e97d461d378"],["JS_0X08/index.html","4cebb882b12468a0b4d6dc5a93435af4"],["JS_0X09/index.html","fcef0efb9c595bb1f8f45838133b7f66"],["JS_0X10/index.html","96d03b854e0aa6172bb97fc797f76a0e"],["JS笔记(0X01)/index.html","97c86554068c93b2c52e5e46fde13cec"],["JT808协议01/index.html","cb4c2cbb3e6cb6f32b7516c016bb4371"],["MQTT协议01/index.html","635a356f0c0366147a6a899817f33b79"],["NFC协议01/index.html","f41f635026dd3b299ce3d6a7e2d33ed0"],["RF协议01/index.html","7f74780ec38778466327fadc6bfcb517"],["Wi-Fi协议01/index.html","4d88ef5f65dd560c084bc9358fafa073"],["ZigBee协议01/index.html","727c326eaeaec4c640b569d73ea5ae68"],["archives/2020/08/index.html","7eb5780cd08a36039334ce96fcdaff43"],["archives/2020/09/index.html","3f46282f40aa0db3396882a6392ad3de"],["archives/2020/09/page/2/index.html","922d4738237a7782beaeba8370a939f8"],["archives/2020/09/page/3/index.html","16bd7054478e967fb23a93a7d108d5cc"],["archives/2020/09/page/4/index.html","2682ccf799b3b5e4a927e8c878b3765a"],["archives/2020/10/index.html","e9de32949057205b043927f04fdbad02"],["archives/2020/12/index.html","6a04dd32227997256b0c0fea4118bea8"],["archives/2020/index.html","1418d03fa8a8c564e979a657fb817e3b"],["archives/2020/page/2/index.html","b7a1788e005f987db2d1fd0bbf5882c1"],["archives/2020/page/3/index.html","40a965db6f81642818e01b2bd433a2fb"],["archives/2020/page/4/index.html","aa6f8e92949ff00fa4dff22914a052f2"],["archives/2020/page/5/index.html","a5aa6f46d3336fe1e5a129fbc933ffb5"],["archives/index.html","a90221852725776e7b90f7141c4725aa"],["archives/page/2/index.html","5fb5cbec44fe6561f9da3c699c112884"],["archives/page/3/index.html","d601a695a469dcc6337fa83c1a464894"],["archives/page/4/index.html","0ae154acd025626df53049404afd3e64"],["archives/page/5/index.html","87fdfb92464edc27e9be626c319f2136"],["categories/ARM汇编/index.html","abb0c3ff05b7430073fdae7ba3ac2d8f"],["categories/Android反编译/index.html","6de54a9130a421dc15098479084f42d4"],["categories/CVE/index.html","b539f5ae17f005ceb915586099d7d100"],["categories/JS学习笔记/index.html","0df5cf1ff7a737aaef4a77e9c8c7598f"],["categories/index.html","b930c4c6e9bce34ef71078b8d4fc3c9a"],["categories/x86汇编/index.html","4fe427f69665bb4ee27135a57b707382"],["categories/x86汇编/page/2/index.html","9827daa4af918e408c3fad58c7ce4179"],["categories/固件逆向/index.html","27ee27de90744abe6dcb336509b17ee2"],["categories/硬件电路构成/index.html","523a165efaf2ec5ce4975f6b6edc946d"],["categories/网络通信协议/index.html","5dec4741843ff1c354429f47463de6dd"],["categories/逆向/index.html","52b981e0ef3d002ff10d34f299443fc9"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","e5d848ea02e3d98a0c4cf19ebe793c10"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","bee7200c841a481e13bd504c838602de"],["page/2/index.html","47bb8755a89938e331a5332dd114556a"],["page/3/index.html","6f59a4ff74c5121c47ae8522649bfcda"],["page/4/index.html","44d38816eb64b3fcf31f89d1c659cd73"],["page/5/index.html","30c0e56aacaaa0d48a7fed3729402d52"],["tags/AMQP协议/index.html","23ac34cfa3a8416a2c15ea09a7900a9f"],["tags/ARM汇编/index.html","362a9ea005e4c5f524b01480539edb33"],["tags/Android反编译/index.html","1a20aa92302300d129e9e4c330a0b8e9"],["tags/BLE协议/index.html","409b66d52e773cf4d6d9797371d6e4db"],["tags/CoAP协议/index.html","d1c87668c9391cd3572d0e483b2aebba"],["tags/JT808协议/index.html","3eb27300f83c2788805d07632ff69254"],["tags/JavaScript/index.html","ed3a414e0e5e17199d23e71c25e37e3d"],["tags/MQTT协议/index.html","9c2d0fdca0e0201e82ca8360856ba3c0"],["tags/NFC协议/index.html","7e80f9abdd47fba1442fd0934dbc1489"],["tags/RF协议/index.html","1597c6d02185d90365f94c3d3c0cd582"],["tags/Wi-Fi协议/index.html","4a3e2c5dce7c0bf87c0e64fdaff635b6"],["tags/ZigBee协议/index.html","4a653eb3c05faeaea33d36e09fc0fd5a"],["tags/index.html","03e839c4e432174ab6af234288c1b2e4"],["tags/x86汇编/index.html","22a5c14687902778049c38ac6a3e48cd"],["tags/x86汇编/page/2/index.html","92991b7390d8b3564816bde14ee9c85b"],["tags/固件逆向/index.html","1672afeb5bc74d4a0a5ac0e07fe803ca"],["tags/漏洞复现/index.html","d606915841f5a66b149261fbc527b1f1"],["tags/硬件电路构成/index.html","df663b8db2f357923d15c224c3b15a7d"],["tags/逆向（基础）/index.html","1b03d755f43e9c445188667c2fe35328"],["tags/逆向（调试）/index.html","66bd579496f7c1d076425c9386d2bb62"],["x86汇编学习笔记_0x01/index.html","120ca06ce6e42642fba0e02c98b1cb06"],["x86汇编学习笔记_0x02/index.html","b2ddc6b160547d9ef3c3ae07fa70e5db"],["x86汇编学习笔记_0x03/index.html","32881038f6cc41a29ee9ca9c57bfc105"],["x86汇编学习笔记_0x04/index.html","fc7d24a9808f82070b655fe8c9d68c2f"],["x86汇编学习笔记_0x05/index.html","1f618d91e5107f363700f0901dc54b32"],["x86汇编学习笔记_0x06/index.html","e5b154af1114148d334008dfa7fe809f"],["x86汇编学习笔记_0x07/index.html","0e7827bc1ced48eb548ecdbf313ff924"],["x86汇编学习笔记_0x08/index.html","de49d62f7699fc837a57e5700f1b9ab2"],["x86汇编学习笔记_0x09/index.html","b75a517ac321d481ea9593b2ff3c6bfc"],["x86汇编学习笔记_0x10/index.html","110cb54bf3c04fc4d25197cdf409bf82"],["x86汇编学习笔记_0x11/index.html","4f34ac46f3722c744961ae2b9ddc842a"],["x86汇编学习笔记_0x12/index.html","a546427c7765e441b2380ebe92bebff2"],["x86汇编学习笔记_0x13/index.html","0a9d41d138651a18a01bad96d52fbbdf"],["固件逆向01/index.html","791d9b3c69d373783ff992b28be30363"],["汇编指令集/index.html","056a4c6d563eb06a25b478ae54b4915e"],["硬件电路构成01/index.html","55952d241e4fe1ffed45905325420d8e"],["逆向-基础-笔记_0x01/index.html","2905745d82ca9973b0a057967b39b9d5"],["逆向-调试-笔记_0x01/index.html","c1c49ee39f1ac3e2e89c6cdefedd6348"],["逆向-调试-笔记_0x02/index.html","d4d72db126efc116bd37453a54ed06ab"],["逆向-调试-笔记_0x03/index.html","448ec1e6f1bb32b1b9568e8879d8115c"],["逆向-调试-笔记_0x04/index.html","b4340e04909bb1454cd0be6b95b44c1c"]];
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








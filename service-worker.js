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

var precacheConfig = [["404.html","d1d05d725a87b8f47d81472890d568c5"],["AMQP协议0_1/index.html","32e2e836b21c86b408977630871d8ba2"],["ARM汇编01/index.html","3402cc764d5044cc61dd591c026914ee"],["Andoird反编译01/index.html","d1e2021f19b01e13bd3c2d25e80fdc2f"],["BLE协议01/index.html","ce284e60d4c97129f34cf195eed3c2ff"],["CVE-2019-5418/index.html","819063b9d3346303d53d0983c3662cb6"],["CVE-2019-9766/index.html","4a2a2f0cb82991174d40c4b2cbcb3317"],["CoAP协议01/index.html","e7ff838bf45aaa9489528db6fd97006e"],["JS_0X02/index.html","61dfb6109b92a94422374e4dcf54efb4"],["JS_0X03/index.html","be2d5c3ec625d9ebf409303b967bba3b"],["JS_0X04/index.html","392d90958cbde1e0d0fc512e9a0ac910"],["JS_0X05/index.html","8b8c0e1fccd422efead33e964a2cca09"],["JS_0X06/index.html","51aa5d21ad7224a4a6bd2c7f153209ce"],["JS_0X07/index.html","80692c2784c17b167ca1a9a663978c22"],["JS_0X08/index.html","16dd9a358b0851f2bd314302585d103e"],["JS_0X09/index.html","109da194d8090218f0ba0c9ba46817eb"],["JS_0X10/index.html","f045120ccbdf360aedbf6d55ea6b3285"],["JS笔记(0X01)/index.html","107c0e39e3454c2d29e7b5c2098f56bc"],["JT808协议01/index.html","f23e182f81528a29f53a7cc0eed7e3e1"],["MQTT协议01/index.html","b8975d502f0faffc9ac8ad9d51e07686"],["NFC协议01/index.html","70b5e0ad2733adc1b5409e5b0637bda4"],["RF协议01/index.html","25e1146e9f2a7d53875c35bb0669b469"],["Wi-Fi协议01/index.html","a889418708f02745954190a2257312e0"],["ZigBee协议01/index.html","8e40148cd08527841babb421f461c248"],["archives/2020/08/index.html","937a428045b805a66df02a104a781941"],["archives/2020/09/index.html","6a832edd8a3cf21be084e6075488704b"],["archives/2020/09/page/2/index.html","ba1fedc79159b1e5e23c41cf4b2e46bf"],["archives/2020/09/page/3/index.html","e544912267135fb0a8e74bddc0be80b9"],["archives/2020/10/index.html","adcbb7234a2b3d0b6bfa663abf9e8be1"],["archives/2020/12/index.html","dbbffe9cbea6c7a187480a304fcb2e17"],["archives/2020/index.html","9aa1aa807acc0cf34033d8897c1fe15b"],["archives/2020/page/2/index.html","a77be519a5d008d3ea38eb3acb06bc31"],["archives/2020/page/3/index.html","a0bee7aa408e13c7a55ca54fabe7d90d"],["archives/2020/page/4/index.html","e95906386cbffaf1b750b566609e4d72"],["archives/2020/page/5/index.html","7241711848fc1474645b6f5e5d791972"],["archives/index.html","f3afac795ea7df9f7e77376a710425cc"],["archives/page/2/index.html","09ae661c672e641a14e972e3bcc7011d"],["archives/page/3/index.html","004cbb5a1a6a7a70d157a40fcd8236fa"],["archives/page/4/index.html","5462ced4e334df87688207d3c99be1fa"],["archives/page/5/index.html","9de042c452cf195d2956ffd07f331889"],["categories/ARM汇编/index.html","e47f634a1926c89ebddebdb6d7cfbd1e"],["categories/Android反编译/index.html","90686245d0af9812783fd214f6f757fc"],["categories/CVE/index.html","c4e2e29cac98bbd6fab6e5a72aa48a05"],["categories/JS学习笔记/index.html","cd72d629a65ab7bdc49ee631a7d4e5c8"],["categories/index.html","e00f11cbe8889b4cc5eedd0411bd9877"],["categories/x86汇编/index.html","1be30322a4fb04fd354c27fcd833a45a"],["categories/x86汇编/page/2/index.html","a405d7ada41a1c2bdbeb9b79a3eab00a"],["categories/固件逆向/index.html","e149ffd0cb7fb35c04e2cdc3538a60cb"],["categories/硬件电路构成/index.html","315f743fddbdd4d1b603acd27df9b8d1"],["categories/网络通信协议/index.html","d5ec692723c986fbc53006f805295d2d"],["categories/逆向/index.html","30300cdb417a00a56e30829dc8a912be"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","e707a8d43a160b11000ede21a629ca0c"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","d4e44bf99d9c5942f2319fcc335047a3"],["page/2/index.html","faaea116067ad54aa6a9110f3762f8ad"],["page/3/index.html","7a1aa3513e9d1bb19bdc624f51bef052"],["page/4/index.html","07705dbb98f6a2f90a07299376af562a"],["page/5/index.html","e3689d3beea5564b5acb9dc047ad1690"],["tags/AMQP协议/index.html","4101745a2306ec6e42a51de3ade4cd56"],["tags/ARM汇编/index.html","d920a9e82e8f8747da033abc0c4fac3a"],["tags/Android反编译/index.html","d49fcf96b0670ccd52affdd8a7f0bddb"],["tags/BLE协议/index.html","294613d45a1bf6d16033e13430d1aabd"],["tags/CoAP协议/index.html","5a304ddcb974b3d43cc51c54a3680f92"],["tags/JT808协议/index.html","956c0cb824302d2953ad26684c49a4cf"],["tags/JavaScript/index.html","268e0c57a448ce90b7684227f88883d4"],["tags/MQTT协议/index.html","00cd9e852dbdc36c52370368b88063c1"],["tags/NFC协议/index.html","5495b2a5c949dfcdec6e34cde6c58160"],["tags/RF协议/index.html","e39c1092fd0c15cec55d84792f91c891"],["tags/Wi-Fi协议/index.html","99f399952b5a69712dcb2d22b9c5f8cc"],["tags/ZigBee协议/index.html","1e3ca29cf1fe3c88c13271d418e8c1b4"],["tags/index.html","27b8eb5165a91b65d748053669f7d924"],["tags/x86汇编/index.html","556f1ed360da50c4a24f298df0651c0c"],["tags/x86汇编/page/2/index.html","7f6cec166140d288500c7bfd48c8400e"],["tags/固件逆向/index.html","66ae913e2b90cbdecaddf11b87c3d09e"],["tags/漏洞复现/index.html","414e4e3ec88a19efd18bb6c635e00284"],["tags/硬件电路构成/index.html","71b216be0b500918bc722e398ecd90f1"],["tags/逆向（基础）/index.html","af9640cda930207088b1121073276fc5"],["tags/逆向（调试）/index.html","a45bc90cf3b43d26f8c159bfd8200fb7"],["x86汇编学习笔记_0x01/index.html","e38e13ee72791370597735b3f9567b6a"],["x86汇编学习笔记_0x02/index.html","d5b179c6c4824e818c108ccfcd80549d"],["x86汇编学习笔记_0x03/index.html","68813b6cd01734b11a445a1c8434943f"],["x86汇编学习笔记_0x04/index.html","9df393f6b9ee1f30a5bf14a900dfcad8"],["x86汇编学习笔记_0x05/index.html","4c1e86a4616d4bbe8f11e347d2208ae0"],["x86汇编学习笔记_0x06/index.html","e80ee5e07d5c1f1e0bd5ba72c5a2dab2"],["x86汇编学习笔记_0x07/index.html","bff0a0fe4a28414efbd318c0f65a6436"],["x86汇编学习笔记_0x08/index.html","c96765bd19f0d507aca33666b1c81656"],["x86汇编学习笔记_0x09/index.html","ee80f2d78a8c6e700dc68b745904830c"],["x86汇编学习笔记_0x10/index.html","2a976f150661b6cb05290fd8eb7ef96e"],["x86汇编学习笔记_0x11/index.html","4daf582506b8df072c88a72bce55f5d2"],["x86汇编学习笔记_0x12/index.html","e9139216a1461b1c1e9e10d53f1fbadd"],["x86汇编学习笔记_0x13/index.html","8f8e647089a646d1c9edcd7372bea1fa"],["固件逆向01/index.html","339f4e279f04f87d9aa372084f93a839"],["汇编指令集/index.html","6043c7f6da10add83c8004c86da474e8"],["硬件电路构成01/index.html","3d0c6401015b9b9f33d86dd250c4691b"],["逆向-基础-笔记_0x01/index.html","1e9e57d344a76be105a2b86461de84d6"],["逆向-调试-笔记_0x01/index.html","4538b9649e6c96f54f2e7c13e8a06014"]];
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








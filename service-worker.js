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

var precacheConfig = [["404.html","c96650bb216c0f870a485158ffdd0dad"],["AMQP协议0_1/index.html","ea247e5ad83830eade60a595317cfb8c"],["ARM汇编01/index.html","c792b91a3ed8cdc27cb01a16ae2381ac"],["Andoird反编译01/index.html","b0f9dd8c5e77c348a38c86dc6f0b7d2d"],["BLE协议01/index.html","4f367ddb887f4b0f6592395bf53adba5"],["CVE-2019-5418/index.html","bcac75d6bcd14f443bd19eb8bb3d8eab"],["CVE-2019-9766/index.html","cf67ab7a7b95b26f4cbbb37c1d83bbad"],["CoAP协议01/index.html","ed553ab248ddbbfd403a37d8c79a8860"],["JS_0X02/index.html","6977fb9227ef0c8c94f41d989ef0c5fb"],["JS_0X03/index.html","4c8b1090c14178bb7d72fbe5d5eb25c4"],["JS_0X04/index.html","17df0f1264179e3505fb52ba4a054c1b"],["JS_0X05/index.html","894c5f2962cba1f429d785bdca47afd8"],["JS_0X06/index.html","6c50326e619f88109d5c2ce066bcbd85"],["JS_0X07/index.html","c06be16ff97069d85d9eac37675f9887"],["JS_0X08/index.html","8d7e9c3a6ad5fc9a723af628a8da5679"],["JS_0X09/index.html","3b15be0a53901da31ada284c374a25bf"],["JS_0X10/index.html","6ebca9aca74dcde7c21df52e551f05f3"],["JS笔记(0X01)/index.html","1aae51e9b97594328f97cc6cd44012e6"],["JT808协议01/index.html","a9882393c1d50347695035fadf7169fb"],["MQTT协议01/index.html","d8274e873200fae9e859497e7706c6e9"],["NFC协议01/index.html","8ecd9b16029080f53af171a3f1929431"],["RF协议01/index.html","748561466b5bf3cbb37aac6551644625"],["Wi-Fi协议01/index.html","9d61ba92a332b76094ddedec49543414"],["ZigBee协议01/index.html","8f52a4ed6b86b103d13abda154939464"],["archives/2020/08/index.html","f53d3d67bf8544147de12547c78d98a5"],["archives/2020/09/index.html","0715f096fca3d24fe1e208f022619dac"],["archives/2020/09/page/2/index.html","601c70e30f0a38cde65d6470ede71a6d"],["archives/2020/10/index.html","37b15f237f547f10a4a3458596a6965f"],["archives/2020/10/page/2/index.html","7311ab09a73245683c2c52b92aa9a7ff"],["archives/2020/12/index.html","e08f0b7216903fb0821676f9c7817961"],["archives/2020/index.html","753870634dd873661d656c725a82dddc"],["archives/2020/page/2/index.html","39ba2ac99b3654fc2b467add44702618"],["archives/2020/page/3/index.html","a98f05c0a3f7f83b037600ae1636e26c"],["archives/2020/page/4/index.html","87a5f60c48b1e923789d4397bd36151a"],["archives/index.html","9d648e0c14022cdfc2ab1ed64131882c"],["archives/page/2/index.html","d2ce7f04cff499fdff35c673458b9a87"],["archives/page/3/index.html","74db24350d7f47840afb18a6a420e064"],["archives/page/4/index.html","11e9dab093e736cfce99a01d36f3b27f"],["categories/ARM汇编/index.html","f0a8cc6b9128087fe0930820bac9e3ac"],["categories/Android反编译/index.html","d6a44b4f9bc3b8625b454dbfcb170834"],["categories/CVE/index.html","289f518c0e07a1ffbde692e3a6ace85d"],["categories/JS学习笔记/index.html","f6cca2e1d7db959a5f765c39d44937b8"],["categories/index.html","417258392874758d950379b1b7452d50"],["categories/x86汇编/index.html","139d56d8a114e5beb31bd60471d8b2f9"],["categories/x86汇编/page/2/index.html","aa46677a85273eda0b2600981d1aa3e8"],["categories/固件逆向/index.html","cf5076d9f1602925deeb86ee34f405e9"],["categories/硬件电路构成/index.html","6e2e665a3be84693762eb3862559372c"],["categories/网络通信协议/index.html","b0796982f2033c32b991bb43ab80f849"],["categories/逆向/index.html","ddf2e13fae57f8ad5dd77e825d3a7b99"],["css/index.css","57ddfe330d43d455a741d80564941694"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","dfe76e6570ac55db3674cbf46b4be1f7"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","d7599ea2580ee8fd8a7351b6f3ea2c48"],["page/2/index.html","9c05bc910c364ec86480eed658cb30da"],["page/3/index.html","0b98fdafaedc58396b6949289bd1e03d"],["page/4/index.html","b8cc34457f01b1a61f6233b064f62f6a"],["tags/AMQP协议/index.html","db17b9d1b0ed9f46410aa2c30fc9a06c"],["tags/ARM汇编/index.html","8a5869634a9082390e39127b44b9265e"],["tags/Android反编译/index.html","e63e089fd2a415b8eb519d09230fab75"],["tags/BLE协议/index.html","94a2129ea98b0e28d8ea1e5113042e8c"],["tags/CoAP协议/index.html","07bec6a2e2f6c4d59b59a9fcf83804de"],["tags/JT808协议/index.html","bc376c56aef32a8adca2de7b2fbf1aa9"],["tags/JavaScript/index.html","782c859a7d6806bf837b842a6090ac1e"],["tags/MQTT协议/index.html","520143fb5fc2f538a31e0a78eed2b697"],["tags/NFC协议/index.html","4280b778a8ca080ab18fb14258f909ef"],["tags/RF协议/index.html","46f614d3e2c41f36513f888c3cc0f760"],["tags/Wi-Fi协议/index.html","8b42c0ff166b3aff4a0795cc3dd95a67"],["tags/ZigBee协议/index.html","9e7e6fd8133bd517e0bde75008e7046a"],["tags/index.html","abf7ffdf7211fa6be3cb593fcaedd1f9"],["tags/x86汇编/index.html","c6e07831eef1aface02419fa35bdc6d2"],["tags/x86汇编/page/2/index.html","af54e869e27b1b8dadb759c844fc620a"],["tags/固件逆向/index.html","8864c3e4307d3d260fbb519ae7d8a166"],["tags/漏洞复现/index.html","375924fc797b2b0e6cc4854bc600f32d"],["tags/硬件电路构成/index.html","c84e333352b5f83695984aa3be1d4727"],["tags/逆向（基础）/index.html","f3181fb7781c223b40c40e5c6567795f"],["tags/逆向（调试）/index.html","b4fe030bee507f2b85bd011817b11f7d"],["x86汇编学习笔记_0x01/index.html","b687be01f6756cba2a8a85c1ed59a77b"],["x86汇编学习笔记_0x02/index.html","586293e7cb3547a003f2b77b9b2fb4cf"],["x86汇编学习笔记_0x03/index.html","c1d4663b0c351b870aca53806f51d062"],["x86汇编学习笔记_0x04/index.html","9c233421987834fd8df8b639eb03aa70"],["x86汇编学习笔记_0x05/index.html","bd1ba6cc4136830df60b9b71ea27bd87"],["x86汇编学习笔记_0x06/index.html","6f1abe6d9b1088de261f46e9f529a96d"],["x86汇编学习笔记_0x07/index.html","f914d03b213cd48795e7b2f24f023bf0"],["x86汇编学习笔记_0x08/index.html","716fd39ecd61ec73b9c4b72476bb3e48"],["x86汇编学习笔记_0x09/index.html","1d6dd84120ad5ad95d305fc69270da3f"],["x86汇编学习笔记_0x10/index.html","bc7396f1958af05942d9ce0bb7397f8f"],["x86汇编学习笔记_0x11/index.html","351464f494b15b7ac867c710afae631d"],["x86汇编学习笔记_0x12/index.html","d670c06837006a0ba04812227955b2cc"],["固件逆向01/index.html","7323e6bc0b40a407dd0ea175f6263a43"],["汇编指令集/index.html","d674345b67449a68c3fd8e8ac16e4332"],["硬件电路构成01/index.html","475b5fc342a4625842a4b5c62673f833"],["逆向-基础-笔记_0x01/index.html","75cf0fc1ac0742aa7fd2f618ce9f2345"],["逆向-调试-笔记_0x01/index.html","801b498cc504a5e911fa3080653aa790"]];
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








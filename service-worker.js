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

var precacheConfig = [["404.html","1b8a71a8dd9a508a12d0d6b62b24249e"],["AMQP协议0_1/index.html","719ea6a4a49068ccc54ded94ad251d0b"],["ARM汇编01/index.html","ae7a7f36b6525e82f04c930c35f0fd14"],["Andoird反编译01/index.html","f57179c0aeeb842d50c5718a43aeeb3b"],["BLE协议01/index.html","be38514a2e8c1f81accdc511f5890dda"],["CVE-2019-5418/index.html","b8ccf05e02c0e13452d65ef24584b692"],["CVE-2019-9766/index.html","43d65b80c1d8b8aa96fa4f390b4a3104"],["CoAP协议01/index.html","5582cdf2a9317e35e47c8a7315388a26"],["JS_0X02/index.html","6c9c95c0d4a34058d0fd5fa50470849b"],["JS_0X03/index.html","c1c2e6ae646167646e713b714265cdca"],["JS_0X04/index.html","2eb80ef32d23a4017aaab94c29d88e41"],["JS_0X05/index.html","c6c8eed61c430f8e36cbca2d40f27589"],["JS_0X06/index.html","0559ca13b5a27606bff81ddc568119ee"],["JS_0X07/index.html","123343ebd6afd8a2ba192675612b0891"],["JS_0X08/index.html","51768c3006c45bca95e3dd3e4d619745"],["JS_0X09/index.html","5d9d71f64ca3d69dfef406e8cbcdbb4a"],["JS_0X10/index.html","1193a3580f687181136c6494bd9fe0ad"],["JS笔记(0X01)/index.html","6d1c1a51d86a05e9ddbf111e0b055e34"],["JT808协议01/index.html","cbcf91884df000b92a5d2692bb539065"],["MQTT协议01/index.html","807b0334beedc7a43b0a9e61ca39855e"],["NFC协议01/index.html","89ee3a5fac4810a59f6a7fda2e5c8f6e"],["RF协议01/index.html","b36f5e5782f1928766cfff916cb5c287"],["Wi-Fi协议01/index.html","e05f05372398a6eb8a3bd8dcbb8614ad"],["ZigBee协议01/index.html","634ce454dd57d30a6431b7e1d09bd701"],["archives/2020/08/index.html","4b7e7c2b08ece4c03dfe3bb8dc08fb8a"],["archives/2020/09/index.html","3f9e4acf919d2f036d3b8049654d276e"],["archives/2020/09/page/2/index.html","922e4001b07a0099f284bb98107b4b50"],["archives/2020/10/index.html","77365c304fb81493568bf7bc6c87cd35"],["archives/2020/10/page/2/index.html","961069679a5d679d1029ae1439fbdfb9"],["archives/2020/12/index.html","4dbc3561770d02cfdb32d9b546cc02cc"],["archives/2020/index.html","1802e21ad81f8519464a165575dcdf16"],["archives/2020/page/2/index.html","b04b6c0abd4232f9bde836044d475b04"],["archives/2020/page/3/index.html","42eaa459e8409c5ee1cb77db744b4ff3"],["archives/2020/page/4/index.html","466cdc25760e5ae22444af393ed5277c"],["archives/index.html","6d413c80d6d3dac8f742893b994d21b0"],["archives/page/2/index.html","3c6b09774de0c665738820ad84ea67ed"],["archives/page/3/index.html","80c49329bfb0598aab65155c4e17a985"],["archives/page/4/index.html","005b0b8d9d934d2efaca0fe5a77ec8fc"],["categories/ARM汇编/index.html","7e65112f8ef69656697c1cc518619797"],["categories/Android反编译/index.html","8e1976f4103355587d5e341e9a89177e"],["categories/CVE/index.html","0347ef2e58467a0215fde25794262291"],["categories/JS学习笔记/index.html","9eb86488cca60710109cad393299ad14"],["categories/index.html","57b97a4657c921136cc86912610b6449"],["categories/x86汇编/index.html","c09c3a53bf0eb546f5f0b822fc54a327"],["categories/x86汇编/page/2/index.html","76a0a8e015a9b8ead064701a447ae560"],["categories/固件逆向/index.html","b11e4f795e00a415cb4608889389b8c7"],["categories/硬件电路构成/index.html","452371bdc75251b93625d9f0ff1df744"],["categories/网络通信协议/index.html","7aac1fa2280de2c43dd74f02299624ef"],["categories/逆向/index.html","348aa67615de9ef69f22c04f6b11a442"],["css/index.css","57ddfe330d43d455a741d80564941694"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","2eeb29bc84dd3fadc558aa42fe0a5c1f"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","b617a182578ba8319207bff181c8ea00"],["page/2/index.html","bbe826ea3b330938f7f480df5bbf0433"],["page/3/index.html","6e1fa434b3d3bdf49ae15bdf1c0825dd"],["page/4/index.html","fbadc84172433ca65d7806b5abad22e1"],["tags/AMQP协议/index.html","0a26616b4a9fbb4093a4c1bda4401bb2"],["tags/ARM汇编/index.html","30098f5bc6eb4601398c3ebaab8b0cee"],["tags/Android反编译/index.html","6066f517233ca3ebbc939a8fa1ab44c3"],["tags/BLE协议/index.html","12244b5acb58b51d0e31c4b1acf6db8d"],["tags/CoAP协议/index.html","77b7dc2e5993d0668fb9212ae1b29b29"],["tags/JT808协议/index.html","62e52e66f4d28516b8b0cdda40c5098c"],["tags/JavaScript/index.html","e56974f6e780a53b653962d915928133"],["tags/MQTT协议/index.html","fefcf8a771fb1de46ad5228731c2475a"],["tags/NFC协议/index.html","fc1e780ea1c22450b6c248f2c06ab7c2"],["tags/RF协议/index.html","94dd53a1236e45221586410a00824c3f"],["tags/Wi-Fi协议/index.html","1a90f9f49a43eaf22a5929aecc797338"],["tags/ZigBee协议/index.html","7071819e7e8fd46893bad97bfd98e6d0"],["tags/index.html","9b43321367a66a6f1da2a19b8b0112cc"],["tags/x86汇编/index.html","0bb5476f96d3162af72d62fa90af1f39"],["tags/x86汇编/page/2/index.html","ecea44543065ac1e038f7e8c9a6f2ccb"],["tags/固件逆向/index.html","be83b97596fbd03529fd877bfbcfeb95"],["tags/漏洞复现/index.html","457b1041b786f2fe82846833f44e8812"],["tags/硬件电路构成/index.html","2c505b75ae60eebc5f4ae5d3001718b7"],["tags/逆向（基础）/index.html","1e85888ac8771a06b26ec7781b87e893"],["tags/逆向（调试）/index.html","78d0989ef49ad868a09a12709f9c5750"],["x86汇编学习笔记_0x01/index.html","a58a36576becd2a1107842330523e290"],["x86汇编学习笔记_0x02/index.html","817ea16a6b7a3696867fd2c970da91d0"],["x86汇编学习笔记_0x03/index.html","1422f2044b6d46caea0312f9ad8c8855"],["x86汇编学习笔记_0x04/index.html","479aeb57f38064a9a011507ae66c52ef"],["x86汇编学习笔记_0x05/index.html","1f994879a3161949d59b20355f0f7ea5"],["x86汇编学习笔记_0x06/index.html","293a23ae2f6e606b19f182e8b792f034"],["x86汇编学习笔记_0x07/index.html","9088eb878bd699fd63829253bbedafd6"],["x86汇编学习笔记_0x08/index.html","d2f3f6fb99fc8e41de1c0bf64361b50a"],["x86汇编学习笔记_0x09/index.html","4f317eefd5f7cf9486e94ab4702bf451"],["x86汇编学习笔记_0x10/index.html","f7a0b8179ff1ff692184770045b18cf4"],["x86汇编学习笔记_0x11/index.html","c321d34efc818f950df6d47c8fdfa94d"],["x86汇编学习笔记_0x12/index.html","7e7a626ff8d6a51bab0abaeb65a7f530"],["固件逆向01/index.html","1c125fc00c695cb3d7ed93a6f0e4c490"],["汇编指令集/index.html","59aad390c024b7773633de1467da0067"],["硬件电路构成01/index.html","dda661b8efc48261890ef3f956677909"],["逆向-基础-笔记_0x01/index.html","d2a3e77c60d795379c3ceec21bffee02"],["逆向-调试-笔记_0x01/index.html","53545141c6fa131b45df873a55f3101f"]];
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








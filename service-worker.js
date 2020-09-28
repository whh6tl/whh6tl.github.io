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

var precacheConfig = [["2020/08/23/CVE-2019-5418/index.html","b29c9a93f3f22cdeb00b664b129237eb"],["2020/08/25/CVE-2019-9766/index.html","0b804c69eb2842baed9d531f84a2f646"],["2020/08/25/JS笔记(0X01)/index.html","0bfefc395d90cc32f46dcb51f6422861"],["2020/08/26/JS_0X02/index.html","96ecf7c36feaeef35b3c82f0ff8c3a4c"],["2020/08/27/JS_0X03/index.html","1d7868a660ec10fa133ce54f3ead6a95"],["2020/08/28/JS_0X04/index.html","6f0d32b49fb34887cb699c031ae6de7b"],["2020/08/29/JS_0X05/index.html","c6709887df09a0b9fe415e85b03d0fa6"],["2020/08/30/JS_0X06/index.html","f3d19bb497762be99695a65e25897d36"],["2020/08/31/JS_0X07/index.html","5c59d4740979c51b211024576ff59466"],["2020/09/01/JS_0X08/index.html","e92a2e947cf430bca6e218aef30b6785"],["2020/09/02/JS_0X09/index.html","51df0ef454ae6dc727e6a0a2ea5057b0"],["2020/09/02/x86汇编学习笔记_0x01/index.html","5f6881d110f0a546400e434cab56ede5"],["2020/09/03/JS_0X10/index.html","05aec4f3139f90910660ae9e56acdd2d"],["2020/09/03/x86汇编学习笔记_0x02/index.html","978851c967e549e2c1a06c685d62419e"],["2020/09/04/x86汇编学习笔记_0x03/index.html","2ba1584b0531cb245a8c6e18651fe234"],["2020/09/05/x86汇编学习笔记_0x04/index.html","e57398cf6eb7543657f7b9c34076849f"],["2020/09/06/x86汇编学习笔记_0x05/index.html","28d380752456c992b260cef75c43ee9b"],["2020/09/07/x86汇编学习笔记_0x06/index.html","a9823dca29dfb95db4bce75838c5cde7"],["2020/09/08/x86汇编学习笔记_0x07/index.html","2e52bbbbd587e2370bbfc3c7efe79f30"],["2020/09/09/x86汇编学习笔记_0x08/index.html","9c21cb466a79b842dcd324ee8fc450c0"],["2020/09/10/x86汇编学习笔记_0x09/index.html","5d1a708b4c62a0f366bc02f3f1a238fe"],["2020/09/10/逆向-基础-笔记_0x01/index.html","8049e94bb4568ea38bf40f7ccddfe3d1"],["2020/09/21/逆向-调试-笔记_0x01/index.html","91e02a5cf6c17d097e197bd113871a2d"],["2020/09/26/x86汇编学习笔记_0x10/index.html","a5ed160696a48ab50de8475c4f6b2c2d"],["2020/09/26/x86汇编学习笔记_0x11/index.html","e7b4be0df6fa02f0f4011c9e3b5e65f7"],["2020/09/27/x86汇编学习笔记_0x12/index.html","c328eab798950aa5c4097ce3d5a83a6d"],["2020/10/01/AMQP协议0_1/index.html","5b8700081e6aa581b857e177a94eb9c8"],["2020/10/01/ARM汇编01/index.html","0a55fcf3ab73a41e4c335cef8154045e"],["2020/10/01/Andoird反编译01/index.html","abe7d533ef31066827fa72ac1a2e151a"],["2020/10/01/BLE协议01/index.html","8f053af96afe14a8ceba518b4bf57bf0"],["2020/10/01/CoAP协议01/index.html","9ba8e3fa35990041237d09d95fdc13ca"],["2020/10/01/JT808协议01/index.html","33883ca0fab19b81e53be577dc750872"],["2020/10/01/MQTT协议01/index.html","4bae3845c3ce4d3ccffc5b82f1da3e42"],["2020/10/01/NFC协议01/index.html","4d758c2411fe64603baeca715d6955f8"],["2020/10/01/RF协议01/index.html","c918d9391ac2b88ec81ebaf7971733ad"],["2020/10/01/Wi-Fi协议01/index.html","54e1597ab1d79027b96f27628eb66f1d"],["2020/10/01/ZigBee协议01/index.html","415f6058b3f92a6d0aaed1aeb6b6bdc2"],["2020/10/01/固件逆向01/index.html","c27f8323cff2463076de975a5db45e8e"],["2020/10/01/硬件电路构成01/index.html","6e74a941584de7d7d9718e98a720b2f0"],["2020/12/31/汇编指令集/index.html","00f2d0300f9efb763e6cbc1bec119ccf"],["404.html","022be4aca0aa77052bdc9c42c9487302"],["archives/2020/08/index.html","8d905f559937a8d6272e0334bb846677"],["archives/2020/09/index.html","4b01fbc502ae7f04df15a0da1fa9ac45"],["archives/2020/09/page/2/index.html","7dfc0d2e146d7d6c5fef70de3647a857"],["archives/2020/10/index.html","cf6fc5c502da5747d4dd3a60f5b28445"],["archives/2020/10/page/2/index.html","eb87b5f3e33a31148e685c240ef0ca92"],["archives/2020/12/index.html","bb7979739e5cb09eed44fc73b188348c"],["archives/2020/index.html","e3c7d23ae7472ed5f9c42aa13c8cc638"],["archives/2020/page/2/index.html","63b460cbf5912006c5696c666956b08d"],["archives/2020/page/3/index.html","bfbd27dd312f4e807705fed56566698e"],["archives/2020/page/4/index.html","5564cf331ad429a3f1aa717c44e1940c"],["archives/index.html","732efdd5789d0c16e79bc74591b94c6d"],["archives/page/2/index.html","abc83c6ac685713470bcfbb7ef0c3584"],["archives/page/3/index.html","17edc148ea77ebd3506c11894121d31b"],["archives/page/4/index.html","e87fc82f75f4a18312fe9497c11a6c62"],["categories/ARM汇编/index.html","dd33071debd67d13a224dd4211ea00c4"],["categories/Android反编译/index.html","2067741a8bbfe7743e8a51fd2293c643"],["categories/CVE/index.html","21ded26d04e1a7ccd533bbf693942486"],["categories/JS学习笔记/index.html","4151559a2b5eb52c8a2ef9df3fa63d73"],["categories/index.html","89b3cea548b738347613b9814b66c618"],["categories/x86汇编/index.html","9a7fb02b1569081b1160e581dbe104ba"],["categories/x86汇编/page/2/index.html","52a03b1512c6db5e87ef004ba6516c22"],["categories/固件逆向/index.html","09ac1f14114628ca323f10029d9a9581"],["categories/硬件电路构成/index.html","82fa16faaccc8c9d7568d3bb6673e823"],["categories/网络通信协议/index.html","0a9c402408d4f13bd2d278381e151c87"],["categories/逆向/index.html","4e0d2548a950ec418ee58d8e56ae106c"],["css/index.css","e190ce4fce7067c6a08b6350927527e2"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","fad64794b95201a24b13b4bc767f15ad"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","94e6e68b06f29f888902a0d07596ecec"],["page/2/index.html","a807d73dbef6be800a740868af31261b"],["page/3/index.html","b22ba938cf72d475bca85fc0efdedb39"],["page/4/index.html","d364c22fbe6f08ae84f68f65c57602b3"],["tags/AMQP协议/index.html","b8c82abf468b9b8943d5765a75c2bc8b"],["tags/ARM汇编/index.html","c19bcf9103f48cbc4ac8bb26b763bcda"],["tags/Android反编译/index.html","792a7dafd546c3c21112684b5648f8f2"],["tags/BLE协议/index.html","629386e2d61c2fcca92c03957e2c3041"],["tags/CoAP协议/index.html","f3ec5ff2553fd38d97cd14a0133e24e6"],["tags/JT808协议/index.html","7b55c2bfaa9f4a2624c3e627b9762682"],["tags/JavaScript/index.html","fdfb6161cbc9aa4783b3a3c4b79ba9d5"],["tags/MQTT协议/index.html","802f6071f02eaa264fc96b366ae4a567"],["tags/NFC协议/index.html","158171efcf311c424f199b17a3ae8522"],["tags/RF协议/index.html","c8ed27548cf4deb666ec8ad3775551a2"],["tags/Wi-Fi协议/index.html","7cbe9fb3b37f2c9cc3b2545ffdbe5e9a"],["tags/ZigBee协议/index.html","7b04269b9a4f07504d1a6add7d19cbbe"],["tags/index.html","8512b2994b37ac7d9b2ce2ae9ef248aa"],["tags/x86汇编/index.html","41bdc4cbc35555640b0a3ec91a7275a6"],["tags/x86汇编/page/2/index.html","9570fbd62bab2149310337c99a0241f3"],["tags/固件逆向/index.html","b56ffd26a66080acf39a9b9ddf8e8454"],["tags/漏洞复现/index.html","048698059c633679dc3f9b66664a0c0b"],["tags/硬件电路构成/index.html","1576ae3de61b5c3c9de1d37afe5d4664"],["tags/逆向（基础）/index.html","734699c3ed9a3f64b722917498e35991"],["tags/逆向（调试）/index.html","74b2d4943c4038b7028eb3e9461cd367"]];
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








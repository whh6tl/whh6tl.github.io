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

var precacheConfig = [["2020/08/23/CVE-2019-5418/index.html","18fd6491ff9e56883583453790456aca"],["2020/08/25/CVE-2019-9766/index.html","086c8c48c3bf4eb4d71c344d8769dd63"],["2020/08/25/JS笔记(0X01)/index.html","f4fb192aec819d0776077e8d23f8f49d"],["2020/08/26/JS_0X02/index.html","e4f121937638c08e9bfaeeb8800d00f9"],["2020/08/27/JS_0X03/index.html","e19d5fbdb05eba6406e9356f9887aacb"],["2020/08/28/JS_0X04/index.html","e115d7652d14ad0ed3d6d561f070dec2"],["2020/08/29/JS_0X05/index.html","9fd33a6ff0856df402f13d79e50e443d"],["2020/08/30/JS_0X06/index.html","161d390a5b7713e8492234ebb02831bd"],["2020/08/31/JS_0X07/index.html","ac63fdedf9982c96377222dfafb768c7"],["2020/09/01/JS_0X08/index.html","48a6aa246528f3d9de6ddc1b92c225a6"],["2020/09/02/JS_0X09/index.html","299299a5596fd1edf909cdb5f887d638"],["2020/09/02/x86汇编学习笔记_0x01/index.html","75b35cd1f58b6e80b558bc7c1ddfa94c"],["2020/09/03/JS_0X10/index.html","0c46400c79bce4b0acad840631f09645"],["2020/09/03/x86汇编学习笔记_0x02/index.html","b1f836907b1769e1e62684deb3d538f3"],["2020/09/04/x86汇编学习笔记_0x03/index.html","40fc6e04a9cd734421faf463436d6034"],["2020/09/05/x86汇编学习笔记_0x04/index.html","68345f97cf435dccbe0be9c2b8a0b2a0"],["2020/09/06/x86汇编学习笔记_0x05/index.html","2f916f7ccd85b9b0cb8fd8a771522e32"],["2020/09/07/x86汇编学习笔记_0x06/index.html","0f198b7bc498f73c7fdd7e1045f41ff9"],["2020/09/08/x86汇编学习笔记_0x07/index.html","9da95e50e1e3464c90c14841bc5d51c0"],["2020/09/09/x86汇编学习笔记_0x08/index.html","1e9817b702464bf9fec7a3a4a57f83dc"],["2020/09/10/x86汇编学习笔记_0x09/index.html","6cad37ae735d49cacfdb25bc86063909"],["2020/09/10/逆向-基础-笔记_0x01/index.html","6b1ca99fcc03983b2ba1801c61d9c0e3"],["2020/09/21/逆向-调试-笔记_0x01/index.html","7d1ea2d09446c00e8f06b017dda873d9"],["404.html","6d8bfb07a0af02545302e35417ac5fb1"],["archives/2020/08/index.html","fa502cf771b65cc435992fdd02b48b20"],["archives/2020/09/index.html","14bc66e425db98f60d8e64ac8779cc18"],["archives/2020/09/page/2/index.html","1acbe641da9e66903de7b0a8e9a213a7"],["archives/2020/index.html","a593678e40be05a64ea080f83781708f"],["archives/2020/page/2/index.html","a1e8c77cb6cebc3e40dcdfbe4d901488"],["archives/2020/page/3/index.html","4bca5101036037fac59a642590eea52b"],["archives/index.html","4d49ea288677f5466039ef91ac7f4013"],["archives/page/2/index.html","c6d157f25406936ac420cef5f86bf5e6"],["archives/page/3/index.html","454b390338bcc8fdfe741b2c1d64abd1"],["categories/CVE/index.html","51fa745133ca53c2855115060af90d19"],["categories/JS学习笔记/index.html","5bba7dc875015e333fe1305a7f2d98d6"],["categories/index.html","23c823946cc460c6616c856a25dca0e3"],["categories/x86汇编/index.html","3fe2802aa3680f8fe9ce41b9d3683801"],["categories/逆向/index.html","74003bfb628bec07d5b5a870df371e1f"],["css/index.css","e190ce4fce7067c6a08b6350927527e2"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","f4d7ca9229d5b5937712dfdabaec7797"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","91b4acb572dc8f80c3004d06c3f7ad77"],["page/2/index.html","df994a6d7392cc99bdf7ec113685322f"],["page/3/index.html","cd921a00870c00859839639fd4d194cd"],["tags/JavaScript/index.html","a531ed7af8955174edfcd6a112af9dc0"],["tags/index.html","25b5ba3b43d76f5a81c27d04d9d525a0"],["tags/x86汇编/index.html","2f48b382484e94593328edab62b0bb13"],["tags/漏洞复现/index.html","84ba04f2affbad4838915357ea6be0c0"],["tags/逆向（基础）/index.html","cab1b8d878f3ba930497544649090982"],["tags/逆向（调试）/index.html","29c1baf6b32d4d3ce52523069c08b29a"]];
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








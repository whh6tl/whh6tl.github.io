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

var precacheConfig = [["2020/08/23/CVE-2019-5418/index.html","18fd6491ff9e56883583453790456aca"],["2020/08/25/CVE-2019-9766/index.html","086c8c48c3bf4eb4d71c344d8769dd63"],["2020/08/25/JS笔记(0X01)/index.html","f4fb192aec819d0776077e8d23f8f49d"],["2020/08/26/JS_0X02/index.html","e4f121937638c08e9bfaeeb8800d00f9"],["2020/08/27/JS_0X03/index.html","e19d5fbdb05eba6406e9356f9887aacb"],["2020/08/28/JS_0X04/index.html","e115d7652d14ad0ed3d6d561f070dec2"],["2020/08/29/JS_0X05/index.html","9fd33a6ff0856df402f13d79e50e443d"],["2020/08/30/JS_0X06/index.html","161d390a5b7713e8492234ebb02831bd"],["2020/08/31/JS_0X07/index.html","ac63fdedf9982c96377222dfafb768c7"],["2020/09/01/JS_0X08/index.html","f672c15ec8f35a811cd81e8c4fa47883"],["2020/09/02/JS_0X09/index.html","c41fcb0bf80c6191b786284151e07d80"],["2020/09/02/x86汇编学习笔记_0x01/index.html","20784faac094987841eba1964cdf7ff0"],["2020/09/03/JS_0X10/index.html","d01dad8fad13e6c9b1c13a6dba7b2b13"],["2020/09/03/x86汇编学习笔记_0x02/index.html","c28832b7992bb1c1de57375224d4b2de"],["2020/09/04/x86汇编学习笔记_0x03/index.html","d5efa2037b95dd64388e6ab02cd92a19"],["2020/09/05/x86汇编学习笔记_0x04/index.html","a5ad219d3d112a16f2672517afa1001e"],["2020/09/06/x86汇编学习笔记_0x05/index.html","dfceddd52c183c9d349436218daf7060"],["2020/09/07/x86汇编学习笔记_0x06/index.html","0fb8f9d9e338b5c4826851d9a0805702"],["2020/09/08/x86汇编学习笔记_0x07/index.html","07caefe69f4cad6bb7c1c608c5002ced"],["2020/09/09/x86汇编学习笔记_0x08/index.html","3ef6ebef7542ac5a8b2f66f6f9be4553"],["2020/09/10/x86汇编学习笔记_0x09/index.html","deeac6d68ed3a7f224dfc48944fcb1f5"],["2020/09/10/逆向-基础-笔记_0x01/index.html","78b28354940068b8d2217842ecc91e4e"],["2020/09/21/逆向-调试-笔记_0x01/index.html","ceb5580116b970bc5d1aba2bd711eab1"],["404.html","89bae12c113f54df37d94bec668c7f00"],["archives/2020/08/index.html","1bbe0a39945a6ccfe6b2327b2ef9d85e"],["archives/2020/09/index.html","acf79aab45055b4352f6f1fe54b8863e"],["archives/2020/09/page/2/index.html","95bf58be217b8e7c9d060ca5e0166850"],["archives/2020/index.html","920195122199b5dd48678455947b0c5f"],["archives/2020/page/2/index.html","4c9358c951fded57e766057def769387"],["archives/2020/page/3/index.html","ce9f199c28a50c7c47c561622ebc4f4f"],["archives/index.html","9531390a6288e13c15c39064c36b9cb8"],["archives/page/2/index.html","a73f2615d8866a18a2519a374eabc3c9"],["archives/page/3/index.html","3a86ab367a33ff1ccf4f81f09035772d"],["categories/CVE/index.html","5135adfe9f19c9013d4021e7f38843d2"],["categories/JS学习笔记/index.html","9527d05c917a010b2bc6f99dab718671"],["categories/index.html","e1a02044b5488eb03e5b2302e8131e23"],["categories/x86汇编/index.html","c3c6092d6ba760aa74d995d37278fdcc"],["categories/逆向/index.html","8c67caf99cae6e66f2d4416551189c7c"],["css/index.css","e190ce4fce7067c6a08b6350927527e2"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","f6f805467c1e55709ab1ed1e8152cedf"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","334c822ff8d1650d86d9e664ab79ae42"],["page/2/index.html","691817c268095c321151e831fba3dd4b"],["page/3/index.html","df0319f5862c710b407565cbc54fc243"],["tags/JavaScript/index.html","a6af7cf1840b9498419b1d1516fad9e2"],["tags/index.html","fa168f661733fa885c0cf1cccb0e9281"],["tags/x86汇编/index.html","845ed9138ad63edcaed60bed7346a534"],["tags/漏洞复现/index.html","3c1717eaf3f6c11c05b63eb04c3d917f"],["tags/逆向（基础）/index.html","f862079e416323950c29fe208843e55a"],["tags/逆向（调试）/index.html","76bc9c6b8a834cda9564a34d33d3d34d"]];
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








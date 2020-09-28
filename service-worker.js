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

var precacheConfig = [["404.html","f1b0f4e3549624d99fde70731da29495"],["AMQP协议0_1/index.html","c1105caaecf8c090abdba873fc3ef4e3"],["ARM汇编01/index.html","61cbbd98e383cecece5db1709baaacbd"],["Andoird反编译01/index.html","a480859561bc42eddf32ae3377b57b9a"],["BLE协议01/index.html","0dbe81d0110b11928ed4f5101ebf4282"],["CVE-2019-5418/index.html","219c21f549107bd58749c78dc2f0285f"],["CVE-2019-9766/index.html","31d373b30389d4364d1c52a732b5b8e0"],["CoAP协议01/index.html","7eaabbc211a81546bc629a35a7a0e848"],["JS_0X02/index.html","7bd4f6e6adf2b3511518271bca9cdcd5"],["JS_0X03/index.html","ea9328a3eea8da3418c0fe370d5be810"],["JS_0X04/index.html","d37c70419ed80c933d1f43d913ebbe6a"],["JS_0X05/index.html","a749f87f6356599858674ce5bc9269eb"],["JS_0X06/index.html","973323b4a594e8c159197a749442c3b6"],["JS_0X07/index.html","4156610d39432cd97e521225cdfb4a1b"],["JS_0X08/index.html","2b4c312e475390d2e6e869eb62c31c1b"],["JS_0X09/index.html","7f980a0340917c2d9ac5a7df91b210f6"],["JS_0X10/index.html","7408539d61905f7adb51168b347a81c9"],["JS笔记(0X01)/index.html","a4372abbf9a4da573cf4ec5aae34ed56"],["JT808协议01/index.html","8cf80fb0c3cdb0bae61ec31dcc5c661b"],["MQTT协议01/index.html","91355c1c6d7171f45fa0b649cbb6d34b"],["NFC协议01/index.html","ffb3a398165bdf7e5007a18011b6cf62"],["RF协议01/index.html","4d172b1bb7730652858f1d6946c662bf"],["Wi-Fi协议01/index.html","12eb760a699f1d4296c4ef383c3a56fb"],["ZigBee协议01/index.html","6209355ecfc087207da33f06f4d0dc63"],["archives/2020/08/index.html","7c05e7b8c4bebf0e30360d22a7aa2818"],["archives/2020/09/index.html","5a4fade20b10685553907557d26f44ce"],["archives/2020/09/page/2/index.html","991b9fcffca61b0e43e77ce0426481d2"],["archives/2020/10/index.html","104ac450090bcfa6fdd33ed69070c056"],["archives/2020/10/page/2/index.html","6f783f4d1e04b2906fc58a7aa5c8ee16"],["archives/2020/12/index.html","fea842f0b8a5bed196e610f8e1a66bdd"],["archives/2020/index.html","553c5bc9dfe2d30615017e3e4e209569"],["archives/2020/page/2/index.html","3632050287ee4e2e7f8fe9c09c7eed8e"],["archives/2020/page/3/index.html","bba04c706b4aeb7ef5691bda456009e9"],["archives/2020/page/4/index.html","b12d02f749ad77e93d5b67460b70e4a7"],["archives/index.html","d0f45209cfe5a1e941d3482956122423"],["archives/page/2/index.html","7d1f8298aa90a1adb0a05ec8cf3b4aa9"],["archives/page/3/index.html","718c8ffff2452dd211bfe64d5e4b4ef3"],["archives/page/4/index.html","f702153c8614f5bb431d5226a885a3e3"],["categories/ARM汇编/index.html","ebc5393a3c87e53172be4dd994c5d952"],["categories/Android反编译/index.html","8188691c285771e15df4d186c7fd6334"],["categories/CVE/index.html","0cdacc81eef5765fa6f5847b14859a3e"],["categories/JS学习笔记/index.html","3a891d6c3ee02f9d8cf7e7e8f6efa5c5"],["categories/index.html","baeb0e431de677c08497dcaecf6948a8"],["categories/x86汇编/index.html","6b12f7b006b0917cf5114c365eeb5538"],["categories/x86汇编/page/2/index.html","24323f0b958ed98ed06aacdc25f2a678"],["categories/固件逆向/index.html","3ef2cbbb7e83b4279924dba67eda6c10"],["categories/硬件电路构成/index.html","5770d429de2ca0b272ba476e08a984b5"],["categories/网络通信协议/index.html","5ae6c49810faec56271867ab90a4491d"],["categories/逆向/index.html","a5e1584370f25a6bc49c28e349eda522"],["css/index.css","e190ce4fce7067c6a08b6350927527e2"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","167d6f0a7aec6ed5f4a91c227235c22b"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","8cf23ad411cdb504a5e899440e5aaaaf"],["page/2/index.html","a9b7cda2a71a534620da6417b65dd229"],["page/3/index.html","fb3a29c89ac77d4b661c3fae08a62193"],["page/4/index.html","4b4f6b7adda55d4912deb7ac173c272c"],["tags/AMQP协议/index.html","19054ae9d269b3a2fc4b7bb5432bfa6a"],["tags/ARM汇编/index.html","c6e77a56a4135a148b3cffada534a126"],["tags/Android反编译/index.html","f24b0d146c627dc5bd177b282d02b7f7"],["tags/BLE协议/index.html","1ab68bb88bef9a07f5977dc76a421baa"],["tags/CoAP协议/index.html","0e5bde0cda4cddf708f19a9b6ed53dc9"],["tags/JT808协议/index.html","db557d433270c2e310761d0de0f35a42"],["tags/JavaScript/index.html","75045024538db6e7004dc35af212e83d"],["tags/MQTT协议/index.html","826bf77aeb27ebe151e162eaf3a6a3f4"],["tags/NFC协议/index.html","03670f12b2e528bc6c0d5ba4fde55d92"],["tags/RF协议/index.html","a6237cf1f3e30d12b5952e05fe0c572c"],["tags/Wi-Fi协议/index.html","25cfb3a86aae80683a12e46ca97021cb"],["tags/ZigBee协议/index.html","687969f0720ae1af4a313f961c316537"],["tags/index.html","07708f4232961b239ee99e51a63fe5d5"],["tags/x86汇编/index.html","2b90aa1930d7d331762e323ddc45d69c"],["tags/x86汇编/page/2/index.html","ab0d4ae922e5c48aec47e6fbfd5916c3"],["tags/固件逆向/index.html","f0f91c5975bf94f5e6190348a6d26a0c"],["tags/漏洞复现/index.html","7ea395e5bb6faedf6335da8cde4fe930"],["tags/硬件电路构成/index.html","c3b64729a41c0a3b49e4d1538782a3a5"],["tags/逆向（基础）/index.html","6fea60932b88c6fb1c9ad7596d53efae"],["tags/逆向（调试）/index.html","be3ff180b4b8b62de2cf9a1c6ccb49cf"],["x86汇编学习笔记_0x01/index.html","a125cb16e2dfa9bd0e8275b6ebed8308"],["x86汇编学习笔记_0x02/index.html","ba16c80b3dc38fcc471afefc8d9914da"],["x86汇编学习笔记_0x03/index.html","1bad2d5a2a61fe973f56d49c80a36233"],["x86汇编学习笔记_0x04/index.html","056208d4716084f6a74d96bb5b7a69ae"],["x86汇编学习笔记_0x05/index.html","20f1cae8573353ff4f83e411f06fb47c"],["x86汇编学习笔记_0x06/index.html","7603526b5f69a59a4138a349e6fbc7af"],["x86汇编学习笔记_0x07/index.html","e0fee86b48edac85868c1a21f0ae7d8f"],["x86汇编学习笔记_0x08/index.html","9e526c33603feecb5e47e9b27a420596"],["x86汇编学习笔记_0x09/index.html","76fc21710eed91e303da640d5e6f3c4e"],["x86汇编学习笔记_0x10/index.html","59a3c996ede483638addffc1e5bbc7a1"],["x86汇编学习笔记_0x11/index.html","92a0fe7f63c5234f4213724aeade4fd9"],["x86汇编学习笔记_0x12/index.html","da0f7b0d28184c30ce3ebfae1f9e2dde"],["固件逆向01/index.html","26df17b7788c2aa882beb58a4ab5128f"],["汇编指令集/index.html","66cd99a1b65961e79f68e94112990f44"],["硬件电路构成01/index.html","dfaf32401d3b6e31a7e1b0b17edc8fb6"],["逆向-基础-笔记_0x01/index.html","92b88954fabc66b6a4b1d06e096dfa05"],["逆向-调试-笔记_0x01/index.html","10bc4f913885ef3a625d1f6c57e27030"]];
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








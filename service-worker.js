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

var precacheConfig = [["404.html","d9fc2ea95bf441aedf1ffa52501b2c70"],["AMQP协议0_1/index.html","7a5e0c6207f6479ce824846518ca6b20"],["ARM汇编01/index.html","296a16b68d0a486cfbdf2f585c7082bf"],["Andoird反编译01/index.html","368eb76eaef9aeeecd80d18b692faf74"],["BLE协议01/index.html","7b59e9bf8df24c86555e96ceec5a6163"],["CVE-2019-5418/index.html","819063b9d3346303d53d0983c3662cb6"],["CVE-2019-9766/index.html","737e0dfe3d256771646011a506f0de19"],["CoAP协议01/index.html","23133254acec25587bf4f876cccd6709"],["JS_0X02/index.html","97bb0d369a8851462cadbdb7b22fd576"],["JS_0X03/index.html","ae235a59362da3905105160ae0d78af3"],["JS_0X04/index.html","a562213447a21bd92aca0b320a7883fc"],["JS_0X05/index.html","361a75a94b63ba8783e3bdd4bf2e794c"],["JS_0X06/index.html","0a8e10cf2c2c29498a091e41e10cc646"],["JS_0X07/index.html","f90a147abf2197447ee671bb2ed635b0"],["JS_0X08/index.html","1df953e233c232bd11d615e43909a4c3"],["JS_0X09/index.html","545d4184424c5a6162a3b80b30194bd3"],["JS_0X10/index.html","09051fad7283737f229696b83617b2b2"],["JS笔记(0X01)/index.html","b5b172cdda2dae46ccc0c5c19291406d"],["JT808协议01/index.html","474bb5e0cadfd2f0e4b42cc53694ce6f"],["MQTT协议01/index.html","262e1a8b8cce7564587d6018eece2367"],["NFC协议01/index.html","63a9f2810158b00f2f2ad58cc98f2726"],["RF协议01/index.html","4a1802308f840d9ce940286cfb2ef0ec"],["Wi-Fi协议01/index.html","6fcb1364b90a7709e7f274c8b1dc977f"],["ZigBee协议01/index.html","3c40689c89f5bbce60a19479c34f6110"],["archives/2020/08/index.html","97696bbedf7139f8c219f7e0e9fbbb5d"],["archives/2020/09/index.html","b05a2272de8d8fcf547a778201e36fd2"],["archives/2020/09/page/2/index.html","f53adceac06a279920175d3d67aeb2b8"],["archives/2020/09/page/3/index.html","4c11f8c66747bd4d67846fe3532ec95a"],["archives/2020/09/page/4/index.html","d7e201726b134c520c2780787a5b5158"],["archives/2020/12/index.html","799ef2ad69540eb70c727df710993137"],["archives/2020/index.html","492f2a710b3c5ca4f0a63deda7e169f9"],["archives/2020/page/2/index.html","c674bb5b815709dfdf8e69227b82fcad"],["archives/2020/page/3/index.html","043358d668ec980aca965bc0a2a0f752"],["archives/2020/page/4/index.html","036afaf763ecc375c2178da29f95f52a"],["archives/2020/page/5/index.html","31cd1d9f3ac0afb505e1b4de799d0dca"],["archives/index.html","96f8118016cec4f03e2117caf4dd6d64"],["archives/page/2/index.html","64a567b7d471c5d806b036a9b382a5f3"],["archives/page/3/index.html","1208a17ad1ea88cf6119ff9fa158a595"],["archives/page/4/index.html","fc066c9b6ae1a05b2ac73d38939960d7"],["archives/page/5/index.html","4bcf971ae6378c23bf9ce83576ca8828"],["categories/ARM汇编/index.html","370c9db9eb47fd8f14045ffa90cf8174"],["categories/Android反编译/index.html","2f33db04ffed8ad530082e9220d3e91a"],["categories/CVE/index.html","2e0b72d6a350029a37b826d16cd4cfcc"],["categories/JS学习笔记/index.html","adda4e4956906901406f720838ec2668"],["categories/index.html","914744a7e2126d890fb24f54fa3a1560"],["categories/x86汇编/index.html","9955d3f64b8acdb651193244daa028ec"],["categories/x86汇编/page/2/index.html","2696bcf84f40dc6b6b4a00df4858a257"],["categories/固件逆向/index.html","7b838a71412017036dc4146d210f8832"],["categories/硬件电路构成/index.html","f05a2a355a6e4f55495cabbb2a51eaff"],["categories/网络通信协议/index.html","9971b6181016077c06a389d68d9c3554"],["categories/逆向/index.html","a12a6fd7fc727910dae71e393c1d031b"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","8171a06e5bf3c1f0acfee174e3fc1164"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","b98b0404342850684bdda4b5e01a7d88"],["page/2/index.html","2cb0adae16013166f6403746300414c8"],["page/3/index.html","c2048367d1ec813dd3edbf998c443b0e"],["page/4/index.html","75d8e4b5b11c3d99fb76a9c6dd46a1ed"],["page/5/index.html","e9618d2e94e0159b0a7c9f7f100b854b"],["tags/AMQP协议/index.html","7aeb4de0ab10386ef2c9af064ac6d5b5"],["tags/ARM汇编/index.html","c938d115e3f4eb1238da5f66f658972e"],["tags/Android反编译/index.html","a6b1cec731439c1b25b392accbaabc19"],["tags/BLE协议/index.html","6e873026f207c2de35ea0a2e8a909afa"],["tags/CoAP协议/index.html","0d75b3292670a79b7d1aee33b2bae46f"],["tags/JT808协议/index.html","ba31abf9f1eb66570c6f7e69c179cb6b"],["tags/JavaScript/index.html","4bfac217ce0b43776ad72f27438552cd"],["tags/MQTT协议/index.html","88f153e6a2d815bc3fb1baab45f93d70"],["tags/NFC协议/index.html","bfb08b312d51a36d31e4624f66932433"],["tags/RF协议/index.html","87eeee70b5e6d3ed9d7b31871476790d"],["tags/Wi-Fi协议/index.html","b876678acbeb546c2120af2fed93432f"],["tags/ZigBee协议/index.html","2edf99420160ebcdf8b8f7ab1cd212f5"],["tags/index.html","5b7f7424647cb2b5f9c30ee9ac0fa3e0"],["tags/x86汇编/index.html","0a91ea5d1af5edb17a33e2ebfea7c276"],["tags/x86汇编/page/2/index.html","3af801fa9aa2f290a6873b2fc3657e0f"],["tags/固件逆向/index.html","693b11a1579c55ff2002f814fafcf377"],["tags/漏洞复现/index.html","4154b216afaa72dcfd3bd4e5d8669764"],["tags/硬件电路构成/index.html","1e0e9e57d2483056190607aa64b43379"],["tags/逆向（基础）/index.html","af0c13c5758418904baac44416a51612"],["tags/逆向（调试）/index.html","efe25d66c1c54cdabaf41256afb1717e"],["x86汇编学习笔记_0x01/index.html","7d19f4057f7ce9effdaec08eb9bd82c6"],["x86汇编学习笔记_0x02/index.html","05c71389a6b3849ba2b5dd218c86f8e4"],["x86汇编学习笔记_0x03/index.html","b435526895946ae4f055e89275939b88"],["x86汇编学习笔记_0x04/index.html","b2b8e1c2e4c0129ecad8ab7d7cdd5691"],["x86汇编学习笔记_0x05/index.html","6d890dff6f4e86c3e1a9835f47aabc55"],["x86汇编学习笔记_0x06/index.html","410fc141206f600dd746bfbd1026467c"],["x86汇编学习笔记_0x07/index.html","1e484ef9a7160eb885ceba3b12c5a37d"],["x86汇编学习笔记_0x08/index.html","eff0e0eb5fec318bb233ac9db33a544c"],["x86汇编学习笔记_0x09/index.html","3ef3f81c905215d6cc68563a5003d61d"],["x86汇编学习笔记_0x10/index.html","c8f5792d359f6f372f1340529683ab8d"],["x86汇编学习笔记_0x11/index.html","77d8e15b0bd6a45aa5918ee77cca6eb7"],["x86汇编学习笔记_0x12/index.html","ec9178928ecf80ddb8a9361b1f305369"],["x86汇编学习笔记_0x13/index.html","12f9dc88a60cc80051d42063e015244f"],["固件逆向01/index.html","c35e5cea2e079c835f148b48804a9009"],["汇编指令集/index.html","fa65cb4c35d5f66387bb8324dd4129df"],["硬件电路构成01/index.html","b80e5640f1a9ec37d0e7e5a56c8265bd"],["逆向-基础-笔记_0x01/index.html","b35e43eae505eedea1f4bc9babacbeca"],["逆向-调试-笔记_0x01/index.html","5fcef1ec0f608f44f881e26326522665"]];
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








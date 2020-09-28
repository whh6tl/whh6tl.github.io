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

var precacheConfig = [["404.html","e8965e9396a12391092fec53cf5eb6fa"],["AMQP协议0_1/index.html","0cd1848ce66df3d37cacf5fd444bd8a4"],["ARM汇编01/index.html","0e9cfe8fd6e160eb80deb08558b36d69"],["Andoird反编译01/index.html","2fd1422ab763d021f6b49bfad9acdcc8"],["BLE协议01/index.html","c86cc17bed81cfa1020a8c0cdd9943fe"],["CVE-2019-5418/index.html","06631ccf59b992145bdc795197f994a5"],["CVE-2019-9766/index.html","4d977202346284b296ab5836dd1ed71b"],["CoAP协议01/index.html","085aa641866c88b6122786f47227f5ac"],["JS_0X02/index.html","29540c76585dbd693416aac28a1a6f5f"],["JS_0X03/index.html","cb4a2b9d9300a8474228d94467f4a37c"],["JS_0X04/index.html","9e4fa213a4bf57d215b161d8f5c36fe3"],["JS_0X05/index.html","24227199a859731cfa3b376f4f5b3ee6"],["JS_0X06/index.html","dccaf71e386690f30d8edb3b3dfe6826"],["JS_0X07/index.html","576ea9ca1567f5cf075829a2e1c1c232"],["JS_0X08/index.html","5122c387b1fffb296b32535065dd46e0"],["JS_0X09/index.html","3234881269cd30064485190af0cd73e9"],["JS_0X10/index.html","2b9b2a6f212ecc818efac9cbf5f4e981"],["JS笔记(0X01)/index.html","53d2f8004c0b619f3ec5671ef5d78111"],["JT808协议01/index.html","59056fbb084090c80add36ec09fbdf72"],["MQTT协议01/index.html","212b47160df82fde3c08269ea00c411e"],["NFC协议01/index.html","bf5e6009509efbb939c3381202fdca5d"],["RF协议01/index.html","49e30f9bb69a00971f2eb00cf98145ce"],["Wi-Fi协议01/index.html","be74115b9854739e4ffff3daf5794c0b"],["ZigBee协议01/index.html","d4cc771a261d8c6a31fc625c9897d823"],["archives/2020/08/index.html","52de078f68190a5cb4bfa61c363dea82"],["archives/2020/09/index.html","5a04e60839971a2af0afe4256ee674a8"],["archives/2020/09/page/2/index.html","6efebb52bddc97548fd9ddc8cfc74286"],["archives/2020/10/index.html","ffd212231b083c4516f7c433c9335808"],["archives/2020/10/page/2/index.html","31d6eeb6fcdaffe16db6f317f18a189c"],["archives/2020/12/index.html","7fd1f2f42a153d966c3b36bd25522e5a"],["archives/2020/index.html","f1648f4c19b77fcd6b2bbfce4adb7537"],["archives/2020/page/2/index.html","59b03ea50bad7d6b9220676a1994ed41"],["archives/2020/page/3/index.html","08edb1f24187a5410f32ea74f1091293"],["archives/2020/page/4/index.html","b407700aae0500e88072724d9d2b77bb"],["archives/index.html","9a5d3f0f264627e0442dae85943d96aa"],["archives/page/2/index.html","4eaedc5c568d6ee94548639367328b28"],["archives/page/3/index.html","07c9683d2f7f6ebb68dab1a8426c2be7"],["archives/page/4/index.html","21d15fb4acf61df20ef81855431a83c9"],["categories/ARM汇编/index.html","92767dda232528ebf39d3da37378f913"],["categories/Android反编译/index.html","dd7a519348abe03690f7a76c9631d2fc"],["categories/CVE/index.html","a0eebfd2a6085c32ba1d2323ba5986cd"],["categories/JS学习笔记/index.html","d73d05a741ea59cb23b524f6adac03be"],["categories/index.html","380fda3f9f960e7dcc41b922a1623ce1"],["categories/x86汇编/index.html","611855c5f2b74bc3838e8bf5226c6e79"],["categories/x86汇编/page/2/index.html","31eb2da0b92f042ebcfe06d7ca5c7d9c"],["categories/固件逆向/index.html","16f540a5a8e2ff9a609eee24c87277de"],["categories/硬件电路构成/index.html","808758a1c5aac2116689e36cde2a1ffa"],["categories/网络通信协议/index.html","571ae7012fdb1bff91eb32d09c7d5bcc"],["categories/逆向/index.html","7565636aa62572fc659ff204a1756de6"],["css/index.css","57ddfe330d43d455a741d80564941694"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","2e2bd76e4314fbbdd73a5f6718baea38"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","a7092d0168a35ae8e3a33dfed1f6a48b"],["page/2/index.html","ab8b47550a794c563469cd32dafa538c"],["page/3/index.html","0bead5b58de0e77977e2111e7a5a07a6"],["page/4/index.html","dcb1dff2a4dad7ea72675b6d6f1eafdb"],["tags/AMQP协议/index.html","d3134bf9c85264c7b2db145904bf646d"],["tags/ARM汇编/index.html","40c99f667bbf72d2ccd6d2280a260998"],["tags/Android反编译/index.html","91ef35fc6e4d2284b0d437f8e1e6b307"],["tags/BLE协议/index.html","86b15f630a9a8047e280f621a2696295"],["tags/CoAP协议/index.html","120f024f3f07a4bbff6b7b0aeacbd819"],["tags/JT808协议/index.html","a3ab3eb7d8461262da4899594995d884"],["tags/JavaScript/index.html","310f74e75aeede82e2660e19a1c0bfa4"],["tags/MQTT协议/index.html","c921e410268550c9339d5fff5787218a"],["tags/NFC协议/index.html","fce08b4f3e96f0d48406f465b54c804b"],["tags/RF协议/index.html","5233a3631c32377d49403543b9f9ea01"],["tags/Wi-Fi协议/index.html","b39700e9f80778e55b12bf991d50c66d"],["tags/ZigBee协议/index.html","d4ef2a97a76b20c769b48fc9dbb4f6a9"],["tags/index.html","658e15d5756d78d1e8163c475a402013"],["tags/x86汇编/index.html","f5f7e31cbfec91d52771aeb9b6a97262"],["tags/x86汇编/page/2/index.html","e50db121bdcd67e2c7a9385484d873ea"],["tags/固件逆向/index.html","85969b768f7b7f0eadf397fd9657cc89"],["tags/漏洞复现/index.html","b305ab118813668ff63b449d30c7e350"],["tags/硬件电路构成/index.html","330a9c65c0f93d3ce86c9f42373512bf"],["tags/逆向（基础）/index.html","8a3e30c1b0694dbc652b18352aa125a3"],["tags/逆向（调试）/index.html","d0b632da717ffef6143ef8ed4f1ecaef"],["x86汇编学习笔记_0x01/index.html","cb0e50bcd8c108bbb7500ef35407cb13"],["x86汇编学习笔记_0x02/index.html","7662624dc311bcd52d619dba24e786cc"],["x86汇编学习笔记_0x03/index.html","91974a62080abe04ce14a73b39d25f1c"],["x86汇编学习笔记_0x04/index.html","e119ff830aa7c2b51c8a0e6b02fc87b7"],["x86汇编学习笔记_0x05/index.html","1103a382aefb15f695f4747251b2e61c"],["x86汇编学习笔记_0x06/index.html","7e18022d1c90cf21c1a96160b6d002dc"],["x86汇编学习笔记_0x07/index.html","78af628937370e651178a248431e2f46"],["x86汇编学习笔记_0x08/index.html","a69e24e57fa4a97ea059ea11247b810f"],["x86汇编学习笔记_0x09/index.html","94cb25334fc866efe63205806958c735"],["x86汇编学习笔记_0x10/index.html","53b70dda2c4ed1e5e3cc4ce7686d98c8"],["x86汇编学习笔记_0x11/index.html","13e01c305575d8fa71cda5409e611489"],["x86汇编学习笔记_0x12/index.html","5d3b4f240a52344d97e741fc93b14d8a"],["固件逆向01/index.html","ff67fc4e14c5b31cbf1c202a766c672d"],["汇编指令集/index.html","8408392e4dcc0571142d21c73a80dc23"],["硬件电路构成01/index.html","bdaf6c7feb9fe41a4072e1ad48aa85cf"],["逆向-基础-笔记_0x01/index.html","9b1a502225dbe6c76c0b47a8a9339272"],["逆向-调试-笔记_0x01/index.html","36566f7ded362908049545a63385021d"]];
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








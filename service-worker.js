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

var precacheConfig = [["404.html","e3651581b12db27e02dccd9f636a5036"],["AMQP协议0_1/index.html","88b5aa5570280bc533e8073b0ad36d33"],["ARM汇编01/index.html","6122f76ea4e44bf67dd8497c1c9cbbb9"],["Andoird反编译01/index.html","ec3f16b0c3f173dc168c33c47f54dca7"],["BLE协议01/index.html","b4cf7413e79f001fb4c83ad2bcb70690"],["CVE-2019-5418/index.html","53fa0f13e03e3b435e890dbde23ea871"],["CVE-2019-9766/index.html","721513abd81df72b8e98232fb085beca"],["CoAP协议01/index.html","8fd229677c93472f162649e744e1a972"],["JS_0X02/index.html","f6912ab614de246630a6470d01dd7a76"],["JS_0X03/index.html","a9584aae6c86eefc42a04fce899246eb"],["JS_0X04/index.html","a9e9089f9b1d7fb38a6d863bcfe52a62"],["JS_0X05/index.html","0761e72fc98651a8241544f5d8c0ad8e"],["JS_0X06/index.html","9ec0e6696e9d06d949116dbe031bfb76"],["JS_0X07/index.html","6cb5bfa53949e7a495eb32a103027adb"],["JS_0X08/index.html","93b8d20524f7a6a3cf542756e8fa481e"],["JS_0X09/index.html","d40ee96c165e60ff3775f6a3abe8d2e5"],["JS_0X10/index.html","f1b89d471bd53fe929acfc6f1ac7a84b"],["JS笔记(0X01)/index.html","c97996884a62ad3dab906c0d66ec4c24"],["JT808协议01/index.html","093c8d579df362b711e8f1a4d5a02ac2"],["MQTT协议01/index.html","f7781058e808f79e41e0e336dd14b832"],["NFC协议01/index.html","0da7bd92ec21b823e4de3d5d3dd95335"],["RF协议01/index.html","3fdc002b2cb2d275ae860a5e1ad6e904"],["Wi-Fi协议01/index.html","97127e801fbe7f39f8d1d216d34d8738"],["ZigBee协议01/index.html","afdbad6c57e13ed23fbd299058343404"],["archives/2020/08/index.html","3624d78f9a2140659e4a8688a9602c3b"],["archives/2020/09/index.html","31f78a4d7f361ce4aae043b59b57ffca"],["archives/2020/09/page/2/index.html","dd94de9ba2cc38782db4474091d9e0fe"],["archives/2020/10/index.html","6a0f1c123bc46824fd6af6fe5af25216"],["archives/2020/10/page/2/index.html","5247b5e564c475aa934f6c5803586e82"],["archives/2020/12/index.html","a04aba9f650e4e2d5176796b43cff8dd"],["archives/2020/index.html","66b34bf704ebc99a9358d198aae55253"],["archives/2020/page/2/index.html","55a2f2b2da46f0271a7e77218fc85b2f"],["archives/2020/page/3/index.html","b218daa1c15bdf67d038496b51e1ab95"],["archives/2020/page/4/index.html","02d2a58cba7ea20010cea5650cd6b98e"],["archives/index.html","7c9349c71f59bf07b69d84bc29ef8699"],["archives/page/2/index.html","70a9d76c589cab4b23e4cbad7c69a1cf"],["archives/page/3/index.html","5bd4daa3595424607bf7125c108789d6"],["archives/page/4/index.html","60e10f251cf996399fd0654cb059a2a8"],["categories/ARM汇编/index.html","19ee21a149ea0039385753ecc0b30e55"],["categories/Android反编译/index.html","4dcbdc48ab11cc4f3f7f0da76e8f4b70"],["categories/CVE/index.html","de3f8bac0593523ef17f9e3e961397da"],["categories/JS学习笔记/index.html","a5320ae5d07ac2a9f5a8c78ad84a0150"],["categories/index.html","ae48c88f8236f9c5a3cabb87d1c4e314"],["categories/x86汇编/index.html","07afe09aa5fcc7f51b4a5c8482dfbab7"],["categories/x86汇编/page/2/index.html","5474d15c765153d43347fe03c49e6d0d"],["categories/固件逆向/index.html","bd814653effee093fda279a3a563021c"],["categories/硬件电路构成/index.html","0b93ebd0824daa06c75790cb998c7f0b"],["categories/网络通信协议/index.html","43ddc3c399cc6c25af69980dd570970c"],["categories/逆向/index.html","afc04b95e39bf1a36121a465b07d799c"],["css/index.css","57ddfe330d43d455a741d80564941694"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","37bfbc5737ac1c16d3ad33ca5447f019"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","2bd6cfbd187516a5667e8eafbf4e93ee"],["page/2/index.html","47f1113d32b82bf2d08359cda4332774"],["page/3/index.html","e01fb83c83baf9152ee4bbc0559cb71e"],["page/4/index.html","21cb8bd125e3f911d4fe18d10280a6d2"],["tags/AMQP协议/index.html","4cdb947340d571bba16bc951a410da70"],["tags/ARM汇编/index.html","d1843369ce8e58beb46803989a157377"],["tags/Android反编译/index.html","d621f0f99fee6683dbafe1fcc05a8fb9"],["tags/BLE协议/index.html","24ca5475811c3f38db3c53a14339ef04"],["tags/CoAP协议/index.html","eee8386066dc256859dbc542b9d581e4"],["tags/JT808协议/index.html","8ab3f3294dcc24d105b7d3d72ffd9564"],["tags/JavaScript/index.html","9269ba925dc10cdebe9c46d7ec6edb8d"],["tags/MQTT协议/index.html","02c899d1944e63ac234965e60e6e00eb"],["tags/NFC协议/index.html","491222a0e31e188e3ac383cb2b576b2d"],["tags/RF协议/index.html","0d9959d7b3237e2b73c0697c72a2855c"],["tags/Wi-Fi协议/index.html","ede090b518a8815ea379af1f1d1a9315"],["tags/ZigBee协议/index.html","8193239fd0ab03ad8f0b3d2c3f680b97"],["tags/index.html","c03c3225b7d40a2dccaa1a0dadd196a3"],["tags/x86汇编/index.html","43155988f93a93546dd0ca7fbbc8c26e"],["tags/x86汇编/page/2/index.html","78f226344d79f2c4011729639acefe28"],["tags/固件逆向/index.html","d322dbea58ccbc7f021fef7cdc7d42da"],["tags/漏洞复现/index.html","e0e2a1c3b2c90822db866f74522f996d"],["tags/硬件电路构成/index.html","4e75c2030008b6e88fe0f930bc8c05f6"],["tags/逆向（基础）/index.html","07ba19d9ad2bffdede8639a7e7f7d8a3"],["tags/逆向（调试）/index.html","f0426da4cf8ab429706515a0cf7219b5"],["x86汇编学习笔记_0x01/index.html","9c751a02bafaf62d6a975c4eb5e7776b"],["x86汇编学习笔记_0x02/index.html","8012a978399619e3fe26c98a8e4bedf6"],["x86汇编学习笔记_0x03/index.html","422412c0ab62924f8621e1e7d6c27371"],["x86汇编学习笔记_0x04/index.html","cff1651bf8094aa773ecb1fc1c62f6ee"],["x86汇编学习笔记_0x05/index.html","98f17bc41d706d7ae17b78e799d1474d"],["x86汇编学习笔记_0x06/index.html","01106b6bb9b115a3187319fa07dec175"],["x86汇编学习笔记_0x07/index.html","7892289b56d969a3f5c92cde82dd3ef9"],["x86汇编学习笔记_0x08/index.html","67b2c727d940888b43f5b09209af72d9"],["x86汇编学习笔记_0x09/index.html","54c47dd604422425efebe794ce83484e"],["x86汇编学习笔记_0x10/index.html","0f39a0ba8312d7510f4e3554e03b7046"],["x86汇编学习笔记_0x11/index.html","76c86ac87f2086f90739b1b9d309359c"],["x86汇编学习笔记_0x12/index.html","3601311ba4d51428a72255c078b8e77c"],["固件逆向01/index.html","e432591e5dbe78a551620e4db93d264e"],["汇编指令集/index.html","c3e6979d08768100dd416107287dd968"],["硬件电路构成01/index.html","d31ff48de881495182c4c3f6b3e0d853"],["逆向-基础-笔记_0x01/index.html","f5782b684b534016a7e24b153b507dde"],["逆向-调试-笔记_0x01/index.html","f81eaecd117fbf4e87b206f528fe3982"]];
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








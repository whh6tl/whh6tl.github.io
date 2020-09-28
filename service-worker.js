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

var precacheConfig = [["404.html","878e7c533a9a9b53639030befa18b6fa"],["AMQP协议0_1/index.html","e799a5b585488660f19e23d9ca47e1a6"],["ARM汇编01/index.html","277b5490d5ac3d3f378c98e81972668a"],["Andoird反编译01/index.html","49f1fe11e1b21d77ac76caa34ee46ba4"],["BLE协议01/index.html","549854868a146078e9c740c2cae542c2"],["CVE-2019-5418/index.html","6754b50e0e5f48f514b0672d72327ebc"],["CVE-2019-9766/index.html","293c489baea976de64679701d6a94a59"],["CoAP协议01/index.html","08c0596e82ac3d04ab8fb7f3e6ea42ac"],["JS_0X02/index.html","a5cf033dd59ef991b2827bd979201d17"],["JS_0X03/index.html","2686e87c03c78f6a464a059156f90000"],["JS_0X04/index.html","d9316102704aa27bbc43fd8c729ca117"],["JS_0X05/index.html","2cddf2b9771004eb7e681d268dcf326f"],["JS_0X06/index.html","2a1077ccddd2b115da46853594072393"],["JS_0X07/index.html","d4b8d14253368104d8882b73f19005dc"],["JS_0X08/index.html","5b47558637ba26080a56849d462b72d3"],["JS_0X09/index.html","f80d8c4c243ddfa7bed578c97f15bc3a"],["JS_0X10/index.html","e20a30a830e14437e083a3b2344c7dc0"],["JS笔记(0X01)/index.html","264abad7fe695fc88942f9961b574da8"],["JT808协议01/index.html","978f05eecbf1696ca3d181f0bcf90ef8"],["MQTT协议01/index.html","095a5506adf8ca3b4bb4a17ad8089fe2"],["NFC协议01/index.html","1658d73011520c952b16fc4341c3b330"],["RF协议01/index.html","a9c68027d2ede37d74a3972a0d70ef4e"],["Wi-Fi协议01/index.html","7c8d13d971570feac37d2d21028144d3"],["ZigBee协议01/index.html","34ecc1afbbd4ecfedef77c1005df1644"],["archives/2020/08/index.html","cbe96bf63bfbfe223e9da8aab7e90659"],["archives/2020/09/index.html","41dfa342894ebec545bcc86e0becc4dc"],["archives/2020/09/page/2/index.html","2ea53810f2712a111dd170a7d775a281"],["archives/2020/10/index.html","2abd59d35e13cb93f7a4a401d3940b20"],["archives/2020/10/page/2/index.html","51b74f358d6e4d7eae0582930c051aa3"],["archives/2020/12/index.html","57814a4fdbe3833cf45b265e33b07e0a"],["archives/2020/index.html","91e6900c15b6d3727909aaf800737ac7"],["archives/2020/page/2/index.html","b3c484ff5afbfe82d71609d8bae6e8b4"],["archives/2020/page/3/index.html","ff4b5ae441de89381314c7beabc270d3"],["archives/2020/page/4/index.html","1c7e127688cfc3c0feadf5b436c503a0"],["archives/index.html","20372d48e072903198f6a3b6defa1c1f"],["archives/page/2/index.html","5cd61a0ad3dbefe799c810a4fee0ffb3"],["archives/page/3/index.html","3cec1a4c87ea6c4754fab905f3e42705"],["archives/page/4/index.html","bea8b3b8232ae81a02702b3b9699895a"],["categories/ARM汇编/index.html","73870bbf3a79c7e85472ba63f55d86bc"],["categories/Android反编译/index.html","ae0a38b79824a13538721d59bcb317ce"],["categories/CVE/index.html","b91e7486b086cbd2dcc7c68002b9b096"],["categories/JS学习笔记/index.html","4e574fba5a7b367d84f44d8836696eb2"],["categories/index.html","d748ffb0becc72a49641ae36096cc2dd"],["categories/x86汇编/index.html","5f32ad2accf563c477ec1ca359fcbd7e"],["categories/x86汇编/page/2/index.html","585bf4a53edae5fec83df992f2f93f1d"],["categories/固件逆向/index.html","0780862222b7c2beeb1ef02d5cd7aaa5"],["categories/硬件电路构成/index.html","4a95c84bb9413fd7ec4c02bd79d207d3"],["categories/网络通信协议/index.html","a9f9348994382130daf3ef0ab7e707b7"],["categories/逆向/index.html","5376a3b571c6b7752c47739e3f5a1afa"],["css/index.css","e190ce4fce7067c6a08b6350927527e2"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","70dac89a2b824f2d2b8d37e601d5065f"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","1abd13868d88becbeb96b04f15545585"],["page/2/index.html","446e47c059905c964ce4af6bf0b9682f"],["page/3/index.html","de3a847f1d4aaf17e1b73220749d3710"],["page/4/index.html","03679478f8f8c683933d9aac14ffa42e"],["tags/AMQP协议/index.html","16e203b387f2d1a2c077a6a50b89de6d"],["tags/ARM汇编/index.html","ea091094b41484f3c89b52a976c7422c"],["tags/Android反编译/index.html","3c44203c1e4f20d51b8e5c82fcd7d03c"],["tags/BLE协议/index.html","3a587fd97b15da158e80448b13481719"],["tags/CoAP协议/index.html","5c2a8243b9dcbd1985eec95d7a8fe81c"],["tags/JT808协议/index.html","610579a89146d0ccc3a605870cc5aefb"],["tags/JavaScript/index.html","f2daa799d31b1316ce8955fca9d6b4d8"],["tags/MQTT协议/index.html","78d76dfe049bde3cc0bb1b6b1c5ef836"],["tags/NFC协议/index.html","59041a1472d27d5a999d1bc13286aae1"],["tags/RF协议/index.html","e49f94f87e1444e9b8e1e53aa8f44dde"],["tags/Wi-Fi协议/index.html","100903a7f0829d97db27704d95eb9186"],["tags/ZigBee协议/index.html","5af4fea80f9bf597cc819b7d683429bc"],["tags/index.html","c216b88df01308ee074264c04f276746"],["tags/x86汇编/index.html","7101b35e8d50b1309fd353b2d4f8f7f0"],["tags/x86汇编/page/2/index.html","e19dd33876729fe207cf2883bd521eb3"],["tags/固件逆向/index.html","667cf2a3a311ef7589df76f649d5dafc"],["tags/漏洞复现/index.html","7436389e692069027f6df2868ab3b504"],["tags/硬件电路构成/index.html","99f5d6390c0cd52decad0021c81882ec"],["tags/逆向（基础）/index.html","f5018b56544e5b7b9b14d346fcc2c2eb"],["tags/逆向（调试）/index.html","4721796f027d16f663b7782b9de7056a"],["x86汇编学习笔记_0x01/index.html","1a48b45fb4a1d718574e57fac98855d3"],["x86汇编学习笔记_0x02/index.html","b3a4f3361cccfaae621c55a8377f97e1"],["x86汇编学习笔记_0x03/index.html","4a59aecbc82758e27afb337bc8b19498"],["x86汇编学习笔记_0x04/index.html","ab96016f8c3fdfe38413318a757977ac"],["x86汇编学习笔记_0x05/index.html","6195d53f7a7753ec7b1d27270ba379ac"],["x86汇编学习笔记_0x06/index.html","0c7132bd9b7edd80ebea5e864863b15b"],["x86汇编学习笔记_0x07/index.html","8cee3cfa2286e23c48cf8662db2ce831"],["x86汇编学习笔记_0x08/index.html","975602836be06a7aefa14a9c23bbe4af"],["x86汇编学习笔记_0x09/index.html","353731662db5348366af824f30cc1108"],["x86汇编学习笔记_0x10/index.html","7c424fd3ebe9062cb10752c2bd2d4edf"],["x86汇编学习笔记_0x11/index.html","2a72052314e0217ea9bb72a19e586e5d"],["x86汇编学习笔记_0x12/index.html","d1297284dc31ae64075f2705d91528b4"],["固件逆向01/index.html","f7d0c569d3a3396c0fbd1392e8862014"],["汇编指令集/index.html","7abc6f717a6ae41dda0dc86f3fb285a5"],["硬件电路构成01/index.html","8cd1ebd589740f1debd8449b3d735692"],["逆向-基础-笔记_0x01/index.html","8c72e6cdf50cedb7e8a6a494da31ff7b"],["逆向-调试-笔记_0x01/index.html","ea71b383db5a3806c1f3326315d73608"]];
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








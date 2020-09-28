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

var precacheConfig = [["404.html","2db9a3bf0dc0dbab3b18867368794c09"],["AMQP协议0_1/index.html","e3f8f874119b43f2ec27d04b18032567"],["ARM汇编01/index.html","0168d3620c35713bdf70b6377e312bfc"],["Andoird反编译01/index.html","b92eff7caf3a67d4310f964ae5a25a9f"],["BLE协议01/index.html","a77122a039d66e28f6c5e02ed08a9620"],["CVE-2019-5418/index.html","00ea6d19abaec40905287e84f56b524e"],["CVE-2019-9766/index.html","d01dc97c92ff780d2e088f0908b8f3a7"],["CoAP协议01/index.html","8570c7f987ab3adc09f07e3ae5c85ed0"],["JS_0X02/index.html","3413f83c6e7ef777e70ad1142507a2ed"],["JS_0X03/index.html","b3af74022d07c42d53e22b719c64db05"],["JS_0X04/index.html","8637e0cdf085d672ab9e95f60e799e88"],["JS_0X05/index.html","527c46712318e5dc2ab07c72f06a3dc6"],["JS_0X06/index.html","1025ba11fc967c45c2c5b304033cb3af"],["JS_0X07/index.html","353bb87f123de04c6df66cb5ad2f936d"],["JS_0X08/index.html","f6572fb016eb83408b950f09f0d924e8"],["JS_0X09/index.html","bcf709748e088a2af17ceb2ed23e1dd3"],["JS_0X10/index.html","ecf6ef828a3158d3eb6b25661fa24396"],["JS笔记(0X01)/index.html","44fbbb5788aceefe45901d54a25fdec7"],["JT808协议01/index.html","2cc74709a6a6820ad65c95270e3799c0"],["MQTT协议01/index.html","e23c2ec401e3d03f5c0b49c669c5fdc9"],["NFC协议01/index.html","bff12e39476e59922d7cb84dd7caa07f"],["RF协议01/index.html","f658318a53a1698a8df00a3d136c5006"],["Wi-Fi协议01/index.html","6c2866b6c1edecbc0c861d67a9e8c9fd"],["ZigBee协议01/index.html","a6e9c1ea1503bd53a669c34395925b35"],["archives/2020/08/index.html","7ffa50c7811f32945bb9b9d4e4b09bab"],["archives/2020/09/index.html","29e80a898c5bd7b056ce44d3b22189bd"],["archives/2020/09/page/2/index.html","8b39b8def83c81c481d58b81c22b70ec"],["archives/2020/10/index.html","ae38e96631aff1fdc75704441229890f"],["archives/2020/10/page/2/index.html","edf9366fea3a155026e697d7c1036d89"],["archives/2020/12/index.html","aff2cd54ef3900cdb4ad95049eabedb2"],["archives/2020/index.html","802cfef1c5823ffeaed84602bc1d742d"],["archives/2020/page/2/index.html","47832a573531783310c88c9102737e6b"],["archives/2020/page/3/index.html","b8934ef1cf0997de692016c6f168010f"],["archives/2020/page/4/index.html","23ee900b8ca2388a425e0cefea8821cd"],["archives/index.html","f2cc5f07b118ae3fcedf38ec869a316b"],["archives/page/2/index.html","768dcd53eb21b9106f121ce3a92c22dd"],["archives/page/3/index.html","86c6ca5c7bc18068e2197899a3a5de58"],["archives/page/4/index.html","33bc0994f7a25cb3085e3267fb5c1f1e"],["categories/ARM汇编/index.html","8807cfa03d0df8eef937858198a86237"],["categories/Android反编译/index.html","a953d874fbcaaeaba6be0af959fe8fb4"],["categories/CVE/index.html","366f6a31be6d37fe987782d8af03539a"],["categories/JS学习笔记/index.html","cd6bc135bf5021480ce5e64c93a84580"],["categories/index.html","5a81715c1c532e3012a288f5dfe87aa4"],["categories/x86汇编/index.html","309f38e778c3e0776fa6c9c178971deb"],["categories/x86汇编/page/2/index.html","50b3eae0558481b0ff15ce7017aa6683"],["categories/固件逆向/index.html","fae73bed98cbb5dd7080d8b37d9570b0"],["categories/硬件电路构成/index.html","81f23b32952f2a507f0647969ae3068b"],["categories/网络通信协议/index.html","a677d2d9357c7b51796a281156fa04db"],["categories/逆向/index.html","8ece2bf02c7717f6f3a82c1aa5538085"],["css/index.css","e190ce4fce7067c6a08b6350927527e2"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","5a0d8aebc348cf4743844fc68b6c01f2"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","d79f0862cae704f4d8012a1b43493a5c"],["page/2/index.html","3d0a9c9fd21eb79dc0d8eadf90d718f1"],["page/3/index.html","0bed7da0eebf580987ecc5daebb8f695"],["page/4/index.html","fe564728444e2e0dfd27fdf5e31736b4"],["tags/AMQP协议/index.html","4fb2c939bfc3615c95ab2c6efc13a48d"],["tags/ARM汇编/index.html","33a6bfaad3e7e10ce8e98a1bf0aa426b"],["tags/Android反编译/index.html","921ac8ecd1198468cb04062a325412ad"],["tags/BLE协议/index.html","705eb81cfa98b1e737956b5c41e713fb"],["tags/CoAP协议/index.html","5e67e2f8d066a1f9de320f140862289f"],["tags/JT808协议/index.html","2d2f404d3ce28cd80c9d6313a9aac868"],["tags/JavaScript/index.html","cad560c6008c3b8078c0763bccda6c69"],["tags/MQTT协议/index.html","4cac0656b450b04c5f057ebee0145ac8"],["tags/NFC协议/index.html","f8bfbf28db96388392071618c00a3a1f"],["tags/RF协议/index.html","b4c0ffb21f4b749d8e540128eae1aeda"],["tags/Wi-Fi协议/index.html","fce92961b4a0109610a7e2433ea92875"],["tags/ZigBee协议/index.html","25eebac1b1a07894131810cf2e610ece"],["tags/index.html","dc6e2b174421e18e02139011bd2b94d8"],["tags/x86汇编/index.html","8d5018dfddc81097cfc981753f9403c8"],["tags/x86汇编/page/2/index.html","82318ea5c90e0fa6627197a5bcffcf12"],["tags/固件逆向/index.html","1220279217dad380dd20a9fb0f94e6a4"],["tags/漏洞复现/index.html","422a47e411834a4147734bfa81c6ec6a"],["tags/硬件电路构成/index.html","5d12905956c5e2f76f4ca5c9dc3ea0a2"],["tags/逆向（基础）/index.html","0095c470f9920ee9c591daf567ff72b8"],["tags/逆向（调试）/index.html","3b91742638409efbca6a4e11cd0d1143"],["x86汇编学习笔记_0x01/index.html","14dd7d724a6052a3d0bb62d53a6d1cb8"],["x86汇编学习笔记_0x02/index.html","aadb403a442380306824351323116ff4"],["x86汇编学习笔记_0x03/index.html","f9650b5902a1e9951b12485005cb9d83"],["x86汇编学习笔记_0x04/index.html","3afd9892413a4142b85a9e8a07af4550"],["x86汇编学习笔记_0x05/index.html","61b87c6c1b883dfb8dacfd4af4303d1f"],["x86汇编学习笔记_0x06/index.html","3350dc17feb4d8f3145cf0fa4a32349e"],["x86汇编学习笔记_0x07/index.html","5773090bba0a4e447880b9517231e536"],["x86汇编学习笔记_0x08/index.html","1b071eca600e5e5cfbddc5f97b8b4184"],["x86汇编学习笔记_0x09/index.html","3b668727d8f4dcbddd74af574575f4e4"],["x86汇编学习笔记_0x10/index.html","2d6f3fcf3d2b9eb1416c62cd93228253"],["x86汇编学习笔记_0x11/index.html","2db2920336b88b934344b13efacb0188"],["x86汇编学习笔记_0x12/index.html","d97f7aa6756e01f40233034eecb49e68"],["固件逆向01/index.html","b973e7ead5bf021bb4b5c8e5b8d2255d"],["汇编指令集/index.html","2f3a74a32e6eec45ad11acc64e97baef"],["硬件电路构成01/index.html","b20e913a027ee7c4e71a2cfed69b88d8"],["逆向-基础-笔记_0x01/index.html","5e02ef3cd8e4e83ef420b17111cecd95"],["逆向-调试-笔记_0x01/index.html","32a7c5ecf085cdb2b93a9520460e5d0d"]];
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








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

var precacheConfig = [["404.html","a7a106d28423c398584e1e8e09188ac7"],["AMQP协议0_1/index.html","77b29bd16014e16ff38a869f96677cf8"],["ARM汇编01/index.html","09a1e151bfc9bf90dfb9901b2109ebf6"],["ARM汇编02/index.html","aaa2c2b9e29c235b8731678596ab9cab"],["ARM汇编指令集/index.html","84a5a72b986b41ec94d20530deaed111"],["Andoird反编译01/index.html","d0378bc567e1cc64e89556b7aaace08d"],["BLE协议01/index.html","7a594762d9511799d33a24460a6c67f1"],["CVE-2019-5418/index.html","bf14b0c7d09455ade86f24cea1be40cd"],["CVE-2019-9766/index.html","29e9da34a1713ce8fbe5eb01202b1b74"],["CoAP协议01/index.html","7f0f259953e42a1a39f1c41c44c76a2c"],["JS_0X02/index.html","4b4e5773f34c37ced0d6932a680962af"],["JS_0X03/index.html","5ea2d4ed3ee640c1c717829e09ca458e"],["JS_0X04/index.html","56b11253ecf9cc6199604a15ac9da36a"],["JS_0X05/index.html","fb53b6b390b4348ba31775ec4be54cd6"],["JS_0X06/index.html","b1d3088c6298242627e10954b8a82b4f"],["JS_0X07/index.html","15f25589b576cd9e8e3c85392297a726"],["JS_0X08/index.html","65eb9d038ee5aea2243994590fe7b8ae"],["JS_0X09/index.html","cdad62339c7e262f08a5356e10d48781"],["JS_0X10/index.html","6bf144449803fc3f3e88b40245083874"],["JS笔记(0X01)/index.html","e7344dc23e3bb9f599d0fad9f2e6444e"],["JT808协议01/index.html","6d8192fc88e507007421a78052ca23dc"],["MQTT协议01/index.html","3fdf281d407b95684e1bfb1c7b49e4c5"],["NFC协议01/index.html","93928741576b459fa07ed860794f1d9c"],["RF协议01/index.html","b7e60db66a719384ded21e30b3aa1b5c"],["Wi-Fi协议01/index.html","7e39f4701003ed7ba73e3526770a8b62"],["ZigBee协议01/index.html","9b5ed187a3e0bb782f02976603b78297"],["archives/2020/08/index.html","bc5dc089cdc51f31a3eb9d94c11f2d72"],["archives/2020/09/index.html","976882d1ffaeb8360b9e962ed99ef4c2"],["archives/2020/09/page/2/index.html","bf3e2914645bedde3be892a67689cb18"],["archives/2020/09/page/3/index.html","086d17b256e957201fce225d389ec628"],["archives/2020/10/index.html","6a21504e9844f2a7a8bbc3974f04454b"],["archives/2020/10/page/2/index.html","e96b33e2a8395d49e227a06a0e2bd8d2"],["archives/2020/12/index.html","b0155e723ecba84d4b147d528b2ee813"],["archives/2020/index.html","c8fff1d8ae1e21af559c88402c068fc2"],["archives/2020/page/2/index.html","8de507ebc447eab1a84e964bf9bd2970"],["archives/2020/page/3/index.html","0bddc97a523cf50c873de85fb0fa5418"],["archives/2020/page/4/index.html","9a6621e6b518065724ad6fca10751914"],["archives/2020/page/5/index.html","a1131b8699bc1bfd47ef5235aec58149"],["archives/2020/page/6/index.html","27ad6cad4f2ac2258fe95a24a454f029"],["archives/index.html","0ecd6a2d5b625f9a11a10e05804538f9"],["archives/page/2/index.html","892139f54ef53539effb62e669fce7d5"],["archives/page/3/index.html","dc8986ac4b52360ffc99e5ab979f10d0"],["archives/page/4/index.html","ea786b82bc802dabac475af97ee23ccf"],["archives/page/5/index.html","82ee0a10d0290d6c11e5d340a4925bb8"],["archives/page/6/index.html","0bd73a8281f55c08541bcd0e830af07c"],["categories/ARM汇编/index.html","af206cb8051a27907701ff633da6f029"],["categories/Android反编译/index.html","2bc6bb692feccfba62f1074744b16245"],["categories/CVE/index.html","456e230fcf560aa4a73193338d325db4"],["categories/JS学习笔记/index.html","cb48eee21fb6e15984c3bc54965902d1"],["categories/index.html","ceb5250470de4f467a60a4fdb4a44e56"],["categories/x86汇编/index.html","c5e1634f3abf3d97bb97ce6b8b5171d7"],["categories/x86汇编/page/2/index.html","e3b31bfd4006811e336a439bedcfbecd"],["categories/固件逆向/index.html","e9c8f66c50c9318706b1e90f60826024"],["categories/智能硬件安全/index.html","e4540066b90ce91360858d5e54bbbad7"],["categories/硬件电路构成/index.html","274a85f2c37b02b5c831e2f60ee6eccd"],["categories/网络通信协议/index.html","dda6f017599c46212d8843c9acc72c9e"],["categories/逆向/index.html","05fe924338b089d1490151ac21f7d512"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","71ccf22b34cd4cb8843fd8de7e49d4f0"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","d49717bd1b947880794dbd5fbfca4c53"],["page/2/index.html","e706964c84e52afacd42da56a60c49ae"],["page/3/index.html","f7ee37743d9853b5c59d7ae94c2ffcd0"],["page/4/index.html","a1155f9154012a98eb67968264048f4f"],["page/5/index.html","89aa3b7bdbdcebdba886b2643ab24406"],["page/6/index.html","d356c11f40bd1cfb8c8ea241e7dbfd6a"],["tags/AMQP协议/index.html","5326c942775de63776279a6b96916333"],["tags/ARM汇编/index.html","773cb07308372e19ebea534798534549"],["tags/Android反编译/index.html","4503f5ad7b8f20f6675acdc7f4dcd88b"],["tags/BLE协议/index.html","188c14946331e85d4efcc7b49eaf85ed"],["tags/CoAP协议/index.html","187a001f8b4784debe7b52d587b525b7"],["tags/JT808协议/index.html","15d8f78097a18c754de800df237654fc"],["tags/JavaScript/index.html","32ad79442e23f73f676dbe1342fc3f9c"],["tags/MQTT协议/index.html","bca2f3723b36f7606fcf934544c9e892"],["tags/NFC协议/index.html","4e2e844047c09d74ad192db8a09ad245"],["tags/RF协议/index.html","747a78434b2b6d6f5b6997056ea7e02d"],["tags/Wi-Fi协议/index.html","22961ec2e5d56d4b2075a27fda04000d"],["tags/ZigBee协议/index.html","6b4bb9255e1a79026776b174d5d0bf0a"],["tags/index.html","e40dd01f8e51e5407efd307892c23061"],["tags/x86汇编/index.html","5a3173461073059253d0b68394e7d14c"],["tags/x86汇编/page/2/index.html","43ab86aef51e502ca5af74bd9245686d"],["tags/固件逆向/index.html","260008b929e4cac55b6418f96d032e28"],["tags/智能硬件安全/index.html","0440d4ca4a61d852aef1d4b111e532cb"],["tags/漏洞复现/index.html","a90b127278aa57869e25e2ea2b2a3a25"],["tags/硬件电路构成/index.html","8f12f87debb0ebbc7636b74959b0599b"],["tags/逆向（基础）/index.html","3aac917e14f59a9ca193b6d33809570c"],["tags/逆向（调试）/index.html","f4e483b9af93d50cc63f62c3d43779d0"],["x86汇编学习笔记_0x01/index.html","d6e8a91e20b2aad12f5073784cf2d041"],["x86汇编学习笔记_0x02/index.html","4a44ef94561991358aaef925628ce24a"],["x86汇编学习笔记_0x03/index.html","cdbf3de69fe39c6abc6bd74813b99b51"],["x86汇编学习笔记_0x04/index.html","437ca3e2c284ef1d5bd8a0ca0767ce1c"],["x86汇编学习笔记_0x05/index.html","a53f734d83f06f4283c9dbd936f102ba"],["x86汇编学习笔记_0x06/index.html","97937360ad5b5e3425c7e9e173c441c6"],["x86汇编学习笔记_0x07/index.html","b8f94339b99198233e314552d0e0661b"],["x86汇编学习笔记_0x08/index.html","3ea04192ea29f89956b7d496e6445d5b"],["x86汇编学习笔记_0x09/index.html","f2745fcb34ec86708e886b0273e7718d"],["x86汇编学习笔记_0x10/index.html","80538e0ce7cfcacf9a7170e26578db62"],["x86汇编学习笔记_0x11/index.html","0c485c0ba2fd5740cfba97ecd8a5998e"],["x86汇编学习笔记_0x12/index.html","64a55c90f62eea7d3856117d18225f5a"],["x86汇编学习笔记_0x13/index.html","f0cf6265c69a74ee39b0ff62190c7fec"],["固件逆向01/index.html","bd85c8b103beae949a661881cd197e0b"],["汇编指令集/index.html","da62eefb9905476aee0bb55c523fbc17"],["硬件智能安全(0x01)/index.html","714adcdfc235a1614e3dcdc9b52fe2cc"],["硬件智能安全(0x02)/index.html","d86e18df9ae087cbe706b7df080d845a"],["硬件智能安全(0x03)/index.html","e7156ea61479c652fc56a7ad33cb4ffb"],["硬件智能安全(0x04)/index.html","cea3399e3e755bd74da4f3b270fc552f"],["硬件智能安全(0x05)_/index.html","9be2f2f7c64f2a8fc874cbf54dc8a570"],["硬件智能安全(0x06)_/index.html","a1506b7f48334158fc625d7325b0d45f"],["硬件智能安全(0x07)_/index.html","a32ec06d4383364a946f58c735000c23"],["硬件智能安全导航/index.html","a0e26c4cf74ede3d11fbeab11eec15b2"],["硬件电路构成01/index.html","bebd8a049746c2504d8c1b1999711c8b"],["逆向-基础-笔记_0x01/index.html","b4b150c82a68b7dce1a7a95695c73cb2"],["逆向-调试-笔记_0x01/index.html","5911b8f402905ad7ec24517d3cd20bd8"],["逆向-调试-笔记_0x02/index.html","169d95faa4fe6e64d5a378c23b9bd561"],["逆向-调试-笔记_0x03/index.html","633125702d3407936c3ef78854acdf98"],["逆向-调试-笔记_0x04/index.html","7f13d2e7407da46b54d41c2fb7d8c8e0"]];
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








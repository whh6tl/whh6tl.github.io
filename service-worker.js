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

var precacheConfig = [["404.html","7028de1149bf3e0f124865a63641bda0"],["AMQP协议0_1/index.html","77b29bd16014e16ff38a869f96677cf8"],["ARM汇编01/index.html","ef158287a5dfae6ec20d6973036661c5"],["ARM汇编02/index.html","b6559be49f1901db158e33e5973bb138"],["ARM汇编指令集/index.html","95f98474bc168fb675915fc330fbe5ee"],["Andoird反编译01/index.html","d0378bc567e1cc64e89556b7aaace08d"],["BLE协议01/index.html","7a594762d9511799d33a24460a6c67f1"],["CVE-2019-5418/index.html","bf14b0c7d09455ade86f24cea1be40cd"],["CVE-2019-9766/index.html","29e9da34a1713ce8fbe5eb01202b1b74"],["CoAP协议01/index.html","7f0f259953e42a1a39f1c41c44c76a2c"],["JS_0X02/index.html","4b4e5773f34c37ced0d6932a680962af"],["JS_0X03/index.html","5ea2d4ed3ee640c1c717829e09ca458e"],["JS_0X04/index.html","56b11253ecf9cc6199604a15ac9da36a"],["JS_0X05/index.html","fb53b6b390b4348ba31775ec4be54cd6"],["JS_0X06/index.html","b1d3088c6298242627e10954b8a82b4f"],["JS_0X07/index.html","15f25589b576cd9e8e3c85392297a726"],["JS_0X08/index.html","65eb9d038ee5aea2243994590fe7b8ae"],["JS_0X09/index.html","cdad62339c7e262f08a5356e10d48781"],["JS_0X10/index.html","6bf144449803fc3f3e88b40245083874"],["JS笔记(0X01)/index.html","e7344dc23e3bb9f599d0fad9f2e6444e"],["JT808协议01/index.html","6d8192fc88e507007421a78052ca23dc"],["MQTT协议01/index.html","3fdf281d407b95684e1bfb1c7b49e4c5"],["NFC协议01/index.html","93928741576b459fa07ed860794f1d9c"],["RF协议01/index.html","b7e60db66a719384ded21e30b3aa1b5c"],["Wi-Fi协议01/index.html","7e39f4701003ed7ba73e3526770a8b62"],["ZigBee协议01/index.html","4bed7f9ca34aa9ce177059ef78a83fc6"],["archives/2020/08/index.html","7b6c321789787ce69d4764dadfd2e3f3"],["archives/2020/09/index.html","b2cdb27c86c9b1df65c7eaa95ecaeb9d"],["archives/2020/09/page/2/index.html","0d1a587d4594f157042881ec32b9ab19"],["archives/2020/09/page/3/index.html","8a719c3633d123a4c33d189d7d55ff5e"],["archives/2020/10/index.html","4bb4d1c9eb3e2d423f53260504224b41"],["archives/2020/10/page/2/index.html","fc290d4faf38d41c0ddd548ce960ef49"],["archives/2020/11/index.html","6663abde6462265e5875c09eaacef775"],["archives/2020/12/index.html","71e8a4eebef482c53c6e57c0af333bb7"],["archives/2020/index.html","a9881e8b2d3d263baae02a4b4b1561b7"],["archives/2020/page/2/index.html","e108d96cc9c2d4eba3507bb49cea9c2d"],["archives/2020/page/3/index.html","f71b09e92b76e9f7c9063a19656d98ad"],["archives/2020/page/4/index.html","a3ef7c4cf8becf2d34c26fd5ee948669"],["archives/2020/page/5/index.html","748281d28b1de15a42dad1d3487086ea"],["archives/2020/page/6/index.html","71ef91c1782b2ffb2a3aa8b2509ea89a"],["archives/index.html","ae77be1035b0b47c2852a441f81eb57b"],["archives/page/2/index.html","7762c5e1448f37dcb598b306518f0f59"],["archives/page/3/index.html","1c64c5bc2ff2c95f5cf2e1b39264e692"],["archives/page/4/index.html","66c8b11190275a09be200e693989f6d8"],["archives/page/5/index.html","e33bcae80965c1e8df23ed7c4fc8e336"],["archives/page/6/index.html","aaa2af63089ff9de8f246987a1a2a234"],["categories/ARM汇编/index.html","736fb6864d4a3865a8ce7739d8a07de6"],["categories/Android反编译/index.html","3f572927761d5b6c0ba1760278e17dcd"],["categories/CVE/index.html","8dbfb8dbd6b393e1bedd98d6fa6fb9e6"],["categories/JS学习笔记/index.html","6aa64f0421d3f6bd3d8beadfac027bbb"],["categories/index.html","563d20e0124ba135a4750cabebf400d4"],["categories/x86汇编/index.html","33ac9a61c50fb16306fe2025e4bdf91e"],["categories/x86汇编/page/2/index.html","95476b6be4ef6d45b56f06554f1232a2"],["categories/固件逆向/index.html","7ffdf3ad4c1907c3356f213f80ded291"],["categories/智能硬件安全/index.html","7863928aba7306180b5fc06a0f8b5a30"],["categories/硬件电路构成/index.html","dd593b2ca40e1cc0fe6a34b6808fbb94"],["categories/网络通信协议/index.html","12c3f84a69ebf8a4ed1766f9a9dda358"],["categories/逆向/index.html","f381b3c18b51e37f31abb7ea534d69ce"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","f41ae8874cb70a71a5e635516648a9fd"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","30e29efce5cfa3281034e858ec00fe1f"],["page/2/index.html","daeb5a5e0b355b63c5496104ec3f9364"],["page/3/index.html","e603486604c6d98de2ddd08156c8561a"],["page/4/index.html","47e51814e21d274e89fe3255e10d1674"],["page/5/index.html","ee071accbf3542ba00bb2a6f2172b1cd"],["page/6/index.html","f5367686ce4dd31f8a6a530cdb9176d3"],["tags/AMQP协议/index.html","2871e9af4aade544facf28be4731087b"],["tags/ARM汇编/index.html","480cfcc801b9bffc1b730cadabd531c8"],["tags/Android反编译/index.html","f30298398ec4a619a6c9dc02c86fe993"],["tags/BLE协议/index.html","b275bc89de364cbc41525ea41d1f31ff"],["tags/CoAP协议/index.html","7f7482c5a42ca936842af8bf3b912797"],["tags/JT808协议/index.html","f16d0482746f546eb64a53270f27f734"],["tags/JavaScript/index.html","5b5ecae56c5d99b70c4f598495ca968f"],["tags/MQTT协议/index.html","044b59f86c7cae869542900c0df67417"],["tags/NFC协议/index.html","5f3f3e3ccddd95de3b3b49ef6382d5fa"],["tags/RF协议/index.html","1e18f72288447fbdbec617e8a4e24340"],["tags/Wi-Fi协议/index.html","2f372b7f2ded12826b47a653237d1b5b"],["tags/ZigBee协议/index.html","1ed7e79b12e45914319edc89e36a2caa"],["tags/index.html","4e5b6a534a6c378bf9ad9b604b2e6c8b"],["tags/x86汇编/index.html","974c2795c362faaaaaba45bbc8f04b72"],["tags/x86汇编/page/2/index.html","7ab10ead6db10c9896c6538235dbece4"],["tags/固件逆向/index.html","357ae8dde4f140e12864b07a6a45a14c"],["tags/智能硬件安全/index.html","6c5985bd9a1531d9a2cdf265d1058a9e"],["tags/漏洞复现/index.html","ae0e660173c0b42651416f1066b17296"],["tags/硬件电路构成/index.html","ad5e7cccd4fbef343c64053173cccb51"],["tags/逆向（基础）/index.html","4e8898e3d35f2d2a9023958fc7ca2dd5"],["tags/逆向（调试）/index.html","c294abdb1304a01c21895d7d66b94095"],["x86汇编学习笔记_0x01/index.html","d6e8a91e20b2aad12f5073784cf2d041"],["x86汇编学习笔记_0x02/index.html","4a44ef94561991358aaef925628ce24a"],["x86汇编学习笔记_0x03/index.html","cdbf3de69fe39c6abc6bd74813b99b51"],["x86汇编学习笔记_0x04/index.html","437ca3e2c284ef1d5bd8a0ca0767ce1c"],["x86汇编学习笔记_0x05/index.html","a53f734d83f06f4283c9dbd936f102ba"],["x86汇编学习笔记_0x06/index.html","97937360ad5b5e3425c7e9e173c441c6"],["x86汇编学习笔记_0x07/index.html","b8f94339b99198233e314552d0e0661b"],["x86汇编学习笔记_0x08/index.html","3ea04192ea29f89956b7d496e6445d5b"],["x86汇编学习笔记_0x09/index.html","f2745fcb34ec86708e886b0273e7718d"],["x86汇编学习笔记_0x10/index.html","80538e0ce7cfcacf9a7170e26578db62"],["x86汇编学习笔记_0x11/index.html","0c485c0ba2fd5740cfba97ecd8a5998e"],["x86汇编学习笔记_0x12/index.html","64a55c90f62eea7d3856117d18225f5a"],["x86汇编学习笔记_0x13/index.html","f0cf6265c69a74ee39b0ff62190c7fec"],["固件逆向01/index.html","22fcc1d6c1e8305680352885d8628fa4"],["汇编指令集/index.html","6ac72ab3453b300c40c819c5c79ddfb9"],["硬件智能安全(0x01)/index.html","714adcdfc235a1614e3dcdc9b52fe2cc"],["硬件智能安全(0x02)/index.html","d86e18df9ae087cbe706b7df080d845a"],["硬件智能安全(0x03)/index.html","e7156ea61479c652fc56a7ad33cb4ffb"],["硬件智能安全(0x04)/index.html","cea3399e3e755bd74da4f3b270fc552f"],["硬件智能安全(0x05)_/index.html","9be2f2f7c64f2a8fc874cbf54dc8a570"],["硬件智能安全(0x06)_/index.html","a1506b7f48334158fc625d7325b0d45f"],["硬件智能安全(0x07)_/index.html","a32ec06d4383364a946f58c735000c23"],["硬件智能安全导航/index.html","cbf3d76b1ae9e2ac76c7a66ee86e0ea0"],["硬件电路构成01/index.html","a19880304cb3d78166efe0a0585b7c4e"],["逆向-基础-笔记_0x01/index.html","b4b150c82a68b7dce1a7a95695c73cb2"],["逆向-调试-笔记_0x01/index.html","5911b8f402905ad7ec24517d3cd20bd8"],["逆向-调试-笔记_0x02/index.html","169d95faa4fe6e64d5a378c23b9bd561"],["逆向-调试-笔记_0x03/index.html","633125702d3407936c3ef78854acdf98"],["逆向-调试-笔记_0x04/index.html","7f13d2e7407da46b54d41c2fb7d8c8e0"]];
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








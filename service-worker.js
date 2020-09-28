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

var precacheConfig = [["404.html","ec5b1a39117e48e057b722d9af1cec6b"],["AMQP协议0_1/index.html","05b0e167f65cf4019ee67d73095425e8"],["ARM汇编01/index.html","5a94beb3e1e728a9eeaed628e7b32270"],["Andoird反编译01/index.html","8683e95bcaf8e3bb99e97a88564926fa"],["BLE协议01/index.html","3623bbcb63c586a5cb2b6425339018ad"],["CVE-2019-5418/index.html","5fe87ee2cad45f545f18bc71991bdc2b"],["CVE-2019-9766/index.html","9c53a3b2cdfaf16cb4b660c5cb88f972"],["CoAP协议01/index.html","e7776b841bbce01cf398ba2fa2fccc34"],["JS_0X02/index.html","f0b57a539ea15802b3ce316e9fcfa1b8"],["JS_0X03/index.html","c1810610ab445ef32f810eb079492125"],["JS_0X04/index.html","9e8797283270d1e9196fe74fe2a67baa"],["JS_0X05/index.html","31a08a60f89afb6cd46ddba737d1a55f"],["JS_0X06/index.html","26e09de3aaeeb8661905e0d632668985"],["JS_0X07/index.html","cd88cb70adc5133401647c5cd2ab71ee"],["JS_0X08/index.html","857b7b5bafc4f088de180d8f168feafa"],["JS_0X09/index.html","9f34f47e1fef453d9c44a6fb2bb4df1c"],["JS_0X10/index.html","56735fd1f80ac1510fc0b7af5bdfdb97"],["JS笔记(0X01)/index.html","535a8ca09f2270717abc21cb6a8512de"],["JT808协议01/index.html","13f548067322f4594deff90311729ea9"],["MQTT协议01/index.html","c3e42d5f09021e6a0ad6dd5161079126"],["NFC协议01/index.html","28c2ebef57b9a5ac460dfd561ac21f44"],["RF协议01/index.html","d19b8672d09b59a719cc50db4a11e8c7"],["Wi-Fi协议01/index.html","eed4a55cf66d4a34c61c14d785930f26"],["ZigBee协议01/index.html","f10cdb7b7dc44219eebc5246ccfddef9"],["archives/2020/08/index.html","a36f1e4dd70fef9c1eed4e8b3675f473"],["archives/2020/09/index.html","fa4f592132a6fc2a5e19805a175fb55f"],["archives/2020/09/page/2/index.html","5f257992bb265787e191fa5f94b8494c"],["archives/2020/10/index.html","9dc7a7a187770388892d81009086bd5b"],["archives/2020/10/page/2/index.html","2cbe6e885033ede1268477d17913f4e1"],["archives/2020/12/index.html","25efbe65022d4cc617a815bd90f3ab87"],["archives/2020/index.html","6348fe969ade5747bf1cfc484e48ef33"],["archives/2020/page/2/index.html","76b9682765d0900b3126998d2385309c"],["archives/2020/page/3/index.html","b14ec8d32e2e60d7aa8266680a41ab5b"],["archives/2020/page/4/index.html","03422e072ee7eb431b254a3f2f2c9ab8"],["archives/index.html","153341a871543adf2c319012b6996bcb"],["archives/page/2/index.html","28da4828ef8c0969b2125159c4f93d18"],["archives/page/3/index.html","e576f979f45cc27954420711ef56b8ab"],["archives/page/4/index.html","58a67e267016a189a181c2a66ba8576b"],["categories/ARM汇编/index.html","995b230d5866d6f6a68ec31e4196c979"],["categories/Android反编译/index.html","5356bc4f0ec57f153c35b22cfe9f6317"],["categories/CVE/index.html","5074ec5244c9fcbe95b9be8b38eb8427"],["categories/JS学习笔记/index.html","fc56115d965b316b8c2de91b7d53b96c"],["categories/index.html","6d77421573dec2122ba9acabb367fe93"],["categories/x86汇编/index.html","64b7ff3e6556931a054f101d2d0a4838"],["categories/x86汇编/page/2/index.html","0f6853d404aa2e55bb87f05ff4af4c65"],["categories/固件逆向/index.html","59a89124f35c20f6bbe20afb7529286c"],["categories/硬件电路构成/index.html","9162164f33cb828becfb78b9de868755"],["categories/网络通信协议/index.html","abb79de8bf560e3d2024dd5702bb00c5"],["categories/逆向/index.html","6f86888abd62d5e31138b3728015a4b9"],["css/index.css","e190ce4fce7067c6a08b6350927527e2"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","3eed21b3c100928dac85d29998e26029"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","99a850c81659e220652fc7d9ac22333d"],["page/2/index.html","6731c9270e32ea8d68416923775cdcdc"],["page/3/index.html","5cd6eb0d7d2c5122e8de2d1d15bdcdcf"],["page/4/index.html","eb9563f8205a93ddd529b630e1a3c7f4"],["tags/AMQP协议/index.html","b1c1f2eab3eafdae1be279aa0466e515"],["tags/ARM汇编/index.html","8b13e9d626df48f7df19ed1ff8a99264"],["tags/Android反编译/index.html","29678c7b85db5506f957148dba41f7d4"],["tags/BLE协议/index.html","d5316cac7d0920d2aa38f5dfbbc54bf8"],["tags/CoAP协议/index.html","121528e362ad088f3783728c07c5179e"],["tags/JT808协议/index.html","2b300f9025747e4cc60959025306e18b"],["tags/JavaScript/index.html","f5bcb3753c008a156df9d9d818c196f8"],["tags/MQTT协议/index.html","f590f5a3d473397fbc5d0a9c7735369c"],["tags/NFC协议/index.html","b9914a89253d3a26871142edc74dc7b7"],["tags/RF协议/index.html","cb7a484f859295fe47bbe57261ad1ce5"],["tags/Wi-Fi协议/index.html","8c7639a5d2940edbd501a7db59302eb5"],["tags/ZigBee协议/index.html","80c38d468c10fc61238b6f2f185b96fe"],["tags/index.html","293a9379bfed57929a40acd44190e006"],["tags/x86汇编/index.html","1c79ef67e850d0009788b0af27a4f204"],["tags/x86汇编/page/2/index.html","77f85995c8c8ea40682974dbfba41579"],["tags/固件逆向/index.html","799f42db5238271e98d498db8b69c292"],["tags/漏洞复现/index.html","4761872f45d2274301014149785e3295"],["tags/硬件电路构成/index.html","8aa2547ceadf28e1337bc4a10a78543a"],["tags/逆向（基础）/index.html","9deec3ee729fe0ccad6c851a33de17b4"],["tags/逆向（调试）/index.html","15d783780a93b8844263f16ce2e7a169"],["x86汇编学习笔记_0x01/index.html","808425162c81c681bf9199044224cae1"],["x86汇编学习笔记_0x02/index.html","f74db9ad546e50b1bc7378b70e903041"],["x86汇编学习笔记_0x03/index.html","6e2818bce38c75d20994b0cc492d05a5"],["x86汇编学习笔记_0x04/index.html","bb2d34b42fb52aca35f0a90284f50070"],["x86汇编学习笔记_0x05/index.html","0ec6e066ed0f8991f137be92e3cc8f50"],["x86汇编学习笔记_0x06/index.html","97311e8f58011f676e0ba34053826562"],["x86汇编学习笔记_0x07/index.html","2e5e9bf2914f3c212e4aee41accdd96b"],["x86汇编学习笔记_0x08/index.html","f6505e152b2ffe0a4340d3d5260cdf1c"],["x86汇编学习笔记_0x09/index.html","f5d6b0bd56c1642397010ffc1b3ae832"],["x86汇编学习笔记_0x10/index.html","b7d01cdee57bea404f4ecf87f6837c4a"],["x86汇编学习笔记_0x11/index.html","7fe2193d6bd6828824f5071078dd8a42"],["x86汇编学习笔记_0x12/index.html","64d79ddd108275200630f1b70ebde9e9"],["固件逆向01/index.html","94dffaeae1124321e718a0a1d9ab70c6"],["汇编指令集/index.html","b246dfe7718ba86dbe888f9efc0acb1f"],["硬件电路构成01/index.html","22bf0f6affe8699f35377563707702bd"],["逆向-基础-笔记_0x01/index.html","f720d6719e73ead693065d7bb18898ab"],["逆向-调试-笔记_0x01/index.html","1281aaf48b42124bc86592eb454a7f87"]];
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








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

var precacheConfig = [["404.html","723edcfbc6f88890b22efcd5d1851ed9"],["AMQP协议0_1/index.html","3ef4bd5adff95106286836359ce4e792"],["ARM汇编01/index.html","100eebec4625675865ceba79985defee"],["Andoird反编译01/index.html","fa17a49cb1f773e1c1ba0bf4ea4eabee"],["BLE协议01/index.html","0fee242963ec5ff02ca1415bd8884224"],["CVE-2019-5418/index.html","f0b91e43e0e1b3c7384a23b60e6a7549"],["CVE-2019-9766/index.html","c3e71dbad6bdaab0e80e281d1a433571"],["CoAP协议01/index.html","ac5079d872eff40293b6a5cb76fe7cf2"],["JS_0X02/index.html","3b58dbff9e9a71ea9e42e3c93c184da4"],["JS_0X03/index.html","d5963575e3a39f01d2dd275ffd11dade"],["JS_0X04/index.html","578b50560f5568d2903aad54b8d886c0"],["JS_0X05/index.html","dd318923524df87d9512c7c2de75633a"],["JS_0X06/index.html","ce12db3e4fa83d5dc06f55d6604d2d25"],["JS_0X07/index.html","b5066a22dbcc6237ebc52b214727c805"],["JS_0X08/index.html","cc2816679c75bcf1564594087908f04d"],["JS_0X09/index.html","421d915b9fb73835743af54c60015a77"],["JS_0X10/index.html","47a638facd32e4d652d9f7f4278c0d09"],["JS笔记(0X01)/index.html","0042213afc9094e77fb2de65debf2e6c"],["JT808协议01/index.html","3cba154c6837ea574a5a0238b7794b14"],["MQTT协议01/index.html","446d469dd17fc4c2b8bc138872a521df"],["NFC协议01/index.html","e15462a97259de591c61b48844d12089"],["RF协议01/index.html","a63bc720f857543d9a853621d8e16e5b"],["Wi-Fi协议01/index.html","3fccbddc3f53d9a47e3a169fef48f60d"],["ZigBee协议01/index.html","9b331204d800c626325d9ef7a826860c"],["archives/2020/08/index.html","219a28e6d9333dd6ee842dde153f9afd"],["archives/2020/09/index.html","15a9c70039f8360ff9dad5e93f2fb9b9"],["archives/2020/09/page/2/index.html","d147b174c069d43d06b4c89405f166d3"],["archives/2020/10/index.html","10bad698e34e05a04cc709cee5e5739f"],["archives/2020/10/page/2/index.html","bf1d8e9e6349f77bf8c8fe64ef7db3cf"],["archives/2020/12/index.html","476075a2e72c67bcbb948597b1d77b43"],["archives/2020/index.html","479a18bec20badaa0fe59676f1cda7b3"],["archives/2020/page/2/index.html","301b1accba555c24b936a7d277bfb529"],["archives/2020/page/3/index.html","505ecac7677986f88a05498b40f6e8ff"],["archives/2020/page/4/index.html","d6f2bcf6476dcb2085402cfd43f163db"],["archives/2020/page/5/index.html","a6d4bd1d8240b2703cbe5e73197a5926"],["archives/index.html","d7e5ebc42fbfbec7ed8ca0c16fd4391b"],["archives/page/2/index.html","2a8577fc2357b8df6ddee24c816a2808"],["archives/page/3/index.html","58eb62a62bcfedb97df00236b060d447"],["archives/page/4/index.html","76cf08435ea012b4df94c73cb0ece802"],["archives/page/5/index.html","7200b23ab254d1ccd9201a1433183d47"],["categories/ARM汇编/index.html","a1cdbd2fc8b8f296c219cf40126e4e09"],["categories/Android反编译/index.html","18c34144ea5d3998dc81b59fff33ea9f"],["categories/CVE/index.html","ef917b145fd310158d00584b0ad2bae1"],["categories/JS学习笔记/index.html","20bc50a040fa3ede1326ddde9a0b918c"],["categories/index.html","d1cf2ee201ed27791b42adf92d8209da"],["categories/x86汇编/index.html","e467159fbbd19a986a422a67409c18df"],["categories/x86汇编/page/2/index.html","8dcdbf171484f455413259303a413f40"],["categories/固件逆向/index.html","719f9043c5db6db079dc5b7ef5ef65f0"],["categories/硬件电路构成/index.html","257d356ce617700fc748a4e64c00baf6"],["categories/网络通信协议/index.html","32287c537f2e04bcceb995995f0df82d"],["categories/逆向/index.html","8d9170b39fb73fd3973b5afb13ca9f50"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","77b66bbdda419bb34a8197abad8de2ba"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","28133d294e21afeb07afc875844a4c75"],["page/2/index.html","60329a0b3f88654a44b35ea56cf06dd3"],["page/3/index.html","23881546f6dea45c969d91407bf06444"],["page/4/index.html","46659ee2e95b7647c23e05e63a72847b"],["page/5/index.html","1744280994f0040b82a42704f1b0de4e"],["tags/AMQP协议/index.html","73ae2f9952cee9017b5c956a3fbd38bb"],["tags/ARM汇编/index.html","7f6e4ba7a0b14a75df06dbb64396a00a"],["tags/Android反编译/index.html","08bfb6d4d6a3696016ed364289366fde"],["tags/BLE协议/index.html","cd41e1350374648764f5c2d4cb8989ed"],["tags/CoAP协议/index.html","d54a8e910be6180a0966321f310fdc8a"],["tags/JT808协议/index.html","6654cfe1776ad6c5435c4bfe94e61e79"],["tags/JavaScript/index.html","34f09bda57bc401dec5cf7cf9974819e"],["tags/MQTT协议/index.html","459475c7b575ae3040337e8b11a98e74"],["tags/NFC协议/index.html","24acf4f02894f31178ceb63034853081"],["tags/RF协议/index.html","6dde900821ff1a0864a56bb7d4dcfbb9"],["tags/Wi-Fi协议/index.html","8013cc74a2552a23c1292709efe05d9b"],["tags/ZigBee协议/index.html","1e889975c8dc81974b5ad8fa7c726228"],["tags/index.html","7d8edada552a512fa010167b87a30b25"],["tags/x86汇编/index.html","da62f6810a700620d5c60495fc95cbab"],["tags/x86汇编/page/2/index.html","4900f018c72b1863eeed0929b399f775"],["tags/固件逆向/index.html","029afb8875e59b622974c731b48175d0"],["tags/漏洞复现/index.html","dfce313baa7fce40ab097d7ee7296b76"],["tags/硬件电路构成/index.html","a971d7e4b96140f409538fb22c1af1a7"],["tags/逆向（基础）/index.html","f039a17503395bf8614367fce35d6017"],["tags/逆向（调试）/index.html","1185fa0b97bc9dad123b6bae48238b99"],["x86汇编学习笔记_0x01/index.html","83398af5d836d8c723b8ab1faf4941c3"],["x86汇编学习笔记_0x02/index.html","0b6b20022936e69635f11f634fac1f0b"],["x86汇编学习笔记_0x03/index.html","2761d442f166db7d5677f662557fefe5"],["x86汇编学习笔记_0x04/index.html","12fbdb3bd99b2c9ba6c664072a3bfddc"],["x86汇编学习笔记_0x05/index.html","b8a9d133745cd4992184cda87758fa3c"],["x86汇编学习笔记_0x06/index.html","2cc3e797a84cf3394eabd69713de028e"],["x86汇编学习笔记_0x07/index.html","922a6ad177bd18b38c9d2ecd030c2b0c"],["x86汇编学习笔记_0x08/index.html","0a52d6002d828e34da780ea083b2c6fb"],["x86汇编学习笔记_0x09/index.html","b62eb8d1f3e443198845813a29ea4613"],["x86汇编学习笔记_0x10/index.html","a3d75b7d1ad89b18e0221fb83959da9f"],["x86汇编学习笔记_0x11/index.html","51b7a4df74116989d75c085a9d3874b7"],["x86汇编学习笔记_0x12/index.html","70fca07f0d0a3f449f61c24bdf399dbd"],["x86汇编学习笔记_0x13/index.html","29daad68f43f1a5a4863bb08ad6cb063"],["固件逆向01/index.html","b6df0cf630f0187d8c85b6f40d1cb52e"],["汇编指令集/index.html","0b6bbd82691cd3ac6d3565f9adf28738"],["硬件电路构成01/index.html","025e0d6c33422634622aaf4cc5b9da2f"],["逆向-基础-笔记_0x01/index.html","21a2cbeedebce625ff69f22c4be38362"],["逆向-调试-笔记_0x01/index.html","6b01036ee57e17ab0d3082d898e12686"]];
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








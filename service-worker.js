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

var precacheConfig = [["404.html","3d53385e22201befa06b5ba267858af3"],["AMQP协议0_1/index.html","4c941f3476f91fc288bf20489ca9e6c9"],["ARM汇编01/index.html","e8acbb19dfc69a07e59d51452d729c54"],["ARM汇编02/index.html","f384df9af424fb1ba6ad16d15b3f8ed9"],["ARM汇编指令集/index.html","718f903c380afd85b4ad08a0c851c6ae"],["Andoird反编译01/index.html","d66df62e64e4fdb90c2f622ec64b3e91"],["BLE协议01/index.html","0e60b70b1ef7c9865926d5cfaca20a8a"],["CVE-2019-5418/index.html","100d744a338fbb8acfd6466eac34074a"],["CVE-2019-9766/index.html","36be27c043f9f1c92e81b4b3d764ccc9"],["CoAP协议01/index.html","8d054180cff61f2286d2c57d2ee0defb"],["JS_0X02/index.html","9d78af9ed05099d10c262a3b5a7395ba"],["JS_0X03/index.html","60dacbdf395e0a1e979a4f34db197b9d"],["JS_0X04/index.html","c5458e34df288edfdcab8233a2cf502c"],["JS_0X05/index.html","5bba90d4fa0a378df07fb9d5f95c3f72"],["JS_0X06/index.html","5b6e50ec14f6df6fd54ca0aed3b963c8"],["JS_0X07/index.html","c656aec7889a0eba376f79b04154d5af"],["JS_0X08/index.html","9b80f735de271ac5bed4f11d2f501515"],["JS_0X09/index.html","36d218d99b67ce22c5046529f55741eb"],["JS_0X10/index.html","f9573d936c0e9cc33160ef614d739d81"],["JS笔记(0X01)/index.html","cd0dc5c87f5b4f7efeb02c247312688f"],["JT808协议01/index.html","82ce26dd2faccdc88302c3cb23230dc7"],["MQTT协议01/index.html","272e1fd5c231d111eaaff34d4e523d7b"],["NFC协议01/index.html","2f3d9a36b6a2085a1ddd8c30ed7930bb"],["RF协议01/index.html","436600e0480755d2bacd268b4cf6241a"],["Wi-Fi协议01/index.html","980eaab5c089b5fefc1e90bb2f2e703f"],["Wi-Fi协议02/index.html","cdd1bc3e90db2455b89c8ca95d206b38"],["Wi-Fi协议03/index.html","844373ae86aa9a066dd3b614c5eb6469"],["ZigBee协议01/index.html","6d71a069dcc6621a3b427d5a47da1f82"],["archives/2020/08/index.html","fc94bd719fe2a1048b17eb272beda571"],["archives/2020/09/index.html","07f192eff2acd378d5e1dd960a718d98"],["archives/2020/09/page/2/index.html","12f3de69bdec833f4ee3269181d3f212"],["archives/2020/09/page/3/index.html","d2f57235455345142ee5d4ad4bbf998e"],["archives/2020/10/index.html","44597478cd54f4e5c9779e1aeba62e5e"],["archives/2020/10/page/2/index.html","051fa0d9972cd1eae51a7b305525ae7d"],["archives/2020/11/index.html","20172f96429671caa14fe6423ac02dfd"],["archives/2020/12/index.html","7d7b49041f019e6efaac0884c0a6be0f"],["archives/2020/index.html","9896038f683301093808fbe3b5907655"],["archives/2020/page/2/index.html","269f30da82b6d3b05a5d837847a8237d"],["archives/2020/page/3/index.html","792109fb260cac7df35f4ac4abb58f95"],["archives/2020/page/4/index.html","dfd8002ad31b5ada9a425a74e859d87e"],["archives/2020/page/5/index.html","d32b4268d2ab3172fd028151045895f7"],["archives/2020/page/6/index.html","634db2fc877fc99d6d3a641cfe8050a9"],["archives/index.html","3ec800ddfce37b6adcaa1827ccfdbcf0"],["archives/page/2/index.html","a5c19bd8887de89ebad06bc6efb147d9"],["archives/page/3/index.html","a76c95f7221a9ac555f4b211e7ebbfb3"],["archives/page/4/index.html","c9bfebea5ee045cf890b19816f524ced"],["archives/page/5/index.html","8af814843145657d3c1911617a019e53"],["archives/page/6/index.html","858d2d3ef77f71117de24495747769d0"],["categories/ARM汇编/index.html","3feeb9fe6c74751b698575d2eb14a7e2"],["categories/Android反编译/index.html","cb0e0c03305bb5ced45db2dacde2c60b"],["categories/CVE/index.html","fab846bb1bac9f182a84235c13a92e47"],["categories/JS学习笔记/index.html","0518c2b35381248bc964066bfde1a426"],["categories/index.html","4821cd874e330e4c4a718f1863fd8749"],["categories/x86汇编/index.html","ead0e592bb875c3decf6652dd147f8c5"],["categories/x86汇编/page/2/index.html","8bd53030e5a44da9cfd00fe7657a528b"],["categories/固件逆向/index.html","adcab3825a0eed196e83b9c414a1bb9d"],["categories/智能硬件安全/index.html","29d85a1ba0d59b9500d4190fb6d5c3ad"],["categories/硬件电路构成/index.html","5e7e38017a0f190a5b37062dc69fadf9"],["categories/网络通信协议/index.html","a16ce805c90cc2ff7b63fdfa32c3c342"],["categories/网络通信协议/page/2/index.html","d4d01e8541c5708e3a925389787bf5f1"],["categories/逆向/index.html","7ee627ce6c8e7830ccf4cfa888c820a6"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","d0557d6a97afbe84a36e205f10020242"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","9ecda7ae07a2119a4e675daae197645c"],["page/2/index.html","7ec03170761eae72c356ee5dd33010f4"],["page/3/index.html","eddbda6f7b2647ab65375fc68b8afc6d"],["page/4/index.html","73491019e1e5c2dcdd78df68a1e89301"],["page/5/index.html","4a0a1990572bde292cf11d1887ab15bd"],["page/6/index.html","be2d3dffd4e084a6a2e110f93fa566ba"],["tags/AMQP协议/index.html","cfca6fd5fc1bf4234580532e53acf6c5"],["tags/ARM汇编/index.html","e8cc694b034f2d08a13baa4203fc1a1a"],["tags/Android反编译/index.html","9f562cbacef158594b915cdbac69916c"],["tags/BLE协议/index.html","3bff24e30bd38d24981669b0b8d8cf75"],["tags/CoAP协议/index.html","4959d89e4881123452b845bd7ba12bb5"],["tags/JT808协议/index.html","83dd41c8cde90fa6e3ec2eee6eed99b7"],["tags/JavaScript/index.html","499fb238994102c23dff68162864b44d"],["tags/MQTT协议/index.html","8912a1a4c3560a8501b98f51faa14029"],["tags/NFC协议/index.html","159b1d8330bb47e5f1b91bf325256212"],["tags/RF协议/index.html","ecc102956cd9a9f262552ae4c1f17514"],["tags/Wi-Fi协议/index.html","efde1492caa6fc2ef93fc48ec4729896"],["tags/ZigBee协议/index.html","c9517a7bbfc5d99d83e83a41e05f1350"],["tags/index.html","48ccfc08dfc81e9865f34f95dc272061"],["tags/x86汇编/index.html","4c97cc0749f79e48858b62330ee89ec6"],["tags/x86汇编/page/2/index.html","3aa79f28ee58fa90d60b7618710af543"],["tags/固件逆向/index.html","00b69f8763728983faa2cd00adf05436"],["tags/智能硬件安全/index.html","2014b33ada42a2394927cd55236463fa"],["tags/漏洞复现/index.html","c4c3e241a5557eeb64f444063f224e53"],["tags/硬件电路构成/index.html","5488067a2711f6f01586d67a77b1d6a9"],["tags/逆向（基础）/index.html","7bff036940c41e0b857ace87915a6a1b"],["tags/逆向（调试）/index.html","d2bd92daa2ff2b58bc4cef3b930493c7"],["x86汇编学习笔记_0x01/index.html","d605cf3e15f00c812068f96fb4a95ad6"],["x86汇编学习笔记_0x02/index.html","465ba2d27cb1cbd22895daaeb3954f40"],["x86汇编学习笔记_0x03/index.html","762824ef819b903063dafce938b319d5"],["x86汇编学习笔记_0x04/index.html","8f189b8d946df9e359f5adbb889bafdd"],["x86汇编学习笔记_0x05/index.html","fd8e5f0eaa276c6edae59583561154eb"],["x86汇编学习笔记_0x06/index.html","6862b577d468d0b5694651dabcb6cbb1"],["x86汇编学习笔记_0x07/index.html","53b2739eeefea1c95a70bcdb0b6444d0"],["x86汇编学习笔记_0x08/index.html","3e2dab85a36f903f2551b46e21f26582"],["x86汇编学习笔记_0x09/index.html","7b64ce0b6d17a4f42e7ef8243d1de393"],["x86汇编学习笔记_0x10/index.html","bc2fee3581ee120e9b7b974afd5f3a3c"],["x86汇编学习笔记_0x11/index.html","c5b0d49bcbcc414cf8467029162becf4"],["x86汇编学习笔记_0x12/index.html","9338b3495f5a10f07c97d40efe621831"],["x86汇编学习笔记_0x13/index.html","acada9fbf30609207c2be050106be58b"],["固件逆向01/index.html","15a570966a9f9cdb8aafd53488b61264"],["汇编指令集/index.html","55fb4da69004d98991780e9f81f5cb9e"],["硬件智能安全(0x01)/index.html","2a689495dc453f696cfb43493c65d377"],["硬件智能安全(0x02)/index.html","4a3a16bdf39fd3814dcdfc3c7b1b1d8c"],["硬件智能安全(0x03)/index.html","3beefca2ee4f258dfae3fc21a354d494"],["硬件智能安全(0x04)/index.html","81c88a809f2519bfff9b51928a68b11c"],["硬件智能安全(0x05)_/index.html","625f1263e154bfc69df874657e12997c"],["硬件智能安全(0x06)_/index.html","c9a78e56730136a18b68d247557b9c28"],["硬件智能安全(0x07)_/index.html","2e98014e62d14f5ac8a9e3c95cf11af9"],["硬件智能安全导航/index.html","b3354eafb2aa62dc92a62710a6abb02a"],["硬件电路构成01/index.html","7b80af57de0177af86ce28a0c1d5c7b0"],["逆向-基础-笔记_0x01/index.html","f2011450fe26919c5c7fb00333f6622a"],["逆向-调试-笔记_0x01/index.html","928a14c23ad5d54f010cd102a1c561ae"],["逆向-调试-笔记_0x02/index.html","35afdd63dce9d43d3f2c3868356d53cb"],["逆向-调试-笔记_0x03/index.html","305443bcfd338c27e87e51f615760e79"],["逆向-调试-笔记_0x04/index.html","42af0bf2874d3752ca21e26ce8b59d6f"]];
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








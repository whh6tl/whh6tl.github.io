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

var precacheConfig = [["404.html","887fdb53d131e00dd405f9c977b9efde"],["AMQP协议0_1/index.html","d94a694547996369150b5e4be683f4be"],["ARM汇编01/index.html","d6c0e4627345d9f865384359819d2879"],["ARM汇编02/index.html","c1528c915048041754783006f5c37fc3"],["ARM汇编指令集/index.html","438e0c4096692dbcfdc59d357c87bc74"],["Andoird反编译01/index.html","1d218563305c66873fe4d930eea56439"],["BLE协议01/index.html","29a15e94b14a2dbfaafd88da18de383a"],["BLE协议02/index.html","e6a7ce1326aafb4abdf6929155a3adbe"],["CVE-2019-5418/index.html","e94649a9f430a1c7252d5f7de2ec103b"],["CVE-2019-9766/index.html","e0bb2b3ead5b60763215cf7fde13b44a"],["CoAP协议01/index.html","ac405591336e1e3921b12667a33369cc"],["JS_0X02/index.html","9fda76b2676ca83bed4fd3bb5ae68466"],["JS_0X03/index.html","fd10eec278a6ec36b4d9a15bb2655754"],["JS_0X04/index.html","de055664f2e273741a0734fe45f47ea7"],["JS_0X05/index.html","8816eebf4d8120b1ccf5dd5036ee0e7a"],["JS_0X06/index.html","05da9562b4865aac9e2fe32bf23ddc89"],["JS_0X07/index.html","23f10b157ce666eaf0e2ca3bfa9cb612"],["JS_0X08/index.html","dece5702f3afa4e3a65d14a6ab237d68"],["JS_0X09/index.html","a4dfbedf87de718e653e1d386f350404"],["JS_0X10/index.html","b3fae525d68eadf39e3e2d81beed0f41"],["JS笔记(0X01)/index.html","5d763d74b33ced5c0a71c38ed5d5c565"],["JT808协议01/index.html","d4ec4f4fd4f6c53c40eaa1974815dc07"],["MQTT协议01/index.html","885c32059065f48d54b91a4187a3a168"],["NFC协议01/index.html","68fa923f076263b06f77d3b60be48150"],["NFC协议02/index.html","d647e0c60d6bd0cb133a0033457def94"],["RF协议01/index.html","8fb3c1f4e867eb522bf93d63d16e7095"],["RF协议02/index.html","ed5c91420e6aab5992f907bc5e915e0d"],["RF协议03/index.html","76c4f8234c9deb58b5772fd883dec7fb"],["Wi-Fi协议01/index.html","3cfc5016a0a969d374312978a147245b"],["Wi-Fi协议02/index.html","cbd2b57b6a0678f0a1a73527687f2adf"],["Wi-Fi协议03/index.html","1cacf36d3d7ba43dc583f390c7e8fb73"],["Wi-Fi协议04/index.html","ba640fc9330908bce217542dbe71b8a3"],["Wi-Fi协议05/index.html","b5dfb4ff00697ff320e0120034d60199"],["Wi-Fi协议06/index.html","49b25249380eb130bfc44073bc10d1e8"],["Wi-Fi协议07/index.html","29a6737699f76b8ec3df9d6a169aacd6"],["Wi-Fi协议08/index.html","7c5c1750c1d632203e51add281bc3a01"],["Wi-Fi协议09/index.html","452a413e0d1313fb2a8df6805ee74ea0"],["Wi-Fi协议10/index.html","c9a8efa2829583eb7d5c54f00df813cb"],["Wi-Fi协议11/index.html","0ae85a9207aa6063515b2fadc27e174f"],["ZigBee协议01/index.html","9470e593610f22f4f8a35d89cfd1821e"],["ZigBee协议02/index.html","e35a97ef805b87554312c84991ffac59"],["archives/2020/08/index.html","7ea8e75fac195d9da8cebabe241eb834"],["archives/2020/09/index.html","95436a695a30f719ddd47a9b6a660a9b"],["archives/2020/09/page/2/index.html","08c4c4852bac13a616a0cc9aa4469bcf"],["archives/2020/09/page/3/index.html","36598e02b1da91962227f9c2c284609a"],["archives/2020/10/index.html","1d14b59b092fc0332848e1bd3834eba8"],["archives/2020/10/page/2/index.html","c626ad38a1f701cb5ecbff1f0f980ab0"],["archives/2020/11/index.html","c5bf8bcda9be71bead3ebd1175d367c3"],["archives/2020/11/page/2/index.html","2a8cb2c0c7986e0fe8e759755a4417db"],["archives/2020/12/index.html","b40153897f153aac98b7986df7b158f9"],["archives/2020/index.html","9e071ce7e6e61685f917fe8be731a5ec"],["archives/2020/page/2/index.html","4c8e915ea3a2b468b5d9e21eee011256"],["archives/2020/page/3/index.html","90a1089873379b959a493f2abf3547ca"],["archives/2020/page/4/index.html","503dfd1db3f0ab00764dd42af69a0ca3"],["archives/2020/page/5/index.html","1f2fb5b6cd8929a84d668caeb80cef76"],["archives/2020/page/6/index.html","4204016da36be91a1fdb8ee82318b0ae"],["archives/2020/page/7/index.html","3382e79742cdcc6de4d0ab3b4c1a92d9"],["archives/index.html","3f1ca96764786f5d317f3f9d7b41eda1"],["archives/page/2/index.html","9ee77da35e6d377ef83df46b4e1b9504"],["archives/page/3/index.html","fb5d2bf9d199deb785671973ce6b900e"],["archives/page/4/index.html","5df25270e92251a335b6c41fedc46753"],["archives/page/5/index.html","ff7a5fbdec495f91f11977b53a6584d7"],["archives/page/6/index.html","ebad4ad4bc1ffabd719cec54941b95a8"],["archives/page/7/index.html","8cdd02a3f6bfc1be4f3f2838e08b2072"],["categories/ARM汇编/index.html","105adb3143171f53759a1d3dbc3c2a00"],["categories/Android反编译/index.html","2526b31642a56365c7a2213b0e8b540f"],["categories/CVE/index.html","dfcb5b43c607fdaa9b6069b47539cfe5"],["categories/JS学习笔记/index.html","691517b9de33b7eeb5b5cd22adcd4ea6"],["categories/index.html","e6a836c902a2e56687fb0ccce1130897"],["categories/x86汇编/index.html","51e9397032f096fe948a075ca059f3c4"],["categories/x86汇编/page/2/index.html","3b715c4abbdfa169ba520d5752319311"],["categories/固件逆向/index.html","24b416db47195fdcc8efd043b1131467"],["categories/智能硬件安全/index.html","c80eee9b6399c91fca3e57292ede8ff6"],["categories/硬件电路构成/index.html","9c8f423de04760cb2b2268f4abcdea01"],["categories/网络通信协议/index.html","1e83c79780d8516ea9a4eac868b07425"],["categories/网络通信协议/page/2/index.html","8e130fda1839b25872fc6ecdd99b4bcb"],["categories/网络通信协议/page/3/index.html","781fd1cb918af6bb20379a639d986806"],["categories/逆向/index.html","940518fb5772b41ee474325d6bda82e6"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","0c0601d6e522388ffe34c0bfa401b159"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","002d51e1be222247333e39ef25f89c94"],["page/2/index.html","d6946c3210e15a2b222972a6e43ebea0"],["page/3/index.html","17c53ca2b82ebbdba8b003632a0df4a8"],["page/4/index.html","e5bca886de8046c0da6fcf2e125c56fd"],["page/5/index.html","58a1564dc83e2777e12700fbb964b90b"],["page/6/index.html","847af159a9980819eecacb1dc44eb710"],["page/7/index.html","5e3c3701b1d37a691173e8050576b491"],["tags/AMQP协议-暂无/index.html","291ed916c6cb998b04cb542ee24e69d7"],["tags/ARM汇编/index.html","51b4262ef364cfa156332c64da64faf5"],["tags/Android反编译/index.html","f3d70cffc48a2ce2f22feadb6cbc7085"],["tags/BLE协议/index.html","2955b79b81f84c81c23141d3c54b3963"],["tags/CoAP协议/index.html","29c2abf8e24ad08aac06c35c283b7361"],["tags/JT808协议/index.html","415faa183c60bdadaf5450e860890b9d"],["tags/JavaScript/index.html","c58dec3189b0a3c6d3f8ec2f55537a6c"],["tags/MQTT协议/index.html","699286d8d7f44b8093b378db35d4d315"],["tags/NFC协议/index.html","47ebff3a18ea5b9c76a8aed747669f5c"],["tags/RF协议/index.html","2f2963f3eb3082b2133500a9439fd86b"],["tags/Wi-Fi协议/index.html","17609c8d99b75bd8007932fab3f3073e"],["tags/Wi-Fi协议/page/2/index.html","07d7bf88fbc381762113f460d1618a8d"],["tags/ZigBee协议/index.html","e0b5838bd97b25e651dc59e0cbb29b69"],["tags/index.html","c4b3c96d43973f47e6a62e8a492b52bb"],["tags/x86汇编/index.html","3eb1f9cd56af58ac0e6f95780aef2f28"],["tags/x86汇编/page/2/index.html","fcace6e182a8dcfefe6f4e737d8c8c70"],["tags/固件逆向/index.html","56e693e11a4423a9877e5fac5d8fc4e7"],["tags/智能硬件安全/index.html","12291c1d2c06b19f49e17c3b066a518e"],["tags/漏洞复现/index.html","368f54aa07a313d51448b192c4beda4a"],["tags/硬件电路构成/index.html","78afd45571b519b5518d45b226c95c4b"],["tags/逆向（基础）/index.html","32fc51b17dcfd5d748e677e346d2e7fc"],["tags/逆向（调试）/index.html","faa078b9bab0eca7b8a06d38cb63d007"],["x86汇编学习笔记_0x01/index.html","250ca8fb28458cf649940b242696af53"],["x86汇编学习笔记_0x02/index.html","4c390f551d51340ac78b76bb320f8914"],["x86汇编学习笔记_0x03/index.html","3755c67e7b5fc4560d30e7d0694c6fc7"],["x86汇编学习笔记_0x04/index.html","32435661e5443c29de1c0227656bcb19"],["x86汇编学习笔记_0x05/index.html","df83634fa457c94368a4e0a180b0d522"],["x86汇编学习笔记_0x06/index.html","e2257518cf6ed6bd1e579c09b5a5856f"],["x86汇编学习笔记_0x07/index.html","467164ea6517390b45e3d435282f24db"],["x86汇编学习笔记_0x08/index.html","67929f5b7f76f827c4aeb6b55444f91e"],["x86汇编学习笔记_0x09/index.html","3374235e60bd5293511692f7ac0f0a37"],["x86汇编学习笔记_0x10/index.html","a742049eebe54f60bc23054b83f1f7f6"],["x86汇编学习笔记_0x11/index.html","8f75b8b88bf0f910991f95fdac4622c9"],["x86汇编学习笔记_0x12/index.html","761bc65d6f349657969efdd60f38d9ae"],["x86汇编学习笔记_0x13/index.html","8741b004311f59828ed7b104a34814fc"],["固件逆向01/index.html","63d37a4deff9c6865f6b5d7b6061f7c4"],["汇编指令集/index.html","ff28d5f2e00de145ced91aecf3a8a19b"],["硬件智能安全(0x01)/index.html","07c7b857e3aaddf28eaf30b62bce6ab6"],["硬件智能安全(0x02)/index.html","1830ae47365e0dcfe87d163da365f522"],["硬件智能安全(0x03)/index.html","9b7976633be271a015edcc5e4a9751ed"],["硬件智能安全(0x04)/index.html","851df0858a3420b4ac43ec5c275d4a90"],["硬件智能安全(0x05)_/index.html","20c90df4ba9b3ee7b58d7c4fbf822286"],["硬件智能安全(0x06)_/index.html","482fe6285d84a601c213cb5011bf768d"],["硬件智能安全(0x07)_/index.html","38ef3844a286fc027e2c5e6e0f76cd15"],["硬件智能安全导航/index.html","4c7fc7d2797c0f159c71963d4276b7ba"],["硬件智能安全（固件番外）_/index.html","918173d3b6e5f8905be920f3c0157e98"],["硬件电路构成01/index.html","9b7b3646dca93063f0af4f70edd48446"],["逆向-基础-笔记_0x01/index.html","dd25390f42695fb4ceaa1bb98c885068"],["逆向-调试-笔记_0x01/index.html","089b9f74a832848274bf96c6f9f6c0ed"],["逆向-调试-笔记_0x02/index.html","987e3891614d113263f61cfe645f16db"],["逆向-调试-笔记_0x03/index.html","92ac10376c9941415569406c4c82260d"],["逆向-调试-笔记_0x04/index.html","95f3982c251cd26b0b3acb389694cf1a"]];
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








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

var precacheConfig = [["404.html","eadf8d232f8a08111d1fce28b7a12239"],["AMQP协议0_1/index.html","6cd8fefc75544d9aeeb39af0b03e3ce6"],["ARM汇编01/index.html","fdbb0fbb2a0030bf56ae668a6c0d5eaf"],["ARM汇编02/index.html","c517bb1ef91db9eec888e046a732062c"],["ARM汇编指令集/index.html","782be39c5838ba2e6ebda35d0f0e5418"],["Andoird反编译01/index.html","806991a7e36ff2c6f5eff8a06ba66daa"],["BLE协议01/index.html","dd4115f47bbe5bd8a8e8e3053e4aaba9"],["BLE协议02/index.html","ba168de225bfcc8e871a887f2ed40729"],["CVE-2019-5418/index.html","8505b47e9f2539f6fc8ead6a57037d77"],["CVE-2019-9766/index.html","93ff66db7add3bb6993501a556414059"],["CoAP协议01/index.html","4bf792ed5a4679e793a6f4d2980b3c6f"],["JS_0X02/index.html","632dc7eef2d8dbefc414f3b9467d09ea"],["JS_0X03/index.html","f69c9aa0538a91f12ea9d03018ced471"],["JS_0X04/index.html","096326a5bb2dbead5cf9c007cf2cde8b"],["JS_0X05/index.html","2d385ddcac4e069705942f3c0213295f"],["JS_0X06/index.html","c32b0f62c1066e92391f4e0fb5399991"],["JS_0X07/index.html","fa6a970d2c4fca183a267fc5a565cb24"],["JS_0X08/index.html","2269006da83a08903a3ac0c82d072ef5"],["JS_0X09/index.html","6b139d0a010c48cb43fd24aadaab772b"],["JS_0X10/index.html","3800817b76c02005aa34d3cedd8fbf8e"],["JS笔记(0X01)/index.html","2b834097f38b1d083a066d16877a6260"],["JT808协议01/index.html","737d999aeefac651a5672efec1a2c609"],["MQTT协议01/index.html","1912a0c697f09d2717b79fb6353a00f3"],["NFC协议01/index.html","3ba70bf9a08829635b784e8d96f6e28d"],["RF协议01/index.html","2eb2fa44990e05533b4cefdda7be9fba"],["RF协议02/index.html","ca7e603d7d5650fd6c356e1768e23e30"],["RF协议03/index.html","960919311957950c33326fed32447d25"],["Wi-Fi协议01/index.html","384b3dc6ba37f8508a51fe92d9a04864"],["Wi-Fi协议02/index.html","2ef80cbff327efc423b98c86a84e890d"],["Wi-Fi协议03/index.html","aa3b64da00f74953e0856a03fa3ad7bc"],["Wi-Fi协议04/index.html","92d640478bd56b59537fe5412ba43e9e"],["Wi-Fi协议05/index.html","00168bed4e69f82c2bc3d1ffc8c322a3"],["Wi-Fi协议06/index.html","5b117bed2516cb7db9bc107c271cb14a"],["Wi-Fi协议07/index.html","56490804e20aef8bdc251429e97ce1c8"],["Wi-Fi协议08/index.html","2394107cc6c696a9ad9ced11fd265045"],["Wi-Fi协议09/index.html","69ec30735a43aecacd1a785b2791ee54"],["Wi-Fi协议10/index.html","866160f466064af98ce1a8a5dd81b42f"],["Wi-Fi协议11/index.html","f3994eefd8acc6805b81c84bede4e4a9"],["ZigBee协议01/index.html","e4e1d0ba27f71cda5e71d6b918373368"],["ZigBee协议02/index.html","5757277bb3b36ad3941cf288ec933d1e"],["archives/2020/08/index.html","0d8112d97abcecf3d9a3a751cd694704"],["archives/2020/09/index.html","f474aee7173daca4e84273665ea6d5fe"],["archives/2020/09/page/2/index.html","6703be57f0d046031ce99d9d96a98387"],["archives/2020/09/page/3/index.html","fe438092b48adfbf614a66f1f94692a5"],["archives/2020/10/index.html","9e8b845535e05a1bfba8fb0a5a10eb67"],["archives/2020/10/page/2/index.html","a2d478ce86b4ef215662ff7144444dbf"],["archives/2020/11/index.html","722bda58b86410fa6ac1af291865419d"],["archives/2020/11/page/2/index.html","1f6300eaf02a9574b0c9dabe2f1af47e"],["archives/2020/12/index.html","41a212c64650c04ef6623cdd2711cbe5"],["archives/2020/index.html","94c7e2a9da45e0171d7b9eae256dd7b7"],["archives/2020/page/2/index.html","b64a31fdf96b8d2de985b71cbe5d5b7d"],["archives/2020/page/3/index.html","a986d0fc492bf93d25212a3704e4b2b7"],["archives/2020/page/4/index.html","d1cd513bed63665d069a28763ca15770"],["archives/2020/page/5/index.html","3005920713ff50cd8b3954f01386a71f"],["archives/2020/page/6/index.html","12a77f39cb0ffa1ab02d2e77a744a9cc"],["archives/2020/page/7/index.html","2f1501a2ae8e0e1012991dfdae7ade49"],["archives/index.html","86ea4838276a1bae65f49f816590addb"],["archives/page/2/index.html","3425a255043e755fdd059c24e483a209"],["archives/page/3/index.html","f99bcb6c0dc9c83b04a4f113af048e90"],["archives/page/4/index.html","70f5c619a9ea0dec26f73999e986630f"],["archives/page/5/index.html","d13f8d643269189927cae362e891770d"],["archives/page/6/index.html","2111c41a61e863b040046e0735b86145"],["archives/page/7/index.html","c0f72be891a2885261f133f96a422d89"],["categories/ARM汇编/index.html","612eff436f4fe726e0eaea9f74ccde7d"],["categories/Android反编译/index.html","a31cec78b6d784f82c513ab1601fe23f"],["categories/CVE/index.html","6fa213ba34f9c2025f143a4b07c06e07"],["categories/JS学习笔记/index.html","9059290a863463991b2673dfb20fba4e"],["categories/index.html","3c0da678ee18add245f99911bd6115c5"],["categories/x86汇编/index.html","3280974a969eacca6635f0fb64aea0b7"],["categories/x86汇编/page/2/index.html","a2a431c3cec95aff0a94916ccd3323bb"],["categories/固件逆向/index.html","ceb7995e1c027dd8bf6c78df1741387b"],["categories/智能硬件安全/index.html","4860247b1d076e50792e260347e6577e"],["categories/硬件电路构成/index.html","7b00db41e15b35496b671140189a9a2a"],["categories/网络通信协议/index.html","11a4701d3b9207f49353045cced0155d"],["categories/网络通信协议/page/2/index.html","78b6cfe117022e99eb95da7f73c1f0d1"],["categories/网络通信协议/page/3/index.html","a713fb8c642d119390257c1112b7e92a"],["categories/逆向/index.html","3ddd39354855d616ffc4ae3ef093e422"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","88795d055f7dfcd3895f76b2ee01aae0"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","d2250bbefebc81577ff5d355dc92ffd2"],["page/2/index.html","a2d5b18568db3b30df6c6e947e8d4654"],["page/3/index.html","3e5aaf2be4eb960fe1b26d7133075aed"],["page/4/index.html","ed03784dd0645dd8876a4e3c77bd476d"],["page/5/index.html","acb9dc2343f059d27b549a97d0c488e8"],["page/6/index.html","3f58e76739ebeb3de1beb851ef3aa025"],["page/7/index.html","c454029c83ce3cde8bba9ef311deb046"],["tags/AMQP协议-暂无/index.html","610431dc5936454a2c448aad7ed9ea73"],["tags/ARM汇编/index.html","8fdab4fb267a665fee1c34d405d1aa15"],["tags/Android反编译/index.html","e5794a84517950217b8953016bf871aa"],["tags/BLE协议/index.html","b51cbcc5b3f51adb3a4a576f1dc8ca5f"],["tags/CoAP协议/index.html","0fe1946e226fe97338909d02ff2a64e9"],["tags/JT808协议/index.html","bccfb9ce06d57e2bd22a3df59c8859ad"],["tags/JavaScript/index.html","f8aa377d7371475520713805dc455f5d"],["tags/MQTT协议/index.html","65c34e9c420f4d47b203f05add562ef3"],["tags/NFC协议/index.html","bf30b9f48d55853425b2e4d49c0098bc"],["tags/RF协议/index.html","da8cda0faa3a0cbfed43250d7bc8dc53"],["tags/Wi-Fi协议/index.html","4c152cb9953977a65975e9f56cfa3690"],["tags/Wi-Fi协议/page/2/index.html","5cfd964096547e526e3ee9ad4df8e4c3"],["tags/ZigBee协议/index.html","f4d32538aad9e4b90bf3c3fce1bc2962"],["tags/index.html","91346d009e944bacb462709e7a303f15"],["tags/x86汇编/index.html","2d3221a10109585f974387c7a970feeb"],["tags/x86汇编/page/2/index.html","50d6817e6f5839858ab16ab370e3ae67"],["tags/固件逆向/index.html","7fdc8475f7fe8f18c38c709c100367fa"],["tags/智能硬件安全/index.html","83e58f485c4fbb31405d27cbb7b95d73"],["tags/漏洞复现/index.html","1432e2aa688fc15d5b00f48d40e29493"],["tags/硬件电路构成/index.html","7ed1dfb23baf4bfb8d5cd7af786b9e2e"],["tags/逆向（基础）/index.html","932af4f79a725bf68c7bcec4e72bca8a"],["tags/逆向（调试）/index.html","eac6413cb0348a72a709c5bc09ee91e2"],["x86汇编学习笔记_0x01/index.html","619df6e973651655bfefbc8f1ac2e604"],["x86汇编学习笔记_0x02/index.html","fc7385c3b0a23bf346b57c90c4d3130c"],["x86汇编学习笔记_0x03/index.html","7222f6a0bbf0b813f989e085b50e9f3d"],["x86汇编学习笔记_0x04/index.html","76d2cc686b935f87e0a3545ca2a2407e"],["x86汇编学习笔记_0x05/index.html","f9e3a49f52274680ccb51eecd481ee3f"],["x86汇编学习笔记_0x06/index.html","8e81407b2f7e67b107d61f36293fb9b0"],["x86汇编学习笔记_0x07/index.html","bb7db7f24be7d49f78c7ace3d2a127a2"],["x86汇编学习笔记_0x08/index.html","21ed8fa5b2fb15bfc0528e592976a072"],["x86汇编学习笔记_0x09/index.html","6a52cbb0338b3c445d742952ede2cc74"],["x86汇编学习笔记_0x10/index.html","ba9c8c64993b2a98c3b637f3fbf37542"],["x86汇编学习笔记_0x11/index.html","3776f8ffa304c94badd594dc1f682435"],["x86汇编学习笔记_0x12/index.html","43107310abe29bf04886042298e52f46"],["x86汇编学习笔记_0x13/index.html","4ca180a86eb2b6f50ccfa863d0d6f61e"],["固件逆向01/index.html","003e2aaa6b973f123b144f4ace25821b"],["汇编指令集/index.html","d012069825dea8138765a458b7153361"],["硬件智能安全(0x01)/index.html","e8c0e70dcc47e0d2c82ca1b52a280ea7"],["硬件智能安全(0x02)/index.html","888d168ed4c67fdc677d3e895df6428b"],["硬件智能安全(0x03)/index.html","da350e6a3ee4f5ce998629c70c7e3457"],["硬件智能安全(0x04)/index.html","099c1b81b1d363661b331f66173b4106"],["硬件智能安全(0x05)_/index.html","efc808fbfa4ae2b4045ca66e2e0943c6"],["硬件智能安全(0x06)_/index.html","63e954cdc699859b6df0c406d72bd182"],["硬件智能安全(0x07)_/index.html","16e93dc25bb324dda8dc2267ca339a9c"],["硬件智能安全导航/index.html","efbf92bfe6fb8292c29a463e28c8b536"],["硬件电路构成01/index.html","48d7356d5be87f3f6c875865801c988d"],["逆向-基础-笔记_0x01/index.html","fe37037294feedbc3b1da4c1d8206c19"],["逆向-调试-笔记_0x01/index.html","e9e09f22113b4986918f356fd7aa9b2f"],["逆向-调试-笔记_0x02/index.html","66a8e758d9e2d9a8936192ee71204532"],["逆向-调试-笔记_0x03/index.html","82fcc8d010e2b59bcb60c87b9e4386c3"],["逆向-调试-笔记_0x04/index.html","ab4c740d31dc90c3b27dbd328df56974"]];
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








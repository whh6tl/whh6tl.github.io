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

var precacheConfig = [["404.html","90c143d3103988796384f53ded744a0f"],["AMQP协议0_1/index.html","e83d9d99968a3aacb807fa0c76ac72ff"],["ARM汇编01/index.html","9afcd0baa8f1a5d1b7d0c14ca8cff940"],["ARM汇编02/index.html","cb1d7976470d25be249da0032c9f2b4e"],["ARM汇编指令集/index.html","926c14f0a2cc91859854a1ec3fca5012"],["Andoird反编译01/index.html","547cfd0530e74704c207f417a03684ec"],["BLE协议01/index.html","ceff53c8394ffd2ba13c0c07e48a4c48"],["CVE-2019-5418/index.html","38d916efc02eca17058f67d7ef66c92f"],["CVE-2019-9766/index.html","61d8c508c5be7b1a56ad183ca4bc500a"],["CoAP协议01/index.html","94de0012d0bcd0505d07068b936b7d41"],["JS_0X02/index.html","62ce1b82083036639a34a090e6081bdd"],["JS_0X03/index.html","6c62bcd3a5fd8b3884f31da368a8fa94"],["JS_0X04/index.html","94579284ce97a9579cd4ee40e51c3c71"],["JS_0X05/index.html","1cff52214fe2486b8c005f0bbd2d367a"],["JS_0X06/index.html","c389c586683a9b576c619102b4ebe35f"],["JS_0X07/index.html","c2279883779d8fb35e9d4603ff0bad50"],["JS_0X08/index.html","2dd169a23101c743b14134cb359df19e"],["JS_0X09/index.html","e2a799a9500edfee331def84541c9357"],["JS_0X10/index.html","411d36bd4fd17869ecfc173c1de1a582"],["JS笔记(0X01)/index.html","060729f7b0b5a06ddec05305d1d7e742"],["JT808协议01/index.html","90dd19b737468874c9049b059c55be11"],["MQTT协议01/index.html","9f3e67e54b6daf287cba290edadaabbe"],["NFC协议01/index.html","7d446daa93934a20b5d1c0bcc1aea594"],["RF协议01/index.html","75989bf9f0678550afdb3e2c928ac657"],["Wi-Fi协议01/index.html","0cbc0781032c21adb791bd3199c30acd"],["ZigBee协议01/index.html","58ad72191d0a818bb1f24c872ddba19d"],["archives/2020/08/index.html","0b9d500c5ad1d6b31947c793f9f3c689"],["archives/2020/09/index.html","32a5131ecaef6f6207b25884ac0588db"],["archives/2020/09/page/2/index.html","987bdadbcd9382844d967ad93654e69d"],["archives/2020/09/page/3/index.html","a9f41231273050da522d040609203398"],["archives/2020/10/index.html","81404d21115455509c841641257b709f"],["archives/2020/10/page/2/index.html","845e9affbc506d1fb0ead5eb7e90991d"],["archives/2020/11/index.html","0f196c7581d71352acbc5011c5a82c6b"],["archives/2020/12/index.html","8c5b0f789f0647f9fd9233baff11eb3a"],["archives/2020/index.html","246a592de8ee6ea475dab2424dc0579e"],["archives/2020/page/2/index.html","1ed44c3e46966ca25166adefe8aaab2c"],["archives/2020/page/3/index.html","302782de31a39e8699de0b6fb1903c08"],["archives/2020/page/4/index.html","53be7017b37fdd5b5259b87ac2f77e6f"],["archives/2020/page/5/index.html","5a1f5f8d641d4f8413a069bbb8e51d91"],["archives/2020/page/6/index.html","a2cf5bb8ba97ccec78b1a2150c5fc765"],["archives/index.html","98447d6eb81b24638b956a589190d566"],["archives/page/2/index.html","543be45ce3aad4aac2bb69e87336efd1"],["archives/page/3/index.html","033a7c55bb6110a2176f65e2c5ca3a88"],["archives/page/4/index.html","0ff3ef6b727437a5b5bf9501e300adf0"],["archives/page/5/index.html","b1ffef97949b9c59c94b7c12b48fd933"],["archives/page/6/index.html","7a3c4194d3eab6f780769187bf2c879f"],["categories/ARM汇编/index.html","997e2cdaa65037b4ac855b2b1ce458c2"],["categories/Android反编译/index.html","0869a3adc6df626840f4c5cbc7a06412"],["categories/CVE/index.html","60c01508b6abcd700585d680cff53332"],["categories/JS学习笔记/index.html","88d2c9f18c4167266281ad6a2b26a63e"],["categories/index.html","5e00ba811b0ca174571508022e825e36"],["categories/x86汇编/index.html","a6920ee23475fc1063be53908467b59c"],["categories/x86汇编/page/2/index.html","3f7b79c1c4d2a1681202c4861ec9adf8"],["categories/固件逆向/index.html","5b71bebba6c4dd6820fef130f6629bdb"],["categories/智能硬件安全/index.html","dac1b5601996878b5d59f05403b8fef4"],["categories/硬件电路构成/index.html","3c6ae9a0ee6cbeb7e47c799ec6bee881"],["categories/网络通信协议/index.html","9163d5e09c3572064e5ca512a0dbb741"],["categories/逆向/index.html","d8b08ebc5e7ee28e28a687d089f6e849"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","d5162464408efc7b1f1d85f909bb9bc5"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","e94fd4ad6bdb234bd994e1294cc28525"],["page/2/index.html","c308110568ddc7bb2109d828efcbff85"],["page/3/index.html","ab9f5942603c161ca33bfd6513a0ff4c"],["page/4/index.html","736f526a3aadea85dcd94dc707f246ea"],["page/5/index.html","afe8b09b7ecc6b4872391f80e6b005b0"],["page/6/index.html","99484381000fcef799ee72e42acdbfe8"],["tags/AMQP协议/index.html","bd94e27e485fc10c90cba6b6ca339aa6"],["tags/ARM汇编/index.html","c4805748e670310dc56ac60e6476c08b"],["tags/Android反编译/index.html","e55c82256dcc914292616b262d857c9d"],["tags/BLE协议/index.html","095de9e204569e4da92698866e325e05"],["tags/CoAP协议/index.html","1b9f2bb3d64cb0fb5cfa5f7d5d1ef267"],["tags/JT808协议/index.html","3f022f782b8fd933b9976cf1b588ac6e"],["tags/JavaScript/index.html","80d277d437879958d1c2d3671dfa7038"],["tags/MQTT协议/index.html","b46c03c82806ad5d0da89ecf40c2f4f1"],["tags/NFC协议/index.html","67b31e24c446ebd840e4d37c3553dea8"],["tags/RF协议/index.html","1358293439f061bd94b4d364b2acfba8"],["tags/Wi-Fi协议/index.html","392560a71743000c7c88183d9573240e"],["tags/ZigBee协议/index.html","199d2109aa91866211624d3371f0c5d4"],["tags/index.html","5c2ac97887a7ed2a10a33942fe91fd54"],["tags/x86汇编/index.html","54b067eee1fc90d776075df6e6839720"],["tags/x86汇编/page/2/index.html","e7555e108463ca61e751c715cc096180"],["tags/固件逆向/index.html","a82de92c6c63349e0b96b8b7fb3d14da"],["tags/智能硬件安全/index.html","58c8416409141a4bc9cb50abff6e3f09"],["tags/漏洞复现/index.html","5ab81638fa18d2188443d3532a997481"],["tags/硬件电路构成/index.html","8d675c8587384454ac5a3f09160d7fe7"],["tags/逆向（基础）/index.html","0984d099aca2eef0a8b49d84c6059d50"],["tags/逆向（调试）/index.html","977009657b166bbf780c5921154bff1d"],["x86汇编学习笔记_0x01/index.html","804167a903030c1176f6e9dffc29a9cb"],["x86汇编学习笔记_0x02/index.html","880188fd90c74e0267b2d761f302607f"],["x86汇编学习笔记_0x03/index.html","6a4e424eabf4df16dc0d286d3ef877c5"],["x86汇编学习笔记_0x04/index.html","a2c550211733fb44446dea4226ea6a15"],["x86汇编学习笔记_0x05/index.html","89db42f2df22db26be94c9c816e0db19"],["x86汇编学习笔记_0x06/index.html","880edc4ca804e6c2d8eb335bfa052727"],["x86汇编学习笔记_0x07/index.html","b2214def9851e16b22e70057db0849c9"],["x86汇编学习笔记_0x08/index.html","8b38aea5c4516eeb972f2b352953fe3e"],["x86汇编学习笔记_0x09/index.html","0382df156725326af97e7932de80f582"],["x86汇编学习笔记_0x10/index.html","c3b9838c4934e03fe88be08a48caadff"],["x86汇编学习笔记_0x11/index.html","08f7468e21d84a6595f0fe474ffc7b84"],["x86汇编学习笔记_0x12/index.html","b253971f1696e11b5994c3636f4277a8"],["x86汇编学习笔记_0x13/index.html","ca2454908787c8b9001e1d3664a0b167"],["固件逆向01/index.html","6e840ac68c5b9d7fdc9072dfc13f7f3f"],["汇编指令集/index.html","c0a0dbbc27223f6e9fb50c547d651d0f"],["硬件智能安全(0x01)/index.html","3118ecae654cd9b23f3de07f886cfdf2"],["硬件智能安全(0x02)/index.html","51b8bd440ce5313e71b85af741c126ae"],["硬件智能安全(0x03)/index.html","257c48575a7de91c4c56b5e0fbd7b6cb"],["硬件智能安全(0x04)/index.html","daca8929c5f2ddabad556c0ca0a3493a"],["硬件智能安全(0x05)_/index.html","d90f8e7c386f38cd35c288a6ff2337a1"],["硬件智能安全(0x06)_/index.html","d554381d367124014a647472e614c605"],["硬件智能安全(0x07)_/index.html","b229499dcd263aa5ff8e7943121c1051"],["硬件智能安全导航/index.html","b1ef0a76c2cbef77b72e2980ffde04a5"],["硬件电路构成01/index.html","f51feca8fc30aa47b6f33a02b806e079"],["逆向-基础-笔记_0x01/index.html","b6c19f11f69cb269530bcf9aa67ba5be"],["逆向-调试-笔记_0x01/index.html","6f4d6096c41d8f6ed849eef42f915d80"],["逆向-调试-笔记_0x02/index.html","ec45744672924350b69bcaf141c1ce5a"],["逆向-调试-笔记_0x03/index.html","d4189ae899f0ac71008a39a900518ed7"],["逆向-调试-笔记_0x04/index.html","59c791186939a6136078ba8be59237c3"]];
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








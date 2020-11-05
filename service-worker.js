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

var precacheConfig = [["404.html","6837bb62499ec38792aee95377fcf5d6"],["AMQP协议0_1/index.html","e83d9d99968a3aacb807fa0c76ac72ff"],["ARM汇编01/index.html","827e924492117d5f4c66d42bd315e6f4"],["ARM汇编02/index.html","cb1d7976470d25be249da0032c9f2b4e"],["ARM汇编指令集/index.html","8dc18526162be77a00a5f87ef5a62a91"],["Andoird反编译01/index.html","547cfd0530e74704c207f417a03684ec"],["BLE协议01/index.html","ceff53c8394ffd2ba13c0c07e48a4c48"],["CVE-2019-5418/index.html","38d916efc02eca17058f67d7ef66c92f"],["CVE-2019-9766/index.html","61d8c508c5be7b1a56ad183ca4bc500a"],["CoAP协议01/index.html","94de0012d0bcd0505d07068b936b7d41"],["JS_0X02/index.html","62ce1b82083036639a34a090e6081bdd"],["JS_0X03/index.html","6c62bcd3a5fd8b3884f31da368a8fa94"],["JS_0X04/index.html","94579284ce97a9579cd4ee40e51c3c71"],["JS_0X05/index.html","1cff52214fe2486b8c005f0bbd2d367a"],["JS_0X06/index.html","c389c586683a9b576c619102b4ebe35f"],["JS_0X07/index.html","c2279883779d8fb35e9d4603ff0bad50"],["JS_0X08/index.html","2dd169a23101c743b14134cb359df19e"],["JS_0X09/index.html","e2a799a9500edfee331def84541c9357"],["JS_0X10/index.html","411d36bd4fd17869ecfc173c1de1a582"],["JS笔记(0X01)/index.html","060729f7b0b5a06ddec05305d1d7e742"],["JT808协议01/index.html","90dd19b737468874c9049b059c55be11"],["MQTT协议01/index.html","9f3e67e54b6daf287cba290edadaabbe"],["NFC协议01/index.html","7d446daa93934a20b5d1c0bcc1aea594"],["RF协议01/index.html","75989bf9f0678550afdb3e2c928ac657"],["Wi-Fi协议01/index.html","58064be25bd5dea6620ea917961302a7"],["ZigBee协议01/index.html","58ad72191d0a818bb1f24c872ddba19d"],["archives/2020/08/index.html","8d27658cae2f3e729d17042dbebbdffe"],["archives/2020/09/index.html","f6db55f946d08f9ac6e270f292662dde"],["archives/2020/09/page/2/index.html","5946a05eaa8df588dac1d1a56ab84156"],["archives/2020/09/page/3/index.html","e0509a37bc809091b7cb40c9ff30cef9"],["archives/2020/10/index.html","2a3a66fc98e017eaf0580f98f35dc205"],["archives/2020/10/page/2/index.html","04d2901d53a84630bd5e1cecb6c05fc1"],["archives/2020/11/index.html","dae17bde606a5e87a047ae460601d3fa"],["archives/2020/12/index.html","01a6b3e308dd923f63c0648d1d0d737a"],["archives/2020/index.html","e3970f4581a3be798a18b485ae945f91"],["archives/2020/page/2/index.html","5095e01a1abf9b7c09c947bf6495032a"],["archives/2020/page/3/index.html","ae562da66f8d394ea4614af845dd4c6c"],["archives/2020/page/4/index.html","3f5c4f8147b94b003e4100b6b444358b"],["archives/2020/page/5/index.html","2988b988360f21abd0e3f23f9199fea8"],["archives/2020/page/6/index.html","cb2339d5ea9f23dadb4bc4020716967f"],["archives/index.html","99f6d344a4c07918a7c11b8b1a287e7c"],["archives/page/2/index.html","f529f2462ad2faa0f60abfd850af0ccf"],["archives/page/3/index.html","d7c18ca777ccde3755c3d04e044f4a36"],["archives/page/4/index.html","944418c37115f8e6b743987efc089f4c"],["archives/page/5/index.html","12c5e69d20c8fc59de6bfa7624b7607f"],["archives/page/6/index.html","fbcb7548dc6958b367c48db644ded1a8"],["categories/ARM汇编/index.html","489e9609d6a46d109157c8f894580435"],["categories/Android反编译/index.html","475bec4765cfd0afbc6384ca34e33380"],["categories/CVE/index.html","7f6f5a60ec3dae3a3934dad086cb4f46"],["categories/JS学习笔记/index.html","068d2f1ac9197c1b4f0f1554f302d7ee"],["categories/index.html","2df67d9bb0ae6407f07e5dd675af38c4"],["categories/x86汇编/index.html","5dafbe38bf9359bd3088d44f514b1932"],["categories/x86汇编/page/2/index.html","68e7f128c10d7036e020ccdf85c04526"],["categories/固件逆向/index.html","a126873e39ae2a58d2b7aacf38277d08"],["categories/智能硬件安全/index.html","310333ccdd949d1c0edd75b7bf86a829"],["categories/硬件电路构成/index.html","6dfcbb18aef935ae495e5c1586dde8de"],["categories/网络通信协议/index.html","a38f887a83847ce5afea168b4d2e2927"],["categories/逆向/index.html","8d0383e253c835d4d69101e3419f1a69"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","f6d3783c1154dd186d281a0ca83e4d14"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","c627d784ef0d4d3b0bde2eebe2fed9a1"],["page/2/index.html","a966abad9722208a4d3613d6c10ca87e"],["page/3/index.html","e451f1c2327476a977d371d52198e7f0"],["page/4/index.html","038b08dcf2ad653a6fb4189bbdb920a3"],["page/5/index.html","7942489c9966505aaf1e1d32e5766441"],["page/6/index.html","c7fe5944c65efebec8cd436dbc823132"],["tags/AMQP协议/index.html","d4c6877ed7e36925d3341a292f862acf"],["tags/ARM汇编/index.html","65104fb0665fee68bece6a6eecb32701"],["tags/Android反编译/index.html","047f90b542b89f892d02f089d4663a81"],["tags/BLE协议/index.html","e53d9e6c97a8ec7cb69826fa5c8e9c3b"],["tags/CoAP协议/index.html","49dac394e97b787b75590cb22547370b"],["tags/JT808协议/index.html","04c212fb366ba095ce711b04611d43b1"],["tags/JavaScript/index.html","c17176bc41b1901fc82cfff963217c5f"],["tags/MQTT协议/index.html","6de7f9f939a0c4eb068095c80436de6e"],["tags/NFC协议/index.html","741683ae4d64f1a292e83a387fadba85"],["tags/RF协议/index.html","5b1106e0e1b9cbb0f472bc2a007a91b4"],["tags/Wi-Fi协议/index.html","40786cbb2b596ecbde0d3a911c67a4c3"],["tags/ZigBee协议/index.html","29d3aff779aecfb9bf9527d25d0cae64"],["tags/index.html","cc6ec2b3a5effae6dcc12a68cfea312f"],["tags/x86汇编/index.html","90b7f30651788bbb7dff2a44e51cf88e"],["tags/x86汇编/page/2/index.html","351378da196e1d9b4e6cc10596e90aea"],["tags/固件逆向/index.html","a5074dfec7d9f05a718ff2c1f4b5a2fc"],["tags/智能硬件安全/index.html","7c5ecd70af4a7a8b684872a614d30f9f"],["tags/漏洞复现/index.html","b544071b36e34312af2eca0b2450d3a8"],["tags/硬件电路构成/index.html","7c7d18ebcabd69169703546b8d58e923"],["tags/逆向（基础）/index.html","d92c5f7a6dfa6848bdb67e82c3a96b87"],["tags/逆向（调试）/index.html","7830ec25eacc762e629962b4b06a81f2"],["x86汇编学习笔记_0x01/index.html","804167a903030c1176f6e9dffc29a9cb"],["x86汇编学习笔记_0x02/index.html","880188fd90c74e0267b2d761f302607f"],["x86汇编学习笔记_0x03/index.html","6a4e424eabf4df16dc0d286d3ef877c5"],["x86汇编学习笔记_0x04/index.html","a2c550211733fb44446dea4226ea6a15"],["x86汇编学习笔记_0x05/index.html","89db42f2df22db26be94c9c816e0db19"],["x86汇编学习笔记_0x06/index.html","880edc4ca804e6c2d8eb335bfa052727"],["x86汇编学习笔记_0x07/index.html","b2214def9851e16b22e70057db0849c9"],["x86汇编学习笔记_0x08/index.html","8b38aea5c4516eeb972f2b352953fe3e"],["x86汇编学习笔记_0x09/index.html","0382df156725326af97e7932de80f582"],["x86汇编学习笔记_0x10/index.html","c3b9838c4934e03fe88be08a48caadff"],["x86汇编学习笔记_0x11/index.html","08f7468e21d84a6595f0fe474ffc7b84"],["x86汇编学习笔记_0x12/index.html","b253971f1696e11b5994c3636f4277a8"],["x86汇编学习笔记_0x13/index.html","ca2454908787c8b9001e1d3664a0b167"],["固件逆向01/index.html","679519ebcbe09ae49deed1cf8f68b3b6"],["汇编指令集/index.html","b6abdb4035a64ec19c7ea6265b247b01"],["硬件智能安全(0x01)/index.html","3118ecae654cd9b23f3de07f886cfdf2"],["硬件智能安全(0x02)/index.html","51b8bd440ce5313e71b85af741c126ae"],["硬件智能安全(0x03)/index.html","257c48575a7de91c4c56b5e0fbd7b6cb"],["硬件智能安全(0x04)/index.html","daca8929c5f2ddabad556c0ca0a3493a"],["硬件智能安全(0x05)_/index.html","d90f8e7c386f38cd35c288a6ff2337a1"],["硬件智能安全(0x06)_/index.html","d554381d367124014a647472e614c605"],["硬件智能安全(0x07)_/index.html","b229499dcd263aa5ff8e7943121c1051"],["硬件智能安全导航/index.html","b1ef0a76c2cbef77b72e2980ffde04a5"],["硬件电路构成01/index.html","f51feca8fc30aa47b6f33a02b806e079"],["逆向-基础-笔记_0x01/index.html","b6c19f11f69cb269530bcf9aa67ba5be"],["逆向-调试-笔记_0x01/index.html","6f4d6096c41d8f6ed849eef42f915d80"],["逆向-调试-笔记_0x02/index.html","ec45744672924350b69bcaf141c1ce5a"],["逆向-调试-笔记_0x03/index.html","d4189ae899f0ac71008a39a900518ed7"],["逆向-调试-笔记_0x04/index.html","59c791186939a6136078ba8be59237c3"]];
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








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

var precacheConfig = [["404.html","aa9bb4a7b7cce0da29f3ca54ab02be8b"],["AMQP协议0_1/index.html","d1db43fada2be1260601cf055b037030"],["ARM汇编01/index.html","d7d13a97ac72e528e19bfddad025e690"],["ARM汇编02/index.html","078413ed8470eda21eb837c2d8b801a8"],["ARM汇编指令集/index.html","ec38b74d6e490af2c12e38445b1a0f8b"],["Andoird反编译01/index.html","a9fb74658fbf2b384bf4ad038e4eed3b"],["BLE协议01/index.html","2e10b8e4318d282d53b529651c52862d"],["CVE-2019-5418/index.html","bc10fd95dbbce7aa229ddb5c283e5037"],["CVE-2019-9766/index.html","877ef87439c60b617fad8ebb7c78e1fd"],["CoAP协议01/index.html","b3c7dedacebf99862f03488375c8bd57"],["JS_0X02/index.html","a0e6d3fe811d38b0366117e8ad28bf15"],["JS_0X03/index.html","feb986978e3394851c89cc6dd5dd4036"],["JS_0X04/index.html","23b5ef796a1a3342ab8cecc65fe5bc0d"],["JS_0X05/index.html","a973e9e746b3febda2ce6d785fe4eb3a"],["JS_0X06/index.html","c85930b6fdb6568a012239b886f700a6"],["JS_0X07/index.html","ee2dcdc630e8021d29d9f88f6647a081"],["JS_0X08/index.html","e4ab25fec33971f4c8d0568a5ae77647"],["JS_0X09/index.html","59151152fa5b77d74f1b5afc4002bea8"],["JS_0X10/index.html","917db1ddd22f3d6a7e18115f14b8f23f"],["JS笔记(0X01)/index.html","12306a23c62c6515e87ba72542d295ae"],["JT808协议01/index.html","c227d9f92d70133ffbf8741e862e653c"],["MQTT协议01/index.html","95da1aa572a102a4394ffbbe65cf7c5d"],["NFC协议01/index.html","0c8a87e39e87e47cbf59b8bbfcc574c5"],["RF协议01/index.html","2841a8e851e22ce4c6ee75fe1e547f85"],["Wi-Fi协议01/index.html","2df1edce01076d6e558b1241a738c733"],["Wi-Fi协议02/index.html","e98f0905bc4c8f217e40f3e3aa4b30ca"],["Wi-Fi协议03/index.html","c6d00f91b57e52c3c3530a1eb8e24773"],["Wi-Fi协议04/index.html","66499ad223f08b0b9d953952ad3b5ae9"],["Wi-Fi协议05/index.html","ad6f2bc270901eb6e4f8275491f789ba"],["Wi-Fi协议06/index.html","d197be94f99d7a7009d31f2542867c6f"],["Wi-Fi协议07/index.html","5ddfef0369e5467209a45f72c0ba4625"],["ZigBee协议01/index.html","69a6162abd154269ccd78b2c73306925"],["archives/2020/08/index.html","80f8cf204845662f6d7e132098201a9a"],["archives/2020/09/index.html","48e8969648eb5ed16639b39b405b9532"],["archives/2020/09/page/2/index.html","773cd9c517f2c4313e3da6bfdefc8a9d"],["archives/2020/09/page/3/index.html","8e6871282372b5ab4ac2ebd38b1c69d1"],["archives/2020/10/index.html","0ab66ba0fb92c34679b93f143840b7da"],["archives/2020/10/page/2/index.html","2ca2f25278380efbdb88ced2176392e6"],["archives/2020/11/index.html","d181a5c81e0c86457c805da87b73e05f"],["archives/2020/12/index.html","5c337461dcda60e244eb7c0a483fb36d"],["archives/2020/index.html","9a0b6683f9d51ba7392f7ba0d49ad9db"],["archives/2020/page/2/index.html","c064ac2fddfeae771621b3a13e0af9ab"],["archives/2020/page/3/index.html","9756ca8c8afbb03243ce90460e83ad86"],["archives/2020/page/4/index.html","8dd22a27b710ebec96ef6fa4f78f10d3"],["archives/2020/page/5/index.html","5a0162ae9c2705ff8a30cf6231e7e312"],["archives/2020/page/6/index.html","64e1e3be75fb436089951bc822e3dff3"],["archives/index.html","888ce2239f662c7a7b4496109f675a7c"],["archives/page/2/index.html","3ed94560edf1a867815d945576c63f66"],["archives/page/3/index.html","0aa2ddfd7577901c5782a2c5ad0437e1"],["archives/page/4/index.html","c360a1cefe51af951cbcd3b7f715e56d"],["archives/page/5/index.html","dca92570f6749530cf7cbe54b3b31710"],["archives/page/6/index.html","f6e9b5cf2586dc1fabf63917540d89af"],["categories/ARM汇编/index.html","eb8c42e6f6199dbfe48bb053dbdc05e5"],["categories/Android反编译/index.html","98bac55697cf212903a3ce1be3557a32"],["categories/CVE/index.html","97ab30df9a4b767827ae8c476138e1eb"],["categories/JS学习笔记/index.html","5c210f45edfbf40ecd50b0bbcc8c8755"],["categories/index.html","130468e6a7b55f903dcc418ece49f607"],["categories/x86汇编/index.html","ed40ef046edf19f6248bc7d2c207d3fb"],["categories/x86汇编/page/2/index.html","304de03365c4ca24d4e46811f91c5548"],["categories/固件逆向/index.html","6b4bce0227b7214794c1109a3fa0cda8"],["categories/智能硬件安全/index.html","37e9a191021d496df6603e82d038a3f3"],["categories/硬件电路构成/index.html","7273bad66320033ef3de018115e120ad"],["categories/网络通信协议/index.html","420ad6623398d2c8327335ddf71914ed"],["categories/网络通信协议/page/2/index.html","1ab943073aa7925963fb1bd5a19be405"],["categories/逆向/index.html","fa9e79c3961361d81ae7f897bb5b1ba3"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","71b36b5a306b1d631914ff9d04476942"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","3110faf78947d018b0441b57dcc99e31"],["page/2/index.html","3695ad2a48533376efccd51c54873337"],["page/3/index.html","0bafe7995e7adcd570b1e7041411a865"],["page/4/index.html","7d1c12d12752a64bc6bcf5fac1a472f1"],["page/5/index.html","8ca0ac307b1933c621395039e1f1db3c"],["page/6/index.html","0a686226b58b6cfdda39f53ab3ad4452"],["tags/AMQP协议-暂无/index.html","4e57f7e409b57c41be4308a18a79f94c"],["tags/ARM汇编/index.html","1375d8ebb02265810b8fbdda303ffb19"],["tags/Android反编译/index.html","af931d2e1ff2215955dbd04726f123cc"],["tags/BLE协议/index.html","6b11085b9e5bb84229086a6315931d76"],["tags/CoAP协议/index.html","d07f938488101b289c80f9111776e615"],["tags/JT808协议/index.html","f5394394acc388586385a2c764fa828d"],["tags/JavaScript/index.html","d546e002aa86510fabecaa32d905c5fe"],["tags/MQTT协议/index.html","e1e57d4f9248f49fb33b44d75c9ad738"],["tags/NFC协议/index.html","ef1b613cb759394e13aeef3690f93245"],["tags/RF协议/index.html","6bc27d6c14bb93d556cc6413e03accb7"],["tags/Wi-Fi协议/index.html","d9e07bcad58409e3c3404e3033c4eb23"],["tags/ZigBee协议/index.html","500df47fe8e579dd3d4e7576d4db030e"],["tags/index.html","340ffb677cdc154384faa3e6121a7395"],["tags/x86汇编/index.html","cf583f7e031f8c8398572a5d8a241a57"],["tags/x86汇编/page/2/index.html","41a77b8287903140a2e6c522a1161c3b"],["tags/固件逆向/index.html","1f2dfd292507505f6e1a1b690d2cdb2c"],["tags/智能硬件安全/index.html","41788e69ea5faa161b3c05229daa9a78"],["tags/漏洞复现/index.html","69397d54243a4e694a272806b9463dc5"],["tags/硬件电路构成/index.html","a859653ac8ce04eb64f1b0582bd88385"],["tags/逆向（基础）/index.html","f0bd9788044640a3342e8ee873c3c66c"],["tags/逆向（调试）/index.html","41fe00ac77540939dd39e67e9338d2b8"],["x86汇编学习笔记_0x01/index.html","ae2ddc8d101e97e5500b44025bd01892"],["x86汇编学习笔记_0x02/index.html","612cb41b830a84451c7a13cd758f52d8"],["x86汇编学习笔记_0x03/index.html","5b08af066ca47a0ad3fbd59e43ab10f3"],["x86汇编学习笔记_0x04/index.html","fffc35844bf0372361ba3181392cf57a"],["x86汇编学习笔记_0x05/index.html","84f6d955a8a16ffaaa956a1349b0c455"],["x86汇编学习笔记_0x06/index.html","fdc1667e6a378b83a9909358cb668cbd"],["x86汇编学习笔记_0x07/index.html","602d3b927573620d9b841181e779495d"],["x86汇编学习笔记_0x08/index.html","e4348fba4514bad337ca32f8b2535dc3"],["x86汇编学习笔记_0x09/index.html","38111673769119840376fabbd9bd5f54"],["x86汇编学习笔记_0x10/index.html","e9c12f5b52c5101519a2e43df2437420"],["x86汇编学习笔记_0x11/index.html","0a5f0b7c06f82dab012d86fa8db60e4e"],["x86汇编学习笔记_0x12/index.html","3a457e2e0c00b6b2a0820efa8bdae5aa"],["x86汇编学习笔记_0x13/index.html","8f4208e3cd85733be59bc3ffc6ab3f36"],["固件逆向01/index.html","06b17b47ecd9f1460951c9cd155fe1c4"],["汇编指令集/index.html","242de12ee502fb895e7d0928cfe856f1"],["硬件智能安全(0x01)/index.html","338e3cc5263fe1ffbec786f2f5fba114"],["硬件智能安全(0x02)/index.html","8019bf7b19321488d109d7695b6f938a"],["硬件智能安全(0x03)/index.html","a87d53b2175e7eb2bbf3c73386fb0db1"],["硬件智能安全(0x04)/index.html","250755b86433d8412717a1adcedd6881"],["硬件智能安全(0x05)_/index.html","ae944c289236b45eda69dbc0da87bcbf"],["硬件智能安全(0x06)_/index.html","a8ac24669b97ff0f70cab4a5400f0b44"],["硬件智能安全(0x07)_/index.html","318a7cd2ad53ce84797d0c098eb33c05"],["硬件智能安全导航/index.html","331a708ee4ea0b1e12a7b6d4db41a970"],["硬件电路构成01/index.html","7ce31c1c74bdedd66fe65f6a909154b7"],["逆向-基础-笔记_0x01/index.html","687f7be95fc3ef57b57fec0321b4d19a"],["逆向-调试-笔记_0x01/index.html","5740fe81f4a63af8d272f1ffdf62fc03"],["逆向-调试-笔记_0x02/index.html","9510e4732c51e081cd1e174524e467f4"],["逆向-调试-笔记_0x03/index.html","aaa7794c4a8532ddd1362415f94dd150"],["逆向-调试-笔记_0x04/index.html","eb1c485c006e065958aa945005f66069"]];
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








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

var precacheConfig = [["404.html","28ecaec52f3531c51e6a07ca9bebc7ce"],["AMQP协议0_1/index.html","7ecb9b449c7968f756a8d479e59ed542"],["ARM汇编01/index.html","8fa440cdb434836f3279555f1b66e367"],["ARM汇编02/index.html","0a221fb77edc26a29fc9fee4eb032fc0"],["ARM汇编指令集/index.html","885b138d8f6ae1b63e45ae4e0e456a12"],["Andoird反编译01/index.html","4037468ec3180d794991ac2e4badfa1d"],["BLE协议01/index.html","8f19d331ca2dd59acc4c724a1097d094"],["CVE-2019-5418/index.html","0b0bfdaa20aaa9161b639b20dcb92efb"],["CVE-2019-9766/index.html","797a05c3b30bcdee6b7413443c7a7047"],["CoAP协议01/index.html","c48ef52a963a92a5395a8e3f94851208"],["JS_0X02/index.html","1bb42e17db4f4fb24f5a0e075d8a7402"],["JS_0X03/index.html","2918fcba11a2bb19c8e7ce6f0e2e25f8"],["JS_0X04/index.html","df529a6d84b36e590b984b5846867d1c"],["JS_0X05/index.html","ba3b2872f209011791f64aec17211615"],["JS_0X06/index.html","5ee1994933ffad48586594dbfaa6a619"],["JS_0X07/index.html","6e701277b30596fa256fe9148c90531d"],["JS_0X08/index.html","7638d1c692c943421913be70a03b4085"],["JS_0X09/index.html","b09932faafd3414546bc71837f2a3ec2"],["JS_0X10/index.html","f4a0dd79b9eae237b2c29fd684cecfb9"],["JS笔记(0X01)/index.html","6807bb6a1499139369b14705a034aeb4"],["JT808协议01/index.html","3b6632a52bfa47f5eb0d5239bb28e6e7"],["MQTT协议01/index.html","1d94da88560fb7d9c11d028f4c2ac12c"],["NFC协议01/index.html","4abd0ea1e64154c79f03270fc965f74f"],["RF协议01/index.html","324b5effb63f013b539e697a375a88a0"],["Wi-Fi协议01/index.html","f7773f02eedd498500046fae9260c926"],["Wi-Fi协议02/index.html","eb68b859ac1f6100917cc9fca2df06d8"],["Wi-Fi协议03/index.html","25fbbd5023a9e63b9d3310afe72c61f0"],["Wi-Fi协议04/index.html","fb6fcca10b18f8954afd583553973fc3"],["Wi-Fi协议05/index.html","9fc3590874f572181bf887b57846d030"],["Wi-Fi协议06/index.html","8dcb7f9eded8e122818af0bbee4345b0"],["Wi-Fi协议07/index.html","51a354d5477804867486f08492e4d976"],["Wi-Fi协议08/index.html","2b644207c23e1c01e204984d3db3261a"],["Wi-Fi协议09/index.html","ba2f7379d5b2bfc50d7987b0697680d5"],["ZigBee协议01/index.html","e0cfab3bde1db15d22018febee6fb91e"],["archives/2020/08/index.html","c5648ff4563d3e5220ce05fa80d541ca"],["archives/2020/09/index.html","18e09f41f9836b6bfb31c339b04eeee5"],["archives/2020/09/page/2/index.html","bea1c056a4b77e3a4e2a9fa26387385a"],["archives/2020/09/page/3/index.html","96d8e813825b6b1ebd7b6a5e467527a9"],["archives/2020/10/index.html","7c0f1c4d871bea91389430dc0982c594"],["archives/2020/10/page/2/index.html","c5ff299561f3ef91987e44abe239a0c6"],["archives/2020/11/index.html","91417fd6f33c7ba8033af499e52caebd"],["archives/2020/12/index.html","c9154ed392025be3089bad16a2ed46f6"],["archives/2020/index.html","866b7f061e8253418221301800cc2f96"],["archives/2020/page/2/index.html","1fbe1bc50c3933ba78e911d31af1d59c"],["archives/2020/page/3/index.html","d29789f8a344716b912ec079b83a4bef"],["archives/2020/page/4/index.html","79479d409bce563e7258ac918fda4cb5"],["archives/2020/page/5/index.html","6621cee35de04285deace4914978867b"],["archives/2020/page/6/index.html","87c2ab644bc8a4086e53cd3f7999933a"],["archives/2020/page/7/index.html","8adf5de6271c025a7a82b384eb7546b1"],["archives/index.html","2a98957f3e6e72fcbaaa44b45a6d9404"],["archives/page/2/index.html","37de1e8c4194857aab12991e67b3994b"],["archives/page/3/index.html","29cf27a348b1f92b273e44bdd21c3d74"],["archives/page/4/index.html","5986c896f1e1f41a9042b90e77b2825a"],["archives/page/5/index.html","f26756a2ba71084f5483a8c21a9881f5"],["archives/page/6/index.html","a254f11e57207e5b1c525795ad304b84"],["archives/page/7/index.html","d1205cef068dd406e2b5099dd03f51a5"],["categories/ARM汇编/index.html","d3f3576f9fd3f45f06f97bb7bbb5340e"],["categories/Android反编译/index.html","b1d19ac2e895c8bc8efd776078da2c97"],["categories/CVE/index.html","150c61c0723bc100153a1ccefb1a417a"],["categories/JS学习笔记/index.html","2177d407dceed7b58f7e38baac70577c"],["categories/index.html","f7879eea598bd31bbb324fc2f8ee316e"],["categories/x86汇编/index.html","240093c15f2491f6287b17dbdafb6fde"],["categories/x86汇编/page/2/index.html","46ce089156264db490010ceb565856ee"],["categories/固件逆向/index.html","ce719069dafc35f9e75de01b1800b18a"],["categories/智能硬件安全/index.html","3ea8eaccb87cbcb22fe8e4779a8e0f20"],["categories/硬件电路构成/index.html","d1ba0d2e72da0c6c1bd904b9754b1477"],["categories/网络通信协议/index.html","dfa6baf81da03a856c6fb88f6474fa1a"],["categories/网络通信协议/page/2/index.html","bbbabcbd526d1af10dbb5f01db25d948"],["categories/逆向/index.html","bbb61d377478e9a4a8b65a161f9e9b34"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","ebd7b72724ccc66c018e3b6c373068e9"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","89f0b16a190fb82bdc9eb6033c8e64be"],["page/2/index.html","652ba4b6350b7f381b475f2a52274172"],["page/3/index.html","373dea2709592aab9f71a0114cb5aef2"],["page/4/index.html","7963626aa401ae907d5cb2db29af34ae"],["page/5/index.html","edb724a88cc8bdf237027e381161c780"],["page/6/index.html","6b2c69ce87a2403dd259819c78b0d2b7"],["page/7/index.html","6acb1381811142ae634301e727a34570"],["tags/AMQP协议-暂无/index.html","06a0699e4bc56f10024f9a3438400cf6"],["tags/ARM汇编/index.html","a1e6f65c87dc29d553d539c574c93200"],["tags/Android反编译/index.html","1fc1249e3ae0b9e4d537fd18e8bc6b31"],["tags/BLE协议/index.html","37a09b50d847545e7ed3f68619dcf8ab"],["tags/CoAP协议/index.html","178516321e55b915906e159bddb383a5"],["tags/JT808协议/index.html","e8e67315426f52f5cfc586117b9e2991"],["tags/JavaScript/index.html","f23423f4057a1f7a1bb2cfdede399687"],["tags/MQTT协议/index.html","0b332a74762e07d417e07017dd36c328"],["tags/NFC协议/index.html","19dc167bfde65631f2cbcde7d680d9f5"],["tags/RF协议/index.html","b951f1a988ba1d2ba6bdf6b66f23b709"],["tags/Wi-Fi协议/index.html","1f90fbcc1c4be5f81e4bfbe8c585a29d"],["tags/ZigBee协议/index.html","ac618914f81dae379e85f6a1f39a4fa2"],["tags/index.html","8b1d0465e46ee32bd1cfbf86aa2f8747"],["tags/x86汇编/index.html","af492a560c7e69a099af254117d1cb05"],["tags/x86汇编/page/2/index.html","832f9a0b0135612aa4039a3a292da8de"],["tags/固件逆向/index.html","31cbdf586f60fed255864cdf8c8bced0"],["tags/智能硬件安全/index.html","84b318233449b3e8525b72549e6dee1d"],["tags/漏洞复现/index.html","604b3e039a251e7724c1fc5db881a072"],["tags/硬件电路构成/index.html","9f66bc4cf2d1a6bba339962fad8857a2"],["tags/逆向（基础）/index.html","84f4f04f33ea5f0fc61f2915be9e9bf7"],["tags/逆向（调试）/index.html","f61b49b02cde7d03c5d6a15f9d13dcd3"],["x86汇编学习笔记_0x01/index.html","0c85ef1c67eec2209d0fad06271e9a01"],["x86汇编学习笔记_0x02/index.html","72369311a9b05d397f214bd46986416a"],["x86汇编学习笔记_0x03/index.html","67205855fc964f8437aa23be4ae36d8e"],["x86汇编学习笔记_0x04/index.html","993cadee44bd2000a3c959751fe8a885"],["x86汇编学习笔记_0x05/index.html","84d3236ace5776dfc88681e342cf36cd"],["x86汇编学习笔记_0x06/index.html","fd739711217a57158a6f7dc38f6d65b4"],["x86汇编学习笔记_0x07/index.html","ac400429748f50c576c92d218913c918"],["x86汇编学习笔记_0x08/index.html","90e430e861aa1c163d75dbbb8794d1b9"],["x86汇编学习笔记_0x09/index.html","34bb3e5fd4e1943ad282bea94d2a6e98"],["x86汇编学习笔记_0x10/index.html","86295e14e42b61cb354a3e6f6d4701b5"],["x86汇编学习笔记_0x11/index.html","b62484c780cc8e2b3cd7f198b417c00d"],["x86汇编学习笔记_0x12/index.html","90ce5a369e7912042ed6a0588a3c6bea"],["x86汇编学习笔记_0x13/index.html","59dbcbae4539436b6572ba54b5c02fbd"],["固件逆向01/index.html","c1091344c54b58f967c0e054d4307161"],["汇编指令集/index.html","2bc19dd5f32bdef7f40cb294ff4840ae"],["硬件智能安全(0x01)/index.html","7df47b1506e9cfd1037bf23383e1acef"],["硬件智能安全(0x02)/index.html","1a6b9f705c5381cbac5e1de32ae2ec84"],["硬件智能安全(0x03)/index.html","cb045a28e178c8de7788188642d35ddf"],["硬件智能安全(0x04)/index.html","15b24ef6e1718e03d073eb795396b360"],["硬件智能安全(0x05)_/index.html","fe96c5140a66dd2d2aed72a88625b9a5"],["硬件智能安全(0x06)_/index.html","eda6465a1be7280adfe53ba3fc03a90a"],["硬件智能安全(0x07)_/index.html","68b4d5c0603ea13b915e5aae02098837"],["硬件智能安全导航/index.html","b239d5e3849a4cb752e8fed00357f26c"],["硬件电路构成01/index.html","99377e3904dbc221f65b4956ca5d0837"],["逆向-基础-笔记_0x01/index.html","258fdcd2d68e0b599308679a22091e8c"],["逆向-调试-笔记_0x01/index.html","115e7024a1e8ca55cb39edd4cbe3ba09"],["逆向-调试-笔记_0x02/index.html","3abc8ae7fc8711357c650a4f3af16e71"],["逆向-调试-笔记_0x03/index.html","d8263df94626b4f5277cd4c546a9cbc3"],["逆向-调试-笔记_0x04/index.html","40dbe8faec66a1e81d4dcdb05eeab86a"]];
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








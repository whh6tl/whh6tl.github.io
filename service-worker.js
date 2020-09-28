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

var precacheConfig = [["404.html","9f4d2e6f23c3812495d802176c03513f"],["AMQP协议0_1/index.html","5c6c5a653640a449d4bfc8142b825889"],["ARM汇编01/index.html","de361b27e39dbed32460a897604ab015"],["Andoird反编译01/index.html","1ac65b7955f7a3c3d2a52a26df55d1f8"],["BLE协议01/index.html","90e72fac67f5158a498363558001eee7"],["CVE-2019-5418/index.html","298d1a1c404110f082e3293922655d1c"],["CVE-2019-9766/index.html","386250d3bab8840fbb75104ca6b9411d"],["CoAP协议01/index.html","8259dadcc9bae0e8866d683e6a44b876"],["JS_0X02/index.html","3d4e2c0b4879ad24a9cb1f2fa79b5b4b"],["JS_0X03/index.html","728387dd28aa5f9d0d8d087a961d4bb7"],["JS_0X04/index.html","84c384b2f94ec92a9a95d39aea176913"],["JS_0X05/index.html","a7a8394e3e661dc677f1f5f1ff2ef890"],["JS_0X06/index.html","18270d20599cce8249a31c1482cdc40e"],["JS_0X07/index.html","feebdb82dda86c6d5b37e554e8ef9358"],["JS_0X08/index.html","3c80d0c72f46d86edda7d987f2c1ea28"],["JS_0X09/index.html","549957a23e466a70170af719becd0987"],["JS_0X10/index.html","b62a6af544a5375e2a8b88f311e0eea9"],["JS笔记(0X01)/index.html","9e0e906b3149c6e843d3964ab519fbb2"],["JT808协议01/index.html","5e4e54d46ea840845fec372536a4e0d5"],["MQTT协议01/index.html","7031ea1f54af29fcd9197603cba76cd5"],["NFC协议01/index.html","5dc4447cb7b7cdba98cc394c822e5b66"],["RF协议01/index.html","3b191c483ab8655f243ea0a19cd2b7c0"],["Wi-Fi协议01/index.html","ff5c846bdcfbf3903512f0ff964a0adc"],["ZigBee协议01/index.html","cc59628693a60f1201eb372edb4ada08"],["archives/2020/08/index.html","e35245487c06687744ca04ffafb77bd9"],["archives/2020/09/index.html","d7c34f2c4e1a896bdd8bd1a38a6ad2d3"],["archives/2020/09/page/2/index.html","a083ccb2f8a643f83ad429c610f8e46e"],["archives/2020/10/index.html","67843c4853d64a7912b13f0aa14a506c"],["archives/2020/10/page/2/index.html","b787f090b0f63657165476dd8a386c64"],["archives/2020/12/index.html","63bc8349033f50f835abf29cfcf58259"],["archives/2020/index.html","5fff2af52b41484d01324aa6d3a2237a"],["archives/2020/page/2/index.html","725cad3c5688acff4610dd0c074651fc"],["archives/2020/page/3/index.html","154b2854072fa35c255c8c4391d0534f"],["archives/2020/page/4/index.html","988f2e7485e4c1d21c83f3c11fa158f8"],["archives/index.html","f874d1f2e90fe7587b5203e895ed567d"],["archives/page/2/index.html","7eb4f0c9c92cd4f0f021e2010c872943"],["archives/page/3/index.html","fbbc63afc6665eb447db4efb6b007590"],["archives/page/4/index.html","6a86b4d3b7a8b9db4befeaec71756902"],["categories/ARM汇编/index.html","2c30e5dbb99020d5fbced0550a41d7bd"],["categories/Android反编译/index.html","ecfb1cb216de6da0d84bb7362dfbe66c"],["categories/CVE/index.html","e290dc35a4b98a206f0ce842f2603703"],["categories/JS学习笔记/index.html","f5cc0409f68ecbcfce9d59b177c26d1a"],["categories/index.html","b20860c7f7c7df452b1b159e6384b8f8"],["categories/x86汇编/index.html","9c29bc6bd4d72b07600df7e0a9b950f8"],["categories/x86汇编/page/2/index.html","c2e294ab464eb6fe03d37f5691afaa93"],["categories/固件逆向/index.html","7efd32c18f41fc5fbc3223ca0be9ca38"],["categories/硬件电路构成/index.html","0b989734dbc46db8a63831ebf915eeb4"],["categories/网络通信协议/index.html","967bd1d13f8c6662dae49da150f4eef6"],["categories/逆向/index.html","168c7fb1256a5ddff3db0e0509828374"],["css/index.css","57ddfe330d43d455a741d80564941694"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","bf3d0c00da8a9c31dcf4862e1cbc0b21"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","89e3f00f0711ab5e56479499e5d5670f"],["page/2/index.html","2d987265e8be713c730e2ce127aa04f1"],["page/3/index.html","c381708b3d9f871ee78e237b05a97d08"],["page/4/index.html","021274dabe617857e67ca1edd2a6fdd9"],["tags/AMQP协议/index.html","fbd4e0b30bc9159f93d833f3e00f94d0"],["tags/ARM汇编/index.html","e9802e9cb9ad6c5e5ece04c9ee006961"],["tags/Android反编译/index.html","e2229972efb8d1a29906270b96fb69b9"],["tags/BLE协议/index.html","896ae093566bf8e91aa69d2f30cf4140"],["tags/CoAP协议/index.html","19ab2262bb419d3172dd60962b42d02b"],["tags/JT808协议/index.html","4b569dcf040802c2e47d4ec7f8068bba"],["tags/JavaScript/index.html","13854045931d9a0489faf7e799a9c3f4"],["tags/MQTT协议/index.html","34decea45cc941e7cead33b3f5db0930"],["tags/NFC协议/index.html","3d5e483fb943c5408dc3cf084acba4af"],["tags/RF协议/index.html","cabaf5faa49bd605176d6e42da58b8c1"],["tags/Wi-Fi协议/index.html","d058c9a4e933ebed94d4a3696e639966"],["tags/ZigBee协议/index.html","0924a165a2ea3fa815d4dbcb5fbb2b25"],["tags/index.html","a57fc88195efc3f714af3041b368e5fa"],["tags/x86汇编/index.html","44c97b058a6347b2b944919e37b5f3e5"],["tags/x86汇编/page/2/index.html","f285eec0d1cc2ffb631f6ded551ec543"],["tags/固件逆向/index.html","55f93ae79f0be4a81eedc930b4aafad4"],["tags/漏洞复现/index.html","d8b24f2265278a193f9bd74428c28ec8"],["tags/硬件电路构成/index.html","e9c9c566e0981883b144b42865bade33"],["tags/逆向（基础）/index.html","3e9e98df545801982532481530977d5e"],["tags/逆向（调试）/index.html","3ac19b3ab113b3cbb2cfe6e91e63aa91"],["x86汇编学习笔记_0x01/index.html","715c5713cb6d57f46a3e0d5f58fa2dd4"],["x86汇编学习笔记_0x02/index.html","0ea7c6658cdc7da73dc5ad3a0b2395bd"],["x86汇编学习笔记_0x03/index.html","6dc7b12528d8b91c94ed9d245bb0ed6a"],["x86汇编学习笔记_0x04/index.html","7611db8da72502ee8ee297d107951fd3"],["x86汇编学习笔记_0x05/index.html","0810750841ad96953dcc1538e7deb8f8"],["x86汇编学习笔记_0x06/index.html","0290ac8580e018fa59686ff9796a7801"],["x86汇编学习笔记_0x07/index.html","89909ecd6984b3c55a48d84add788a5d"],["x86汇编学习笔记_0x08/index.html","0467ba1e180908770f6b9dcb2e948ee1"],["x86汇编学习笔记_0x09/index.html","0bc4e1e4a17b05f305dd251c2a2fb4e6"],["x86汇编学习笔记_0x10/index.html","e1673685eb9cf4aa0097a618caebd86b"],["x86汇编学习笔记_0x11/index.html","e9e854f78e15e6800f882b6a9cb9d117"],["x86汇编学习笔记_0x12/index.html","d8e44750170df835128ec6987dc1e367"],["固件逆向01/index.html","c11e21a00b6e31b877312fa733faf81c"],["汇编指令集/index.html","65f5b05776e518d7bafab96de4186edf"],["硬件电路构成01/index.html","f9ed0719b876951936d42264b9f2fcf8"],["逆向-基础-笔记_0x01/index.html","f90944bb228b3292e0e353400bd0a208"],["逆向-调试-笔记_0x01/index.html","7090bd5d4f912166caca45cd01d51a7d"]];
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








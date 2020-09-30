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

var precacheConfig = [["404.html","6ee5127cf6f2a1eb5324e3a93f35fa9f"],["AMQP协议0_1/index.html","20a440064e427dfeba27ad6218a60052"],["ARM汇编01/index.html","a0767a33a3f36767ada7ca417b257762"],["Andoird反编译01/index.html","5212cb2b69dea4c399378000e175696e"],["BLE协议01/index.html","6af785fb35cb07feb8c1c88c6431f9ab"],["CVE-2019-5418/index.html","819063b9d3346303d53d0983c3662cb6"],["CVE-2019-9766/index.html","4a2a2f0cb82991174d40c4b2cbcb3317"],["CoAP协议01/index.html","d4a93a4dae08eb1cb96c7973e5b079ad"],["JS_0X02/index.html","61dfb6109b92a94422374e4dcf54efb4"],["JS_0X03/index.html","be2d5c3ec625d9ebf409303b967bba3b"],["JS_0X04/index.html","392d90958cbde1e0d0fc512e9a0ac910"],["JS_0X05/index.html","8b8c0e1fccd422efead33e964a2cca09"],["JS_0X06/index.html","51aa5d21ad7224a4a6bd2c7f153209ce"],["JS_0X07/index.html","1da390261b4a28cf569cbe1e5b33026f"],["JS_0X08/index.html","c11faa9b1d223ff5c3a83b3d39748700"],["JS_0X09/index.html","109da194d8090218f0ba0c9ba46817eb"],["JS_0X10/index.html","f045120ccbdf360aedbf6d55ea6b3285"],["JS笔记(0X01)/index.html","107c0e39e3454c2d29e7b5c2098f56bc"],["JT808协议01/index.html","de4cbe389492a1d469e2edf4b87c3274"],["MQTT协议01/index.html","78928b5a3e12c72463724bf271882cf8"],["NFC协议01/index.html","33861ce3b3de9df50db1b6beb76624ae"],["RF协议01/index.html","213c62a30298eedebb04eb6e4f746c5a"],["Wi-Fi协议01/index.html","d3e553a10e07fb13a23aa830fcccbe38"],["ZigBee协议01/index.html","69c53e80a694af9ea4de6408b2e59429"],["archives/2020/08/index.html","4e344831d5a5095a3d16143cfb3c0cb5"],["archives/2020/09/index.html","3a9b61f43c31223b0e8a63c99469337f"],["archives/2020/09/page/2/index.html","9c3531f6a409a32b52f099c355369817"],["archives/2020/10/index.html","62505c949488cbfcc7957a0273d26425"],["archives/2020/10/page/2/index.html","31020b9513f620946cf5865aeea39358"],["archives/2020/12/index.html","ead2b3a271b8c31318574bcea9550d74"],["archives/2020/index.html","b4e5fb97859ae3c885056e778cbc2c53"],["archives/2020/page/2/index.html","83fe67319a8f7ebe449acb88a6ad1b02"],["archives/2020/page/3/index.html","3bd8c7d1bdfcc50f8b8239b93d847da6"],["archives/2020/page/4/index.html","3200e3709bdb60676ea784a2b9a11665"],["archives/2020/page/5/index.html","e6146abb97d161bf189f945efce2f658"],["archives/index.html","c032252de2ea605cbcececbda329598d"],["archives/page/2/index.html","a3c62f6f0564b47ed35745018504f76f"],["archives/page/3/index.html","0df8f7f343f6b1281dbf6f825e40edaf"],["archives/page/4/index.html","f3ddb0a5153fe1d4533d9d45494a8cfe"],["archives/page/5/index.html","fda855244fc1521dc0801110ece7838c"],["categories/ARM汇编/index.html","5d6f85b778f67b56afcc8380e4000977"],["categories/Android反编译/index.html","421f2cf08f687f5babfeee0ac0f6d16f"],["categories/CVE/index.html","d7d45cccc0d2ef0c84935b3da0517e75"],["categories/JS学习笔记/index.html","6464d54c1d2987aa343d93d4cb56e947"],["categories/index.html","1fae468993a090622e748b4980b02b92"],["categories/x86汇编/index.html","49b1ac224b9a5cf991c555c40f9b582e"],["categories/x86汇编/page/2/index.html","5261a74b5e0f11f9b85b0a81268c675a"],["categories/固件逆向/index.html","e50105db0e90f4efd0fbd56b8ac3063c"],["categories/硬件电路构成/index.html","548522fa16632ea44399f8020bdf7251"],["categories/网络通信协议/index.html","b4067733910c4eeca7ad15131b100fcc"],["categories/逆向/index.html","ca2e5eece2cc5fd644eb91437b12dcc8"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","8ca931e17f8641cfc5a3677f212840f8"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","e59d793fb9577e3b005e55e007ed5278"],["page/2/index.html","147ec7570252b3b063df214a44079e27"],["page/3/index.html","ff9fcc89c414c971ed7d2f214bc9b5f3"],["page/4/index.html","ba0fe6e7f18cb0abaedf9d38e056acfc"],["page/5/index.html","aeeabefa7a95447fdcea2721e7dac544"],["tags/AMQP协议/index.html","2a6ab4c18e4e54ca5f1472fc0f3d747d"],["tags/ARM汇编/index.html","c4a9d65f2b41fc291330d51033258a5d"],["tags/Android反编译/index.html","061decb46502c63029213fe1f53685f0"],["tags/BLE协议/index.html","a0cbc7fad43fe1d51304dcb2bd4ab022"],["tags/CoAP协议/index.html","70db86f06478bd3e198bc52d435fa26c"],["tags/JT808协议/index.html","1e226114feca794e4d6cad41639786e7"],["tags/JavaScript/index.html","4b03ed8c0a962f109eca1d50a114d360"],["tags/MQTT协议/index.html","ec2a21df1e91c0470ded3b67d547ca62"],["tags/NFC协议/index.html","1cc420528ad7f2e429e11b0d7b90880d"],["tags/RF协议/index.html","cbe72eaefdd43ac6a4c6912e9480d2a0"],["tags/Wi-Fi协议/index.html","74401baf11b193b1562e9da2b8d20e74"],["tags/ZigBee协议/index.html","4b01cdad4f736d2b98c0abe4a4bc399a"],["tags/index.html","3d30a30d163d275029cdd84f679cabc9"],["tags/x86汇编/index.html","255343ac339b2f346003f36698302c33"],["tags/x86汇编/page/2/index.html","847c73b3d85bbacd837dae07ca0ba72b"],["tags/固件逆向/index.html","71d376b1eb7b06b7f4a7fdc36492f347"],["tags/漏洞复现/index.html","cf8cc7ce638314002ac390cedf2c727d"],["tags/硬件电路构成/index.html","c3594d6f502ce35559300d8c66125ea0"],["tags/逆向（基础）/index.html","0873b74870c169498b3eae038fcdfd0b"],["tags/逆向（调试）/index.html","d32a64f46039a1ea97c71813e6ada9dc"],["x86汇编学习笔记_0x01/index.html","7f318a0ebf725d1268e1b17afc883a0b"],["x86汇编学习笔记_0x02/index.html","d5b179c6c4824e818c108ccfcd80549d"],["x86汇编学习笔记_0x03/index.html","68813b6cd01734b11a445a1c8434943f"],["x86汇编学习笔记_0x04/index.html","9df393f6b9ee1f30a5bf14a900dfcad8"],["x86汇编学习笔记_0x05/index.html","4c1e86a4616d4bbe8f11e347d2208ae0"],["x86汇编学习笔记_0x06/index.html","e80ee5e07d5c1f1e0bd5ba72c5a2dab2"],["x86汇编学习笔记_0x07/index.html","bff0a0fe4a28414efbd318c0f65a6436"],["x86汇编学习笔记_0x08/index.html","c96765bd19f0d507aca33666b1c81656"],["x86汇编学习笔记_0x09/index.html","ee80f2d78a8c6e700dc68b745904830c"],["x86汇编学习笔记_0x10/index.html","2a976f150661b6cb05290fd8eb7ef96e"],["x86汇编学习笔记_0x11/index.html","4daf582506b8df072c88a72bce55f5d2"],["x86汇编学习笔记_0x12/index.html","e9139216a1461b1c1e9e10d53f1fbadd"],["x86汇编学习笔记_0x13/index.html","905241e2a65097ab39627fc29e8947ed"],["固件逆向01/index.html","5980faa59c362982bccb05959b95b74d"],["汇编指令集/index.html","97df38a3a8db01103164bcc54c4e2322"],["硬件电路构成01/index.html","1bdf6e0cc4e51d82217ad8c155710d01"],["逆向-基础-笔记_0x01/index.html","1e9e57d344a76be105a2b86461de84d6"],["逆向-调试-笔记_0x01/index.html","4538b9649e6c96f54f2e7c13e8a06014"]];
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








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

var precacheConfig = [["404.html","c55ed9b6683392718ad80eeae974b71c"],["AMQP协议0_1/index.html","a557081493e0dd568d01bc93b731fb10"],["ARM汇编01/index.html","49f838c587a0f2e9de8a330784426dff"],["Andoird反编译01/index.html","8efcb8ea5e10f567dfc6d992734a16f3"],["BLE协议01/index.html","a00b073f33aa1d50605a4e7fa5509d3c"],["CVE-2019-5418/index.html","9844350437f48ca2d995d9a68da7aaf4"],["CVE-2019-9766/index.html","4b1b4b51fa4f004813a8f2587d6499cf"],["CoAP协议01/index.html","b7f312413f99650bb86890d80f48ca1a"],["JS_0X02/index.html","e5bdbc626c75e43cf070b5bda4ce29bc"],["JS_0X03/index.html","7c3d9fb90e247fe5370a145ee5633484"],["JS_0X04/index.html","086a6fb5d80b8bed09abfbd61d755d68"],["JS_0X05/index.html","e66e76e20faa1b7f51660f40e5030a62"],["JS_0X06/index.html","a8e4553a43116e0299abaf2db86fce5b"],["JS_0X07/index.html","d2dce3413fb9da3ac91b542e7531995a"],["JS_0X08/index.html","63034fdf5fe0f9deb94c969a26c02d88"],["JS_0X09/index.html","f832afe6fa11ad24eb562e0fe8881720"],["JS_0X10/index.html","28fe1278d3abc24c6bd997d9c813fabf"],["JS笔记(0X01)/index.html","8cbd65edfecc26060d6d5aa7716d98c9"],["JT808协议01/index.html","04b55f0fc9203ea28d8f92617a674ca5"],["MQTT协议01/index.html","5be16e21abc3e0b0119de2d86d2b30eb"],["NFC协议01/index.html","1e915166685e94a1599f2ed2da8d9258"],["RF协议01/index.html","cc77e7ff0c6ee3ecadb69533e1c37acd"],["Wi-Fi协议01/index.html","06f63e55962ac6bcc227e06ecf22fe71"],["ZigBee协议01/index.html","97520ad73f2fa3d6bce79ce763d133a7"],["archives/2020/08/index.html","c88dc6a4447d9ba1b89df4f11da9cba9"],["archives/2020/09/index.html","2738fc44cda229f676ae940335599ef6"],["archives/2020/09/page/2/index.html","41525fd8fb9823f48d5cef9564b57c68"],["archives/2020/09/page/3/index.html","2f0044ea548b02c301ed68112079a93b"],["archives/2020/09/page/4/index.html","fd8a701c9bc85ff3b2ae055ab8635640"],["archives/2020/10/index.html","ef73f3413bbee7614cfa0b90e7b577c4"],["archives/2020/12/index.html","44e322f8b45f814513006ff493d3dbda"],["archives/2020/index.html","91e016432c2bdb061431d0b7594a2e3e"],["archives/2020/page/2/index.html","2d365cd5d6e1557943e82bd6eb22ba8b"],["archives/2020/page/3/index.html","207a4ec344e79a7432271e358e8d7569"],["archives/2020/page/4/index.html","21efb4219955a9ad19ae38a5b8180410"],["archives/2020/page/5/index.html","a68739f01909e6c2431acd24cc2e1aea"],["archives/index.html","b0c2ba5de8d1daafd0ee9ef017bb3d7f"],["archives/page/2/index.html","f084e8de0b662af03b4708b154e04045"],["archives/page/3/index.html","019c413a45f66b14876e112ba0f3a982"],["archives/page/4/index.html","cf157f2cbab4f80d17e6d3cffb98473f"],["archives/page/5/index.html","fcd3335ce1a85c8dd9b65fc0ec24a710"],["categories/ARM汇编/index.html","03eea0e9e161f30426bef09a84304817"],["categories/Android反编译/index.html","e283f324b73fc7388cc05d5a9f611ff6"],["categories/CVE/index.html","266919e2babe0b826c23547b6a255f4e"],["categories/JS学习笔记/index.html","799ae18462afa4b0d3249265d023dd09"],["categories/index.html","e78653dd42fc9471471ef6e3c0839b5f"],["categories/x86汇编/index.html","c746b7a944c35d954d639c636736cc22"],["categories/x86汇编/page/2/index.html","fff0efb5e934837fa8587e3a3491f016"],["categories/固件逆向/index.html","1a6563ab3f483ea626a0f112a7973256"],["categories/智能硬件安全/index.html","fd049a5f64628497e7f95634251d6d0b"],["categories/硬件电路构成/index.html","4d2018dcd9531ee40a8cd9c61c3a12ca"],["categories/网络通信协议/index.html","b4cb6ebeefd48c0fdf8a71fb14611571"],["categories/逆向/index.html","ca19a3b419c88ce3ac9d19602b528d53"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","b310d89708c10843851a985b73a433fc"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","f8cec959b0e430616e4df66232007100"],["page/2/index.html","05fd48c561647b6708fe45ca98f933cd"],["page/3/index.html","18da4f0e00c2068f5c69fa021d5925b4"],["page/4/index.html","91a3681b06b90df5e2065a53fdd96f89"],["page/5/index.html","c3ca2fa87a3352182972d59d28568bab"],["tags/AMQP协议/index.html","6dbe1d33aa2dd2db61e5a99bced2323a"],["tags/ARM汇编/index.html","18ca16ba9f95ede5bddf65fc1282aeae"],["tags/Android反编译/index.html","12f0c91af3fd4c6654ea284af5efd69a"],["tags/BLE协议/index.html","08f5ac766156d9834d2272f21bb4b2dc"],["tags/CoAP协议/index.html","242b58e7fd12396a50c3ffb79d5bbdeb"],["tags/JT808协议/index.html","8e9a0739833d716ab7d90d6e73c1a547"],["tags/JavaScript/index.html","363c2c06e2d326e8c42dbf78ebd14f9d"],["tags/MQTT协议/index.html","1eff1d66b32a64999c484bca806bf9eb"],["tags/NFC协议/index.html","7a911b2cd5e1baedac11b221c8939f26"],["tags/RF协议/index.html","a7d5709a3314c911d7aa15715335ecc3"],["tags/Wi-Fi协议/index.html","4fdb99cd9c2ea32632c6a820959fac97"],["tags/ZigBee协议/index.html","da265e4ab296b1b0b8f649f41c6e910c"],["tags/index.html","d5cfa6934ac011d18f9be0d3d83d76fe"],["tags/x86汇编/index.html","5dc5673efcc12fd986a9b2161815d680"],["tags/x86汇编/page/2/index.html","7a7480896db26b83779971be529acaca"],["tags/固件逆向/index.html","f433028ffdf2341f336f45935e7480a9"],["tags/智能硬件安全/index.html","d133b34f64de265aeeb1d6a7106c421d"],["tags/漏洞复现/index.html","a4fe22d850c677c7c34472d9f4c4c544"],["tags/硬件电路构成/index.html","42197186e100cee79939338797ee2d5d"],["tags/逆向（基础）/index.html","7d793363fd99dfe70ff8313ef64b0777"],["tags/逆向（调试）/index.html","81d95e9bf1390688b371436c4de28408"],["x86汇编学习笔记_0x01/index.html","0047bf06835a6b60ce0a988768a31830"],["x86汇编学习笔记_0x02/index.html","dcf4ed980926426544673be206c944bf"],["x86汇编学习笔记_0x03/index.html","aabccd02dc49d85bc4d7dabac1112a2e"],["x86汇编学习笔记_0x04/index.html","021bcc0d378f2273b60f70a805700fba"],["x86汇编学习笔记_0x05/index.html","d7b9a08df85575f245e4c3329e86708e"],["x86汇编学习笔记_0x06/index.html","11de42632329ef49ed2ce0e93e28624a"],["x86汇编学习笔记_0x07/index.html","254fd93220ffdce519df6d02b9154243"],["x86汇编学习笔记_0x08/index.html","c08e0ec2f2df2ced0ca4df070b22817d"],["x86汇编学习笔记_0x09/index.html","e4d069532eeb615e23a3488b2a169a42"],["x86汇编学习笔记_0x10/index.html","89dc6ac6b6cc621a742c19217c9341b7"],["x86汇编学习笔记_0x11/index.html","0b0807838c09eb948521b99f93467f9c"],["x86汇编学习笔记_0x12/index.html","03f31ea1edcbd6918d2ef51a0fab2616"],["x86汇编学习笔记_0x13/index.html","ff7c5c5f48fc8009969a577b14b051aa"],["固件逆向01/index.html","b10e0f6edadd0ad036d9e49b2c12e799"],["汇编指令集/index.html","129bcb08318b1a1e36ef09afccaf2b34"],["硬件智能安全(0x01)/index.html","9233e1262493182f8e1f003044d2e8a0"],["硬件智能安全(0x02)/index.html","b23c9862bc3d281ab134ed368ec8738f"],["硬件智能安全(0x03)/index.html","6e6d2beb203c401a40e124a2aff16524"],["硬件智能安全(0x04)/index.html","4f90fd21cadc50e2b1a31811e27c99a0"],["硬件电路构成01/index.html","a88a985fe5e18cf09c32a0c2d864ea48"],["逆向-基础-笔记_0x01/index.html","88ddddd4dd4e8b12d2cd691b232ee91f"],["逆向-调试-笔记_0x01/index.html","7d48c15f420e370e92e76d3fec038222"],["逆向-调试-笔记_0x02/index.html","0dce450b09039c9ec67d3f8819096e60"],["逆向-调试-笔记_0x03/index.html","3833bc5e6862863daaddacd16e8c9e9c"],["逆向-调试-笔记_0x04/index.html","e207e798d41ddfdfe6bcf724d97a577c"]];
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








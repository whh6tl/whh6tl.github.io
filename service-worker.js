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

var precacheConfig = [["404.html","76129cea270c0112b1dfc382211fbe1d"],["AMQP协议0_1/index.html","9d4fc8b6edb4bb2c327b880422fd7b78"],["ARM汇编01/index.html","4b5bed9b8f702190a22e4b66643bd988"],["ARM汇编02/index.html","96568dc09849665f71b8ef8c1b98b8f6"],["ARM汇编指令集/index.html","c5732970f8cd76d7c626de2e19eec13c"],["Andoird反编译01/index.html","f66cf7861d8c81fa2ddb611859f0bd6d"],["BLE协议01/index.html","5ba1feef0a1de984f38171e8b925c9d8"],["CVE-2019-5418/index.html","b0e190040e30169571b77c519b6ea3ef"],["CVE-2019-9766/index.html","7d66268aafd80280c078bc7731fa6f13"],["CoAP协议01/index.html","612758c474caf8c971d5d33594829176"],["JS_0X02/index.html","3a300dba9e10c4b651443d7594000728"],["JS_0X03/index.html","c06d792571012b62dfc4bc344ddb2c2b"],["JS_0X04/index.html","7667a459cefd4ca9687fe4489606b391"],["JS_0X05/index.html","bf8fe2da7f823b878b7e1edb6fce9751"],["JS_0X06/index.html","b2e16282a59e26b47ca7d468c8d63a75"],["JS_0X07/index.html","dfdef045e5ac5f123cac3054b96c83ac"],["JS_0X08/index.html","9a2074cd18dc38155b620c68c8651456"],["JS_0X09/index.html","8ed9298a310dc30270f92a9fdb46d8a3"],["JS_0X10/index.html","4dd410a5aaf4217291448acfeba71245"],["JS笔记(0X01)/index.html","d4ff420469a344803143735fa039d380"],["JT808协议01/index.html","8a578a6a57732024d608f2788d3fa3e3"],["MQTT协议01/index.html","3619019cbae8ac47ac9413cc0c54af8b"],["NFC协议01/index.html","d6f206b4c7bc10b0e902ec5e902631e0"],["RF协议01/index.html","b72247e382b427b3b4327f72a0e61685"],["Wi-Fi协议01/index.html","c6f46aba4a59bf6b37eeb09dfcaac3da"],["Wi-Fi协议02/index.html","79ab7d29edc1b22f0c67f3cb4939e23a"],["Wi-Fi协议03/index.html","c622f722ed8dc569d6ecd6a1ad7ce5e6"],["Wi-Fi协议04/index.html","63ffaf0325dbea19214a015039a54cdb"],["Wi-Fi协议05/index.html","4ddcda0237f5055be534eba8a4895866"],["Wi-Fi协议06/index.html","3b975b3d45b75f93fc1af13e01a076aa"],["Wi-Fi协议07/index.html","1fd7b425f3115424e7403e503261c734"],["Wi-Fi协议08/index.html","5b62c2e8913001539684620efbe89f97"],["Wi-Fi协议09/index.html","fda49d9b4bb25b6a946724a8664e5833"],["Wi-Fi协议10/index.html","98d58617f7684bec12fb06762f9d330c"],["Wi-Fi协议11/index.html","b970367fbc40951c46455c6a61dcbc46"],["ZigBee协议01/index.html","1030bbe9b38a221317d388ac2a0532c1"],["archives/2020/08/index.html","e81e0528e5d962e659be991b7441b58d"],["archives/2020/09/index.html","150ea824a5281d77c30f93ef7206452a"],["archives/2020/09/page/2/index.html","4a1b01d66489bb772e5da529ccec1978"],["archives/2020/09/page/3/index.html","81a7696d41692e1ea69f8efec78b6d11"],["archives/2020/10/index.html","3bdc89b25eb9b2e472e848b0452b06d9"],["archives/2020/10/page/2/index.html","8681cea8283e1be7a88fb89f7622e868"],["archives/2020/11/index.html","1afa5caceaa37feac1441959b95afb2d"],["archives/2020/11/page/2/index.html","350c5e0b7f846ec254f59b2761978011"],["archives/2020/12/index.html","44636cdaa5d1a059c47dfc384ff9dd57"],["archives/2020/index.html","916580b66bf3cdb057fb70c78e11da1c"],["archives/2020/page/2/index.html","a12f874b5663b6a50266d421b8e56dca"],["archives/2020/page/3/index.html","f7fa9154ebbb1bacc51f6eab97da2e44"],["archives/2020/page/4/index.html","3031ccc991a3a53c4e42a9c8f100051f"],["archives/2020/page/5/index.html","81b7a8cb2de214889b1d930c06771df7"],["archives/2020/page/6/index.html","d429ceaddda25e76437b85b259f913d6"],["archives/2020/page/7/index.html","b1de4d025522ff68d0ba880e1c89891d"],["archives/index.html","cd031e7191735b8625fd929035fdabca"],["archives/page/2/index.html","1ffc45dbd2fc981c175e240afe3b6bbf"],["archives/page/3/index.html","acb7c1bb0fe9e06d61baf246bd1423a0"],["archives/page/4/index.html","42f6645161d3f279b3ec240c4b20f97c"],["archives/page/5/index.html","8c06c92c04d8c45ddb451348b1d501ba"],["archives/page/6/index.html","49c4d2b60b4e2e8175c99d5fc04cea0d"],["archives/page/7/index.html","144a9dbd55321102ed6ccc0cb2694dd0"],["categories/ARM汇编/index.html","cda3e1c328d9622c16000e5141145275"],["categories/Android反编译/index.html","379cbe4777551cc2694851b9efd56f1b"],["categories/CVE/index.html","bce160b486ae4679c95c30c3219382e8"],["categories/JS学习笔记/index.html","27fa9ec80d6fedc944b1117714c39d5e"],["categories/index.html","ff493234d4737ba46bcbea8a71eb5817"],["categories/x86汇编/index.html","db7f256d53d1be228f560ee02361fc5e"],["categories/x86汇编/page/2/index.html","9147ab0a1d76c99274356f6c91bd438f"],["categories/固件逆向/index.html","e57bbf023558feba0af7790ac0f01145"],["categories/智能硬件安全/index.html","28ae72e3788026b918413c5fed023a5a"],["categories/硬件电路构成/index.html","b5924928b754ff97ec364d91073e15ec"],["categories/网络通信协议/index.html","10d57e6f9d0b0f6afc2f923172f7d5cf"],["categories/网络通信协议/page/2/index.html","d59fb2117e20d549a63ece55ca60f4a5"],["categories/逆向/index.html","54835680b9781fe1be5988318cfb7272"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","6f3ba5666be6e18ebd34e51b0839f7ef"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","e8303706d3f59f1d9a0b89433d75f199"],["page/2/index.html","96c7af783ea4d3a59d65324be6191a9d"],["page/3/index.html","aba64a2f0c3e09a9b2caaa009e27a0c2"],["page/4/index.html","e1ecb4a5a0625a1c1e2248eabb93e19d"],["page/5/index.html","6bfabb4772973eabd3514f770e65153a"],["page/6/index.html","41e4b45da3bdb64c2c26cc2ab459c708"],["page/7/index.html","50c8269959fe32a61935590f2f06b2b5"],["tags/AMQP协议-暂无/index.html","b040c8e5c5387bff7b28733dd75ba459"],["tags/ARM汇编/index.html","b93ac4620d1c85f59262f5da04cfac32"],["tags/Android反编译/index.html","0593256a725fb7324c89a833a0d9b8e5"],["tags/BLE协议/index.html","de6e6a1989b2d3fdf7d0691ad383451e"],["tags/CoAP协议/index.html","448ff15b6b59a6a08afe670a2583e955"],["tags/JT808协议/index.html","592c84d96b4cce333f525963c50d350f"],["tags/JavaScript/index.html","3b76c325afeb6f1b7fb4d6748f32e609"],["tags/MQTT协议/index.html","effcd31fe1d6d0decc8c2730aad38cf2"],["tags/NFC协议/index.html","6c0fdbbd6a89662ec0b410366a8583c1"],["tags/RF协议/index.html","947ba5140e29a91a63d206cf690bdcc5"],["tags/Wi-Fi协议/index.html","f40d5b1425aaeaabb632469ea1356df8"],["tags/Wi-Fi协议/page/2/index.html","a9a50d4a24b676df973532d9f1233b25"],["tags/ZigBee协议/index.html","a263e34950b956f16e8a327fb8361cc1"],["tags/index.html","c25aeb5dc59b6423ffa225e8c099a39c"],["tags/x86汇编/index.html","2a8eb86943f88e3ec522bfbdb2ef8fd7"],["tags/x86汇编/page/2/index.html","53dd253c3cf720a853e8841f650657e9"],["tags/固件逆向/index.html","a6177e1f3847679cab1989339118f50b"],["tags/智能硬件安全/index.html","3a41fafc0f3904fd787d2bd70fcff153"],["tags/漏洞复现/index.html","3a11945dc319945f6d48098b2f443597"],["tags/硬件电路构成/index.html","ae750d0052884e978146a58915fca2a7"],["tags/逆向（基础）/index.html","a71425cba769b691c004acf023b9da45"],["tags/逆向（调试）/index.html","2293228b0bde2d484d3cf8222bfd1ecd"],["x86汇编学习笔记_0x01/index.html","e7a2584fdd9ff0c9d784462af428e069"],["x86汇编学习笔记_0x02/index.html","a64b01be50a1ce73ca50abcf33d503ce"],["x86汇编学习笔记_0x03/index.html","c841201bf71517bc05bfcdbc33d281b6"],["x86汇编学习笔记_0x04/index.html","7b1d6bed5bb42b19039809f4378ac118"],["x86汇编学习笔记_0x05/index.html","bd4205365a4e8c6fd291aafcdcdbf2df"],["x86汇编学习笔记_0x06/index.html","71401fef9e833c6f72333564a0cb5e0f"],["x86汇编学习笔记_0x07/index.html","1790691120787b320e853f7806041132"],["x86汇编学习笔记_0x08/index.html","9683d531ee6d3ea22df8c68773169c8d"],["x86汇编学习笔记_0x09/index.html","ac17377971bc49810ecc6a4239ae8d52"],["x86汇编学习笔记_0x10/index.html","bb4a2e14f71211f0ecc0d6193b3a8590"],["x86汇编学习笔记_0x11/index.html","077c119c01df13b442f5b1ca0d75a055"],["x86汇编学习笔记_0x12/index.html","b1c47663894ae67912820febacddc5dc"],["x86汇编学习笔记_0x13/index.html","205fb70a08f8b9e27e989f28b6a5290d"],["固件逆向01/index.html","928e380064fa0404d6d7e78bdbb260d3"],["汇编指令集/index.html","13d2139bffbcfe62ddd2b2cfbece00e5"],["硬件智能安全(0x01)/index.html","269bb3fae1e0eb4661a07fbc4582a405"],["硬件智能安全(0x02)/index.html","5ff83ab790c70b1102fedd0d110c208a"],["硬件智能安全(0x03)/index.html","7158078aeaa9f49c3575012d9a598178"],["硬件智能安全(0x04)/index.html","c890da6272c5bd6577c522c03e75f64c"],["硬件智能安全(0x05)_/index.html","fb966288aed418f4dbcd7c4be9572e63"],["硬件智能安全(0x06)_/index.html","2431f457cc170cc6ec477523b71d0da4"],["硬件智能安全(0x07)_/index.html","bafa0df75284f23feb44400e6c253eb6"],["硬件智能安全导航/index.html","610f85aabedd06bb4fe589fc769c4319"],["硬件电路构成01/index.html","267f2c6b62f017d651b0d00bad6a31b7"],["逆向-基础-笔记_0x01/index.html","55808c59c897916a16e9d5f3b32a8e90"],["逆向-调试-笔记_0x01/index.html","5afa4f3de8cf48d0b0e60fccce1cb66c"],["逆向-调试-笔记_0x02/index.html","fe141f402f0b37bd4c76060ccec25e42"],["逆向-调试-笔记_0x03/index.html","b1f079844e15fe384d63efbd90979745"],["逆向-调试-笔记_0x04/index.html","01986daeac9df1d480df4235ef60e2ab"]];
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








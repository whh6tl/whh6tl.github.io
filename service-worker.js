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

var precacheConfig = [["404.html","0d48a2936feb5a3bc66c014febd7723c"],["AMQP协议0_1/index.html","c5ed69dba2f55df5ee22a4f3d40e786d"],["ARM汇编01/index.html","4c0fb0b0b085ce3334bdf5e209685201"],["Andoird反编译01/index.html","7cc5733caba95ddfeb64588b735679be"],["BLE协议01/index.html","71c05bf4684896fc4783fc92fb5e29a1"],["CVE-2019-5418/index.html","af3026a542963afcb61f8016b5103ece"],["CVE-2019-9766/index.html","959aa0bf5eb144cdd25db42fcac80b49"],["CoAP协议01/index.html","38ac30ed6aa0931a4c68f6169110cbd0"],["JS_0X02/index.html","24b5de91b7513944ff1d464f330d0e64"],["JS_0X03/index.html","9b7008af35d26ca9acbea3be9efde332"],["JS_0X04/index.html","d13e5a02e72cb59736016a159a87fb9f"],["JS_0X05/index.html","4d862c64b5aeb2689476b088f91389a5"],["JS_0X06/index.html","5139216feb099453a7185ef5ed0e6c08"],["JS_0X07/index.html","ce9b35ba726a9536ae5006c4f79b6425"],["JS_0X08/index.html","784eb169551d8f9882fb11d5dc1cce98"],["JS_0X09/index.html","157d0b940fa24b8cb3409b4e4c200af7"],["JS_0X10/index.html","eb3cbe873828bfa3319e57d2d00c825b"],["JS笔记(0X01)/index.html","c29a6e161a78552f4f0c0c6165df0e11"],["JT808协议01/index.html","beda4bc44f697457cbb9c7fde6e3fc01"],["MQTT协议01/index.html","f909870845b3ffa167a2effb91713440"],["NFC协议01/index.html","7a9384c686d67674d75856e0c23b18df"],["RF协议01/index.html","d3f495af79ee01f69ba550d6f542575b"],["Wi-Fi协议01/index.html","2ae19d900cb024a7edf234b5c5b4800d"],["ZigBee协议01/index.html","7e2eccec5f9679a994f980b88f6553d3"],["archives/2020/08/index.html","3ad22f2f124aa3323c90decf7b2f3085"],["archives/2020/09/index.html","00c23a3d79faec2694075c95af741eb0"],["archives/2020/09/page/2/index.html","69e96470bf96ab15d6966796b3da5190"],["archives/2020/09/page/3/index.html","ddd341a8b32826e3dd8e01ee8926a675"],["archives/2020/09/page/4/index.html","b65aed22f5fb27a83e0bf2fb6ea8bf95"],["archives/2020/10/index.html","2e1b23ef3a5a0611f0d23edb7e1d66f9"],["archives/2020/12/index.html","c9b88ad96b01588b2ebad13c21a51311"],["archives/2020/index.html","32a69534cc7ae0bbfee707a1e5c420a7"],["archives/2020/page/2/index.html","73811be317067157520289d5c592c411"],["archives/2020/page/3/index.html","08c67ad4e0fc80065f640ab0c92d39fd"],["archives/2020/page/4/index.html","0dc6efdc22b4b1181f0a7173db7fc159"],["archives/2020/page/5/index.html","8c90e4b456b2b2b431968c19d6562146"],["archives/2020/page/6/index.html","aece34c5ad792768dff172b4667d21b6"],["archives/index.html","ec9b2cb56f2bd35dc04fa12da1b4ce5b"],["archives/page/2/index.html","cfcf53c8e57d0f5e26a48727dfe3a52a"],["archives/page/3/index.html","b484dc1929108e6ab02ab267fead982b"],["archives/page/4/index.html","f3e2c7da2e7e05b9ca550968bd85adc3"],["archives/page/5/index.html","33be6bf69ef6518a4f7b96f64d9a8c53"],["archives/page/6/index.html","45ebc63be79405806ee95549712e0637"],["categories/ARM汇编/index.html","992b695a6489014620acfcb1081f15da"],["categories/Android反编译/index.html","1c890d0da5605092afb1d87cfa86f04f"],["categories/CVE/index.html","29212b0abf66370a37649e0d45df922f"],["categories/JS学习笔记/index.html","7aa18687994bc625e4b576adfe83b6ee"],["categories/index.html","1859b31faa01814ee4cd2edba881dec3"],["categories/x86汇编/index.html","4af54dd0a23bde8d74b527172f7fbf4b"],["categories/x86汇编/page/2/index.html","28638fda40d35fb1f0717dd69fc45769"],["categories/固件逆向/index.html","fcb98c4c1a6ac39969101cfcae296ff6"],["categories/智能硬件安全/index.html","6bb17badd11e94ceb77d65b08db835cb"],["categories/硬件电路构成/index.html","17e689fbe18849a84a579e06243c3930"],["categories/网络通信协议/index.html","09a7ede0aea7a88b5a87701a63b4c306"],["categories/逆向/index.html","6a153ea293070d1f5fdc2bef3b27b81e"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","886ee16cc0caa4b6e0439854d28b84a5"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","087465882f1f808cb1d9f819cefe6e80"],["page/2/index.html","6313a687997c40b5249927980c467825"],["page/3/index.html","f2e49169089a31c062267b023aa8e22e"],["page/4/index.html","dc573b7643cfe0cbc239b818621208cc"],["page/5/index.html","89e7ac6ae0618df860ba451a080db9c9"],["page/6/index.html","67e9682815f300f491ff38fb79e9de3a"],["tags/AMQP协议/index.html","3ae29989d0ceb0108b4764fa64be9e40"],["tags/ARM汇编/index.html","6e1782f3e74c98b8dc6dff0a61866379"],["tags/Android反编译/index.html","3143f544191a5159ad864abb7b1f37ad"],["tags/BLE协议/index.html","768d2f26f6fdf38ab0372a3d7e4c7649"],["tags/CoAP协议/index.html","c0f9b324a8875fb6bc7ac368925c4523"],["tags/JT808协议/index.html","5d05a3c740422a12b9826834280f8be0"],["tags/JavaScript/index.html","4847aa53598d9387ea457dbd63a08da9"],["tags/MQTT协议/index.html","c600467cf536cd89fbaf1951441beaa0"],["tags/NFC协议/index.html","e7e24667f1084065a0c91bad9ac05968"],["tags/RF协议/index.html","234165b4ec01bffc64f3154f1c40d0fc"],["tags/Wi-Fi协议/index.html","b38f209f98a5d7fa8ab7641e3685e194"],["tags/ZigBee协议/index.html","616f86526fafa28ecbd8b4d66b76321a"],["tags/index.html","ccffd0518c5f4b779924914648bcc734"],["tags/x86汇编/index.html","4e42e6aa58059c7c85fd269dab34d9d1"],["tags/x86汇编/page/2/index.html","c1a1cc445a328fcab054bf961920b184"],["tags/固件逆向/index.html","7c209b53ad20cd22b579673acc6dfbf1"],["tags/智能硬件安全/index.html","6e29d44fc3bed4aafb212dfbd7dc580d"],["tags/漏洞复现/index.html","ed429215715619bc62a2241309b5372a"],["tags/硬件电路构成/index.html","958004a7689295c2ac181b55aa0196ae"],["tags/逆向（基础）/index.html","c2cbd5e4790fdf669d974b9fece765c1"],["tags/逆向（调试）/index.html","2d87d76b25ec669d4915a9b27dd351a2"],["x86汇编学习笔记_0x01/index.html","26b7465c93e1a0ea1913df05f3e248c0"],["x86汇编学习笔记_0x02/index.html","f19e2397e8145d0715343ebe65719aec"],["x86汇编学习笔记_0x03/index.html","2388fada883187d861664421311820b3"],["x86汇编学习笔记_0x04/index.html","e7f78440b8d2afd0e6b230434ce944fb"],["x86汇编学习笔记_0x05/index.html","0666940d0cc8e52b1d2add871c152294"],["x86汇编学习笔记_0x06/index.html","28d54beaeb0b7881090c9b5ecc5fbbdf"],["x86汇编学习笔记_0x07/index.html","56405df82a7c42f14c6617b406e2baa2"],["x86汇编学习笔记_0x08/index.html","a5d28116456cac81683ae04cdc7f673e"],["x86汇编学习笔记_0x09/index.html","c3c8525d8cb45ff6945de0ff986327f1"],["x86汇编学习笔记_0x10/index.html","a10ee4220b34985f2eb4ae3411186872"],["x86汇编学习笔记_0x11/index.html","4abd1f9d8461c594d5a1f770abc6ae3b"],["x86汇编学习笔记_0x12/index.html","9aaa213927d505dcfaf26ab189fefe80"],["x86汇编学习笔记_0x13/index.html","d1c0275f0e929feec6503b1ab72e662e"],["固件逆向01/index.html","119b83cd2f339245de0e41ed8b42e7a9"],["汇编指令集/index.html","23f310ab1b27ff62a8844db952eb47a9"],["硬件智能安全(0x01)/index.html","4861a639045092b3f6b011c7df998521"],["硬件智能安全(0x02)/index.html","5295e4dc5c24e6a8c331ad77bbeb5bc7"],["硬件智能安全(0x03)/index.html","72790bbb2961feccacab0c63234e0db9"],["硬件智能安全(0x04)/index.html","b52abcc3970a6b57e10fde8216ee4d88"],["硬件智能安全(0x05)_/index.html","78e72b1f96276e238c4af7a948a42385"],["硬件智能安全(0x06)_/index.html","517c6f6fe284081a7779b9cfa5c4d7e7"],["硬件智能安全(0x07)_/index.html","98b3cf1a24c29a94d9c18e031a9d9b1f"],["硬件电路构成01/index.html","ea6903a1e90fa8aa2ab7773a4f03e786"],["逆向-基础-笔记_0x01/index.html","bb85e4f8351ab66e099982fb599b3c88"],["逆向-调试-笔记_0x01/index.html","0498ade18a99ac59238cecafe882f50f"],["逆向-调试-笔记_0x02/index.html","f502a0c17bd38b127cbc918d47393867"],["逆向-调试-笔记_0x03/index.html","c7c27260769708af58cfd72d4b44bb88"],["逆向-调试-笔记_0x04/index.html","49742228c0ffc66fc9f135bad9de1a64"]];
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








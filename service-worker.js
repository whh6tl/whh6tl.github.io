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

var precacheConfig = [["2020/08/23/CVE-2019-5418/index.html","d3093575d79e9a70205ee563fca97a52"],["2020/08/25/CVE-2019-9766/index.html","dc98f6b58b3c3e67cba3357496063f8b"],["2020/08/25/JS笔记(0X01)/index.html","1113407d52cde61d8e269fa870fbcb20"],["2020/08/26/JS_0X02/index.html","e7c282cc6353169293bbb43d00ce93d8"],["2020/08/27/JS_0X03/index.html","f07aaf2ea226158e33c776e1c90a537d"],["2020/08/28/JS_0X04/index.html","d0e08b846f04bb4e698791e234fcf354"],["2020/08/29/JS_0X05/index.html","9dafaa24e03864b9efe88efa3de78f04"],["2020/08/30/JS_0X06/index.html","91bdbab8add5d3b6bf68f076cb4467e1"],["2020/08/31/JS_0X07/index.html","70b51a538719ec58bf0789e5d9d044f9"],["2020/09/01/JS_0X08/index.html","a7f8edc454360ca8bf9acccc22152973"],["2020/09/02/JS_0X09/index.html","138883de1fa44505dfd2acb5a02c019f"],["2020/09/02/x86汇编学习笔记_0x01/index.html","4ed6fe8bdf118223c9aee5736f6f92b3"],["2020/09/03/JS_0X10/index.html","fb436b451049fee8481413e0015da0b1"],["2020/09/03/x86汇编学习笔记_0x02/index.html","f5ad24d15ab5020b9f47ec1411190732"],["2020/09/04/x86汇编学习笔记_0x03/index.html","cd866f82ad6f15f07181a1fbfad7a6f2"],["2020/09/05/x86汇编学习笔记_0x04/index.html","08d0a2a6b5c4f7fb16f25e9d57d96654"],["2020/09/06/x86汇编学习笔记_0x05/index.html","b318272a809d1271c56ce88c1ebf394d"],["2020/09/07/x86汇编学习笔记_0x06/index.html","da174f942eae69f22702659229fec910"],["2020/09/08/x86汇编学习笔记_0x07/index.html","7c06b331442133e77e7feec0da6c7140"],["2020/09/09/x86汇编学习笔记_0x08/index.html","c294ce419f422efc0394618518eb491b"],["2020/09/10/x86汇编学习笔记_0x09/index.html","d2816f85f5e9a96a388ea9e13c72b3e2"],["2020/09/10/逆向-基础-笔记_0x01/index.html","7451d3f525fdc86b6edbe79c415fd2ce"],["2020/09/21/逆向-调试-笔记_0x01/index.html","1732e6a1fb2abf4b72e6dfac7bf8388f"],["2020/09/26/x86汇编学习笔记_0x10/index.html","de028f5f223caebc02ef224536cb2c90"],["2020/09/26/x86汇编学习笔记_0x11/index.html","34c0d00a5b67731aed9d7513ad0c13d9"],["2020/10/01/AMQP协议0_1/index.html","3abd83ef2b1a2547bdf47e0ed91ff864"],["2020/10/01/ARM汇编01/index.html","76f36f05f83a51fd24aa51b7178421c0"],["2020/10/01/Andoird反编译01/index.html","66f4abe8d1298a654875eaab0fa37b1c"],["2020/10/01/BLE协议01/index.html","cba61d5d372bb82b6a456652246a319f"],["2020/10/01/CoAP协议01/index.html","4c2c6f1639d0b187883983542a3068fd"],["2020/10/01/JT808协议01/index.html","c6249af4bb0de21ed32f7f453d9a9fe4"],["2020/10/01/MQTT协议01/index.html","ee7117e6f57e0e96c1dd6dcefc692b5e"],["2020/10/01/NFC协议01/index.html","7090022a0316e9b76e3327d6b0e3af04"],["2020/10/01/RF协议01/index.html","9553138a224ded0ed08809fab206b431"],["2020/10/01/Wi-Fi协议01/index.html","f96800532e76a2124dcc0460553c4ae8"],["2020/10/01/ZigBee协议01/index.html","e69f266f9bb38023f78e80318da51bfc"],["2020/10/01/固件逆向01/index.html","4153c4fc37a6dfe87d3b5e0f956f4738"],["2020/10/01/硬件电路构成01/index.html","99d2d31af733c1dc9a1f19cd3d18f49a"],["2020/12/31/汇编指令集/index.html","8739405bb5dacd881042e3b6b2331b3e"],["404.html","29c256f67c90eb7c65bd2295a31f0187"],["archives/2020/08/index.html","4cdba91a8a55d205c669bbf70c6ac7c3"],["archives/2020/09/index.html","42cbea5c8dc4d0923cd2075bdf0e5ea1"],["archives/2020/09/page/2/index.html","cf255b2e326a7d48ce2bc62047ce60c9"],["archives/2020/10/index.html","a20dffd4514f6645659c7d1533e8621a"],["archives/2020/10/page/2/index.html","67f22ac2ba3b183b5282745b639a7e5d"],["archives/2020/12/index.html","aa23e751b8cca9e1432c6c448777cff3"],["archives/2020/index.html","9b0b2c7280072f58d6a5a7a9535889b0"],["archives/2020/page/2/index.html","db6706ed50ae8fe929db5412977ae446"],["archives/2020/page/3/index.html","85cf53ec236f4ce81808874202f1a648"],["archives/2020/page/4/index.html","44882463fcff1af94868e4f6fbb9ef77"],["archives/index.html","caa7fb7d3fc90f1941ddcbf9efa3b112"],["archives/page/2/index.html","95439e82126a7139e9dfbf5fa35bff79"],["archives/page/3/index.html","2be8919292cc5838e80b96fac34f58fc"],["archives/page/4/index.html","640f00450c72f87ac80ed9d12bd2af6b"],["categories/ARM汇编/index.html","12c2f681f59de6a7f78d29fe581a0abc"],["categories/Android反编译/index.html","554af606e41cbe2cc0f13c0838b45da1"],["categories/CVE/index.html","8fe65de16f2db604d001336f198df985"],["categories/JS学习笔记/index.html","6639164b92959d5f6b35fc6f4ce225e8"],["categories/index.html","ef5c571f41f5981df105c4a6a5ec7b58"],["categories/x86汇编/index.html","4cc178ddf9601458b96d872485b28067"],["categories/x86汇编/page/2/index.html","cb02336be17e6a61cd431f9237a85393"],["categories/固件逆向/index.html","8de8e287eea1c6eecb1bc71942135986"],["categories/硬件电路构成/index.html","b731fe7c33f24a5f3f574a7526967b0f"],["categories/网络通信协议/index.html","b8f9983c71e10f3672f283175795c983"],["categories/逆向/index.html","5a41c27d097d78bdaa03ff209c52c73d"],["css/index.css","e190ce4fce7067c6a08b6350927527e2"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","834092095d2ac9d1312b1850b705fd94"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","88f640b667c219bb903f3daae2c8226e"],["page/2/index.html","dba6cfaddb74180645b303514cf57491"],["page/3/index.html","e8ed44eb995260d1804332d42df164e4"],["page/4/index.html","e86860f4abccc571c5c01ea682a8816a"],["tags/AMQP协议/index.html","38dacd420298a3bcba15567c75e05f32"],["tags/ARM汇编/index.html","ac2ead9e56a16bafaf05b16336e97611"],["tags/Android反编译/index.html","1cbd162ac3aa38850d71e75012744811"],["tags/BLE协议/index.html","4a209f0033e9832a1b6578d5b5ac19e1"],["tags/CoAP协议/index.html","421e366be3756de1cbef2ed4f06a4142"],["tags/JT808协议/index.html","08983ee7f1a38887917b1412793ce126"],["tags/JavaScript/index.html","3fd6de6e69305d0341841d972d266a92"],["tags/MQTT协议/index.html","b29fdaacb17051a1ed6a514e90ef388c"],["tags/NFC协议/index.html","9c83ece79c52fa9b8587fa5d84cebb78"],["tags/RF协议/index.html","cdf694a61eb35df7f0bd2ec72348f332"],["tags/Wi-Fi协议/index.html","a7bd9d2863ea6539da0f5af612d43da3"],["tags/ZigBee协议/index.html","1848af9ac7a0f8e3350d8f36672ba557"],["tags/index.html","694e561aa84233f9dc0a046821eab419"],["tags/x86汇编/index.html","5e6a6d6f1b85fd7ce6cdbf4921cbac95"],["tags/x86汇编/page/2/index.html","5bab196a7edec21a8a5b9fdba17b2d29"],["tags/固件逆向/index.html","bb34cc89e488f89880628116968caf2a"],["tags/漏洞复现/index.html","f49a589ff2d4b07a160685d25b727534"],["tags/硬件电路构成/index.html","1a955aee6484250c9b31a71d5501d741"],["tags/逆向（基础）/index.html","e12492583d65ade7849d03ab76e8e674"],["tags/逆向（调试）/index.html","0885e68dcca063daf765846e7ec096e1"]];
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








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

var precacheConfig = [["404.html","79a54e49d616add06ab28fa9965c2fd8"],["AMQP协议0_1/index.html","4813a1b003d23f1f8b0804a2c7cee1ce"],["ARM汇编01/index.html","a9768c31b636323b1803793b0f28bf63"],["ARM汇编02/index.html","b8691ded1ec1c3a17865e8fb486f9f9c"],["ARM汇编指令集/index.html","12a5d08a9c2d06a86f51d090586ccdaa"],["Andoird反编译01/index.html","507d7ceda173b70fe418c786e87ddf72"],["BLE协议01/index.html","95c0a741067874600c18697720c187f7"],["CVE-2019-5418/index.html","acd4808c0c9e189d02affccef96a557d"],["CVE-2019-9766/index.html","e05e6fd00e6e6a23f93495e818e55cea"],["CoAP协议01/index.html","7e303e0b3e05f55cc4af3c66e6e0b853"],["JS_0X02/index.html","eda4c7ec2c853078a0d40182a9a361e3"],["JS_0X03/index.html","eb45e8535a8bb56df5f8ab4e062674c5"],["JS_0X04/index.html","2e19b149cae2306e41f164502fb77a5f"],["JS_0X05/index.html","abff2de340b806aea0836e262d203c3b"],["JS_0X06/index.html","52bab99ada319e9154ad3d1897ce7d97"],["JS_0X07/index.html","f0ee61d0f01023190f469746315d06a8"],["JS_0X08/index.html","2b2c742859fa2ab2dc5e1169d2ddd3c9"],["JS_0X09/index.html","8380ce3de0e0f8ec7023144f739e270c"],["JS_0X10/index.html","baae498c44fdd072f7fe4d5225d1f911"],["JS笔记(0X01)/index.html","cf139e46029f7d262c8201ff63859bdc"],["JT808协议01/index.html","1ebe559fb4cf6a1298149af000bdbcd3"],["MQTT协议01/index.html","b0d3324348e68c04dc01641be22fdfb4"],["NFC协议01/index.html","85b7d9ac9c29c298c0a3fe5aafd2cbda"],["RF协议01/index.html","51b1e6988a0c263fb19bda6b8f47d946"],["Wi-Fi协议01/index.html","dff1c5bd192e9a930da05c7d6dd96516"],["Wi-Fi协议02/index.html","1a1da33f0f77c16ed6fd374f837c263f"],["Wi-Fi协议03/index.html","e701e91cc900052fb9458f32ffec7abc"],["Wi-Fi协议04/index.html","541106821b652e4206f0fa8ce878d6b1"],["Wi-Fi协议05/index.html","871116e85e7bbff8b4260fceab21c127"],["ZigBee协议01/index.html","7211623168e09c2be6edfcf0cf3a01a1"],["archives/2020/08/index.html","b7c6b3c344050c520a3d999d69a21c33"],["archives/2020/09/index.html","25623d1aa53c4f57b51e27d85e1598f8"],["archives/2020/09/page/2/index.html","2e8f2a821feb6f23a05ee16f3cd0987e"],["archives/2020/09/page/3/index.html","db289418d95d6d0473cd0619f417cfde"],["archives/2020/10/index.html","371a7071563c6ebc142bcc84dc199162"],["archives/2020/10/page/2/index.html","2232752d0806ad5ed58d1d0f86f0912d"],["archives/2020/11/index.html","7e151b77bfedc6823d57df8ff19f4e16"],["archives/2020/12/index.html","23d77019c1537753207049de7904517e"],["archives/2020/index.html","329226963a200d36f0924953750d2526"],["archives/2020/page/2/index.html","76ef53de78d50b9517cadfaa15308bda"],["archives/2020/page/3/index.html","04eee4d0b43e469492230ad9c751cfe6"],["archives/2020/page/4/index.html","36bb20d257c2a3f9bac2224fdff1a13d"],["archives/2020/page/5/index.html","82b72dc9d379a6f03e477018e5e6e916"],["archives/2020/page/6/index.html","1a553b49e14c9d376eb2274781396de2"],["archives/index.html","e8d61e781b06aa464f41b1154f68d562"],["archives/page/2/index.html","83404f11eca8f96b7fdddd6bcb6d6c67"],["archives/page/3/index.html","4d6c9c307c518174ffb8eab75ff2b81f"],["archives/page/4/index.html","06e187b5e2a2de83546fce9c502601eb"],["archives/page/5/index.html","7cee8e41c25aa420724a32c12b000903"],["archives/page/6/index.html","8cb657032426a2d436a18dc54cde799c"],["categories/ARM汇编/index.html","d65482635d13def96d82c1d5b9ed12f8"],["categories/Android反编译/index.html","8e5fdccf6de4d57f84ff45ed58a9176a"],["categories/CVE/index.html","34357e507f92ef5a79b765e2504a3150"],["categories/JS学习笔记/index.html","e4e6f8f5465611d364c7b00743ec667d"],["categories/index.html","3522d243facda9e52886911e906286cd"],["categories/x86汇编/index.html","9202dd831193f729454be70158bdeb9d"],["categories/x86汇编/page/2/index.html","c7e316d5c317ab235f3b8d2e38e3f4c7"],["categories/固件逆向/index.html","a6cd7149bd1dbe35373a22201a0f48d2"],["categories/智能硬件安全/index.html","18ab553392fbad024935e15eb5038e1e"],["categories/硬件电路构成/index.html","e40f16c86035eb88ea4fefda81c41e52"],["categories/网络通信协议/index.html","7f3930ea97bf94153accc40182c159d3"],["categories/网络通信协议/page/2/index.html","5c2c17bc605e73cbebb70d6b50adb071"],["categories/逆向/index.html","6e8ff19f4d89119e86d65bf44a0a22a6"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","d9651ed3dbaed9e9c815c375b6ef9ab8"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","dda9aa212a5ca45391da0233772d4812"],["page/2/index.html","ecac4f698f110d16e9fea217e35a92a0"],["page/3/index.html","e41b222c8380a28e1a75ff386d24f9a7"],["page/4/index.html","9f58841079f382cf2dc3fdc2fa6950cb"],["page/5/index.html","9891288cad57edce32509f6232c59c43"],["page/6/index.html","028ea5a1106de240b2fd565a0c21cfdc"],["tags/AMQP协议-暂无/index.html","5bf3d61746711a883d769a4e92d69cb9"],["tags/ARM汇编/index.html","7a87d44d5c001cd7a28513959b8bd4c2"],["tags/Android反编译/index.html","c000815d1257d73344d283694e298522"],["tags/BLE协议/index.html","ec9f05d7b682b0ed9e72dd5cc93bf269"],["tags/CoAP协议/index.html","c86d7428078c5b380626bd4ccbe8ccaf"],["tags/JT808协议/index.html","7c3dec0b4c15b14955ebdfe3208167bf"],["tags/JavaScript/index.html","164246c84ae52a5add2902349fe87570"],["tags/MQTT协议/index.html","dd8839e77c4a9d54bc2244bbe6ac7612"],["tags/NFC协议/index.html","f5b7dafae2728d99c8675838a302544b"],["tags/RF协议/index.html","8c11af685024f9c227bb7f0807908d2d"],["tags/Wi-Fi协议/index.html","3690a6d40bf0c1076ab1219a8efa0c25"],["tags/ZigBee协议/index.html","45e673df232fee7f3f675947ae2b85fc"],["tags/index.html","c7b4569d9b2c215b1b09f33e94c5d5de"],["tags/x86汇编/index.html","c203e3ec5baf0031644be21113755998"],["tags/x86汇编/page/2/index.html","4d4d401eb8c9fe7d184ad342e47bd0dd"],["tags/固件逆向/index.html","11607e0381bdfbc46760418a075e8ffa"],["tags/智能硬件安全/index.html","96891eb5c7c9d069bdf34a722d237f7b"],["tags/漏洞复现/index.html","637aba1e97bd05ae44d5d7ebbf638d55"],["tags/硬件电路构成/index.html","5b531e055dcc8fcf5243aa931fe2311e"],["tags/逆向（基础）/index.html","dc5f6bef3212eec5dc8b3662aed7c11a"],["tags/逆向（调试）/index.html","c577133ed444993d84511e0c5b9c33d1"],["x86汇编学习笔记_0x01/index.html","f56baf799b8d90a8a37b8551308c65ca"],["x86汇编学习笔记_0x02/index.html","669e86b0b51e969d96e20c5411f6a56d"],["x86汇编学习笔记_0x03/index.html","df1cef38d0ec2790a7f88b2bb11db0ac"],["x86汇编学习笔记_0x04/index.html","1d6ad14984230266e150e9f38aa066a5"],["x86汇编学习笔记_0x05/index.html","a4a9ecdd9330e11097840bfe6dbfd217"],["x86汇编学习笔记_0x06/index.html","9da6d29e8e2310bf9bfa7d01d8e35e57"],["x86汇编学习笔记_0x07/index.html","ce00f6dc18b66d99abb4b73f5f4a4cc1"],["x86汇编学习笔记_0x08/index.html","240bca0e3e7db476c4f56665fe5b65d3"],["x86汇编学习笔记_0x09/index.html","7a51d503f40d40e8543b628504d9284a"],["x86汇编学习笔记_0x10/index.html","a51f38fa024c6e52f3b2d2739b6f6c22"],["x86汇编学习笔记_0x11/index.html","86ff3a700aab1fdd8207e1363be5364b"],["x86汇编学习笔记_0x12/index.html","d71a4a396b15d4fc70547faa5b35dfd1"],["x86汇编学习笔记_0x13/index.html","2e79f515c1155abb3963368832009c53"],["固件逆向01/index.html","50930db9702dd20ce66ed83704e53d48"],["汇编指令集/index.html","a5de1fa09fd87720addec15758b6b948"],["硬件智能安全(0x01)/index.html","ca949918527a1ae4f7baead6a96abdde"],["硬件智能安全(0x02)/index.html","2b59428051cb9d867bf02f3462f13f3c"],["硬件智能安全(0x03)/index.html","efc2b630c3058fc5fb11105a676b0a97"],["硬件智能安全(0x04)/index.html","c77f14b63d5c3fc7939a24d524c65785"],["硬件智能安全(0x05)_/index.html","cdbdeae9477ee3e8d24a5688349cea61"],["硬件智能安全(0x06)_/index.html","0c0d8f491124832550a270d9feaa1eab"],["硬件智能安全(0x07)_/index.html","5282f5ee8a4548443edc1de5c237eb18"],["硬件智能安全导航/index.html","b9c8ed936bf0727f9df1b232c67ac308"],["硬件电路构成01/index.html","939b25900e3c76bb4eff07b9b98ac819"],["逆向-基础-笔记_0x01/index.html","d1b2eb80c049cdc2fa05daa241b138d2"],["逆向-调试-笔记_0x01/index.html","e7ef31b681b403e45c5e37b9dff1e6b5"],["逆向-调试-笔记_0x02/index.html","957e7cad858352e71ed2e4080f46ef04"],["逆向-调试-笔记_0x03/index.html","f9c5e4b8f95a533b250bb70b93f18e41"],["逆向-调试-笔记_0x04/index.html","4bd6bc447d139a47fc21d937a0f70add"]];
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








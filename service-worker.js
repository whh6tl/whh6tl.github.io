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

var precacheConfig = [["404.html","e24cd7266ef55279e05ce0c5a2a0ac86"],["AMQP协议0_1/index.html","a3581e8da46ad328a1d11445eb9f00be"],["ARM汇编01/index.html","a90028963d3576c800e4d0b3efe66e88"],["ARM汇编指令集/index.html","bc920f34b6ed61e3d2a0af0f9df8c503"],["Andoird反编译01/index.html","4cdab59259a9226c8d34f5e039be7e46"],["BLE协议01/index.html","0211d427e2eedd7cafef6e79c5b27135"],["CVE-2019-5418/index.html","b4fa5d7fc7e0ef6387ca0518f707f5e2"],["CVE-2019-9766/index.html","6110a94fa839659ed849f9096beeab43"],["CoAP协议01/index.html","36a2a6e071bbb7bb70547e1e4f2c2572"],["JS_0X02/index.html","5c80ca4dd7e5c0d2b0e63ff4b875abed"],["JS_0X03/index.html","15e69bd1ce8da1494a90944fe56e19ab"],["JS_0X04/index.html","52d94f32d9a08803d23c4ce3846cc054"],["JS_0X05/index.html","6840b062ee82f31e2f17becba5e2a859"],["JS_0X06/index.html","1bce61ed55a1172cbfd4aa5b99555464"],["JS_0X07/index.html","04b5a5b5d706d475bed2d422ddbb02d8"],["JS_0X08/index.html","8c6bab51e3db63f64759507270f31bd3"],["JS_0X09/index.html","57f2c958a98457c2f2320d58352e09c9"],["JS_0X10/index.html","9e0eb82e93d9ccbeeff8e1cf7d8e1a71"],["JS笔记(0X01)/index.html","47541cbc94e6972f433efc58c4fef521"],["JT808协议01/index.html","1cf35affb36f67a786525ed5cf6ff900"],["MQTT协议01/index.html","bbea3be70ac87f67c006fb1052bf1743"],["NFC协议01/index.html","10aa36926678bbb520d8b4aeb18a7385"],["RF协议01/index.html","31b8e5992290909136582ec678aef870"],["Wi-Fi协议01/index.html","996d560b74fcaafcd36017a115743fab"],["ZigBee协议01/index.html","b4e854101829424f1aab2b9b181c2926"],["archives/2020/08/index.html","652c351ea2c7ae4714e9bface8226359"],["archives/2020/09/index.html","c2e9239686e1f746127fe894f7b92829"],["archives/2020/09/page/2/index.html","541e3daf12edc79ace6b4b2de9b050cb"],["archives/2020/09/page/3/index.html","dcd085a6955e667784ee0338e442f041"],["archives/2020/10/index.html","b8c8d213ec3c1d5ef1e15c7742ebec7c"],["archives/2020/10/page/2/index.html","4e8b13f6282c13d2598649483f1d961b"],["archives/2020/12/index.html","e4207cdbf34f4e4124daf0eb8673f0ff"],["archives/2020/index.html","9093f1106ad1ccecd53a92fb75b95a90"],["archives/2020/page/2/index.html","7752332fbd0f9bbf5492e39f11ba896a"],["archives/2020/page/3/index.html","48fd8780410f7c3871b729aa92bf7766"],["archives/2020/page/4/index.html","fb5ac9e18d97fdb2fc2e85d156114d44"],["archives/2020/page/5/index.html","4a8befac40d6679569e19ae304f3773a"],["archives/2020/page/6/index.html","f9d8e9e80fd8d7e95514bd2cc5689195"],["archives/index.html","0296f01715c9b150d5e200687d4c7d0f"],["archives/page/2/index.html","d4f40678a956dbf69dc00947a9f323cf"],["archives/page/3/index.html","5c501eda5e31b18a49bbfa80bb79cb07"],["archives/page/4/index.html","e6036884506bd17e8a77337b25239a83"],["archives/page/5/index.html","9b6aa2eadac41aa464dd8f8ec41017e9"],["archives/page/6/index.html","b97ae2f149bcb4e311d84e30d27e8620"],["categories/ARM汇编/index.html","404661bd1f13385fa47accde37f9f9bc"],["categories/Android反编译/index.html","17fbe5accf7e99a71210fb3f3b067630"],["categories/CVE/index.html","40acd794b3cebf77ab8b88815b277886"],["categories/JS学习笔记/index.html","7d04bd2faceed07fb9c6bc271752685d"],["categories/index.html","ddd6b57d92df434556fbd1df504bee17"],["categories/x86汇编/index.html","5045c5174a4954394fe119c87196d8df"],["categories/x86汇编/page/2/index.html","5f352f4327114fc6724f30d18cccf99e"],["categories/固件逆向/index.html","8170950683375d244255891923fce0b3"],["categories/智能硬件安全/index.html","c08cb2f13f2d0109f3cd250284639752"],["categories/硬件电路构成/index.html","00448f87ebfa60705ae7fe4f85c7e3bb"],["categories/网络通信协议/index.html","7b4480470d4b3664093c4f99a70f522c"],["categories/逆向/index.html","15e5d89610bd4134a31b78eccf4ae87e"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","4f9f7c3d44df13cd945d1e5913aa3229"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","f291f8be957c6fe21b048101266aef4f"],["page/2/index.html","d7e3a8af6d3609c951e4f3db7e8b9bf2"],["page/3/index.html","9483fab5907c7333bc0a4c5df92f4160"],["page/4/index.html","fec582c7c37b0e911f8a49d631966dc7"],["page/5/index.html","4876c7159fce17c35f125a7db836a4b3"],["page/6/index.html","7ec2985d57574ddfa566052dcc404e32"],["tags/AMQP协议/index.html","8b3e95f6ee9527df5bbf7ee3b7109f6b"],["tags/ARM汇编/index.html","8fa26b10e41f9b44bbef163b1483dd4e"],["tags/Android反编译/index.html","c24923a0fc069fff9d48ce729d17d420"],["tags/BLE协议/index.html","f5c71e48c60f1b4f55c3509e773c37f2"],["tags/CoAP协议/index.html","4e241dcde92cb9fb40831edb57c3c1e8"],["tags/JT808协议/index.html","d69f9851bc7fdd87feeb4539cf67574f"],["tags/JavaScript/index.html","846aafa44d19e73ece304d1c7559fd8c"],["tags/MQTT协议/index.html","600cbfb55e70da48dfc730c7571f27d5"],["tags/NFC协议/index.html","054485b2c1a1420c9a4a47a84e8cfce2"],["tags/RF协议/index.html","e787c90d5b1225b5d1c54d5702ab0f2d"],["tags/Wi-Fi协议/index.html","2e975ec9cb02bf59a5274eb452d0cb4c"],["tags/ZigBee协议/index.html","fc9e9e24f791ee47f8365fbeab97434e"],["tags/index.html","b7512752e4780fded74903df8e9153c7"],["tags/x86汇编/index.html","7ba5858162c329df92af039ebfc6b8ef"],["tags/x86汇编/page/2/index.html","2793f58606fdbdd01461e95024b0e428"],["tags/固件逆向/index.html","1f97882603f9907cb731eb9f898b0947"],["tags/智能硬件安全/index.html","3795204cb07cee7117fafa806e39afb9"],["tags/漏洞复现/index.html","433d79f7ceb678a812899339b78f79db"],["tags/硬件电路构成/index.html","95b62b7f82a6f7a771a214c7e4385a95"],["tags/逆向（基础）/index.html","023ac3c0ccb5b27d2e49698cc546a794"],["tags/逆向（调试）/index.html","501c58dcab90656961cf74955bc58b99"],["x86汇编学习笔记_0x01/index.html","092c6e3e1380bbbbc6267946a6831358"],["x86汇编学习笔记_0x02/index.html","bec53f53b6c52e2db74092fea7bb2823"],["x86汇编学习笔记_0x03/index.html","f444cd743894f6f4480331db95aed5c3"],["x86汇编学习笔记_0x04/index.html","b7539e5e4ce5511f11a192147aa58bb0"],["x86汇编学习笔记_0x05/index.html","c11167c9134a7835aba2e52651f49e74"],["x86汇编学习笔记_0x06/index.html","b2a15bcbb4ac149e612e6ea94c33e375"],["x86汇编学习笔记_0x07/index.html","dc50bc83269083f89b25a33d9d6c7730"],["x86汇编学习笔记_0x08/index.html","d8cf50d9e2e64025718e5970545e324a"],["x86汇编学习笔记_0x09/index.html","bd8a15507a8ecce83f810fec613537df"],["x86汇编学习笔记_0x10/index.html","9c10f01c5a2432bb69bd0cfdf8748466"],["x86汇编学习笔记_0x11/index.html","c2d0b73813a0b4e0e5860aa69df21bf3"],["x86汇编学习笔记_0x12/index.html","1cefbf79067777b4c4ba630510b6b3ac"],["x86汇编学习笔记_0x13/index.html","f5033dfd9078699705d78d8323629fa2"],["固件逆向01/index.html","888a9a7573e026ee0423a95d23aa30a4"],["汇编指令集/index.html","9a5abbf1ed17cc6a3cae489f63800417"],["硬件智能安全(0x01)/index.html","736889e1fa3cc8f6052fcaa952a9e081"],["硬件智能安全(0x02)/index.html","2c65aae684455d0bdd9abf305ef23f57"],["硬件智能安全(0x03)/index.html","2f580b5adc8a32cf1fa70429faea9ef0"],["硬件智能安全(0x04)/index.html","1fb32a4f19a60beb2faae1f4d443ed5b"],["硬件智能安全(0x05)_/index.html","492c0a25c88ed7e448700acc09923693"],["硬件智能安全(0x06)_/index.html","3a574a8221eea8fce9ad5c465b1c14bc"],["硬件智能安全(0x07)_/index.html","0641007a60088fcc0ac0938bf336e74e"],["硬件智能安全导航/index.html","6e3d76aa2499f0ab4860b5072a6f0e91"],["硬件电路构成01/index.html","53b6e95ea69b7ae036b9b34e3b12cd2a"],["逆向-基础-笔记_0x01/index.html","960e38e56370975e9a6fa5154ec002ed"],["逆向-调试-笔记_0x01/index.html","6d0e19b3613b9f97b19d253f5a8acdc8"],["逆向-调试-笔记_0x02/index.html","901d41dc842dc78804c556b75db7cb70"],["逆向-调试-笔记_0x03/index.html","ae785c5f2e9725e1095ad735bda1a9f6"],["逆向-调试-笔记_0x04/index.html","0f4fe765ff6bd23b732c2bba4731b55c"]];
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








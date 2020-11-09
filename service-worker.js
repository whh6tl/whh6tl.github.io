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

var precacheConfig = [["404.html","5ff125229889717823ad38a8a46554be"],["AMQP协议0_1/index.html","3efc0c2cf40e20a264ee6c1545f75570"],["ARM汇编01/index.html","618c4ce47d00e1a20b66c834c75068bf"],["ARM汇编02/index.html","6dd5f9bb915c11e850c9c6dba77ef929"],["ARM汇编指令集/index.html","84ade2548d11eedf9457bc8a144fdc0d"],["Andoird反编译01/index.html","35332688cd1b482523d3dff2911438c0"],["BLE协议01/index.html","2464d997a60a6ac528ad7c564044463d"],["CVE-2019-5418/index.html","6467b4d334ea6250e481187e8d5ea5e8"],["CVE-2019-9766/index.html","d46eb34a40bc09debc4614729a23b26a"],["CoAP协议01/index.html","3ba3a1a8e186957dced8ddd4e0175f36"],["JS_0X02/index.html","bc445e84cfa93a4f3d03d8ee4e1a066c"],["JS_0X03/index.html","61dac147bcee7d074fd118b1913a2ad5"],["JS_0X04/index.html","b2e8c8e1063511b9cc2163da9101980d"],["JS_0X05/index.html","880f82236c76e92ba898fd8c675851f4"],["JS_0X06/index.html","cc3130006f3fad32715edff531883e8a"],["JS_0X07/index.html","1b00f9c0a501edebf724cfcc9d0395be"],["JS_0X08/index.html","68f474952c1cb143fb7e75e7c54acf7f"],["JS_0X09/index.html","be98d2fc13175cb71ab79ac93529f8b8"],["JS_0X10/index.html","4fe64e5a81c89bfd776e4c879f98a619"],["JS笔记(0X01)/index.html","43e1f201112d8634097307cd86d9b8ae"],["JT808协议01/index.html","1107b08e7798164cf3d5054c1056c5de"],["MQTT协议01/index.html","61c4d08fe173363b21c4d8acba435356"],["NFC协议01/index.html","9bb811ef0f5dc7c5eba055a3d413d426"],["RF协议01/index.html","ab46905a6d3f9f7324a0558ffcbd045b"],["Wi-Fi协议01/index.html","1b56de807e4e5fd8b5f8a8e5977b9a67"],["Wi-Fi协议02/index.html","b8bb90760b9650462df4ab26e07be0a6"],["Wi-Fi协议03/index.html","a7535b865b3c4035b5dca9517a0891eb"],["Wi-Fi协议04/index.html","928c540986966c74830a4e33a492ee8a"],["ZigBee协议01/index.html","7320c76ab5adaf07e1da62314873fbd6"],["archives/2020/08/index.html","5b18ae38e28a9be6fdb70515a31b3cfa"],["archives/2020/09/index.html","458099fcd46fbd293a72871c2f78d08e"],["archives/2020/09/page/2/index.html","7cff2c7cba4746dc96a71943209e8ddc"],["archives/2020/09/page/3/index.html","b79216115deea2752a23312f83de65f1"],["archives/2020/10/index.html","4777f31542f5f42c4a39db1e4581c986"],["archives/2020/10/page/2/index.html","2560725e98ba2055c8d7ee0780d28263"],["archives/2020/11/index.html","2b91c2c0d4e1ee5e4a6dbed771825377"],["archives/2020/12/index.html","e7c4d42b071fc7903ebbbbec202d066d"],["archives/2020/index.html","9ce3d554cb0a00bdcba13899c46bb4bf"],["archives/2020/page/2/index.html","e274d1e8a855b832b5f9b26f64450ef0"],["archives/2020/page/3/index.html","2eca39fcdf60542d447b06502c274f8a"],["archives/2020/page/4/index.html","382cd14571a521584fb66e6393b51740"],["archives/2020/page/5/index.html","27b1072417a179d41ee8202cfc817625"],["archives/2020/page/6/index.html","3e149b740ade667cf58da454af5e442e"],["archives/index.html","d0be8476d76a3f8ad28dbad621590b24"],["archives/page/2/index.html","c6c24d60317f049f7cd39fb97e4fc7f5"],["archives/page/3/index.html","d74fa136cf29ab65fdc13ba6411041fc"],["archives/page/4/index.html","c9d42d86d3387ef15ec125b36f4d9274"],["archives/page/5/index.html","cd0c6c3829b0082fe767742b92844a0e"],["archives/page/6/index.html","53a2ac245893e3fdd36c4cd6dc710496"],["categories/ARM汇编/index.html","8d0af7a852506908bdbce7d0ec111b69"],["categories/Android反编译/index.html","7befd1972ca098b0eca4198bb3423393"],["categories/CVE/index.html","3db4dee6d289d541f8a1247946ccb121"],["categories/JS学习笔记/index.html","236443f6730489a4b2c34619b2401190"],["categories/index.html","ed216c624a09d1d8477d1b035dae9d51"],["categories/x86汇编/index.html","0ff1e352591861c014358ec345df3b36"],["categories/x86汇编/page/2/index.html","9e90b808862501f80477f063c2ca2a6b"],["categories/固件逆向/index.html","336d03ad1ca7efaabf1437bb9a434d6d"],["categories/智能硬件安全/index.html","630b409f2840d8c22d196d50d59c0a39"],["categories/硬件电路构成/index.html","69006e15f1cb9e07a476c027899c2ce9"],["categories/网络通信协议/index.html","e2b6d77a79d1ecc043a0581b7b1d70d0"],["categories/网络通信协议/page/2/index.html","68f44f720e79f77cd94779d61a8d209c"],["categories/逆向/index.html","bb9fe364cea8f294cbdcfe344eef4d6a"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","2c8ba2796bb0bd62e9e05cdcbed9947e"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","053c21fde4173907655f21f4b55f6a93"],["page/2/index.html","d55b72d049c4a9991816614fd94a2158"],["page/3/index.html","b1c0dddfce92fe4eec3e560ad4362153"],["page/4/index.html","8eaf5a3271eb13e467d5c87478c247f2"],["page/5/index.html","139a3687d2b92416ccd08e85a018a910"],["page/6/index.html","5dcf0222fe5ac1694effa7683e8c2be3"],["tags/AMQP协议/index.html","8cc40c834b725564e291b67461bfe4a2"],["tags/ARM汇编/index.html","66cca01d0442bda77996c4a9f631905e"],["tags/Android反编译/index.html","add08b5bc5b57f949b723cfc4cd90a50"],["tags/BLE协议/index.html","d249429b93972895ffd87aa193443526"],["tags/CoAP协议/index.html","6ba876d72663e7dc1f90f9787e99a022"],["tags/JT808协议/index.html","ca84c65ae871e6bead6548aa88a68830"],["tags/JavaScript/index.html","4412bf5ce7864f4ad87a622736fa2a16"],["tags/MQTT协议/index.html","d603d7c61cebb307554935f5b9b855ee"],["tags/NFC协议/index.html","33dc0f21e1e76bbec84abf61674f404e"],["tags/RF协议/index.html","e24e9dd3461288aed66d16a17a3b0a3b"],["tags/Wi-Fi协议/index.html","b844ab3c9e714a81469a547278dcef2d"],["tags/ZigBee协议/index.html","27bcc035fd84cfa9d25e68602de1182e"],["tags/index.html","e8e8512f49fa7eedb3214675c38cb2eb"],["tags/x86汇编/index.html","8c04bc81f3b87a6e87bf622a2562ec2f"],["tags/x86汇编/page/2/index.html","0309e78f4b70663462361d8432ea5e06"],["tags/固件逆向/index.html","4249aa40e9567d64a71a86a6ffde3d85"],["tags/智能硬件安全/index.html","3c9d606a0b2f5ea715bef1ea5e3c271c"],["tags/漏洞复现/index.html","032ce3d159de5be8a1138421cb3639b4"],["tags/硬件电路构成/index.html","52115adf3d78e6ac93dd2565ef856b82"],["tags/逆向（基础）/index.html","a1cb34976870c97012ac3a4a5edb8e46"],["tags/逆向（调试）/index.html","e033d0d2ea899dc213b819d6f744a9df"],["x86汇编学习笔记_0x01/index.html","6b62cddf3500a04218524d29ba44d54c"],["x86汇编学习笔记_0x02/index.html","cff0c3305ac9765d9b41fd780cf972f8"],["x86汇编学习笔记_0x03/index.html","02d990a879eed24312ce56fc7e8fe653"],["x86汇编学习笔记_0x04/index.html","7a16c24823e5587a1a5f5ce208a09ef8"],["x86汇编学习笔记_0x05/index.html","8ad590d27934e47cc7bd0ba0d4ea1cc3"],["x86汇编学习笔记_0x06/index.html","a45e2cb43a841baff3659a8316adf34c"],["x86汇编学习笔记_0x07/index.html","cacf9b5a8080367215259f45a933cfed"],["x86汇编学习笔记_0x08/index.html","5e7550409d5a7e7463abc30e349e08e6"],["x86汇编学习笔记_0x09/index.html","a40f81c5417086a78d5814fe3007ec9d"],["x86汇编学习笔记_0x10/index.html","f934a64af9ce449e82cea80efe1bb8ca"],["x86汇编学习笔记_0x11/index.html","5710375f96129cbc7c63f4c6b05e8c03"],["x86汇编学习笔记_0x12/index.html","54d11475114beba85b3c0209106912c1"],["x86汇编学习笔记_0x13/index.html","c69fa85d6865171e34024d301b49a699"],["固件逆向01/index.html","2985cc280b9c03e2332443f9094c94b3"],["汇编指令集/index.html","814b6115228b8ab2f6d9d6a79d67f123"],["硬件智能安全(0x01)/index.html","b9357f76a072b321e289be6173c940a8"],["硬件智能安全(0x02)/index.html","bbde66d327241c38951204091ed3e32f"],["硬件智能安全(0x03)/index.html","29e7fafc5254bac7d8eb945f2844b2cf"],["硬件智能安全(0x04)/index.html","94023b05fa33b84d402883544073b4d0"],["硬件智能安全(0x05)_/index.html","ce9528e36a681eaa216c68b95526d991"],["硬件智能安全(0x06)_/index.html","1f397e11325c17a73fa3ffbedb89d316"],["硬件智能安全(0x07)_/index.html","c0e5efa4f528f10fc6e1ce67ebbe5878"],["硬件智能安全导航/index.html","2627bd1898035a043a9b7d504b35efdf"],["硬件电路构成01/index.html","5c33cfcfa491d81b28c99db49d4d08da"],["逆向-基础-笔记_0x01/index.html","8a86958a8bff586bdfe2023b76330ea3"],["逆向-调试-笔记_0x01/index.html","5efe12bf5e24649fe067dc8ab91ff33d"],["逆向-调试-笔记_0x02/index.html","7bd06d84c3029b55dc4e34b204ab3b65"],["逆向-调试-笔记_0x03/index.html","774d5716ad29a7e08b87af89f2d73d61"],["逆向-调试-笔记_0x04/index.html","c7e92d7832699a90084ae1cd3bb0630c"]];
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








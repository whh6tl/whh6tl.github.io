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

var precacheConfig = [["404.html","6a226f873fc2366e3ec38b0656094fe3"],["AMQP协议0_1/index.html","e5680628923c6ad4c63caf26286f4538"],["ARM汇编01/index.html","0c666aace81edc29a7d977682190acf3"],["ARM汇编02/index.html","eaac8c20a4864145bb3e818b5ea8279c"],["ARM汇编指令集/index.html","f6194bba3b43c009768543e1025d18da"],["Andoird反编译01/index.html","4b4ea5efee318d211bce17a2be5d043d"],["BLE协议01/index.html","34a139631bf8c9387e72e857348dd8fe"],["CVE-2019-5418/index.html","6e856a4218692dd37451d3ffaeab17ab"],["CVE-2019-9766/index.html","16655c75c1170e017b7ce9e612b5ac4b"],["CoAP协议01/index.html","c8611e4eaa6b910c4b3846f2116a24e9"],["JS_0X02/index.html","96ce30ce446e7ab38b7580f80045b303"],["JS_0X03/index.html","9a07ddb0ce4eef89dab13c72df7a6ad4"],["JS_0X04/index.html","7f06300ffe71f2ae37efe3924cdd178f"],["JS_0X05/index.html","f17b1944293b229de655960e5308dea9"],["JS_0X06/index.html","b810e0db932be4ff34f12e20052993e7"],["JS_0X07/index.html","3da6c949329a5c6c356311ca7439119e"],["JS_0X08/index.html","cf456221a1099373a2d36dfd1d8617b8"],["JS_0X09/index.html","9ce8cf81d44be1a5e90a368df2445ecc"],["JS_0X10/index.html","3176aaa3a6faa2b7426314570cf8f653"],["JS笔记(0X01)/index.html","b0873bdacf8f227e8ddc6ab7c9fc662e"],["JT808协议01/index.html","c1b63bf66168c1e5d52b440d4cdca5c8"],["MQTT协议01/index.html","29389dca61cc12f2d69ef39c807da5e2"],["NFC协议01/index.html","6487844d0d761472ebd0366073b1e515"],["RF协议01/index.html","a1864dbce8318045db9aae6217cac43e"],["Wi-Fi协议01/index.html","12f097eab6c5183ef6306173873ae178"],["Wi-Fi协议02/index.html","74dfb6c8bedf3bdd4b876844fd0c8f82"],["ZigBee协议01/index.html","85c4d64435efcebeb767f8b72b4bb66f"],["archives/2020/08/index.html","aebbb37cd122a415d25e54bfff99a3c6"],["archives/2020/09/index.html","688d0d9cd181ea8e8f6a08f943436030"],["archives/2020/09/page/2/index.html","80e41d7f232adfac2d43852262e63f7f"],["archives/2020/09/page/3/index.html","d2a6234b2324f2840a20762e631095d8"],["archives/2020/10/index.html","7ff2036fa44a1a3f7afb43ced05b8a53"],["archives/2020/10/page/2/index.html","8bb9b5859ec0001358b45eb516762309"],["archives/2020/11/index.html","e3ac3a2161c6512e1db7b7ae2f956d97"],["archives/2020/12/index.html","3516f8d1d0a679bec0a4f15cb36666e6"],["archives/2020/index.html","19468904e915bce4e0330081c11de512"],["archives/2020/page/2/index.html","30097bef9d4146010533179e3a030410"],["archives/2020/page/3/index.html","fe8f0d921aa3b4b88f98a45e3618917e"],["archives/2020/page/4/index.html","77304dfe723f9a385d834da36b62c89e"],["archives/2020/page/5/index.html","7bf9c49896a547c4e7aa9ed91c1f16a1"],["archives/2020/page/6/index.html","d1a46abdce12fe9eb67b6eed67d67f4e"],["archives/index.html","836ba18c1de761ef492995c91cd1c091"],["archives/page/2/index.html","8f51a33e58e01abd9b18176effc27c3a"],["archives/page/3/index.html","cc2733235f37eb674eca07a73c3083e3"],["archives/page/4/index.html","16484932d5cd60cd5385b51ef755571a"],["archives/page/5/index.html","89cf212f721c103d3f0f8c0935ace813"],["archives/page/6/index.html","fb1637b3cb886ca838f85ffd224819f9"],["categories/ARM汇编/index.html","2077ad86b776c14214375101a97086df"],["categories/Android反编译/index.html","63c7839447888aa9a8231712b9957e0b"],["categories/CVE/index.html","00a78f6362ba201b6f116fdea12eb6bf"],["categories/JS学习笔记/index.html","0a263d399dcb2dc7152d20abb9626410"],["categories/index.html","9628e4bc507a33cbbf2ceea82ac94a3e"],["categories/x86汇编/index.html","b77056fbcdd9bc661cc7aa0d510c0eb9"],["categories/x86汇编/page/2/index.html","e77b869c8df1aeec4d49591c82a37b1a"],["categories/固件逆向/index.html","90a299abd1b93ce115e91e102265e4c0"],["categories/智能硬件安全/index.html","07397dbe489f5675cf279129b6fea37c"],["categories/硬件电路构成/index.html","b9dc13f289ddd76fdd13cf2fae2da5de"],["categories/网络通信协议/index.html","abb53afddacc4603eb8de8779ba6e87c"],["categories/逆向/index.html","6f55d6b17b87521bff53478e91f4703d"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","939a0f0cdcd5335d4fbaa7ccb31cfd70"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","683879511abe780003abc00b2a1b6fa7"],["page/2/index.html","3f24c6381cb304c575bb0eb80ce6e7dc"],["page/3/index.html","2ab68827cdec7a89dd13d76ea52f23bc"],["page/4/index.html","c2fbe1ebedd0076d1ca3c56f86c76227"],["page/5/index.html","c3502ee85ebd5bed806179cd10610e90"],["page/6/index.html","d0ffa863db39b8d5cc38a66d2cdda572"],["tags/AMQP协议/index.html","b76279bdba574fe6c72b193640efcc96"],["tags/ARM汇编/index.html","e4207cf63adc98fe96c5ce8bd73ce17d"],["tags/Android反编译/index.html","bd5c55ed7a99b1846d7558a7864b751a"],["tags/BLE协议/index.html","8c79444445c9fb2b04546c57168b405d"],["tags/CoAP协议/index.html","75b5da31579fcbcef6e776a6555f7441"],["tags/JT808协议/index.html","73ae58aa9d62be41e23babc5f1f8bf37"],["tags/JavaScript/index.html","3cab7213bdbe6b44c87b1ea311281dc2"],["tags/MQTT协议/index.html","68e22fe8c09ae881790756ac6e3809d2"],["tags/NFC协议/index.html","503edd932fb47d7289ff10f71de010f5"],["tags/RF协议/index.html","2b92e5ebed08bb12b9502308e96282fc"],["tags/Wi-Fi协议/index.html","40fc546aafc50b5d740a5d611d59097f"],["tags/ZigBee协议/index.html","7ffffc0d4c4190ca739ba9e4153dcfaf"],["tags/index.html","1091a21cf754274984b782dd5303ba2f"],["tags/x86汇编/index.html","77ca644f147b012524bfc35414131311"],["tags/x86汇编/page/2/index.html","68549b590eedca611375ede03508d6db"],["tags/固件逆向/index.html","166e2da88fd3e746af7a4927f2db3c49"],["tags/智能硬件安全/index.html","8d37853fd6ec9bb9a5cea0aa6cfc7b05"],["tags/漏洞复现/index.html","3b7f3ed3dd73d2c4af98ffd75bde615f"],["tags/硬件电路构成/index.html","68c71ebc8c18aaff027cf1d3ab0a51fe"],["tags/逆向（基础）/index.html","d8053a9b645be3a5e93f5f5546535ab7"],["tags/逆向（调试）/index.html","4e4fc7e6be9cba49403ff04d15cb759a"],["x86汇编学习笔记_0x01/index.html","96afee0e978879d3035d7529c93cebf6"],["x86汇编学习笔记_0x02/index.html","859a2adc3fb75001663470971b63d9cd"],["x86汇编学习笔记_0x03/index.html","1d2f984a5c1710fa9cdba1cd670b36d1"],["x86汇编学习笔记_0x04/index.html","908cf755d58fb3c72b4f184cd7fbb6f0"],["x86汇编学习笔记_0x05/index.html","5074c2ab1faf8946aa32811ce01af2aa"],["x86汇编学习笔记_0x06/index.html","235f8110eeb13e2b7cf434ebb1eb2c97"],["x86汇编学习笔记_0x07/index.html","121b60cadaef3d9b87acfd93138f283f"],["x86汇编学习笔记_0x08/index.html","a3ffc63505dc56a055db16ff3653694e"],["x86汇编学习笔记_0x09/index.html","bffc50b8a60abb7f37bc84c2bb4657fe"],["x86汇编学习笔记_0x10/index.html","0a2008d3ba6b8b01b78fd4533de3d0ab"],["x86汇编学习笔记_0x11/index.html","7f78816cd236f11675f35a2fce6c795c"],["x86汇编学习笔记_0x12/index.html","9b3b09f2d02204023193f146af0976ea"],["x86汇编学习笔记_0x13/index.html","269595f03d3cae85cae4518a646e739f"],["固件逆向01/index.html","47a305f8a17bd6999ba4e706465e59bd"],["汇编指令集/index.html","5e0729b11800aa85a9d578037712aca2"],["硬件智能安全(0x01)/index.html","cd7b1b8e0f0ace808dc5fdedbc092f75"],["硬件智能安全(0x02)/index.html","0c90e7dfc878a44b6eeb403028ce6054"],["硬件智能安全(0x03)/index.html","5be5bd43fb3a0aaf8fb0cf57970ab199"],["硬件智能安全(0x04)/index.html","bee88fdc9f69b6bd17f1f68fd56592b3"],["硬件智能安全(0x05)_/index.html","ca077b08d68713479e49b8d59abe49de"],["硬件智能安全(0x06)_/index.html","c5f65324ddade19e6aad93f886fad862"],["硬件智能安全(0x07)_/index.html","ebb7d1be574515d9a339125592ad9720"],["硬件智能安全导航/index.html","99bc190cbcb9a32674a26e0f0b27e88d"],["硬件电路构成01/index.html","53ad02a4d0681d0444633a0023279dec"],["逆向-基础-笔记_0x01/index.html","3ab62b3830b3614c3eb295fac2eab892"],["逆向-调试-笔记_0x01/index.html","73e4629bafcf08a7fdca18cf86002b2d"],["逆向-调试-笔记_0x02/index.html","58e6e5ed075ff153dc9e7f07159ccb4c"],["逆向-调试-笔记_0x03/index.html","4d3eb22819877b944db3c629b72bd288"],["逆向-调试-笔记_0x04/index.html","45afdd185db2cb70182689d069ad29a6"]];
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








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

var precacheConfig = [["404.html","b1e8cab3f88cfb3a59da0eebf4fa55cc"],["AMQP协议0_1/index.html","345d8e88e209466a315d7023dab065c3"],["ARM汇编01/index.html","affa8fb0b57129e14824af3e836bf3a4"],["ARM汇编02/index.html","0b62d6cde74132dacdad5c9e2326606f"],["ARM汇编指令集/index.html","4fa5d2bc9c93f7e252f3c974333779ea"],["Andoird反编译01/index.html","bddc0062676e8c9c7bfc9f26c12a6c1a"],["BLE协议01/index.html","b0b112088ae8ad644db8b8b8d1b8003d"],["BLE协议02/index.html","f8bc5e3a960788b1431a2614f3226578"],["CVE-2019-5418/index.html","60c9cdd37f9cf3384d7f1a44aae52e00"],["CVE-2019-9766/index.html","3ef257dac010ccf69e5f13b0fa4767fb"],["CoAP协议01/index.html","724da77405b8b48e60f728d488ca7c6a"],["JS_0X02/index.html","08171744fd4ba85a222774022ef3d9a6"],["JS_0X03/index.html","b3312febaffb09313bd681f82481bec7"],["JS_0X04/index.html","a98bbedbd1317b5e7e6646bf633fd6d5"],["JS_0X05/index.html","94c5fc5bb93ec44a117370680b9a693c"],["JS_0X06/index.html","592709879aef5786d9799d97ddd71685"],["JS_0X07/index.html","32786508f6f5a61a0195052463daa93b"],["JS_0X08/index.html","8564c166c1bae27a341eab504df44626"],["JS_0X09/index.html","20f135f2520d92dca3060793b976e450"],["JS_0X10/index.html","589ab24ec41f66f36ead775dd693c968"],["JS笔记(0X01)/index.html","2771f50c8e0f857a900be7e2cc6def07"],["JT808协议01/index.html","f199665d521266b5e8f23ffd9e4eb02b"],["MQTT协议01/index.html","3b16072bbb689310e4f4c34b4da4295b"],["NFC协议01/index.html","ac92010a12b5c762d621ac3291e302f7"],["NFC协议02/index.html","c8b0ae5e9b69a8a6df6161198107e348"],["RF协议01/index.html","97f2e100911fb627a7f52c861c970d10"],["RF协议02/index.html","b37689885a2b13612678fa5970f5d3a2"],["RF协议03/index.html","c77b788c4a8231de2f56bdf9f2b42892"],["Wi-Fi协议01/index.html","12a296a8e5762377681e0c3dedca209e"],["Wi-Fi协议02/index.html","042607b5a375ace7f57a38045ecb0df8"],["Wi-Fi协议03/index.html","1418cd86cc59f7d001e84aa6982a6920"],["Wi-Fi协议04/index.html","7153f7420855ea3e6cb48ac42e885c53"],["Wi-Fi协议05/index.html","9725ad2cc2c3ed78842a2329be3d575b"],["Wi-Fi协议06/index.html","ca11bee010ad7d27161c02b0611ac60b"],["Wi-Fi协议07/index.html","1539d5a0100d5b49df119c195b8fa45b"],["Wi-Fi协议08/index.html","e7b89e008b109a4933819f173dd255bf"],["Wi-Fi协议09/index.html","95592f4d4a652b7c9ffd1986c98c03e7"],["Wi-Fi协议10/index.html","de433e24710703f8929084e963f730c1"],["Wi-Fi协议11/index.html","e0197dbe38b19a3f5b87d0bd6ecbe535"],["ZigBee协议01/index.html","3106f5f63ab90b1a1fe2190c1d4ce1b8"],["ZigBee协议02/index.html","c26da2d23771103d7e4d564dc169ffbd"],["archives/2020/08/index.html","a65327fb75bd4ce24ec64e554b7b9d94"],["archives/2020/09/index.html","7f201db65a678bd858ee14d23d0a8e17"],["archives/2020/09/page/2/index.html","f23c39cb98be4355c1bf34dde84a57ac"],["archives/2020/09/page/3/index.html","ba2ac035c935008219ad07bf39514368"],["archives/2020/10/index.html","19705f50af5a7f2431bacf30672bd479"],["archives/2020/10/page/2/index.html","a60a6e039cffdf9859da6f3f18370baf"],["archives/2020/11/index.html","ff55413d849c51d3f1d374f60d749490"],["archives/2020/11/page/2/index.html","4a77299fa48cdf4df7048d7cb040406f"],["archives/2020/12/index.html","72eab64eede7f71e47d1cf596d7a60d6"],["archives/2020/index.html","39a4beaaf021a6574f33e8fa9da056df"],["archives/2020/page/2/index.html","34768a8a969aae0dab58044ddbb30ec1"],["archives/2020/page/3/index.html","7ffc355a362acc6d21e7590d2c1cc896"],["archives/2020/page/4/index.html","176f7b39014784dbeb57b03d43fdeb5a"],["archives/2020/page/5/index.html","c5b5f174c79584d0e27557b9c76d0116"],["archives/2020/page/6/index.html","aa41e299ca8e0d52a9b65b98c521de99"],["archives/2020/page/7/index.html","6d401612361dac17b4628f7d55f5e5ad"],["archives/index.html","30079b1fa347658af4e75f207b02b32f"],["archives/page/2/index.html","c7911edf9c48042223233c556feb86e3"],["archives/page/3/index.html","bacafd14e44df81c791219fd13e6f0ed"],["archives/page/4/index.html","15256a8ac76750d6bbb46f48ae97294e"],["archives/page/5/index.html","eff6ab41c35d8417065f3ca9c4225cd9"],["archives/page/6/index.html","70cec83f20d7d76cefe9fcd477a80942"],["archives/page/7/index.html","577f4c16c5dace405e6398435e1c14f9"],["categories/ARM汇编/index.html","b423abcf1f6eeaf4b9ef2b3d5406c05d"],["categories/Android反编译/index.html","4e2e01b9c46bfee867c665da4ed15e11"],["categories/CVE/index.html","ed1dbf32c830c2601889072816387589"],["categories/JS学习笔记/index.html","2a98863ad018b43646e606d24c80af76"],["categories/index.html","006fd81865f845ac2ee3b896656b4d31"],["categories/x86汇编/index.html","0fb551fdac459ae59ec24e798c87f9bb"],["categories/x86汇编/page/2/index.html","f60000a5f5d3345eca13dfc0da3eece1"],["categories/固件逆向/index.html","5228e563d9c230e0ba6cf6e9dfc64dbb"],["categories/智能硬件安全/index.html","6bac04deb831677ac731065e61fbff51"],["categories/硬件电路构成/index.html","7b86a9964bc2cce85443cbc235f0f4e2"],["categories/网络通信协议/index.html","005c27ca4adccb135a914b58464818c6"],["categories/网络通信协议/page/2/index.html","e0e413a331125be21d82a62e6c794dc5"],["categories/网络通信协议/page/3/index.html","cbfbf1520522faf0bbeefb626acd9b5c"],["categories/逆向/index.html","ff3b9d9200621777bf2a4050c488166d"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","4854e63eab65b4ac3d1ba9a28794b7f6"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","d007d9ef0d4790fb2f0adb0b60dd40f5"],["page/2/index.html","f75165b018e65acea4d73a2d9eaa359b"],["page/3/index.html","56ca076bf275feda66e373252ab2995c"],["page/4/index.html","47ab1ceecbaaa24404b357d9cd35f8e2"],["page/5/index.html","a6ff40be1d0f4dccf50776dc15cecd3e"],["page/6/index.html","49062aede2e3ced88c0592e0e96da1ee"],["page/7/index.html","f6b2f8435c3eb35268817b2d85fe41db"],["tags/AMQP协议-暂无/index.html","0c0b63fd6e3377ae3f71287404a17b1b"],["tags/ARM汇编/index.html","de39192551c533c4f86dbba41f95bdf8"],["tags/Android反编译/index.html","b05b793d05b1cbd51890bee95f48be34"],["tags/BLE协议/index.html","7de674337f49cadfa5400a5c20dbb2f3"],["tags/CoAP协议/index.html","e334317e29af1364de3b634d03517987"],["tags/JT808协议/index.html","76262d1c80d1c8ab507ad24b2dcae388"],["tags/JavaScript/index.html","01da87dc42e9daa67259fd608a60b35b"],["tags/MQTT协议/index.html","bc38e67105096cab08ea5f151e27f03d"],["tags/NFC协议/index.html","9988811d25c4e7b9bf4594130d8c1747"],["tags/RF协议/index.html","e92c3d1820733cbe6f4d0b0d37ea0908"],["tags/Wi-Fi协议/index.html","4912b3beec46d0258e6fd681cdb18de2"],["tags/Wi-Fi协议/page/2/index.html","8bf0754d32da8ce6d99717335c1cc093"],["tags/ZigBee协议/index.html","788b9f85729276310ba542877637f358"],["tags/index.html","6267c918710880ad0c575dc1de459dac"],["tags/x86汇编/index.html","aed737b27ee746119e0d10eeb054c0a3"],["tags/x86汇编/page/2/index.html","fe642117ab6a92d70e59d0d676742cf5"],["tags/固件逆向/index.html","91a94323dfa1f0d7688d19d77c179c55"],["tags/智能硬件安全/index.html","49c7305628899ffaaaeafea09ada9f69"],["tags/漏洞复现/index.html","2237d6a63924e76420aaf4d9b346a045"],["tags/硬件电路构成/index.html","aa069c5e46120fa14913ea041ef3735c"],["tags/逆向（基础）/index.html","ad15528eee9dd0dfda6121dd5c2ebc8d"],["tags/逆向（调试）/index.html","2702c0e16f04b57cb09903416f2ebd7b"],["x86汇编学习笔记_0x01/index.html","fc597c5dfcf0b83d6c36652d5b5a4e84"],["x86汇编学习笔记_0x02/index.html","31616004850941510f595c1d616e72ee"],["x86汇编学习笔记_0x03/index.html","9f0636444e0acbbc2dfb5e08f9534f0b"],["x86汇编学习笔记_0x04/index.html","abfc1766cd85996f4c33c1def709818c"],["x86汇编学习笔记_0x05/index.html","c41ebd82d6316a1fe0bd6918e2603207"],["x86汇编学习笔记_0x06/index.html","876492f1608f114e4a0874eb07eda3b5"],["x86汇编学习笔记_0x07/index.html","062fae1920be426a4c964be5d61e138d"],["x86汇编学习笔记_0x08/index.html","72ee24cca739db0babf0d516b6f61bce"],["x86汇编学习笔记_0x09/index.html","0b4185c58007ff7d60863b2b73fa56bf"],["x86汇编学习笔记_0x10/index.html","786164c9f9955b1dac4231a910869762"],["x86汇编学习笔记_0x11/index.html","9c880fe35598716ed6e62ecb05edab51"],["x86汇编学习笔记_0x12/index.html","8a3c11b70891c5e1ecd1932177fb6e87"],["x86汇编学习笔记_0x13/index.html","f6bad7e4d270dbe9c3346604b4929287"],["固件逆向01/index.html","1da72f9197e991dff674323520c061d1"],["汇编指令集/index.html","ad8451e47c1b6351d2b4d564c0b75891"],["硬件智能安全(0x01)/index.html","6a61d320dce8d6d1cb7a54b68e4616d4"],["硬件智能安全(0x02)/index.html","0bdf868587307aa87fae8a73f6a58901"],["硬件智能安全(0x03)/index.html","8784155a4a99a6335448b84e52a194db"],["硬件智能安全(0x04)/index.html","e9f63d6ccc1ecbf7c51961c56f9a5d0b"],["硬件智能安全(0x05)_/index.html","71641993b8090bd6d8ff427c88376cc6"],["硬件智能安全(0x06)_/index.html","20174df98a790a421a0fcefdfea3e713"],["硬件智能安全(0x07)_/index.html","ec166f10ae125b5a2b471aaf9d2601c5"],["硬件智能安全导航/index.html","9c680e85fef4999b72b19bd5fa822a44"],["硬件智能安全（固件番外）_/index.html","8ecff39ec4927acf772c503599b28a8c"],["硬件电路构成01/index.html","25bee5fc10e9724741a04c37c1d5ecec"],["逆向-基础-笔记_0x01/index.html","b944ac2872e61da61880e83d193c71a6"],["逆向-调试-笔记_0x01/index.html","eee025f7dba6163323f03f438f589cb7"],["逆向-调试-笔记_0x02/index.html","f11db94a9555e4dcca25ddae4e53645e"],["逆向-调试-笔记_0x03/index.html","a1b84d85a3945242d6c117f864859e7b"],["逆向-调试-笔记_0x04/index.html","9492c8fc5366872b759997a97f5808ac"]];
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








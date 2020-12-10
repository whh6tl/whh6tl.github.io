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

var precacheConfig = [["404.html","de8b1651a292fe4e762612ebe8e19a00"],["AMQP协议0_1/index.html","912a95e96eba03889ce42f0793c54fff"],["ARM汇编01/index.html","834fcfead7094a59cec25f0daaf6d98c"],["ARM汇编02/index.html","257210d84770f40cb1d8709c3b732782"],["ARM汇编指令集/index.html","17a5f5eb0a728114e96b005b9a5b10f6"],["Andoird反编译01/index.html","71dde31a96d381236d3b630dae4ebb6a"],["BLE协议01/index.html","d8aaecaaf08e73d3f5763c3f85b8681c"],["BLE协议02/index.html","071ea2620c699db929e641e83ba05565"],["CVE-2019-5418/index.html","15c0cb43a0478ae9bbd986f37dd6f752"],["CVE-2019-9766/index.html","b8a4bd10f687cfed5d92031393da0315"],["CoAP协议01/index.html","52179ee1c9fd106377de2f9961c1ea56"],["JS_0X02/index.html","4c55433cd35918388c4c4ecb9ff74794"],["JS_0X03/index.html","729d507e100eace2f9c7b71eb1cf22cd"],["JS_0X04/index.html","de6f9f79d85702039531de247aefd6e6"],["JS_0X05/index.html","d0d2aadc988f3b6a94cf8fb2ba4d6c71"],["JS_0X06/index.html","f9ba0bbb3829dea9efc2795a23bf453d"],["JS_0X07/index.html","44ab46fe2cdbf7e6434c99bf309db0eb"],["JS_0X08/index.html","070b5f4e301008916564bfb8eb546358"],["JS_0X09/index.html","617a7c79bfd2021bcca0a11bd2f4487a"],["JS_0X10/index.html","c6240cc405e887999c07dbf58070ec39"],["JS笔记(0X01)/index.html","1ae806082e3fa790b84f15953ebb09db"],["JT808协议01/index.html","9ca80aec3fed647409003f8c23dbcac5"],["MQTT协议01/index.html","e43e8a668a90edffa37c90655374502e"],["NFC协议01/index.html","305dd1f33e9a9eb0fba6574961c2e24c"],["RF协议01/index.html","bdf325e6f290b486bf9570bef7e7dec7"],["RF协议02/index.html","a7bacf8638c99479903a8d63b175aa33"],["RF协议03/index.html","a9c3c2baf3875a8f6fb07439c92578b0"],["Wi-Fi协议01/index.html","4e25d7b4cf4769b03c9994541250ab1c"],["Wi-Fi协议02/index.html","704c1fa46cae2a060a9a8ccae50b577a"],["Wi-Fi协议03/index.html","2aa3510817492742d210e6bcb1cb9c5c"],["Wi-Fi协议04/index.html","1c5dd23f403eb22276924dc61f6f9680"],["Wi-Fi协议05/index.html","9e696e2be7e38455c48354d03c6120a8"],["Wi-Fi协议06/index.html","3e2a1686e5d55470df2c748993f01891"],["Wi-Fi协议07/index.html","32c2481f45628c6bd3373e4836a522ea"],["Wi-Fi协议08/index.html","5bec57da790580d25391ebe4fa275f2b"],["Wi-Fi协议09/index.html","56b369b0fce38135c960b275f0038cba"],["Wi-Fi协议10/index.html","5d7704ea24a5e5f6dab5add25b51a8bd"],["Wi-Fi协议11/index.html","47111ecdd23c856f09405514d50be5ef"],["ZigBee协议01/index.html","d62afd6d09ccff3b9fb513bb72fcb109"],["archives/2020/08/index.html","89bb8e949ff868459ea9c99e73967598"],["archives/2020/09/index.html","b32a50649ed8f02c4afb0ae4acba2da0"],["archives/2020/09/page/2/index.html","e09e05682e140a61b06e075c4d518dba"],["archives/2020/09/page/3/index.html","c3dbf2da103051804a6286bea81cde87"],["archives/2020/10/index.html","c43dd1392d269669d21061a27aefb160"],["archives/2020/10/page/2/index.html","e75e71c3b14f1f4fab42ffc7bad061ac"],["archives/2020/11/index.html","64db78601144eaed7a7436db4bf506f4"],["archives/2020/11/page/2/index.html","3154c12ddd41df28e991d37d7bf79eee"],["archives/2020/12/index.html","0d02c4c91552d02940cd6d17c13de79e"],["archives/2020/index.html","9c759ad3e08679da19ba7e011ce6e5bd"],["archives/2020/page/2/index.html","0acbad65f5abd03f9675112646889404"],["archives/2020/page/3/index.html","09339b36a7b34397057b4eb89ff375bb"],["archives/2020/page/4/index.html","766deafeef2de425a5dd13fb61b2d7b5"],["archives/2020/page/5/index.html","ccd7d13cdb63d2e6d15f4ecbb29bf62a"],["archives/2020/page/6/index.html","3ee10f2b5cd6b109056ed5c60963376b"],["archives/2020/page/7/index.html","53320d20b24e136b467661b3ab5ca20b"],["archives/index.html","bd16c68410ccfbc8f59c04cc87fc956a"],["archives/page/2/index.html","f1534f77af1b5703ad0ec5f9d0a213ba"],["archives/page/3/index.html","58c37719bbb0e76b1404bed6901d1217"],["archives/page/4/index.html","2b75c5c0a2e200065a85b1c070b8d4ea"],["archives/page/5/index.html","239a6e4b15bf29bf848a3a906effa175"],["archives/page/6/index.html","74e4af72ec575c5ccc35c06f4b3d2bfb"],["archives/page/7/index.html","0b8dd67f75b806082a170712755f409b"],["categories/ARM汇编/index.html","f0a98dbce84648fb97d66a8d71dae873"],["categories/Android反编译/index.html","02977d784f0bbd2bec16e27c2864604e"],["categories/CVE/index.html","a27c5b9266be85c599592c9c167410ca"],["categories/JS学习笔记/index.html","eac8c2a125e69e8a4558ff25ae387780"],["categories/index.html","ed152778b2edb32546507252bcabd33b"],["categories/x86汇编/index.html","33609f7b15a1ea31bda1675583970f83"],["categories/x86汇编/page/2/index.html","41ff601603473bee5a40f7182fbc9d60"],["categories/固件逆向/index.html","94aece6ef265b76c5cd772dc6bbb7c33"],["categories/智能硬件安全/index.html","991b74cb38e3c0567ef92c4675be841c"],["categories/硬件电路构成/index.html","f5c5bdb94f7e217c90141c671c5569ce"],["categories/网络通信协议/index.html","5dd973b18841f5bc20d6007518fd9733"],["categories/网络通信协议/page/2/index.html","86c04ec0735706bac15e2eea19887fc8"],["categories/网络通信协议/page/3/index.html","93e8cac41437268983efdab805142892"],["categories/逆向/index.html","18b4ab74469c084ab5eef13bd665262e"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","cfa75ed3f7d449cc2268ab21bf878c0a"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","131ea014a1edde0a13bce43f1471cfce"],["page/2/index.html","264a7e3ccd9f7e9d27697acc0f71f4de"],["page/3/index.html","d4ef4fc6d1737f8595175e96b2b32f81"],["page/4/index.html","4f5ae00e58f34a4241a7154c275985e4"],["page/5/index.html","59ecd724932704b1f5883bce8b5a6413"],["page/6/index.html","f1cf1faa62f535e7ba6b8d492fae7885"],["page/7/index.html","e03531eb2e335d1d0ba66bca8e2f0618"],["tags/AMQP协议-暂无/index.html","42faf4c970fec749d9b44185698e860d"],["tags/ARM汇编/index.html","c458c7e5146f6f6af2685364d5c767ab"],["tags/Android反编译/index.html","060d8cc25a3fdb4d84f28062ea18561d"],["tags/BLE协议/index.html","6308d910dee737693a92722a77092cf7"],["tags/CoAP协议/index.html","5fc2a77bfbc1e3738dd5ba3c50e5651a"],["tags/JT808协议/index.html","21c8827bdd3907ba96aebaa47fac302e"],["tags/JavaScript/index.html","6e9de1e9de8119cafa9b8bac82adcf11"],["tags/MQTT协议/index.html","e33ad44d24e4390290f036064eecd9ed"],["tags/NFC协议/index.html","84bef10419d8663fe24e8e6ce5e44ea5"],["tags/RF协议/index.html","b1a905da49d345d64a4b828ee1cff855"],["tags/Wi-Fi协议/index.html","bb5e33127b6a561d6485c4997f006f8c"],["tags/Wi-Fi协议/page/2/index.html","f166b7332ad5237ba4fff7c3f2666a8b"],["tags/ZigBee协议/index.html","e34097bb5420ab36a93394d4ed0a554b"],["tags/index.html","64c69215f0fb37a9243cfac19c62731c"],["tags/x86汇编/index.html","f9f1612757dad3ce5d679008ca21ea69"],["tags/x86汇编/page/2/index.html","d5e1d221fb2b7fc604ba8f70e3d73d80"],["tags/固件逆向/index.html","2a71b45bae490004e2ef207a8b3c4a5b"],["tags/智能硬件安全/index.html","bcdf716dba4f78e254b241b390550f67"],["tags/漏洞复现/index.html","6c1c8f152cc49ecd12a10c845569fcb0"],["tags/硬件电路构成/index.html","4ed4cab2a0e076946a8d802b0e1a0e26"],["tags/逆向（基础）/index.html","1a6750bfef3649d8867795202a843fdc"],["tags/逆向（调试）/index.html","a339edfae8e54f37fcdf458a6e4455c2"],["x86汇编学习笔记_0x01/index.html","b762d335eada5f9714b5eecf4c5af60a"],["x86汇编学习笔记_0x02/index.html","99e8584ab9433af3c55db1ad172445e6"],["x86汇编学习笔记_0x03/index.html","54d4258f235bbb179e92c2d493af1027"],["x86汇编学习笔记_0x04/index.html","6023b5e3e70f192f6af6ff522a40894a"],["x86汇编学习笔记_0x05/index.html","17dbd6858949f22607c28edecb8e76af"],["x86汇编学习笔记_0x06/index.html","31da170ecf6e97a2555083beee99eb67"],["x86汇编学习笔记_0x07/index.html","1e261b43b2ab86cb266b51778f224639"],["x86汇编学习笔记_0x08/index.html","c25926152923800651ea2a48f6729e1d"],["x86汇编学习笔记_0x09/index.html","3878567c8001b937ad29d0eb8d741526"],["x86汇编学习笔记_0x10/index.html","ab70b8e86aef6c7ffea72bbdf28486ce"],["x86汇编学习笔记_0x11/index.html","01e963ccaee9ad65ade90160849b4a2e"],["x86汇编学习笔记_0x12/index.html","1c4ef19e71ba0e0ec17e36cc626f66e2"],["x86汇编学习笔记_0x13/index.html","b89d6bb2470fe2b0122efae3d6f7f9db"],["固件逆向01/index.html","91416714f4f218de562dc692134163dc"],["汇编指令集/index.html","9ee786c07ae1c118bce2f046c105eb2f"],["硬件智能安全(0x01)/index.html","2de3f08266c639e58e7c7fa57c724225"],["硬件智能安全(0x02)/index.html","2e919771d382394e412d21a56a6d144b"],["硬件智能安全(0x03)/index.html","4498a1588ca37315435b4e28d1630731"],["硬件智能安全(0x04)/index.html","0f6ab9d8f0894e78a8662d26cdb5667c"],["硬件智能安全(0x05)_/index.html","0d87e52dec715a0a86a2cb40ad0b3edc"],["硬件智能安全(0x06)_/index.html","980a88b6bc82c28386b3271ffbde6a22"],["硬件智能安全(0x07)_/index.html","049568a79aa1b33d243bcf446675bdf6"],["硬件智能安全导航/index.html","253d17b171604b214ab4b0387e4be3b8"],["硬件电路构成01/index.html","b3c9ab54e715a877cc60c1980653ec2b"],["逆向-基础-笔记_0x01/index.html","bc1e40bf827900e0790a821291e23839"],["逆向-调试-笔记_0x01/index.html","2a5a315597b2ed1efa76ccc09b2afb2b"],["逆向-调试-笔记_0x02/index.html","fe516ef3df7298de9e823d0d075b9048"],["逆向-调试-笔记_0x03/index.html","561bee68b58e0f2cd6a4db6ac46e236e"],["逆向-调试-笔记_0x04/index.html","2f381134cc5d86ffd8387e2bfdd402d4"]];
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








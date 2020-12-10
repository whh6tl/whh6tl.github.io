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

var precacheConfig = [["404.html","b119bb5128b524e5bb7c0f9ba598d806"],["AMQP协议0_1/index.html","6cd8fefc75544d9aeeb39af0b03e3ce6"],["ARM汇编01/index.html","fdbb0fbb2a0030bf56ae668a6c0d5eaf"],["ARM汇编02/index.html","c517bb1ef91db9eec888e046a732062c"],["ARM汇编指令集/index.html","782be39c5838ba2e6ebda35d0f0e5418"],["Andoird反编译01/index.html","806991a7e36ff2c6f5eff8a06ba66daa"],["BLE协议01/index.html","dd4115f47bbe5bd8a8e8e3053e4aaba9"],["BLE协议02/index.html","ba168de225bfcc8e871a887f2ed40729"],["CVE-2019-5418/index.html","8505b47e9f2539f6fc8ead6a57037d77"],["CVE-2019-9766/index.html","93ff66db7add3bb6993501a556414059"],["CoAP协议01/index.html","4bf792ed5a4679e793a6f4d2980b3c6f"],["JS_0X02/index.html","632dc7eef2d8dbefc414f3b9467d09ea"],["JS_0X03/index.html","f69c9aa0538a91f12ea9d03018ced471"],["JS_0X04/index.html","096326a5bb2dbead5cf9c007cf2cde8b"],["JS_0X05/index.html","2d385ddcac4e069705942f3c0213295f"],["JS_0X06/index.html","c32b0f62c1066e92391f4e0fb5399991"],["JS_0X07/index.html","fa6a970d2c4fca183a267fc5a565cb24"],["JS_0X08/index.html","2269006da83a08903a3ac0c82d072ef5"],["JS_0X09/index.html","6b139d0a010c48cb43fd24aadaab772b"],["JS_0X10/index.html","3800817b76c02005aa34d3cedd8fbf8e"],["JS笔记(0X01)/index.html","2b834097f38b1d083a066d16877a6260"],["JT808协议01/index.html","737d999aeefac651a5672efec1a2c609"],["MQTT协议01/index.html","1912a0c697f09d2717b79fb6353a00f3"],["NFC协议01/index.html","2af123f2bc361075b99bc79f393399e3"],["RF协议01/index.html","2eb2fa44990e05533b4cefdda7be9fba"],["RF协议02/index.html","ca7e603d7d5650fd6c356e1768e23e30"],["RF协议03/index.html","960919311957950c33326fed32447d25"],["Wi-Fi协议01/index.html","384b3dc6ba37f8508a51fe92d9a04864"],["Wi-Fi协议02/index.html","2ef80cbff327efc423b98c86a84e890d"],["Wi-Fi协议03/index.html","aa3b64da00f74953e0856a03fa3ad7bc"],["Wi-Fi协议04/index.html","92d640478bd56b59537fe5412ba43e9e"],["Wi-Fi协议05/index.html","00168bed4e69f82c2bc3d1ffc8c322a3"],["Wi-Fi协议06/index.html","5b117bed2516cb7db9bc107c271cb14a"],["Wi-Fi协议07/index.html","56490804e20aef8bdc251429e97ce1c8"],["Wi-Fi协议08/index.html","2394107cc6c696a9ad9ced11fd265045"],["Wi-Fi协议09/index.html","69ec30735a43aecacd1a785b2791ee54"],["Wi-Fi协议10/index.html","866160f466064af98ce1a8a5dd81b42f"],["Wi-Fi协议11/index.html","f3994eefd8acc6805b81c84bede4e4a9"],["ZigBee协议01/index.html","e4e1d0ba27f71cda5e71d6b918373368"],["ZigBee协议02/index.html","5757277bb3b36ad3941cf288ec933d1e"],["archives/2020/08/index.html","9b7aa24da475564988e9dc171de6db30"],["archives/2020/09/index.html","05813318227eb5c837841c98e8acb478"],["archives/2020/09/page/2/index.html","0664270a3410499365fe55962c0cced4"],["archives/2020/09/page/3/index.html","28be24af4efcdfbdbecb17ace1939cec"],["archives/2020/10/index.html","c2a70a5ca9de0c3b326a4b9c2a447827"],["archives/2020/10/page/2/index.html","29e184120b5d73cdd542e037671a4923"],["archives/2020/11/index.html","664e37ab84d189b65e9448115eca4eb8"],["archives/2020/11/page/2/index.html","2363fc209acdb0f4f6c40fb2dd9f8117"],["archives/2020/12/index.html","b8cd7e525ffb05bf754cd8712ebf5695"],["archives/2020/index.html","15e1d5f79dd40e904b7507b7db9347e0"],["archives/2020/page/2/index.html","24b9e651502f7285999c720529cee202"],["archives/2020/page/3/index.html","ca384090c389a0fe8084b314436e00e9"],["archives/2020/page/4/index.html","1872223856366442ea709185fc6c99a0"],["archives/2020/page/5/index.html","071512bbea6da8a7c77cce2e372ce3fd"],["archives/2020/page/6/index.html","2492075a316ad061ff474ab6f8f8f78f"],["archives/2020/page/7/index.html","e2a146d56dbde6873853a3028bc88c2d"],["archives/index.html","14c3c0ed756278dce821e64004224fe2"],["archives/page/2/index.html","a92041a7d88145e01025512226a74c44"],["archives/page/3/index.html","fd292f5c42062ec66abd7a3bdfec347b"],["archives/page/4/index.html","d59531d3280f8dc98a5e0be2991f272d"],["archives/page/5/index.html","6dea2a9a60f1310a25f796d1b67a0590"],["archives/page/6/index.html","5c7ba3559deefbcedf27893bef75ddbc"],["archives/page/7/index.html","321592293663c931e7e522e08a071f28"],["categories/ARM汇编/index.html","f304807162f34dc002dc2666cc208e60"],["categories/Android反编译/index.html","7699dc99be7612ddda34e6e0179317cf"],["categories/CVE/index.html","11b90067ba72d9946685a3b42b4c0d7e"],["categories/JS学习笔记/index.html","7cb291e60049627c5c5af5e0ff67186c"],["categories/index.html","3c0da678ee18add245f99911bd6115c5"],["categories/x86汇编/index.html","3ebfc2f98387758e1ba55fad7408641a"],["categories/x86汇编/page/2/index.html","b09c611bc6ebfa2a5fba672e9e161dc9"],["categories/固件逆向/index.html","2d6983353eb806ca623939f992fbd0bc"],["categories/智能硬件安全/index.html","ac6fadef0150e726308dc4eba665bfde"],["categories/硬件电路构成/index.html","554b745478c43e3a1292d3b77938c481"],["categories/网络通信协议/index.html","bc519291a0cf38b7fc9ce191390e5d4f"],["categories/网络通信协议/page/2/index.html","5d8882bf6502482cf3957ebc5aa2f004"],["categories/网络通信协议/page/3/index.html","b795847d929626010c0b6c5f5b877b05"],["categories/逆向/index.html","12a6e85630768ee17ccdd6f3101e66e5"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","2b45cf9eafaae176318ad3d0e65d56ab"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","d2250bbefebc81577ff5d355dc92ffd2"],["page/2/index.html","f6cfb6b4c889779f53675b7c792887e5"],["page/3/index.html","4d9a152d2f1facec9f92817ed5271c9b"],["page/4/index.html","f1f143ec2f93e393143971a3afd10688"],["page/5/index.html","0c6ba23e93887055fa4543e2c4164c20"],["page/6/index.html","dc940af72a005150b983132c684c96f3"],["page/7/index.html","a7c1e83647b1bb3a009d8d47761b82a2"],["tags/AMQP协议-暂无/index.html","6ff14aaeb35e71bda48c27415874ed34"],["tags/ARM汇编/index.html","ad07cf6f3a1f72c2543a3061eed8b2e0"],["tags/Android反编译/index.html","113e9b6fbd3966ab17f96848cebf90a0"],["tags/BLE协议/index.html","974116fce405a42f7bea4d3fdc76c8fa"],["tags/CoAP协议/index.html","f09aa3446d3b95a7ad41ac445b550472"],["tags/JT808协议/index.html","340ee5a749d8334e59fdf18e18bd0650"],["tags/JavaScript/index.html","271d613451bbe094b60a5b39226101f9"],["tags/MQTT协议/index.html","18b36e202c5683413cf9ba64701ae9fb"],["tags/NFC协议/index.html","77e9da0f0589bf7618e18b0a19f8d5c2"],["tags/RF协议/index.html","5899d0217c539266bdd88c73a1888ccd"],["tags/Wi-Fi协议/index.html","f6f97d67e2f9cb37e20f98c4be394abb"],["tags/Wi-Fi协议/page/2/index.html","db0fc920c01fbf2f1dcc11592b9b6157"],["tags/ZigBee协议/index.html","2f10777cef7b88a6d8e041fa25c96236"],["tags/index.html","e5156ee3d34c990e189e775bca8f6557"],["tags/x86汇编/index.html","c4ae55caa8339214c718e8725cb95638"],["tags/x86汇编/page/2/index.html","a1b6b0835fe41ea324d8b63c4691217f"],["tags/固件逆向/index.html","9e4cd42268e7b1ee45b9753a26fa3601"],["tags/智能硬件安全/index.html","a2f11a855cdd691c8328b8c1e3e49599"],["tags/漏洞复现/index.html","c0ce0f643d67fca5fd014aeace56cfab"],["tags/硬件电路构成/index.html","f18444d6e78c6c2fd36d4fb2b7577160"],["tags/逆向（基础）/index.html","9e393b0ad166aa520632b602b5f77a20"],["tags/逆向（调试）/index.html","59e5ab37f6cf4c3db7e9d07e13df0478"],["x86汇编学习笔记_0x01/index.html","619df6e973651655bfefbc8f1ac2e604"],["x86汇编学习笔记_0x02/index.html","fc7385c3b0a23bf346b57c90c4d3130c"],["x86汇编学习笔记_0x03/index.html","7222f6a0bbf0b813f989e085b50e9f3d"],["x86汇编学习笔记_0x04/index.html","76d2cc686b935f87e0a3545ca2a2407e"],["x86汇编学习笔记_0x05/index.html","f9e3a49f52274680ccb51eecd481ee3f"],["x86汇编学习笔记_0x06/index.html","8e81407b2f7e67b107d61f36293fb9b0"],["x86汇编学习笔记_0x07/index.html","bb7db7f24be7d49f78c7ace3d2a127a2"],["x86汇编学习笔记_0x08/index.html","21ed8fa5b2fb15bfc0528e592976a072"],["x86汇编学习笔记_0x09/index.html","6a52cbb0338b3c445d742952ede2cc74"],["x86汇编学习笔记_0x10/index.html","ba9c8c64993b2a98c3b637f3fbf37542"],["x86汇编学习笔记_0x11/index.html","3776f8ffa304c94badd594dc1f682435"],["x86汇编学习笔记_0x12/index.html","43107310abe29bf04886042298e52f46"],["x86汇编学习笔记_0x13/index.html","4ca180a86eb2b6f50ccfa863d0d6f61e"],["固件逆向01/index.html","003e2aaa6b973f123b144f4ace25821b"],["汇编指令集/index.html","d012069825dea8138765a458b7153361"],["硬件智能安全(0x01)/index.html","e8c0e70dcc47e0d2c82ca1b52a280ea7"],["硬件智能安全(0x02)/index.html","888d168ed4c67fdc677d3e895df6428b"],["硬件智能安全(0x03)/index.html","da350e6a3ee4f5ce998629c70c7e3457"],["硬件智能安全(0x04)/index.html","099c1b81b1d363661b331f66173b4106"],["硬件智能安全(0x05)_/index.html","efc808fbfa4ae2b4045ca66e2e0943c6"],["硬件智能安全(0x06)_/index.html","63e954cdc699859b6df0c406d72bd182"],["硬件智能安全(0x07)_/index.html","16e93dc25bb324dda8dc2267ca339a9c"],["硬件智能安全导航/index.html","efbf92bfe6fb8292c29a463e28c8b536"],["硬件电路构成01/index.html","48d7356d5be87f3f6c875865801c988d"],["逆向-基础-笔记_0x01/index.html","fe37037294feedbc3b1da4c1d8206c19"],["逆向-调试-笔记_0x01/index.html","e9e09f22113b4986918f356fd7aa9b2f"],["逆向-调试-笔记_0x02/index.html","66a8e758d9e2d9a8936192ee71204532"],["逆向-调试-笔记_0x03/index.html","82fcc8d010e2b59bcb60c87b9e4386c3"],["逆向-调试-笔记_0x04/index.html","ab4c740d31dc90c3b27dbd328df56974"]];
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








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

var precacheConfig = [["404.html","06a05ecea087fb6cfc1cd8ff20f24042"],["AMQP协议0_1/index.html","14eef3fda7a08474da54abbd4387355b"],["ARM汇编01/index.html","ab8591922279783f8d4c16fda4602c8f"],["ARM汇编02/index.html","77a8c0e9ec393801f75d22621559b7ca"],["ARM汇编指令集/index.html","e58ed98b52577fca4db52e19ad3ec622"],["Andoird反编译01/index.html","8f8391bbdf8b6e6ad6ea4e7442e77697"],["BLE协议01/index.html","9f4ade91e89cbde7e5a7c0a7244cc288"],["BLE协议02/index.html","205368eec0f22756d26f1982c14c7910"],["CVE-2019-5418/index.html","c0fb93ceba8e876f257b81a380c3e545"],["CVE-2019-9766/index.html","38ebcccd57278c7935e1b51743eb9eec"],["CoAP协议01/index.html","cc22db959853ec24973c1eed2717920c"],["JS_0X02/index.html","7ae896140d24c039349f23adc222c7ee"],["JS_0X03/index.html","999a6138ca17562c8fe16a8a5d7b8d3a"],["JS_0X04/index.html","2020832355d1e6c2b54b636eec4b516f"],["JS_0X05/index.html","bfac1065838d8e2d558aaa4e4255076b"],["JS_0X06/index.html","235d28dc253565d4dd5d60518c97d67d"],["JS_0X07/index.html","c56917297d45dfa537375690b0502fb7"],["JS_0X08/index.html","c6cf57c0f65dd1b21dcc6f1435e46475"],["JS_0X09/index.html","d8d3fca6aabb48c1207f3c3be912bbff"],["JS_0X10/index.html","e99cf04236b2b1b29979a19bfb71b117"],["JS笔记(0X01)/index.html","db167150b30284a2170e72e6b3f6c7a3"],["JT808协议01/index.html","038b7704b785152d51d70a12250cbaea"],["MQTT协议01/index.html","157ac559473371999676e7d96438ec1d"],["NFC协议01/index.html","890c1738f047b2594b60bfacca209835"],["NFC协议02/index.html","b005d51517b1fbb17e47ca141f37d21a"],["RF协议01/index.html","51cd76bd9f7acf51fd8b12b74fcb2431"],["RF协议02/index.html","bf69ae1e6bcfae2c485ac775c6d67e5e"],["RF协议03/index.html","001bffbf6e74e67dd627019861a398a2"],["Wi-Fi协议01/index.html","6823065329b3f67455d037f74a0630e6"],["Wi-Fi协议02/index.html","2080dec94d7d99926f48ce403108a6ab"],["Wi-Fi协议03/index.html","d6dce261341dd989c98668c9a436305b"],["Wi-Fi协议04/index.html","d525deee35cd4bbe92ceeb0512d1e81a"],["Wi-Fi协议05/index.html","bc414bbefbd6a9dc84293d2037a89de6"],["Wi-Fi协议06/index.html","d9fe14f98552755ffb98c3dd73c9ce0b"],["Wi-Fi协议07/index.html","78272bfa45d5ce5f6ea5e6016ba8a1e5"],["Wi-Fi协议08/index.html","6348597a74f3db8ce7364f6794fe2abf"],["Wi-Fi协议09/index.html","6cc85178a300e07845870e9a5d92f54b"],["Wi-Fi协议10/index.html","0196e8db6c809912b6472d88e2769dae"],["Wi-Fi协议11/index.html","3a88d42f5f1d1de2fc393a6e33b9d3c4"],["ZigBee协议01/index.html","f52a61d478c32e61ee868fbba2000aba"],["ZigBee协议02/index.html","5b7738d0646d9c60117b01fbaf9e0a87"],["archives/2020/08/index.html","0bb489bac6d87d9efc25156782255c61"],["archives/2020/09/index.html","73f6d6b85c3c374f191a592e4c8e4503"],["archives/2020/09/page/2/index.html","c421de0bf7d9037edb8606756fe9b98b"],["archives/2020/09/page/3/index.html","c206329dbed63804571e6a5dacbe93a7"],["archives/2020/10/index.html","85775edbe43d0ea6146ca99d1a1a1374"],["archives/2020/10/page/2/index.html","61fd837e8bf2c5bdf7b7323be3943325"],["archives/2020/11/index.html","8ca5241c6a782da3a35c8cf81a5f886b"],["archives/2020/11/page/2/index.html","e492465a7ef81452fc203083e0835ef4"],["archives/2020/12/index.html","d65e1ff1db7d3e5abaffbb74fd63de36"],["archives/2020/index.html","1400925c44141dd9850865f7ad2393a8"],["archives/2020/page/2/index.html","cc28f040b5fe1ec35bdc96b83dba1e00"],["archives/2020/page/3/index.html","5c810ea0902df076bfae7e604ad643c9"],["archives/2020/page/4/index.html","4ca1ee41a28c5c84b06a3aa2e51fc352"],["archives/2020/page/5/index.html","1c4550c367ce4c9f21810beb4f584298"],["archives/2020/page/6/index.html","7a9d5c0d4298900ccc15b21c3e3e91b1"],["archives/2020/page/7/index.html","58e0fe579a56fd9353f7778df8a6c970"],["archives/2020/page/8/index.html","d47f47f576bd6de18daca3fefd99d0ae"],["archives/2021/01/index.html","52f0eafe91c97b4b7b52250339771638"],["archives/2021/index.html","1ecf37163d1d703f1d837eba7aef3438"],["archives/index.html","0ea5d0a6ed60e4270fdb27428495ed7d"],["archives/page/2/index.html","2c32ec0ec68bdacdcd13a78e778f24f0"],["archives/page/3/index.html","72df47bb8f047267315e448f134d5f6e"],["archives/page/4/index.html","959679b569df4e355c5a821412d2a237"],["archives/page/5/index.html","a3c1da178e23e7ddc1ae31dbb114db5d"],["archives/page/6/index.html","203ee493af2b6bb75b1c1749455510be"],["archives/page/7/index.html","174e80f5d539c90806b1a5f36071c125"],["archives/page/8/index.html","ccb8624bea78cb34e695df91c59f7f7f"],["baidu_verify_code-74acARe7VV.html","e3f2278b79912a3032517bacde56124e"],["categories/ARM汇编/index.html","4a091397bf500e181dcbc5a3f7c2d63b"],["categories/Android反编译/index.html","d03b8ef862eb346abe380aed9e7b37a5"],["categories/CVE/index.html","6c2a0bec6f03a23bf11ee181562347fb"],["categories/JS学习笔记/index.html","c98708c10f39ecd4626c8beac7eed046"],["categories/index.html","4953c8587d326d7d312460a1363bf5be"],["categories/x86汇编/index.html","bf79206427501da11643073b6353ecb7"],["categories/x86汇编/page/2/index.html","ba971e0bd11ee5a7db3d5bd748b53bc1"],["categories/固件逆向/index.html","9412e6e3c6e85c331c9823081db04531"],["categories/智能硬件安全/index.html","f828aacadb293122c3dbbb0aac1d7d10"],["categories/智能设备安全分析/index.html","e8b0638406195d1016302905329c08a8"],["categories/硬件电路构成/index.html","67ef4f97e223a5d53deed10db6a51e96"],["categories/网络通信协议/index.html","732e8b4c71dcba95626c3dd0e9f775e2"],["categories/网络通信协议/page/2/index.html","e1e144fe80621af2f0058a90e4f3006c"],["categories/网络通信协议/page/3/index.html","07f8e6dc4048020b1892192872d22fee"],["categories/逆向/index.html","ceb2f3b011afb41b0ce7a0f4fe5ac342"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","269acc7db1d164c12cd6df942444ab67"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","17d3af35cf52ee1238b683b192107fe1"],["page/2/index.html","479b141a9c3864bdc09bed5eb074cf93"],["page/3/index.html","c7dc38c091ead548e491229c296a6f23"],["page/4/index.html","60f4fa4dc29a5a05eb65752a690eb125"],["page/5/index.html","e0cea7ea583bab5dc0e6d67f62fe7b15"],["page/6/index.html","33ea32e4e8f03cf1c2262a74479f8ed3"],["page/7/index.html","01e4ffa8d89c187930cb3771cfd6e4fb"],["page/8/index.html","89fc41d47ecaa9a511ae099565545112"],["tags/AMQP协议-暂无/index.html","dbfa6ed7dd31b897dc25e3568011d39e"],["tags/ARM汇编/index.html","5082728aeee8470fcaabbd2d4fa1b65b"],["tags/Android反编译/index.html","c559a4077bc5c7dda9be4dc354620bd4"],["tags/BLE协议/index.html","d7a69d2ab12d79473f0ffa8da15efa94"],["tags/CoAP协议/index.html","a92ce2ec9438db57db168b165e87fc59"],["tags/JT808协议/index.html","fabcb6b157edeb62795916b1319f4ace"],["tags/JavaScript/index.html","a1dd116abeedcbdb7bedf1881e3a51bd"],["tags/MQTT协议/index.html","410fbf5d53e9f5c0fd7131756e86a10f"],["tags/NFC协议/index.html","270396d652fbf7587af04d9920fc033d"],["tags/RF协议/index.html","23b852b174d347370e10745edf656104"],["tags/Wi-Fi协议/index.html","e24db4ac433d50c5a940cfc24f59d69d"],["tags/Wi-Fi协议/page/2/index.html","5b4734d6083e00ad6aa4e4e40500ce97"],["tags/ZigBee协议/index.html","b351ab90499fc40a6acd7b74f188b4f7"],["tags/index.html","e3f2a4d8d70d53f5cc201b00a72450ef"],["tags/x86汇编/index.html","0e7a892ca5b60477642b658e52b0fb12"],["tags/x86汇编/page/2/index.html","c039601cbab2173501c0da1062f86492"],["tags/固件逆向/index.html","0f77af9dcf15a8b178b1ff08941d30e2"],["tags/智能硬件安全/index.html","0937e72ba13d298a6feb8571ebcc665f"],["tags/智能设备安全分析/index.html","62166510ca881e699b6b5c1e0a081471"],["tags/漏洞复现/index.html","1454d89e4e0b1fc52d8f266780578524"],["tags/硬件电路构成/index.html","d28c11df7834a8b98afe497bc40de355"],["tags/逆向（基础）/index.html","e62d810ed0c0a5a0a3959ea7b0fe2cae"],["tags/逆向（调试）/index.html","3fa58d77191e3aff75003c9aafe39026"],["x86汇编学习笔记_0x01/index.html","991fd0e1a9c0a7e0cfb6ca3386f8f9a0"],["x86汇编学习笔记_0x02/index.html","b0145b0aad6d2530d43ff0db51a6924c"],["x86汇编学习笔记_0x03/index.html","8da6ca292d51f68c1a5d00fcf0db07db"],["x86汇编学习笔记_0x04/index.html","14996712718de8f633f8752761df4ce1"],["x86汇编学习笔记_0x05/index.html","1cbb17d670bb722d33b0c273d5670212"],["x86汇编学习笔记_0x06/index.html","1977e4759d01526a7879b3f8e8095751"],["x86汇编学习笔记_0x07/index.html","046ba534b3153820d2099488d029e25f"],["x86汇编学习笔记_0x08/index.html","61fb8ce80c79edfe089b90d04fa55510"],["x86汇编学习笔记_0x09/index.html","e71763e7731aeb03e436b6913e8f3e22"],["x86汇编学习笔记_0x10/index.html","0e10205389cbd071fd309bb2bc8c28be"],["x86汇编学习笔记_0x11/index.html","bd7ee578a020ff92ed02c16958854098"],["x86汇编学习笔记_0x12/index.html","2783e48aa35c96edc32c87eea20539a3"],["x86汇编学习笔记_0x13/index.html","bbb5ea118b8022d8128599f905e9f1d8"],["固件逆向01/index.html","071b5bd247a104b318255e284b38ecf7"],["固件逆向02/index.html","32a1b9a17c6b6d64a1bb02bfba0af508"],["智能设备安全分析笔记(0x01)/index.html","02aa13061a459d19c94324bd5632a1a9"],["汇编指令集/index.html","4afb43882446f40d88555cad7f9b44fe"],["硬件智能安全(0x01)/index.html","0fd1d65ac60f26408a85d5787b70a6d2"],["硬件智能安全(0x02)/index.html","d3619d518f74a1367c51117dce82ce04"],["硬件智能安全(0x03)/index.html","0797493a36051ca79a904db78cfa8429"],["硬件智能安全(0x04)/index.html","7d8c9a5217edeeda9bf701487b765cf5"],["硬件智能安全(0x05)_/index.html","a1c9b9ec2e6f12a6386be1ec2dd700c2"],["硬件智能安全(0x06)_/index.html","1361cf2db53aaa23e68e1d88407a91ef"],["硬件智能安全(0x07)_/index.html","3eab86c68f54a37c291e5767080c3327"],["硬件智能安全导航/index.html","608d2fc46ca69f4ef8d52a7b32bac0c0"],["硬件智能安全（固件番外）_/index.html","a4f208ee91eccd86cdeeac86d5315b3f"],["硬件电路构成01/index.html","a24c7f92154ece09bd5a48d3d75fbd1e"],["逆向-基础-笔记_0x01/index.html","98ead2a0d5c757920b002c009d403c92"],["逆向-调试-笔记_0x01/index.html","683843900c61deba1a1f932de5fc3c02"],["逆向-调试-笔记_0x02/index.html","d192822263a602a3d02c4ad658057b27"],["逆向-调试-笔记_0x03/index.html","e36b981909e448cf7db6de65b4291e4a"],["逆向-调试-笔记_0x04/index.html","63aef1af2720fcea0e8183078f12e945"]];
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








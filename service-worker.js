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

var precacheConfig = [["404.html","50f748b4ee155d20203ffa173fd41e9a"],["AMQP协议0_1/index.html","78684168837428ea9903d825430c750e"],["ARM汇编01/index.html","d67a7d8f04f3ba2019b270dadb832d48"],["ARM汇编02/index.html","1248de88e5ec984ef7d82f1e26e25eff"],["ARM汇编指令集/index.html","1c5d231a1f0ae1dbfa6803763a00280e"],["Andoird反编译01/index.html","9e82f04ead4fe57d51d60509c8ef323b"],["BLE协议01/index.html","c2bf7984d45bf68c9d13cbfc566b2933"],["BLE协议02/index.html","cddcfe68bb8798e4ab5bc571806f578c"],["CVE-2019-5418/index.html","a8e5da424cda56a3e8f2e08d3f622e1d"],["CVE-2019-9766/index.html","367f308c0f40028da7366debbb7440fb"],["CoAP协议01/index.html","2409557386eb180428f736b5419006e8"],["JS_0X02/index.html","5df52301df9f1e0e5448ef3ea925bad2"],["JS_0X03/index.html","bcbe4ee36d9aa03a5eaefb815d0e2048"],["JS_0X04/index.html","23ab562bfecf57fe011df118c796447e"],["JS_0X05/index.html","dd95d743e1f6c7e3d15069e023238d9b"],["JS_0X06/index.html","69cb4930e144be7798bdea524767199d"],["JS_0X07/index.html","3aafc940d89cacdedf8c8560672a6060"],["JS_0X08/index.html","0c959f4184fe674bd5665e1b55605a49"],["JS_0X09/index.html","0763f88c62eaf16385fb1df988b5dc7b"],["JS_0X10/index.html","aa227b17ca1e3b4a246932e7c6b75229"],["JS笔记(0X01)/index.html","48aa3dc9be0cdff072a49b9585ebcaf6"],["JT808协议01/index.html","70263e3b3dcd852e5d65bc64807840b7"],["MQTT协议01/index.html","02597f8c5fd68beff6d9900e25a1ba06"],["NFC协议01/index.html","3060e3f6c8fb5330bb9a3e60eac89ca7"],["NFC协议02/index.html","da3f72dfa36aa1e0c88fbbdf024e2285"],["RF协议01/index.html","e3af6d40c0c1fea9830fde782a2a46fa"],["RF协议02/index.html","bed0d4b5d17fd043819e5905cc958f7f"],["RF协议03/index.html","6cdc73dc7749fc1bc479f74b641dfcc6"],["Wi-Fi协议01/index.html","4cef6f1a7804debf2b2b3f3d1692d3cf"],["Wi-Fi协议02/index.html","88ef20e46ceed98b2eda98b580916f48"],["Wi-Fi协议03/index.html","a879df759c38017aba34a6d95cfa898c"],["Wi-Fi协议04/index.html","b2c24cd55d87cf118b9fe6e575645f38"],["Wi-Fi协议05/index.html","762a53c5ac5e04f759af02f9c096df39"],["Wi-Fi协议06/index.html","68a972b1d36b5c29a71ed73376ffccfd"],["Wi-Fi协议07/index.html","cf94eaa25f2774b163653d2a4758aaca"],["Wi-Fi协议08/index.html","a246f8f97b15764650d632156adb07e4"],["Wi-Fi协议09/index.html","2ac2f7c9f9db236e33f5ad4d8ddabda7"],["Wi-Fi协议10/index.html","0b42fae407138261f38a1aceea959e6b"],["Wi-Fi协议11/index.html","2d3dce998269871dc7daed36a5204d39"],["ZigBee协议01/index.html","7d8bb6b10b7dde3ad5fca6dd82ec028d"],["ZigBee协议02/index.html","fcec72d09d09717924f2e417836b81ed"],["archives/2020/08/index.html","038ad242b79691b56602c4cfb77f7b1b"],["archives/2020/09/index.html","b4edb4d2b2b252406fd81633cf224947"],["archives/2020/09/page/2/index.html","337d46c3ab5c6696cd304a9c8e8843a6"],["archives/2020/09/page/3/index.html","ef5868e27de37a05392e721dc9c17ac0"],["archives/2020/10/index.html","c922bbf6122240562689ac09c35d21e1"],["archives/2020/10/page/2/index.html","8c30d5ff6f4cd4198430174b962fc857"],["archives/2020/11/index.html","26c4553f3f7a02d3ea502652a508f38c"],["archives/2020/11/page/2/index.html","71d3a76da9dec2bb95e88719da151265"],["archives/2020/12/index.html","70eae17009c07616404c621750c0c602"],["archives/2020/index.html","cd3569d45336d044334182a097e8f0ae"],["archives/2020/page/2/index.html","bb5275dfdbeae090c996b667f984e8aa"],["archives/2020/page/3/index.html","5b1a5fcc93606237a690c0bee8332e81"],["archives/2020/page/4/index.html","21c0943b22e945c541e02b5c25922bff"],["archives/2020/page/5/index.html","decd865658e62432d4c286985ac0b9e8"],["archives/2020/page/6/index.html","160b3d33a828edfd2d3ae31c241e6e31"],["archives/2020/page/7/index.html","67cbf21cf6a57bc003ec503b9f7bed2c"],["archives/2020/page/8/index.html","4148a1a5ced3b92ad32de89c38b56e42"],["archives/2021/01/index.html","bab773d0ebff046e8d06022f1465ef3e"],["archives/2021/index.html","d2dac64731a8c524210519adf0702237"],["archives/index.html","3204496998ca99e35e6730e5a05fa189"],["archives/page/2/index.html","5143305b34be8b6964cf7ab21c0de145"],["archives/page/3/index.html","6f3df98e90ddc8cf77f5256f47431206"],["archives/page/4/index.html","2ca6fce008e948f9efa86b6be5c0b195"],["archives/page/5/index.html","fb37d6dc51331310f9619e2881c98050"],["archives/page/6/index.html","5832885ca3d4b36899b8ebb63b841f6f"],["archives/page/7/index.html","739d104db8100f49a738f4714d46199b"],["archives/page/8/index.html","1bd0f6f8f6d54c4d060553b56a2f7aae"],["baidu_verify_code-3BJdXoxuEK.html","37a0df63a5704f47ed7f81f5f99f37ea"],["categories/ARM汇编/index.html","5954edc0eb4b3c8c0082e50ddaaa4d8b"],["categories/Android反编译/index.html","06e54ede1e0d142ccb873f2897302f5c"],["categories/CVE/index.html","72d17197ce7a1d31674cecb2f8487661"],["categories/JS学习笔记/index.html","852399672cde6d05f76f0adc38ec89c1"],["categories/index.html","2a55ef026730b29a3a281b2055a3e6ed"],["categories/x86汇编/index.html","5010016c2122691ad8999c1ac309c92a"],["categories/x86汇编/page/2/index.html","28654c6fe1166147d913b19bde640a02"],["categories/固件逆向/index.html","a6c172a154a2f9686603c7d93c66b924"],["categories/智能硬件安全/index.html","2ca4ce3b2a91d5be0f96b275971a0ddd"],["categories/智能设备安全分析/index.html","30992fe06ac1355bcf6f67ef2ab749bc"],["categories/硬件电路构成/index.html","8e9e4214c5047cc6fc9339f92bf97ed1"],["categories/网络通信协议/index.html","5887f6b2b183dd2e71f836107f770dc2"],["categories/网络通信协议/page/2/index.html","059c1a6f431a22d10d6dfa788c880469"],["categories/网络通信协议/page/3/index.html","413d978fc7c5e4bc70390d1167cf6e29"],["categories/逆向/index.html","9d75ee343b2604a99c0e035ced92600e"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","04a29a70df4d0649b6f9b39e9c5c5183"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","867a1d015f94a6079e09259e8656fe87"],["page/2/index.html","7334bda4a63a1bf3038c777db096123b"],["page/3/index.html","9b1bd8b2af17308505b58a215a67d711"],["page/4/index.html","69dd41282fc64f99c67ba5a068c8ecb7"],["page/5/index.html","5e64052e7d89683309345417d198817a"],["page/6/index.html","eab1c6bb0071d48c56c384fcf4c50d68"],["page/7/index.html","704974eded8f0951eed076733181bc1e"],["page/8/index.html","00d450621a2933e3d0d64b1a238cbc45"],["tags/AMQP协议-暂无/index.html","5128908a00f00d012177cb3c43faaff5"],["tags/ARM汇编/index.html","b401eb78dd2726007f1857a4cd9c50f3"],["tags/Android反编译/index.html","45f6bb8e4fe3b61e0a4ed02ec3ddc344"],["tags/BLE协议/index.html","9d15042e0142b7ea8ca68d30809bf97e"],["tags/CoAP协议/index.html","8fbb319b14466622345d57986589054b"],["tags/JT808协议/index.html","1c7187e475e89f15e09ce417ccc9b9b3"],["tags/JavaScript/index.html","51f621b6b4bbf52f6f509d83c8b7e0fa"],["tags/MQTT协议/index.html","e9cb26708ef5585f99d16694dcf09d4d"],["tags/NFC协议/index.html","4a3245f8ba9821de47e9fbe33396f445"],["tags/RF协议/index.html","6927f6465903113a1300d40c2dbd2df6"],["tags/Wi-Fi协议/index.html","2353955ab6a3807dff0185210fdc301c"],["tags/Wi-Fi协议/page/2/index.html","e79f6ca9b22196e0f36631250593ca2b"],["tags/ZigBee协议/index.html","4dcf6ae6b3b430afacb39f29550c09be"],["tags/index.html","d8f11b1024fc4957596bc4b938bc7f8d"],["tags/x86汇编/index.html","2687491e1a6d929c8945afa184b4561b"],["tags/x86汇编/page/2/index.html","71551b85e17d95a68aba234eda89a2fe"],["tags/固件逆向/index.html","2ae5976771942c2754648ec1a7e1499b"],["tags/智能硬件安全/index.html","ad6d2b90681a6dfd317d2a827b7a35a5"],["tags/智能设备安全分析/index.html","f0c0d5e9e365649c4915b8267fbe3aca"],["tags/漏洞复现/index.html","294fae526e0bdc54c2e174352525c7b6"],["tags/硬件电路构成/index.html","d9387118f216f7c85a45eb2443319e33"],["tags/逆向（基础）/index.html","ee1ee361973d1c4bbcd81618ae12c5cc"],["tags/逆向（调试）/index.html","7a624af0286e15245a52ae341afca3ab"],["x86汇编学习笔记_0x01/index.html","c558cf4b558e9bc83b5616a01fe8ea18"],["x86汇编学习笔记_0x02/index.html","5f0fdeee976f3216b9b9ccf13f218ab6"],["x86汇编学习笔记_0x03/index.html","f30038b21470061dfd79b538a258cebd"],["x86汇编学习笔记_0x04/index.html","bb78caef4b65de82091957119d8e488d"],["x86汇编学习笔记_0x05/index.html","288178b8d776a68dee0946f4c329fe91"],["x86汇编学习笔记_0x06/index.html","aca4b3eaa0db9cc06df7b77a8ac50fbe"],["x86汇编学习笔记_0x07/index.html","754182861c053b7919cb522cd1c0952f"],["x86汇编学习笔记_0x08/index.html","5612274311406c11ffe07e39d3ba6bb3"],["x86汇编学习笔记_0x09/index.html","596dd99cc0854765b517e531e097b705"],["x86汇编学习笔记_0x10/index.html","05f7b918fd845856e4fcf099a99718bb"],["x86汇编学习笔记_0x11/index.html","274aeed0a92fb0263381718f03597fed"],["x86汇编学习笔记_0x12/index.html","61c1fb76017a2cce00a9e021f8579a94"],["x86汇编学习笔记_0x13/index.html","3dd5249f0e3804c93ecb73473ee073f6"],["固件逆向01/index.html","03fe9ab809b278e7bdb2d96064429346"],["固件逆向02/index.html","2f7e355195c188a1e1fe7cf095412083"],["智能设备安全分析笔记(0x01)/index.html","0e299e489886bc01a618b89265f8de8b"],["汇编指令集/index.html","2c93d32ffef34424aa00e6203300de3b"],["硬件智能安全(0x01)/index.html","8c6f18577d4046aef73004a64dd86093"],["硬件智能安全(0x02)/index.html","f2c3c60905c17bb961ed1c54cc4e1da0"],["硬件智能安全(0x03)/index.html","0ee427a6e61d2ff017d2b4b194e49247"],["硬件智能安全(0x04)/index.html","716c22c06c858a54a7f1b00780771faa"],["硬件智能安全(0x05)_/index.html","994ad87c546a60bb50411f54612fa09e"],["硬件智能安全(0x06)_/index.html","84a6795f89faf5eb7382f554f764b553"],["硬件智能安全(0x07)_/index.html","fdc10dff73ea4c7a32ed40ef392a4a00"],["硬件智能安全导航/index.html","04c3004157f4dce51dc08fa50781689d"],["硬件智能安全（固件番外）_/index.html","04c5e146fb17c0d84235c370617a213b"],["硬件电路构成01/index.html","a3aa1eb3496d29c5beb93e45c8882dee"],["逆向-基础-笔记_0x01/index.html","a38b45bdc19562251e55eadfb0d927e8"],["逆向-调试-笔记_0x01/index.html","d3fda1e32041b665bd57e495ec3b40db"],["逆向-调试-笔记_0x02/index.html","5ef0d2368c97678820056c515b80a898"],["逆向-调试-笔记_0x03/index.html","89738e7a46de7bf553e293a0a998a03a"],["逆向-调试-笔记_0x04/index.html","c9b01ae50734cdfe20064b0cf9d5d9bc"]];
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








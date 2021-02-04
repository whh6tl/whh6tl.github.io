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

var precacheConfig = [["404.html","82b114eef2fd7baa779a3647afb1335c"],["AMQP协议0_1/index.html","78684168837428ea9903d825430c750e"],["ARM汇编01/index.html","d67a7d8f04f3ba2019b270dadb832d48"],["ARM汇编02/index.html","1248de88e5ec984ef7d82f1e26e25eff"],["ARM汇编指令集/index.html","1c5d231a1f0ae1dbfa6803763a00280e"],["Andoird反编译01/index.html","9e82f04ead4fe57d51d60509c8ef323b"],["BLE协议01/index.html","c2bf7984d45bf68c9d13cbfc566b2933"],["BLE协议02/index.html","cddcfe68bb8798e4ab5bc571806f578c"],["CVE-2019-5418/index.html","a8e5da424cda56a3e8f2e08d3f622e1d"],["CVE-2019-9766/index.html","367f308c0f40028da7366debbb7440fb"],["CoAP协议01/index.html","2409557386eb180428f736b5419006e8"],["JS_0X02/index.html","5df52301df9f1e0e5448ef3ea925bad2"],["JS_0X03/index.html","bcbe4ee36d9aa03a5eaefb815d0e2048"],["JS_0X04/index.html","23ab562bfecf57fe011df118c796447e"],["JS_0X05/index.html","dd95d743e1f6c7e3d15069e023238d9b"],["JS_0X06/index.html","69cb4930e144be7798bdea524767199d"],["JS_0X07/index.html","3aafc940d89cacdedf8c8560672a6060"],["JS_0X08/index.html","0c959f4184fe674bd5665e1b55605a49"],["JS_0X09/index.html","0763f88c62eaf16385fb1df988b5dc7b"],["JS_0X10/index.html","aa227b17ca1e3b4a246932e7c6b75229"],["JS笔记(0X01)/index.html","48aa3dc9be0cdff072a49b9585ebcaf6"],["JT808协议01/index.html","70263e3b3dcd852e5d65bc64807840b7"],["MQTT协议01/index.html","02597f8c5fd68beff6d9900e25a1ba06"],["NFC协议01/index.html","3060e3f6c8fb5330bb9a3e60eac89ca7"],["NFC协议02/index.html","da3f72dfa36aa1e0c88fbbdf024e2285"],["RF协议01/index.html","e3af6d40c0c1fea9830fde782a2a46fa"],["RF协议02/index.html","bed0d4b5d17fd043819e5905cc958f7f"],["RF协议03/index.html","6cdc73dc7749fc1bc479f74b641dfcc6"],["Wi-Fi协议01/index.html","4cef6f1a7804debf2b2b3f3d1692d3cf"],["Wi-Fi协议02/index.html","88ef20e46ceed98b2eda98b580916f48"],["Wi-Fi协议03/index.html","a879df759c38017aba34a6d95cfa898c"],["Wi-Fi协议04/index.html","b2c24cd55d87cf118b9fe6e575645f38"],["Wi-Fi协议05/index.html","762a53c5ac5e04f759af02f9c096df39"],["Wi-Fi协议06/index.html","68a972b1d36b5c29a71ed73376ffccfd"],["Wi-Fi协议07/index.html","cf94eaa25f2774b163653d2a4758aaca"],["Wi-Fi协议08/index.html","a246f8f97b15764650d632156adb07e4"],["Wi-Fi协议09/index.html","2ac2f7c9f9db236e33f5ad4d8ddabda7"],["Wi-Fi协议10/index.html","0b42fae407138261f38a1aceea959e6b"],["Wi-Fi协议11/index.html","2d3dce998269871dc7daed36a5204d39"],["ZigBee协议01/index.html","7d8bb6b10b7dde3ad5fca6dd82ec028d"],["ZigBee协议02/index.html","fcec72d09d09717924f2e417836b81ed"],["archives/2020/08/index.html","aa394f6a9cc3c39e2f360b6653d39a29"],["archives/2020/09/index.html","6f24ce1628946e967ce60b8f84264469"],["archives/2020/09/page/2/index.html","3446a41686354b8ac7df22e897e2413f"],["archives/2020/09/page/3/index.html","0fb770e3ceadecfd9f04cdcab5529a27"],["archives/2020/10/index.html","2185415c3b2ebc5cafe23336800e0e44"],["archives/2020/10/page/2/index.html","f7e3599fb7c0ff9d16bd2143f3c408e7"],["archives/2020/11/index.html","55aec2df26f7640282a5e9a8adde77e0"],["archives/2020/11/page/2/index.html","c7cddd16d1f02d96f0719b9c3e351f0e"],["archives/2020/12/index.html","43361ef895a81c03df6f9d6916fe495a"],["archives/2020/index.html","7b378e7e6da3732f9aa503a2fab7c7ea"],["archives/2020/page/2/index.html","03e63ee2b2677ba313dc60863bb72ffd"],["archives/2020/page/3/index.html","37a67d54b93a151516e258b4337fd818"],["archives/2020/page/4/index.html","9ae5362f826b19e7db4463520807258d"],["archives/2020/page/5/index.html","1c69ab17b3b689d0b18de466674983ab"],["archives/2020/page/6/index.html","f0a53d2bff64002526ef0466795ca7ed"],["archives/2020/page/7/index.html","66d916d1eaf0be7dae58ecc031a6a6f0"],["archives/2020/page/8/index.html","8cc340d1a41feeb100ad6854ad931e5e"],["archives/2021/01/index.html","a4ca9f93a0f197e361944adb23459c5c"],["archives/2021/index.html","885e259657b7493a21f7fd291280ba86"],["archives/index.html","66760e04d20c047bd9b5d1c4a4f4e75d"],["archives/page/2/index.html","3dba53ac6f4bd8a20ce49637eca50405"],["archives/page/3/index.html","ac1f3be5691a04800a8fcbd5eccf28bf"],["archives/page/4/index.html","060ec24466f812262ed458ded4322675"],["archives/page/5/index.html","0084e7bc9d31915befc642a6775dadf8"],["archives/page/6/index.html","ff236744de4a5c969ac1bc4638b5da68"],["archives/page/7/index.html","e943788ed4532efbfb9093d555a43914"],["archives/page/8/index.html","499648989057559504f848a2eb7bcbec"],["baidu_verify_code-74acARe7VV.html","e3f2278b79912a3032517bacde56124e"],["categories/ARM汇编/index.html","967bb5044b087b796cab802d238c81eb"],["categories/Android反编译/index.html","0a9de6a845ac8f38301b082f5a864567"],["categories/CVE/index.html","2ee97e82d8491c978a77ad3aefe31702"],["categories/JS学习笔记/index.html","8b4838cf22757044e940db6b6ae3c9ba"],["categories/index.html","2a55ef026730b29a3a281b2055a3e6ed"],["categories/x86汇编/index.html","f024d60118b83931a0fa1885280a5b8b"],["categories/x86汇编/page/2/index.html","31c483bfd606f85daf9d9093ae3876b7"],["categories/固件逆向/index.html","318fd1ff38143101c57ac70f75d3a71c"],["categories/智能硬件安全/index.html","7f703b97ffdcf703ebaa3ff337356ed2"],["categories/智能设备安全分析/index.html","aefc3919094a4fcb9e9da2a51ae87137"],["categories/硬件电路构成/index.html","44ee7c74c86cee2f0de85bf88efdb4de"],["categories/网络通信协议/index.html","6ebbd6f5a85d969962608b6f965018a6"],["categories/网络通信协议/page/2/index.html","0c82aef12451a65c888d4698a82c77b8"],["categories/网络通信协议/page/3/index.html","d966aa3e9cdb0894d2d7701d310b1264"],["categories/逆向/index.html","b539042ef2ec5dc50a07b9313a53eceb"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","49ecb0697e0ac08fa4a4dbf632a072c7"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","867a1d015f94a6079e09259e8656fe87"],["page/2/index.html","4fd53a8d961064871200e63781ad419a"],["page/3/index.html","67af99ef867ac987d3b42e1d08e9fb34"],["page/4/index.html","b8041bd942230b986b27ef5fdd903ebb"],["page/5/index.html","7d586c1946b14d7efe7b459e7cb63f02"],["page/6/index.html","342949eadb34009409a87c31e19c8331"],["page/7/index.html","2fb3668ba731046e312f969711d59da5"],["page/8/index.html","7b8a8b93221402792d28b2f3d60b7f7a"],["tags/AMQP协议-暂无/index.html","4da6295dc2d655fdb835c88be6c086ac"],["tags/ARM汇编/index.html","e41de75045193becf0a5b706c24c346d"],["tags/Android反编译/index.html","cb9ea5d421b63957c1720daffaf8614f"],["tags/BLE协议/index.html","f07ffc2ffbb446b48b2ee66f07aaac58"],["tags/CoAP协议/index.html","5e4bf3d539795c3166f49d32f47aa071"],["tags/JT808协议/index.html","860c927491741a960a18fc3b219554e4"],["tags/JavaScript/index.html","d8bf43f53c66f1c7d5a86818c8669fa1"],["tags/MQTT协议/index.html","bf708f86dad141fabe7ce98c7f414b06"],["tags/NFC协议/index.html","f5434a970ac2bef3a63bf72ee3655a39"],["tags/RF协议/index.html","a122c97eafae2e3f38bec91c0d479443"],["tags/Wi-Fi协议/index.html","1c01fe3c44c6da6fb7e9013d119cb143"],["tags/Wi-Fi协议/page/2/index.html","d57f8957e4f738e5dbbae89229a9a5c5"],["tags/ZigBee协议/index.html","2a96ab17b79bf4f01cd5ef9501fca72f"],["tags/index.html","9386ed454f9b4d94c99d5caf7bbae9e8"],["tags/x86汇编/index.html","0f90ffe1d9ed779ba20deb8f8e85c977"],["tags/x86汇编/page/2/index.html","5c8d1c688eac4eff4cf78cc71ef7ca20"],["tags/固件逆向/index.html","33a1e60fcec9e4947d1b50c11eef3b5c"],["tags/智能硬件安全/index.html","9f651c4a4daa6328007368a0b0fe3cf4"],["tags/智能设备安全分析/index.html","cdf0408a69185a2cf55917ffacc2cae6"],["tags/漏洞复现/index.html","5aaae8720c415ded69567ea35aedeff5"],["tags/硬件电路构成/index.html","6a1a1c3390986a2f4759ccf57215590e"],["tags/逆向（基础）/index.html","4396229da0b405c422d47b80b8c2efc0"],["tags/逆向（调试）/index.html","f683b4711c05defc66e80fec6dc52157"],["x86汇编学习笔记_0x01/index.html","c558cf4b558e9bc83b5616a01fe8ea18"],["x86汇编学习笔记_0x02/index.html","5f0fdeee976f3216b9b9ccf13f218ab6"],["x86汇编学习笔记_0x03/index.html","f30038b21470061dfd79b538a258cebd"],["x86汇编学习笔记_0x04/index.html","bb78caef4b65de82091957119d8e488d"],["x86汇编学习笔记_0x05/index.html","288178b8d776a68dee0946f4c329fe91"],["x86汇编学习笔记_0x06/index.html","aca4b3eaa0db9cc06df7b77a8ac50fbe"],["x86汇编学习笔记_0x07/index.html","754182861c053b7919cb522cd1c0952f"],["x86汇编学习笔记_0x08/index.html","5612274311406c11ffe07e39d3ba6bb3"],["x86汇编学习笔记_0x09/index.html","596dd99cc0854765b517e531e097b705"],["x86汇编学习笔记_0x10/index.html","05f7b918fd845856e4fcf099a99718bb"],["x86汇编学习笔记_0x11/index.html","274aeed0a92fb0263381718f03597fed"],["x86汇编学习笔记_0x12/index.html","61c1fb76017a2cce00a9e021f8579a94"],["x86汇编学习笔记_0x13/index.html","3dd5249f0e3804c93ecb73473ee073f6"],["固件逆向01/index.html","03fe9ab809b278e7bdb2d96064429346"],["固件逆向02/index.html","2f7e355195c188a1e1fe7cf095412083"],["智能设备安全分析笔记(0x01)/index.html","0e299e489886bc01a618b89265f8de8b"],["汇编指令集/index.html","2c93d32ffef34424aa00e6203300de3b"],["硬件智能安全(0x01)/index.html","8c6f18577d4046aef73004a64dd86093"],["硬件智能安全(0x02)/index.html","f2c3c60905c17bb961ed1c54cc4e1da0"],["硬件智能安全(0x03)/index.html","0ee427a6e61d2ff017d2b4b194e49247"],["硬件智能安全(0x04)/index.html","716c22c06c858a54a7f1b00780771faa"],["硬件智能安全(0x05)_/index.html","994ad87c546a60bb50411f54612fa09e"],["硬件智能安全(0x06)_/index.html","84a6795f89faf5eb7382f554f764b553"],["硬件智能安全(0x07)_/index.html","fdc10dff73ea4c7a32ed40ef392a4a00"],["硬件智能安全导航/index.html","04c3004157f4dce51dc08fa50781689d"],["硬件智能安全（固件番外）_/index.html","04c5e146fb17c0d84235c370617a213b"],["硬件电路构成01/index.html","a3aa1eb3496d29c5beb93e45c8882dee"],["逆向-基础-笔记_0x01/index.html","a38b45bdc19562251e55eadfb0d927e8"],["逆向-调试-笔记_0x01/index.html","d3fda1e32041b665bd57e495ec3b40db"],["逆向-调试-笔记_0x02/index.html","5ef0d2368c97678820056c515b80a898"],["逆向-调试-笔记_0x03/index.html","89738e7a46de7bf553e293a0a998a03a"],["逆向-调试-笔记_0x04/index.html","c9b01ae50734cdfe20064b0cf9d5d9bc"]];
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








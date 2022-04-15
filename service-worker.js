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

var precacheConfig = [["404.html","43814ed9b1bd6c8b151647577e795104"],["AMQP协议0_1/index.html","db19b96252ea731891ad7a6fe146cd4f"],["ARM汇编01/index.html","24c756a98472dfe59e28b72bab1f039a"],["ARM汇编02/index.html","613859987264c264bc160f3f09aa7807"],["ARM汇编指令集/index.html","5ffe3d231f57a9a69882ad67da189ebe"],["Andoird反编译01/index.html","ee82f8039d9ac06e95e2ed097924c3f3"],["BLE协议01/index.html","e6a647672ffe932ec2e7a4b547775abd"],["BLE协议02/index.html","4a3dda4e9871bc83da5791d360223120"],["CVE-2019-5418/index.html","d9b24cf77bad6d22217f5ccbd06c6c1b"],["CVE-2019-9766/index.html","c836a7a437526104c6a56ed592e39c06"],["CoAP协议01/index.html","674ae0703ba1b9c30d19d25162467902"],["JS_0X02/index.html","4b4d266c43ee0c79a78672ee3aa1361c"],["JS_0X03/index.html","4e5c259433e999ae8ec43ec5fb52832b"],["JS_0X04/index.html","00b7df0becda287122c6b7c696c6c939"],["JS_0X05/index.html","c89beef834e66463998ae3f0b115d8e1"],["JS_0X06/index.html","c2d37bd481992904d97ab7b97e8f3f7c"],["JS_0X07/index.html","c0851ab888c61243a56d8dccfd551b3b"],["JS_0X08/index.html","811f47826bb2fc2d1e01c53e157d5b0a"],["JS_0X09/index.html","cfc74c07155dc177a513290fee582208"],["JS_0X10/index.html","4778eb06b6644b864de47e9e559d54fc"],["JS笔记(0X01)/index.html","74d4ca3190e42beed2d268415ec4c5c3"],["JT808协议01/index.html","9bf5ecf2fb4b52626f37dbaa77c29ea5"],["MQTT协议01/index.html","04dae2a30ef31fd8a35998333ed7c472"],["NFC协议01/index.html","a39708c40f676a6eeae86e15b6e9eb21"],["NFC协议02/index.html","661c4d4f0ea27df956c80956d3546b73"],["RF协议01/index.html","1d85f3ab0e9fa01b524a38a6f8006fd3"],["RF协议02/index.html","69a16bcbbec5b2127f25cf6233d4b6b7"],["RF协议03/index.html","f80fc4f0bb54bd778b39cc6ae61368d7"],["Wi-Fi协议01/index.html","35659baf7cb5f6878485a4f345410559"],["Wi-Fi协议02/index.html","be56aa3d784f8d0ea4db3b767a6da0a0"],["Wi-Fi协议03/index.html","d78c6af144c6d1dbb85705935d69f633"],["Wi-Fi协议04/index.html","784d72aaee8f73055e13738482130221"],["Wi-Fi协议05/index.html","0cef414352f8a11ad64ea77d4d77d881"],["Wi-Fi协议06/index.html","d705f1b1f3b994413a41dcda4429e865"],["Wi-Fi协议07/index.html","ebd0eafb8e8164bf94100529b8a15b05"],["Wi-Fi协议08/index.html","699285bdd9b0d1591323a3f42de09cb7"],["Wi-Fi协议09/index.html","f639af84192922f5e5617f33abe88b58"],["Wi-Fi协议10/index.html","281c88b6a2e80e7425d592ec2dee0424"],["Wi-Fi协议11/index.html","384ded3de6795024117a51617de2bde3"],["ZigBee协议01/index.html","47247f84ad74acb8e3a68e4784575395"],["ZigBee协议02/index.html","562eef423630b55c4ced7e33fe4ac52d"],["archives/2020/08/index.html","93fbbbe3595aad5098d41ad824220ff8"],["archives/2020/09/index.html","82d4e54c4f032a0d7ec0d6823258a03a"],["archives/2020/09/page/2/index.html","e936905cc6b7d9f829dece291e6bfc3b"],["archives/2020/09/page/3/index.html","fea11a91acfa50f994f3f79590e35a4d"],["archives/2020/10/index.html","8f2ca1496d4a414ee63d76d6bd4c4f0c"],["archives/2020/10/page/2/index.html","4ed98e7b1b50fdb312cf2a10a5f73ab3"],["archives/2020/11/index.html","b633b38858eafa7c3051d0c08ecfe258"],["archives/2020/11/page/2/index.html","df542f2d8e1d3016494975e9872e7a46"],["archives/2020/12/index.html","4b1c99355579e3b646d34703f2b99f9f"],["archives/2020/index.html","d67bc7e3a1e7ebd0b6eef637800c3f20"],["archives/2020/page/2/index.html","590261f5d6b9a7180fa409d17398400f"],["archives/2020/page/3/index.html","8869f232e47eb3d2491d7ba3b5f960be"],["archives/2020/page/4/index.html","54fb5694648fd556024c9b9766cc0440"],["archives/2020/page/5/index.html","4008ecf98c218996ca536278c82e006d"],["archives/2020/page/6/index.html","e12a580deed4a6429a539620867f67c4"],["archives/2020/page/7/index.html","b4c5335791a938510d58700e4563d388"],["archives/2020/page/8/index.html","4a602992277780370cb1b635d8030b77"],["archives/2021/01/index.html","ad09b228fc7acc47716a37fa80acf4fe"],["archives/2021/09/index.html","bbae8bf590736bb834898e622cd186d3"],["archives/2021/index.html","2ea198dd1e7bb34a7b982a3120130dab"],["archives/index.html","63ba0c83f2d808108d4969110121a885"],["archives/page/2/index.html","146c119e4400bffc76fcc3806f2d7234"],["archives/page/3/index.html","9cd20e86c175390c88cc31e466f3756d"],["archives/page/4/index.html","129e0de3b95fdfbb69b8e4dc5f137b2f"],["archives/page/5/index.html","4c7c80db5fe9d2aa1c8edfb7c36c973a"],["archives/page/6/index.html","3acb618dd3394a33dc4e0a36c68c977f"],["archives/page/7/index.html","debc76ac3a9b1722d10aa2e5d3591f31"],["archives/page/8/index.html","6886939306440a4b130805ee9d30c85e"],["baidu_verify_code-74acARe7VV.html","e3f2278b79912a3032517bacde56124e"],["categories/ARM汇编/index.html","f3a02d598516018c8e750cf86db3b538"],["categories/Android反编译/index.html","3b46c7f5b439e38ff8e6d450e58b6150"],["categories/CVE/index.html","6c926a9f30ab865a100e97975df08d13"],["categories/JS学习笔记/index.html","0d8e612d542ab6a669ce695af1ce007d"],["categories/index.html","765a62a8336065e4fdd7556f7d38aa0d"],["categories/x86汇编/index.html","d521b6a0b792143264f44de831d97cd7"],["categories/x86汇编/page/2/index.html","c8b2046e4704553509c009ea66c15b25"],["categories/固件逆向/index.html","efc066d2726c6c0f3d3aa399256b592d"],["categories/技术分享/index.html","3098cf5349b124c55c33c82cbf6b7eef"],["categories/挑战项目/index.html","b340d5e7fee1d7c7cf658fec0308fc64"],["categories/智能硬件安全/index.html","aa6c2aa150bf5dd9e3943ef7d5a4ed8a"],["categories/智能设备安全分析/index.html","447440a35bff78d134d5a1fb7a39dfdd"],["categories/硬件电路构成/index.html","6cc783a8fff828fb5af899b3d6c8a281"],["categories/网络通信协议/index.html","7a6773af7ea3d4e878eea6c236bae6aa"],["categories/网络通信协议/page/2/index.html","0ba99fe9e6950bc5688b072a2954a38a"],["categories/网络通信协议/page/3/index.html","9a007c9f6b8b7d941598ba7d9fa2edd7"],["categories/逆向/index.html","c22663e5af5c7312157aa84f14303ccf"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","7c0e78c3a4910b83e4081f579594f356"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","ca03ebeba797b78447967db1b5d3feb6"],["page/2/index.html","7e34f4864777d8618495c4eff1f7a6c2"],["page/3/index.html","0477ef2c24af6d72886c829810d3e7ff"],["page/4/index.html","4cadf02b93d13b572a701e2aaada3760"],["page/5/index.html","da5fe3f0e8c30ee7cd88eca2a424b8e7"],["page/6/index.html","95fd7e7aca442b148ca0d470eb71a9ca"],["page/7/index.html","2efacd3277b8e6eb8630b54bfd629f31"],["page/8/index.html","b43f37d0b3caa16016b8ac52cc967d15"],["sec_share/index.html","70cf4e4e7e33a4532e9f90658e9f8b7d"],["tags/AMQP协议-暂无/index.html","65a8f84769b55cb56902c7ca375809e7"],["tags/ARM汇编/index.html","188ca60a34d32b2f2eb63dd12081d4aa"],["tags/Android反编译/index.html","9aa1e9d1762f9dcc9471826e47a59090"],["tags/BLE协议/index.html","c18aa12df73e653e7db8084043db2b65"],["tags/CoAP协议/index.html","5b6d3cb3447504735d690c62c44e4824"],["tags/JT808协议/index.html","62a2c6d63508a04fcff0cf9e3bc04c13"],["tags/JavaScript/index.html","e537fdfa5115efac900c654f1c7d53a2"],["tags/MQTT协议/index.html","52cb642582bfaede4b168103716e7197"],["tags/NFC协议/index.html","dbd9ec5a1e9511b8784b02ea2a859e96"],["tags/RF协议/index.html","408c7cc1c02f499f245db8d62e7fe1c4"],["tags/Wi-Fi协议/index.html","29676274494ae54e25302ef4d9b167d2"],["tags/Wi-Fi协议/page/2/index.html","7689d672656b6f274c6050262d5d3c35"],["tags/ZigBee协议/index.html","3928ae26eaf3bce43fe072aa40afce52"],["tags/index.html","1aabd66f20d1036c246274d823b5adbf"],["tags/x86汇编/index.html","8d024625b94444dc3c9c99523cca75bc"],["tags/x86汇编/page/2/index.html","5493a598a2fc2a1f5f43f3b64813e85d"],["tags/固件逆向/index.html","1217e080044355617ecade959c7e9899"],["tags/技术分享/index.html","b6ee13625c26a25846e0d37e9b0cfa1b"],["tags/挑战项目/index.html","3780c35c68e7de6b7fd5e8e92a54ceff"],["tags/智能硬件安全/index.html","0a463c0fc0397da7d0f64532f74adee7"],["tags/智能设备安全分析/index.html","661fc7696349aa97b57d0998f967dd31"],["tags/漏洞复现/index.html","90473079fb4dfbd2e8dfdf1ff81749e9"],["tags/硬件电路构成/index.html","09f6d67afbab02fd23bd157be057461a"],["tags/逆向（基础）/index.html","e939953b806c6de1e35fdb41741ae382"],["tags/逆向（调试）/index.html","7e50532be0de2cc235a258e4533d62b4"],["x86汇编学习笔记_0x01/index.html","07c586dddd9fecca33e53a33e501f2fe"],["x86汇编学习笔记_0x02/index.html","c2704f8592f333806a76021f47c5d9a7"],["x86汇编学习笔记_0x03/index.html","7dc56be8ce1e11cf58bf084abf2b7405"],["x86汇编学习笔记_0x04/index.html","e0fbdf8e0e0ed0b4b8aaf58bfcf71bf0"],["x86汇编学习笔记_0x05/index.html","cdc2f82b40c90ce18f7836335f06addd"],["x86汇编学习笔记_0x06/index.html","b5d4875207abe44aa190564485c6b1e0"],["x86汇编学习笔记_0x07/index.html","5c8798887567cf4abbefa5053889d97d"],["x86汇编学习笔记_0x08/index.html","9b46cc3dfdb881c255b1a51067ca6a01"],["x86汇编学习笔记_0x09/index.html","f2df26f1dbbf73ed5a1a4aa10221fc0f"],["x86汇编学习笔记_0x10/index.html","4f902c6b382c8066ffe1677af389a8fd"],["x86汇编学习笔记_0x11/index.html","9cb25c5b6de7298691e3eac17128761c"],["x86汇编学习笔记_0x12/index.html","e4a4fcf874ff08f4f4d8cbca38524f17"],["x86汇编学习笔记_0x13/index.html","fce7416454c1feff1bbd757bd2936f65"],["固件逆向01/index.html","9ce316abce7833c060789e56ef1501c8"],["固件逆向02/index.html","fa35f60d528e5bb41164bba17d562c9a"],["挑战项目_进度分享/index.html","80a8dc80acf793c51cac079ee0bef2ae"],["智能设备安全分析笔记(0x01)/index.html","dc24608e246484ea2c48ffe06a3104a5"],["汇编指令集/index.html","c61d74199bc1cbbe744fa4589a2761f8"],["硬件智能安全(0x01)/index.html","f702a55559fc54010c7f32bddbdd55a3"],["硬件智能安全(0x02)/index.html","7b9b8a0f64b2b3b9fe1c1e14442d08c6"],["硬件智能安全(0x03)/index.html","79704e51c24bb315c73103fe9c82e234"],["硬件智能安全(0x04)/index.html","9ee3942f7b92702578765592491c756e"],["硬件智能安全(0x05)_/index.html","458df9cbabe4d9b7dd736b5f952cfea5"],["硬件智能安全(0x06)_/index.html","0e0477e634722b0282ebed6f954c12fe"],["硬件智能安全(0x07)_/index.html","33db08561efd49c87070c4a32d8b1472"],["硬件智能安全导航/index.html","cc3df663905c0b8ea638f6b4333c3a5b"],["硬件智能安全（固件番外）_/index.html","767b8b5df1f873396d6e60022ce880a2"],["硬件电路构成01/index.html","4c1b88d2b644f56a235966c1c51103ec"],["逆向-基础-笔记_0x01/index.html","4ec9f407074fb3b0fa8d9a5130484c71"],["逆向-调试-笔记_0x01/index.html","80bc7cd22d4f71e0156a8822f523e19f"],["逆向-调试-笔记_0x02/index.html","ddf6a4d59b2a7098d33f8a667211415a"],["逆向-调试-笔记_0x03/index.html","6a8112b5b94bffef212dc7ca7f92455d"],["逆向-调试-笔记_0x04/index.html","c05ce10a280f7aa7937420bf3528ab42"]];
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








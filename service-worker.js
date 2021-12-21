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

var precacheConfig = [["404.html","508e473b4cef282380d03b801dcbac23"],["AMQP协议0_1/index.html","db19b96252ea731891ad7a6fe146cd4f"],["ARM汇编01/index.html","24c756a98472dfe59e28b72bab1f039a"],["ARM汇编02/index.html","613859987264c264bc160f3f09aa7807"],["ARM汇编指令集/index.html","5ffe3d231f57a9a69882ad67da189ebe"],["Andoird反编译01/index.html","ee82f8039d9ac06e95e2ed097924c3f3"],["BLE协议01/index.html","e6a647672ffe932ec2e7a4b547775abd"],["BLE协议02/index.html","4a3dda4e9871bc83da5791d360223120"],["CVE-2019-5418/index.html","d9b24cf77bad6d22217f5ccbd06c6c1b"],["CVE-2019-9766/index.html","c836a7a437526104c6a56ed592e39c06"],["CoAP协议01/index.html","674ae0703ba1b9c30d19d25162467902"],["JS_0X02/index.html","4b4d266c43ee0c79a78672ee3aa1361c"],["JS_0X03/index.html","4e5c259433e999ae8ec43ec5fb52832b"],["JS_0X04/index.html","00b7df0becda287122c6b7c696c6c939"],["JS_0X05/index.html","c89beef834e66463998ae3f0b115d8e1"],["JS_0X06/index.html","c2d37bd481992904d97ab7b97e8f3f7c"],["JS_0X07/index.html","c0851ab888c61243a56d8dccfd551b3b"],["JS_0X08/index.html","811f47826bb2fc2d1e01c53e157d5b0a"],["JS_0X09/index.html","cfc74c07155dc177a513290fee582208"],["JS_0X10/index.html","4778eb06b6644b864de47e9e559d54fc"],["JS笔记(0X01)/index.html","74d4ca3190e42beed2d268415ec4c5c3"],["JT808协议01/index.html","9bf5ecf2fb4b52626f37dbaa77c29ea5"],["MQTT协议01/index.html","04dae2a30ef31fd8a35998333ed7c472"],["NFC协议01/index.html","a39708c40f676a6eeae86e15b6e9eb21"],["NFC协议02/index.html","661c4d4f0ea27df956c80956d3546b73"],["RF协议01/index.html","1d85f3ab0e9fa01b524a38a6f8006fd3"],["RF协议02/index.html","69a16bcbbec5b2127f25cf6233d4b6b7"],["RF协议03/index.html","f80fc4f0bb54bd778b39cc6ae61368d7"],["Wi-Fi协议01/index.html","35659baf7cb5f6878485a4f345410559"],["Wi-Fi协议02/index.html","be56aa3d784f8d0ea4db3b767a6da0a0"],["Wi-Fi协议03/index.html","d78c6af144c6d1dbb85705935d69f633"],["Wi-Fi协议04/index.html","784d72aaee8f73055e13738482130221"],["Wi-Fi协议05/index.html","0cef414352f8a11ad64ea77d4d77d881"],["Wi-Fi协议06/index.html","d705f1b1f3b994413a41dcda4429e865"],["Wi-Fi协议07/index.html","ebd0eafb8e8164bf94100529b8a15b05"],["Wi-Fi协议08/index.html","699285bdd9b0d1591323a3f42de09cb7"],["Wi-Fi协议09/index.html","f639af84192922f5e5617f33abe88b58"],["Wi-Fi协议10/index.html","281c88b6a2e80e7425d592ec2dee0424"],["Wi-Fi协议11/index.html","384ded3de6795024117a51617de2bde3"],["ZigBee协议01/index.html","47247f84ad74acb8e3a68e4784575395"],["ZigBee协议02/index.html","562eef423630b55c4ced7e33fe4ac52d"],["archives/2020/08/index.html","dd0f769fbbf55edfda40ea14f5e787a1"],["archives/2020/09/index.html","a84aebf4140d19ba48cea350936bc04b"],["archives/2020/09/page/2/index.html","020a3686f4c5dbd3885ab2f650039428"],["archives/2020/09/page/3/index.html","7d936156ee88415ace79755d835d67e4"],["archives/2020/10/index.html","9b76aad8bbe9160b0d90e0912f18e49e"],["archives/2020/10/page/2/index.html","ea8529446238465ee5f734c23e3439cc"],["archives/2020/11/index.html","57399d57c6b925644f1e919fd108545a"],["archives/2020/11/page/2/index.html","dbe12a3f49dcf0c76730348de0392eb9"],["archives/2020/12/index.html","89dac28e49e8c08a78701440c43c720c"],["archives/2020/index.html","bd6f13fca1cab334f51df39b12e94e4b"],["archives/2020/page/2/index.html","cc56306451412090b17f41f08ce1edb2"],["archives/2020/page/3/index.html","e3977243199a257ee122755bf37906cc"],["archives/2020/page/4/index.html","9eb22fca9b6503dc5c550dced8c716e7"],["archives/2020/page/5/index.html","93ec16c77ccdc4ce253b42455ea170be"],["archives/2020/page/6/index.html","eb6f381a77f3f217956f73c9c6b0a673"],["archives/2020/page/7/index.html","ca5983e56ec78fdf18ec0150aa7dda5b"],["archives/2020/page/8/index.html","f24a6e34b47929d72c99554ad662bbcf"],["archives/2021/01/index.html","2817b97949bd1d2db2bd849bc029f921"],["archives/2021/09/index.html","03960f4c60a4ac956c675482cff329b2"],["archives/2021/index.html","f8432749f36697a8315bba51b0336b7f"],["archives/index.html","6171fcda6a6fecc4b981f053ebc19522"],["archives/page/2/index.html","b6a3356a2478e769d5a9e00d75e63bfc"],["archives/page/3/index.html","ff2a5f86eecbb5510483ddadcda5d289"],["archives/page/4/index.html","0096ad8cba13cdda5ee0f52c2afb33c7"],["archives/page/5/index.html","071908ddcc7bc2731ddcdbd1f3f44553"],["archives/page/6/index.html","a25dc373db94146a38cd8103ae37e03e"],["archives/page/7/index.html","ddde03579ee5f434df7e7e4244978ac4"],["archives/page/8/index.html","b7cab580a670160f15e8b717903faa66"],["baidu_verify_code-74acARe7VV.html","e3f2278b79912a3032517bacde56124e"],["categories/ARM汇编/index.html","3b13d23e35ad17ad8e68c93ff2639769"],["categories/Android反编译/index.html","57385b12c4578f087ef3a7d1c0cd1e58"],["categories/CVE/index.html","71b6d3a3c1f403c40d619ec0e0ac61c3"],["categories/JS学习笔记/index.html","e7645593580d2ea0804858c3386043f8"],["categories/index.html","765a62a8336065e4fdd7556f7d38aa0d"],["categories/x86汇编/index.html","d1c17d626fbd2e6c8c6e69311f58b31b"],["categories/x86汇编/page/2/index.html","39317ad3ad51eb471d94fb1d13c1a325"],["categories/固件逆向/index.html","1c10c06847751978f1dc1ad0a6f78fe7"],["categories/技术分享/index.html","6d5211d5dbb9df3652e0942595583c56"],["categories/挑战项目/index.html","4b81217979badde8fdbc92091cecded1"],["categories/智能硬件安全/index.html","61a9639c496ff4ea2dd0c896afc6bf34"],["categories/智能设备安全分析/index.html","6479cbf336b44f93f03db81a5f8cb257"],["categories/硬件电路构成/index.html","6cb5d34c3b114c43b31596957c441435"],["categories/网络通信协议/index.html","4b9cddad320233b959a6261502d197db"],["categories/网络通信协议/page/2/index.html","73a92a1cc587b8f3bde9f52779a51e1d"],["categories/网络通信协议/page/3/index.html","7cefd34ff4ef2da385e16dab4e65c5ff"],["categories/逆向/index.html","a37e5b18db196401f0ab0a3a719b223f"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","89cd3a7d0dd335a316fcf1516fe09d98"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","ca03ebeba797b78447967db1b5d3feb6"],["page/2/index.html","ef8d0c0843e6d7a4b220532efde68b12"],["page/3/index.html","108943c6510905ebebfd8af62548351f"],["page/4/index.html","3f6cab3b14f878eb502d2e70bc57aa62"],["page/5/index.html","1b2d94f1438c223737ef62792d09dd6f"],["page/6/index.html","3410ab8c1b5f75d0bbe46b96f7fc61e6"],["page/7/index.html","74e785de0d14807c6d9903916683f54a"],["page/8/index.html","60eb0155debaf247ff4d293ce75a0d44"],["sec_share/index.html","70cf4e4e7e33a4532e9f90658e9f8b7d"],["tags/AMQP协议-暂无/index.html","c22292e083dbd279afe2838d8cf3eee5"],["tags/ARM汇编/index.html","4e0caff604bf1cf4169dccd2752b1818"],["tags/Android反编译/index.html","c12b3c38f99861c54deff7c7adc2e8e5"],["tags/BLE协议/index.html","44221bc174fe00a39fdb1a794b762ac0"],["tags/CoAP协议/index.html","3c78354da64e153d41bf9b4cca881b3d"],["tags/JT808协议/index.html","a9dc8da4945d7dd9c4dca59f5f9ee2e7"],["tags/JavaScript/index.html","2fdd12ab1f7a05695d1c5b68b957c224"],["tags/MQTT协议/index.html","c72648093812eb65c932e8cbb60aa537"],["tags/NFC协议/index.html","104cedbce7666362b35537440fdad45d"],["tags/RF协议/index.html","dd7eb46c905af78932f3ed8ecc9e8213"],["tags/Wi-Fi协议/index.html","4fee8369978a2d2de7813436b6e8218d"],["tags/Wi-Fi协议/page/2/index.html","289d80f7dfd9ff413be4b77f7e8b827d"],["tags/ZigBee协议/index.html","94e16d467ee70235a5586821f44f73b0"],["tags/index.html","c3a165f6cb5f19c5f9034e35a70f2450"],["tags/x86汇编/index.html","f73c155f06b5e715ac91c80ccbab647f"],["tags/x86汇编/page/2/index.html","cd8aa916d0aa20cddd587594e3f3a0e7"],["tags/固件逆向/index.html","7dc22798e2325cb409b72e750acbcb6d"],["tags/技术分享/index.html","cbff1ba2d11676c59adf219d07641048"],["tags/挑战项目/index.html","30bbae1811d2eb5ef5269dbb4c5281cf"],["tags/智能硬件安全/index.html","8ecae7ffe9ace7c216125d57ee5bf9dd"],["tags/智能设备安全分析/index.html","ed67091038d1787d059727056bc57cd3"],["tags/漏洞复现/index.html","a08ac956e4c182e7c1bfe3704f3d0c90"],["tags/硬件电路构成/index.html","7dab3da5b7fc427620db07376de9e1f6"],["tags/逆向（基础）/index.html","36324a04f80400d7da07979051fde009"],["tags/逆向（调试）/index.html","19f7d42e8fd03c3acc6c01527a53bdb5"],["x86汇编学习笔记_0x01/index.html","07c586dddd9fecca33e53a33e501f2fe"],["x86汇编学习笔记_0x02/index.html","c2704f8592f333806a76021f47c5d9a7"],["x86汇编学习笔记_0x03/index.html","7dc56be8ce1e11cf58bf084abf2b7405"],["x86汇编学习笔记_0x04/index.html","e0fbdf8e0e0ed0b4b8aaf58bfcf71bf0"],["x86汇编学习笔记_0x05/index.html","cdc2f82b40c90ce18f7836335f06addd"],["x86汇编学习笔记_0x06/index.html","b5d4875207abe44aa190564485c6b1e0"],["x86汇编学习笔记_0x07/index.html","5c8798887567cf4abbefa5053889d97d"],["x86汇编学习笔记_0x08/index.html","9b46cc3dfdb881c255b1a51067ca6a01"],["x86汇编学习笔记_0x09/index.html","f2df26f1dbbf73ed5a1a4aa10221fc0f"],["x86汇编学习笔记_0x10/index.html","4f902c6b382c8066ffe1677af389a8fd"],["x86汇编学习笔记_0x11/index.html","9cb25c5b6de7298691e3eac17128761c"],["x86汇编学习笔记_0x12/index.html","e4a4fcf874ff08f4f4d8cbca38524f17"],["x86汇编学习笔记_0x13/index.html","fce7416454c1feff1bbd757bd2936f65"],["固件逆向01/index.html","9ce316abce7833c060789e56ef1501c8"],["固件逆向02/index.html","fa35f60d528e5bb41164bba17d562c9a"],["挑战项目_进度分享/index.html","80a8dc80acf793c51cac079ee0bef2ae"],["智能设备安全分析笔记(0x01)/index.html","dc24608e246484ea2c48ffe06a3104a5"],["汇编指令集/index.html","c61d74199bc1cbbe744fa4589a2761f8"],["硬件智能安全(0x01)/index.html","f702a55559fc54010c7f32bddbdd55a3"],["硬件智能安全(0x02)/index.html","7b9b8a0f64b2b3b9fe1c1e14442d08c6"],["硬件智能安全(0x03)/index.html","79704e51c24bb315c73103fe9c82e234"],["硬件智能安全(0x04)/index.html","9ee3942f7b92702578765592491c756e"],["硬件智能安全(0x05)_/index.html","458df9cbabe4d9b7dd736b5f952cfea5"],["硬件智能安全(0x06)_/index.html","0e0477e634722b0282ebed6f954c12fe"],["硬件智能安全(0x07)_/index.html","33db08561efd49c87070c4a32d8b1472"],["硬件智能安全导航/index.html","cc3df663905c0b8ea638f6b4333c3a5b"],["硬件智能安全（固件番外）_/index.html","767b8b5df1f873396d6e60022ce880a2"],["硬件电路构成01/index.html","4c1b88d2b644f56a235966c1c51103ec"],["逆向-基础-笔记_0x01/index.html","4ec9f407074fb3b0fa8d9a5130484c71"],["逆向-调试-笔记_0x01/index.html","80bc7cd22d4f71e0156a8822f523e19f"],["逆向-调试-笔记_0x02/index.html","ddf6a4d59b2a7098d33f8a667211415a"],["逆向-调试-笔记_0x03/index.html","6a8112b5b94bffef212dc7ca7f92455d"],["逆向-调试-笔记_0x04/index.html","c05ce10a280f7aa7937420bf3528ab42"]];
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








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

var precacheConfig = [["404.html","7bf912e9b3638ae810b7592c2ccb23ae"],["AMQP协议0_1/index.html","1dabd75970d4a90110c0e2c6f73209a5"],["ARM汇编01/index.html","a9636f57c8e509854c5fbcc8eeed71c6"],["ARM汇编02/index.html","7767dace353adad649bc72ec29ea457a"],["ARM汇编指令集/index.html","10f7ccd7714e6b742e953787aa4d4274"],["Andoird反编译01/index.html","91dae57a958f5056eb2caf21304a14bb"],["BLE协议01/index.html","585b8cc5f95aa281f9ce705786ee17a0"],["BLE协议02/index.html","cc3eaea4e597eae67358b779bcdca062"],["CVE-2019-5418/index.html","23563ec879b242b88cda6c2f6ce9aee5"],["CVE-2019-9766/index.html","3a0f114bc739fca61ba827983a9e764e"],["CoAP协议01/index.html","23f2473cc338cf75e19b8af4f06d35c9"],["JS_0X02/index.html","27c1a5906d76c838660a2e214ca216b0"],["JS_0X03/index.html","ef61506d3f372732b123e50d345bbb1a"],["JS_0X04/index.html","fd07afa0c6a7f121d3a86ff2e8eca708"],["JS_0X05/index.html","aea7c296b3f7be9b0b141bdc38ada0cd"],["JS_0X06/index.html","7617a5ceaafc2d787d68b19841952556"],["JS_0X07/index.html","4d533e208728bf7bbe6abf0e634836a4"],["JS_0X08/index.html","f0197b2b0df1165132574ee9fa48de12"],["JS_0X09/index.html","bb29fcc9d33a75013d1d39a8f9cea799"],["JS_0X10/index.html","a41b151cba13a1d61ca57441b01456e7"],["JS笔记(0X01)/index.html","64676785ba42ad4f44ba1b8528033d87"],["JT808协议01/index.html","8198e88c1773857fa1a76d5d1de11b2c"],["MQTT协议01/index.html","084739adf39ba2a79b7062db65fb71e8"],["NFC协议01/index.html","664c5db3e3241b0414ef5f9bc28dd574"],["NFC协议02/index.html","8bb5a7a30f8df3ff716986470bcdaa6d"],["RF协议01/index.html","29c84df54377dc3f77e5e9065d32c574"],["RF协议02/index.html","3a58d29f606001b0f0719960ad372f21"],["RF协议03/index.html","7e666ba7d5990f8cb35e3a098d0cd9fe"],["Wi-Fi协议01/index.html","2ef7a9775e65b84f139da0011828b1ab"],["Wi-Fi协议02/index.html","5bd10cd61ece4b042c8373e949f7cd15"],["Wi-Fi协议03/index.html","35c6d70b5849b2fd5123960161eb3a40"],["Wi-Fi协议04/index.html","2b0bad4a77869dce5d173c1fea196b8a"],["Wi-Fi协议05/index.html","443d06d9f61115e1ba8cc2f780ba7ce4"],["Wi-Fi协议06/index.html","97c08d862e926ecf9caded0841c3ea09"],["Wi-Fi协议07/index.html","14e59f19805e65af3c7258fa1daf4466"],["Wi-Fi协议08/index.html","c422cc3843be6e2ae5863eb0cf831998"],["Wi-Fi协议09/index.html","1cd7533abfffde75245446c1e7b3e1c7"],["Wi-Fi协议10/index.html","98702bdaaa2edbb6be81332551d1a788"],["Wi-Fi协议11/index.html","99288c0861e4488f4931f958cd9d14f5"],["ZigBee协议01/index.html","f5d0734ded1f71ed471e23af029302b5"],["ZigBee协议02/index.html","d4a841f6765868a400eeb111f5d5d20d"],["archives/2020/08/index.html","5dc91edb8d38d7f27c4106336b82da4e"],["archives/2020/09/index.html","71e3a5c24f0734778178f9c67dff2545"],["archives/2020/09/page/2/index.html","51761f40e91a56c0501d17d1149e7ed7"],["archives/2020/09/page/3/index.html","2abbda75519169306fc789c76fe8fcf0"],["archives/2020/10/index.html","0c131806dd6bf84d3e3a1318a48a516f"],["archives/2020/10/page/2/index.html","f96963bb39d3f695b966b89f14e66b1d"],["archives/2020/11/index.html","d7f58b1595102046529d278e1175e1bd"],["archives/2020/11/page/2/index.html","427cce2b39ea05c46152b154da01099e"],["archives/2020/12/index.html","8d1593f72130f7839b40a161ea7e4e76"],["archives/2020/index.html","6de2cb0362330d665dd18f91ba133ebd"],["archives/2020/page/2/index.html","bc69c4938b53fa234bb1a3c142213340"],["archives/2020/page/3/index.html","1a80e830667f3c026f9b606806758deb"],["archives/2020/page/4/index.html","a938345be521d199ff9219b49df08e1e"],["archives/2020/page/5/index.html","5497120a8d6ea43b7451ae5aa4f508c6"],["archives/2020/page/6/index.html","a73209a25823726ad7db3c0d564e7e87"],["archives/2020/page/7/index.html","c672c5ef06b3109d085b496d9eb832cc"],["archives/2020/page/8/index.html","1cec314923088dd31bab563cf673d40b"],["archives/2021/01/index.html","0e2e066a176ace2ac75dab3fab8611ef"],["archives/2021/index.html","d0eaa4034c6c16f9908246995ecaf561"],["archives/index.html","b4abfa8c1fb1415b18026c174d832012"],["archives/page/2/index.html","cac2bfaced8010ef85a5bf256ae5caf8"],["archives/page/3/index.html","8bd9ac4855dc61bb751ecb33bb557d40"],["archives/page/4/index.html","bac35f683b24058dd994122d9f546302"],["archives/page/5/index.html","cd3a2e5e2e6d3fd237968fd2a6e7456b"],["archives/page/6/index.html","f0af70a6cecd3487dc3be851250104c2"],["archives/page/7/index.html","5ccb11f6e90f7df5399faa73d1a08506"],["archives/page/8/index.html","23545c3c5542812032d1bcc3cff7c518"],["baidu_verify_code-74acARe7VV.html","e3f2278b79912a3032517bacde56124e"],["categories/ARM汇编/index.html","ace9ef62522d6212daf33c744e2f3a39"],["categories/Android反编译/index.html","f61fc812478f594ecea0dda58057bca7"],["categories/CVE/index.html","41dd02ea1f3673eb8738bb887077e733"],["categories/JS学习笔记/index.html","dc78bea9e0e65c2c645577d7825e3bc7"],["categories/index.html","fc98a5061726f230da0dd9a45f9290b5"],["categories/x86汇编/index.html","d071c5d871a587627c6918c9c1a50790"],["categories/x86汇编/page/2/index.html","4e45dd933b4467059a9c113439e4102d"],["categories/固件逆向/index.html","359eb2a429c39bdf8aab0db6f2d24c3e"],["categories/智能硬件安全/index.html","ffb5085386208f1c28666f32cbcce7a4"],["categories/智能设备安全分析/index.html","279940051447d0a2781f7703827b6a32"],["categories/硬件电路构成/index.html","983454467a4672484db13ac013df98fe"],["categories/网络通信协议/index.html","461eb3097cbb74cb3161e999619605a4"],["categories/网络通信协议/page/2/index.html","62fff2191b351b88e44b3ae498405c47"],["categories/网络通信协议/page/3/index.html","1b5f6b2d6890f319a4cc8ea6fdd4583d"],["categories/逆向/index.html","352a59d9558d0aac6fbe4370b2441e76"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","156d91f9d62919efee2ad148d2c3a047"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","2e2d42b2b65f8d9f0ebabf7b714afff6"],["page/2/index.html","7e2dd28ff8abee0d4ad434e477555408"],["page/3/index.html","73d1dcb341868770785ea8a01c307382"],["page/4/index.html","03cfd858f913f08dc941dfc004e28194"],["page/5/index.html","e9943e1dea0586dc12684e647ffc9195"],["page/6/index.html","7ef029c45f28b2b9ff7aa0a7f3c021f5"],["page/7/index.html","090f48e1b0b268a301a7d8c04a55e53e"],["page/8/index.html","f70d0f029a4ccf5f62cbdc2682984b8a"],["tags/AMQP协议-暂无/index.html","932037e9b16f15e03f4950d5744b1738"],["tags/ARM汇编/index.html","20f102e3dcbdfca3c63eec38b1a0af20"],["tags/Android反编译/index.html","165708bed9b41044f298331009aee6e5"],["tags/BLE协议/index.html","c7bbcec794427d97cac758b934c2832b"],["tags/CoAP协议/index.html","998cbba7718fe48a3a1944c369de68c8"],["tags/JT808协议/index.html","272eff072d25a0933ddeee936edb0d8a"],["tags/JavaScript/index.html","b81ac39f0c005e51a291536ebf7033e5"],["tags/MQTT协议/index.html","bdebf2818fc1c2e967309c694b2226c4"],["tags/NFC协议/index.html","a9049c67fd9211612f23a4a29fb13444"],["tags/RF协议/index.html","6b077c2b130b905a9d75a0837103f9af"],["tags/Wi-Fi协议/index.html","d5b6c9889e90b517879ce8b7f46e3557"],["tags/Wi-Fi协议/page/2/index.html","188a2b2c63dbe5cad7a90682b013cf9e"],["tags/ZigBee协议/index.html","6ad73140d2e62178786065042b4f0f6c"],["tags/index.html","07458d62c4cdf113d529686c596700f2"],["tags/x86汇编/index.html","8176f376443baeaad8d5098538151f9d"],["tags/x86汇编/page/2/index.html","83afe5ce75e7d06f91be9115667a43cf"],["tags/固件逆向/index.html","cf7180c58fd769731922134acd161ece"],["tags/智能硬件安全/index.html","472b3c84ddf358a268b689dedf9b5b06"],["tags/智能设备安全分析/index.html","ff32dd6f29c9cf2311bae5a215c7847d"],["tags/漏洞复现/index.html","dc64104df14a182f6cf3e3792891fa95"],["tags/硬件电路构成/index.html","db81f21eae28bba4a0e04abe4df3fe0d"],["tags/逆向（基础）/index.html","b4257088f7a84e5e4b417cb2d35e1786"],["tags/逆向（调试）/index.html","c7a4817f258996637be2f5e381984062"],["x86汇编学习笔记_0x01/index.html","9c551ca35120ed40f1fab46271b9576c"],["x86汇编学习笔记_0x02/index.html","3eeb2d2df46def6b589f86afecf7b856"],["x86汇编学习笔记_0x03/index.html","b641559d9cda95dfbc0e08bba9fb0ce0"],["x86汇编学习笔记_0x04/index.html","da1b7ebdc5a50d22a2585fd19381cfe5"],["x86汇编学习笔记_0x05/index.html","2a1fc9a60c00a05718d78a2a79b0678d"],["x86汇编学习笔记_0x06/index.html","6f5f555af5b1489bbd950c8c0398b3fc"],["x86汇编学习笔记_0x07/index.html","181c5f1354ed3f2a8698770cbc4122dd"],["x86汇编学习笔记_0x08/index.html","0ab61556ca09b5e0b021a7658a8e3ebc"],["x86汇编学习笔记_0x09/index.html","bf1941c81baf010b9d4e8f55d40a53a2"],["x86汇编学习笔记_0x10/index.html","a84c7942cb269d39c75803ff48c08932"],["x86汇编学习笔记_0x11/index.html","856f522e64813b4b6fe830481b8e403b"],["x86汇编学习笔记_0x12/index.html","204bcde7b87440394673718df578b5e1"],["x86汇编学习笔记_0x13/index.html","0466fbf0c89b8a6e622edf46b0876190"],["固件逆向01/index.html","e07c061b8aa1f08c2ad12e8ae5a86190"],["固件逆向02/index.html","1a0e960ac10ab2f9ccc3b4b3884c46bd"],["智能设备安全分析笔记(0x01)/index.html","df8f75dae7cbff68cba92a1e49eed4bb"],["汇编指令集/index.html","b3848c33652fa3f776da3111ca912900"],["硬件智能安全(0x01)/index.html","6d7f6e67f276cd4cbeb8b324beaf866e"],["硬件智能安全(0x02)/index.html","4ed7664286b3a360f00c465391052000"],["硬件智能安全(0x03)/index.html","b484dea8e88063e2c2827313de4ebc20"],["硬件智能安全(0x04)/index.html","e6756fde0363064c488a9cfe9589d5b4"],["硬件智能安全(0x05)_/index.html","d2359cdbe6d915fdd32f374144266517"],["硬件智能安全(0x06)_/index.html","76ea393c8608728201e2b3eb18ce70d8"],["硬件智能安全(0x07)_/index.html","c4750bbcdbc6e3175da09b9bfe61f663"],["硬件智能安全导航/index.html","6c3aa37af72908ab5b79f5b2e106dae5"],["硬件智能安全（固件番外）_/index.html","f6d78698cf0952f65308c40cedacbece"],["硬件电路构成01/index.html","76e85c672af1e31abee6239a07a6e4c1"],["逆向-基础-笔记_0x01/index.html","3599340e7b98d4ab381497db4ee077d5"],["逆向-调试-笔记_0x01/index.html","3e6024c659255e2bd631d194605a1e5e"],["逆向-调试-笔记_0x02/index.html","b41f3ec5023f35775324ce433732886e"],["逆向-调试-笔记_0x03/index.html","0e4b14f7a5c0862e9192930614b2bbdd"],["逆向-调试-笔记_0x04/index.html","deca797ffc9b201259c27864ed59348c"]];
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








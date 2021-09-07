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

var precacheConfig = [["404.html","d9e8d1ba5df5a45eac5496218227bc45"],["AMQP协议0_1/index.html","1dabd75970d4a90110c0e2c6f73209a5"],["ARM汇编01/index.html","a9636f57c8e509854c5fbcc8eeed71c6"],["ARM汇编02/index.html","7767dace353adad649bc72ec29ea457a"],["ARM汇编指令集/index.html","10f7ccd7714e6b742e953787aa4d4274"],["Andoird反编译01/index.html","91dae57a958f5056eb2caf21304a14bb"],["BLE协议01/index.html","585b8cc5f95aa281f9ce705786ee17a0"],["BLE协议02/index.html","cc3eaea4e597eae67358b779bcdca062"],["CVE-2019-5418/index.html","23563ec879b242b88cda6c2f6ce9aee5"],["CVE-2019-9766/index.html","3a0f114bc739fca61ba827983a9e764e"],["CoAP协议01/index.html","23f2473cc338cf75e19b8af4f06d35c9"],["JS_0X02/index.html","27c1a5906d76c838660a2e214ca216b0"],["JS_0X03/index.html","ef61506d3f372732b123e50d345bbb1a"],["JS_0X04/index.html","fd07afa0c6a7f121d3a86ff2e8eca708"],["JS_0X05/index.html","aea7c296b3f7be9b0b141bdc38ada0cd"],["JS_0X06/index.html","7617a5ceaafc2d787d68b19841952556"],["JS_0X07/index.html","4d533e208728bf7bbe6abf0e634836a4"],["JS_0X08/index.html","f0197b2b0df1165132574ee9fa48de12"],["JS_0X09/index.html","bb29fcc9d33a75013d1d39a8f9cea799"],["JS_0X10/index.html","a41b151cba13a1d61ca57441b01456e7"],["JS笔记(0X01)/index.html","64676785ba42ad4f44ba1b8528033d87"],["JT808协议01/index.html","8198e88c1773857fa1a76d5d1de11b2c"],["MQTT协议01/index.html","084739adf39ba2a79b7062db65fb71e8"],["NFC协议01/index.html","664c5db3e3241b0414ef5f9bc28dd574"],["NFC协议02/index.html","8bb5a7a30f8df3ff716986470bcdaa6d"],["RF协议01/index.html","29c84df54377dc3f77e5e9065d32c574"],["RF协议02/index.html","3a58d29f606001b0f0719960ad372f21"],["RF协议03/index.html","7e666ba7d5990f8cb35e3a098d0cd9fe"],["Wi-Fi协议01/index.html","2ef7a9775e65b84f139da0011828b1ab"],["Wi-Fi协议02/index.html","5bd10cd61ece4b042c8373e949f7cd15"],["Wi-Fi协议03/index.html","35c6d70b5849b2fd5123960161eb3a40"],["Wi-Fi协议04/index.html","2b0bad4a77869dce5d173c1fea196b8a"],["Wi-Fi协议05/index.html","443d06d9f61115e1ba8cc2f780ba7ce4"],["Wi-Fi协议06/index.html","97c08d862e926ecf9caded0841c3ea09"],["Wi-Fi协议07/index.html","14e59f19805e65af3c7258fa1daf4466"],["Wi-Fi协议08/index.html","c422cc3843be6e2ae5863eb0cf831998"],["Wi-Fi协议09/index.html","1cd7533abfffde75245446c1e7b3e1c7"],["Wi-Fi协议10/index.html","98702bdaaa2edbb6be81332551d1a788"],["Wi-Fi协议11/index.html","99288c0861e4488f4931f958cd9d14f5"],["ZigBee协议01/index.html","f5d0734ded1f71ed471e23af029302b5"],["ZigBee协议02/index.html","d4a841f6765868a400eeb111f5d5d20d"],["archives/2020/08/index.html","a5447bfd7f04fc4096ae65e6a4320539"],["archives/2020/09/index.html","153bdaeb0adcb1915581c75572159979"],["archives/2020/09/page/2/index.html","30f2bb61850ae63dad966fbbb7b635f4"],["archives/2020/09/page/3/index.html","930758c44470906be2c396bf1c518fb4"],["archives/2020/10/index.html","f46297571b8b9a090f48fb51d40e0025"],["archives/2020/10/page/2/index.html","aa6e5b3ebb934c3e74ad7038ae711c7f"],["archives/2020/11/index.html","5645d73bea20ca9d150d89fe3873c646"],["archives/2020/11/page/2/index.html","2ee73ecd02206bf86daadf3d1e9f36b4"],["archives/2020/12/index.html","8fe4562ceb6217d68a9f195f6a1f270b"],["archives/2020/index.html","71320d38c398f8c8b83ff45c9c13eed1"],["archives/2020/page/2/index.html","125d15c09dbd738453c91b665ff32803"],["archives/2020/page/3/index.html","7371b6e695da59bf537e09161fe786f4"],["archives/2020/page/4/index.html","35cf903327b5934d8b16cc2f32238b0d"],["archives/2020/page/5/index.html","53cb3a0cb85c15ac7bd7f058a13f5274"],["archives/2020/page/6/index.html","ccd83e73e949d30be9aaca35586a4165"],["archives/2020/page/7/index.html","0751d57437f7338479101e0192a1f5be"],["archives/2020/page/8/index.html","8881ae007663af380c15d598d5af642d"],["archives/2021/01/index.html","47a4b992055e0a481d379bd1eb3e6569"],["archives/2021/index.html","c3b25475b16e890ef8ba083364ecdb93"],["archives/index.html","cf2742a7ea0123b047949480c7658c49"],["archives/page/2/index.html","c4823552a8b1f41938b57bfceb9bb563"],["archives/page/3/index.html","3ca153d5265e8b1de12dea3f09c7b0f3"],["archives/page/4/index.html","0853e80591d598b1a21dd51e74435854"],["archives/page/5/index.html","8c456c3fd9fc71a30385997a46e690a3"],["archives/page/6/index.html","3e488164e5ac50b63d0e5795a9cfd111"],["archives/page/7/index.html","720c413272938c6ef6cb11f1cd0e9a24"],["archives/page/8/index.html","706aec2e9839d8af75c4e53039475a47"],["baidu_verify_code-74acARe7VV.html","e3f2278b79912a3032517bacde56124e"],["categories/ARM汇编/index.html","8eef483d8e0b264d9b8ee6664d515033"],["categories/Android反编译/index.html","611cb969aea95b28483a1fc1b96719bc"],["categories/CVE/index.html","837b634259a3787a5f373f3c0570bc7f"],["categories/JS学习笔记/index.html","a89326b15d16c6691349d2517855933f"],["categories/index.html","fc98a5061726f230da0dd9a45f9290b5"],["categories/x86汇编/index.html","8ca398f628f0be81bb23935daa429eca"],["categories/x86汇编/page/2/index.html","1839644b6b4cb201261296a31bb15d60"],["categories/固件逆向/index.html","127b5e27155803a844b8118da5f698ea"],["categories/智能硬件安全/index.html","96113f44edfc0c504ec3d9b9d6f6c5bf"],["categories/智能设备安全分析/index.html","616615350d47326a3ce91df8549d799e"],["categories/硬件电路构成/index.html","a2322f719aa6b601f5001d93ad95fc8c"],["categories/网络通信协议/index.html","1e7e5c65e614321823ee10f43c931991"],["categories/网络通信协议/page/2/index.html","406c0886b6bcc58dc3260434498b0620"],["categories/网络通信协议/page/3/index.html","d46deab81731f64c9c194eb009109cc6"],["categories/逆向/index.html","f58f32f1d67e6ec833f05dd60190d902"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","31a12d785d88ab477449a924cffc4997"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","2e2d42b2b65f8d9f0ebabf7b714afff6"],["page/2/index.html","31f0be480e32b058fb87602576b85529"],["page/3/index.html","ebf5f6ef665dcd2a0760d2b925d5ca0b"],["page/4/index.html","0e1a78ecebe9840017643a951e34e19a"],["page/5/index.html","90a900045b5315cf6d88e056dd0b6a54"],["page/6/index.html","34e41f5f466e91034e7d1b828a9dd8b0"],["page/7/index.html","27c117f1e899382d5d7149dbc977f368"],["page/8/index.html","4e36b8ea4ad188d4e336b9bcf81be5ea"],["tags/AMQP协议-暂无/index.html","9fedbfb86ebdcaa6c77fad8aa506804f"],["tags/ARM汇编/index.html","43dc153981033755db2c5391007a0705"],["tags/Android反编译/index.html","e75ec0a0d0ca4972f8c5133a13cf41bf"],["tags/BLE协议/index.html","8333ae8f71457dc14c63e9768e217fd7"],["tags/CoAP协议/index.html","f6ce60bb56c1f7398be65e7e5fca5a54"],["tags/JT808协议/index.html","f733d2a543e58cf7f77d2e305e17883c"],["tags/JavaScript/index.html","448816fa47ec78de59898ea26885a53b"],["tags/MQTT协议/index.html","91cb57b2881bca24b091399dbdce70e1"],["tags/NFC协议/index.html","50367638f836008558b93e9d9a3c813f"],["tags/RF协议/index.html","2c31f5f8bf0f9af6e72556fe8b4e380a"],["tags/Wi-Fi协议/index.html","b7428154dfe80281ca8bff1ddf8042f5"],["tags/Wi-Fi协议/page/2/index.html","455a4df76f72b3e9c18a5a7fd6c0cb76"],["tags/ZigBee协议/index.html","c9028dc2612ce697b52c1c5203e40d82"],["tags/index.html","b6e161ad14486225dacb33331e62475e"],["tags/x86汇编/index.html","7194c664701e48af241c478cfbdeecad"],["tags/x86汇编/page/2/index.html","ccd6611dd6df0436931f6fe8fc191b4c"],["tags/固件逆向/index.html","e178834ca3ed6d2c88fc4d2e92fe8aa8"],["tags/智能硬件安全/index.html","757e7ff4ee1fdb3f1570ddff8a4d50d7"],["tags/智能设备安全分析/index.html","fde7920d119f7d1cab878fa5bd4369c8"],["tags/漏洞复现/index.html","470d4bfb3e0a7f558da19f50eb4c95b9"],["tags/硬件电路构成/index.html","4253d8ecfce471918229118a48b0bdfd"],["tags/逆向（基础）/index.html","2de358768db948d45f94a24b9fe6db8a"],["tags/逆向（调试）/index.html","cace39f8b9cc595d5528389059335c72"],["x86汇编学习笔记_0x01/index.html","9c551ca35120ed40f1fab46271b9576c"],["x86汇编学习笔记_0x02/index.html","3eeb2d2df46def6b589f86afecf7b856"],["x86汇编学习笔记_0x03/index.html","b641559d9cda95dfbc0e08bba9fb0ce0"],["x86汇编学习笔记_0x04/index.html","da1b7ebdc5a50d22a2585fd19381cfe5"],["x86汇编学习笔记_0x05/index.html","2a1fc9a60c00a05718d78a2a79b0678d"],["x86汇编学习笔记_0x06/index.html","6f5f555af5b1489bbd950c8c0398b3fc"],["x86汇编学习笔记_0x07/index.html","181c5f1354ed3f2a8698770cbc4122dd"],["x86汇编学习笔记_0x08/index.html","0ab61556ca09b5e0b021a7658a8e3ebc"],["x86汇编学习笔记_0x09/index.html","bf1941c81baf010b9d4e8f55d40a53a2"],["x86汇编学习笔记_0x10/index.html","a84c7942cb269d39c75803ff48c08932"],["x86汇编学习笔记_0x11/index.html","856f522e64813b4b6fe830481b8e403b"],["x86汇编学习笔记_0x12/index.html","204bcde7b87440394673718df578b5e1"],["x86汇编学习笔记_0x13/index.html","0466fbf0c89b8a6e622edf46b0876190"],["固件逆向01/index.html","e07c061b8aa1f08c2ad12e8ae5a86190"],["固件逆向02/index.html","1a0e960ac10ab2f9ccc3b4b3884c46bd"],["智能设备安全分析笔记(0x01)/index.html","df8f75dae7cbff68cba92a1e49eed4bb"],["汇编指令集/index.html","b3848c33652fa3f776da3111ca912900"],["硬件智能安全(0x01)/index.html","6d7f6e67f276cd4cbeb8b324beaf866e"],["硬件智能安全(0x02)/index.html","4ed7664286b3a360f00c465391052000"],["硬件智能安全(0x03)/index.html","b484dea8e88063e2c2827313de4ebc20"],["硬件智能安全(0x04)/index.html","e6756fde0363064c488a9cfe9589d5b4"],["硬件智能安全(0x05)_/index.html","d2359cdbe6d915fdd32f374144266517"],["硬件智能安全(0x06)_/index.html","76ea393c8608728201e2b3eb18ce70d8"],["硬件智能安全(0x07)_/index.html","c4750bbcdbc6e3175da09b9bfe61f663"],["硬件智能安全导航/index.html","6c3aa37af72908ab5b79f5b2e106dae5"],["硬件智能安全（固件番外）_/index.html","f6d78698cf0952f65308c40cedacbece"],["硬件电路构成01/index.html","76e85c672af1e31abee6239a07a6e4c1"],["逆向-基础-笔记_0x01/index.html","3599340e7b98d4ab381497db4ee077d5"],["逆向-调试-笔记_0x01/index.html","3e6024c659255e2bd631d194605a1e5e"],["逆向-调试-笔记_0x02/index.html","b41f3ec5023f35775324ce433732886e"],["逆向-调试-笔记_0x03/index.html","0e4b14f7a5c0862e9192930614b2bbdd"],["逆向-调试-笔记_0x04/index.html","deca797ffc9b201259c27864ed59348c"]];
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








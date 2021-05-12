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

var precacheConfig = [["404.html","5ce01b0bda150e5c17342aa184f912df"],["AMQP协议0_1/index.html","1dabd75970d4a90110c0e2c6f73209a5"],["ARM汇编01/index.html","a9636f57c8e509854c5fbcc8eeed71c6"],["ARM汇编02/index.html","7767dace353adad649bc72ec29ea457a"],["ARM汇编指令集/index.html","10f7ccd7714e6b742e953787aa4d4274"],["Andoird反编译01/index.html","91dae57a958f5056eb2caf21304a14bb"],["BLE协议01/index.html","585b8cc5f95aa281f9ce705786ee17a0"],["BLE协议02/index.html","cc3eaea4e597eae67358b779bcdca062"],["CVE-2019-5418/index.html","23563ec879b242b88cda6c2f6ce9aee5"],["CVE-2019-9766/index.html","3a0f114bc739fca61ba827983a9e764e"],["CoAP协议01/index.html","23f2473cc338cf75e19b8af4f06d35c9"],["JS_0X02/index.html","27c1a5906d76c838660a2e214ca216b0"],["JS_0X03/index.html","ef61506d3f372732b123e50d345bbb1a"],["JS_0X04/index.html","fd07afa0c6a7f121d3a86ff2e8eca708"],["JS_0X05/index.html","aea7c296b3f7be9b0b141bdc38ada0cd"],["JS_0X06/index.html","7617a5ceaafc2d787d68b19841952556"],["JS_0X07/index.html","4d533e208728bf7bbe6abf0e634836a4"],["JS_0X08/index.html","f0197b2b0df1165132574ee9fa48de12"],["JS_0X09/index.html","bb29fcc9d33a75013d1d39a8f9cea799"],["JS_0X10/index.html","a41b151cba13a1d61ca57441b01456e7"],["JS笔记(0X01)/index.html","64676785ba42ad4f44ba1b8528033d87"],["JT808协议01/index.html","8198e88c1773857fa1a76d5d1de11b2c"],["MQTT协议01/index.html","084739adf39ba2a79b7062db65fb71e8"],["NFC协议01/index.html","664c5db3e3241b0414ef5f9bc28dd574"],["NFC协议02/index.html","8bb5a7a30f8df3ff716986470bcdaa6d"],["RF协议01/index.html","29c84df54377dc3f77e5e9065d32c574"],["RF协议02/index.html","3a58d29f606001b0f0719960ad372f21"],["RF协议03/index.html","7e666ba7d5990f8cb35e3a098d0cd9fe"],["Wi-Fi协议01/index.html","2ef7a9775e65b84f139da0011828b1ab"],["Wi-Fi协议02/index.html","5bd10cd61ece4b042c8373e949f7cd15"],["Wi-Fi协议03/index.html","35c6d70b5849b2fd5123960161eb3a40"],["Wi-Fi协议04/index.html","2b0bad4a77869dce5d173c1fea196b8a"],["Wi-Fi协议05/index.html","443d06d9f61115e1ba8cc2f780ba7ce4"],["Wi-Fi协议06/index.html","97c08d862e926ecf9caded0841c3ea09"],["Wi-Fi协议07/index.html","14e59f19805e65af3c7258fa1daf4466"],["Wi-Fi协议08/index.html","c422cc3843be6e2ae5863eb0cf831998"],["Wi-Fi协议09/index.html","1cd7533abfffde75245446c1e7b3e1c7"],["Wi-Fi协议10/index.html","98702bdaaa2edbb6be81332551d1a788"],["Wi-Fi协议11/index.html","99288c0861e4488f4931f958cd9d14f5"],["ZigBee协议01/index.html","91706306eaa14e9416600336a3d090ba"],["ZigBee协议02/index.html","05275cf21327d37d9bf3f90f22f3abac"],["archives/2020/08/index.html","b2dfc30687a7568ec8cd08ebcaf2d8ac"],["archives/2020/09/index.html","841e0da99a21d0551b5168578bc0fb70"],["archives/2020/09/page/2/index.html","1e0e35f4a447c8bae01394ab219925fc"],["archives/2020/09/page/3/index.html","7ddbbcfc47df05ece51f3cf027263eb5"],["archives/2020/10/index.html","32f2af2b5dea912fcda39687f8f4c784"],["archives/2020/10/page/2/index.html","26cbedd68b85e3f20d3074a6c6ecd03e"],["archives/2020/11/index.html","9135a3f623d22d3483d31593fa6f94b9"],["archives/2020/11/page/2/index.html","e602531e819b137ab250d5f10745765f"],["archives/2020/12/index.html","81d57808b29897c643b1c0accb45915a"],["archives/2020/index.html","e29ee838ffbcb74d38472bf3b5b85060"],["archives/2020/page/2/index.html","23530e370b7ac4c217a430b8fdac1835"],["archives/2020/page/3/index.html","05cef243a025f8acf4bef7fd1ac9e302"],["archives/2020/page/4/index.html","5d3e6ee0b08a19fbbcc8f4fcc52cc128"],["archives/2020/page/5/index.html","de05ba655d6351045d4709c8f79f290b"],["archives/2020/page/6/index.html","bacaf4b5ddc5f56012aba6da3f2419e0"],["archives/2020/page/7/index.html","5452528e9571a422b7e620609354f2cd"],["archives/2020/page/8/index.html","cfa3bfede74d2bd130d7634e27ced330"],["archives/2021/01/index.html","d7e0b86da0f6fe8c29e9c93b8ababa1d"],["archives/2021/index.html","fc10dcb9176888dc03863d0185bc3680"],["archives/index.html","42e227faca49a60b423f070b65cb3bcd"],["archives/page/2/index.html","5ce1a0a8c751440cdc7e722509b2754d"],["archives/page/3/index.html","16a85497860198e4cd409ad14cefc304"],["archives/page/4/index.html","af155c2aef30d0a7c1f93521849d35c6"],["archives/page/5/index.html","7c38e1680beea115439962631cd75b71"],["archives/page/6/index.html","3a0e3561a0f3b69efa9344052151a6c9"],["archives/page/7/index.html","b2fc24d6c61d5fbf9741a05772f89d9f"],["archives/page/8/index.html","289c0ee54ad15855e68b485737f369df"],["baidu_verify_code-74acARe7VV.html","e3f2278b79912a3032517bacde56124e"],["categories/ARM汇编/index.html","17e124315466e0995fa6e52c664877ea"],["categories/Android反编译/index.html","98663cb1f9003ec814dee1d14dd15a4c"],["categories/CVE/index.html","7b7a69bf071bf75e9519c83aa30e6cff"],["categories/JS学习笔记/index.html","a1c2d4b66953ae2f60a1f3b95209d627"],["categories/index.html","fc98a5061726f230da0dd9a45f9290b5"],["categories/x86汇编/index.html","684f9f44ed907e6696f89b26c144d9f2"],["categories/x86汇编/page/2/index.html","202a1acf9974e120ae876a959eab71a4"],["categories/固件逆向/index.html","6fb186317a839afe8200355aaa62290b"],["categories/智能硬件安全/index.html","389da78ea50ab1fd7eb95468cdf32da9"],["categories/智能设备安全分析/index.html","6a1172188181abedd2a4b56cbe2f2a2d"],["categories/硬件电路构成/index.html","d33a61c8d7e48658604a9d27cfec2c31"],["categories/网络通信协议/index.html","5864b95f8107f05cf30dc22061d7ba1e"],["categories/网络通信协议/page/2/index.html","e7cb00ae9d81f6946b19d1d164c07b20"],["categories/网络通信协议/page/3/index.html","beb8728dc671b9589bff516aff7d960c"],["categories/逆向/index.html","452e4f0f807dedd399c43b484f4ef38f"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","468aac021718f58678476d5f17700016"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","2e2d42b2b65f8d9f0ebabf7b714afff6"],["page/2/index.html","a0d1d40d44e9a3c5cb1e6d8cb22f5d54"],["page/3/index.html","9db2cc4103396629bded89e7934cf596"],["page/4/index.html","8f9b9afa841948c96e1783538220509a"],["page/5/index.html","6de12726dd5a39fb47fa3f879fc25199"],["page/6/index.html","ac7c2ba8f370f5d55b464bb91b3fe474"],["page/7/index.html","02013e3f19e2ba0984c4563f9b294ac8"],["page/8/index.html","3b41e1186488113dc1165752904b6c86"],["tags/AMQP协议-暂无/index.html","6f8dab78391713bab1384bf4f4c395bd"],["tags/ARM汇编/index.html","ab21e224ad9c6d821ccbaf412e4440cf"],["tags/Android反编译/index.html","6318e9dea37f38f5078425f766c4c9fa"],["tags/BLE协议/index.html","0dbf5742f8ba59909cc3dfaa2aa2d383"],["tags/CoAP协议/index.html","7fd911567cd0f0ff1f01931fc5c3f411"],["tags/JT808协议/index.html","60e08bf22b224e92a93380d304d03b8c"],["tags/JavaScript/index.html","1f1c20a9943da4cf91a9437198338273"],["tags/MQTT协议/index.html","01f7f2e59793373c6e17f872a599bfc4"],["tags/NFC协议/index.html","6bd829b3a28cbbcc35a32fc633a2e418"],["tags/RF协议/index.html","2cabea3c12fe774b20e894daa24873d2"],["tags/Wi-Fi协议/index.html","2a2fb90b89bb011c8d672f6a6e36551c"],["tags/Wi-Fi协议/page/2/index.html","dd512fc86110e65f6586295fd888f307"],["tags/ZigBee协议/index.html","3a9c6ff1545b8ce37dd830222c1deb3e"],["tags/index.html","323c60cb348d5690c992ee3ef531a2ba"],["tags/x86汇编/index.html","2691248d96de93b51f5ba417e6a3cbb7"],["tags/x86汇编/page/2/index.html","ea36e36b3783df3a0cab267e8d25564b"],["tags/固件逆向/index.html","aead1827ab298d8f996ba365cc80c19a"],["tags/智能硬件安全/index.html","266a50f09aa1b274fe1631deb5abc48f"],["tags/智能设备安全分析/index.html","41730329b8900ed468f8dc6e703bb7ef"],["tags/漏洞复现/index.html","5515ea03fefeeda9e87648fef4b65873"],["tags/硬件电路构成/index.html","c70eac60424d12b913b2d8dd132e1ac7"],["tags/逆向（基础）/index.html","c1041b335e30a6c4079250bfc1659d3a"],["tags/逆向（调试）/index.html","9915b7fa30b3ce3659c78017a7d90180"],["x86汇编学习笔记_0x01/index.html","9c551ca35120ed40f1fab46271b9576c"],["x86汇编学习笔记_0x02/index.html","3eeb2d2df46def6b589f86afecf7b856"],["x86汇编学习笔记_0x03/index.html","b641559d9cda95dfbc0e08bba9fb0ce0"],["x86汇编学习笔记_0x04/index.html","da1b7ebdc5a50d22a2585fd19381cfe5"],["x86汇编学习笔记_0x05/index.html","2a1fc9a60c00a05718d78a2a79b0678d"],["x86汇编学习笔记_0x06/index.html","6f5f555af5b1489bbd950c8c0398b3fc"],["x86汇编学习笔记_0x07/index.html","181c5f1354ed3f2a8698770cbc4122dd"],["x86汇编学习笔记_0x08/index.html","0ab61556ca09b5e0b021a7658a8e3ebc"],["x86汇编学习笔记_0x09/index.html","bf1941c81baf010b9d4e8f55d40a53a2"],["x86汇编学习笔记_0x10/index.html","a84c7942cb269d39c75803ff48c08932"],["x86汇编学习笔记_0x11/index.html","856f522e64813b4b6fe830481b8e403b"],["x86汇编学习笔记_0x12/index.html","204bcde7b87440394673718df578b5e1"],["x86汇编学习笔记_0x13/index.html","0466fbf0c89b8a6e622edf46b0876190"],["固件逆向01/index.html","e07c061b8aa1f08c2ad12e8ae5a86190"],["固件逆向02/index.html","1a0e960ac10ab2f9ccc3b4b3884c46bd"],["智能设备安全分析笔记(0x01)/index.html","df8f75dae7cbff68cba92a1e49eed4bb"],["汇编指令集/index.html","b3848c33652fa3f776da3111ca912900"],["硬件智能安全(0x01)/index.html","6d7f6e67f276cd4cbeb8b324beaf866e"],["硬件智能安全(0x02)/index.html","4ed7664286b3a360f00c465391052000"],["硬件智能安全(0x03)/index.html","b484dea8e88063e2c2827313de4ebc20"],["硬件智能安全(0x04)/index.html","e6756fde0363064c488a9cfe9589d5b4"],["硬件智能安全(0x05)_/index.html","d2359cdbe6d915fdd32f374144266517"],["硬件智能安全(0x06)_/index.html","76ea393c8608728201e2b3eb18ce70d8"],["硬件智能安全(0x07)_/index.html","c4750bbcdbc6e3175da09b9bfe61f663"],["硬件智能安全导航/index.html","6c3aa37af72908ab5b79f5b2e106dae5"],["硬件智能安全（固件番外）_/index.html","f6d78698cf0952f65308c40cedacbece"],["硬件电路构成01/index.html","76e85c672af1e31abee6239a07a6e4c1"],["逆向-基础-笔记_0x01/index.html","3599340e7b98d4ab381497db4ee077d5"],["逆向-调试-笔记_0x01/index.html","3e6024c659255e2bd631d194605a1e5e"],["逆向-调试-笔记_0x02/index.html","b41f3ec5023f35775324ce433732886e"],["逆向-调试-笔记_0x03/index.html","0e4b14f7a5c0862e9192930614b2bbdd"],["逆向-调试-笔记_0x04/index.html","deca797ffc9b201259c27864ed59348c"]];
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








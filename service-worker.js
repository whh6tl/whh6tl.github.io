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

var precacheConfig = [["404.html","4e909c671f155105d101b467fb9120c8"],["AMQP协议0_1/index.html","14eef3fda7a08474da54abbd4387355b"],["ARM汇编01/index.html","ab8591922279783f8d4c16fda4602c8f"],["ARM汇编02/index.html","77a8c0e9ec393801f75d22621559b7ca"],["ARM汇编指令集/index.html","e58ed98b52577fca4db52e19ad3ec622"],["Andoird反编译01/index.html","8f8391bbdf8b6e6ad6ea4e7442e77697"],["BLE协议01/index.html","9f4ade91e89cbde7e5a7c0a7244cc288"],["BLE协议02/index.html","205368eec0f22756d26f1982c14c7910"],["CVE-2019-5418/index.html","c0fb93ceba8e876f257b81a380c3e545"],["CVE-2019-9766/index.html","38ebcccd57278c7935e1b51743eb9eec"],["CoAP协议01/index.html","cc22db959853ec24973c1eed2717920c"],["JS_0X02/index.html","7ae896140d24c039349f23adc222c7ee"],["JS_0X03/index.html","999a6138ca17562c8fe16a8a5d7b8d3a"],["JS_0X04/index.html","2020832355d1e6c2b54b636eec4b516f"],["JS_0X05/index.html","bfac1065838d8e2d558aaa4e4255076b"],["JS_0X06/index.html","235d28dc253565d4dd5d60518c97d67d"],["JS_0X07/index.html","c56917297d45dfa537375690b0502fb7"],["JS_0X08/index.html","c6cf57c0f65dd1b21dcc6f1435e46475"],["JS_0X09/index.html","d8d3fca6aabb48c1207f3c3be912bbff"],["JS_0X10/index.html","e99cf04236b2b1b29979a19bfb71b117"],["JS笔记(0X01)/index.html","db167150b30284a2170e72e6b3f6c7a3"],["JT808协议01/index.html","038b7704b785152d51d70a12250cbaea"],["MQTT协议01/index.html","157ac559473371999676e7d96438ec1d"],["NFC协议01/index.html","890c1738f047b2594b60bfacca209835"],["NFC协议02/index.html","b005d51517b1fbb17e47ca141f37d21a"],["RF协议01/index.html","51cd76bd9f7acf51fd8b12b74fcb2431"],["RF协议02/index.html","bf69ae1e6bcfae2c485ac775c6d67e5e"],["RF协议03/index.html","001bffbf6e74e67dd627019861a398a2"],["Wi-Fi协议01/index.html","6823065329b3f67455d037f74a0630e6"],["Wi-Fi协议02/index.html","2080dec94d7d99926f48ce403108a6ab"],["Wi-Fi协议03/index.html","d6dce261341dd989c98668c9a436305b"],["Wi-Fi协议04/index.html","d525deee35cd4bbe92ceeb0512d1e81a"],["Wi-Fi协议05/index.html","bc414bbefbd6a9dc84293d2037a89de6"],["Wi-Fi协议06/index.html","d9fe14f98552755ffb98c3dd73c9ce0b"],["Wi-Fi协议07/index.html","78272bfa45d5ce5f6ea5e6016ba8a1e5"],["Wi-Fi协议08/index.html","6348597a74f3db8ce7364f6794fe2abf"],["Wi-Fi协议09/index.html","6cc85178a300e07845870e9a5d92f54b"],["Wi-Fi协议10/index.html","0196e8db6c809912b6472d88e2769dae"],["Wi-Fi协议11/index.html","3a88d42f5f1d1de2fc393a6e33b9d3c4"],["ZigBee协议01/index.html","f52a61d478c32e61ee868fbba2000aba"],["ZigBee协议02/index.html","5b7738d0646d9c60117b01fbaf9e0a87"],["archives/2020/08/index.html","8a05846d8292c95fc53d5df7e23a665c"],["archives/2020/09/index.html","ed6897f8879a95eb13768587ab48b923"],["archives/2020/09/page/2/index.html","868e478dbc5df36bf0db4139896ab055"],["archives/2020/09/page/3/index.html","ebb4e0749062ada8877a68943762cca8"],["archives/2020/10/index.html","366e49305a5c6d998820baf21183a85f"],["archives/2020/10/page/2/index.html","5e96f08f0a1743119c596a9bfaa41a9f"],["archives/2020/11/index.html","e8133292308f787ce2932c01fc45691e"],["archives/2020/11/page/2/index.html","4ea08b40e1df2131330a7cad0e57687f"],["archives/2020/12/index.html","5a624bffcafde8896cecb6ed1f26a5a3"],["archives/2020/index.html","f00650d086b0e897756d57b622c323d1"],["archives/2020/page/2/index.html","8e93cdc4b34d612738835638f298aa0d"],["archives/2020/page/3/index.html","73c07c4785d9a719bc9980d705c7f5b1"],["archives/2020/page/4/index.html","fcfeeda60df9e3c4637e599b3865903d"],["archives/2020/page/5/index.html","675c279f83452d9b00fa56f0bdac5d59"],["archives/2020/page/6/index.html","d155afc78816fd9f186c8735897ab084"],["archives/2020/page/7/index.html","a483e95a0c5a23f93d0c21fde99a96ca"],["archives/2020/page/8/index.html","96c248f37b1199eb75ea219717ffbfaa"],["archives/2021/01/index.html","e4190c8f590dfd42d72dbe3cb7505559"],["archives/2021/index.html","b506c307e09df8fd7190630a1c4175db"],["archives/index.html","f3ae8ec1464090e0c5b4eb075756453f"],["archives/page/2/index.html","6ad3dec991294a70df78bf9095d4249a"],["archives/page/3/index.html","e1e6d2c1bbd0590bdb94ffcd4f856d15"],["archives/page/4/index.html","83088d71244a411e340d63928a34e3fb"],["archives/page/5/index.html","0e577dc5eb77a22b2b5ee46ea9664637"],["archives/page/6/index.html","b9eec3f8513a140d8758ae72ed952a49"],["archives/page/7/index.html","22f478262621c1501371a065ade155c6"],["archives/page/8/index.html","833afa5e1eaa8f535fc5b6dc14358979"],["baidu_verify_code-74acARe7VV.html","e3f2278b79912a3032517bacde56124e"],["categories/ARM汇编/index.html","d439164c6fe177ba9d11e6ba0fc4b85b"],["categories/Android反编译/index.html","3f79f4558697762ad3f2c6e52d907a97"],["categories/CVE/index.html","f043ee74b59329f5bdb67c20bad3d736"],["categories/JS学习笔记/index.html","f7bb5390b032d4cc0e329447db00df03"],["categories/index.html","4953c8587d326d7d312460a1363bf5be"],["categories/x86汇编/index.html","22d9b9d3c2281a5846ab1e63e3933e64"],["categories/x86汇编/page/2/index.html","3f05edbaed8791e746fedc07c6a02567"],["categories/固件逆向/index.html","f762078bbc60445f78b751ab4e494f9b"],["categories/智能硬件安全/index.html","2285ca1051106d3ad25e3ab785dc4c0d"],["categories/智能设备安全分析/index.html","c7eef4aaf3433d81dc0e86fdaac0cabe"],["categories/硬件电路构成/index.html","b941c619173c410077aec7f09328df18"],["categories/网络通信协议/index.html","0e6c031b37287114bac0f7ea415b37db"],["categories/网络通信协议/page/2/index.html","0d490d8a96da4f2f2d6a812ae55465c4"],["categories/网络通信协议/page/3/index.html","4269d33b47246abbd00f5fc71a3a2c97"],["categories/逆向/index.html","0fcdd6de38ee594e7dc4cb4878a7b1db"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","2c790b67b30465729abdf8673bf0dd76"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","17d3af35cf52ee1238b683b192107fe1"],["page/2/index.html","17b5a9114f23903fc98a023e26e13d52"],["page/3/index.html","7cf9a5bd0a3556dbbf63cb64c70c85f2"],["page/4/index.html","08460cb69a02e83d85b8bcf467a46cbb"],["page/5/index.html","547015fd3d7843fe3fdc29a101ecba77"],["page/6/index.html","85bbf5d5d1fabfee93a05d1bc6a86001"],["page/7/index.html","64808818d58c194df87e8bd0c0b5c5d5"],["page/8/index.html","d42f0b4cdb6c83f32504fad9eb700121"],["tags/AMQP协议-暂无/index.html","9c4853f698db26d79de2aa553332baad"],["tags/ARM汇编/index.html","d22d2c1121baa8f050881b6d3552c4f4"],["tags/Android反编译/index.html","433a6cd0619c09ab969bd72859add098"],["tags/BLE协议/index.html","f7310b3953501ee6ab07dcbc13cb84eb"],["tags/CoAP协议/index.html","436234089466ea9638b05b337046c006"],["tags/JT808协议/index.html","85d0ee4f879bbd7154502063de38e889"],["tags/JavaScript/index.html","4924062ce31250909669e25ab4bbffff"],["tags/MQTT协议/index.html","5adc71c771aa2a790922febcf44cdce2"],["tags/NFC协议/index.html","a4f706386f638c0e6f49b617053f56eb"],["tags/RF协议/index.html","30fd5d7689ee52537812f055555fd055"],["tags/Wi-Fi协议/index.html","76b51eb5356e8fc482223e488830a1fa"],["tags/Wi-Fi协议/page/2/index.html","42af3c9bd455362eab9e14553f4f3ee6"],["tags/ZigBee协议/index.html","42e0a9386c9d4723275f22dc8f8de0de"],["tags/index.html","76342745cd3ecf6622cad74b151e2a86"],["tags/x86汇编/index.html","b24f71954af6e326f2feabbcdbcf50f7"],["tags/x86汇编/page/2/index.html","ae9cfdd035a6b7f9dfc5b54784811172"],["tags/固件逆向/index.html","519d5a25600002e9f090ae40c53480ac"],["tags/智能硬件安全/index.html","cc57edf8427b883393bdf5a4ebab90b7"],["tags/智能设备安全分析/index.html","32b67ae56c2a98ae79744339f87f2d84"],["tags/漏洞复现/index.html","07863b8b704f67d65110ab358b16fd84"],["tags/硬件电路构成/index.html","61ccaa27f76ef70b250f236393a94630"],["tags/逆向（基础）/index.html","230eb96edf7fb42afbfef72a26f71b18"],["tags/逆向（调试）/index.html","f69bf79aef1186931c1fcccf43723990"],["x86汇编学习笔记_0x01/index.html","991fd0e1a9c0a7e0cfb6ca3386f8f9a0"],["x86汇编学习笔记_0x02/index.html","b0145b0aad6d2530d43ff0db51a6924c"],["x86汇编学习笔记_0x03/index.html","8da6ca292d51f68c1a5d00fcf0db07db"],["x86汇编学习笔记_0x04/index.html","14996712718de8f633f8752761df4ce1"],["x86汇编学习笔记_0x05/index.html","1cbb17d670bb722d33b0c273d5670212"],["x86汇编学习笔记_0x06/index.html","1977e4759d01526a7879b3f8e8095751"],["x86汇编学习笔记_0x07/index.html","046ba534b3153820d2099488d029e25f"],["x86汇编学习笔记_0x08/index.html","61fb8ce80c79edfe089b90d04fa55510"],["x86汇编学习笔记_0x09/index.html","e71763e7731aeb03e436b6913e8f3e22"],["x86汇编学习笔记_0x10/index.html","0e10205389cbd071fd309bb2bc8c28be"],["x86汇编学习笔记_0x11/index.html","bd7ee578a020ff92ed02c16958854098"],["x86汇编学习笔记_0x12/index.html","2783e48aa35c96edc32c87eea20539a3"],["x86汇编学习笔记_0x13/index.html","bbb5ea118b8022d8128599f905e9f1d8"],["固件逆向01/index.html","071b5bd247a104b318255e284b38ecf7"],["固件逆向02/index.html","32a1b9a17c6b6d64a1bb02bfba0af508"],["智能设备安全分析笔记(0x01)/index.html","02aa13061a459d19c94324bd5632a1a9"],["汇编指令集/index.html","4afb43882446f40d88555cad7f9b44fe"],["硬件智能安全(0x01)/index.html","0fd1d65ac60f26408a85d5787b70a6d2"],["硬件智能安全(0x02)/index.html","d3619d518f74a1367c51117dce82ce04"],["硬件智能安全(0x03)/index.html","0797493a36051ca79a904db78cfa8429"],["硬件智能安全(0x04)/index.html","7d8c9a5217edeeda9bf701487b765cf5"],["硬件智能安全(0x05)_/index.html","a1c9b9ec2e6f12a6386be1ec2dd700c2"],["硬件智能安全(0x06)_/index.html","1361cf2db53aaa23e68e1d88407a91ef"],["硬件智能安全(0x07)_/index.html","3eab86c68f54a37c291e5767080c3327"],["硬件智能安全导航/index.html","608d2fc46ca69f4ef8d52a7b32bac0c0"],["硬件智能安全（固件番外）_/index.html","a4f208ee91eccd86cdeeac86d5315b3f"],["硬件电路构成01/index.html","a24c7f92154ece09bd5a48d3d75fbd1e"],["逆向-基础-笔记_0x01/index.html","98ead2a0d5c757920b002c009d403c92"],["逆向-调试-笔记_0x01/index.html","683843900c61deba1a1f932de5fc3c02"],["逆向-调试-笔记_0x02/index.html","d192822263a602a3d02c4ad658057b27"],["逆向-调试-笔记_0x03/index.html","e36b981909e448cf7db6de65b4291e4a"],["逆向-调试-笔记_0x04/index.html","63aef1af2720fcea0e8183078f12e945"]];
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








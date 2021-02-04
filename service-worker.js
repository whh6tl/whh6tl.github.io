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

var precacheConfig = [["404.html","8acb0d80be11fca79b8ff6097adbb56e"],["AMQP协议0_1/index.html","10c843ccc9168dcd39f8e4aa8f11aa22"],["ARM汇编01/index.html","d0942b0227b8c74150282ef4618722ff"],["ARM汇编02/index.html","0e7fbe4efb57a2708971be54360dae8e"],["ARM汇编指令集/index.html","5abd4ad0b6fdb85018fe429344757c08"],["Andoird反编译01/index.html","63f6522370684c28b347541183c993a9"],["BLE协议01/index.html","c8b479867b3da0e6333722e55b60cc20"],["BLE协议02/index.html","708218feaf00b7a3bbf95fb78bf7aac2"],["CVE-2019-5418/index.html","c1f214ed29bf7706353d02eb8115fd99"],["CVE-2019-9766/index.html","c8cd5a29664235eb4036ee60c94899c6"],["CoAP协议01/index.html","e1c27922fd47feb7f88778ac0844ecae"],["JS_0X02/index.html","0d039e22694ac0ffdba016ef9a07e6d9"],["JS_0X03/index.html","d750810b3b701807964ae5adb0fd9c68"],["JS_0X04/index.html","079219133479e681421649daf85da2d0"],["JS_0X05/index.html","1fadbef9057aced7915a8acd1fc7d4f9"],["JS_0X06/index.html","e5cfaca863900c57c1c1d5efc96b8313"],["JS_0X07/index.html","5cb9cdd59b005591aec4da760feeeecf"],["JS_0X08/index.html","71960b06f62bce7ab2eb457f0c5b719f"],["JS_0X09/index.html","15da8c995aa0f664ff2b6b6ff1c50644"],["JS_0X10/index.html","36279d5039a665e13006631db7241a13"],["JS笔记(0X01)/index.html","179e88d687fdd6b13bc7a752c98b93ab"],["JT808协议01/index.html","1490d286cdef6c99f1dbc509666146e9"],["MQTT协议01/index.html","2c0720d5bb0a5b5a18f8543e91cddf59"],["NFC协议01/index.html","90a66412507989bdafa8e1f01768afe1"],["NFC协议02/index.html","ea24d8f1cabda570e2e4f42028f1d6d6"],["RF协议01/index.html","4a2440e9127d8c1d4c7f11b7a3f923e2"],["RF协议02/index.html","f5e9b3072bfa97f6835f15bdca4f060a"],["RF协议03/index.html","e7801fc5ae079b972406db8d0254b7b3"],["Wi-Fi协议01/index.html","a4355efb3d3d275f52091b646e2c7a44"],["Wi-Fi协议02/index.html","e7e6275a2557bc445051b2a16288af96"],["Wi-Fi协议03/index.html","9151ed0bad13a1581c53fbd159a0f32f"],["Wi-Fi协议04/index.html","182b6e90b3c4fda5f19d7a8a435f55eb"],["Wi-Fi协议05/index.html","5e0658b7068ec30ca997a9867eadd1c5"],["Wi-Fi协议06/index.html","f018e898ef944d0bec83218f5f3cad63"],["Wi-Fi协议07/index.html","c36eb94c92efe380f339cc267901986a"],["Wi-Fi协议08/index.html","381e573a75a29595842f36145eeb357d"],["Wi-Fi协议09/index.html","e84d7bfa9fe9e66e778169336609eca6"],["Wi-Fi协议10/index.html","32b4792a69ac71c24c3f038778f8b37b"],["Wi-Fi协议11/index.html","01ff438a73ff9a21583c39b29eaf1363"],["ZigBee协议01/index.html","a783178ce8c07c6b2aba752009980f40"],["ZigBee协议02/index.html","d833c7b5ff30771c2d8941308b4da315"],["archives/2020/08/index.html","7e324caed27ff30ea0f89704b540bbb9"],["archives/2020/09/index.html","96ea377ff7641f5d68bc2f9eaa18540e"],["archives/2020/09/page/2/index.html","010444c6f87bc3bd0e178514b285edda"],["archives/2020/09/page/3/index.html","f9ae43859c03409761f455a7cc86e022"],["archives/2020/10/index.html","e1a795a91efbfdd07571bbe63a1a8d9e"],["archives/2020/10/page/2/index.html","327a1f15ab16cf17981ed87fd5393439"],["archives/2020/11/index.html","96199914506396e4ceed39f700f9971d"],["archives/2020/11/page/2/index.html","cd99d132d29609caf64cf8d389e847cb"],["archives/2020/12/index.html","49b78efc90e9cbfcd04ba54d12f01e07"],["archives/2020/index.html","ad6ccfaf101226fcaf2c128f9886f672"],["archives/2020/page/2/index.html","1d8d5f35c1192d6815467d81e1f2514c"],["archives/2020/page/3/index.html","4cd6a3d139d1e4bc4d52bda0854857f6"],["archives/2020/page/4/index.html","2bfef04479f424c1291ba3a0958070e9"],["archives/2020/page/5/index.html","b27d6e6d70d7b488e11339966a96eefb"],["archives/2020/page/6/index.html","d257e77447640a4e27139be4f12aec25"],["archives/2020/page/7/index.html","dbb167cbc0ec663fa4fd6a4dd1045913"],["archives/2020/page/8/index.html","76e6dda2009daec5d94bed1afaf31d9c"],["archives/2021/01/index.html","7175de6f9e3f0c3f2bc91d6091c960af"],["archives/2021/index.html","9c648683367fd56bb929ba7293cf04fc"],["archives/index.html","cbdaa0c8b6ae56fa01b0c1d83944854b"],["archives/page/2/index.html","b18e8d81f8f7d78085b7300685dd5603"],["archives/page/3/index.html","4b3bfc45673fc97b77dd275ee759853b"],["archives/page/4/index.html","d0e79dec7299d0364d8473824c103609"],["archives/page/5/index.html","bff326a655a18089dccb22c88679a0ee"],["archives/page/6/index.html","d4aa828440d32ca87d0f6c7882bfac5f"],["archives/page/7/index.html","0d28dd8040ef3ba8d1a57336cb2b41c2"],["archives/page/8/index.html","228ce97bfda8ba1ee4c792f30181f482"],["baidu_verify_code-74acARe7VV.html","e3f2278b79912a3032517bacde56124e"],["categories/ARM汇编/index.html","e4fd7d6941b32c35f855fbf845857333"],["categories/Android反编译/index.html","b1aa9618885bc48ee2b045643165af64"],["categories/CVE/index.html","bcfd6397a345820a0f5f387e6bc2fdeb"],["categories/JS学习笔记/index.html","8fa76c4a6a97f42e75081490930e47f4"],["categories/index.html","c77dec01e0f34b54ae4775229e6d0089"],["categories/x86汇编/index.html","63fb24a737aaf77a2a4fa3e2b31b3355"],["categories/x86汇编/page/2/index.html","fba024ca95128f0bfe20c53ddcb0bdce"],["categories/固件逆向/index.html","a6603ea35bd7b503214ebe229719da12"],["categories/智能硬件安全/index.html","f632347299f14be1e5b698ef3338159c"],["categories/智能设备安全分析/index.html","8afb8efcb05958735e3e9d2fed7728b5"],["categories/硬件电路构成/index.html","191f96c1dd6e7a905cd4672305ba5417"],["categories/网络通信协议/index.html","e978ed8fc04d7858f905a52d3c8df9a2"],["categories/网络通信协议/page/2/index.html","ffab0cd76aa15ffc124016ba6f248b99"],["categories/网络通信协议/page/3/index.html","2bd52852801c04b5eab3b8e561b79954"],["categories/逆向/index.html","a0f6e13e69b170fc11bb3d54b6db7ded"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","c34bbe0fdcf0dc98ba9e83dd16632363"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","496afe127e94458601c6626507223bc6"],["page/2/index.html","ba0e49a8d5e8959dc848a57fa3ba39dd"],["page/3/index.html","627b9f50da187c62ce12ee2c0224b853"],["page/4/index.html","7a25e198eb67bdd9f1311cc6da401b61"],["page/5/index.html","2258d74bab4c8c2c5492ce0ce240ca45"],["page/6/index.html","b067a5c47271a1a14b86c6246c49d77d"],["page/7/index.html","dc5fdee12b666e3c7600ae95e8b5b0a0"],["page/8/index.html","5212ac8632391acf18f5d4629a3a9f87"],["tags/AMQP协议-暂无/index.html","5afe5c7fb1f55acd2869969e62e95cef"],["tags/ARM汇编/index.html","faed4bc03ca96b43cf9ee5d5293d8617"],["tags/Android反编译/index.html","0e4a4ece7b9de4c63ee13db8cdea7890"],["tags/BLE协议/index.html","4d5cbcaa9bae149439b1ea5818af12dd"],["tags/CoAP协议/index.html","9b00aabdcab0e3544059bc31cf5f1eb8"],["tags/JT808协议/index.html","2d7fa3483a0d024cfb01f864c15a7f5c"],["tags/JavaScript/index.html","4935f75cdc54927bbf2e2f4b4deac4c6"],["tags/MQTT协议/index.html","7abbd16dbc933c08cef889e786ba1ac1"],["tags/NFC协议/index.html","22f059bff8ced326ceeaa47d08a59143"],["tags/RF协议/index.html","1f97045fb0260f8cd9e04d2a036ab60a"],["tags/Wi-Fi协议/index.html","3acff18751313b5da6cae04fc71054d2"],["tags/Wi-Fi协议/page/2/index.html","462d680aa252a10dbff71c4da62b9c8d"],["tags/ZigBee协议/index.html","8dc4f7023cb59a08cab124f313e0b0f3"],["tags/index.html","60d9494bb4917747232632cdda5f1db7"],["tags/x86汇编/index.html","ca87031d0bd67f71b33c4b1eaf4a8bd9"],["tags/x86汇编/page/2/index.html","ef83d519ff5d115808ab368b2d4fa293"],["tags/固件逆向/index.html","f12946d058decf99d3a86a37a24cf048"],["tags/智能硬件安全/index.html","18ee53ae3f4074cdc34d71a957b96aee"],["tags/智能设备安全分析/index.html","88b811e8c03e716795ed307c2fea4d78"],["tags/漏洞复现/index.html","5d6bfd093ef977cd3c68e861bc6b250e"],["tags/硬件电路构成/index.html","9ca6bb02af257c87724e91df543719ab"],["tags/逆向（基础）/index.html","e89581f3452abe32191761f9dd114114"],["tags/逆向（调试）/index.html","dfc8f968b967b38798abadbf4e42746e"],["x86汇编学习笔记_0x01/index.html","4edea7c4c3e5fba3e28e3962549daee9"],["x86汇编学习笔记_0x02/index.html","daf96c32b5136673aa87a023ee46c37c"],["x86汇编学习笔记_0x03/index.html","5d6ac249d229f8e724e79dd4a07a8f38"],["x86汇编学习笔记_0x04/index.html","7c6996490ff37de94e35f048954f61fa"],["x86汇编学习笔记_0x05/index.html","7ed18a06e8552879dc1553f8965af266"],["x86汇编学习笔记_0x06/index.html","bc7e88dd64dfbf5b70b3c2d91ea2102b"],["x86汇编学习笔记_0x07/index.html","b151b4aa9ec7a66fe31574b83cd8aade"],["x86汇编学习笔记_0x08/index.html","7c6992ff774e9e39deba7575b87d1e4e"],["x86汇编学习笔记_0x09/index.html","17f9da3d4186f6e4092ed7570c224f61"],["x86汇编学习笔记_0x10/index.html","a62962dcc072bab07cae836756f1553a"],["x86汇编学习笔记_0x11/index.html","f37b3639c90bf4e581f99e34dea6a920"],["x86汇编学习笔记_0x12/index.html","34e20902106ad291a22e96514e9a4d14"],["x86汇编学习笔记_0x13/index.html","54e89689d1e167e655029b358bd1f1d1"],["固件逆向01/index.html","068c16d8037809249855883d0125aa6a"],["固件逆向02/index.html","16059a281f54a5d5a45e70e7d0a58d32"],["智能设备安全分析笔记(0x01)/index.html","bc87c2955487c7a49dea7b4b3c952b74"],["汇编指令集/index.html","ea41581249b454e75715020a494e96f1"],["硬件智能安全(0x01)/index.html","6755050522011702754828030ae3ff24"],["硬件智能安全(0x02)/index.html","3d02cd0faf711cbdb0e63921e07de0e1"],["硬件智能安全(0x03)/index.html","3bad04852627fd7f9177d7527ae05b1d"],["硬件智能安全(0x04)/index.html","20e8231c4ff005f17be1be71cd4059cd"],["硬件智能安全(0x05)_/index.html","ecf8d5293bfa489f121c323c92e4d3dc"],["硬件智能安全(0x06)_/index.html","c5260b9d03f0a6a24392a7c48f024041"],["硬件智能安全(0x07)_/index.html","c4f2ad5c49739edb063b3ae0be4a6b59"],["硬件智能安全导航/index.html","d0ffeb7c1f5fd1f1dd1048def92e1c03"],["硬件智能安全（固件番外）_/index.html","2eea328e3a773e781461198cc357d61f"],["硬件电路构成01/index.html","afbebd907ae652095f45341b2d5cd167"],["逆向-基础-笔记_0x01/index.html","b7687376f7365463d77954616a7e7e12"],["逆向-调试-笔记_0x01/index.html","e539d0ee0cff07faa7cbc38f779f6389"],["逆向-调试-笔记_0x02/index.html","a14be12006a34964249d322c59111013"],["逆向-调试-笔记_0x03/index.html","e2bb67811400d5301acc460bf0d5f54b"],["逆向-调试-笔记_0x04/index.html","39cc1ddff9033cffca8a20f85f63c001"]];
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








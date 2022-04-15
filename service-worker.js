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

var precacheConfig = [["404.html","d4212e8b73c9f87ad9b10bb591b61528"],["AMQP协议0_1/index.html","d612014187baef926ecba73673926cf5"],["ARM汇编01/index.html","32aa3b6f7ab5056d196ca5275bc8ea91"],["ARM汇编02/index.html","ac12d340de5dfb222deccca37dc50872"],["ARM汇编指令集/index.html","ddedbfff91157ad194039d9d74cc352f"],["Andoird反编译01/index.html","b632e5b0266325650685113e315a1dc5"],["BLE协议01/index.html","62ca31f462d0f0ac623bfe99c02732c7"],["BLE协议02/index.html","419d9706df898d47c02deeecf68cde56"],["CVE-2019-5418/index.html","73d5dd4846676b1e80ee97e5b48b452b"],["CVE-2019-9766/index.html","af06347d588cf47eaf222dc9866ac074"],["CoAP协议01/index.html","5c133089a4c21dc248a10fa427bc8cd2"],["JS_0X02/index.html","a582945e091931cea9e05ac58127ec25"],["JS_0X03/index.html","2acee8ec59f031123858e84e6e66a59b"],["JS_0X04/index.html","f59b7edd78bea10adf636e4a1b0f8de9"],["JS_0X05/index.html","9325b7552dbbde60a140bd91cd6c5d71"],["JS_0X06/index.html","6fa9dd39da22cff01509f079a7c5688e"],["JS_0X07/index.html","f32fd1934cf72a19682fc459b2636f89"],["JS_0X08/index.html","d372eab762d446f11aae2b6d6264664b"],["JS_0X09/index.html","cf07d64b547a3d35c5d24e55e0018032"],["JS_0X10/index.html","97eb5c24ea5ffd9043dba8b8192e5c01"],["JS笔记(0X01)/index.html","13e3c82e0a3464971d8c936506fa5bbc"],["JT808协议01/index.html","bc0beb9a8a66b44ed98f670a03431862"],["MQTT协议01/index.html","cd9c8c8ebd673ef71a544b4b3efe2181"],["NFC协议01/index.html","517045b8e1fdb36dce53f40d06b72aff"],["NFC协议02/index.html","d8ae35043573f099f39f2f3a475805b1"],["RF协议01/index.html","a4cdf37ca090097df970a2c21182ff20"],["RF协议02/index.html","f0df1209c11c57a347b1e5a1e626c153"],["RF协议03/index.html","0fa57ce25d5ab37af3436cd60e2690a4"],["Wi-Fi协议01/index.html","cc8d57d4bbb78055b941fd437be3807f"],["Wi-Fi协议02/index.html","54fac9cd1d97c93e46b3d3e2c16bb2cd"],["Wi-Fi协议03/index.html","81edff11ea44a0499c4fa91acaee8453"],["Wi-Fi协议04/index.html","a9a0f9e6a6901462b7ab2b0afd74a6fc"],["Wi-Fi协议05/index.html","62ab4fa5bb6230176f3e4468f8b27b83"],["Wi-Fi协议06/index.html","bc4ef45b5bc1bcb54a4d4b6e66f2addd"],["Wi-Fi协议07/index.html","7fa38cf24d24b7bf20f93ca02ad5302c"],["Wi-Fi协议08/index.html","b2dbbdc2a8c11fbd7f6a917e62356fff"],["Wi-Fi协议09/index.html","dc215ae2e5e211ad2892665d245b77f7"],["Wi-Fi协议10/index.html","de04d0b7c6564d677bbcc82dff65b05f"],["Wi-Fi协议11/index.html","7276faff787f738d6be450fad3dd2c02"],["ZigBee协议01/index.html","1f55ffaeff66abe2fdd8ef7092a1ee47"],["ZigBee协议02/index.html","d706f1b0859ed6140910eba322cdf341"],["archives/2020/08/index.html","c64af7fa935b57245cba514794c23346"],["archives/2020/09/index.html","083f138366302b764de53d8581dfb992"],["archives/2020/09/page/2/index.html","5675a64d179b16d8a4cb14a3afe7a7a7"],["archives/2020/09/page/3/index.html","ac51f5bd7de1e64958dc60aba268c386"],["archives/2020/10/index.html","d5c72321933863c0c8452aa74c0ceffe"],["archives/2020/10/page/2/index.html","4a1f4eccd572007f5733112377091d9c"],["archives/2020/11/index.html","c88eac1468a09b57dca3b08bb81cd8a4"],["archives/2020/11/page/2/index.html","0a867b54ebe6a2a6ef5ecd53da6e0cc6"],["archives/2020/12/index.html","5823392dcbc5ef690e5977c7f95f954a"],["archives/2020/index.html","a7637edf90b05488194798bd2f852103"],["archives/2020/page/2/index.html","90ae32d0c7d6a189d61876e9cf5ae2be"],["archives/2020/page/3/index.html","37d8efd5e3c6b00bb068778d8f8d3db2"],["archives/2020/page/4/index.html","0f5faf9c50f1f939493242c7a27947e5"],["archives/2020/page/5/index.html","e328e5f3b92a6f2f0585d5952092bc0d"],["archives/2020/page/6/index.html","f60aaa7f0f8677dec820a3faf7ebd7a7"],["archives/2020/page/7/index.html","4ba458409ef35fdebd632bc02f387a42"],["archives/2020/page/8/index.html","b328e7b790cf50d36d96024b421f0e17"],["archives/2021/01/index.html","9bc010df3ad2f9ddca2681d48289cf2f"],["archives/2021/09/index.html","d484847ac60a660d09341eda921c36fc"],["archives/2021/index.html","94f624d66309953dc15581cb16357d4f"],["archives/index.html","b03e1258a4427a45d101dcd52a4821af"],["archives/page/2/index.html","9138e6488a2ab94808c09f7c18011a76"],["archives/page/3/index.html","af69c3d34bc94da8b7c462005717e89b"],["archives/page/4/index.html","efa31d87ef1a86e9a52d8dddbf6d9c77"],["archives/page/5/index.html","5dd8c26b1b61fe0b42fbd89a383911ef"],["archives/page/6/index.html","3ad1370da94a5562af29fb3b609911ed"],["archives/page/7/index.html","8b4b07bb99abdfbcf41c6f26b50860fa"],["archives/page/8/index.html","ca30011f19c1eb4e97e3d30cfd6fb91e"],["baidu_verify_code-74acARe7VV.html","e3f2278b79912a3032517bacde56124e"],["categories/ARM汇编/index.html","502f986e3fed7d2f5c96fa7147bde138"],["categories/Android反编译/index.html","b984833e64d8dd2b0894198429be5d8f"],["categories/CVE/index.html","288a60aece046852d11f08ec30612ccf"],["categories/JS学习笔记/index.html","4bbb5756832987e87c5db694c2e89528"],["categories/index.html","ee5ef8fd5e67c3bcd7a5725821a19480"],["categories/x86汇编/index.html","be61e1377115957b08bb21247c1018ca"],["categories/x86汇编/page/2/index.html","3b1747b335e09e8f74179e9d04abbd79"],["categories/固件逆向/index.html","9d1ec76f938889c26f1ac0c30fd9e4ab"],["categories/技术分享/index.html","d8e298d7f585de782ed9ad78743be749"],["categories/挑战项目/index.html","21db3331b7b40ff6d7d2016442f552f2"],["categories/智能硬件安全/index.html","20b7af6afd26a0b6288da1b60d5bdfa7"],["categories/智能设备安全分析/index.html","4d512b3be22abccde851a5ef5336f49d"],["categories/硬件电路构成/index.html","84fb379d1f5dc71d26454097539fdf6b"],["categories/网络通信协议/index.html","aee34d2155d1095b52ccf1fbe422b173"],["categories/网络通信协议/page/2/index.html","dd5bcd87a94a689971c4059ade5c9bf6"],["categories/网络通信协议/page/3/index.html","b244a4997ada3108570503612dfc1d17"],["categories/逆向/index.html","32c0079e94f87340442a0c558c187520"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","32df56b78669c812ea6eead12bde29ab"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","74ebcc337a5385f6c657a73695700698"],["page/2/index.html","694c3f051b50b3d31666107643d99690"],["page/3/index.html","f1b129be480072ffd07005df7e6a22df"],["page/4/index.html","30818234c78373d5a827773cd688e3d8"],["page/5/index.html","8eadb60bde7149136c6a1381966931c5"],["page/6/index.html","5ed8498443a9581f28b49e2a8a691a75"],["page/7/index.html","a33429f62c22812da08b239a14838eb1"],["page/8/index.html","57a8a22b7f19c81a08c3e52392b8901c"],["sec_share/index.html","14f5437022abf167c783776e053e6fcb"],["tags/AMQP协议-暂无/index.html","dfd287007e568bd69437ebfcb20bd4f1"],["tags/ARM汇编/index.html","dfb749472e2fd44807840f71d53f2f72"],["tags/Android反编译/index.html","bf59e3d2e35f3eb49c4635fc9e0da3fb"],["tags/BLE协议/index.html","4536d099c52ba19f92e73945dbb11c6f"],["tags/CoAP协议/index.html","cfa68ebcf9449d471cd977f48727331b"],["tags/JT808协议/index.html","887ac0a6fc5582d8b2f8745dd1a4a6ea"],["tags/JavaScript/index.html","af1defcbf40ddab7a2022dc9d2d2240b"],["tags/MQTT协议/index.html","4adfc5f399dd4b0b983560fc536c4fb8"],["tags/NFC协议/index.html","d42aa6db74fc9c6a726d1dbae0b0babe"],["tags/RF协议/index.html","b9045d0e13f17810db6156a050782957"],["tags/Wi-Fi协议/index.html","45fc05700a9a4fb38e759d1e0a341d40"],["tags/Wi-Fi协议/page/2/index.html","c0824231e997dcffa936fd58be9c44a8"],["tags/ZigBee协议/index.html","868fc9e6b0cc260983f2da1bd108c447"],["tags/index.html","3d5c2f72bde69382b775749331db534c"],["tags/x86汇编/index.html","7ef7f1d518f6a0c9fbbc48d90082ffc8"],["tags/x86汇编/page/2/index.html","3bcfe658fe715b6218d1131acc4a8dd8"],["tags/固件逆向/index.html","f39e774c6d58d0b581f399035462c83d"],["tags/技术分享/index.html","5d778ac91ca6a0a1902c497c8fa69365"],["tags/挑战项目/index.html","581a8072c7832a39259acc844fbe9590"],["tags/智能硬件安全/index.html","f764dd1940fcf38a90c24cb7b8cebdf1"],["tags/智能设备安全分析/index.html","e53f00450fc6d9b5c4eba7eb3fa2e5b5"],["tags/漏洞复现/index.html","b95c2f8148652a664641e30e243363d1"],["tags/硬件电路构成/index.html","1b5099c9ddd1f9f27895ab94703b0435"],["tags/逆向（基础）/index.html","65b4f5d090920d7ea31094deadaf30cd"],["tags/逆向（调试）/index.html","ae6f462ec1c6c8e445b81833858e9785"],["x86汇编学习笔记_0x01/index.html","480c279ff85be17350c779636521fe98"],["x86汇编学习笔记_0x02/index.html","8dfda26b402644a35f5939628d6a6e17"],["x86汇编学习笔记_0x03/index.html","9192b57cd83bfc1e3d0d0a74522cb522"],["x86汇编学习笔记_0x04/index.html","3b825f4a51d200f208ceda53794369d1"],["x86汇编学习笔记_0x05/index.html","3350d936f2a9e0a777d74f3e5d314c51"],["x86汇编学习笔记_0x06/index.html","5e36364e60fd1882036e71d61ba09da0"],["x86汇编学习笔记_0x07/index.html","a748fc0684bdd278b97b09c2b4f7ed54"],["x86汇编学习笔记_0x08/index.html","68cf875c173385ea15b9a39f1b4a91dc"],["x86汇编学习笔记_0x09/index.html","262475a9379a486869f153e3257850a4"],["x86汇编学习笔记_0x10/index.html","efce1e3a5a9d56d3047647bb0179f2f6"],["x86汇编学习笔记_0x11/index.html","0fbc9e55ca64af2a076a920f4478cf3a"],["x86汇编学习笔记_0x12/index.html","d31c49b5108ec884ce27c2e48f9d593a"],["x86汇编学习笔记_0x13/index.html","942878c5e25406fc585df9e303be9d66"],["固件逆向01/index.html","7c0c6d493d0cc0ef8edb55a7dc1f5395"],["固件逆向02/index.html","1f7b2aae0930b9d4573c57870a56c8ea"],["挑战项目_进度分享/index.html","928bb2d6f7ac363835677c40630fc839"],["智能设备安全分析笔记(0x01)/index.html","ca89f531954fc638a61c7ade605e0d3c"],["汇编指令集/index.html","18d9495f9afb75fc4fed7e248237734c"],["硬件智能安全(0x01)/index.html","2ec6354e62296ef48bd0fcf15f9bd934"],["硬件智能安全(0x02)/index.html","3774b3d28f155c28ad3809e1b61c4455"],["硬件智能安全(0x03)/index.html","315cf752bee18f540bc4c56042f2aaad"],["硬件智能安全(0x04)/index.html","51b9176084dbad191ca9ae20b57aaf35"],["硬件智能安全(0x05)_/index.html","84524737c343d120547a993efbe6f133"],["硬件智能安全(0x06)_/index.html","9ade3fc6749576ab7433b6e856982915"],["硬件智能安全(0x07)_/index.html","24a8b4b2cb4daf8d300f15b4a4cd9851"],["硬件智能安全导航/index.html","acb979b7cb9cc65dea36de2f4a392648"],["硬件智能安全（固件番外）_/index.html","d9593824c6f2107a29933f96d0601925"],["硬件电路构成01/index.html","6bdb8c4a7b5dc34f28c866f695f08af3"],["逆向-基础-笔记_0x01/index.html","408c385c24665fff9aa9505a186ea054"],["逆向-调试-笔记_0x01/index.html","0188a9a0df0baacbe06ae051c17575be"],["逆向-调试-笔记_0x02/index.html","1ccab861e0e0d93ae81dd424ad2f7a2a"],["逆向-调试-笔记_0x03/index.html","0d22e56ffd14f71cf0d9ac9fd489c7df"],["逆向-调试-笔记_0x04/index.html","771232921497d74a347c1540f630bcdd"]];
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








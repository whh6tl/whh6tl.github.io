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

var precacheConfig = [["404.html","d7fc8c1c6aaf0b468203c922726a6aef"],["AMQP协议0_1/index.html","d612014187baef926ecba73673926cf5"],["ARM汇编01/index.html","32aa3b6f7ab5056d196ca5275bc8ea91"],["ARM汇编02/index.html","ac12d340de5dfb222deccca37dc50872"],["ARM汇编指令集/index.html","ddedbfff91157ad194039d9d74cc352f"],["Andoird反编译01/index.html","b632e5b0266325650685113e315a1dc5"],["BLE协议01/index.html","62ca31f462d0f0ac623bfe99c02732c7"],["BLE协议02/index.html","419d9706df898d47c02deeecf68cde56"],["CVE-2019-5418/index.html","73d5dd4846676b1e80ee97e5b48b452b"],["CVE-2019-9766/index.html","af06347d588cf47eaf222dc9866ac074"],["CoAP协议01/index.html","5c133089a4c21dc248a10fa427bc8cd2"],["JS_0X02/index.html","a582945e091931cea9e05ac58127ec25"],["JS_0X03/index.html","2acee8ec59f031123858e84e6e66a59b"],["JS_0X04/index.html","f59b7edd78bea10adf636e4a1b0f8de9"],["JS_0X05/index.html","9325b7552dbbde60a140bd91cd6c5d71"],["JS_0X06/index.html","6fa9dd39da22cff01509f079a7c5688e"],["JS_0X07/index.html","f32fd1934cf72a19682fc459b2636f89"],["JS_0X08/index.html","d372eab762d446f11aae2b6d6264664b"],["JS_0X09/index.html","cf07d64b547a3d35c5d24e55e0018032"],["JS_0X10/index.html","97eb5c24ea5ffd9043dba8b8192e5c01"],["JS笔记(0X01)/index.html","13e3c82e0a3464971d8c936506fa5bbc"],["JT808协议01/index.html","bc0beb9a8a66b44ed98f670a03431862"],["MQTT协议01/index.html","cd9c8c8ebd673ef71a544b4b3efe2181"],["NFC协议01/index.html","517045b8e1fdb36dce53f40d06b72aff"],["NFC协议02/index.html","d8ae35043573f099f39f2f3a475805b1"],["RF协议01/index.html","a4cdf37ca090097df970a2c21182ff20"],["RF协议02/index.html","f0df1209c11c57a347b1e5a1e626c153"],["RF协议03/index.html","0fa57ce25d5ab37af3436cd60e2690a4"],["Wi-Fi协议01/index.html","cc8d57d4bbb78055b941fd437be3807f"],["Wi-Fi协议02/index.html","54fac9cd1d97c93e46b3d3e2c16bb2cd"],["Wi-Fi协议03/index.html","81edff11ea44a0499c4fa91acaee8453"],["Wi-Fi协议04/index.html","a9a0f9e6a6901462b7ab2b0afd74a6fc"],["Wi-Fi协议05/index.html","62ab4fa5bb6230176f3e4468f8b27b83"],["Wi-Fi协议06/index.html","bc4ef45b5bc1bcb54a4d4b6e66f2addd"],["Wi-Fi协议07/index.html","7fa38cf24d24b7bf20f93ca02ad5302c"],["Wi-Fi协议08/index.html","b2dbbdc2a8c11fbd7f6a917e62356fff"],["Wi-Fi协议09/index.html","dc215ae2e5e211ad2892665d245b77f7"],["Wi-Fi协议10/index.html","de04d0b7c6564d677bbcc82dff65b05f"],["Wi-Fi协议11/index.html","7276faff787f738d6be450fad3dd2c02"],["ZigBee协议01/index.html","1f55ffaeff66abe2fdd8ef7092a1ee47"],["ZigBee协议02/index.html","d706f1b0859ed6140910eba322cdf341"],["archives/2020/08/index.html","111389222f1552deda84a2b7d4b77646"],["archives/2020/09/index.html","6a93722b9539879db3647f3659610b6b"],["archives/2020/09/page/2/index.html","cbc84e9b5912ecf91adcce429a1ed57b"],["archives/2020/09/page/3/index.html","9e6315cbebaddcec4280177a7ef9b91d"],["archives/2020/10/index.html","76a48b990e0e3db3db3330eda7ba0197"],["archives/2020/10/page/2/index.html","8fb138ed1f9a75eb1f82930eb9b95d5f"],["archives/2020/11/index.html","0ba248147a8fe20dab01cdf60241982c"],["archives/2020/11/page/2/index.html","e9664f03b19e60a18b2af599bcf3fc24"],["archives/2020/12/index.html","857d816ff887d2b860831c37e3be2ab4"],["archives/2020/index.html","8a85ae20fb2b78c7c4a03ed10280f9c4"],["archives/2020/page/2/index.html","9c40baacfaf6a111cebda1910e2eb2c0"],["archives/2020/page/3/index.html","7e27232edbf762d29805a4412759f241"],["archives/2020/page/4/index.html","26e6f32614d352485c3eaad3187ab870"],["archives/2020/page/5/index.html","48914452f9924b97acecaca156f762a3"],["archives/2020/page/6/index.html","1b06e0a35c6d818f5e1b3695c3f2ca30"],["archives/2020/page/7/index.html","f3ed6458badcc23baaa588e280e08d30"],["archives/2020/page/8/index.html","220221e947075b89177e99888b30eee1"],["archives/2021/01/index.html","2ebde9eb1ea5e8bfa624978d79ac5b08"],["archives/2021/09/index.html","32d64fc9258a69cf077992741667a13d"],["archives/2021/index.html","9a86df51ace294d57a17cc94a8845db3"],["archives/index.html","03b0064e08a4d46f987d94b49cc67034"],["archives/page/2/index.html","ec622b16ce4c9641a46d2f4f4b8f6b45"],["archives/page/3/index.html","ac03a04893765fc57e13a1155e8ad636"],["archives/page/4/index.html","ef6dc69043fad2296e2318201c4a035d"],["archives/page/5/index.html","5f5a9dca8a21599d1504d952cbadbcbf"],["archives/page/6/index.html","427f2dd0bbf6840470844377cb9b12a9"],["archives/page/7/index.html","e0c573494f222547c33f799abc83c5e0"],["archives/page/8/index.html","4971d283ff23d47944bbb5f0144002c8"],["baidu_verify_code-74acARe7VV.html","e3f2278b79912a3032517bacde56124e"],["categories/ARM汇编/index.html","92cf1d968df6322648d3527ebf4b67b0"],["categories/Android反编译/index.html","b64ceb814a3bfe8131a793dcf1057276"],["categories/CVE/index.html","d79507f768f5dec8b06f2e95c3757856"],["categories/JS学习笔记/index.html","b726cb184cddf3a6da959b589407ab46"],["categories/index.html","ee5ef8fd5e67c3bcd7a5725821a19480"],["categories/x86汇编/index.html","7fd0c410cec44ff8935297993a1cf7db"],["categories/x86汇编/page/2/index.html","f38b4946decbf564784f3c5b52986a24"],["categories/固件逆向/index.html","312a0f95d4049cfd3e737cbf2b74ad70"],["categories/技术分享/index.html","f5269cfb80783706252436f655d962cb"],["categories/挑战项目/index.html","ec5044ffc5ca3c00aea4836683f2ea3d"],["categories/智能硬件安全/index.html","57c61eae2586717eba9c7a7484752781"],["categories/智能设备安全分析/index.html","00b226653c6b017dc8fbe8a7de6d0823"],["categories/硬件电路构成/index.html","8ba4e2d5dc37f2cd2012337577679aeb"],["categories/网络通信协议/index.html","03825c73b03abecb9c99706640fec922"],["categories/网络通信协议/page/2/index.html","75a7c70af8bd6bac9474b693f05d3a64"],["categories/网络通信协议/page/3/index.html","cba04146179e0f671b3f547b42df7d70"],["categories/逆向/index.html","7394c45b5337dc2e6cb9afabf6fe444a"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","30f99b7069e74130dd57102ecfaa13cd"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","74ebcc337a5385f6c657a73695700698"],["page/2/index.html","81bb885c906685a5f9a5eb2b1788f1d8"],["page/3/index.html","d515e8302d87bdd77ce66ad166435d00"],["page/4/index.html","7d5c4fabd302e80b1e59e0e07ad27728"],["page/5/index.html","5a30b292f48dad5c981e5afc47317f05"],["page/6/index.html","7d8cfd8c2dc2fd0041c2fef737b23c0f"],["page/7/index.html","c45a3ca020ce5085b5f6a9e36f6cc91d"],["page/8/index.html","eb15748f98b4aacbd98ea4025f431b04"],["sec_share/index.html","14f5437022abf167c783776e053e6fcb"],["tags/AMQP协议-暂无/index.html","94acdb4502e91273dc566bf1b2986179"],["tags/ARM汇编/index.html","c96b6440774199695b4505ac806a1dda"],["tags/Android反编译/index.html","391e98e4376b8267c855bb76fbf21f34"],["tags/BLE协议/index.html","021a69434fe285cff4f34d60d93e24bf"],["tags/CoAP协议/index.html","4414a69ab1bb6e6b76fdac528447718b"],["tags/JT808协议/index.html","665f469b1a8635aadad6ff89714cd597"],["tags/JavaScript/index.html","6a4983fb9b8fbf478435cedd94adc139"],["tags/MQTT协议/index.html","0e23eeb392784071a6004b836a43e869"],["tags/NFC协议/index.html","2d5ae07fd0db0a27aafe9dfa5d02f8b2"],["tags/RF协议/index.html","8fc0387b4e2d8e2709505d3129899a2b"],["tags/Wi-Fi协议/index.html","7a907afa7a20cefa019d292b5c423480"],["tags/Wi-Fi协议/page/2/index.html","493ea317846ae559e03a1b4555f4ff32"],["tags/ZigBee协议/index.html","82277d374d6d2241d76c0108576fd182"],["tags/index.html","03bcf48fb06553e7e68846d57272e053"],["tags/x86汇编/index.html","924cbb6f05de9bed5a3c54f8b7260c43"],["tags/x86汇编/page/2/index.html","f7f060177ea74dc8dd7850e6e65abbef"],["tags/固件逆向/index.html","4ccbd8a3f259cac0730b9ec4e5d5d735"],["tags/技术分享/index.html","0e121df91df4f9a8449b15f3a88cf789"],["tags/挑战项目/index.html","9f3fdb5640a3880fe430a06b798e106b"],["tags/智能硬件安全/index.html","6e58bc627d63eeecd36d0dd2465397df"],["tags/智能设备安全分析/index.html","4be31f561a1ee6d6e28724a350e2de36"],["tags/漏洞复现/index.html","5e19f7157ece735e9486828c4b2e8da2"],["tags/硬件电路构成/index.html","f64ad0a44b81414a140b5213342a2f53"],["tags/逆向（基础）/index.html","d6733a10215748e431c5955a85d304bd"],["tags/逆向（调试）/index.html","f2e68bafc334016efd845a2505a9173f"],["x86汇编学习笔记_0x01/index.html","480c279ff85be17350c779636521fe98"],["x86汇编学习笔记_0x02/index.html","8dfda26b402644a35f5939628d6a6e17"],["x86汇编学习笔记_0x03/index.html","9192b57cd83bfc1e3d0d0a74522cb522"],["x86汇编学习笔记_0x04/index.html","3b825f4a51d200f208ceda53794369d1"],["x86汇编学习笔记_0x05/index.html","3350d936f2a9e0a777d74f3e5d314c51"],["x86汇编学习笔记_0x06/index.html","5e36364e60fd1882036e71d61ba09da0"],["x86汇编学习笔记_0x07/index.html","a748fc0684bdd278b97b09c2b4f7ed54"],["x86汇编学习笔记_0x08/index.html","68cf875c173385ea15b9a39f1b4a91dc"],["x86汇编学习笔记_0x09/index.html","262475a9379a486869f153e3257850a4"],["x86汇编学习笔记_0x10/index.html","efce1e3a5a9d56d3047647bb0179f2f6"],["x86汇编学习笔记_0x11/index.html","0fbc9e55ca64af2a076a920f4478cf3a"],["x86汇编学习笔记_0x12/index.html","d31c49b5108ec884ce27c2e48f9d593a"],["x86汇编学习笔记_0x13/index.html","942878c5e25406fc585df9e303be9d66"],["固件逆向01/index.html","7c0c6d493d0cc0ef8edb55a7dc1f5395"],["固件逆向02/index.html","1f7b2aae0930b9d4573c57870a56c8ea"],["挑战项目_进度分享/index.html","928bb2d6f7ac363835677c40630fc839"],["智能设备安全分析笔记(0x01)/index.html","ca89f531954fc638a61c7ade605e0d3c"],["汇编指令集/index.html","18d9495f9afb75fc4fed7e248237734c"],["硬件智能安全(0x01)/index.html","2ec6354e62296ef48bd0fcf15f9bd934"],["硬件智能安全(0x02)/index.html","3774b3d28f155c28ad3809e1b61c4455"],["硬件智能安全(0x03)/index.html","315cf752bee18f540bc4c56042f2aaad"],["硬件智能安全(0x04)/index.html","51b9176084dbad191ca9ae20b57aaf35"],["硬件智能安全(0x05)_/index.html","84524737c343d120547a993efbe6f133"],["硬件智能安全(0x06)_/index.html","9ade3fc6749576ab7433b6e856982915"],["硬件智能安全(0x07)_/index.html","24a8b4b2cb4daf8d300f15b4a4cd9851"],["硬件智能安全导航/index.html","acb979b7cb9cc65dea36de2f4a392648"],["硬件智能安全（固件番外）_/index.html","d9593824c6f2107a29933f96d0601925"],["硬件电路构成01/index.html","6bdb8c4a7b5dc34f28c866f695f08af3"],["逆向-基础-笔记_0x01/index.html","408c385c24665fff9aa9505a186ea054"],["逆向-调试-笔记_0x01/index.html","0188a9a0df0baacbe06ae051c17575be"],["逆向-调试-笔记_0x02/index.html","1ccab861e0e0d93ae81dd424ad2f7a2a"],["逆向-调试-笔记_0x03/index.html","0d22e56ffd14f71cf0d9ac9fd489c7df"],["逆向-调试-笔记_0x04/index.html","771232921497d74a347c1540f630bcdd"]];
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








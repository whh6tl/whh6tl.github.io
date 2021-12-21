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

var precacheConfig = [["404.html","e49589f52d0be829bf4da2de0f09a4b5"],["AMQP协议0_1/index.html","64af9eeae2eea5a53e835b1c2cea3a52"],["ARM汇编01/index.html","a797669334000b39ece89137ddb98cb6"],["ARM汇编02/index.html","9b6162d72a29ade286782a0df347c697"],["ARM汇编指令集/index.html","cb2e5e80b7279dbb84781c2aecdf0243"],["Andoird反编译01/index.html","94d13fae9946759f9019ee7fc58c17c3"],["BLE协议01/index.html","8e7ee79c48c7f0c98f8bd66ad5c8d319"],["BLE协议02/index.html","44a9068db9e2890f635a7018e4d0a476"],["CVE-2019-5418/index.html","68af915635caef3aaac41dc6144000d0"],["CVE-2019-9766/index.html","9b2662853f636b8cb54d21985b4b77f2"],["CoAP协议01/index.html","1622c16f734f05380b2745e9c08d4961"],["JS_0X02/index.html","e476f782ff9ff145585a9b8ee9cbfd8b"],["JS_0X03/index.html","ae01ee06f8fcc161d789cdbf0c61e734"],["JS_0X04/index.html","a5032acf08a3179e96d641d6b14d3c40"],["JS_0X05/index.html","9eabff61e8498b5c40d7b7e1a62e6855"],["JS_0X06/index.html","5235d41c2152f1a7102f795ff1f856f1"],["JS_0X07/index.html","2ff3de29353650d46b04bea38dd2c2b5"],["JS_0X08/index.html","85d7bc5b5230a9ea01200b8943f8abc2"],["JS_0X09/index.html","4ee98efc0085d9e998035d0b2a6504af"],["JS_0X10/index.html","c2c83004089fd334c9fa30896a04e2bb"],["JS笔记(0X01)/index.html","48aad8a6feb00f1a57be9ff4d2f56ac1"],["JT808协议01/index.html","fd2732a2f412e80041d73648bd601383"],["MQTT协议01/index.html","9d3cd1c49ce9bd07804797fbd4937f66"],["NFC协议01/index.html","da99c3b858e08673c22aa7470af1d198"],["NFC协议02/index.html","4cea63aedd84910eabd8c639df119e24"],["RF协议01/index.html","f8a95305cc56a3ef87cb98735f350b88"],["RF协议02/index.html","15b5d882f3061ebbf33be04c9810d1a6"],["RF协议03/index.html","25d2411140c81007acc70543675b632a"],["Wi-Fi协议01/index.html","326186e4e49ca2ebd43b4880038809d9"],["Wi-Fi协议02/index.html","b77cd38500f94d15ac5f238f31731914"],["Wi-Fi协议03/index.html","3bdaebc12b7672fda67a61de8a8036a2"],["Wi-Fi协议04/index.html","f970ec8dc6d1cc748753ba1355dcc52b"],["Wi-Fi协议05/index.html","ff89c2426f00403661506416f9c46d27"],["Wi-Fi协议06/index.html","87a0ffe9b497d075e0f7bb95ebb96363"],["Wi-Fi协议07/index.html","a2ee054ef05c5a2acb556d8c64d919bb"],["Wi-Fi协议08/index.html","71beb0069bf29a2cf510bd1ff6aeb83c"],["Wi-Fi协议09/index.html","e5c92b2ebc2214520af0787b71af40d3"],["Wi-Fi协议10/index.html","b34bbdaced32f8e3608374d021ec2ee5"],["Wi-Fi协议11/index.html","65b016c20783eade4d8346a4e4896996"],["ZigBee协议01/index.html","7bd253585abf25a3fce29b22346beb16"],["ZigBee协议02/index.html","8d0a6a2c6731a3f58ec71a450ac337c7"],["archives/2020/08/index.html","121fbbe2d257cb382409fbef89051369"],["archives/2020/09/index.html","d6df6e5279b33f1a2d2c2d0b13ee96ea"],["archives/2020/09/page/2/index.html","8e7631acc25ce1056ea71cc3539f9ea0"],["archives/2020/09/page/3/index.html","20265986680ca30cd70295fa21de3cd1"],["archives/2020/10/index.html","3e499c5cb7d7a58614265e4823607dbe"],["archives/2020/10/page/2/index.html","16e1c86dd4b9b128bd73afe08401c519"],["archives/2020/11/index.html","b86d489bdf2f58461ef354cdf7326627"],["archives/2020/11/page/2/index.html","5f85d6ed4a9b30becefef11248ff539b"],["archives/2020/12/index.html","39f3e2d81f633a79f17130a8ed727d5d"],["archives/2020/index.html","f08cebb4f3e9119c3c26a1a455e76f10"],["archives/2020/page/2/index.html","cb5c5834eab1b57ab0c8def768da0f3d"],["archives/2020/page/3/index.html","596a323b1213908181f16116db6868ce"],["archives/2020/page/4/index.html","05f248b058605590eb7956fcfddb706c"],["archives/2020/page/5/index.html","4bb239d79e0e7a14392aa957e195e2d2"],["archives/2020/page/6/index.html","8d28d1c15de0f6b809a47db617cd1c88"],["archives/2020/page/7/index.html","98da1e358a220def7254ca82b7067293"],["archives/2020/page/8/index.html","bb2529fa452d9cab37bb23674e3504f5"],["archives/2021/01/index.html","6cfbab2604fd9209ad30d6042b68f5fa"],["archives/2021/09/index.html","b0153be1c43b90650f0d6dfdb16a08b7"],["archives/2021/index.html","05691b1fbf30e5b68d2f3b32e5f36b7a"],["archives/index.html","ec21361bb88c20c3bbe947e9da7cb7f4"],["archives/page/2/index.html","2300ad40f10cdc1b8621a169f44fd689"],["archives/page/3/index.html","c0b798d375a588dbd1a7091fef9b095b"],["archives/page/4/index.html","1715b35f183d0529ee4f9e6bdb39cdfb"],["archives/page/5/index.html","26aac7f3bfe6eb81e54d831cdf771530"],["archives/page/6/index.html","6a0580557779cd63e01f6e4e51aea9de"],["archives/page/7/index.html","4194201fd0fcdf94478efbb6d8f29f6a"],["archives/page/8/index.html","09ed8d53cbeda80044c0f0a1dfaa5967"],["baidu_verify_code-74acARe7VV.html","e3f2278b79912a3032517bacde56124e"],["categories/ARM汇编/index.html","dd8fd8f75a76721a01bf0802150342c4"],["categories/Android反编译/index.html","f400f693dd58c8291d83715fa54a20a4"],["categories/CVE/index.html","6666057d774a2549c877a3c012c116e6"],["categories/JS学习笔记/index.html","2a88d514c335d17c2ed226445bbebd54"],["categories/index.html","4b062ef620a597cb6ebb82dd63c1f5c1"],["categories/x86汇编/index.html","b2dfdcdd63ae2d163b5869f93f7768f2"],["categories/x86汇编/page/2/index.html","7092ad82859576567100312bb973597c"],["categories/固件逆向/index.html","d1344fec731d902d128100729981c2f6"],["categories/技术分享/index.html","4a103340a68a9c857091b998a1934c28"],["categories/挑战项目/index.html","5c471486b4770514c049d7a6e0bd738f"],["categories/智能硬件安全/index.html","d362a1284e8cd176b6c6c3aa1bab2ed6"],["categories/智能设备安全分析/index.html","3ab2489203d770a7dcc56f924ebd2f51"],["categories/硬件电路构成/index.html","3f307fcbd42a6fa27ea361477853019d"],["categories/网络通信协议/index.html","5bb9c30350b9b4e1ac309555e9680f4e"],["categories/网络通信协议/page/2/index.html","5cbf687a5f1329a2fee506649eec8c62"],["categories/网络通信协议/page/3/index.html","e67b0295ad72354e72a9058ea1cc2394"],["categories/逆向/index.html","f21d42642ae51166ecc5678342480241"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","bd819cfb1a8bae8d885b030dbe8196e5"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","2fc13e9291246104ead4443fbe2e9f42"],["page/2/index.html","e70ea02801ec2f6dfb0fd46f3628e40f"],["page/3/index.html","5eeddefec107f572a70d0fe200f34543"],["page/4/index.html","0b2e3a93666c9cdedc7f99ff4dbccfd1"],["page/5/index.html","b7a14d53e5b4cc583bac72aff1d268cc"],["page/6/index.html","e5dd560f98c9a655cee19e309925d54e"],["page/7/index.html","fa8bce4a291e4122ec2c845e7ab9d6ef"],["page/8/index.html","3fd34bb13785bc850c9948f711374d5c"],["sec_share/index.html","c4af512a6b2f941e26f06dc661359bc9"],["tags/AMQP协议-暂无/index.html","cd44ebd40e5e077b1ba619b4f9c7d80f"],["tags/ARM汇编/index.html","39c9811958540446e131ce36047a0ee8"],["tags/Android反编译/index.html","b5cddd712e4eb3f5d083cdb3ac616a10"],["tags/BLE协议/index.html","d964c07331d920359f7e71059e59a782"],["tags/CoAP协议/index.html","4430e4ddbff3532fe94d411056add2dc"],["tags/JT808协议/index.html","5ed3bc68a2a71a3a357655a49872856c"],["tags/JavaScript/index.html","e6578549ac47ed759785753494e977ee"],["tags/MQTT协议/index.html","5f9582ff3526940ba51de9a6787fffa7"],["tags/NFC协议/index.html","a511990f7b3242d57a38a9311a9a8fdc"],["tags/RF协议/index.html","e6e41ccb767be53c0ee2104337547eae"],["tags/Wi-Fi协议/index.html","66ad01b058668729fd2e350be70f3669"],["tags/Wi-Fi协议/page/2/index.html","33eb0f72752afdd10e9c1ba3c12f8320"],["tags/ZigBee协议/index.html","064b115da9d18d44db435456e773cb4d"],["tags/index.html","98838a83dc43a03a06631c0231e9816d"],["tags/x86汇编/index.html","dca47d729fe40e24d422b726094e93a6"],["tags/x86汇编/page/2/index.html","6bd472eec61bc376f039ca5683eeeda6"],["tags/固件逆向/index.html","7b92c9f8a9b5a7d02a609a52a086be02"],["tags/技术分享/index.html","c1dbaa41e9a2de281db0d98a8fbf0d2f"],["tags/挑战项目/index.html","8c8e6f40cfb00499db3e4dd259a7472d"],["tags/智能硬件安全/index.html","109a4025940f981182e317e368923318"],["tags/智能设备安全分析/index.html","c5b90384a575e834ae11684200e94a7a"],["tags/漏洞复现/index.html","71541ab2e1ae6918147cbd1384a53118"],["tags/硬件电路构成/index.html","eee67e3d60c4cf5989a77de15728bd79"],["tags/逆向（基础）/index.html","2434c08be1c1ff15517290cc2ba074ce"],["tags/逆向（调试）/index.html","5121939ce0b3c45397b1415bd6850b7b"],["x86汇编学习笔记_0x01/index.html","cd563ad739c6e29e65ea7c5419da7116"],["x86汇编学习笔记_0x02/index.html","cf47de56ab47ef78ef6b5ed91d9a65a9"],["x86汇编学习笔记_0x03/index.html","316bb7685193c7be6e2ad919aee9ab24"],["x86汇编学习笔记_0x04/index.html","7f72fc278df575f4c4cc837ffc97560f"],["x86汇编学习笔记_0x05/index.html","b24be8379f7877464cad70f8f3add434"],["x86汇编学习笔记_0x06/index.html","1983c102b71158e28054fecc230ec39e"],["x86汇编学习笔记_0x07/index.html","2d6b81ae979605d7f464f040bb33ba55"],["x86汇编学习笔记_0x08/index.html","3186d8ce6d3128f76cfb2418b21a5368"],["x86汇编学习笔记_0x09/index.html","52d738b6f0fb5e46e042c7e1db1a3bc5"],["x86汇编学习笔记_0x10/index.html","ae62c7b77158fc507a1c0ede61545c0a"],["x86汇编学习笔记_0x11/index.html","f46a2adb4406a29f437c75585fbf0b1a"],["x86汇编学习笔记_0x12/index.html","133a0c35dc1dbfa5b487c88aeb9a09ab"],["x86汇编学习笔记_0x13/index.html","16de50548eba5270f48f7728cb11a4ec"],["固件逆向01/index.html","9416e22954ea3b6bb496763aada42861"],["固件逆向02/index.html","d8d4ea532476d979f01ba68aba13fb03"],["挑战项目_进度分享/index.html","06bfc89f1eaa53f03885ec5b80bedb2d"],["智能设备安全分析笔记(0x01)/index.html","ab678402519a778c54a6a917392d7299"],["汇编指令集/index.html","510b63f56e628d0f04b98ce1d398bcef"],["硬件智能安全(0x01)/index.html","682d02689dba23c021e00e976426fd2d"],["硬件智能安全(0x02)/index.html","71ed8b7963e807f1f0dfe60b1605b7cc"],["硬件智能安全(0x03)/index.html","244db83375ce491a166d7dc52210b8ec"],["硬件智能安全(0x04)/index.html","183991f66a262337c867899175e091fd"],["硬件智能安全(0x05)_/index.html","eb1c824a818e34fbe3ac3b965e90d3ff"],["硬件智能安全(0x06)_/index.html","b6af37cc386299de9b0033c54c29bea1"],["硬件智能安全(0x07)_/index.html","373980b113d757829b7c0778e7c07a7c"],["硬件智能安全导航/index.html","cb0995ca3cdd3b04fbf6f09d257e4106"],["硬件智能安全（固件番外）_/index.html","697ed83fbc354a1aafcb0167bddba0a2"],["硬件电路构成01/index.html","e6dfa939d8b3582d0ee675d83d31cdc2"],["逆向-基础-笔记_0x01/index.html","f329f859d99a539cc43b7b71d6e5c034"],["逆向-调试-笔记_0x01/index.html","d389ce7ed88f70bbe01f3cc6576e4d76"],["逆向-调试-笔记_0x02/index.html","126076b4247687c57baad84d30cbd233"],["逆向-调试-笔记_0x03/index.html","7bfc3c22510f3e6822bf465d2dc1c7fd"],["逆向-调试-笔记_0x04/index.html","2f4402fd5fa644fb0529b3b518746880"]];
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








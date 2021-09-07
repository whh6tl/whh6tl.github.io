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

var precacheConfig = [["404.html","1c5ee10c40ee53848e83ef4cb8e5174d"],["AMQP协议0_1/index.html","61b301ae2448ee1f3fe92923bfe58786"],["ARM汇编01/index.html","1dfe0a7509d69beba2e11b2e4606d640"],["ARM汇编02/index.html","0a6df8d9fc9f0bfff495bcd8c3eab432"],["ARM汇编指令集/index.html","b6f5389018b25c40370173abc98dfb32"],["Andoird反编译01/index.html","0f665623c0c32dd9964a79bc92207894"],["BLE协议01/index.html","022b1a7b3b08f439e8bfac61fbf02d66"],["BLE协议02/index.html","fbc2110f96db6c1de32be0a1fd86d613"],["CVE-2019-5418/index.html","0ed8f911922f1d52154dcfd9be9b9148"],["CVE-2019-9766/index.html","858c77a32dfa7137c1b0e11e4e9dae03"],["CoAP协议01/index.html","22d4da6e54872773d4c6e92131452230"],["JS_0X02/index.html","b5e3aab3f535b4035bac370ac88f2a04"],["JS_0X03/index.html","37d96cfba1f13d199c058ad39c571007"],["JS_0X04/index.html","772139fddba1682c1b340dd357a762d7"],["JS_0X05/index.html","842a88d17feb27bd1ff7bf7464415b53"],["JS_0X06/index.html","0132e6e574d310aabc39114bd40a5107"],["JS_0X07/index.html","183d85743dd3175da9c6428c54f68e37"],["JS_0X08/index.html","5f15d43e48a3eba249f4fc3da39658fe"],["JS_0X09/index.html","a4509816a4a3295826418e4fabbe25a4"],["JS_0X10/index.html","8e58dd8d09dc2980db38b780a5ab2b6b"],["JS笔记(0X01)/index.html","4dc10cb58311c04313afc34fe60501db"],["JT808协议01/index.html","10e601a25612ed993bb1ad4a6fce01dc"],["MQTT协议01/index.html","baecfb3cc0f00fc5d1c921da001fd624"],["NFC协议01/index.html","9be1f06586659b6aa1f25fcf726414a1"],["NFC协议02/index.html","7a0bf333786d86c5fdd6aa6a7df093ee"],["RF协议01/index.html","b52edaddeae666e31c30b058a6323bce"],["RF协议02/index.html","0d7af7079af6f5d24779a43320a1bb5f"],["RF协议03/index.html","503befef796bd2f880034f6ccf666f07"],["Wi-Fi协议01/index.html","f3cc49a62f712799df0534e00cfce684"],["Wi-Fi协议02/index.html","97b6ae06867ee0c4a851748bb5eb5780"],["Wi-Fi协议03/index.html","61b6baf2d07687a93715b3b98f0b1943"],["Wi-Fi协议04/index.html","ce6ce515a0200211b4de52c4ff90e025"],["Wi-Fi协议05/index.html","870146a44f31becb4bb48424b888abda"],["Wi-Fi协议06/index.html","eb3db6a02a6f799517ff7cb7e1b0deda"],["Wi-Fi协议07/index.html","86fedb4286cf77d9e29215b2bc06b6bc"],["Wi-Fi协议08/index.html","157640fd7af0f887e704f0e870720501"],["Wi-Fi协议09/index.html","4af44ac1cf58e0c128dd471370d7c905"],["Wi-Fi协议10/index.html","1be3ddd87ae9f9527e6f30d1153053f8"],["Wi-Fi协议11/index.html","0b1cc1dedb0d4500d7b1f63af83d2ecf"],["ZigBee协议01/index.html","f193a3a0e5937cc660eb149316eb7efd"],["ZigBee协议02/index.html","23c080470e33ce9c3698e80bda1d2cf2"],["archives/2020/08/index.html","8a2d48d3841efab42eac680dea1e72cd"],["archives/2020/09/index.html","a9d1996168d492553eda32f204e1a8f4"],["archives/2020/09/page/2/index.html","1652ed3617716fb0fee18ffa8c6e51e3"],["archives/2020/09/page/3/index.html","2c2fb27956bd2876b7d45945b7c12f2a"],["archives/2020/10/index.html","543b459e1ca7374ce1525bc1d7e3f507"],["archives/2020/10/page/2/index.html","2c8deadac41e994ff2e43078b0036af5"],["archives/2020/11/index.html","8800e089a509abab57045d533da94f1d"],["archives/2020/11/page/2/index.html","692efce0dd6aa3109653da0da44f2868"],["archives/2020/12/index.html","c149b974bceadb465d2fd3353c00fa3e"],["archives/2020/index.html","c8311374ff14e607a70df1e44d25206c"],["archives/2020/page/2/index.html","729f5b877ce7706f02c97b95ffa75f89"],["archives/2020/page/3/index.html","c48e1c9d2a16fb1e2a40b98a23ef0561"],["archives/2020/page/4/index.html","21c0e0897cfb67ddd7853874d6fd9bd1"],["archives/2020/page/5/index.html","3e8843c08c1c95c51ad21d33d1519ab2"],["archives/2020/page/6/index.html","d6b84467ae65627d49e6637bbfbc7e67"],["archives/2020/page/7/index.html","c32e34fb6f184841001c2e31e268da1f"],["archives/2020/page/8/index.html","703de0b56e4325d685510f0828877cea"],["archives/2021/01/index.html","b7464fb7ec354db0e40e651d4cedab68"],["archives/2021/09/index.html","b1ea9a7452ddddf21986e2e7e4d6a15b"],["archives/2021/index.html","61363db447181d9c667c98b89dfd2eff"],["archives/index.html","aa8a658674ff83408bee10f5156830d6"],["archives/page/2/index.html","000c565253cebe009ccc1afa7ef16183"],["archives/page/3/index.html","b4c01d4be5cc2c3a715f7f7a696c78b5"],["archives/page/4/index.html","44efa6007f3bcce3e928ffeaf8f75a41"],["archives/page/5/index.html","15b84b14c562f7901ad118e37c63df91"],["archives/page/6/index.html","feb22edebe77eccb136c4a7857e912e9"],["archives/page/7/index.html","7cea5e31fa498cc1b2dc73ccd006d85d"],["archives/page/8/index.html","6338e3e80198b3c0d33cbe7fb5b0995d"],["baidu_verify_code-74acARe7VV.html","e3f2278b79912a3032517bacde56124e"],["categories/ARM汇编/index.html","022d2826b7e514261e11f819801dace3"],["categories/Android反编译/index.html","c2d1a6224786ba46328a4c8abd30299b"],["categories/CVE/index.html","3fb84d0a11a3239e8438c13eebe69ba9"],["categories/JS学习笔记/index.html","ce4a13b6665f66a91346a7d707b8e77c"],["categories/index.html","dde663fcbd986c1a3b44f5e7a970beaa"],["categories/x86汇编/index.html","a9b9e3a6f33688cc361500f9a3a63caf"],["categories/x86汇编/page/2/index.html","da3cc5dfa76b65cd28ab9e42ae1ab1a7"],["categories/固件逆向/index.html","027ca96f0a047c7cd6c8508f098adbbd"],["categories/技术分享/index.html","17708ae0b0344b918a4545358223e13c"],["categories/智能硬件安全/index.html","f7fc771d21a94ee44cad5fa424804609"],["categories/智能设备安全分析/index.html","d916ee9cc5b0b574d6158dc1f3d0bd29"],["categories/硬件电路构成/index.html","3513ff658e0fea0f4f5945ac626027ef"],["categories/网络通信协议/index.html","4cfd50d4693902050cd2e90c45cc4866"],["categories/网络通信协议/page/2/index.html","9fd7ee0af795a3c2f9f81d8a972f433f"],["categories/网络通信协议/page/3/index.html","876afcdf2a71ef933acd625b76064d34"],["categories/逆向/index.html","eaa323dff6a239265721dae3bf09cf96"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","2ae791577507a6ea793de1930d623af2"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","637d67203c2806e1326f999a9e292652"],["page/2/index.html","393bdae7a058b8268a0197d5dc00f529"],["page/3/index.html","3147574750c84d3d2b9fe354a55f40fb"],["page/4/index.html","d475f9467915731d526e3c81393a0816"],["page/5/index.html","70f4063417eca7cc59845ee1ca16f1e9"],["page/6/index.html","4279e17f89db86ca142c3e4bc6754713"],["page/7/index.html","d07d86a539aee4cbcc06128430158001"],["page/8/index.html","70d03c86c3a76c18b52a9b8fb4c51c44"],["sec_share/index.html","67a882b3e176f36be12393046fd23c6c"],["tags/AMQP协议-暂无/index.html","5f81b9b5068a24236749a28dada11a79"],["tags/ARM汇编/index.html","02f594087d4b1ee158c31bf29e8f1a9a"],["tags/Android反编译/index.html","b349bd9037036f9dc379d62435800321"],["tags/BLE协议/index.html","182b36df1667df975eb612610569b2d8"],["tags/CoAP协议/index.html","06ef3496fe5037de6c8ea182fd3eeb31"],["tags/JT808协议/index.html","3544f8e7bf406bd60b6431a7fc2dc537"],["tags/JavaScript/index.html","6552afcef70be3f88000b470eccad2c7"],["tags/MQTT协议/index.html","c544db71ff33cc17356154b8e04984fe"],["tags/NFC协议/index.html","bd0791d4bfa1d42b911deda857180fdf"],["tags/RF协议/index.html","38d3fd9359b429f61e24c40fb27464fb"],["tags/Wi-Fi协议/index.html","44067fbf2fe6e5486171194fce5f1a27"],["tags/Wi-Fi协议/page/2/index.html","ad91929f42b0206c857cb71f10b89a8e"],["tags/ZigBee协议/index.html","6cb7412cb790eb50642e469ca822a93f"],["tags/index.html","5ad896a8dddd274b0f7c64910111a89c"],["tags/x86汇编/index.html","02b745a3785e45688ff58eba5547d110"],["tags/x86汇编/page/2/index.html","d9bdf1fc539abc100f9726a89f3ff065"],["tags/固件逆向/index.html","a5807a63608e78b3b971d7f9064355ff"],["tags/技术分享/index.html","815f119c71586d01a073aea05ef5710e"],["tags/智能硬件安全/index.html","27a6d84ac9b4608b2d3438ab64ce7150"],["tags/智能设备安全分析/index.html","401a0021ef1f8231c1ce1a04876595c4"],["tags/漏洞复现/index.html","67ac8882618167b50c779de845f457ba"],["tags/硬件电路构成/index.html","6f10af4b5252c675ecf9343374c8682f"],["tags/逆向（基础）/index.html","65ddceb3ef10e28ba778ee753c883ed2"],["tags/逆向（调试）/index.html","e8b80ed9b041459d5a82f5e925091dc3"],["x86汇编学习笔记_0x01/index.html","43b9b5c4a7c02b7875e1937cdc55e71a"],["x86汇编学习笔记_0x02/index.html","e4add588c1bba9140688230bc24bedcf"],["x86汇编学习笔记_0x03/index.html","19990ac8f41d568d60fa74b482a67d08"],["x86汇编学习笔记_0x04/index.html","2fa5b2f722ca286ab50ccd91bb72f0e6"],["x86汇编学习笔记_0x05/index.html","07739391b8c1ae7dad166db01da36f55"],["x86汇编学习笔记_0x06/index.html","a74b242d3889e3078da96d94706bed63"],["x86汇编学习笔记_0x07/index.html","ac300c00cb535759fd91ca1d234e6c52"],["x86汇编学习笔记_0x08/index.html","b892bf4e43d6705d1b595fce7e675121"],["x86汇编学习笔记_0x09/index.html","d5175ff8423072353c0ae1019773fa8d"],["x86汇编学习笔记_0x10/index.html","1b4888d3844ef4785ab00007b32da294"],["x86汇编学习笔记_0x11/index.html","5e33e6368086002652a1f83f29889512"],["x86汇编学习笔记_0x12/index.html","63781a9e977ae0c5e1f29a03c6e70d60"],["x86汇编学习笔记_0x13/index.html","280cfa5ffe6551b2c876401197c21d95"],["固件逆向01/index.html","2d71b83dcdb75b5410294e915283e650"],["固件逆向02/index.html","5a9931afeeb0d0790d2077ac039855aa"],["智能设备安全分析笔记(0x01)/index.html","4cf98ece797f425e2212e9ae572dcfa7"],["汇编指令集/index.html","72fa2ed0b1ceeb978239b1629a71a2e8"],["硬件智能安全(0x01)/index.html","46b60ee273a0f1f8dd48070bd2a74c7f"],["硬件智能安全(0x02)/index.html","14efbc0eb5b49b02ffd2e676dffa3021"],["硬件智能安全(0x03)/index.html","3af3483b3c3b13a9259f2ae1ab0da7b0"],["硬件智能安全(0x04)/index.html","23940b182fe08f806a68413254ceb401"],["硬件智能安全(0x05)_/index.html","4e1903f74d496f853dfe54001d728f82"],["硬件智能安全(0x06)_/index.html","5b1c63556ca2261dc02650aeab3a1e0d"],["硬件智能安全(0x07)_/index.html","740a84875314f98080666d9999f977f0"],["硬件智能安全导航/index.html","64bb32c1019ff04188a72c4efee77e83"],["硬件智能安全（固件番外）_/index.html","acc0eaafcbedbd31feb632e5486b88ef"],["硬件电路构成01/index.html","b4f731e0bb2639c8d3d2991f300a4314"],["逆向-基础-笔记_0x01/index.html","bc30c3732dd8057b74b213c2a1daf1ea"],["逆向-调试-笔记_0x01/index.html","4ba2d1d578590460c64fcc2e3647134f"],["逆向-调试-笔记_0x02/index.html","2faf2c431fa0a406cb7956abd7310905"],["逆向-调试-笔记_0x03/index.html","6f410526f58aea343f9529ee0117d73d"],["逆向-调试-笔记_0x04/index.html","9c633375fef139be2b6a4e4ff262f73a"]];
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








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

var precacheConfig = [["404.html","372ff92a40649d83a53d9e014538f8de"],["AMQP协议0_1/index.html","64af9eeae2eea5a53e835b1c2cea3a52"],["ARM汇编01/index.html","a797669334000b39ece89137ddb98cb6"],["ARM汇编02/index.html","9b6162d72a29ade286782a0df347c697"],["ARM汇编指令集/index.html","cb2e5e80b7279dbb84781c2aecdf0243"],["Andoird反编译01/index.html","94d13fae9946759f9019ee7fc58c17c3"],["BLE协议01/index.html","8e7ee79c48c7f0c98f8bd66ad5c8d319"],["BLE协议02/index.html","44a9068db9e2890f635a7018e4d0a476"],["CVE-2019-5418/index.html","68af915635caef3aaac41dc6144000d0"],["CVE-2019-9766/index.html","9b2662853f636b8cb54d21985b4b77f2"],["CoAP协议01/index.html","1622c16f734f05380b2745e9c08d4961"],["JS_0X02/index.html","e476f782ff9ff145585a9b8ee9cbfd8b"],["JS_0X03/index.html","ae01ee06f8fcc161d789cdbf0c61e734"],["JS_0X04/index.html","a5032acf08a3179e96d641d6b14d3c40"],["JS_0X05/index.html","9eabff61e8498b5c40d7b7e1a62e6855"],["JS_0X06/index.html","5235d41c2152f1a7102f795ff1f856f1"],["JS_0X07/index.html","2ff3de29353650d46b04bea38dd2c2b5"],["JS_0X08/index.html","85d7bc5b5230a9ea01200b8943f8abc2"],["JS_0X09/index.html","4ee98efc0085d9e998035d0b2a6504af"],["JS_0X10/index.html","c2c83004089fd334c9fa30896a04e2bb"],["JS笔记(0X01)/index.html","48aad8a6feb00f1a57be9ff4d2f56ac1"],["JT808协议01/index.html","fd2732a2f412e80041d73648bd601383"],["MQTT协议01/index.html","9d3cd1c49ce9bd07804797fbd4937f66"],["NFC协议01/index.html","da99c3b858e08673c22aa7470af1d198"],["NFC协议02/index.html","4cea63aedd84910eabd8c639df119e24"],["RF协议01/index.html","f8a95305cc56a3ef87cb98735f350b88"],["RF协议02/index.html","15b5d882f3061ebbf33be04c9810d1a6"],["RF协议03/index.html","25d2411140c81007acc70543675b632a"],["Wi-Fi协议01/index.html","326186e4e49ca2ebd43b4880038809d9"],["Wi-Fi协议02/index.html","b77cd38500f94d15ac5f238f31731914"],["Wi-Fi协议03/index.html","3bdaebc12b7672fda67a61de8a8036a2"],["Wi-Fi协议04/index.html","f970ec8dc6d1cc748753ba1355dcc52b"],["Wi-Fi协议05/index.html","ff89c2426f00403661506416f9c46d27"],["Wi-Fi协议06/index.html","87a0ffe9b497d075e0f7bb95ebb96363"],["Wi-Fi协议07/index.html","a2ee054ef05c5a2acb556d8c64d919bb"],["Wi-Fi协议08/index.html","71beb0069bf29a2cf510bd1ff6aeb83c"],["Wi-Fi协议09/index.html","e5c92b2ebc2214520af0787b71af40d3"],["Wi-Fi协议10/index.html","b34bbdaced32f8e3608374d021ec2ee5"],["Wi-Fi协议11/index.html","65b016c20783eade4d8346a4e4896996"],["ZigBee协议01/index.html","7bd253585abf25a3fce29b22346beb16"],["ZigBee协议02/index.html","8d0a6a2c6731a3f58ec71a450ac337c7"],["archives/2020/08/index.html","a2bfaae13acd589c19abd2739213cf3e"],["archives/2020/09/index.html","55b5717646662f6fa55e7e8235876d02"],["archives/2020/09/page/2/index.html","56abba062ed338e9b250470c7acc1f25"],["archives/2020/09/page/3/index.html","b831690fef642420466ee74d2bd1814a"],["archives/2020/10/index.html","19faecc49fe4568ac6f78639bdac34ce"],["archives/2020/10/page/2/index.html","3a04a62a486d3c07427b29bebc0fd40d"],["archives/2020/11/index.html","c3e10e347e6680489ede331c4dbcf5e5"],["archives/2020/11/page/2/index.html","3788195ba396686468f9ed60a12542fa"],["archives/2020/12/index.html","57148efea09e175f4b7507a51da3b068"],["archives/2020/index.html","e696b35fa225b5bd3470a168b295e67d"],["archives/2020/page/2/index.html","67eb6f60c569a1537065dba98da5252d"],["archives/2020/page/3/index.html","f6a4e01d9f3ea69d9b5e200e43a4fc57"],["archives/2020/page/4/index.html","e6ecfe71516ea36a395ebf74e240fb16"],["archives/2020/page/5/index.html","d85ee42258c9af9fff90a8b487e57451"],["archives/2020/page/6/index.html","a98e89e75ec757f7073e1102c190075f"],["archives/2020/page/7/index.html","e02128d49bdacb2dead9051ba0552950"],["archives/2020/page/8/index.html","1ca8c52f33b02c44ffd1b1feeb94aee2"],["archives/2021/01/index.html","b9aeb7b113dbc8700e387be1854007cd"],["archives/2021/09/index.html","4ae5529db4040c9fa066c392ef680ff9"],["archives/2021/index.html","96a6fcf9321e31cb38ae1fa0a943163b"],["archives/index.html","68eb3829ec2f2c0c0c52e27f61e78096"],["archives/page/2/index.html","bec75ecc410c73010de7d2b3ca22def5"],["archives/page/3/index.html","bab592ad619ef0b5ec27c6febc5ffd77"],["archives/page/4/index.html","a72fc88cc8b883c1d93fcc9c89fcafc1"],["archives/page/5/index.html","6564391a3ba44cc8487f702f84cb324f"],["archives/page/6/index.html","99430bb554a247b65632636ec1b07eb5"],["archives/page/7/index.html","fd0f66ef73bee6a3a253060e6c502286"],["archives/page/8/index.html","c48808887970e77f6ca3fc59b9a16ee6"],["baidu_verify_code-74acARe7VV.html","e3f2278b79912a3032517bacde56124e"],["categories/ARM汇编/index.html","dc95364f7be5d300d9565ae0beac8b9c"],["categories/Android反编译/index.html","622de01144acbb51e0589531830c3c3c"],["categories/CVE/index.html","1795c14e351f4c225c51883e2cda3054"],["categories/JS学习笔记/index.html","200d8c9d8a52feecaa90ce6c619ac46d"],["categories/index.html","4b062ef620a597cb6ebb82dd63c1f5c1"],["categories/x86汇编/index.html","28fc03e49411934d3fa18f277b145de2"],["categories/x86汇编/page/2/index.html","ee9cb73276c317e9bf671facdca8b664"],["categories/固件逆向/index.html","797f5db304d0888856f845f112356bac"],["categories/技术分享/index.html","8c9829990623063ea9750974dfdf8821"],["categories/挑战项目/index.html","d93cb1b3f9ff3ab9d79fb3b5f5ea9fb8"],["categories/智能硬件安全/index.html","9f8b22bdddee47c344585153fa88cb45"],["categories/智能设备安全分析/index.html","9f0e6fe7bc73a9f31074905b401d3ebc"],["categories/硬件电路构成/index.html","1e4607afd9efc026547ef5636a0788cf"],["categories/网络通信协议/index.html","f59968a42c2c2c8c9adc3c17c361a9de"],["categories/网络通信协议/page/2/index.html","f2ddb203dcc8d558162ff7c34d47be91"],["categories/网络通信协议/page/3/index.html","741a69fe1638a2d2e848c5e811b50b0d"],["categories/逆向/index.html","9a660fd03f550ba1b29c8ce276028837"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","158e403b4501f558336b62aba9bc3f48"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","2fc13e9291246104ead4443fbe2e9f42"],["page/2/index.html","2f91c5d67567082e5fd0960341966b5d"],["page/3/index.html","e4d4c20afa240ff7eeb05312908c7e40"],["page/4/index.html","65aa5c04202b03c82d43a910faad277d"],["page/5/index.html","9610b4a41256df219dd7043eb165199e"],["page/6/index.html","d2ffd4085adf9191af64cdeafa20d088"],["page/7/index.html","1a6c7cb4609bd8aa8a8ea4db39a6edeb"],["page/8/index.html","452dbeaf4d69cfce6cfe3b417d719753"],["sec_share/index.html","c4af512a6b2f941e26f06dc661359bc9"],["tags/AMQP协议-暂无/index.html","224e0888af13066b381c526542bb04eb"],["tags/ARM汇编/index.html","480d00a9363f2374d3af34edbc53c5de"],["tags/Android反编译/index.html","aedfbad2a9e282820b724298c3fbf06b"],["tags/BLE协议/index.html","d289334b48dce783917e8440bd1f8687"],["tags/CoAP协议/index.html","834786269c2fb4664bcea5605d0b3225"],["tags/JT808协议/index.html","0f69f4bdda3098dbe1007f0d97a9f419"],["tags/JavaScript/index.html","cf6bb73afb458a6877c9a4ed96b8532d"],["tags/MQTT协议/index.html","95b7c07cb7a4a0d26c9b176e108d0fa3"],["tags/NFC协议/index.html","acb30cfefc8288a61ff77daa80a998c8"],["tags/RF协议/index.html","4ece51ddb03275056c7d193d61af6e77"],["tags/Wi-Fi协议/index.html","e478d97c3527b642749b525ac24dea12"],["tags/Wi-Fi协议/page/2/index.html","d265cf9c64b65855abe83c8bd04cdb43"],["tags/ZigBee协议/index.html","f7c587ed28a25f54c318404e060001e7"],["tags/index.html","f0a4ba813ae338106cf21a70a7c534aa"],["tags/x86汇编/index.html","7eb79bdb9ed696e84120f752bb75cfe7"],["tags/x86汇编/page/2/index.html","e4f99f48246ec42e00c6caeb96f6e27c"],["tags/固件逆向/index.html","dc81705372b2b3da7cb0e43d7918d8d1"],["tags/技术分享/index.html","4b23527d2d25a2b2bc0df7888dc4faec"],["tags/挑战项目/index.html","5b1de75690e08eda22d66f59c560fbe8"],["tags/智能硬件安全/index.html","0da4c518013631e58531dab0e6dff90e"],["tags/智能设备安全分析/index.html","334ebeb734313f572037908191de593a"],["tags/漏洞复现/index.html","9089a2adf3ed3c921fe554d17c4935cc"],["tags/硬件电路构成/index.html","68bdcb3732fbd087341dda828860fd29"],["tags/逆向（基础）/index.html","f25238236aa918d9e8cf536b44effb97"],["tags/逆向（调试）/index.html","fcc2469fd4ffcfe0d2df2600f2b67535"],["x86汇编学习笔记_0x01/index.html","cd563ad739c6e29e65ea7c5419da7116"],["x86汇编学习笔记_0x02/index.html","cf47de56ab47ef78ef6b5ed91d9a65a9"],["x86汇编学习笔记_0x03/index.html","316bb7685193c7be6e2ad919aee9ab24"],["x86汇编学习笔记_0x04/index.html","7f72fc278df575f4c4cc837ffc97560f"],["x86汇编学习笔记_0x05/index.html","b24be8379f7877464cad70f8f3add434"],["x86汇编学习笔记_0x06/index.html","1983c102b71158e28054fecc230ec39e"],["x86汇编学习笔记_0x07/index.html","2d6b81ae979605d7f464f040bb33ba55"],["x86汇编学习笔记_0x08/index.html","3186d8ce6d3128f76cfb2418b21a5368"],["x86汇编学习笔记_0x09/index.html","52d738b6f0fb5e46e042c7e1db1a3bc5"],["x86汇编学习笔记_0x10/index.html","ae62c7b77158fc507a1c0ede61545c0a"],["x86汇编学习笔记_0x11/index.html","f46a2adb4406a29f437c75585fbf0b1a"],["x86汇编学习笔记_0x12/index.html","133a0c35dc1dbfa5b487c88aeb9a09ab"],["x86汇编学习笔记_0x13/index.html","16de50548eba5270f48f7728cb11a4ec"],["固件逆向01/index.html","9416e22954ea3b6bb496763aada42861"],["固件逆向02/index.html","d8d4ea532476d979f01ba68aba13fb03"],["挑战项目_进度分享/index.html","06bfc89f1eaa53f03885ec5b80bedb2d"],["智能设备安全分析笔记(0x01)/index.html","ab678402519a778c54a6a917392d7299"],["汇编指令集/index.html","510b63f56e628d0f04b98ce1d398bcef"],["硬件智能安全(0x01)/index.html","682d02689dba23c021e00e976426fd2d"],["硬件智能安全(0x02)/index.html","71ed8b7963e807f1f0dfe60b1605b7cc"],["硬件智能安全(0x03)/index.html","244db83375ce491a166d7dc52210b8ec"],["硬件智能安全(0x04)/index.html","183991f66a262337c867899175e091fd"],["硬件智能安全(0x05)_/index.html","eb1c824a818e34fbe3ac3b965e90d3ff"],["硬件智能安全(0x06)_/index.html","b6af37cc386299de9b0033c54c29bea1"],["硬件智能安全(0x07)_/index.html","373980b113d757829b7c0778e7c07a7c"],["硬件智能安全导航/index.html","cb0995ca3cdd3b04fbf6f09d257e4106"],["硬件智能安全（固件番外）_/index.html","697ed83fbc354a1aafcb0167bddba0a2"],["硬件电路构成01/index.html","e6dfa939d8b3582d0ee675d83d31cdc2"],["逆向-基础-笔记_0x01/index.html","f329f859d99a539cc43b7b71d6e5c034"],["逆向-调试-笔记_0x01/index.html","d389ce7ed88f70bbe01f3cc6576e4d76"],["逆向-调试-笔记_0x02/index.html","126076b4247687c57baad84d30cbd233"],["逆向-调试-笔记_0x03/index.html","7bfc3c22510f3e6822bf465d2dc1c7fd"],["逆向-调试-笔记_0x04/index.html","2f4402fd5fa644fb0529b3b518746880"]];
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








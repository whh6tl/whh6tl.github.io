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

var precacheConfig = [["404.html","91d1e8adef71c9a8303a11b2d6397df2"],["AMQP协议0_1/index.html","faeb4c17e6054d15ef24e15a0aa37852"],["ARM汇编01/index.html","8ce9c118acd3a2ee4f2f9c4999023344"],["ARM汇编02/index.html","73d46b5b403be96867470fbf45d8c067"],["ARM汇编指令集/index.html","2caa0a462045057e0115c1d5d8009125"],["Andoird反编译01/index.html","ad04cac6ed4358a82f5358ea45e47acf"],["BLE协议01/index.html","6acf7c4140f439b67cdf137760319c27"],["BLE协议02/index.html","b16f1a4f5c0c4817079c3fc16914d1d9"],["CVE-2019-5418/index.html","245060c27b90a0faec618ce3bc1454a5"],["CVE-2019-9766/index.html","6a23dda284ea721360d688aa799893fa"],["CoAP协议01/index.html","f3a1769023e55aa0632726870b2bdeb5"],["JS_0X02/index.html","22488c224e238f2392138eba9e718c7e"],["JS_0X03/index.html","0009faa99e3d78694d0f3873f8c732d4"],["JS_0X04/index.html","6d405b9ff96b74b512f4eea60b391c7f"],["JS_0X05/index.html","764d8e7922d8bfc67d1e0ace596df369"],["JS_0X06/index.html","a94f13d065f9d149155454a275b73041"],["JS_0X07/index.html","6c3fa2e6e641f81c86b2f08acf9999e6"],["JS_0X08/index.html","2e3cd5d2d56b7b7547c8eb17763833f9"],["JS_0X09/index.html","9d5e44474f0d48a2b9c957f8be35395d"],["JS_0X10/index.html","9f10c2f74c88d2a5d845288f8012409b"],["JS笔记(0X01)/index.html","4bd4a5727c346371c6e97535b41e9275"],["JT808协议01/index.html","147537325f3a2e6ba1f5341708171f7c"],["MQTT协议01/index.html","aae43c0ea13c2ce4bb45f63167a55d66"],["NFC协议01/index.html","27a8b00385f9eae7344e8998d6c63931"],["NFC协议02/index.html","109c797d065453776db55be8319dda4f"],["RF协议01/index.html","611213b1b446532176123dee9036c62c"],["RF协议02/index.html","d1c217103c5821a6ab179574f1496958"],["RF协议03/index.html","1bc1ec7646b00657712de7c0fdc5a652"],["Wi-Fi协议01/index.html","2a762451df61831cbf91cc553672239a"],["Wi-Fi协议02/index.html","36ea5a3f72019ab0f5fbd1934edf3f02"],["Wi-Fi协议03/index.html","adb42ca578f2593a5d850cc6cad7c0f8"],["Wi-Fi协议04/index.html","c6bb26dd49cffa2bffb16db7dc9bc60a"],["Wi-Fi协议05/index.html","04ad940895679b7aed6ab524bb9da29d"],["Wi-Fi协议06/index.html","e548229a8e364a69ad174593bd98126c"],["Wi-Fi协议07/index.html","7f2ae3538c9d3f778e3fbe1d93aec70a"],["Wi-Fi协议08/index.html","d2f07bac57032700e2e16f39a9b13aca"],["Wi-Fi协议09/index.html","2f30383e813bbfc88db6ee7884e9cb56"],["Wi-Fi协议10/index.html","9ef6b75fae6f9a03632022a4f355ddc1"],["Wi-Fi协议11/index.html","fdbb8d96bad0cec891317c330eb4d192"],["ZigBee协议01/index.html","9987ea9b533e83d699ee02c7eab0dec8"],["ZigBee协议02/index.html","63ca627bdebc480332b9c568236a87b7"],["archives/2020/08/index.html","2041cf4e8ae283ddb3f9dc04adf1f52f"],["archives/2020/09/index.html","f6fa47618234f8436a3295e81cf0bea9"],["archives/2020/09/page/2/index.html","d0de481fb57dfd1bb71cd48ede1d94b0"],["archives/2020/09/page/3/index.html","e52b35c03aacdbbc61e3ac6d3838c609"],["archives/2020/10/index.html","0e21ccc864c141b8989c70d703b720bb"],["archives/2020/10/page/2/index.html","364858f55a16fa483b71a01ff93f6211"],["archives/2020/11/index.html","2b2d7e5b5d853909ed3aba08348bdd9b"],["archives/2020/11/page/2/index.html","b9f706454c6fb7c6a22000b92e479fca"],["archives/2020/12/index.html","b25bb670390b569abfc3a5b7e563b9e8"],["archives/2020/index.html","bf7fd69258c82d8b8c670e55781fd6fe"],["archives/2020/page/2/index.html","d962e4ff34fb6ab292fa2a05c3114df1"],["archives/2020/page/3/index.html","9bf695b0090964bfc8b738ad111e6494"],["archives/2020/page/4/index.html","2135bf1297c97758dcdf7c8e1b891258"],["archives/2020/page/5/index.html","94cc3f8fa92b0340bec2c73046f545d9"],["archives/2020/page/6/index.html","068b9e89c7c46b4f5d715e8ac9d65be0"],["archives/2020/page/7/index.html","016ba3910790487aaa3a636de429fd47"],["archives/2020/page/8/index.html","71f48ccdd855becfcb3fd730e4c474cb"],["archives/2021/01/index.html","2717a0542500b509fb14e25c68af2037"],["archives/2021/index.html","3e88518b6630cd762732ef882915591e"],["archives/index.html","6ac0b189d9797dd6f3b78c7f4fcd6e8e"],["archives/page/2/index.html","b3e97594a233e418ac71c3c97e740e3a"],["archives/page/3/index.html","0bcc70d2dd3d4c74c3f601a30ef83e18"],["archives/page/4/index.html","413203421e38104d9f47971a8c964cc9"],["archives/page/5/index.html","62b2ce376afb521628ab670c6c66a3f8"],["archives/page/6/index.html","53dc1a3c6d251008a6b67fc3cf011a0d"],["archives/page/7/index.html","88eb490ddaae544697633f7dee6d89ec"],["archives/page/8/index.html","c394073b497ae8d823e4c022a72fdfbd"],["baidu_verify_code-74acARe7VV.html","e3f2278b79912a3032517bacde56124e"],["categories/ARM汇编/index.html","bde5d12ae30b2e314c2e8f08dab391e7"],["categories/Android反编译/index.html","57ae0de95380dda55110df747ab056ca"],["categories/CVE/index.html","cf505669858f434db97d621bd149c096"],["categories/JS学习笔记/index.html","b8bed320759a4de0bdaa41a601b794dd"],["categories/index.html","9a2cc8dcb2b18305472fb6350a4346a2"],["categories/x86汇编/index.html","eea4c2478b0a8f6d586ac4e3a0e38498"],["categories/x86汇编/page/2/index.html","1fd487455fc2dedfc41f80fc85f7d534"],["categories/固件逆向/index.html","80335daeb3ba43ecdd9aeee60c4a4859"],["categories/智能硬件安全/index.html","164899ec44d2f4b68a1fdaa3cad1c551"],["categories/智能设备安全分析/index.html","7022d4a4d51c09fd3d69422448484150"],["categories/硬件电路构成/index.html","cecfd2b807ceb1d27be8d8f8cd8583d9"],["categories/网络通信协议/index.html","6af9ce4817baf590b613437e1e5ceeac"],["categories/网络通信协议/page/2/index.html","1b93e9b580a6b7ef3a89de7957b9b944"],["categories/网络通信协议/page/3/index.html","36a58b4c8ea1986cde60eadcbfc05147"],["categories/逆向/index.html","e02c8da05a03553dd5c0efebde27c4a1"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","c7aea03d6508dfa51f1a7d0a5685c588"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","d4d3bf529b15a3341f6c6452c14290ae"],["page/2/index.html","be6daced2d57f96ec931f39d4cfd6c5f"],["page/3/index.html","d39328261ddddfef73972dabf3dce655"],["page/4/index.html","a50915c2214c0e1b60ed0307062e26da"],["page/5/index.html","27f877fec2ca23423bc58ec62c842dae"],["page/6/index.html","bd3eb3afe15bb4ba985eced640ff2ce7"],["page/7/index.html","cc0693856cfdb1f3f26527407ebb2a43"],["page/8/index.html","79e24ae2f45aa8d2b1d6c7eb7c6a874b"],["tags/AMQP协议-暂无/index.html","9ae93abc872e015f371546a61974e873"],["tags/ARM汇编/index.html","443e920f11ea090cf3d492d97cb20e2c"],["tags/Android反编译/index.html","3c9cb5ef82e938669a276c418195a80c"],["tags/BLE协议/index.html","4a0f32b8fc9293a7dd02a6699b50663d"],["tags/CoAP协议/index.html","125fe9cf88e62b78388cc1bffa3b4eac"],["tags/JT808协议/index.html","0ee1f319b450071502acdb7d2314e9bd"],["tags/JavaScript/index.html","55cf751a17dd26c79ed9b98826912c94"],["tags/MQTT协议/index.html","44fac8dd26da422ae34d98d3d9979493"],["tags/NFC协议/index.html","03fd13fb99a729a93b2a88c01212476d"],["tags/RF协议/index.html","8c3a23dca00c1817c7046c711bfd4802"],["tags/Wi-Fi协议/index.html","bc2d5c8572cdbceb9006c5a90104829b"],["tags/Wi-Fi协议/page/2/index.html","b849474b170a21e2611b54d589dab73c"],["tags/ZigBee协议/index.html","f0e965d1f51d461dadc30768f8d3cc2f"],["tags/index.html","0b31f13cc45bc93297520b425b91c038"],["tags/x86汇编/index.html","75532ec0f08a7ce08d968fc9d38057bb"],["tags/x86汇编/page/2/index.html","1024dfb72a0dcc400dd58939885f6b97"],["tags/固件逆向/index.html","d1442b6ff70ee01b8377baac06e23d21"],["tags/智能硬件安全/index.html","792e453adfb18e62b35c47b1553b983a"],["tags/智能设备安全分析/index.html","c6fd5f8282c19126a5a8f24c908a70f6"],["tags/漏洞复现/index.html","ae85138dc79cbb37e33442dde2d2ec2a"],["tags/硬件电路构成/index.html","1ca1fbf7700387ed917a130b98132bc6"],["tags/逆向（基础）/index.html","338955a871f79eda44f6a953041cdb73"],["tags/逆向（调试）/index.html","41334e9ddadd5e70ca08f02fda7d1071"],["x86汇编学习笔记_0x01/index.html","c54d9097c7b38539c8d09f2612895dcb"],["x86汇编学习笔记_0x02/index.html","c8b6231f41a4630e0383583e6a396009"],["x86汇编学习笔记_0x03/index.html","2ae803ced367066997c6ad92e2778fd2"],["x86汇编学习笔记_0x04/index.html","52a6fddf0d5aee955b7b3b47022c6d90"],["x86汇编学习笔记_0x05/index.html","d18cec1c740828ec00b453b1df41c00c"],["x86汇编学习笔记_0x06/index.html","dc38d30663b74a6f58873fa2fbce343a"],["x86汇编学习笔记_0x07/index.html","32b50045c24ff32015aed82b66858ac4"],["x86汇编学习笔记_0x08/index.html","27410502efe763921729ad62f0f5f686"],["x86汇编学习笔记_0x09/index.html","75a56e1a18723d663fb32091b66157fa"],["x86汇编学习笔记_0x10/index.html","e67304cbc1a7b8c95196837f7f01f1fe"],["x86汇编学习笔记_0x11/index.html","0f9153d4c368dbb869f5957779ae593c"],["x86汇编学习笔记_0x12/index.html","c0a62b36f927193de93b066434741b2b"],["x86汇编学习笔记_0x13/index.html","7916727153a180fc40b6fb30eb7860a0"],["固件逆向01/index.html","657250bbd2b6f45bb7093b5a1049cc0e"],["固件逆向02/index.html","c227664714fc25bf9d7219f0128c2eea"],["智能设备安全分析笔记(0x01)/index.html","7658c6afe9c2244891a56139e9fa45e7"],["汇编指令集/index.html","1fbaed5ea932ec300993ff524b4ca4f0"],["硬件智能安全(0x01)/index.html","4b78a05242d535ce2c5586413ad32523"],["硬件智能安全(0x02)/index.html","21c3264e16bf2a282ecbefc7ae19d99b"],["硬件智能安全(0x03)/index.html","4a186590b77c9da303d424f41be915ea"],["硬件智能安全(0x04)/index.html","d1cbf52f6cdf960943a5dd4983c5ee58"],["硬件智能安全(0x05)_/index.html","9b29b2523148439c21acfc4c7663fb92"],["硬件智能安全(0x06)_/index.html","ce00665b22997913b77cb6d7852892c0"],["硬件智能安全(0x07)_/index.html","12e760a1334b27b01c2b493a40f4059a"],["硬件智能安全导航/index.html","96351850d7ee52d014a86a438accf35f"],["硬件智能安全（固件番外）_/index.html","cf9477b52aae734bbc1a888e58c09f39"],["硬件电路构成01/index.html","5726dc3f0e91141f23c6c25a085ca7a1"],["逆向-基础-笔记_0x01/index.html","6db32b20d76ae1cf614f1851b153767c"],["逆向-调试-笔记_0x01/index.html","5da17547e1dcf2905932cb61694474b0"],["逆向-调试-笔记_0x02/index.html","356894c4f8ef283568a575cce9069491"],["逆向-调试-笔记_0x03/index.html","23518fc44286db4be7dc62b15a534bd3"],["逆向-调试-笔记_0x04/index.html","60b19a9b82c9a70606c824bb91b97d97"]];
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








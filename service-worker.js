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

var precacheConfig = [["404.html","ddb01c58046866e5991a3e8cca7c9eb9"],["AMQP协议0_1/index.html","5d25bbe238a39551c292b374ae73fb5d"],["ARM汇编01/index.html","ce43109d86d641e93ee4b8b44dd2b394"],["ARM汇编02/index.html","22a761df8160fdae5ed67329da335e26"],["ARM汇编指令集/index.html","9119af8fbe7cd8fb383d28c355d1942f"],["Andoird反编译01/index.html","54f81be4fbbbb1bb07961350555523db"],["BLE协议01/index.html","1833cfc31dee3d86fab0712fd2dbe879"],["BLE协议02/index.html","119b1572d0b0101f65ba8467ede5a0b2"],["CVE-2019-5418/index.html","7a51b5e8ce12e2a453e32ade7a065874"],["CVE-2019-9766/index.html","4a7a15195de02afe2f5d9e1a93a03d28"],["CoAP协议01/index.html","cbcbafe4afba46478c91cf7b12f4ba1b"],["JS_0X02/index.html","f5bdf38b3bdff6d49635886fb59f5abe"],["JS_0X03/index.html","70d753224e8e5f0386c698bd591ac256"],["JS_0X04/index.html","20252aeae59e1a0436633b465f4ac1c4"],["JS_0X05/index.html","158d6bdd2dbfcac455538a4028206533"],["JS_0X06/index.html","ebb8fba6b6bcf025e8b8ff1fffdd5650"],["JS_0X07/index.html","a0a6215b16d96ae24f593bf6f6f7e3bd"],["JS_0X08/index.html","86b4d055001d24a898add0a5d9b160e1"],["JS_0X09/index.html","e49ed31f4368accfb369490b08be4aae"],["JS_0X10/index.html","f865411a22f0b8a8efce3ba3ed480575"],["JS笔记(0X01)/index.html","66374232b032344b4f6826f4168209e4"],["JT808协议01/index.html","fc4ca22c56eff793d545ad477af9b006"],["MQTT协议01/index.html","78272d6e04e079f616be19090af87868"],["NFC协议01/index.html","6baacc6190c67ca9ae3f25f262239bbd"],["NFC协议02/index.html","f405ccd6ca20bba1ca4bd2938442751a"],["RF协议01/index.html","f0dfa208b196b1e42dcefdfe1e087628"],["RF协议02/index.html","09a4b2f3ad9243607bc3c2524fcd181f"],["RF协议03/index.html","fbc1cdbcbb1b4e966b408261264e1928"],["Wi-Fi协议01/index.html","fc8bc37c6420fbf27339f586b4943167"],["Wi-Fi协议02/index.html","5cf760465e3ab1d26abcf8a22fb0baad"],["Wi-Fi协议03/index.html","975471ec66c5e686cc6608fc28a7a257"],["Wi-Fi协议04/index.html","0b8a6e83e3a80eac1b9d238d0a1529e7"],["Wi-Fi协议05/index.html","07963f0ea66bd77b70f1cbabec37066a"],["Wi-Fi协议06/index.html","9bfcd99d1506f92548fbde8437e27824"],["Wi-Fi协议07/index.html","cdfbf4fd393c39cd414fa7529d15ecf0"],["Wi-Fi协议08/index.html","a67deecb8079a45e18c9c6ae8ba2a3e7"],["Wi-Fi协议09/index.html","b15734961183b4f7278e1f19988bb623"],["Wi-Fi协议10/index.html","f15d7ab2a681a0d8d7290a1b38ae5e61"],["Wi-Fi协议11/index.html","eb52d51adf71cdc183f22cfb0aa99bcd"],["ZigBee协议01/index.html","f76dca907e5285303c9622296f81aa50"],["ZigBee协议02/index.html","514b94d4d010a9b496a09e9701f79cfc"],["archives/2020/08/index.html","0703234eead5ad90e33e101461a427da"],["archives/2020/09/index.html","69cb18a83ceb47751b298f4ef3ef85ef"],["archives/2020/09/page/2/index.html","0f94425a52b6f34966c3d2651ee456ab"],["archives/2020/09/page/3/index.html","301ed5bfe450360cba32d03aac2add1e"],["archives/2020/10/index.html","9ac74c3ac04abc1d0bfe59d3b2adaec0"],["archives/2020/10/page/2/index.html","461b0ecc2edcfc768cb60c26e89abe7b"],["archives/2020/11/index.html","abcae6d163c2bb157695df3be7f68813"],["archives/2020/11/page/2/index.html","1a2bf8ac69e91760354d7931a47bb5c5"],["archives/2020/12/index.html","907621e80e3fd0e81050c17af0851ab2"],["archives/2020/index.html","4b23f79eee80271340f1878f10ba2a4b"],["archives/2020/page/2/index.html","299d86b87a98f94e462adb8cd4a1c3b4"],["archives/2020/page/3/index.html","81a0c90ad1e7382ea5f82867024aa81b"],["archives/2020/page/4/index.html","2955b209fadc3f941aea43efee04d9d0"],["archives/2020/page/5/index.html","eb0ee1c7aca68892d9f4f620ee5e229c"],["archives/2020/page/6/index.html","3078f55ba01d761bef15f6d4f23d4bf7"],["archives/2020/page/7/index.html","8d8af3a7ec4010dd0985559548a3d4b8"],["archives/2020/page/8/index.html","e6f4a9bc05dda5febef8742404023659"],["archives/2021/01/index.html","befc32f8c84e2e126900c27b1b27a21a"],["archives/2021/09/index.html","65e9017342ba20bcaf37fad5735f3ba0"],["archives/2021/index.html","8e097f176fbd1a3e2e42101e68fb687e"],["archives/index.html","cda2e99cc12ff9b648dbf2973aaf5c21"],["archives/page/2/index.html","a46c7f64b92a17518a86286a580f5e6c"],["archives/page/3/index.html","275b82d495bbfe0e50600e6fca616241"],["archives/page/4/index.html","43f2fac2f091a6743b9af89731f94eed"],["archives/page/5/index.html","387278cca92ba81686c3903337f9c88c"],["archives/page/6/index.html","44c2288a1476d8ae652b1a6238ffbaac"],["archives/page/7/index.html","d008ef429d4b6affe66a0483b4d9f63a"],["archives/page/8/index.html","23869652a498196811860eec1af07a85"],["baidu_verify_code-74acARe7VV.html","e3f2278b79912a3032517bacde56124e"],["categories/ARM汇编/index.html","7e05fe7e4dc1b950e8847c2fa2df0c83"],["categories/Android反编译/index.html","e9bd3bd8b7d9c0d188d2b4ee8d0968e0"],["categories/CVE/index.html","ba568a76ef3cd6ad16e854e183f1323b"],["categories/JS学习笔记/index.html","72b0389157a98a5a059e6c6f9b6a278f"],["categories/index.html","70cec43d317b6f8c3dafbc9a1874c4b6"],["categories/x86汇编/index.html","42f0177399a602c1645e4baaa6d65495"],["categories/x86汇编/page/2/index.html","8275484c9f07f21596f5f200267f9a2b"],["categories/固件逆向/index.html","911b9c16e4f34d14fc2ad61c2dc355a5"],["categories/技术分享/index.html","d30a95238b19133dc703a2de61bfc949"],["categories/智能硬件安全/index.html","7812dd1a4a5565a214d7f2fb08e2b08c"],["categories/智能设备安全分析/index.html","e6cde7e6409823cc55e2136ffc0c1d69"],["categories/硬件电路构成/index.html","3c4d10e4e435b6c099e2a3093cb157ff"],["categories/网络通信协议/index.html","3b3069ebb99f3baa47a62a40d4b2957a"],["categories/网络通信协议/page/2/index.html","171148fd18660aa705b572f346bd8b4b"],["categories/网络通信协议/page/3/index.html","8a6a59ab3997da696eb33a395bbdc348"],["categories/逆向/index.html","b742b7d306c3849ac5a2ced6ff2edcd6"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","8bbd728dda488b693f67c12312be079c"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","4831ee3445394d74393a3b7a35a1332b"],["page/2/index.html","35f025fd37b0721ac99c932877d0713d"],["page/3/index.html","b4295b5ba39b0cb9cf44e1a0c776ba57"],["page/4/index.html","fe5d5151def806a07e160584fcff68d8"],["page/5/index.html","a2027741be5bf95f5a81e04ae4bfadef"],["page/6/index.html","dde545d6210e3eeff49913cc972f93a0"],["page/7/index.html","60c2d53863a2e3c103827cb0ad822926"],["page/8/index.html","28375e6d5c21f2af97b8ce40b6183399"],["sec_share/index.html","d2fcacf0e26996053b0d77b05a6083a5"],["tags/AMQP协议-暂无/index.html","18014c2fb6bbb4dff14c79a1ff1ef2b2"],["tags/ARM汇编/index.html","1f4f7fa03d6c8ac0a2c12b06094cc874"],["tags/Android反编译/index.html","6f1be493182a1698480f2ab0ca3a9ab2"],["tags/BLE协议/index.html","b9e66d19fc803ccbf76362fdf35ab477"],["tags/CoAP协议/index.html","f08361ea713612db95d16972a4dbbeb0"],["tags/JT808协议/index.html","f6e3309acfc7e33f8fc346b67cebef8e"],["tags/JavaScript/index.html","4d6d0dda9d053ca9fd76933420ef2105"],["tags/MQTT协议/index.html","1abc566f129b3479c06a996cae19757e"],["tags/NFC协议/index.html","b58d05605c1ae8349a452df6a1ab87d1"],["tags/RF协议/index.html","9e291208966c818651cc3ffe85b2dc32"],["tags/Wi-Fi协议/index.html","3bc0476806c3092fc61455bbd6f403d1"],["tags/Wi-Fi协议/page/2/index.html","37d4aa962fac7c2887096d3550ea3c1c"],["tags/ZigBee协议/index.html","13ffb304a77f4c25cc3c4bdcccb8d50a"],["tags/index.html","a66dbc184f127d89b412126e1c92214b"],["tags/x86汇编/index.html","f86037b4b407e3069180115c424fae80"],["tags/x86汇编/page/2/index.html","70b39ecdf335858dc72f89322c4bc1bd"],["tags/固件逆向/index.html","c7e1a84480a309f6dcb3af1922742fd7"],["tags/技术分享/index.html","2899ff2c618daf0be04c9fa5aa3c7017"],["tags/智能硬件安全/index.html","49eea89af96d793f87c028a290bbcec5"],["tags/智能设备安全分析/index.html","99e010c207c36e10a068b0c5a52708a0"],["tags/漏洞复现/index.html","e8ef1dad08116e753b53e576aaac6d33"],["tags/硬件电路构成/index.html","87d60c7989cb23119231d2f195cd7c94"],["tags/逆向（基础）/index.html","3248a33c38ac4a8d4718fd86764de7c4"],["tags/逆向（调试）/index.html","73db19e2e2101c8336ce5007d21fa99e"],["x86汇编学习笔记_0x01/index.html","23570748320fc081841984e5abf9ae9e"],["x86汇编学习笔记_0x02/index.html","de32e79adeb4ad0729e92117ecda8c07"],["x86汇编学习笔记_0x03/index.html","fb462f09aa41009f42c6eab09d5421d0"],["x86汇编学习笔记_0x04/index.html","6bb37e7910aa1c76c8591ab122bbd719"],["x86汇编学习笔记_0x05/index.html","e6c8764c09da28a1a016847f4780bd2e"],["x86汇编学习笔记_0x06/index.html","cddbd28d7196fbf9db56a546127166c1"],["x86汇编学习笔记_0x07/index.html","fce6299dfe042a134aad053d3111b5f4"],["x86汇编学习笔记_0x08/index.html","96d6c0305b13b26fdebc6d7a197808cc"],["x86汇编学习笔记_0x09/index.html","b6910345e1ffb254971cf0ed94720f83"],["x86汇编学习笔记_0x10/index.html","7c2b623c59aadfe03317856b67cd983d"],["x86汇编学习笔记_0x11/index.html","f0bdf5ccded7e2f1e3002997084a4599"],["x86汇编学习笔记_0x12/index.html","eadc346ef7b38f1f547bc9bcaaf8de32"],["x86汇编学习笔记_0x13/index.html","c67dc54082f0dc2221599e94c1194978"],["固件逆向01/index.html","8edc30edc8f8f2934b575278f5b2486c"],["固件逆向02/index.html","d8df2466df79bb03c83eae5afc119091"],["智能设备安全分析笔记(0x01)/index.html","d7a73d8eca894e218980f741f5089fa9"],["汇编指令集/index.html","ff7a7f9d1bdbb92ac9da4464d79736a5"],["硬件智能安全(0x01)/index.html","614d9b28b881a7da0d35b5d0de82bdad"],["硬件智能安全(0x02)/index.html","0db18647b97ff4653f363a9949ad9bfc"],["硬件智能安全(0x03)/index.html","3cf403623b5261d56e26a6753e95d3d7"],["硬件智能安全(0x04)/index.html","0f759fd61f40f93894c6f5ac2cc966c7"],["硬件智能安全(0x05)_/index.html","098a9bc74269a2c93d167b9e1a75841e"],["硬件智能安全(0x06)_/index.html","730c42d5da4945695516418c39200f11"],["硬件智能安全(0x07)_/index.html","2d32558d1ecbab0ee40caf5b21481c58"],["硬件智能安全导航/index.html","a5c8d3b2f1b3346ac8a84196bbe84536"],["硬件智能安全（固件番外）_/index.html","fdb3595aaee2f588beb01b6ecab5f13f"],["硬件电路构成01/index.html","ef257e2c61985c824b23467aa2aade05"],["逆向-基础-笔记_0x01/index.html","effaf44cf1fdb235233553b35d56b508"],["逆向-调试-笔记_0x01/index.html","e0f8d1a06acb57085af70a9c80d88183"],["逆向-调试-笔记_0x02/index.html","a295c33db928245cbf0f82662cda6dab"],["逆向-调试-笔记_0x03/index.html","86fd7a94956ade9bed748c5067ca5044"],["逆向-调试-笔记_0x04/index.html","1f9965484c36a7249837d314590e5938"]];
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








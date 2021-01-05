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

var precacheConfig = [["404.html","83e4188082910fddb57a809eea8f39c0"],["AMQP协议0_1/index.html","c11dfd8ee608aae1c6d900bfe6530d2f"],["ARM汇编01/index.html","42b0e7b37784bc3c31de4e596a195d32"],["ARM汇编02/index.html","0571396c6949c9bd8e0b225eaddd9574"],["ARM汇编指令集/index.html","c1c1fc269f2b546f046fe790ba47d5bf"],["Andoird反编译01/index.html","5218d98ab9da4d839c8ced54f6f8b994"],["BLE协议01/index.html","9d407f8aa4f2b251de167fd22b1e93c5"],["BLE协议02/index.html","e4799657c8191bfcdcf08fa9dca1968b"],["CVE-2019-5418/index.html","e139aeb121064cd2b283e0651a49281f"],["CVE-2019-9766/index.html","86a2ab92ed8e42fd1cb7c7e1b6429278"],["CoAP协议01/index.html","5bef361528b6bbc79266a451aa24a0e2"],["JS_0X02/index.html","4a3075ad10902245d019b8ecec45fa54"],["JS_0X03/index.html","ef7f58bd7be6ba8c0473e98c23676941"],["JS_0X04/index.html","da14fc19534c7977fccbccf18e6ae9a2"],["JS_0X05/index.html","f218efdd80581e3ee6e5eb3d8460786d"],["JS_0X06/index.html","787ecdf43eb7a2b530770d20fb0f6fd9"],["JS_0X07/index.html","ab9f7ffe45fe817884a5666b47dca279"],["JS_0X08/index.html","55114d19ea4abc058283e052ec62f171"],["JS_0X09/index.html","461d6c92d6d4277caa5a496d4e5e1987"],["JS_0X10/index.html","6c0e218b9182ded67fbbdf1ea9951a32"],["JS笔记(0X01)/index.html","85b0089d4cdc0aa7e20d28edbfb36734"],["JT808协议01/index.html","7729d99806c036232fb0f544468fa3c9"],["MQTT协议01/index.html","b16479d8bcfe244204a685e7e9d7408d"],["NFC协议01/index.html","15d7eec428b542e1a390313706d56bcb"],["NFC协议02/index.html","13efd3b4ec427164bf9c3304ad306242"],["RF协议01/index.html","43b6f0b7ce62ce05a709d665f6493eea"],["RF协议02/index.html","94b08e683f63b885747d635d411a7fb7"],["RF协议03/index.html","87299678dc1f29f63b01c6f13c4663a9"],["Wi-Fi协议01/index.html","9eefc1f118c25ad5201ff2423a4e90fe"],["Wi-Fi协议02/index.html","62f2936d60f0d2f173e5c5e242016af3"],["Wi-Fi协议03/index.html","32d1152d671c1b1cc0b39b8954875be4"],["Wi-Fi协议04/index.html","c8cbe6df44a00e854774a05d4c0d1639"],["Wi-Fi协议05/index.html","7b8e758dea0836e44d71836f3fa6eb0f"],["Wi-Fi协议06/index.html","abd6b93ba5b8cb5d69bf133193dcd441"],["Wi-Fi协议07/index.html","b4522d3667ca1880e2302ef007561620"],["Wi-Fi协议08/index.html","f320f69d45ef1cfc22aca5dc69d81eee"],["Wi-Fi协议09/index.html","b4eafb6c112bfee52d983a5598ab057e"],["Wi-Fi协议10/index.html","8ff2a6db68d2926f2c2be7b51995af9b"],["Wi-Fi协议11/index.html","5fbec9a7375787f074c0e73e71bcb198"],["ZigBee协议01/index.html","675a75b0498666ddb5e9a8fa67e970dc"],["ZigBee协议02/index.html","9fdbf82934f713c7b971d309130f6392"],["archives/2020/08/index.html","2366fb0536b86fa20935897c5ddee18d"],["archives/2020/09/index.html","2c21b655687e7cfad34e4da1e3644659"],["archives/2020/09/page/2/index.html","47ff8688108e451a784eee1ebe12da4b"],["archives/2020/09/page/3/index.html","b56bb9900b426d72eb358070daba1e99"],["archives/2020/10/index.html","94178abb5e616f075eab3dc98c06ca0d"],["archives/2020/10/page/2/index.html","e6d0e5b955ac10e695b75b1cf1f9e701"],["archives/2020/11/index.html","0ec49738abdbbb04f61b7a2313fc50a1"],["archives/2020/11/page/2/index.html","5d65234f47648f940007256dc0704242"],["archives/2020/12/index.html","bd574db27478b4eae97a8f6ac7266c2d"],["archives/2020/index.html","4dbaf45b300d838af735a9f817c828a2"],["archives/2020/page/2/index.html","cd90ff31c1f76d99ec607646a73ba497"],["archives/2020/page/3/index.html","39703d5024e52643e9462162147fced9"],["archives/2020/page/4/index.html","fd5bf626f8edd97b041feca2b3000bdc"],["archives/2020/page/5/index.html","66d71b19d9db08ebe1f7f93b6f673c8e"],["archives/2020/page/6/index.html","bc997f99769d34deaf67476649860bca"],["archives/2020/page/7/index.html","3d61539bd913a311d835e36b46fc6575"],["archives/2020/page/8/index.html","cd874490063edc46402e329e72f86e10"],["archives/index.html","228c07a776de2820a140e2b7e85f055c"],["archives/page/2/index.html","c57b92872b2263867d4e2a7ed5e75529"],["archives/page/3/index.html","f4a1abb8ce0d8716f908632fcec1ff4a"],["archives/page/4/index.html","708208e273ff24bb50390bd4ed087b3c"],["archives/page/5/index.html","c621c521681fb99ffe43667ea2860daf"],["archives/page/6/index.html","b04b255d89ac444ddb9bbbdd28f26601"],["archives/page/7/index.html","d66965b1807fb1660994c2d1f6104215"],["archives/page/8/index.html","768072a65c9ce93c375ec496aff97c53"],["categories/ARM汇编/index.html","a615ff7d6b55a3ba3a947a46f4a52532"],["categories/Android反编译/index.html","2a4eb35edee3831bc52faa3aeda554a4"],["categories/CVE/index.html","6e12e85a9a7999461a5485069697c393"],["categories/JS学习笔记/index.html","b11babe8ccc53f72bcde27ca3c75fbc1"],["categories/index.html","832d5eebfc9b5678ef08da4b99d65594"],["categories/x86汇编/index.html","aa6b0d3355affbc9e3fa8fd9c40bd0e9"],["categories/x86汇编/page/2/index.html","706cc4055cfc1a9c48b51a07ea478e5d"],["categories/固件逆向/index.html","428f4a5cf2047962ccd5a035f9185c09"],["categories/智能硬件安全/index.html","dbc4f05544aef91fefef1516a3335b21"],["categories/硬件电路构成/index.html","e775c19521d04a0627f2093b102cca17"],["categories/网络通信协议/index.html","1482dbbc2135675629031bd7190df6bb"],["categories/网络通信协议/page/2/index.html","955278c189c236dbdfa6948efa7935ea"],["categories/网络通信协议/page/3/index.html","55f690f328077308a50d76b6e7216ba7"],["categories/逆向/index.html","55ed5eb2c81667decbd3d79ac310c08a"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","6fa7f27d21b85b247e5faee5a8a62413"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","2db3b5f324de76e94e74664555e5e4ed"],["page/2/index.html","3e6244d79ae7e32a9f160baaad6515ff"],["page/3/index.html","3da4f92508b3e4e85198143cf7663f45"],["page/4/index.html","13ca60d0b8b1ce9ac1c66e0df30f0375"],["page/5/index.html","fd11dfb2e083e747be7c64edc65cb1df"],["page/6/index.html","6544e7a95fb64ffcde807c67fce347e2"],["page/7/index.html","ddfedf62db6166d650dc35943f734271"],["page/8/index.html","256e67f20619518c32c0b73d80e003a5"],["tags/AMQP协议-暂无/index.html","e1276bd19651bef7aab36a752e91de29"],["tags/ARM汇编/index.html","7d2d78b746c6e163e721d0f4418ae07a"],["tags/Android反编译/index.html","774b78f046da03e6ff80689029d5ed2f"],["tags/BLE协议/index.html","86676b7ae27cecc8b88f92f1e90b94a5"],["tags/CoAP协议/index.html","7fb3a60df9e8d15b92e7fd1ef7bd16b4"],["tags/JT808协议/index.html","35f2ad8593bf1f3d0ca492854d72d384"],["tags/JavaScript/index.html","dedaec571523ca520c4dc79f2ce34613"],["tags/MQTT协议/index.html","693fd70594a07b78b58d3f26b547cf84"],["tags/NFC协议/index.html","52e5445681f5e04bb82b908964eb30e1"],["tags/RF协议/index.html","bcc2ccf007c01cd08709e360c59add54"],["tags/Wi-Fi协议/index.html","29b7e721051d0558204595c97b261de5"],["tags/Wi-Fi协议/page/2/index.html","4b185364cca0ff10af57ba1e1eff4022"],["tags/ZigBee协议/index.html","5e96b27a7bacccfc95104c5d7b833645"],["tags/index.html","0b552c58721e1d410e6a523eff3e0a9c"],["tags/x86汇编/index.html","754f5f41398b4567d81e57daecc60696"],["tags/x86汇编/page/2/index.html","b28cb8892655b5b43e6607537a206b4d"],["tags/固件逆向/index.html","ef066febd193aa3b6690d6d9f38c0c17"],["tags/智能硬件安全/index.html","2eed06214b7c158f1218f1d27c0ac237"],["tags/漏洞复现/index.html","3f8da69ec9355553ebecc40729a14de1"],["tags/硬件电路构成/index.html","cf6bbc253747d119c74b3c02172da79a"],["tags/逆向（基础）/index.html","21da22d2c681f4f7b1d2e553687b33e1"],["tags/逆向（调试）/index.html","282cf56eb65ebacf92240f9164ac1aa8"],["x86汇编学习笔记_0x01/index.html","e1ee14a46338aac438ca5eebf015d89e"],["x86汇编学习笔记_0x02/index.html","85fc9756af55579b7ce79656c8b146c0"],["x86汇编学习笔记_0x03/index.html","7b21ed487701ca9294145ae9cfcb23ac"],["x86汇编学习笔记_0x04/index.html","83a04e1d8f345c25c7d06174d35f0f97"],["x86汇编学习笔记_0x05/index.html","36b9c582591053f815b6af836e1e899b"],["x86汇编学习笔记_0x06/index.html","99b9cd60c9a54284a4e8a92800a43685"],["x86汇编学习笔记_0x07/index.html","624b0bde87bcbc569de4b3edc7da532c"],["x86汇编学习笔记_0x08/index.html","6ebb1d9f7baefdbc5d8dd88e59a78ba7"],["x86汇编学习笔记_0x09/index.html","e413880c5bdd8b0537920598662a7551"],["x86汇编学习笔记_0x10/index.html","3a9979156bd63eea014effc5ae8f5595"],["x86汇编学习笔记_0x11/index.html","8c131782b2e3d61f86fd06762d5aca9e"],["x86汇编学习笔记_0x12/index.html","cf874173444c5008e4a32144ac6e96f2"],["x86汇编学习笔记_0x13/index.html","3acd0e9b4c02313b0a023de071dfbeaf"],["固件逆向01/index.html","f964af658d9dbc2541f95f30351d73d9"],["固件逆向02/index.html","032fb07f94ce2170861d132ef873bc8e"],["汇编指令集/index.html","25972c0c451520c1ab9ad71f5a915d18"],["硬件智能安全(0x01)/index.html","4df189a864a1ed88e2a288d6570db1e2"],["硬件智能安全(0x02)/index.html","4370747bf515b95bdd4d861024e37ec6"],["硬件智能安全(0x03)/index.html","71dc518d4b9bafeb8eafd41a23aa0e7e"],["硬件智能安全(0x04)/index.html","3c7fb6f1060674630c5238a800ce5add"],["硬件智能安全(0x05)_/index.html","8f42eca35bd64379f6f6c61268711d03"],["硬件智能安全(0x06)_/index.html","fbf185fcf24802f4558734db915fbd1f"],["硬件智能安全(0x07)_/index.html","41e930392b38ea62909686d6e7dac5ef"],["硬件智能安全导航/index.html","4ad8f5932723742fb33db51df58c0627"],["硬件智能安全（固件番外）_/index.html","b3f9f6b0f066e9dbb2e9a76158bc3569"],["硬件电路构成01/index.html","aed4d16265d6133e4233b7aee349f57e"],["逆向-基础-笔记_0x01/index.html","a4a796397541014fd46e1309c8728fa4"],["逆向-调试-笔记_0x01/index.html","6c980d055c25338feecd26e28eb308cb"],["逆向-调试-笔记_0x02/index.html","d5028afdd18e91023a7c20471b8e8750"],["逆向-调试-笔记_0x03/index.html","9cd0b0ff7635f97488252c1142436453"],["逆向-调试-笔记_0x04/index.html","9f6f090bc445283d8413da11b21ef162"]];
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








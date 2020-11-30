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

var precacheConfig = [["404.html","779ef52404fb9a76f03d5a652035acf9"],["AMQP协议0_1/index.html","a49776a0e0466e9ee09ce1eef08fae84"],["ARM汇编01/index.html","c757d22b58d646b4f200051c17b76f1b"],["ARM汇编02/index.html","27d98ceacfeeab8c55a478a7caafec1e"],["ARM汇编指令集/index.html","bebecc2ee5461543b4e3e052a921a52d"],["Andoird反编译01/index.html","a09fb5826ab1de8d898ab08c3e1eccf5"],["BLE协议01/index.html","45261f62f166bc38ffec3bcaae301afa"],["CVE-2019-5418/index.html","5091292f921fb10e8b8654ac7ccd92df"],["CVE-2019-9766/index.html","6439cd3fea5b25603dd95eb642d88349"],["CoAP协议01/index.html","2cd7d474268318b1f4179f3673444994"],["JS_0X02/index.html","48f52dbe92a8bd21c3030be7ee1d952a"],["JS_0X03/index.html","23a89ee9cd9f38b6bb1d4f8a967ef72a"],["JS_0X04/index.html","ac2243c4b6f57f5aa1917a172a8712a9"],["JS_0X05/index.html","9027df40337a86b719e456d66460c382"],["JS_0X06/index.html","a89f8a3e1c4f92fb66ad0f2536347583"],["JS_0X07/index.html","6f25748d38311820c1a9a7bcf8eda70b"],["JS_0X08/index.html","4d87043303d1323c4b57c48eb9406f18"],["JS_0X09/index.html","49bb4c6d73b02a43589eb4f75e8450c0"],["JS_0X10/index.html","c2efbf97b3e9441b215cb79f2f4ac38f"],["JS笔记(0X01)/index.html","d87f96700f6bde11081a89c8eab75574"],["JT808协议01/index.html","3e07490fff1652a33d9779ef5e4e06b4"],["MQTT协议01/index.html","6701b38bff8022d9f1de9319b7c0c0c7"],["NFC协议01/index.html","4d38e1b29d9f0e016eb7e5b301527c1f"],["RF协议01/index.html","d10896d09288cf26a912685d9236de9f"],["RF协议02/index.html","e25a8d998602a72d7e0f522f9dbcef6d"],["Wi-Fi协议01/index.html","300043d07f09b687d8248eb17cf1354c"],["Wi-Fi协议02/index.html","be9211a82abc63962f18b64e0187a3e5"],["Wi-Fi协议03/index.html","e7ef26ab441a6760dc80ff2118912dfe"],["Wi-Fi协议04/index.html","b119cf076f59862ae3a9435104f1776c"],["Wi-Fi协议05/index.html","3aaac14b93d2dd9b05282a922e538a2f"],["Wi-Fi协议06/index.html","0d7cf620909ed94303dca416037413f8"],["Wi-Fi协议07/index.html","babde387cc64e7c9d25e237fef67c4b3"],["Wi-Fi协议08/index.html","0d927304dd6ff9dbb9078966a19418e6"],["Wi-Fi协议09/index.html","b4018a43900790ea00a82e7455b066b9"],["Wi-Fi协议10/index.html","3339c85175f788b330bf576662d552d4"],["Wi-Fi协议11/index.html","d12e4d863cb0a77467accecf8dda6987"],["ZigBee协议01/index.html","da45e8df52f58e50c6a64b1a120ddd34"],["archives/2020/08/index.html","5e9ca32bd2547a45da8ecf2516859c8c"],["archives/2020/09/index.html","9ea27b7ff2930d684d084fd4a75d4656"],["archives/2020/09/page/2/index.html","bf9cf35224951db0c7dc392bcc3e6d49"],["archives/2020/09/page/3/index.html","cfecf193a2a1510e70c512bc583dffe2"],["archives/2020/10/index.html","e158ed72fc74638b441551cbf4617ba0"],["archives/2020/10/page/2/index.html","a4a61c501af97da047db0f56ccb463f5"],["archives/2020/11/index.html","5a7f947a88714cf0759d9114e034c81e"],["archives/2020/11/page/2/index.html","311e756d99eee936034b297d0e1552d2"],["archives/2020/12/index.html","1db114c2e311b45d97f97aff536add15"],["archives/2020/index.html","8733fbf20027ace1d8b8c055d7e6cba6"],["archives/2020/page/2/index.html","27d9b5cecf710e836c305080159ce730"],["archives/2020/page/3/index.html","8109409ef95b507ce7f4ed564826203e"],["archives/2020/page/4/index.html","56868d3abcd8692c93b102b58629458c"],["archives/2020/page/5/index.html","593a6e36c2babe7dc0b95fe6b2b03668"],["archives/2020/page/6/index.html","a7c4f95022ccc185c057a589ee64fe93"],["archives/2020/page/7/index.html","5dc9381f3f6c3467340c2d384d4cbb09"],["archives/index.html","701f09d525d4e8bda81886b9e0f757b8"],["archives/page/2/index.html","7de0100bee08186917718f83846be8e3"],["archives/page/3/index.html","58a289a6a8deec72cc4c29d397bc7ab2"],["archives/page/4/index.html","e20f89a0ab15ec6803ce094ca278eed6"],["archives/page/5/index.html","877ec0c83f729ac8ca0a856efd590bfe"],["archives/page/6/index.html","1b6cff851e3742fc513cd3eb07d68faa"],["archives/page/7/index.html","ad7a90a62655fb8d2f6b4bf6a7346b38"],["categories/ARM汇编/index.html","e2d2488369b0edf289cd0b41ce507661"],["categories/Android反编译/index.html","4f1a458119c9277e0c88cda8f0115ba5"],["categories/CVE/index.html","1376de0141685dfcfd761f21908860cf"],["categories/JS学习笔记/index.html","fb80a3534b2fc6c7f6945fa882c0a533"],["categories/index.html","e964a97fa762ad9f65a25c1d8986d632"],["categories/x86汇编/index.html","f833fbbfa26937ed6afec7e33e844e3d"],["categories/x86汇编/page/2/index.html","0a77a9669128a4ac657a2d76908ef16e"],["categories/固件逆向/index.html","1d57cdf54f18699a87f6e55305baff04"],["categories/智能硬件安全/index.html","769b359ffb8a1285f782a390d9eb0460"],["categories/硬件电路构成/index.html","0c28f236a745f1d5fcb7e979b2b3aefa"],["categories/网络通信协议/index.html","8aa19e3941b45f481c6e4d7c99fe0406"],["categories/网络通信协议/page/2/index.html","8beec1232f7ea34e7dd6cfbb05915d2a"],["categories/逆向/index.html","6b57065d3e9bbd708ff2d71f0fc3fbca"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","aa5a64b36ee96d4528d3dafd0b93a24a"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","cc95a0667e066caeca792d338a5fbadb"],["page/2/index.html","4de09633bcfa9094c43a2b15005a00d4"],["page/3/index.html","fec32a88fd8eda6071b2a548bc92cd8b"],["page/4/index.html","1e0c26b006308b669815305a8123011a"],["page/5/index.html","ce0fd9d4152c54142593e808a38c6897"],["page/6/index.html","54bad037c84c34422f5f18c62f41913b"],["page/7/index.html","df3df4d3a46e2232421581037f53936c"],["tags/AMQP协议-暂无/index.html","5b011edbce1b368709bcb3c3872c84e0"],["tags/ARM汇编/index.html","c640130394b78a40f81cad298e8ffc71"],["tags/Android反编译/index.html","78766df4b43ed7d5828520e862e39b0b"],["tags/BLE协议/index.html","c795d33c6b703d7eaf83970d86632103"],["tags/CoAP协议/index.html","6d5a25983110ac2c96da2229981742e3"],["tags/JT808协议/index.html","cfe641845023fd24a8f309e98b41ce4a"],["tags/JavaScript/index.html","4fcad960f3983c035a2f8cb80b5639c4"],["tags/MQTT协议/index.html","84ddc053c4e2529fde0ddae6a24a072f"],["tags/NFC协议/index.html","9c459ef825c45f6ea0a5d862177677e6"],["tags/RF协议/index.html","64c6ededcdf51b9cd5dd8c7b3fc80982"],["tags/Wi-Fi协议/index.html","be6cf24387db6efa7fb2fcbc72970a4e"],["tags/Wi-Fi协议/page/2/index.html","1772a91d3905ec722d8acb65b8a5d202"],["tags/ZigBee协议/index.html","d7c15bc7a5aa1c6de5a58c817e9c35fe"],["tags/index.html","9ad8a6a83971340ede98c22234dad556"],["tags/x86汇编/index.html","65861c76d9598badc108ef5347e62875"],["tags/x86汇编/page/2/index.html","e607fbdc36b187d2d9459f8df94bc1df"],["tags/固件逆向/index.html","1b8eb4d45b7cb9eface747665c47da81"],["tags/智能硬件安全/index.html","a45c5d3b6ab5972d6af1e40e1f10fc8b"],["tags/漏洞复现/index.html","3805f29a134b1a43bac2be0164cb4456"],["tags/硬件电路构成/index.html","985d43d9866ea914c7e196f633e0ee24"],["tags/逆向（基础）/index.html","7292d429b322e9e921095126f6491065"],["tags/逆向（调试）/index.html","287779b7f291eb8234e37a1ddf0469ca"],["x86汇编学习笔记_0x01/index.html","c30f2c170bc119162c394b32ca887ae0"],["x86汇编学习笔记_0x02/index.html","6be6dd715a5b23ccaed0795dbe015a26"],["x86汇编学习笔记_0x03/index.html","55f3ccace8ff7065cd642896fefb8b66"],["x86汇编学习笔记_0x04/index.html","accbf07096884ee41aaf9c1902bfc4f3"],["x86汇编学习笔记_0x05/index.html","d9a632bb54c172747399a6ec696816d5"],["x86汇编学习笔记_0x06/index.html","25394cb714019a04868259daad760ba5"],["x86汇编学习笔记_0x07/index.html","283d27c96263ce0a6e91ed993ac93b67"],["x86汇编学习笔记_0x08/index.html","547e16fafce2b51b4673458ccbd6d422"],["x86汇编学习笔记_0x09/index.html","d291d9cc339c8db36b9a963c95a2c8ec"],["x86汇编学习笔记_0x10/index.html","f0e37d0b0af06e373f2c3b21c7ad01aa"],["x86汇编学习笔记_0x11/index.html","3a9394881d2b9b1cb27730511d8b487f"],["x86汇编学习笔记_0x12/index.html","8e99cd24f7db650e8f3fff3b9dba551e"],["x86汇编学习笔记_0x13/index.html","af965c878d8f7448eeb83dae57116dc3"],["固件逆向01/index.html","e5e21894396a7089b3a9f27cff959451"],["汇编指令集/index.html","5e820169fa58271874d13486f021d4a4"],["硬件智能安全(0x01)/index.html","5398cb12f1f704bd1d84d2e840554c01"],["硬件智能安全(0x02)/index.html","a87ac02950824ecfe57e4bb7960a0d81"],["硬件智能安全(0x03)/index.html","970d71b0f56b98b2ab3bf15168515b5b"],["硬件智能安全(0x04)/index.html","67814833e18bae525f73567c2ea037f4"],["硬件智能安全(0x05)_/index.html","deaed3ca55b8c4a7156f589677928484"],["硬件智能安全(0x06)_/index.html","f4970a4b8ae0e27eee5551975753441d"],["硬件智能安全(0x07)_/index.html","7bec735eec7c9ce8e6be7284946785e8"],["硬件智能安全导航/index.html","e41c6bf47c796fd5cd2e2a0a1ae182e6"],["硬件电路构成01/index.html","0e4cd7453d6697db31976eab7fb1b357"],["逆向-基础-笔记_0x01/index.html","10856de5fb2e51427fd3d747cf11ed7c"],["逆向-调试-笔记_0x01/index.html","d141540f0fc7c85d055a82a5ebb8dfcf"],["逆向-调试-笔记_0x02/index.html","714b5a9fc49592b533b9a2bab057bc56"],["逆向-调试-笔记_0x03/index.html","47b8500437a569dceda55c0283a0a0b6"],["逆向-调试-笔记_0x04/index.html","2afc16670c1f9902a22aba2ca16338ca"]];
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








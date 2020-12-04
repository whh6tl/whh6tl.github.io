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

var precacheConfig = [["404.html","8f1b23c13b10988d538c88bb7291878f"],["AMQP协议0_1/index.html","dcb3237852cddb4113f1692da99f667a"],["ARM汇编01/index.html","66d4f96648352c243753534f0a82ecd0"],["ARM汇编02/index.html","771263f2a0d7f87cbc8beb45640441a8"],["ARM汇编指令集/index.html","245805be88f2e1656545a719940edc91"],["Andoird反编译01/index.html","0756722d2be9011f97f076b9fac26d6a"],["BLE协议01/index.html","97bfc37eaa73d581940b70244cdf0cf1"],["CVE-2019-5418/index.html","cb55dd1ea1c61540011e788ed47a2111"],["CVE-2019-9766/index.html","87a14ee7cc796a55946560eb25e06cd0"],["CoAP协议01/index.html","3e3c3eb6b7e76bb798031a3bf03f8f56"],["JS_0X02/index.html","b39d45a076ad3ed7ac19be582eb228f9"],["JS_0X03/index.html","f0a838bf06a646e509f091fc840886ec"],["JS_0X04/index.html","d838f1ef4d86746d9be00aabb8b778dd"],["JS_0X05/index.html","adf362d964df054af5f700e97f2150d5"],["JS_0X06/index.html","62a04ea8b78257d549eb2de369543c2b"],["JS_0X07/index.html","849e909f5d0beed36bf644382ff74274"],["JS_0X08/index.html","b750180e1121a89724b24831d19db4c6"],["JS_0X09/index.html","c57342cdfcfd0500de13a5d1efceb193"],["JS_0X10/index.html","f54e1eaf89ce647a1fa95a9ce489d60e"],["JS笔记(0X01)/index.html","46da328c036fc64c780b77ee980beac2"],["JT808协议01/index.html","257503256c5f61f720045ad40771dd2c"],["MQTT协议01/index.html","91553a620564bee767f569e7b144d18e"],["NFC协议01/index.html","c1cf0c74d18cedb375b206ef12eeafcb"],["RF协议01/index.html","44bfba788d19a0aabd8bffbb2f863a81"],["RF协议02/index.html","b6a8090cca788725ccb7738525e38ce1"],["RF协议03/index.html","e7e16064f319add2194c790b651829e1"],["Wi-Fi协议01/index.html","aeb89e33ed6fd61653e5ae278e7a388c"],["Wi-Fi协议02/index.html","e1382732a740fc9ac11833a9a1d38597"],["Wi-Fi协议03/index.html","b9bcf7cf6e9a753d12ecb6ff9ae805c3"],["Wi-Fi协议04/index.html","36583304718c625d92ba156c16a30d8c"],["Wi-Fi协议05/index.html","1f5930515715c8b283a11efce734e1d6"],["Wi-Fi协议06/index.html","b67020b5ab6fbfff8720f6e8751b2003"],["Wi-Fi协议07/index.html","c07ea2024c3c8de20264ac0cd415a80f"],["Wi-Fi协议08/index.html","63fc2ce2e72b9440ef4979e4fcc880a8"],["Wi-Fi协议09/index.html","d1a3d285334df7620f10709c48f67870"],["Wi-Fi协议10/index.html","552297e5189574aa6f2db4833f8e8a2b"],["Wi-Fi协议11/index.html","f5add0ce323528344f6941964825bd3d"],["ZigBee协议01/index.html","9add73aa8b6265a211126a89944aa2d7"],["archives/2020/08/index.html","9f4028caf4f80c232fdad68b7411adcb"],["archives/2020/09/index.html","9a50b266aece0bf6c6493d890838c886"],["archives/2020/09/page/2/index.html","66cc28067a0b97761431a4333f88d743"],["archives/2020/09/page/3/index.html","d3f9e7c17bb6324e63bc3d4955c2e6f3"],["archives/2020/10/index.html","1876fbfa4714df2eacb8c2bfd119f310"],["archives/2020/10/page/2/index.html","cdfc2f0139ad19e020311918ddfcbfd4"],["archives/2020/11/index.html","b018d6b19325401425690ece4f015bd3"],["archives/2020/11/page/2/index.html","1166ce988f4e46af096ab7a1205fa07f"],["archives/2020/12/index.html","9dae2ef369d0a814c4f7c838b118962a"],["archives/2020/index.html","8304d2e95917063473f430a2dfd18edb"],["archives/2020/page/2/index.html","546b7dec43fa04165ef4d44d14554f4e"],["archives/2020/page/3/index.html","90f9a40999b111a8009c6b958b79febc"],["archives/2020/page/4/index.html","adf3f6e193603a7a619ff6ffb9be5978"],["archives/2020/page/5/index.html","e43b0a154b8a420ea4f58b826c621922"],["archives/2020/page/6/index.html","47ac152c155ef3ed5e7a04067367665b"],["archives/2020/page/7/index.html","947fc424f823ee198b7cf37b7f92683c"],["archives/index.html","3899c4c6a63f615d1f402987e380247e"],["archives/page/2/index.html","5ffbefd67d18b5bdfb562f9d0f7c994a"],["archives/page/3/index.html","77e67a45a6edf785c60a2ee97c9cf5f3"],["archives/page/4/index.html","aaf52943182c90a9c97c39a10e19cc1a"],["archives/page/5/index.html","cd13938c27cb2c990a93bd87564caa7b"],["archives/page/6/index.html","0937139a7df2783f9b6fca504df1a4b0"],["archives/page/7/index.html","6ef34334cfaf9424287ae1d523f9df2d"],["categories/ARM汇编/index.html","fb303330c18876d6538b566f2d293da3"],["categories/Android反编译/index.html","a36c1869a314175f6dece40a175d157c"],["categories/CVE/index.html","0d6b7d1715eadba073f28abff64db8b3"],["categories/JS学习笔记/index.html","7a1d3013dbceea1ace0d454a94e946b9"],["categories/index.html","219918f8237f4d89aa0a75e6135f86d9"],["categories/x86汇编/index.html","6af0ec8928ed1fb9bc3ccf1e83be36f2"],["categories/x86汇编/page/2/index.html","82982291b9efd7b5781d086d07a96137"],["categories/固件逆向/index.html","8183dc28eb899a43c1918b6ea5887d0c"],["categories/智能硬件安全/index.html","a2e56ec0722b1746cf8868707c4bada9"],["categories/硬件电路构成/index.html","890dadc511e6f7b9a116a0d81d7571b7"],["categories/网络通信协议/index.html","4d3f6a3bee43710d73ebe1b076bf995c"],["categories/网络通信协议/page/2/index.html","b0e60ee478de7cddfe3e4bb8fdf65847"],["categories/网络通信协议/page/3/index.html","31d949a36570d666dca23b33ecbc2397"],["categories/逆向/index.html","dc03f57f133ca83ae296a83d14d88f52"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","a16409f61817e13751ac7eebae6ccf40"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","a080f182aaebffaf53aae09034956e92"],["page/2/index.html","4f7a49821d48ca4839a5c5b754a0e88d"],["page/3/index.html","df189bffbbdd315082575376e01ebfe8"],["page/4/index.html","7f09346d3cdf6a3c4c2f9654e9d055f8"],["page/5/index.html","3474d9429b64e0a2e9b4884c590e59c9"],["page/6/index.html","76ceb15581441222782f27cebec0962f"],["page/7/index.html","bdf074ec24546131df0adfe75d8fc75e"],["tags/AMQP协议-暂无/index.html","bf42cf9b3e8ceeb3e03d921f20756392"],["tags/ARM汇编/index.html","2bb9a871aa558d4417e17a031c3ecc20"],["tags/Android反编译/index.html","0fa79660c44c31f391d0073e23618428"],["tags/BLE协议/index.html","ed057c29dfda99e2940b70a3793d4998"],["tags/CoAP协议/index.html","44594feccf2346fc2aa70612078aa8ee"],["tags/JT808协议/index.html","fa8b05cfb431ed09a503eaf64405e132"],["tags/JavaScript/index.html","79046b0b36d80298d06e33a0d94a387f"],["tags/MQTT协议/index.html","60002d34fe1b8e5967989f27f91a22dd"],["tags/NFC协议/index.html","9bc21be304c9fed34b7657a3b7ce9b99"],["tags/RF协议/index.html","cd1d611a1299813cdc267f59f5f85073"],["tags/Wi-Fi协议/index.html","37de65a19177a50934397d6deac4bcf3"],["tags/Wi-Fi协议/page/2/index.html","ea19d15c74902f2d1a04bc61d73eb9c9"],["tags/ZigBee协议/index.html","dc2439d575f688930663ccc19e144e77"],["tags/index.html","d60391b21b617e500c0c6579b177423e"],["tags/x86汇编/index.html","0f2268bac3e10e99534ab70555319553"],["tags/x86汇编/page/2/index.html","faefa15198e761477d4900da8450798c"],["tags/固件逆向/index.html","ffc3f0580c78f4e92fb247ab9d7ac462"],["tags/智能硬件安全/index.html","6beed566cb29f55da72c664a7dffa190"],["tags/漏洞复现/index.html","22b14e1923e3170354d710a553514ef9"],["tags/硬件电路构成/index.html","af5543cf7ca47e0caf2ec2de3d6dcaf5"],["tags/逆向（基础）/index.html","cb4cac18d6f8f7563565605923bf42ab"],["tags/逆向（调试）/index.html","f399d381401ea5e41b456932bcadb9ae"],["x86汇编学习笔记_0x01/index.html","1f9d32b18b7a81f5aa693d7651485b69"],["x86汇编学习笔记_0x02/index.html","3b24f65fe85e0a024dd716b806d29867"],["x86汇编学习笔记_0x03/index.html","7f5ec4eeaeb1b3e692ac7332c6e03df8"],["x86汇编学习笔记_0x04/index.html","4a4398b532cb48a58c99f2e994c2166c"],["x86汇编学习笔记_0x05/index.html","a74d9e8d171233c7c59959f0e6587934"],["x86汇编学习笔记_0x06/index.html","d58f0dfe2d8f109a194f1c75ec88cd08"],["x86汇编学习笔记_0x07/index.html","f45b4a3960ae72e8a0806bbe1ca699cf"],["x86汇编学习笔记_0x08/index.html","69ded386d34baa16d907828ae9f42c89"],["x86汇编学习笔记_0x09/index.html","58a1a886acb438db106f6f1a9e282432"],["x86汇编学习笔记_0x10/index.html","a52594d738a6ffeecf31f65fb81b734e"],["x86汇编学习笔记_0x11/index.html","ac648742826052b966ae339e12b1aa78"],["x86汇编学习笔记_0x12/index.html","e5a7fd182f95867f65a52ebefc064e74"],["x86汇编学习笔记_0x13/index.html","035810a70947e470df026838dc7ca403"],["固件逆向01/index.html","ae2cc6d0b12a3fa81e508f6cf6d336c5"],["汇编指令集/index.html","1a2972993b4be5a1356846514a2c9e45"],["硬件智能安全(0x01)/index.html","9961e7ef25e8e628abb9f73630c0f583"],["硬件智能安全(0x02)/index.html","78a6c375e70a9118375332c29ff32614"],["硬件智能安全(0x03)/index.html","da088422aee08fcc22fdf9d96a0674c4"],["硬件智能安全(0x04)/index.html","3b6799a32db5ce68ca0ded02166d434c"],["硬件智能安全(0x05)_/index.html","35579bd90f2a4f23b6c465c62f3a149d"],["硬件智能安全(0x06)_/index.html","6165cf345c428dc212593c1f08178856"],["硬件智能安全(0x07)_/index.html","78aae317b81e4995f8d4b8c795813b7b"],["硬件智能安全导航/index.html","09513a0a0a3fe257265a37d9b7f22b8c"],["硬件电路构成01/index.html","8f420b3c4f06f0c406a6c834f41e35a5"],["逆向-基础-笔记_0x01/index.html","aae3c23f00dd2e1ecec2ac3e586e5a77"],["逆向-调试-笔记_0x01/index.html","fa45f0744b97a9c74b167ddb0753aa3d"],["逆向-调试-笔记_0x02/index.html","c764b27a0b9a4fb60782aaab635137df"],["逆向-调试-笔记_0x03/index.html","2b0d9ee7479603d8600fb9a327659ccc"],["逆向-调试-笔记_0x04/index.html","157eb65148804a4f4702e79f1a8482b7"]];
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








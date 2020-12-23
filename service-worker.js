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

var precacheConfig = [["404.html","282f064018b29ff57077225fb1190411"],["AMQP协议0_1/index.html","d6a94ac155cf6bdd498ef435028fbaa2"],["ARM汇编01/index.html","183e9f9632c8c54999d567ea60918fac"],["ARM汇编02/index.html","ee27d5c262ea9046e6a7c24da6572831"],["ARM汇编指令集/index.html","bae03efd435bea82174617191ad4acbf"],["Andoird反编译01/index.html","590d3b473726232f6766c8032c1c738d"],["BLE协议01/index.html","2c74dbe9a69f8408934f30e36840649f"],["BLE协议02/index.html","655f417c46b5860ef2fa5df5a02a67be"],["CVE-2019-5418/index.html","ea2b72b96f503c4fef83ebc7b4fa4f3d"],["CVE-2019-9766/index.html","e0da9732fd8c9193922f73aaaba7614e"],["CoAP协议01/index.html","8b4013db1a88550281599723e8f10403"],["JS_0X02/index.html","c445dd0eb3ed1a79193b174eaa552c7b"],["JS_0X03/index.html","1b2d613f15b6e56c04aeb7997a1b5dd6"],["JS_0X04/index.html","8e983d7178bd01683eaa8316d7103678"],["JS_0X05/index.html","d9c4e3ba75c408b6e08b2eecf555c9c4"],["JS_0X06/index.html","6f29f5a3fd932fb55ee7352ec244ea52"],["JS_0X07/index.html","b17f6e242449fe885541c95fd4932418"],["JS_0X08/index.html","ef63b62bd02cf63216de60880b18c433"],["JS_0X09/index.html","d54e77ff0e1847e19cea2f4b95725e25"],["JS_0X10/index.html","10eeafb4a5ad66848f24823cc727ed13"],["JS笔记(0X01)/index.html","6e33b638ebc3632338c19768cba1c8ac"],["JT808协议01/index.html","51140b361b1ad93c6968b65cbdf224bb"],["MQTT协议01/index.html","572c69389af1c580a9531c6bc7caed55"],["NFC协议01/index.html","c9572d66228daef31a251c7c2c4a9a7b"],["NFC协议02/index.html","c73897e9a0640442b852390ec3b8ca1d"],["RF协议01/index.html","4bb5e4dfdeb179fc99e53c0c6ba53755"],["RF协议02/index.html","fb1bf79687dda3543256efb0a50197c0"],["RF协议03/index.html","69b8aaf199ba78bdcc60dad31945ae57"],["Wi-Fi协议01/index.html","887a6b4bd1e65d4c4087d6b4300600b5"],["Wi-Fi协议02/index.html","349dd53c89867fac913ebaba32ee0f27"],["Wi-Fi协议03/index.html","9b431168bfae5f5d9cbf332beea2b743"],["Wi-Fi协议04/index.html","0b7085fcb1f784fe1278f945d29416d0"],["Wi-Fi协议05/index.html","93cfd02c892b9a5db36b00d5ee17626e"],["Wi-Fi协议06/index.html","9030a500d3c985e5743bf0fb09ed7d46"],["Wi-Fi协议07/index.html","17120f39e2da3c1d8411c7967af0163f"],["Wi-Fi协议08/index.html","33f9dd2b79b5275d8a1e0ab8872c3dc5"],["Wi-Fi协议09/index.html","9c1735248b5f5d9b8d557c20f654f8c1"],["Wi-Fi协议10/index.html","668d354c59e931b41a56a675be573072"],["Wi-Fi协议11/index.html","1039da74c7b58d4c022027f1c355d8b4"],["ZigBee协议01/index.html","fae4816966536c6211da92e79f2ca33d"],["ZigBee协议02/index.html","9dcd53730a0d46540626e646c69ccc2b"],["archives/2020/08/index.html","fb8ded5a248b9c32e91c548e1973d931"],["archives/2020/09/index.html","fe8895d68adb16cd4c22fe67a4e496fb"],["archives/2020/09/page/2/index.html","7df94c7ddac2c95ce5529e2d056258ff"],["archives/2020/09/page/3/index.html","c1acaa8b3f1ce1817edb056bbc14109a"],["archives/2020/10/index.html","f27c0453123bfbbd73d2f743a624ba3c"],["archives/2020/10/page/2/index.html","0d09f8d4a3401f4f7a23b2eb222b07be"],["archives/2020/11/index.html","10cb7870d86025899fd38ce88f2bdb6f"],["archives/2020/11/page/2/index.html","9d2bde363a0771763bae82028ef18ada"],["archives/2020/12/index.html","98f201178650adde1ec5f5eeea8c1569"],["archives/2020/index.html","2e09bef8401a2a544a83b28dbf2c6f7f"],["archives/2020/page/2/index.html","9290b3d948599656b635e65ec1488470"],["archives/2020/page/3/index.html","efb29801a19b48ea79a0d6e643822294"],["archives/2020/page/4/index.html","5819a3dbc684678700979cb3c00edeb4"],["archives/2020/page/5/index.html","722286e215b9b2c62368b62295256786"],["archives/2020/page/6/index.html","270e4b4b6f0136aa35cfacd241fc7f56"],["archives/2020/page/7/index.html","03b95747ce39ea30fc794a0f5bef143e"],["archives/index.html","eb570a85117dff305d01e0c025e5d402"],["archives/page/2/index.html","807c9fd210972f97cafbd6b23f006846"],["archives/page/3/index.html","454f17c502cedc7b60d2f77d93e787ca"],["archives/page/4/index.html","7b93ff0b55db22714cb6ec23f84f4472"],["archives/page/5/index.html","66205a8f9785b1f253419878ca4a6206"],["archives/page/6/index.html","ac0add94c8035389f5cee7301e77dacf"],["archives/page/7/index.html","18f09127e81b75d6e8f577fdb8b704fa"],["categories/ARM汇编/index.html","1046032ea7654093c488aaa8bde8f24e"],["categories/Android反编译/index.html","22764f828c2d30926e0f19efa8bca979"],["categories/CVE/index.html","3ef76d18cff4a6bb116ec0e1016acc31"],["categories/JS学习笔记/index.html","95af654efc2cc2f95bbf54602557d027"],["categories/index.html","07f7696969a7f8fbb26c564bbb216a42"],["categories/x86汇编/index.html","d0de6f8b72d3fad2606808b032138aa7"],["categories/x86汇编/page/2/index.html","d10243e6c933d08a67d4b314349ea3ce"],["categories/固件逆向/index.html","505bdb2d669af6904c60a0ca6c4a523b"],["categories/智能硬件安全/index.html","e7bd88b9c107b524a77670c42d181a13"],["categories/硬件电路构成/index.html","ebb07a246dcb38e83ca8fbed699c4908"],["categories/网络通信协议/index.html","4ab61ec57b6d48e019589a03fa1e8634"],["categories/网络通信协议/page/2/index.html","9ecc0dfd493c417f7031d952ac5cfdee"],["categories/网络通信协议/page/3/index.html","751f104e021a9c912313417ee6696dac"],["categories/逆向/index.html","500dadee9cbbaef1ebc25dc7a5ad904d"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","6adec093e9bbd465dee4a44d7a160dc7"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","aeb189bf32b5f7bcb9a2c487fd140a3e"],["page/2/index.html","7fbf295b2b7779c6308498f7a965177c"],["page/3/index.html","284a67d4b75b259bd721901654decc22"],["page/4/index.html","04136bcbd76d0ffcc16312da2d128f3e"],["page/5/index.html","278bc2c73bd5e0b986c3916899fb4ff5"],["page/6/index.html","01ff695b7fe9892545dcbd431d564f4e"],["page/7/index.html","1f612b1ffe263e9847ce0de470612dfe"],["tags/AMQP协议-暂无/index.html","db6e3639200cc4442f766478d85d5f99"],["tags/ARM汇编/index.html","bd1205e022bd2baf6a5170565def045e"],["tags/Android反编译/index.html","bd56b3bce0d161076d8ef9249de5662e"],["tags/BLE协议/index.html","259f1e28697c227475a22c51d775faa5"],["tags/CoAP协议/index.html","79099d3ebbeea296930589f7a5619bb0"],["tags/JT808协议/index.html","571c214fee2ef997bfe401383aad8e76"],["tags/JavaScript/index.html","727db118780eeff83b6a321cc48f984d"],["tags/MQTT协议/index.html","eef8163bf6dcf21a7dded0a965ffafa5"],["tags/NFC协议/index.html","0202a37025fbd85d5aa2a57f648078b1"],["tags/RF协议/index.html","23d0d22e5f419e38cc5d735d4651cec1"],["tags/Wi-Fi协议/index.html","6742c9bddc38e41896995cb60b81f8d3"],["tags/Wi-Fi协议/page/2/index.html","8457c4c76db53fc2104f68f0a71967f4"],["tags/ZigBee协议/index.html","5abf42ea0890ea2aefcd6aa47382e959"],["tags/index.html","78b078f7e89d942dd5ac0fc712f88996"],["tags/x86汇编/index.html","bad335fa977afb2c38af467c608d363d"],["tags/x86汇编/page/2/index.html","2eae438d610ba83c15cbe98879370f6f"],["tags/固件逆向/index.html","3d81d11619448095f8d97d91f0f98da6"],["tags/智能硬件安全/index.html","c6e2fe7f265caba1156c26894c5dd6df"],["tags/漏洞复现/index.html","ba9aae965a7340894abe80246ce5c1da"],["tags/硬件电路构成/index.html","4b3615c3ffad529d30ff2c106df7f754"],["tags/逆向（基础）/index.html","659ff76ed210a33123b43ef5f748f3fb"],["tags/逆向（调试）/index.html","a3dcd8b79241753a37f5da9e8f349b60"],["x86汇编学习笔记_0x01/index.html","953844db277e0b276485efb5e91e42c5"],["x86汇编学习笔记_0x02/index.html","722b53dbce087cd37e64d95e00e44a2a"],["x86汇编学习笔记_0x03/index.html","4740c8545608d26db9ce538a09a5e66a"],["x86汇编学习笔记_0x04/index.html","fb7a2772e91281d71d609aed33dd6b43"],["x86汇编学习笔记_0x05/index.html","31cf110cd86b87787018204d4fc96778"],["x86汇编学习笔记_0x06/index.html","91eee020a0ab9fdaec09c982a61dffe6"],["x86汇编学习笔记_0x07/index.html","760801ea0415c99f6265addefe08f19f"],["x86汇编学习笔记_0x08/index.html","c4ebf2352aa17ca9296ca4dbfd51c2dd"],["x86汇编学习笔记_0x09/index.html","0819304f7a628a15d243aeb54cb380dc"],["x86汇编学习笔记_0x10/index.html","a449b8c074de6531871b08b5052c1f81"],["x86汇编学习笔记_0x11/index.html","7198977f29b8cc7d5a75ff33aea9759d"],["x86汇编学习笔记_0x12/index.html","56e72f0c3288861119835fea946e39fb"],["x86汇编学习笔记_0x13/index.html","469ae3af89cdbf57fb06db5bcf08c6b5"],["固件逆向01/index.html","d52c1d60591846a327478623c5ea61c1"],["汇编指令集/index.html","e3d94f765d16738365afe8c312bea3b5"],["硬件智能安全(0x01)/index.html","307e66886488cd6c50486ad92bc24f10"],["硬件智能安全(0x02)/index.html","d583c47283adc93a469c7ba8765c618f"],["硬件智能安全(0x03)/index.html","72b68078135c2c216300c6765cc3b187"],["硬件智能安全(0x04)/index.html","d365606590f73075d4b8e7fdd0fcdff6"],["硬件智能安全(0x05)_/index.html","8f0b3fba2555ac59088d476532dcbe71"],["硬件智能安全(0x06)_/index.html","7d0dfb7fd97b9255dbe12f0f72994175"],["硬件智能安全(0x07)_/index.html","b4cec87faa2392f4c7765395c0ac6880"],["硬件智能安全导航/index.html","2a7aa3322ba2b46afd7d6cdd2fb593df"],["硬件电路构成01/index.html","93524bc664226990839c26b7c347776b"],["逆向-基础-笔记_0x01/index.html","3988a8ca78c4333ebdd91d75668cc75d"],["逆向-调试-笔记_0x01/index.html","e029b05dfce42c6a13da4a4bb9e1925b"],["逆向-调试-笔记_0x02/index.html","691e576d6d4545f52b97df81e761a11f"],["逆向-调试-笔记_0x03/index.html","05cd8070fd01d229b5d7249614ec5dcb"],["逆向-调试-笔记_0x04/index.html","54a9927a4a0374baa6c30efaf52f4d06"]];
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








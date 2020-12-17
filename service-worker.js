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

var precacheConfig = [["404.html","0f447bce25897c139dce64aa764bbc00"],["AMQP协议0_1/index.html","f20410245fb83afac5a39dca0a66308d"],["ARM汇编01/index.html","183e9f9632c8c54999d567ea60918fac"],["ARM汇编02/index.html","ee27d5c262ea9046e6a7c24da6572831"],["ARM汇编指令集/index.html","bae03efd435bea82174617191ad4acbf"],["Andoird反编译01/index.html","4b871b8fe911d770b5425a6c8f5a42bd"],["BLE协议01/index.html","26cf741adb93c0e26c2e0424e4659eb5"],["BLE协议02/index.html","655f417c46b5860ef2fa5df5a02a67be"],["CVE-2019-5418/index.html","ea2b72b96f503c4fef83ebc7b4fa4f3d"],["CVE-2019-9766/index.html","e0da9732fd8c9193922f73aaaba7614e"],["CoAP协议01/index.html","9799943ddf7d96a161659fd24839a8cc"],["JS_0X02/index.html","c445dd0eb3ed1a79193b174eaa552c7b"],["JS_0X03/index.html","1b2d613f15b6e56c04aeb7997a1b5dd6"],["JS_0X04/index.html","8e983d7178bd01683eaa8316d7103678"],["JS_0X05/index.html","d9c4e3ba75c408b6e08b2eecf555c9c4"],["JS_0X06/index.html","6f29f5a3fd932fb55ee7352ec244ea52"],["JS_0X07/index.html","b17f6e242449fe885541c95fd4932418"],["JS_0X08/index.html","ef63b62bd02cf63216de60880b18c433"],["JS_0X09/index.html","d54e77ff0e1847e19cea2f4b95725e25"],["JS_0X10/index.html","10eeafb4a5ad66848f24823cc727ed13"],["JS笔记(0X01)/index.html","6e33b638ebc3632338c19768cba1c8ac"],["JT808协议01/index.html","51140b361b1ad93c6968b65cbdf224bb"],["MQTT协议01/index.html","572c69389af1c580a9531c6bc7caed55"],["NFC协议01/index.html","c9572d66228daef31a251c7c2c4a9a7b"],["NFC协议02/index.html","c73897e9a0640442b852390ec3b8ca1d"],["RF协议01/index.html","4bb5e4dfdeb179fc99e53c0c6ba53755"],["RF协议02/index.html","fb1bf79687dda3543256efb0a50197c0"],["RF协议03/index.html","27e1608fe27f58a6165919e03e27e1a6"],["Wi-Fi协议01/index.html","887a6b4bd1e65d4c4087d6b4300600b5"],["Wi-Fi协议02/index.html","349dd53c89867fac913ebaba32ee0f27"],["Wi-Fi协议03/index.html","9b431168bfae5f5d9cbf332beea2b743"],["Wi-Fi协议04/index.html","0b7085fcb1f784fe1278f945d29416d0"],["Wi-Fi协议05/index.html","93cfd02c892b9a5db36b00d5ee17626e"],["Wi-Fi协议06/index.html","9030a500d3c985e5743bf0fb09ed7d46"],["Wi-Fi协议07/index.html","17120f39e2da3c1d8411c7967af0163f"],["Wi-Fi协议08/index.html","33f9dd2b79b5275d8a1e0ab8872c3dc5"],["Wi-Fi协议09/index.html","9c1735248b5f5d9b8d557c20f654f8c1"],["Wi-Fi协议10/index.html","668d354c59e931b41a56a675be573072"],["Wi-Fi协议11/index.html","1039da74c7b58d4c022027f1c355d8b4"],["ZigBee协议01/index.html","fae4816966536c6211da92e79f2ca33d"],["ZigBee协议02/index.html","9dcd53730a0d46540626e646c69ccc2b"],["archives/2020/08/index.html","6be58ae34b802219ffca762dd3c327fe"],["archives/2020/09/index.html","724a751ee06b9f12c9e06d76d2cf7488"],["archives/2020/09/page/2/index.html","8bec6f982b5b3fbfc28ce74ca078adb8"],["archives/2020/09/page/3/index.html","9f052c9ac0a866d41a1e799507e57896"],["archives/2020/10/index.html","663f3a0b5be304680db4f1e9fcf41a76"],["archives/2020/10/page/2/index.html","1da3c15b8f55f464efc57d05e33ddc48"],["archives/2020/11/index.html","075ce831bec4675f9f232f1c02133b7d"],["archives/2020/11/page/2/index.html","0292f3954d6428c6ad10fd984ee5fd46"],["archives/2020/12/index.html","169dc0555350a301bdca6cbdb6fbc5e7"],["archives/2020/index.html","b5d23e285230d87774651d432c761f6f"],["archives/2020/page/2/index.html","4c7603fb9802a110a7c0eb0ab90b29d9"],["archives/2020/page/3/index.html","282bfb88abf319f2e4d5238be7201e66"],["archives/2020/page/4/index.html","e210476f8d189ce0ff36c7310fa3633c"],["archives/2020/page/5/index.html","cecce23eb41a2acc348f3d83f6da0209"],["archives/2020/page/6/index.html","670ad39b0d43766089787a612d6d19ed"],["archives/2020/page/7/index.html","a039f1b5c59c69e27711d10b106c0bf0"],["archives/index.html","bc703018570cd8c8d08cddaf088f8c44"],["archives/page/2/index.html","0982179e7b19a85460611c04ebcf2fbe"],["archives/page/3/index.html","fda1196ef245061dd344a8a7cafbc9d9"],["archives/page/4/index.html","e0685db11351463ce570f14f06b17497"],["archives/page/5/index.html","6974264f4ea93adac29cbb56547f13b5"],["archives/page/6/index.html","4361e408aa86397448c0ffc972761b66"],["archives/page/7/index.html","f4abaa2f1527e0226b176693bf774174"],["categories/ARM汇编/index.html","0fbc4a62b9705b0acdc372e1da6c2f8e"],["categories/Android反编译/index.html","c771f1157c685943741b96d8b2daa117"],["categories/CVE/index.html","aa34709ce3dd446a077a68e8d543ccfd"],["categories/JS学习笔记/index.html","9cfadcfe7bf19cb91096607bb6b36bf9"],["categories/index.html","3a23e744b83344c90e8b9ddb941ac8b5"],["categories/x86汇编/index.html","3250ccec5f11c93bea6fe4e35cea85b7"],["categories/x86汇编/page/2/index.html","dd5cdb3f6f6aef15f1f17ce8d797bb89"],["categories/固件逆向/index.html","8922f81083372384b869a46a3f29fad4"],["categories/智能硬件安全/index.html","b194b90b4ed4a2380768ab48db95e145"],["categories/硬件电路构成/index.html","1c3b68971e80d09debde7ae677453238"],["categories/网络通信协议/index.html","75aecc9fda453a8c4fd9b00ef4ebfc1a"],["categories/网络通信协议/page/2/index.html","18e0298fdd28960ab0b81e9e8e9b35b3"],["categories/网络通信协议/page/3/index.html","a6b1045d3e0523684d8ea654674338e2"],["categories/逆向/index.html","fbc161173f8c08839efd10b6e1b89625"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","9928c51d9c1e83c888de22bc376898e5"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","4a12a09b48616104d3bdef4f7230bc8b"],["page/2/index.html","d45e9436c2ecda3cb8a4b9b5d303bcc4"],["page/3/index.html","3cedb8d8f245fe82cf1cd68ac0d57ce1"],["page/4/index.html","682485e82e989f83f44323fe88a93312"],["page/5/index.html","4cb08dac7d6b9859f668b6991c45e071"],["page/6/index.html","54655270ada6cb95b2c1fe057bc68cbd"],["page/7/index.html","b5fc438f7b68e9a96dad93e3d9696fcd"],["tags/AMQP协议-暂无/index.html","2afde73cbcba4b5950d4b50fe7d977a3"],["tags/ARM汇编/index.html","56299acc727ae57c996245c0f4ad27dd"],["tags/Android反编译/index.html","594c6a1e10a487cc92ea78ae9e5d96a1"],["tags/BLE协议/index.html","5c3285448fe33230bd459756628470ea"],["tags/CoAP协议/index.html","da64eeb979b6fa260c05521375489012"],["tags/JT808协议/index.html","f53e7e3427822f901dd2b0a2684cd53d"],["tags/JavaScript/index.html","c09aa3673dbf4fcb46bb7e9dd92ae4e6"],["tags/MQTT协议/index.html","c0beb5784394476bc4579e887d3e4c1d"],["tags/NFC协议/index.html","3235c4b2d37dce58de185ef21e290ed4"],["tags/RF协议/index.html","df3e296e1f896741b4e08a17f6dec158"],["tags/Wi-Fi协议/index.html","40f76979274c02e8e451edc067bfd765"],["tags/Wi-Fi协议/page/2/index.html","2e20c004c76b4d9cb13f8f45f41c9b63"],["tags/ZigBee协议/index.html","ee12ebf71049842db2b76a068fa941c2"],["tags/index.html","ca3dbba169bfc4c7db1b4155accb8467"],["tags/x86汇编/index.html","30164d019f6cf1061ead269aecc86071"],["tags/x86汇编/page/2/index.html","f97744dccb1ae24381af7d090a41d736"],["tags/固件逆向/index.html","58b696f5c70b883fecc19c7cc59c621d"],["tags/智能硬件安全/index.html","245d3f1403a66ef0138cb2636b2e54d5"],["tags/漏洞复现/index.html","7ba629272edc27e66e220e1d5c241a34"],["tags/硬件电路构成/index.html","332568eef4db56aa4109890b32fa9efa"],["tags/逆向（基础）/index.html","3f4899a40d7e71be6cd81f721424a363"],["tags/逆向（调试）/index.html","05c79fbd322bcfe0b80b1f0e575edaac"],["x86汇编学习笔记_0x01/index.html","953844db277e0b276485efb5e91e42c5"],["x86汇编学习笔记_0x02/index.html","722b53dbce087cd37e64d95e00e44a2a"],["x86汇编学习笔记_0x03/index.html","4740c8545608d26db9ce538a09a5e66a"],["x86汇编学习笔记_0x04/index.html","fb7a2772e91281d71d609aed33dd6b43"],["x86汇编学习笔记_0x05/index.html","31cf110cd86b87787018204d4fc96778"],["x86汇编学习笔记_0x06/index.html","91eee020a0ab9fdaec09c982a61dffe6"],["x86汇编学习笔记_0x07/index.html","760801ea0415c99f6265addefe08f19f"],["x86汇编学习笔记_0x08/index.html","c4ebf2352aa17ca9296ca4dbfd51c2dd"],["x86汇编学习笔记_0x09/index.html","0819304f7a628a15d243aeb54cb380dc"],["x86汇编学习笔记_0x10/index.html","a449b8c074de6531871b08b5052c1f81"],["x86汇编学习笔记_0x11/index.html","7198977f29b8cc7d5a75ff33aea9759d"],["x86汇编学习笔记_0x12/index.html","56e72f0c3288861119835fea946e39fb"],["x86汇编学习笔记_0x13/index.html","469ae3af89cdbf57fb06db5bcf08c6b5"],["固件逆向01/index.html","d52c1d60591846a327478623c5ea61c1"],["汇编指令集/index.html","e3d94f765d16738365afe8c312bea3b5"],["硬件智能安全(0x01)/index.html","307e66886488cd6c50486ad92bc24f10"],["硬件智能安全(0x02)/index.html","d583c47283adc93a469c7ba8765c618f"],["硬件智能安全(0x03)/index.html","72b68078135c2c216300c6765cc3b187"],["硬件智能安全(0x04)/index.html","d365606590f73075d4b8e7fdd0fcdff6"],["硬件智能安全(0x05)_/index.html","8f0b3fba2555ac59088d476532dcbe71"],["硬件智能安全(0x06)_/index.html","7d0dfb7fd97b9255dbe12f0f72994175"],["硬件智能安全(0x07)_/index.html","b4cec87faa2392f4c7765395c0ac6880"],["硬件智能安全导航/index.html","2a7aa3322ba2b46afd7d6cdd2fb593df"],["硬件电路构成01/index.html","93524bc664226990839c26b7c347776b"],["逆向-基础-笔记_0x01/index.html","3988a8ca78c4333ebdd91d75668cc75d"],["逆向-调试-笔记_0x01/index.html","e029b05dfce42c6a13da4a4bb9e1925b"],["逆向-调试-笔记_0x02/index.html","691e576d6d4545f52b97df81e761a11f"],["逆向-调试-笔记_0x03/index.html","05cd8070fd01d229b5d7249614ec5dcb"],["逆向-调试-笔记_0x04/index.html","54a9927a4a0374baa6c30efaf52f4d06"]];
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








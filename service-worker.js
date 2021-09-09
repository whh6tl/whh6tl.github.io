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

var precacheConfig = [["404.html","01aece722e1b78d66cf615ddcd47a8c3"],["AMQP协议0_1/index.html","54422bc5d11c7d6df0ff736da0ea2750"],["ARM汇编01/index.html","34bc9d279f4ab9be963f1de733849065"],["ARM汇编02/index.html","dd7971b430906222b17359a36aed55a3"],["ARM汇编指令集/index.html","566e833c97c65ac9375e586004f32abd"],["Andoird反编译01/index.html","2b2f6868a23cadc4599e152a9f8bab7c"],["BLE协议01/index.html","144e1eba509be72d2618a0ce320ba478"],["BLE协议02/index.html","d45c7638d1f9518e00bd4dd8057fd37d"],["CVE-2019-5418/index.html","e70a8e7023f7b9e29cfa18e234fbd468"],["CVE-2019-9766/index.html","61fe0b4fcbdbaa3aba4d288ef736fcac"],["CoAP协议01/index.html","b9119f809069e3e42258163b220670ab"],["JS_0X02/index.html","a758e7287d3a64e3a2f9ab20ee630025"],["JS_0X03/index.html","d7332e73c107c851b83afd80176b1bad"],["JS_0X04/index.html","b4d12b3b42707116fba8735fc3faab95"],["JS_0X05/index.html","45f9057f587aa122bbb81ed987fad527"],["JS_0X06/index.html","aa66d8c89e1ac3adde1ae9cdc27de0b7"],["JS_0X07/index.html","b4fde0746e4a8e03fe662ce7aeea6dcf"],["JS_0X08/index.html","ee01d0d72e7074008cb62b6ed62a5721"],["JS_0X09/index.html","73b2b8918d03228000d4830bfbf95b9e"],["JS_0X10/index.html","5ad537d14d2b0df79adb9295b331fa8f"],["JS笔记(0X01)/index.html","128340aa17aac0ddc518478a1a63f48c"],["JT808协议01/index.html","4892e7d4f14fc9e6fb0edf0764e3746e"],["MQTT协议01/index.html","6366c979c8f00c9bc549af0dc415e0c9"],["NFC协议01/index.html","7a978e680d410ba09d1279891c6051fb"],["NFC协议02/index.html","745d15820ff5a47a47e0b84b6c23e009"],["RF协议01/index.html","1f03752ae2dfa1dce770793d582ef53e"],["RF协议02/index.html","186881310dfeee431fd6e554b6e9d8ff"],["RF协议03/index.html","ee8f4b1de101456594d8255d86e58a68"],["Wi-Fi协议01/index.html","0f3dfc9fa384b24293c741109a214595"],["Wi-Fi协议02/index.html","b998bf4d666c39ac6e50b70172bd081f"],["Wi-Fi协议03/index.html","8284390fcefe1fca823e50d9e739e63e"],["Wi-Fi协议04/index.html","22a5a2978e00784b2726354b37871119"],["Wi-Fi协议05/index.html","a8f7d426000cf6be4c0210f4b13d3af6"],["Wi-Fi协议06/index.html","0f6e503fe542274439eb8af95a9a9123"],["Wi-Fi协议07/index.html","4a39b13c33e2e749796b28e981e2fe65"],["Wi-Fi协议08/index.html","64aec7fc68dbf20dcddc8fc07c0ff50f"],["Wi-Fi协议09/index.html","8048d8687f8cfa58311b092360538c03"],["Wi-Fi协议10/index.html","bc7ab990ebd554bf06a31fd826dd7a16"],["Wi-Fi协议11/index.html","317d9e2537a2723f34fd137b6603bfa9"],["ZigBee协议01/index.html","385a1b8c1d579769dacc33492e17734e"],["ZigBee协议02/index.html","040a05e12da1535c3e09a54470173849"],["archives/2020/08/index.html","3e6f697d8ffc806424a88a000a0c1e74"],["archives/2020/09/index.html","a20523cd45dc7f4c3605276588845049"],["archives/2020/09/page/2/index.html","731fb66a517dbf19f23ddbcb5f67d1cb"],["archives/2020/09/page/3/index.html","1c929e2a708e0ddfa978cd41c5becf97"],["archives/2020/10/index.html","f7abc29d8f72f1f4d499125cbeb6248f"],["archives/2020/10/page/2/index.html","af57d39bb1a0075b1f176e845da9796e"],["archives/2020/11/index.html","bdb4de9543a2b6f929be5e5860c43d13"],["archives/2020/11/page/2/index.html","f8f96ed82d5c2ba14763e5eb06b1cd83"],["archives/2020/12/index.html","ce536e713690ec718708ac4871aacff2"],["archives/2020/index.html","74a6c7625d7c8e891d9cbdd3b3abb6b1"],["archives/2020/page/2/index.html","3ecd8b20554046d8d11ddc29e776d211"],["archives/2020/page/3/index.html","bd8ee412b63a6261f948dc70042a71b6"],["archives/2020/page/4/index.html","95864319e2d3566ee32cc4685d2ba876"],["archives/2020/page/5/index.html","67e26ca916419bd8b9c8437f40ac5589"],["archives/2020/page/6/index.html","f084cfc52d21e96e9480c68f5e6afcca"],["archives/2020/page/7/index.html","92acc16748642d04563d01a92d1dd6b9"],["archives/2020/page/8/index.html","5bad55dd8014f56a26a2c4507488565a"],["archives/2021/01/index.html","ac857b81747eb5922899f2930f702ef8"],["archives/2021/09/index.html","0b4b3a3e90e050cacf637232a04a0e0d"],["archives/2021/index.html","9d74359769c0461a91965bdd8714ec78"],["archives/index.html","03f17beb07ff4a10c4fafbc4874c0227"],["archives/page/2/index.html","5b873bcac7e076f94d112f446e4d76ff"],["archives/page/3/index.html","7ffe8df8aaf5a723d5ad774a814cab9d"],["archives/page/4/index.html","25a855bf58c869c18042f0596bb935ba"],["archives/page/5/index.html","8edda5c2625831594a6f6948b07344db"],["archives/page/6/index.html","aa285615b696ec8c4e2567ed80670bea"],["archives/page/7/index.html","c4dadbaa8e42caafab41b6223144bb85"],["archives/page/8/index.html","34484fd4770459497f09d6e0a4b3bbb6"],["baidu_verify_code-74acARe7VV.html","e3f2278b79912a3032517bacde56124e"],["categories/ARM汇编/index.html","7c49cc50cfdfdb03d75184f5de5624e4"],["categories/Android反编译/index.html","1246efc3c22b9713d6048a46853b8412"],["categories/CVE/index.html","2ba344f3fef4dbe867ba4f4152a68760"],["categories/JS学习笔记/index.html","aad2c155bea24ceb19ea236b8ea885d4"],["categories/index.html","101c6c3892265535c2f88c3d20ed3c30"],["categories/x86汇编/index.html","f7d9a2d36d368d0ff5e9534d4f0934f7"],["categories/x86汇编/page/2/index.html","659c6c732a082cb8046e6de793088f7d"],["categories/固件逆向/index.html","020bd35237cf89c002bdc2341e241a57"],["categories/技术分享/index.html","6d75bec6c9ff295c029582cf7820bf22"],["categories/智能硬件安全/index.html","a376b55724ce9ea2730fba275e45aab2"],["categories/智能设备安全分析/index.html","709f153a8efb5dd34050ba34b7001c85"],["categories/硬件电路构成/index.html","107bfb5adf2e593b833a41bbb4dc45c5"],["categories/网络通信协议/index.html","48bff82d960eae85f47e90e158b52c68"],["categories/网络通信协议/page/2/index.html","d7196fdff8b081f810abc9df966fdf36"],["categories/网络通信协议/page/3/index.html","844b17092268f56538e84e37cbb3bc9e"],["categories/逆向/index.html","5f0cfe99f910675b8f8edaef09e12cc2"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","2d83ef08f4798ac22d432d0f621af897"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","6240a9ef1ddd279ed2e36e0f3ba4aa23"],["page/2/index.html","85b8a46cc7ac0611e8e34d79f0f2e105"],["page/3/index.html","87e82ff1f65d4fc77c0dbf8e494d884e"],["page/4/index.html","3a99d3cd70ec41692c9bb837b5c33b3e"],["page/5/index.html","746bb897292279009badf31fe1e7ea98"],["page/6/index.html","556854382a6d4bab118df4b1f87b84e9"],["page/7/index.html","edbb0b8b87b72e419ee49831f81a949d"],["page/8/index.html","5850e46c33baaac0eadfd43fe7a8205a"],["sec_share/index.html","4c80048b3ba502619e0bad02baa779a1"],["tags/AMQP协议-暂无/index.html","8d302cda6e8a35a7e7fb91b42bec044a"],["tags/ARM汇编/index.html","18df62d1865a9f6d6371cdbc61a5942c"],["tags/Android反编译/index.html","3cdfa6c9363c8a04a8f37af84bbbf432"],["tags/BLE协议/index.html","b7cfc4d82b5a0134ecbcd1ac49d7ff17"],["tags/CoAP协议/index.html","4362b3bb430c098ae9f01bf1a8dc9b00"],["tags/JT808协议/index.html","be63bd6c12559981868c2e55b042e010"],["tags/JavaScript/index.html","96cd2ddbb639bf5fbb95dd32f7d7fbc7"],["tags/MQTT协议/index.html","b178d91b8104cfe8a8aa810af3ac20d7"],["tags/NFC协议/index.html","da36d6d22c81754b60539beab08fce68"],["tags/RF协议/index.html","127595e7ea7624662592de7c4b44d78f"],["tags/Wi-Fi协议/index.html","8f90bae0b208dedc73758d21993fad03"],["tags/Wi-Fi协议/page/2/index.html","dba3683188dc0ce6a556037dff7fb3f6"],["tags/ZigBee协议/index.html","752a5e9dc8eab01aa7fede8523731228"],["tags/index.html","14107a1d80dced6b375005f9a597387a"],["tags/x86汇编/index.html","8d7873d72e5726afc228348ae659cf15"],["tags/x86汇编/page/2/index.html","7870f6ffa49a54a3fbe528fb7db8d416"],["tags/固件逆向/index.html","07a4c20d06889d471224654ef7c31c52"],["tags/技术分享/index.html","8bf6b064c46fffb682bb8a5c1e79874b"],["tags/智能硬件安全/index.html","ef112577064c6c387f76cdbdace8a559"],["tags/智能设备安全分析/index.html","2696688547810914cf8046840fa09c7e"],["tags/漏洞复现/index.html","88b1d99cf2f9e6cb58e8d07c660c5012"],["tags/硬件电路构成/index.html","97dba8e128fe7344953998c1e9ac609f"],["tags/逆向（基础）/index.html","46e1a5d410c512d36fb87ee3691d1363"],["tags/逆向（调试）/index.html","22776b89e6c1443fcb5e0141ea855d93"],["x86汇编学习笔记_0x01/index.html","0495898809b9425e611234ed7be05aa6"],["x86汇编学习笔记_0x02/index.html","2eb05e9af4530df66321314f95cdaac5"],["x86汇编学习笔记_0x03/index.html","e9212b64954753966f6d9b06c4287385"],["x86汇编学习笔记_0x04/index.html","7f8aa94ce60bdcb5196afc2bcd88a5f2"],["x86汇编学习笔记_0x05/index.html","5fcaac812b70f1f046ab128ab4fe40c1"],["x86汇编学习笔记_0x06/index.html","cccdeb8ff032bc5df9f785fe7fe7e06a"],["x86汇编学习笔记_0x07/index.html","5ce9737ded30aa5f6df082efe3836d69"],["x86汇编学习笔记_0x08/index.html","19fd96fd3a8261da2376bc90ee445e92"],["x86汇编学习笔记_0x09/index.html","e6cfa8208c15c0b55fd87b6f84a886cc"],["x86汇编学习笔记_0x10/index.html","3b85f986ed35cf07e378083ed0392f40"],["x86汇编学习笔记_0x11/index.html","1320322c9ba60ab2cd31804f10a0d53b"],["x86汇编学习笔记_0x12/index.html","eb4ef05b26222246a4b23e16f21a9863"],["x86汇编学习笔记_0x13/index.html","0ceaaa22646514a85b8be0ad863b1047"],["固件逆向01/index.html","af6449cf35d7b47c460fc6db8bdc2187"],["固件逆向02/index.html","deb13d3232868b8c6118768c597046b7"],["智能设备安全分析笔记(0x01)/index.html","868684826fef7255bd36dc9a6eb327c7"],["汇编指令集/index.html","120de7b594210e94be919a0253db7781"],["硬件智能安全(0x01)/index.html","3021cdb11929f2f4ebda7cad6c897548"],["硬件智能安全(0x02)/index.html","1052e768a56aac284875c909eff3c38b"],["硬件智能安全(0x03)/index.html","581263c3b227ef137802ad6657eff82d"],["硬件智能安全(0x04)/index.html","0e1be31c30cbd662b2b971ce63560b72"],["硬件智能安全(0x05)_/index.html","9b2a21a1de6a09e21cc783279bc52cd9"],["硬件智能安全(0x06)_/index.html","264fc6e4c95868691ba824c360d5d8ef"],["硬件智能安全(0x07)_/index.html","8b6e2df30a646a448a6c5ee726a3ed06"],["硬件智能安全导航/index.html","a42cecae551e25f6b42291a03dc2b1a9"],["硬件智能安全（固件番外）_/index.html","8c9ab960fe679a74cd3199cec6b27633"],["硬件电路构成01/index.html","fd126f47532b302e55e430be3179ccd5"],["逆向-基础-笔记_0x01/index.html","4bfe3dcfe9cbc37f97edbe86e8d447ab"],["逆向-调试-笔记_0x01/index.html","22c72816c612f71c629dfcce5edd6ff4"],["逆向-调试-笔记_0x02/index.html","90cb2f52a10c603f96564776e04e8d74"],["逆向-调试-笔记_0x03/index.html","243ad915cda8658c0200b8b4e428089d"],["逆向-调试-笔记_0x04/index.html","57a48e480008626a670a7bb41da08405"]];
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








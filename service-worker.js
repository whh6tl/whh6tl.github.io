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

var precacheConfig = [["404.html","ec31a4eb572a285c6aa66213baae8e8c"],["AMQP协议0_1/index.html","54422bc5d11c7d6df0ff736da0ea2750"],["ARM汇编01/index.html","34bc9d279f4ab9be963f1de733849065"],["ARM汇编02/index.html","dd7971b430906222b17359a36aed55a3"],["ARM汇编指令集/index.html","566e833c97c65ac9375e586004f32abd"],["Andoird反编译01/index.html","2b2f6868a23cadc4599e152a9f8bab7c"],["BLE协议01/index.html","144e1eba509be72d2618a0ce320ba478"],["BLE协议02/index.html","d45c7638d1f9518e00bd4dd8057fd37d"],["CVE-2019-5418/index.html","e70a8e7023f7b9e29cfa18e234fbd468"],["CVE-2019-9766/index.html","61fe0b4fcbdbaa3aba4d288ef736fcac"],["CoAP协议01/index.html","b9119f809069e3e42258163b220670ab"],["JS_0X02/index.html","a758e7287d3a64e3a2f9ab20ee630025"],["JS_0X03/index.html","d7332e73c107c851b83afd80176b1bad"],["JS_0X04/index.html","b4d12b3b42707116fba8735fc3faab95"],["JS_0X05/index.html","45f9057f587aa122bbb81ed987fad527"],["JS_0X06/index.html","aa66d8c89e1ac3adde1ae9cdc27de0b7"],["JS_0X07/index.html","b4fde0746e4a8e03fe662ce7aeea6dcf"],["JS_0X08/index.html","ee01d0d72e7074008cb62b6ed62a5721"],["JS_0X09/index.html","73b2b8918d03228000d4830bfbf95b9e"],["JS_0X10/index.html","5ad537d14d2b0df79adb9295b331fa8f"],["JS笔记(0X01)/index.html","128340aa17aac0ddc518478a1a63f48c"],["JT808协议01/index.html","4892e7d4f14fc9e6fb0edf0764e3746e"],["MQTT协议01/index.html","6366c979c8f00c9bc549af0dc415e0c9"],["NFC协议01/index.html","7a978e680d410ba09d1279891c6051fb"],["NFC协议02/index.html","745d15820ff5a47a47e0b84b6c23e009"],["RF协议01/index.html","1f03752ae2dfa1dce770793d582ef53e"],["RF协议02/index.html","186881310dfeee431fd6e554b6e9d8ff"],["RF协议03/index.html","ee8f4b1de101456594d8255d86e58a68"],["Wi-Fi协议01/index.html","0f3dfc9fa384b24293c741109a214595"],["Wi-Fi协议02/index.html","b998bf4d666c39ac6e50b70172bd081f"],["Wi-Fi协议03/index.html","8284390fcefe1fca823e50d9e739e63e"],["Wi-Fi协议04/index.html","22a5a2978e00784b2726354b37871119"],["Wi-Fi协议05/index.html","a8f7d426000cf6be4c0210f4b13d3af6"],["Wi-Fi协议06/index.html","0f6e503fe542274439eb8af95a9a9123"],["Wi-Fi协议07/index.html","4a39b13c33e2e749796b28e981e2fe65"],["Wi-Fi协议08/index.html","64aec7fc68dbf20dcddc8fc07c0ff50f"],["Wi-Fi协议09/index.html","8048d8687f8cfa58311b092360538c03"],["Wi-Fi协议10/index.html","bc7ab990ebd554bf06a31fd826dd7a16"],["Wi-Fi协议11/index.html","317d9e2537a2723f34fd137b6603bfa9"],["ZigBee协议01/index.html","385a1b8c1d579769dacc33492e17734e"],["ZigBee协议02/index.html","040a05e12da1535c3e09a54470173849"],["archives/2020/08/index.html","e5a88fb736916b67086b5e8bb8218806"],["archives/2020/09/index.html","0aa6dd924c451f5817429931504f9f09"],["archives/2020/09/page/2/index.html","ce169e2d624b3ab089999b3e91149ca7"],["archives/2020/09/page/3/index.html","661e5733a5e9346afc9c826eb6c61d03"],["archives/2020/10/index.html","1c2dc931207f8e015b318740fca41647"],["archives/2020/10/page/2/index.html","59693ee2bbdbbe066b01f55c0b47d484"],["archives/2020/11/index.html","10c654fe34bccd5dc20ae72040c63e31"],["archives/2020/11/page/2/index.html","90ec057bf85794f7e9b650f650cc64d0"],["archives/2020/12/index.html","d0463af262c667cc7fb98ad06302f020"],["archives/2020/index.html","19a20983b8264f85bcdfb85d8f9d5f92"],["archives/2020/page/2/index.html","ca07041536fd9320240189ad9d2a44f1"],["archives/2020/page/3/index.html","096e342c34cf834543772d85715ea213"],["archives/2020/page/4/index.html","76b470b6e294130a787bf3318ded2a00"],["archives/2020/page/5/index.html","9ad651386dcb0a8744aec1f5e4f70f45"],["archives/2020/page/6/index.html","a6674c422ca23d350b527e1dfd5b62b4"],["archives/2020/page/7/index.html","deaf894657355fe3c69a56697ba5cb07"],["archives/2020/page/8/index.html","5bf8ce66f2d07906240a7a48fe3b6d4b"],["archives/2021/01/index.html","d454547e8fa8f1f7800ae709d35086c3"],["archives/2021/09/index.html","0af61ab7bed8af677bcbeae97e88a5a4"],["archives/2021/index.html","9aa6fe9891e76e22b1d70d53bdba6a49"],["archives/index.html","8c6734fad1515bfc18d2cbebcafcd05f"],["archives/page/2/index.html","6ceee54841826219b5424509fa0af90d"],["archives/page/3/index.html","9179a850297f2ef4bffcccd6ba9006ca"],["archives/page/4/index.html","2a1e2eed5fbeb95bce207f444cc3596e"],["archives/page/5/index.html","b0f0f395e0d8337096f74abd98cbfd81"],["archives/page/6/index.html","a9fee34e5c91d32e42108188154e75b8"],["archives/page/7/index.html","ed1dd7f8b905982a67f2bc08c8ca4318"],["archives/page/8/index.html","daa61833b4745958ba4937b4db8d890a"],["baidu_verify_code-74acARe7VV.html","e3f2278b79912a3032517bacde56124e"],["categories/ARM汇编/index.html","63611604d9b6c8d7e1e32dc3b8683f38"],["categories/Android反编译/index.html","d5c582874031a6e2a12f00d005585092"],["categories/CVE/index.html","673a98262f14369f303a81c7710e3d86"],["categories/JS学习笔记/index.html","11b18716a6ba5585323a02bd19038070"],["categories/index.html","f9a13e875dee54da4d7ed980d00b16a6"],["categories/x86汇编/index.html","1bba7c6718655d4d9a4e86bbb5bfe6af"],["categories/x86汇编/page/2/index.html","679d9d3bbfdc6a6f5cee6658705b8d09"],["categories/固件逆向/index.html","f44a2d06a29c9cc8489806e04648f6a6"],["categories/技术分享/index.html","48be334636cc458d4d7af3c2ab1ff68c"],["categories/智能硬件安全/index.html","b4523d7b5873c64ac9611fb436859341"],["categories/智能设备安全分析/index.html","fe8380c1af0b5343c085c6f22a119766"],["categories/硬件电路构成/index.html","0ae287b0e3ad9514f11de40c988672e9"],["categories/网络通信协议/index.html","672ed283b6e84320ae31824551c4a7c6"],["categories/网络通信协议/page/2/index.html","ee4480fdf0b12fbf53b170000e399f30"],["categories/网络通信协议/page/3/index.html","387c92a40d618dde0437d064d5d0167b"],["categories/逆向/index.html","f593a06147792b2de875b4bee7819bcf"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","3baa3c7f49a3640797098b21f3b00262"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","b8da4c2f6a2d9b8a5a23852d9155e58a"],["page/2/index.html","a5f0c8185a145a1c6f5687fb5f5e2e2d"],["page/3/index.html","a13e50e2e43a6f48a830446b33f87421"],["page/4/index.html","4fad5af62d4279924efce32b119625c1"],["page/5/index.html","394396bbb25f543399cdaa441b3c5a04"],["page/6/index.html","df4fab9f2f9ee3ca21e78c3e7398cc9a"],["page/7/index.html","e7bca21c9953a697385c84d7e8d9a157"],["page/8/index.html","2c3f5528c2f96568937c786958ebbac1"],["sec_share/index.html","9fb92b1459b09bb33353eb3006c9629b"],["tags/AMQP协议-暂无/index.html","f4d14cf8c85cb6c48eee9a61c96bacd8"],["tags/ARM汇编/index.html","6d196f80dd0ac06d086017b0f009188c"],["tags/Android反编译/index.html","d92b27c6945bd5d52aa023ba148f3784"],["tags/BLE协议/index.html","648cdb3f3016a5999213b4dcd918c34e"],["tags/CoAP协议/index.html","a6799b50ff963ac34ae4a93543d87199"],["tags/JT808协议/index.html","5246eb1c5915e6ad67ce8724e484ba9a"],["tags/JavaScript/index.html","4486574bed88d26cf72b518c5b6c7c29"],["tags/MQTT协议/index.html","9c3d28e9f1f6fa0daeee602ad9739d5a"],["tags/NFC协议/index.html","02c1bd81792c9d2f14db43bba1e1e7a3"],["tags/RF协议/index.html","b48e82488683c3fbd9e5e244c7dbd50c"],["tags/Wi-Fi协议/index.html","3e790b3403181c80a23ab3cfb0c24a77"],["tags/Wi-Fi协议/page/2/index.html","e7d9a5e6d0fdaaf50bbd32b431c6b22b"],["tags/ZigBee协议/index.html","e2a9fbde13f9a8a81df0ae9f85e78833"],["tags/index.html","9a96f45fa8781b34a46a6712d5c4cdaa"],["tags/x86汇编/index.html","97f7daa5948d5ae9cc3da8cb54c28ea8"],["tags/x86汇编/page/2/index.html","125f4fa344b989c89dd7f26f807e99bb"],["tags/固件逆向/index.html","b613322a38043d7be81c4c07a80845ab"],["tags/技术分享/index.html","7d861345716a114b6f920d8dd29a9b00"],["tags/智能硬件安全/index.html","ed0263235ac91df54cc3e233f7326ad4"],["tags/智能设备安全分析/index.html","bc5c936346ae0df90c0f67373161609a"],["tags/漏洞复现/index.html","e1e0c15d0b8dae4aaef3f4c90b694a44"],["tags/硬件电路构成/index.html","92aba80d7273e98a0d2d18b1b4c559e2"],["tags/逆向（基础）/index.html","e6536c15c0a17964833c145ebf06b6b7"],["tags/逆向（调试）/index.html","b2e0a386059cfd509e72a35d9730ca61"],["x86汇编学习笔记_0x01/index.html","0495898809b9425e611234ed7be05aa6"],["x86汇编学习笔记_0x02/index.html","2eb05e9af4530df66321314f95cdaac5"],["x86汇编学习笔记_0x03/index.html","e9212b64954753966f6d9b06c4287385"],["x86汇编学习笔记_0x04/index.html","7f8aa94ce60bdcb5196afc2bcd88a5f2"],["x86汇编学习笔记_0x05/index.html","5fcaac812b70f1f046ab128ab4fe40c1"],["x86汇编学习笔记_0x06/index.html","cccdeb8ff032bc5df9f785fe7fe7e06a"],["x86汇编学习笔记_0x07/index.html","5ce9737ded30aa5f6df082efe3836d69"],["x86汇编学习笔记_0x08/index.html","19fd96fd3a8261da2376bc90ee445e92"],["x86汇编学习笔记_0x09/index.html","e6cfa8208c15c0b55fd87b6f84a886cc"],["x86汇编学习笔记_0x10/index.html","3b85f986ed35cf07e378083ed0392f40"],["x86汇编学习笔记_0x11/index.html","1320322c9ba60ab2cd31804f10a0d53b"],["x86汇编学习笔记_0x12/index.html","eb4ef05b26222246a4b23e16f21a9863"],["x86汇编学习笔记_0x13/index.html","0ceaaa22646514a85b8be0ad863b1047"],["固件逆向01/index.html","af6449cf35d7b47c460fc6db8bdc2187"],["固件逆向02/index.html","deb13d3232868b8c6118768c597046b7"],["智能设备安全分析笔记(0x01)/index.html","868684826fef7255bd36dc9a6eb327c7"],["汇编指令集/index.html","120de7b594210e94be919a0253db7781"],["硬件智能安全(0x01)/index.html","3021cdb11929f2f4ebda7cad6c897548"],["硬件智能安全(0x02)/index.html","1052e768a56aac284875c909eff3c38b"],["硬件智能安全(0x03)/index.html","581263c3b227ef137802ad6657eff82d"],["硬件智能安全(0x04)/index.html","0e1be31c30cbd662b2b971ce63560b72"],["硬件智能安全(0x05)_/index.html","9b2a21a1de6a09e21cc783279bc52cd9"],["硬件智能安全(0x06)_/index.html","264fc6e4c95868691ba824c360d5d8ef"],["硬件智能安全(0x07)_/index.html","8b6e2df30a646a448a6c5ee726a3ed06"],["硬件智能安全导航/index.html","a42cecae551e25f6b42291a03dc2b1a9"],["硬件智能安全（固件番外）_/index.html","8c9ab960fe679a74cd3199cec6b27633"],["硬件电路构成01/index.html","fd126f47532b302e55e430be3179ccd5"],["逆向-基础-笔记_0x01/index.html","4bfe3dcfe9cbc37f97edbe86e8d447ab"],["逆向-调试-笔记_0x01/index.html","22c72816c612f71c629dfcce5edd6ff4"],["逆向-调试-笔记_0x02/index.html","90cb2f52a10c603f96564776e04e8d74"],["逆向-调试-笔记_0x03/index.html","243ad915cda8658c0200b8b4e428089d"],["逆向-调试-笔记_0x04/index.html","57a48e480008626a670a7bb41da08405"]];
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








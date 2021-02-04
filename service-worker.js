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

var precacheConfig = [["404.html","a27debe10cc3f84a23dd80b56605f2ce"],["AMQP协议0_1/index.html","78684168837428ea9903d825430c750e"],["ARM汇编01/index.html","d67a7d8f04f3ba2019b270dadb832d48"],["ARM汇编02/index.html","1248de88e5ec984ef7d82f1e26e25eff"],["ARM汇编指令集/index.html","1c5d231a1f0ae1dbfa6803763a00280e"],["Andoird反编译01/index.html","9e82f04ead4fe57d51d60509c8ef323b"],["BLE协议01/index.html","c2bf7984d45bf68c9d13cbfc566b2933"],["BLE协议02/index.html","cddcfe68bb8798e4ab5bc571806f578c"],["CVE-2019-5418/index.html","a8e5da424cda56a3e8f2e08d3f622e1d"],["CVE-2019-9766/index.html","367f308c0f40028da7366debbb7440fb"],["CoAP协议01/index.html","2409557386eb180428f736b5419006e8"],["JS_0X02/index.html","5df52301df9f1e0e5448ef3ea925bad2"],["JS_0X03/index.html","bcbe4ee36d9aa03a5eaefb815d0e2048"],["JS_0X04/index.html","23ab562bfecf57fe011df118c796447e"],["JS_0X05/index.html","dd95d743e1f6c7e3d15069e023238d9b"],["JS_0X06/index.html","69cb4930e144be7798bdea524767199d"],["JS_0X07/index.html","3aafc940d89cacdedf8c8560672a6060"],["JS_0X08/index.html","0c959f4184fe674bd5665e1b55605a49"],["JS_0X09/index.html","0763f88c62eaf16385fb1df988b5dc7b"],["JS_0X10/index.html","aa227b17ca1e3b4a246932e7c6b75229"],["JS笔记(0X01)/index.html","48aa3dc9be0cdff072a49b9585ebcaf6"],["JT808协议01/index.html","70263e3b3dcd852e5d65bc64807840b7"],["MQTT协议01/index.html","02597f8c5fd68beff6d9900e25a1ba06"],["NFC协议01/index.html","3060e3f6c8fb5330bb9a3e60eac89ca7"],["NFC协议02/index.html","da3f72dfa36aa1e0c88fbbdf024e2285"],["RF协议01/index.html","e3af6d40c0c1fea9830fde782a2a46fa"],["RF协议02/index.html","bed0d4b5d17fd043819e5905cc958f7f"],["RF协议03/index.html","6cdc73dc7749fc1bc479f74b641dfcc6"],["Wi-Fi协议01/index.html","4cef6f1a7804debf2b2b3f3d1692d3cf"],["Wi-Fi协议02/index.html","88ef20e46ceed98b2eda98b580916f48"],["Wi-Fi协议03/index.html","a879df759c38017aba34a6d95cfa898c"],["Wi-Fi协议04/index.html","b2c24cd55d87cf118b9fe6e575645f38"],["Wi-Fi协议05/index.html","762a53c5ac5e04f759af02f9c096df39"],["Wi-Fi协议06/index.html","68a972b1d36b5c29a71ed73376ffccfd"],["Wi-Fi协议07/index.html","cf94eaa25f2774b163653d2a4758aaca"],["Wi-Fi协议08/index.html","a246f8f97b15764650d632156adb07e4"],["Wi-Fi协议09/index.html","2ac2f7c9f9db236e33f5ad4d8ddabda7"],["Wi-Fi协议10/index.html","0b42fae407138261f38a1aceea959e6b"],["Wi-Fi协议11/index.html","2d3dce998269871dc7daed36a5204d39"],["ZigBee协议01/index.html","7d8bb6b10b7dde3ad5fca6dd82ec028d"],["ZigBee协议02/index.html","fcec72d09d09717924f2e417836b81ed"],["archives/2020/08/index.html","b24b2e8ebc619709727d93d25eba36c2"],["archives/2020/09/index.html","0fa10f18796b1b7e38952ea45ed4d85a"],["archives/2020/09/page/2/index.html","d9bfbb4472fa33513dca1166bb8771de"],["archives/2020/09/page/3/index.html","5d06ce07336ee08ebafee96bf77a8cfa"],["archives/2020/10/index.html","cf8cf0db1efac9a8dbe7724d167d0c90"],["archives/2020/10/page/2/index.html","97e59ce5b21a4eb9b2d0ab0fcfeec10a"],["archives/2020/11/index.html","fd7c8d1b7a2b03afcdb407a07286649e"],["archives/2020/11/page/2/index.html","4a38f78a7b1af618b8f31bd2fa2d1a0f"],["archives/2020/12/index.html","94d0fa17ff4feea0bad902192610c8c4"],["archives/2020/index.html","5d62e408d2a2ef6d265131c3c7ce2c41"],["archives/2020/page/2/index.html","4736560acb04c01f4cfc75ecbb28637d"],["archives/2020/page/3/index.html","48960f1ec3ee2be782f15c91b18fa964"],["archives/2020/page/4/index.html","6593a8ab35a5ccc6f53db5e9c375dfa9"],["archives/2020/page/5/index.html","0c3598677d6cf34a6b95eadceb802e64"],["archives/2020/page/6/index.html","fbcaaf6ab933671453e812238b1d4052"],["archives/2020/page/7/index.html","3d175f8f267c4a4331b135213581a833"],["archives/2020/page/8/index.html","6ebc92cd204f7493df6fb9b8a5df578c"],["archives/2021/01/index.html","cfe221741904a6f459594c7ebcbb23b1"],["archives/2021/index.html","2cc3f687d0ce1a2a6b10210466481d3c"],["archives/index.html","1f249d2f3f9bad86a1379ab661d06a0f"],["archives/page/2/index.html","f85c8d40ba09ba47ae1742528f1a51bd"],["archives/page/3/index.html","fc56613054d12a5aec8ac469a69bf11e"],["archives/page/4/index.html","d77b13bba00c1bee2b76dcf80d93525b"],["archives/page/5/index.html","2002c889d876250fd6bdca343a952384"],["archives/page/6/index.html","f05ff02aaace69c1e8bc5c28c54246a4"],["archives/page/7/index.html","36c9e1c4db6b006e4be0ae92ceff0179"],["archives/page/8/index.html","dfd7d5f6ba5829dc43366af8a920cca8"],["baidu_verify_code-74acARe7VV.html","cc0615cd672d341c81aaf64210b517fd"],["categories/ARM汇编/index.html","3082c2e3effe1323cb6e357a4a9c8c4e"],["categories/Android反编译/index.html","92d220825ddabe549c2feaebd8ad426c"],["categories/CVE/index.html","6d0a203103043abac671fa0f02bc0c5c"],["categories/JS学习笔记/index.html","93b7cd4511bf1644f1c10e1624d5eb63"],["categories/index.html","2a55ef026730b29a3a281b2055a3e6ed"],["categories/x86汇编/index.html","40d0418c9b81b41d2e75481e61860b7c"],["categories/x86汇编/page/2/index.html","1fda94f29d542c90252f30885f13ec2f"],["categories/固件逆向/index.html","6000cb241450cb8b91499aa793fcc584"],["categories/智能硬件安全/index.html","268ac8f9c557128de794ee137cc6394e"],["categories/智能设备安全分析/index.html","aabeea8ce1c205246c993803f12efa57"],["categories/硬件电路构成/index.html","2353fed2a0679c8821694be0f3715c6a"],["categories/网络通信协议/index.html","7f032b21e79798ef49fd17cb3e651fe9"],["categories/网络通信协议/page/2/index.html","7449405d6972f014bcf61d6064427fad"],["categories/网络通信协议/page/3/index.html","27d0ef33a1d53349584dec6ee5948740"],["categories/逆向/index.html","772dfb9adc797c924e3a314c91bf52fe"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","6a7690e1f92abb9e90d863a2fde343a2"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","867a1d015f94a6079e09259e8656fe87"],["page/2/index.html","115e83acf3067829aee24e87b41b8623"],["page/3/index.html","dbec762e59a76993bffac260d238577b"],["page/4/index.html","e02a3e9728a63dd5930b4ca50f64c0ca"],["page/5/index.html","ca49cc5ca75766b6fdb3eb47a5e22d29"],["page/6/index.html","15d8c20ccd2fdf664ddc9dff84f93d55"],["page/7/index.html","0e6d8bb31a9af96fbaddab36f99930f8"],["page/8/index.html","b798e194241397b6f00dc16b107f9ca3"],["tags/AMQP协议-暂无/index.html","5fac0cc36ccb4d86e65b3c0d08203072"],["tags/ARM汇编/index.html","230d0e75cb005f554643509b138c6ad3"],["tags/Android反编译/index.html","f0269f7d9c9a315b384ad600de3efae4"],["tags/BLE协议/index.html","9010e1f7c21e52b881ad5fed995f756e"],["tags/CoAP协议/index.html","ad3beaaa668706d026b0522f56cab925"],["tags/JT808协议/index.html","b928aaa14fa49a466bc310c52ba633c4"],["tags/JavaScript/index.html","9f2b2e7fde4e73dbc79e62340c5a4c4d"],["tags/MQTT协议/index.html","922577221190452e9a8bf8b9554d6b93"],["tags/NFC协议/index.html","6bab8543ff6683d35ea38880b01e22a6"],["tags/RF协议/index.html","9f5ae5e1c791ccbda9f6bfc1514e0204"],["tags/Wi-Fi协议/index.html","2732ad76b6c6d4ae000e8add35a59cf4"],["tags/Wi-Fi协议/page/2/index.html","bbe423e1b7834ac8e468fecd11178fe5"],["tags/ZigBee协议/index.html","c149701bdf6567a24d82dbf11d0733c5"],["tags/index.html","40a24115f9b6a56d45942e5e1b57bbb1"],["tags/x86汇编/index.html","e3e9722608ad8306852792fa9452e5e5"],["tags/x86汇编/page/2/index.html","c054f9089f56b954a138327f89503003"],["tags/固件逆向/index.html","4a1996be28b2370dd42a14e9d4c53955"],["tags/智能硬件安全/index.html","368e9d9fd4445875fc4a76af3cac1369"],["tags/智能设备安全分析/index.html","2341f3e476a170be0dd5a49dc39c4e00"],["tags/漏洞复现/index.html","e12d0d372bf883dba41ba1753a492a0e"],["tags/硬件电路构成/index.html","7b9bd322b83a6ceadae393242facaa36"],["tags/逆向（基础）/index.html","cd51afa65a376b0e3b6bf91ebf7b5657"],["tags/逆向（调试）/index.html","bf749d095efc25c599e5861f8e6988fd"],["x86汇编学习笔记_0x01/index.html","c558cf4b558e9bc83b5616a01fe8ea18"],["x86汇编学习笔记_0x02/index.html","5f0fdeee976f3216b9b9ccf13f218ab6"],["x86汇编学习笔记_0x03/index.html","f30038b21470061dfd79b538a258cebd"],["x86汇编学习笔记_0x04/index.html","bb78caef4b65de82091957119d8e488d"],["x86汇编学习笔记_0x05/index.html","288178b8d776a68dee0946f4c329fe91"],["x86汇编学习笔记_0x06/index.html","aca4b3eaa0db9cc06df7b77a8ac50fbe"],["x86汇编学习笔记_0x07/index.html","754182861c053b7919cb522cd1c0952f"],["x86汇编学习笔记_0x08/index.html","5612274311406c11ffe07e39d3ba6bb3"],["x86汇编学习笔记_0x09/index.html","596dd99cc0854765b517e531e097b705"],["x86汇编学习笔记_0x10/index.html","05f7b918fd845856e4fcf099a99718bb"],["x86汇编学习笔记_0x11/index.html","274aeed0a92fb0263381718f03597fed"],["x86汇编学习笔记_0x12/index.html","61c1fb76017a2cce00a9e021f8579a94"],["x86汇编学习笔记_0x13/index.html","3dd5249f0e3804c93ecb73473ee073f6"],["固件逆向01/index.html","03fe9ab809b278e7bdb2d96064429346"],["固件逆向02/index.html","2f7e355195c188a1e1fe7cf095412083"],["智能设备安全分析笔记(0x01)/index.html","0e299e489886bc01a618b89265f8de8b"],["汇编指令集/index.html","2c93d32ffef34424aa00e6203300de3b"],["硬件智能安全(0x01)/index.html","8c6f18577d4046aef73004a64dd86093"],["硬件智能安全(0x02)/index.html","f2c3c60905c17bb961ed1c54cc4e1da0"],["硬件智能安全(0x03)/index.html","0ee427a6e61d2ff017d2b4b194e49247"],["硬件智能安全(0x04)/index.html","716c22c06c858a54a7f1b00780771faa"],["硬件智能安全(0x05)_/index.html","994ad87c546a60bb50411f54612fa09e"],["硬件智能安全(0x06)_/index.html","84a6795f89faf5eb7382f554f764b553"],["硬件智能安全(0x07)_/index.html","fdc10dff73ea4c7a32ed40ef392a4a00"],["硬件智能安全导航/index.html","04c3004157f4dce51dc08fa50781689d"],["硬件智能安全（固件番外）_/index.html","04c5e146fb17c0d84235c370617a213b"],["硬件电路构成01/index.html","a3aa1eb3496d29c5beb93e45c8882dee"],["逆向-基础-笔记_0x01/index.html","a38b45bdc19562251e55eadfb0d927e8"],["逆向-调试-笔记_0x01/index.html","d3fda1e32041b665bd57e495ec3b40db"],["逆向-调试-笔记_0x02/index.html","5ef0d2368c97678820056c515b80a898"],["逆向-调试-笔记_0x03/index.html","89738e7a46de7bf553e293a0a998a03a"],["逆向-调试-笔记_0x04/index.html","c9b01ae50734cdfe20064b0cf9d5d9bc"]];
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








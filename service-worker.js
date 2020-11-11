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

var precacheConfig = [["404.html","e86e22258fbfefca8f714282a32a1cad"],["AMQP协议0_1/index.html","efc8e992266ee959ad62556a558893a9"],["ARM汇编01/index.html","44b3b627ddd68a10d21e9039fa5d03b0"],["ARM汇编02/index.html","6da6442901af5d3caa56521bab3c945c"],["ARM汇编指令集/index.html","27eef23a51d365ecf0269069bc0f5a36"],["Andoird反编译01/index.html","20b2cf2d965d69547eba61c16f234ec9"],["BLE协议01/index.html","f8ac6681e399ac64ce292d30d94a231a"],["CVE-2019-5418/index.html","1e36cde3f468c6dc777fafb4526f2913"],["CVE-2019-9766/index.html","85334a2dd29583c1d36579f532e1dc4c"],["CoAP协议01/index.html","b1d7c07190f0bda24ccb006719659bcb"],["JS_0X02/index.html","d3102ff489df27573706b615cd511b23"],["JS_0X03/index.html","a2944bf7543af89978a42ef2f6feafa9"],["JS_0X04/index.html","f6710359249465fffb86426bfefe2cc8"],["JS_0X05/index.html","1454fe1ee66d9f7268cc4423f566e0d7"],["JS_0X06/index.html","cb33d4b1b428d7653fab9bd90bb75e0b"],["JS_0X07/index.html","ae1a51fa7f051ec1d460c5995ffeb83a"],["JS_0X08/index.html","eb4eaff9da215a040798598690d88a6f"],["JS_0X09/index.html","2ba058299d6047d2e5a7223a2e81b106"],["JS_0X10/index.html","f1767f5c9e25f89916d762d511447875"],["JS笔记(0X01)/index.html","fd6f4d41790bc7e110e8ebae4a35c9bc"],["JT808协议01/index.html","aaaeefb5de0e44a65625ec9271429143"],["MQTT协议01/index.html","741831268a948ac445731a571e015e8c"],["NFC协议01/index.html","1e9676a914e920900b855a0fe7b05df5"],["RF协议01/index.html","de84a083ded304c6a54c005cd4a8990e"],["Wi-Fi协议01/index.html","6702798d425a9efa119cce8d93295b38"],["Wi-Fi协议02/index.html","b52ac1b93f3950cf4663420eaab0a765"],["Wi-Fi协议03/index.html","c2df9701843663ec702196c29253497d"],["Wi-Fi协议04/index.html","5f65cde5201c9a1fd394a2687995bada"],["Wi-Fi协议05/index.html","d6b3863146fe57990fb3e1b047539b98"],["Wi-Fi协议06/index.html","e7a044be04f13405a2d165453726319b"],["ZigBee协议01/index.html","d3bac194b6d53733345d20c242c737cc"],["archives/2020/08/index.html","6cdfaac6762d9d64200dba3ff8e4e1fe"],["archives/2020/09/index.html","014e776490936a6718af650120898180"],["archives/2020/09/page/2/index.html","6dacd6b08eb847f8534f07202a7bf0ce"],["archives/2020/09/page/3/index.html","577a821042582992b70fb07a1dd00802"],["archives/2020/10/index.html","378311d79f442016e268d236086650fa"],["archives/2020/10/page/2/index.html","0f21cd2aa8c4ee7f141d7acab34cd61c"],["archives/2020/11/index.html","219276075379bea131a01d33f5244a4c"],["archives/2020/12/index.html","e3adeba3531aac9ca5c544e6b5af88ff"],["archives/2020/index.html","8202ee2a1fe149d26ee55e03cbd3e99b"],["archives/2020/page/2/index.html","83f9be70ffa6ca5b62e56cf2bdfc633e"],["archives/2020/page/3/index.html","688a3fc06ba86b3cb75a75c11f0f2aaf"],["archives/2020/page/4/index.html","138a236c49c16ac755d34491eb905203"],["archives/2020/page/5/index.html","3b884bb788371c04cbbc18307532fcdd"],["archives/2020/page/6/index.html","5f6514900bce251d2ce65f0369ca21ab"],["archives/index.html","f31d447156cf57b13e557d23a482b442"],["archives/page/2/index.html","15de08d4e1c44b13a1d5c5e70f291812"],["archives/page/3/index.html","ce0b7a1ebdbe010d723a31eb4cc18306"],["archives/page/4/index.html","55121bbbb04b7992fe1faf62938e8d51"],["archives/page/5/index.html","bcf69a8d9ac0ba84ac9abb77a29212b8"],["archives/page/6/index.html","21783bd1a9f25e20d716e1ca3a9a4550"],["categories/ARM汇编/index.html","a4fcce31d926fb95bc75dbf268eee787"],["categories/Android反编译/index.html","8fd088e70253955f3779bee2eb9fe1f7"],["categories/CVE/index.html","ac8f22ce0d334cad352d859d3c4c4b04"],["categories/JS学习笔记/index.html","75a322e920db34a89644a8c2425b74e8"],["categories/index.html","67820abaf52afd92172f5bf0c622f718"],["categories/x86汇编/index.html","e208c4f81c5eac784db8ce72546c763f"],["categories/x86汇编/page/2/index.html","59d6ccc20e0bbad3403aea6ac8acd200"],["categories/固件逆向/index.html","c973e6f097c4fed6070af26e48f72778"],["categories/智能硬件安全/index.html","979b5e1967f1730c9699695a84e1a101"],["categories/硬件电路构成/index.html","e876fdb5272dfac1a62aa9bb0e16a861"],["categories/网络通信协议/index.html","68423f0219652d5b7f4c44a4ed9514d4"],["categories/网络通信协议/page/2/index.html","2903c6919c52847dbfc4f0f528755cd9"],["categories/逆向/index.html","8a0c51a8bc7f1a18204d81327b6d3075"],["css/index.css","0821dd7ca4098a0ba7f5a76dd144425f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["imgs/wbz1.jpg","596721b17f2254b09bd4cdc8c27a2ec9"],["imgs/wbz2.jpg","dff0eb5f8dd158e411bee1cc51dc1840"],["imgs/wbz3.jpg","0ab0424c285dccfef8ea661241df0cde"],["imgs/wbz4.jpg","07a74d9283141406764f47cdcb14ae02"],["imgs/wbz5.jpg","5350f48653b2986183dc22213a0c451d"],["index.html","1572752f2ca9c9baec335f8b2b84ed82"],["js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","40ad4ee6164012c1ac7e735b6fc7c477"],["page/2/index.html","6657c105554f025b7e9ca717b3d43d4f"],["page/3/index.html","1c36f74ed42c7ba01b381d038cc0b368"],["page/4/index.html","23fff932d91837ac061700d765d7d9c4"],["page/5/index.html","a4da45da99361f1148c0c622d2bba236"],["page/6/index.html","f014d8aa3a897374bd831fe000523f4c"],["tags/AMQP协议-暂无/index.html","4d9942ad15658ba209b023b074d32f5d"],["tags/ARM汇编/index.html","9b64b1169ae1d13aee0e63d7ea56cbe9"],["tags/Android反编译/index.html","0d621bcc8c52a6b3eb95d6f193850688"],["tags/BLE协议/index.html","3d1bf26856d5b097a212ec212de5ffa2"],["tags/CoAP协议/index.html","4f757b5c1ce36fd09fb588e426676483"],["tags/JT808协议/index.html","a3e1019b0e04d6b2a890e181efecfafa"],["tags/JavaScript/index.html","f81a6c2d3350edb26b13a125b5343085"],["tags/MQTT协议/index.html","88c394c027e6a857cf0ca26985d1b30a"],["tags/NFC协议/index.html","bf47a201042f34638cd34d84d20fdbd5"],["tags/RF协议/index.html","ee3e99a6f608d88098dd2dcc1c7aae61"],["tags/Wi-Fi协议/index.html","1694ec3f944c799efc56bed9c6595d92"],["tags/ZigBee协议/index.html","24c13bf5ea25f31dc63b1dd91d082e89"],["tags/index.html","7dee69712735efb8ecb24c7d0990e3dc"],["tags/x86汇编/index.html","ca18083d90849d281c27a6467ff57ca0"],["tags/x86汇编/page/2/index.html","2d8c8c81af9354ff642e6d14450af05a"],["tags/固件逆向/index.html","7433f630490a8660b6276f54968887ff"],["tags/智能硬件安全/index.html","27316a9908b9f92a219332df902495cf"],["tags/漏洞复现/index.html","feda6c84c67a5214d7f62cb6b947c43c"],["tags/硬件电路构成/index.html","ee3ea298dd9fc961591f1f75e95e31b0"],["tags/逆向（基础）/index.html","48e4642901da758fe441217504d439a4"],["tags/逆向（调试）/index.html","cbf046e5a155e2361e92bffb26902adf"],["x86汇编学习笔记_0x01/index.html","ae73a1981fa92a5a4380ec50a0cf5ebd"],["x86汇编学习笔记_0x02/index.html","f877dada407949eb1e74c2fa03986ffb"],["x86汇编学习笔记_0x03/index.html","c109e10da8adfba4fc8e8fcc6f67233a"],["x86汇编学习笔记_0x04/index.html","69ae2cb37060f6dd2536c3fb738e2180"],["x86汇编学习笔记_0x05/index.html","0cd01d01cf4114d9750b549cbfb98f14"],["x86汇编学习笔记_0x06/index.html","e6c081f90c97009a6374508c3473cb4c"],["x86汇编学习笔记_0x07/index.html","272135b30e518afa23bd21db256d2385"],["x86汇编学习笔记_0x08/index.html","e99364c96afb07d8cf7947d46e927238"],["x86汇编学习笔记_0x09/index.html","6dbfb54fec9b378cf64fad851128be01"],["x86汇编学习笔记_0x10/index.html","bd44ff05e597fe95caac61acf0e7e55a"],["x86汇编学习笔记_0x11/index.html","ae38501489fbe06f1045c693e66952f9"],["x86汇编学习笔记_0x12/index.html","7f104f8f3457e556cdb4d55a89ab87ef"],["x86汇编学习笔记_0x13/index.html","bdf5ac075b21787a26c6e3c5f4ddf0ad"],["固件逆向01/index.html","c8eb9f728b4e26efc478db310ac0c137"],["汇编指令集/index.html","1874ae33d90a0357973d15d3ba0a307d"],["硬件智能安全(0x01)/index.html","a73f176c0bca8b9d3a60dba7d0a73a02"],["硬件智能安全(0x02)/index.html","fd1b95a9bf7c78c1452b06359aaa429b"],["硬件智能安全(0x03)/index.html","da727d8da8820fc917365ce3b18ebf76"],["硬件智能安全(0x04)/index.html","0689cbad960e7612b294ff84b9118a7a"],["硬件智能安全(0x05)_/index.html","863102da6e9dab2c1011b4eb8e7d9d69"],["硬件智能安全(0x06)_/index.html","ddafad5442d9ababcabfd286aaf478e6"],["硬件智能安全(0x07)_/index.html","0bf8e428c5edaca42de295027253919e"],["硬件智能安全导航/index.html","83a0e234921565c2bea3b91eed4111ca"],["硬件电路构成01/index.html","12236d6ec5892717e08116da7ff28e48"],["逆向-基础-笔记_0x01/index.html","ce2d66efa806b17fd67cadf4f0aff93e"],["逆向-调试-笔记_0x01/index.html","f4e96af7fdce9774997ec0368158185f"],["逆向-调试-笔记_0x02/index.html","f124f5de29795a35544404df0d7efffe"],["逆向-调试-笔记_0x03/index.html","058cdd2a979a479f55b753dbe583eec2"],["逆向-调试-笔记_0x04/index.html","31b45efe29034f80b44ee8a7867d3b4e"]];
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








/*! For license information please see 9.ce1fed17.chunk.js.LICENSE.txt */
(this.webpackJsonptgstat=this.webpackJsonptgstat||[]).push([[9],{248:function(t,e,n){"use strict";n.r(e);var r,i,o,a=n(27),s=(n(238),n(1)),c=n(6),u=n(17),p=n(28),f="0.4.17",l=f,g="FB-PERF-TRACE-MEASURE",m="_wt_",h="_fcp",d="_fid",v="@firebase/performance/config",b="@firebase/performance/configexpire",_="Performance",y=((r={})["trace started"]="Trace {$traceName} was started before.",r["trace stopped"]="Trace {$traceName} is not running.",r["nonpositive trace startTime"]="Trace {$traceName} startTime should be positive.",r["nonpositive trace duration"]="Trace {$traceName} duration should be positive.",r["no window"]="Window is not available.",r["no app id"]="App id is not available.",r["no project id"]="Project id is not available.",r["no api key"]="Api key is not available.",r["invalid cc log"]="Attempted to queue invalid cc event",r["FB not default"]="Performance can only start when Firebase app instance is the default one.",r["RC response not ok"]="RC response is not ok",r["invalid attribute name"]="Attribute name {$attributeName} is invalid.",r["invalid attribute value"]="Attribute value {$attributeValue} is invalid.",r["invalid custom metric name"]="Custom metric name {$customMetricName} is invalid",r["invalid String merger input"]="Input for String merger is invalid, contact support team to resolve.",r),I=new c.b("performance",_,y),T=new u.b(_);T.logLevel=u.a.INFO;var E,w=function(){function t(t){if(this.window=t,!t)throw I.create("no window");this.performance=t.performance,this.PerformanceObserver=t.PerformanceObserver,this.windowLocation=t.location,this.navigator=t.navigator,this.document=t.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=t.localStorage),t.perfMetrics&&t.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=t.perfMetrics.onFirstInputDelay)}return t.prototype.getUrl=function(){return this.windowLocation.href.split("?")[0]},t.prototype.mark=function(t){this.performance&&this.performance.mark&&this.performance.mark(t)},t.prototype.measure=function(t,e,n){this.performance&&this.performance.measure&&this.performance.measure(t,e,n)},t.prototype.getEntriesByType=function(t){return this.performance&&this.performance.getEntriesByType?this.performance.getEntriesByType(t):[]},t.prototype.getEntriesByName=function(t){return this.performance&&this.performance.getEntriesByName?this.performance.getEntriesByName(t):[]},t.prototype.getTimeOrigin=function(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)},t.prototype.requiredApisAvailable=function(){return fetch&&Promise&&this.navigator&&this.navigator.cookieEnabled?!!Object(c.y)()||(T.info("IndexedDB is not supported by current browswer"),!1):(T.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled."),!1)},t.prototype.setupObserver=function(t,e){this.PerformanceObserver&&new this.PerformanceObserver((function(t){for(var n=0,r=t.getEntries();n<r.length;n++){var i=r[n];e(i)}})).observe({entryTypes:[t]})},t.getInstance=function(){return void 0===i&&(i=new t(o)),i},t}();function A(t,e){var n=t.length-e.length;if(n<0||n>1)throw I.create("invalid String merger input");for(var r=[],i=0;i<t.length;i++)r.push(t.charAt(i)),e.length>i&&r.push(e.charAt(i));return r.join("")}var S,M,N=function(){function t(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.flTransportEndpointUrl=A("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),this.transportKey=A("AzSC8r6ReiGqFMyfvgow","Iayx0u-XT3vksVM-pIV"),this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12}return t.prototype.getAppId=function(){var t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.appId;if(!t)throw I.create("no app id");return t},t.prototype.getProjectId=function(){var t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.projectId;if(!t)throw I.create("no project id");return t},t.prototype.getApiKey=function(){var t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.apiKey;if(!t)throw I.create("no api key");return t},t.prototype.getFlTransportFullUrl=function(){return this.flTransportEndpointUrl.concat("?key=",this.transportKey)},t.getInstance=function(){return void 0===E&&(E=new t),E},t}();function k(){return S}!function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.VISIBLE=1]="VISIBLE",t[t.HIDDEN=2]="HIDDEN"}(M||(M={}));var O=["firebase_","google_","ga_"],R=new RegExp("^[a-zA-Z]\\w*$");function U(){var t=w.getInstance().navigator;return"serviceWorker"in t?t.serviceWorker.controller?2:3:1}function P(){switch(w.getInstance().document.visibilityState){case"visible":return M.VISIBLE;case"hidden":return M.HIDDEN;default:return M.UNKNOWN}}function j(){var t=w.getInstance().navigator.connection;switch(t&&t.effectiveType){case"slow-2g":return 1;case"2g":return 2;case"3g":return 3;case"4g":return 4;default:return 0}}var B="0.0.1",F=!0,C="FIREBASE_INSTALLATIONS_AUTH";function D(t){var e=function(){var t=w.getInstance().localStorage;if(!t)return;var e=t.getItem(b);if(!e||(n=e,!(Number(n)>Date.now())))return;var n;var r=t.getItem(v);if(!r)return;try{return JSON.parse(r)}catch(i){return}}();return e?(q(e),Promise.resolve()):function(t){return function(){var t=N.getInstance().installationsService.getToken();return t.then((function(t){})),t}().then((function(e){var n="https://firebaseremoteconfig.googleapis.com/v1/projects/"+N.getInstance().getProjectId()+"/namespaces/fireperf:fetch?key="+N.getInstance().getApiKey(),r=new Request(n,{method:"POST",headers:{Authorization:C+" "+e},body:JSON.stringify({app_instance_id:t,app_instance_id_token:e,app_id:N.getInstance().getAppId(),app_version:l,sdk_version:B})});return fetch(r).then((function(t){if(t.ok)return t.json();throw I.create("RC response not ok")}))})).catch((function(){T.info(L)}))}(t).then(q).then((function(t){return function(t){var e=w.getInstance().localStorage;if(!t||!e)return;e.setItem(v,JSON.stringify(t)),e.setItem(b,String(Date.now()+60*N.getInstance().configTimeToLive*60*1e3))}(t)}),(function(){}))}var L="Could not fetch config, will use default configs";function q(t){if(!t)return t;var e=N.getInstance(),n=t.entries||{};return void 0!==n.fpr_enabled?e.loggingEnabled="true"===String(n.fpr_enabled):e.loggingEnabled=F,n.fpr_log_source&&(e.logSource=Number(n.fpr_log_source)),n.fpr_log_endpoint_url&&(e.logEndPointUrl=n.fpr_log_endpoint_url),n.fpr_log_transport_key&&(e.transportKey=n.fpr_log_transport_key),void 0!==n.fpr_vc_network_request_sampling_rate&&(e.networkRequestsSamplingRate=Number(n.fpr_vc_network_request_sampling_rate)),void 0!==n.fpr_vc_trace_sampling_rate&&(e.tracesSamplingRate=Number(n.fpr_vc_trace_sampling_rate)),e.logTraceAfterSampling=W(e.tracesSamplingRate),e.logNetworkAfterSampling=W(e.networkRequestsSamplingRate),t}function W(t){return Math.random()<=t}var x,K=1;function V(){return K=2,x=x||function(){var t=w.getInstance().document;return new Promise((function(e){if(t&&"complete"!==t.readyState){var n=function n(){"complete"===t.readyState&&(t.removeEventListener("readystatechange",n),e())};t.addEventListener("readystatechange",n)}else e()}))}().then((function(){return function(){var t=N.getInstance().installationsService.getId();return t.then((function(t){S=t})),t}()})).then((function(t){return D(t)})).then((function(){return J()}),(function(){return J()}))}function J(){K=3}var $,z=1e4,H=3,Q=[],G=!1;function X(t){setTimeout((function(){if(0!==H)return Q.length?void function(){var t=Q.splice(0,1e3),e=t.map((function(t){return{source_extension_json_proto3:t.message,event_time_ms:String(t.eventTime)}}));(function(t,e){return function(t){var e=N.getInstance().getFlTransportFullUrl();return fetch(e,{method:"POST",body:JSON.stringify(t)})}(t).then((function(t){return t.ok||T.info("Call to Firebase backend failed."),t.json()})).then((function(t){var n=Number(t.nextRequestWaitMillis),r=z;isNaN(n)||(r=Math.max(n,r));var i=t.logResponseDetails;Array.isArray(i)&&i.length>0&&"RETRY_REQUEST_LATER"===i[0].responseAction&&(Q=Object(s.f)(Object(s.f)([],e),Q),T.info("Retry transport request later.")),H=3,X(r)}))})({request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:N.getInstance().logSource,log_event:e},t).catch((function(){Q=Object(s.f)(Object(s.f)([],t),Q),H--,T.info("Tries left: "+H+"."),X(z)}))}():X(z)}),t)}function Y(t){if(!t.eventTime||!t.message)throw I.create("invalid cc log");Q=Object(s.f)(Object(s.f)([],Q),[t])}function Z(t,e){$||($=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];Y({message:t.apply(void 0,e),eventTime:Date.now()})}}(nt)),$(t,e)}function tt(t){var e=N.getInstance();!e.instrumentationEnabled&&t.isAuto||(e.dataCollectionEnabled||t.isAuto)&&w.getInstance().requiredApisAvailable()&&(t.isAuto&&P()!==M.VISIBLE||(3===K?et(t):V().then((function(){return et(t)}),(function(){return et(t)}))))}function et(t){if(k()){var e=N.getInstance();e.loggingEnabled&&e.logTraceAfterSampling&&setTimeout((function(){return Z(t,1)}),0)}}function nt(t,e){return 0===e?function(t){var e={url:t.url,http_method:t.httpMethod||0,http_response_code:200,response_payload_bytes:t.responsePayloadBytes,client_start_time_us:t.startTimeUs,time_to_response_initiated_us:t.timeToResponseInitiatedUs,time_to_response_completed_us:t.timeToResponseCompletedUs},n={application_info:rt(),network_request_metric:e};return JSON.stringify(n)}(t):function(t){var e={name:t.name,is_auto:t.isAuto,client_start_time_us:t.startTimeUs,duration_us:t.durationUs};0!==Object.keys(t.counters).length&&(e.counters=t.counters);var n=t.getAttributes();0!==Object.keys(n).length&&(e.custom_attributes=n);var r={application_info:rt(),trace_metric:e};return JSON.stringify(r)}(t)}function rt(){return{google_app_id:N.getInstance().getAppId(),app_instance_id:k(),web_app_info:{sdk_version:l,page_url:w.getInstance().getUrl(),service_worker_status:U(),visibility_state:P(),effective_connection_type:j()},application_process_state:0}}var it=["_fp",h,d];var ot=function(){function t(t,e,n){void 0===e&&(e=!1),this.name=t,this.isAuto=e,this.state=1,this.customAttributes={},this.counters={},this.api=w.getInstance(),this.randomId=Math.floor(1e6*Math.random()),this.isAuto||(this.traceStartMark="FB-PERF-TRACE-START-"+this.randomId+"-"+this.name,this.traceStopMark="FB-PERF-TRACE-STOP-"+this.randomId+"-"+this.name,this.traceMeasure=n||"FB-PERF-TRACE-MEASURE-"+this.randomId+"-"+this.name,n&&this.calculateTraceMetrics())}return t.prototype.start=function(){if(1!==this.state)throw I.create("trace started",{traceName:this.name});this.api.mark(this.traceStartMark),this.state=2},t.prototype.stop=function(){if(2!==this.state)throw I.create("trace stopped",{traceName:this.name});this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),tt(this)},t.prototype.record=function(t,e,n){if(t<=0)throw I.create("nonpositive trace startTime",{traceName:this.name});if(e<=0)throw I.create("nonpositive trace duration",{traceName:this.name});if(this.durationUs=Math.floor(1e3*e),this.startTimeUs=Math.floor(1e3*t),n&&n.attributes&&(this.customAttributes=Object(s.a)({},n.attributes)),n&&n.metrics)for(var r=0,i=Object.keys(n.metrics);r<i.length;r++){var o=i[r];isNaN(Number(n.metrics[o]))||(this.counters[o]=Number(Math.floor(n.metrics[o])))}tt(this)},t.prototype.incrementMetric=function(t,e){void 0===e&&(e=1),void 0===this.counters[t]?this.putMetric(t,e):this.putMetric(t,this.counters[t]+e)},t.prototype.putMetric=function(t,e){if(n=t,r=this.name,0===n.length||n.length>100||!(r&&r.startsWith(m)&&it.indexOf(n)>-1)&&n.startsWith("_"))throw I.create("invalid custom metric name",{customMetricName:t});var n,r;this.counters[t]=function(t){var e=Math.floor(t);return e<t&&T.info("Metric value should be an Integer, setting the value as : "+e+"."),e}(e)},t.prototype.getMetric=function(t){return this.counters[t]||0},t.prototype.putAttribute=function(t,e){var n,r=!(0===(n=t).length||n.length>40)&&!O.some((function(t){return n.startsWith(t)}))&&!!n.match(R),i=function(t){return 0!==t.length&&t.length<=100}(e);if(r&&i)this.customAttributes[t]=e;else{if(!r)throw I.create("invalid attribute name",{attributeName:t});if(!i)throw I.create("invalid attribute value",{attributeValue:e})}},t.prototype.getAttribute=function(t){return this.customAttributes[t]},t.prototype.removeAttribute=function(t){void 0!==this.customAttributes[t]&&delete this.customAttributes[t]},t.prototype.getAttributes=function(){return Object(s.a)({},this.customAttributes)},t.prototype.setStartTime=function(t){this.startTimeUs=t},t.prototype.setDuration=function(t){this.durationUs=t},t.prototype.calculateTraceMetrics=function(){var t=this.api.getEntriesByName(this.traceMeasure),e=t&&t[0];e&&(this.durationUs=Math.floor(1e3*e.duration),this.startTimeUs=Math.floor(1e3*(e.startTime+this.api.getTimeOrigin())))},t.createOobTrace=function(e,n,r){var i=w.getInstance().getUrl();if(i){var o=new t(m+i,!0),a=Math.floor(1e3*w.getInstance().getTimeOrigin());o.setStartTime(a),e&&e[0]&&(o.setDuration(Math.floor(1e3*e[0].duration)),o.putMetric("domInteractive",Math.floor(1e3*e[0].domInteractive)),o.putMetric("domContentLoadedEventEnd",Math.floor(1e3*e[0].domContentLoadedEventEnd)),o.putMetric("loadEventEnd",Math.floor(1e3*e[0].loadEventEnd)));if(n){var s=n.find((function(t){return"first-paint"===t.name}));s&&s.startTime&&o.putMetric("_fp",Math.floor(1e3*s.startTime));var c=n.find((function(t){return"first-contentful-paint"===t.name}));c&&c.startTime&&o.putMetric(h,Math.floor(1e3*c.startTime)),r&&o.putMetric(d,Math.floor(1e3*r))}tt(o)}},t.createUserTimingTrace=function(e){tt(new t(e,!1,e))},t}();function at(t){var e=t;if(e&&void 0!==e.responseStart){var n=w.getInstance().getTimeOrigin(),r=Math.floor(1e3*(e.startTime+n)),i=e.responseStart?Math.floor(1e3*(e.responseStart-e.startTime)):void 0,o=Math.floor(1e3*(e.responseEnd-e.startTime));!function(t){var e=N.getInstance();if(e.instrumentationEnabled){var n=t.url,r=e.logEndPointUrl.split("?")[0],i=e.flTransportEndpointUrl.split("?")[0];n!==r&&n!==i&&e.loggingEnabled&&e.logNetworkAfterSampling&&setTimeout((function(){return Z(t,0)}),0)}}({url:e.name&&e.name.split("?")[0],responsePayloadBytes:e.transferSize,startTimeUs:r,timeToResponseInitiatedUs:i,timeToResponseCompletedUs:o})}}function st(){k()&&(setTimeout((function(){return function(){var t=w.getInstance(),e=t.getEntriesByType("navigation"),n=t.getEntriesByType("paint");if(t.onFirstInputDelay){var r=setTimeout((function(){ot.createOobTrace(e,n),r=void 0}),5e3);t.onFirstInputDelay((function(t){r&&(clearTimeout(r),ot.createOobTrace(e,n,t))}))}else ot.createOobTrace(e,n)}()}),0),setTimeout((function(){return function(){for(var t=w.getInstance(),e=t.getEntriesByType("resource"),n=0,r=e;n<r.length;n++){at(r[n])}t.setupObserver("resource",at)}()}),0),setTimeout((function(){return function(){for(var t=w.getInstance(),e=t.getEntriesByType("measure"),n=0,r=e;n<r.length;n++){ct(r[n])}t.setupObserver("measure",ct)}()}),0))}function ct(t){var e=t.name;e.substring(0,g.length)!==g&&ot.createUserTimingTrace(e)}var ut=function(){function t(t){this.app=t,w.getInstance().requiredApisAvailable()&&Object(c.Q)().then((function(t){t&&(G||(X(5500),G=!0),V().then(st,st))})).catch((function(t){T.info("Environment doesn't support IndexedDB: "+t)}))}return t.prototype.trace=function(t){return new ot(t)},Object.defineProperty(t.prototype,"instrumentationEnabled",{get:function(){return N.getInstance().instrumentationEnabled},set:function(t){N.getInstance().instrumentationEnabled=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"dataCollectionEnabled",{get:function(){return N.getInstance().dataCollectionEnabled},set:function(t){N.getInstance().dataCollectionEnabled=t},enumerable:!1,configurable:!0}),t}();!function(t){var e=function(t,e){if("[DEFAULT]"!==t.name)throw I.create("FB not default");if("undefined"===typeof window)throw I.create("no window");return function(t){o=t}(window),N.getInstance().firebaseAppInstance=t,N.getInstance().installationsService=e,new ut(t)};t.INTERNAL.registerComponent(new p.a("performance",(function(t){var n=t.getProvider("app").getImmediate(),r=t.getProvider("installations").getImmediate();return e(n,r)}),"PUBLIC")),t.registerVersion("@firebase/performance",f)}(a.a)}}]);
//# sourceMappingURL=9.ce1fed17.chunk.js.map
/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 287.0, "minX": 0.0, "maxY": 1827.0, "series": [{"data": [[0.0, 287.0], [0.1, 290.0], [0.2, 290.0], [0.3, 290.0], [0.4, 291.0], [0.5, 291.0], [0.6, 291.0], [0.7, 292.0], [0.8, 292.0], [0.9, 292.0], [1.0, 292.0], [1.1, 292.0], [1.2, 292.0], [1.3, 293.0], [1.4, 293.0], [1.5, 293.0], [1.6, 293.0], [1.7, 293.0], [1.8, 293.0], [1.9, 293.0], [2.0, 293.0], [2.1, 293.0], [2.2, 293.0], [2.3, 293.0], [2.4, 294.0], [2.5, 294.0], [2.6, 294.0], [2.7, 294.0], [2.8, 294.0], [2.9, 294.0], [3.0, 294.0], [3.1, 294.0], [3.2, 294.0], [3.3, 294.0], [3.4, 294.0], [3.5, 294.0], [3.6, 294.0], [3.7, 294.0], [3.8, 294.0], [3.9, 294.0], [4.0, 295.0], [4.1, 295.0], [4.2, 295.0], [4.3, 295.0], [4.4, 295.0], [4.5, 295.0], [4.6, 295.0], [4.7, 295.0], [4.8, 295.0], [4.9, 295.0], [5.0, 295.0], [5.1, 295.0], [5.2, 295.0], [5.3, 295.0], [5.4, 295.0], [5.5, 295.0], [5.6, 295.0], [5.7, 295.0], [5.8, 295.0], [5.9, 295.0], [6.0, 296.0], [6.1, 296.0], [6.2, 296.0], [6.3, 296.0], [6.4, 296.0], [6.5, 296.0], [6.6, 296.0], [6.7, 296.0], [6.8, 296.0], [6.9, 296.0], [7.0, 296.0], [7.1, 296.0], [7.2, 296.0], [7.3, 296.0], [7.4, 296.0], [7.5, 296.0], [7.6, 296.0], [7.7, 296.0], [7.8, 296.0], [7.9, 296.0], [8.0, 296.0], [8.1, 296.0], [8.2, 296.0], [8.3, 296.0], [8.4, 296.0], [8.5, 296.0], [8.6, 296.0], [8.7, 297.0], [8.8, 297.0], [8.9, 297.0], [9.0, 297.0], [9.1, 297.0], [9.2, 297.0], [9.3, 297.0], [9.4, 297.0], [9.5, 297.0], [9.6, 297.0], [9.7, 297.0], [9.8, 297.0], [9.9, 297.0], [10.0, 297.0], [10.1, 297.0], [10.2, 297.0], [10.3, 297.0], [10.4, 297.0], [10.5, 297.0], [10.6, 297.0], [10.7, 297.0], [10.8, 297.0], [10.9, 297.0], [11.0, 297.0], [11.1, 297.0], [11.2, 297.0], [11.3, 297.0], [11.4, 297.0], [11.5, 297.0], [11.6, 297.0], [11.7, 297.0], [11.8, 297.0], [11.9, 297.0], [12.0, 297.0], [12.1, 297.0], [12.2, 298.0], [12.3, 298.0], [12.4, 298.0], [12.5, 298.0], [12.6, 298.0], [12.7, 298.0], [12.8, 298.0], [12.9, 298.0], [13.0, 298.0], [13.1, 298.0], [13.2, 298.0], [13.3, 298.0], [13.4, 298.0], [13.5, 298.0], [13.6, 298.0], [13.7, 298.0], [13.8, 298.0], [13.9, 298.0], [14.0, 298.0], [14.1, 298.0], [14.2, 298.0], [14.3, 298.0], [14.4, 298.0], [14.5, 298.0], [14.6, 298.0], [14.7, 298.0], [14.8, 298.0], [14.9, 298.0], [15.0, 298.0], [15.1, 298.0], [15.2, 298.0], [15.3, 298.0], [15.4, 298.0], [15.5, 298.0], [15.6, 298.0], [15.7, 298.0], [15.8, 298.0], [15.9, 298.0], [16.0, 298.0], [16.1, 298.0], [16.2, 298.0], [16.3, 298.0], [16.4, 299.0], [16.5, 299.0], [16.6, 299.0], [16.7, 299.0], [16.8, 299.0], [16.9, 299.0], [17.0, 299.0], [17.1, 299.0], [17.2, 299.0], [17.3, 299.0], [17.4, 299.0], [17.5, 299.0], [17.6, 299.0], [17.7, 299.0], [17.8, 299.0], [17.9, 299.0], [18.0, 299.0], [18.1, 299.0], [18.2, 299.0], [18.3, 299.0], [18.4, 299.0], [18.5, 299.0], [18.6, 299.0], [18.7, 299.0], [18.8, 299.0], [18.9, 299.0], [19.0, 299.0], [19.1, 299.0], [19.2, 299.0], [19.3, 299.0], [19.4, 299.0], [19.5, 299.0], [19.6, 299.0], [19.7, 299.0], [19.8, 299.0], [19.9, 299.0], [20.0, 299.0], [20.1, 299.0], [20.2, 299.0], [20.3, 299.0], [20.4, 299.0], [20.5, 299.0], [20.6, 299.0], [20.7, 299.0], [20.8, 299.0], [20.9, 299.0], [21.0, 299.0], [21.1, 299.0], [21.2, 299.0], [21.3, 300.0], [21.4, 300.0], [21.5, 300.0], [21.6, 300.0], [21.7, 300.0], [21.8, 300.0], [21.9, 300.0], [22.0, 300.0], [22.1, 300.0], [22.2, 300.0], [22.3, 300.0], [22.4, 300.0], [22.5, 300.0], [22.6, 300.0], [22.7, 300.0], [22.8, 300.0], [22.9, 300.0], [23.0, 300.0], [23.1, 300.0], [23.2, 300.0], [23.3, 300.0], [23.4, 300.0], [23.5, 300.0], [23.6, 300.0], [23.7, 300.0], [23.8, 300.0], [23.9, 300.0], [24.0, 300.0], [24.1, 300.0], [24.2, 300.0], [24.3, 300.0], [24.4, 300.0], [24.5, 300.0], [24.6, 300.0], [24.7, 300.0], [24.8, 300.0], [24.9, 300.0], [25.0, 300.0], [25.1, 300.0], [25.2, 300.0], [25.3, 300.0], [25.4, 300.0], [25.5, 300.0], [25.6, 300.0], [25.7, 300.0], [25.8, 300.0], [25.9, 300.0], [26.0, 300.0], [26.1, 300.0], [26.2, 300.0], [26.3, 300.0], [26.4, 300.0], [26.5, 300.0], [26.6, 300.0], [26.7, 300.0], [26.8, 300.0], [26.9, 301.0], [27.0, 301.0], [27.1, 301.0], [27.2, 301.0], [27.3, 301.0], [27.4, 301.0], [27.5, 301.0], [27.6, 301.0], [27.7, 301.0], [27.8, 301.0], [27.9, 301.0], [28.0, 301.0], [28.1, 301.0], [28.2, 301.0], [28.3, 301.0], [28.4, 301.0], [28.5, 301.0], [28.6, 301.0], [28.7, 301.0], [28.8, 301.0], [28.9, 301.0], [29.0, 301.0], [29.1, 301.0], [29.2, 301.0], [29.3, 301.0], [29.4, 301.0], [29.5, 301.0], [29.6, 301.0], [29.7, 301.0], [29.8, 301.0], [29.9, 301.0], [30.0, 301.0], [30.1, 301.0], [30.2, 301.0], [30.3, 301.0], [30.4, 301.0], [30.5, 301.0], [30.6, 301.0], [30.7, 301.0], [30.8, 301.0], [30.9, 301.0], [31.0, 301.0], [31.1, 301.0], [31.2, 301.0], [31.3, 301.0], [31.4, 301.0], [31.5, 301.0], [31.6, 301.0], [31.7, 301.0], [31.8, 301.0], [31.9, 301.0], [32.0, 301.0], [32.1, 301.0], [32.2, 301.0], [32.3, 301.0], [32.4, 301.0], [32.5, 301.0], [32.6, 301.0], [32.7, 302.0], [32.8, 302.0], [32.9, 302.0], [33.0, 302.0], [33.1, 302.0], [33.2, 302.0], [33.3, 302.0], [33.4, 302.0], [33.5, 302.0], [33.6, 302.0], [33.7, 302.0], [33.8, 302.0], [33.9, 302.0], [34.0, 302.0], [34.1, 302.0], [34.2, 302.0], [34.3, 302.0], [34.4, 302.0], [34.5, 302.0], [34.6, 302.0], [34.7, 302.0], [34.8, 302.0], [34.9, 302.0], [35.0, 302.0], [35.1, 302.0], [35.2, 302.0], [35.3, 302.0], [35.4, 302.0], [35.5, 302.0], [35.6, 302.0], [35.7, 302.0], [35.8, 302.0], [35.9, 302.0], [36.0, 302.0], [36.1, 302.0], [36.2, 302.0], [36.3, 302.0], [36.4, 302.0], [36.5, 302.0], [36.6, 302.0], [36.7, 302.0], [36.8, 302.0], [36.9, 302.0], [37.0, 302.0], [37.1, 302.0], [37.2, 302.0], [37.3, 302.0], [37.4, 302.0], [37.5, 302.0], [37.6, 302.0], [37.7, 302.0], [37.8, 302.0], [37.9, 302.0], [38.0, 302.0], [38.1, 302.0], [38.2, 302.0], [38.3, 302.0], [38.4, 302.0], [38.5, 302.0], [38.6, 302.0], [38.7, 302.0], [38.8, 303.0], [38.9, 303.0], [39.0, 303.0], [39.1, 303.0], [39.2, 303.0], [39.3, 303.0], [39.4, 303.0], [39.5, 303.0], [39.6, 303.0], [39.7, 303.0], [39.8, 303.0], [39.9, 303.0], [40.0, 303.0], [40.1, 303.0], [40.2, 303.0], [40.3, 303.0], [40.4, 303.0], [40.5, 303.0], [40.6, 303.0], [40.7, 303.0], [40.8, 303.0], [40.9, 303.0], [41.0, 303.0], [41.1, 303.0], [41.2, 303.0], [41.3, 303.0], [41.4, 303.0], [41.5, 303.0], [41.6, 303.0], [41.7, 303.0], [41.8, 303.0], [41.9, 303.0], [42.0, 303.0], [42.1, 303.0], [42.2, 303.0], [42.3, 303.0], [42.4, 303.0], [42.5, 303.0], [42.6, 303.0], [42.7, 303.0], [42.8, 303.0], [42.9, 303.0], [43.0, 303.0], [43.1, 303.0], [43.2, 303.0], [43.3, 303.0], [43.4, 303.0], [43.5, 303.0], [43.6, 303.0], [43.7, 303.0], [43.8, 303.0], [43.9, 303.0], [44.0, 303.0], [44.1, 303.0], [44.2, 303.0], [44.3, 303.0], [44.4, 303.0], [44.5, 303.0], [44.6, 303.0], [44.7, 303.0], [44.8, 303.0], [44.9, 303.0], [45.0, 303.0], [45.1, 304.0], [45.2, 304.0], [45.3, 304.0], [45.4, 304.0], [45.5, 304.0], [45.6, 304.0], [45.7, 304.0], [45.8, 304.0], [45.9, 304.0], [46.0, 304.0], [46.1, 304.0], [46.2, 304.0], [46.3, 304.0], [46.4, 304.0], [46.5, 304.0], [46.6, 304.0], [46.7, 304.0], [46.8, 304.0], [46.9, 304.0], [47.0, 304.0], [47.1, 304.0], [47.2, 304.0], [47.3, 304.0], [47.4, 304.0], [47.5, 304.0], [47.6, 304.0], [47.7, 304.0], [47.8, 304.0], [47.9, 304.0], [48.0, 304.0], [48.1, 304.0], [48.2, 304.0], [48.3, 304.0], [48.4, 304.0], [48.5, 304.0], [48.6, 304.0], [48.7, 304.0], [48.8, 304.0], [48.9, 304.0], [49.0, 304.0], [49.1, 304.0], [49.2, 304.0], [49.3, 304.0], [49.4, 304.0], [49.5, 304.0], [49.6, 304.0], [49.7, 304.0], [49.8, 304.0], [49.9, 304.0], [50.0, 304.0], [50.1, 304.0], [50.2, 304.0], [50.3, 304.0], [50.4, 304.0], [50.5, 304.0], [50.6, 304.0], [50.7, 304.0], [50.8, 304.0], [50.9, 304.0], [51.0, 304.0], [51.1, 304.0], [51.2, 304.0], [51.3, 304.0], [51.4, 304.0], [51.5, 304.0], [51.6, 305.0], [51.7, 305.0], [51.8, 305.0], [51.9, 305.0], [52.0, 305.0], [52.1, 305.0], [52.2, 305.0], [52.3, 305.0], [52.4, 305.0], [52.5, 305.0], [52.6, 305.0], [52.7, 305.0], [52.8, 305.0], [52.9, 305.0], [53.0, 305.0], [53.1, 305.0], [53.2, 305.0], [53.3, 305.0], [53.4, 305.0], [53.5, 305.0], [53.6, 305.0], [53.7, 305.0], [53.8, 305.0], [53.9, 305.0], [54.0, 305.0], [54.1, 305.0], [54.2, 305.0], [54.3, 305.0], [54.4, 305.0], [54.5, 305.0], [54.6, 305.0], [54.7, 305.0], [54.8, 305.0], [54.9, 305.0], [55.0, 305.0], [55.1, 305.0], [55.2, 305.0], [55.3, 305.0], [55.4, 305.0], [55.5, 305.0], [55.6, 305.0], [55.7, 305.0], [55.8, 305.0], [55.9, 305.0], [56.0, 305.0], [56.1, 305.0], [56.2, 305.0], [56.3, 305.0], [56.4, 305.0], [56.5, 305.0], [56.6, 305.0], [56.7, 305.0], [56.8, 305.0], [56.9, 305.0], [57.0, 305.0], [57.1, 305.0], [57.2, 305.0], [57.3, 305.0], [57.4, 305.0], [57.5, 305.0], [57.6, 305.0], [57.7, 305.0], [57.8, 306.0], [57.9, 306.0], [58.0, 306.0], [58.1, 306.0], [58.2, 306.0], [58.3, 306.0], [58.4, 306.0], [58.5, 306.0], [58.6, 306.0], [58.7, 306.0], [58.8, 306.0], [58.9, 306.0], [59.0, 306.0], [59.1, 306.0], [59.2, 306.0], [59.3, 306.0], [59.4, 306.0], [59.5, 306.0], [59.6, 306.0], [59.7, 306.0], [59.8, 306.0], [59.9, 306.0], [60.0, 306.0], [60.1, 306.0], [60.2, 306.0], [60.3, 306.0], [60.4, 306.0], [60.5, 306.0], [60.6, 306.0], [60.7, 306.0], [60.8, 306.0], [60.9, 306.0], [61.0, 306.0], [61.1, 306.0], [61.2, 306.0], [61.3, 306.0], [61.4, 306.0], [61.5, 306.0], [61.6, 306.0], [61.7, 306.0], [61.8, 306.0], [61.9, 306.0], [62.0, 306.0], [62.1, 306.0], [62.2, 306.0], [62.3, 306.0], [62.4, 306.0], [62.5, 306.0], [62.6, 306.0], [62.7, 306.0], [62.8, 306.0], [62.9, 306.0], [63.0, 306.0], [63.1, 306.0], [63.2, 306.0], [63.3, 306.0], [63.4, 307.0], [63.5, 307.0], [63.6, 307.0], [63.7, 307.0], [63.8, 307.0], [63.9, 307.0], [64.0, 307.0], [64.1, 307.0], [64.2, 307.0], [64.3, 307.0], [64.4, 307.0], [64.5, 307.0], [64.6, 307.0], [64.7, 307.0], [64.8, 307.0], [64.9, 307.0], [65.0, 307.0], [65.1, 307.0], [65.2, 307.0], [65.3, 307.0], [65.4, 307.0], [65.5, 307.0], [65.6, 307.0], [65.7, 307.0], [65.8, 307.0], [65.9, 307.0], [66.0, 307.0], [66.1, 307.0], [66.2, 307.0], [66.3, 307.0], [66.4, 307.0], [66.5, 307.0], [66.6, 307.0], [66.7, 307.0], [66.8, 307.0], [66.9, 307.0], [67.0, 307.0], [67.1, 307.0], [67.2, 307.0], [67.3, 307.0], [67.4, 307.0], [67.5, 307.0], [67.6, 307.0], [67.7, 307.0], [67.8, 307.0], [67.9, 307.0], [68.0, 307.0], [68.1, 307.0], [68.2, 307.0], [68.3, 307.0], [68.4, 307.0], [68.5, 308.0], [68.6, 308.0], [68.7, 308.0], [68.8, 308.0], [68.9, 308.0], [69.0, 308.0], [69.1, 308.0], [69.2, 308.0], [69.3, 308.0], [69.4, 308.0], [69.5, 308.0], [69.6, 308.0], [69.7, 308.0], [69.8, 308.0], [69.9, 308.0], [70.0, 308.0], [70.1, 308.0], [70.2, 308.0], [70.3, 308.0], [70.4, 308.0], [70.5, 308.0], [70.6, 308.0], [70.7, 308.0], [70.8, 308.0], [70.9, 308.0], [71.0, 308.0], [71.1, 308.0], [71.2, 308.0], [71.3, 308.0], [71.4, 308.0], [71.5, 308.0], [71.6, 308.0], [71.7, 308.0], [71.8, 308.0], [71.9, 308.0], [72.0, 308.0], [72.1, 308.0], [72.2, 308.0], [72.3, 308.0], [72.4, 308.0], [72.5, 308.0], [72.6, 308.0], [72.7, 308.0], [72.8, 308.0], [72.9, 308.0], [73.0, 308.0], [73.1, 309.0], [73.2, 309.0], [73.3, 309.0], [73.4, 309.0], [73.5, 309.0], [73.6, 309.0], [73.7, 309.0], [73.8, 309.0], [73.9, 309.0], [74.0, 309.0], [74.1, 309.0], [74.2, 309.0], [74.3, 309.0], [74.4, 309.0], [74.5, 309.0], [74.6, 309.0], [74.7, 309.0], [74.8, 309.0], [74.9, 309.0], [75.0, 309.0], [75.1, 309.0], [75.2, 309.0], [75.3, 309.0], [75.4, 309.0], [75.5, 309.0], [75.6, 309.0], [75.7, 309.0], [75.8, 309.0], [75.9, 309.0], [76.0, 309.0], [76.1, 309.0], [76.2, 309.0], [76.3, 309.0], [76.4, 309.0], [76.5, 309.0], [76.6, 309.0], [76.7, 309.0], [76.8, 309.0], [76.9, 309.0], [77.0, 309.0], [77.1, 309.0], [77.2, 310.0], [77.3, 310.0], [77.4, 310.0], [77.5, 310.0], [77.6, 310.0], [77.7, 310.0], [77.8, 310.0], [77.9, 310.0], [78.0, 310.0], [78.1, 310.0], [78.2, 310.0], [78.3, 310.0], [78.4, 310.0], [78.5, 310.0], [78.6, 310.0], [78.7, 310.0], [78.8, 310.0], [78.9, 310.0], [79.0, 310.0], [79.1, 310.0], [79.2, 310.0], [79.3, 310.0], [79.4, 310.0], [79.5, 310.0], [79.6, 310.0], [79.7, 310.0], [79.8, 310.0], [79.9, 310.0], [80.0, 310.0], [80.1, 310.0], [80.2, 310.0], [80.3, 310.0], [80.4, 310.0], [80.5, 311.0], [80.6, 311.0], [80.7, 311.0], [80.8, 311.0], [80.9, 311.0], [81.0, 311.0], [81.1, 311.0], [81.2, 311.0], [81.3, 311.0], [81.4, 311.0], [81.5, 311.0], [81.6, 311.0], [81.7, 311.0], [81.8, 311.0], [81.9, 311.0], [82.0, 311.0], [82.1, 311.0], [82.2, 311.0], [82.3, 311.0], [82.4, 311.0], [82.5, 311.0], [82.6, 311.0], [82.7, 311.0], [82.8, 311.0], [82.9, 311.0], [83.0, 311.0], [83.1, 311.0], [83.2, 311.0], [83.3, 311.0], [83.4, 311.0], [83.5, 312.0], [83.6, 312.0], [83.7, 312.0], [83.8, 312.0], [83.9, 312.0], [84.0, 312.0], [84.1, 312.0], [84.2, 312.0], [84.3, 312.0], [84.4, 312.0], [84.5, 312.0], [84.6, 312.0], [84.7, 312.0], [84.8, 312.0], [84.9, 312.0], [85.0, 312.0], [85.1, 312.0], [85.2, 312.0], [85.3, 312.0], [85.4, 312.0], [85.5, 312.0], [85.6, 312.0], [85.7, 312.0], [85.8, 313.0], [85.9, 313.0], [86.0, 313.0], [86.1, 313.0], [86.2, 313.0], [86.3, 313.0], [86.4, 313.0], [86.5, 313.0], [86.6, 313.0], [86.7, 313.0], [86.8, 313.0], [86.9, 313.0], [87.0, 313.0], [87.1, 313.0], [87.2, 313.0], [87.3, 313.0], [87.4, 313.0], [87.5, 313.0], [87.6, 313.0], [87.7, 313.0], [87.8, 314.0], [87.9, 314.0], [88.0, 314.0], [88.1, 314.0], [88.2, 314.0], [88.3, 314.0], [88.4, 314.0], [88.5, 314.0], [88.6, 314.0], [88.7, 314.0], [88.8, 314.0], [88.9, 314.0], [89.0, 314.0], [89.1, 314.0], [89.2, 314.0], [89.3, 315.0], [89.4, 315.0], [89.5, 315.0], [89.6, 315.0], [89.7, 315.0], [89.8, 315.0], [89.9, 315.0], [90.0, 315.0], [90.1, 315.0], [90.2, 315.0], [90.3, 315.0], [90.4, 315.0], [90.5, 315.0], [90.6, 315.0], [90.7, 316.0], [90.8, 316.0], [90.9, 316.0], [91.0, 316.0], [91.1, 316.0], [91.2, 316.0], [91.3, 316.0], [91.4, 316.0], [91.5, 316.0], [91.6, 316.0], [91.7, 317.0], [91.8, 317.0], [91.9, 317.0], [92.0, 317.0], [92.1, 317.0], [92.2, 317.0], [92.3, 317.0], [92.4, 317.0], [92.5, 317.0], [92.6, 317.0], [92.7, 318.0], [92.8, 318.0], [92.9, 318.0], [93.0, 318.0], [93.1, 318.0], [93.2, 318.0], [93.3, 318.0], [93.4, 319.0], [93.5, 319.0], [93.6, 319.0], [93.7, 319.0], [93.8, 319.0], [93.9, 319.0], [94.0, 319.0], [94.1, 320.0], [94.2, 320.0], [94.3, 320.0], [94.4, 320.0], [94.5, 320.0], [94.6, 321.0], [94.7, 321.0], [94.8, 321.0], [94.9, 321.0], [95.0, 322.0], [95.1, 322.0], [95.2, 322.0], [95.3, 322.0], [95.4, 323.0], [95.5, 323.0], [95.6, 323.0], [95.7, 324.0], [95.8, 324.0], [95.9, 324.0], [96.0, 325.0], [96.1, 325.0], [96.2, 326.0], [96.3, 326.0], [96.4, 327.0], [96.5, 327.0], [96.6, 328.0], [96.7, 329.0], [96.8, 329.0], [96.9, 330.0], [97.0, 330.0], [97.1, 331.0], [97.2, 332.0], [97.3, 333.0], [97.4, 334.0], [97.5, 335.0], [97.6, 336.0], [97.7, 338.0], [97.8, 339.0], [97.9, 341.0], [98.0, 343.0], [98.1, 346.0], [98.2, 349.0], [98.3, 353.0], [98.4, 356.0], [98.5, 359.0], [98.6, 362.0], [98.7, 367.0], [98.8, 370.0], [98.9, 375.0], [99.0, 378.0], [99.1, 383.0], [99.2, 388.0], [99.3, 396.0], [99.4, 405.0], [99.5, 411.0], [99.6, 418.0], [99.7, 430.0], [99.8, 464.0], [99.9, 565.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 31238.0, "series": [{"data": [[1100.0, 1.0], [300.0, 31238.0], [1200.0, 1.0], [600.0, 13.0], [1300.0, 2.0], [700.0, 10.0], [400.0, 209.0], [200.0, 8494.0], [1700.0, 2.0], [1800.0, 1.0], [1000.0, 1.0], [500.0, 28.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1800.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 3.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 39942.0, "series": [{"data": [[0.0, 39942.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 55.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 7.890020366598778, "minX": 1.64139834E12, "maxY": 8.0, "series": [{"data": [[1.64139864E12, 8.0], [1.64139942E12, 8.0], [1.64139834E12, 8.0], [1.64139972E12, 8.0], [1.64139912E12, 8.0], [1.64139894E12, 8.0], [1.64139882E12, 8.0], [1.64139924E12, 8.0], [1.64139852E12, 8.0], [1.64139954E12, 8.0], [1.64139984E12, 7.890020366598778], [1.6413984E12, 8.0], [1.64139966E12, 8.0], [1.64139906E12, 8.0], [1.6413987E12, 8.0], [1.64139936E12, 8.0], [1.64139888E12, 8.0], [1.64139918E12, 8.0], [1.64139858E12, 8.0], [1.64139948E12, 8.0], [1.64139978E12, 8.0], [1.641399E12, 8.0], [1.64139876E12, 8.0], [1.6413993E12, 8.0], [1.64139846E12, 8.0], [1.6413996E12, 8.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64139984E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 298.0, "minX": 1.0, "maxY": 310.4444444444445, "series": [{"data": [[8.0, 307.0660844760297], [4.0, 310.4444444444445], [2.0, 306.5], [1.0, 298.0], [5.0, 310.25], [6.0, 301.29411764705895], [3.0, 304.0], [7.0, 303.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[7.997299999999999, 307.06417500000117]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 8.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1849.4333333333334, "minX": 1.64139834E12, "maxY": 83922.0, "series": [{"data": [[1.64139864E12, 82857.0], [1.64139942E12, 83123.25], [1.64139834E12, 79555.5], [1.64139972E12, 83389.5], [1.64139912E12, 83336.25], [1.64139894E12, 82910.25], [1.64139882E12, 83016.75], [1.64139924E12, 83016.75], [1.64139852E12, 83229.75], [1.64139954E12, 83070.0], [1.64139984E12, 52291.5], [1.6413984E12, 82857.0], [1.64139966E12, 83868.75], [1.64139906E12, 83229.75], [1.6413987E12, 83496.0], [1.64139936E12, 83176.5], [1.64139888E12, 83229.75], [1.64139918E12, 83336.25], [1.64139858E12, 83283.0], [1.64139948E12, 83283.0], [1.64139978E12, 83922.0], [1.641399E12, 83123.25], [1.64139876E12, 82963.5], [1.6413993E12, 83442.75], [1.64139846E12, 83336.25], [1.6413996E12, 83655.75]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.64139864E12, 2930.4666666666667], [1.64139942E12, 2939.883333333333], [1.64139834E12, 2813.7], [1.64139972E12, 2949.3], [1.64139912E12, 2947.4166666666665], [1.64139894E12, 2932.35], [1.64139882E12, 2936.116666666667], [1.64139924E12, 2936.116666666667], [1.64139852E12, 2943.65], [1.64139954E12, 2938.0], [1.64139984E12, 1849.4333333333334], [1.6413984E12, 2930.4666666666667], [1.64139966E12, 2966.25], [1.64139906E12, 2943.65], [1.6413987E12, 2953.0666666666666], [1.64139936E12, 2941.766666666667], [1.64139888E12, 2943.65], [1.64139918E12, 2947.4166666666665], [1.64139858E12, 2945.5333333333333], [1.64139948E12, 2945.5333333333333], [1.64139978E12, 2968.133333333333], [1.641399E12, 2939.883333333333], [1.64139876E12, 2934.233333333333], [1.6413993E12, 2951.1833333333334], [1.64139846E12, 2947.4166666666665], [1.6413996E12, 2958.7166666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64139984E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 304.64593908629496, "minX": 1.64139834E12, "maxY": 313.7690763052209, "series": [{"data": [[1.64139864E12, 308.15745501285284], [1.64139942E12, 307.41447789878214], [1.64139834E12, 313.7690763052209], [1.64139972E12, 305.8224776500637], [1.64139912E12, 306.6134185303505], [1.64139894E12, 308.1233140655103], [1.64139882E12, 307.7042976266835], [1.64139924E12, 307.7697241821683], [1.64139852E12, 306.4817658349329], [1.64139954E12, 307.4211538461542], [1.64139984E12, 305.9490835030547], [1.6413984E12, 308.2866323907454], [1.64139966E12, 305.0038095238092], [1.64139906E12, 306.91234804862404], [1.6413987E12, 306.22831632653043], [1.64139936E12, 307.2234314980791], [1.64139888E12, 306.81893793985944], [1.64139918E12, 306.30990415335503], [1.64139858E12, 306.90728900255766], [1.64139948E12, 306.81457800511464], [1.64139978E12, 304.64593908629496], [1.641399E12, 307.3222293401663], [1.64139876E12, 307.98459563542986], [1.6413993E12, 305.9285258455646], [1.64139846E12, 306.70159744408926], [1.6413996E12, 305.3131763208148]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64139984E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 304.50888324873176, "minX": 1.64139834E12, "maxY": 313.56492637215456, "series": [{"data": [[1.64139864E12, 308.0334190231358], [1.64139942E12, 307.28507367072285], [1.64139834E12, 313.56492637215456], [1.64139972E12, 305.6998722860791], [1.64139912E12, 306.47412140575125], [1.64139894E12, 307.992935131663], [1.64139882E12, 307.5426555484286], [1.64139924E12, 307.60615779345704], [1.64139852E12, 306.3288547664752], [1.64139954E12, 307.2897435897434], [1.64139984E12, 305.8167006109978], [1.6413984E12, 308.11568123393306], [1.64139966E12, 304.88888888888914], [1.64139906E12, 306.7645553422899], [1.6413987E12, 306.09757653061325], [1.64139936E12, 307.0832266325228], [1.64139888E12, 306.67946257197707], [1.64139918E12, 306.1616613418527], [1.64139858E12, 306.7487212276217], [1.64139948E12, 306.7065217391311], [1.64139978E12, 304.50888324873176], [1.641399E12, 307.18898142216517], [1.64139876E12, 307.82991014120705], [1.6413993E12, 305.7932354818118], [1.64139846E12, 306.5514376996802], [1.6413996E12, 305.18714194780506]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64139984E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 50.01731160896134, "minX": 1.64139834E12, "maxY": 51.18537524053876, "series": [{"data": [[1.64139864E12, 50.94087403598975], [1.64139942E12, 50.848814862267865], [1.64139834E12, 50.85140562248997], [1.64139972E12, 50.38122605363985], [1.64139912E12, 50.87667731629391], [1.64139894E12, 51.06165703275535], [1.64139882E12, 51.18537524053876], [1.64139924E12, 50.854393842206534], [1.64139852E12, 50.836212412028125], [1.64139954E12, 50.719230769230755], [1.64139984E12, 50.01731160896134], [1.6413984E12, 50.748714652956345], [1.64139966E12, 50.06793650793654], [1.64139906E12, 50.94113883557263], [1.6413987E12, 50.75829081632648], [1.64139936E12, 50.88924455825874], [1.64139888E12, 50.93026231605881], [1.64139918E12, 50.94952076677318], [1.64139858E12, 50.49999999999998], [1.64139948E12, 50.72186700767265], [1.64139978E12, 50.15609137055837], [1.641399E12, 51.14221652786675], [1.64139876E12, 50.933889602053924], [1.6413993E12, 50.93171665603057], [1.64139846E12, 50.47795527156556], [1.6413996E12, 50.42393380012736]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64139984E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 287.0, "minX": 1.64139834E12, "maxY": 1827.0, "series": [{"data": [[1.64139864E12, 523.0], [1.64139942E12, 736.0], [1.64139834E12, 1827.0], [1.64139972E12, 731.0], [1.64139912E12, 522.0], [1.64139894E12, 554.0], [1.64139882E12, 445.0], [1.64139924E12, 572.0], [1.64139852E12, 643.0], [1.64139954E12, 554.0], [1.64139984E12, 563.0], [1.6413984E12, 770.0], [1.64139966E12, 645.0], [1.64139906E12, 743.0], [1.6413987E12, 418.0], [1.64139936E12, 708.0], [1.64139888E12, 638.0], [1.64139918E12, 521.0], [1.64139858E12, 646.0], [1.64139948E12, 736.0], [1.64139978E12, 614.0], [1.641399E12, 703.0], [1.64139876E12, 747.0], [1.6413993E12, 466.0], [1.64139846E12, 516.0], [1.6413996E12, 543.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.64139864E12, 317.0], [1.64139942E12, 315.0], [1.64139834E12, 317.0], [1.64139972E12, 314.0], [1.64139912E12, 315.0], [1.64139894E12, 315.0], [1.64139882E12, 317.0], [1.64139924E12, 316.0], [1.64139852E12, 315.0], [1.64139954E12, 316.0], [1.64139984E12, 313.0], [1.6413984E12, 317.0], [1.64139966E12, 313.0], [1.64139906E12, 315.0], [1.6413987E12, 315.0], [1.64139936E12, 315.0], [1.64139888E12, 315.0], [1.64139918E12, 315.0], [1.64139858E12, 315.0], [1.64139948E12, 315.0], [1.64139978E12, 312.0], [1.641399E12, 315.0], [1.64139876E12, 315.0], [1.6413993E12, 315.0], [1.64139846E12, 314.0], [1.6413996E12, 314.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.64139864E12, 406.0], [1.64139942E12, 393.13999999999965], [1.64139834E12, 380.6499999999994], [1.64139972E12, 391.9899999999998], [1.64139912E12, 363.67999999999984], [1.64139894E12, 415.0], [1.64139882E12, 376.4000000000001], [1.64139924E12, 404.8000000000002], [1.64139852E12, 353.7199999999998], [1.64139954E12, 403.3899999999999], [1.64139984E12, 408.3399999999999], [1.6413984E12, 377.43000000000006], [1.64139966E12, 370.96000000000004], [1.64139906E12, 374.5199999999993], [1.6413987E12, 345.6199999999999], [1.64139936E12, 413.3699999999999], [1.64139888E12, 357.4399999999996], [1.64139918E12, 365.6999999999996], [1.64139858E12, 368.3499999999999], [1.64139948E12, 386.09999999999945], [1.64139978E12, 362.69000000000005], [1.641399E12, 377.0], [1.64139876E12, 382.4100000000001], [1.6413993E12, 370.31999999999994], [1.64139846E12, 378.67999999999984], [1.6413996E12, 372.9599999999998]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.64139864E12, 326.14999999999986], [1.64139942E12, 321.0], [1.64139834E12, 328.0], [1.64139972E12, 319.0], [1.64139912E12, 321.6999999999998], [1.64139894E12, 322.0], [1.64139882E12, 323.0], [1.64139924E12, 324.0], [1.64139852E12, 320.0], [1.64139954E12, 323.9499999999998], [1.64139984E12, 322.0], [1.6413984E12, 325.0], [1.64139966E12, 320.0], [1.64139906E12, 322.0], [1.6413987E12, 319.0], [1.64139936E12, 322.8499999999999], [1.64139888E12, 320.0], [1.64139918E12, 321.0], [1.64139858E12, 321.0], [1.64139948E12, 322.0], [1.64139978E12, 317.0], [1.641399E12, 322.0], [1.64139876E12, 320.0], [1.6413993E12, 320.5999999999999], [1.64139846E12, 322.0], [1.6413996E12, 319.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.64139864E12, 291.0], [1.64139942E12, 288.0], [1.64139834E12, 289.0], [1.64139972E12, 287.0], [1.64139912E12, 287.0], [1.64139894E12, 288.0], [1.64139882E12, 288.0], [1.64139924E12, 289.0], [1.64139852E12, 290.0], [1.64139954E12, 288.0], [1.64139984E12, 288.0], [1.6413984E12, 291.0], [1.64139966E12, 289.0], [1.64139906E12, 288.0], [1.6413987E12, 290.0], [1.64139936E12, 289.0], [1.64139888E12, 291.0], [1.64139918E12, 288.0], [1.64139858E12, 291.0], [1.64139948E12, 289.0], [1.64139978E12, 287.0], [1.641399E12, 289.0], [1.64139876E12, 290.0], [1.6413993E12, 289.0], [1.64139846E12, 289.0], [1.6413996E12, 289.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.64139864E12, 305.0], [1.64139942E12, 305.0], [1.64139834E12, 305.0], [1.64139972E12, 303.0], [1.64139912E12, 305.0], [1.64139894E12, 305.0], [1.64139882E12, 305.0], [1.64139924E12, 305.0], [1.64139852E12, 304.0], [1.64139954E12, 304.0], [1.64139984E12, 302.0], [1.6413984E12, 305.0], [1.64139966E12, 302.0], [1.64139906E12, 304.0], [1.6413987E12, 305.0], [1.64139936E12, 304.0], [1.64139888E12, 305.0], [1.64139918E12, 304.0], [1.64139858E12, 304.0], [1.64139948E12, 304.0], [1.64139978E12, 303.0], [1.641399E12, 305.0], [1.64139876E12, 305.0], [1.6413993E12, 304.0], [1.64139846E12, 304.0], [1.6413996E12, 303.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64139984E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 302.0, "minX": 4.0, "maxY": 1103.0, "series": [{"data": [[13.0, 1103.0], [14.0, 303.5], [4.0, 305.0], [20.0, 306.5], [21.0, 304.0], [22.0, 309.0], [23.0, 307.5], [24.0, 306.0], [25.0, 305.0], [26.0, 304.0], [27.0, 304.0], [28.0, 304.0], [29.0, 304.0], [30.0, 302.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 30.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 302.0, "minX": 4.0, "maxY": 1099.0, "series": [{"data": [[13.0, 1099.0], [14.0, 303.5], [4.0, 305.0], [20.0, 306.5], [21.0, 303.0], [22.0, 309.0], [23.0, 307.0], [24.0, 306.0], [25.0, 305.0], [26.0, 304.0], [27.0, 304.0], [28.0, 304.0], [29.0, 304.0], [30.0, 302.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 30.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 16.233333333333334, "minX": 1.64139834E12, "maxY": 26.266666666666666, "series": [{"data": [[1.64139864E12, 25.933333333333334], [1.64139942E12, 26.016666666666666], [1.64139834E12, 25.033333333333335], [1.64139972E12, 26.1], [1.64139912E12, 26.083333333333332], [1.64139894E12, 25.95], [1.64139882E12, 25.983333333333334], [1.64139924E12, 25.983333333333334], [1.64139852E12, 26.05], [1.64139954E12, 26.0], [1.64139984E12, 16.233333333333334], [1.6413984E12, 25.933333333333334], [1.64139966E12, 26.25], [1.64139906E12, 26.05], [1.6413987E12, 26.116666666666667], [1.64139936E12, 26.033333333333335], [1.64139888E12, 26.05], [1.64139918E12, 26.083333333333332], [1.64139858E12, 26.066666666666666], [1.64139948E12, 26.066666666666666], [1.64139978E12, 26.266666666666666], [1.641399E12, 26.016666666666666], [1.64139876E12, 25.983333333333334], [1.6413993E12, 26.116666666666667], [1.64139846E12, 26.083333333333332], [1.6413996E12, 26.183333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64139984E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 16.366666666666667, "minX": 1.64139834E12, "maxY": 26.266666666666666, "series": [{"data": [[1.64139864E12, 25.933333333333334], [1.64139942E12, 26.016666666666666], [1.64139834E12, 24.9], [1.64139972E12, 26.1], [1.64139912E12, 26.083333333333332], [1.64139894E12, 25.95], [1.64139882E12, 25.983333333333334], [1.64139924E12, 25.983333333333334], [1.64139852E12, 26.05], [1.64139954E12, 26.0], [1.64139984E12, 16.366666666666667], [1.6413984E12, 25.933333333333334], [1.64139966E12, 26.25], [1.64139906E12, 26.05], [1.6413987E12, 26.133333333333333], [1.64139936E12, 26.033333333333335], [1.64139888E12, 26.05], [1.64139918E12, 26.083333333333332], [1.64139858E12, 26.066666666666666], [1.64139948E12, 26.066666666666666], [1.64139978E12, 26.266666666666666], [1.641399E12, 26.016666666666666], [1.64139876E12, 25.966666666666665], [1.6413993E12, 26.116666666666667], [1.64139846E12, 26.083333333333332], [1.6413996E12, 26.183333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64139984E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 16.366666666666667, "minX": 1.64139834E12, "maxY": 26.266666666666666, "series": [{"data": [[1.64139864E12, 25.933333333333334], [1.64139942E12, 26.016666666666666], [1.64139834E12, 24.9], [1.64139972E12, 26.1], [1.64139912E12, 26.083333333333332], [1.64139894E12, 25.95], [1.64139882E12, 25.983333333333334], [1.64139924E12, 25.983333333333334], [1.64139852E12, 26.05], [1.64139954E12, 26.0], [1.64139984E12, 16.366666666666667], [1.6413984E12, 25.933333333333334], [1.64139966E12, 26.25], [1.64139906E12, 26.05], [1.6413987E12, 26.133333333333333], [1.64139936E12, 26.033333333333335], [1.64139888E12, 26.05], [1.64139918E12, 26.083333333333332], [1.64139858E12, 26.066666666666666], [1.64139948E12, 26.066666666666666], [1.64139978E12, 26.266666666666666], [1.641399E12, 26.016666666666666], [1.64139876E12, 25.966666666666665], [1.6413993E12, 26.116666666666667], [1.64139846E12, 26.083333333333332], [1.6413996E12, 26.183333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64139984E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 16.366666666666667, "minX": 1.64139834E12, "maxY": 26.266666666666666, "series": [{"data": [[1.64139864E12, 25.933333333333334], [1.64139942E12, 26.016666666666666], [1.64139834E12, 24.9], [1.64139972E12, 26.1], [1.64139912E12, 26.083333333333332], [1.64139894E12, 25.95], [1.64139882E12, 25.983333333333334], [1.64139924E12, 25.983333333333334], [1.64139852E12, 26.05], [1.64139954E12, 26.0], [1.64139984E12, 16.366666666666667], [1.6413984E12, 25.933333333333334], [1.64139966E12, 26.25], [1.64139906E12, 26.05], [1.6413987E12, 26.133333333333333], [1.64139936E12, 26.033333333333335], [1.64139888E12, 26.05], [1.64139918E12, 26.083333333333332], [1.64139858E12, 26.066666666666666], [1.64139948E12, 26.066666666666666], [1.64139978E12, 26.266666666666666], [1.641399E12, 26.016666666666666], [1.64139876E12, 25.966666666666665], [1.6413993E12, 26.116666666666667], [1.64139846E12, 26.083333333333332], [1.6413996E12, 26.183333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64139984E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}


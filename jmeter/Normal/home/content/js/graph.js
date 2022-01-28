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
        data: {"result": {"minY": 281.0, "minX": 0.0, "maxY": 783.0, "series": [{"data": [[0.0, 281.0], [0.1, 284.0], [0.2, 285.0], [0.3, 285.0], [0.4, 286.0], [0.5, 286.0], [0.6, 286.0], [0.7, 286.0], [0.8, 286.0], [0.9, 287.0], [1.0, 287.0], [1.1, 287.0], [1.2, 287.0], [1.3, 287.0], [1.4, 287.0], [1.5, 287.0], [1.6, 287.0], [1.7, 288.0], [1.8, 288.0], [1.9, 288.0], [2.0, 288.0], [2.1, 288.0], [2.2, 288.0], [2.3, 288.0], [2.4, 288.0], [2.5, 288.0], [2.6, 288.0], [2.7, 288.0], [2.8, 288.0], [2.9, 288.0], [3.0, 288.0], [3.1, 288.0], [3.2, 288.0], [3.3, 289.0], [3.4, 289.0], [3.5, 289.0], [3.6, 289.0], [3.7, 289.0], [3.8, 289.0], [3.9, 289.0], [4.0, 289.0], [4.1, 289.0], [4.2, 289.0], [4.3, 289.0], [4.4, 289.0], [4.5, 289.0], [4.6, 289.0], [4.7, 289.0], [4.8, 289.0], [4.9, 289.0], [5.0, 289.0], [5.1, 289.0], [5.2, 289.0], [5.3, 289.0], [5.4, 289.0], [5.5, 289.0], [5.6, 289.0], [5.7, 289.0], [5.8, 290.0], [5.9, 290.0], [6.0, 290.0], [6.1, 290.0], [6.2, 290.0], [6.3, 290.0], [6.4, 290.0], [6.5, 290.0], [6.6, 290.0], [6.7, 290.0], [6.8, 290.0], [6.9, 290.0], [7.0, 290.0], [7.1, 290.0], [7.2, 290.0], [7.3, 290.0], [7.4, 290.0], [7.5, 290.0], [7.6, 290.0], [7.7, 290.0], [7.8, 290.0], [7.9, 290.0], [8.0, 290.0], [8.1, 290.0], [8.2, 290.0], [8.3, 290.0], [8.4, 290.0], [8.5, 290.0], [8.6, 290.0], [8.7, 290.0], [8.8, 290.0], [8.9, 290.0], [9.0, 290.0], [9.1, 290.0], [9.2, 290.0], [9.3, 290.0], [9.4, 290.0], [9.5, 290.0], [9.6, 290.0], [9.7, 290.0], [9.8, 291.0], [9.9, 291.0], [10.0, 291.0], [10.1, 291.0], [10.2, 291.0], [10.3, 291.0], [10.4, 291.0], [10.5, 291.0], [10.6, 291.0], [10.7, 291.0], [10.8, 291.0], [10.9, 291.0], [11.0, 291.0], [11.1, 291.0], [11.2, 291.0], [11.3, 291.0], [11.4, 291.0], [11.5, 291.0], [11.6, 291.0], [11.7, 291.0], [11.8, 291.0], [11.9, 291.0], [12.0, 291.0], [12.1, 291.0], [12.2, 291.0], [12.3, 291.0], [12.4, 291.0], [12.5, 291.0], [12.6, 291.0], [12.7, 291.0], [12.8, 291.0], [12.9, 291.0], [13.0, 291.0], [13.1, 291.0], [13.2, 291.0], [13.3, 291.0], [13.4, 291.0], [13.5, 291.0], [13.6, 291.0], [13.7, 291.0], [13.8, 291.0], [13.9, 291.0], [14.0, 291.0], [14.1, 291.0], [14.2, 291.0], [14.3, 291.0], [14.4, 291.0], [14.5, 291.0], [14.6, 291.0], [14.7, 291.0], [14.8, 291.0], [14.9, 291.0], [15.0, 291.0], [15.1, 292.0], [15.2, 292.0], [15.3, 292.0], [15.4, 292.0], [15.5, 292.0], [15.6, 292.0], [15.7, 292.0], [15.8, 292.0], [15.9, 292.0], [16.0, 292.0], [16.1, 292.0], [16.2, 292.0], [16.3, 292.0], [16.4, 292.0], [16.5, 292.0], [16.6, 292.0], [16.7, 292.0], [16.8, 292.0], [16.9, 292.0], [17.0, 292.0], [17.1, 292.0], [17.2, 292.0], [17.3, 292.0], [17.4, 292.0], [17.5, 292.0], [17.6, 292.0], [17.7, 292.0], [17.8, 292.0], [17.9, 292.0], [18.0, 292.0], [18.1, 292.0], [18.2, 292.0], [18.3, 292.0], [18.4, 292.0], [18.5, 292.0], [18.6, 292.0], [18.7, 292.0], [18.8, 292.0], [18.9, 292.0], [19.0, 292.0], [19.1, 292.0], [19.2, 292.0], [19.3, 292.0], [19.4, 292.0], [19.5, 292.0], [19.6, 292.0], [19.7, 292.0], [19.8, 292.0], [19.9, 292.0], [20.0, 292.0], [20.1, 292.0], [20.2, 292.0], [20.3, 292.0], [20.4, 292.0], [20.5, 292.0], [20.6, 292.0], [20.7, 292.0], [20.8, 292.0], [20.9, 292.0], [21.0, 292.0], [21.1, 292.0], [21.2, 292.0], [21.3, 293.0], [21.4, 293.0], [21.5, 293.0], [21.6, 293.0], [21.7, 293.0], [21.8, 293.0], [21.9, 293.0], [22.0, 293.0], [22.1, 293.0], [22.2, 293.0], [22.3, 293.0], [22.4, 293.0], [22.5, 293.0], [22.6, 293.0], [22.7, 293.0], [22.8, 293.0], [22.9, 293.0], [23.0, 293.0], [23.1, 293.0], [23.2, 293.0], [23.3, 293.0], [23.4, 293.0], [23.5, 293.0], [23.6, 293.0], [23.7, 293.0], [23.8, 293.0], [23.9, 293.0], [24.0, 293.0], [24.1, 293.0], [24.2, 293.0], [24.3, 293.0], [24.4, 293.0], [24.5, 293.0], [24.6, 293.0], [24.7, 293.0], [24.8, 293.0], [24.9, 293.0], [25.0, 293.0], [25.1, 293.0], [25.2, 293.0], [25.3, 293.0], [25.4, 293.0], [25.5, 293.0], [25.6, 293.0], [25.7, 293.0], [25.8, 293.0], [25.9, 293.0], [26.0, 293.0], [26.1, 293.0], [26.2, 293.0], [26.3, 293.0], [26.4, 293.0], [26.5, 293.0], [26.6, 293.0], [26.7, 293.0], [26.8, 293.0], [26.9, 293.0], [27.0, 293.0], [27.1, 293.0], [27.2, 293.0], [27.3, 293.0], [27.4, 293.0], [27.5, 293.0], [27.6, 293.0], [27.7, 293.0], [27.8, 293.0], [27.9, 293.0], [28.0, 293.0], [28.1, 293.0], [28.2, 293.0], [28.3, 293.0], [28.4, 293.0], [28.5, 293.0], [28.6, 293.0], [28.7, 294.0], [28.8, 294.0], [28.9, 294.0], [29.0, 294.0], [29.1, 294.0], [29.2, 294.0], [29.3, 294.0], [29.4, 294.0], [29.5, 294.0], [29.6, 294.0], [29.7, 294.0], [29.8, 294.0], [29.9, 294.0], [30.0, 294.0], [30.1, 294.0], [30.2, 294.0], [30.3, 294.0], [30.4, 294.0], [30.5, 294.0], [30.6, 294.0], [30.7, 294.0], [30.8, 294.0], [30.9, 294.0], [31.0, 294.0], [31.1, 294.0], [31.2, 294.0], [31.3, 294.0], [31.4, 294.0], [31.5, 294.0], [31.6, 294.0], [31.7, 294.0], [31.8, 294.0], [31.9, 294.0], [32.0, 294.0], [32.1, 294.0], [32.2, 294.0], [32.3, 294.0], [32.4, 294.0], [32.5, 294.0], [32.6, 294.0], [32.7, 294.0], [32.8, 294.0], [32.9, 294.0], [33.0, 294.0], [33.1, 294.0], [33.2, 294.0], [33.3, 294.0], [33.4, 294.0], [33.5, 294.0], [33.6, 294.0], [33.7, 294.0], [33.8, 294.0], [33.9, 294.0], [34.0, 294.0], [34.1, 294.0], [34.2, 294.0], [34.3, 294.0], [34.4, 294.0], [34.5, 294.0], [34.6, 294.0], [34.7, 294.0], [34.8, 294.0], [34.9, 294.0], [35.0, 294.0], [35.1, 294.0], [35.2, 294.0], [35.3, 294.0], [35.4, 294.0], [35.5, 294.0], [35.6, 294.0], [35.7, 294.0], [35.8, 294.0], [35.9, 294.0], [36.0, 294.0], [36.1, 294.0], [36.2, 294.0], [36.3, 294.0], [36.4, 294.0], [36.5, 294.0], [36.6, 295.0], [36.7, 295.0], [36.8, 295.0], [36.9, 295.0], [37.0, 295.0], [37.1, 295.0], [37.2, 295.0], [37.3, 295.0], [37.4, 295.0], [37.5, 295.0], [37.6, 295.0], [37.7, 295.0], [37.8, 295.0], [37.9, 295.0], [38.0, 295.0], [38.1, 295.0], [38.2, 295.0], [38.3, 295.0], [38.4, 295.0], [38.5, 295.0], [38.6, 295.0], [38.7, 295.0], [38.8, 295.0], [38.9, 295.0], [39.0, 295.0], [39.1, 295.0], [39.2, 295.0], [39.3, 295.0], [39.4, 295.0], [39.5, 295.0], [39.6, 295.0], [39.7, 295.0], [39.8, 295.0], [39.9, 295.0], [40.0, 295.0], [40.1, 295.0], [40.2, 295.0], [40.3, 295.0], [40.4, 295.0], [40.5, 295.0], [40.6, 295.0], [40.7, 295.0], [40.8, 295.0], [40.9, 295.0], [41.0, 295.0], [41.1, 295.0], [41.2, 295.0], [41.3, 295.0], [41.4, 295.0], [41.5, 295.0], [41.6, 295.0], [41.7, 295.0], [41.8, 295.0], [41.9, 295.0], [42.0, 295.0], [42.1, 295.0], [42.2, 295.0], [42.3, 295.0], [42.4, 295.0], [42.5, 295.0], [42.6, 295.0], [42.7, 295.0], [42.8, 295.0], [42.9, 295.0], [43.0, 295.0], [43.1, 295.0], [43.2, 295.0], [43.3, 295.0], [43.4, 295.0], [43.5, 295.0], [43.6, 295.0], [43.7, 295.0], [43.8, 295.0], [43.9, 295.0], [44.0, 295.0], [44.1, 295.0], [44.2, 295.0], [44.3, 295.0], [44.4, 295.0], [44.5, 295.0], [44.6, 295.0], [44.7, 295.0], [44.8, 296.0], [44.9, 296.0], [45.0, 296.0], [45.1, 296.0], [45.2, 296.0], [45.3, 296.0], [45.4, 296.0], [45.5, 296.0], [45.6, 296.0], [45.7, 296.0], [45.8, 296.0], [45.9, 296.0], [46.0, 296.0], [46.1, 296.0], [46.2, 296.0], [46.3, 296.0], [46.4, 296.0], [46.5, 296.0], [46.6, 296.0], [46.7, 296.0], [46.8, 296.0], [46.9, 296.0], [47.0, 296.0], [47.1, 296.0], [47.2, 296.0], [47.3, 296.0], [47.4, 296.0], [47.5, 296.0], [47.6, 296.0], [47.7, 296.0], [47.8, 296.0], [47.9, 296.0], [48.0, 296.0], [48.1, 296.0], [48.2, 296.0], [48.3, 296.0], [48.4, 296.0], [48.5, 296.0], [48.6, 296.0], [48.7, 296.0], [48.8, 296.0], [48.9, 296.0], [49.0, 296.0], [49.1, 296.0], [49.2, 296.0], [49.3, 296.0], [49.4, 296.0], [49.5, 296.0], [49.6, 296.0], [49.7, 296.0], [49.8, 296.0], [49.9, 296.0], [50.0, 296.0], [50.1, 296.0], [50.2, 296.0], [50.3, 296.0], [50.4, 296.0], [50.5, 296.0], [50.6, 296.0], [50.7, 296.0], [50.8, 296.0], [50.9, 296.0], [51.0, 296.0], [51.1, 296.0], [51.2, 296.0], [51.3, 296.0], [51.4, 296.0], [51.5, 296.0], [51.6, 296.0], [51.7, 296.0], [51.8, 296.0], [51.9, 296.0], [52.0, 296.0], [52.1, 296.0], [52.2, 296.0], [52.3, 296.0], [52.4, 296.0], [52.5, 296.0], [52.6, 296.0], [52.7, 296.0], [52.8, 296.0], [52.9, 296.0], [53.0, 296.0], [53.1, 297.0], [53.2, 297.0], [53.3, 297.0], [53.4, 297.0], [53.5, 297.0], [53.6, 297.0], [53.7, 297.0], [53.8, 297.0], [53.9, 297.0], [54.0, 297.0], [54.1, 297.0], [54.2, 297.0], [54.3, 297.0], [54.4, 297.0], [54.5, 297.0], [54.6, 297.0], [54.7, 297.0], [54.8, 297.0], [54.9, 297.0], [55.0, 297.0], [55.1, 297.0], [55.2, 297.0], [55.3, 297.0], [55.4, 297.0], [55.5, 297.0], [55.6, 297.0], [55.7, 297.0], [55.8, 297.0], [55.9, 297.0], [56.0, 297.0], [56.1, 297.0], [56.2, 297.0], [56.3, 297.0], [56.4, 297.0], [56.5, 297.0], [56.6, 297.0], [56.7, 297.0], [56.8, 297.0], [56.9, 297.0], [57.0, 297.0], [57.1, 297.0], [57.2, 297.0], [57.3, 297.0], [57.4, 297.0], [57.5, 297.0], [57.6, 297.0], [57.7, 297.0], [57.8, 297.0], [57.9, 297.0], [58.0, 297.0], [58.1, 297.0], [58.2, 297.0], [58.3, 297.0], [58.4, 297.0], [58.5, 297.0], [58.6, 297.0], [58.7, 297.0], [58.8, 297.0], [58.9, 297.0], [59.0, 297.0], [59.1, 297.0], [59.2, 297.0], [59.3, 297.0], [59.4, 297.0], [59.5, 297.0], [59.6, 297.0], [59.7, 297.0], [59.8, 297.0], [59.9, 297.0], [60.0, 297.0], [60.1, 297.0], [60.2, 297.0], [60.3, 298.0], [60.4, 298.0], [60.5, 298.0], [60.6, 298.0], [60.7, 298.0], [60.8, 298.0], [60.9, 298.0], [61.0, 298.0], [61.1, 298.0], [61.2, 298.0], [61.3, 298.0], [61.4, 298.0], [61.5, 298.0], [61.6, 298.0], [61.7, 298.0], [61.8, 298.0], [61.9, 298.0], [62.0, 298.0], [62.1, 298.0], [62.2, 298.0], [62.3, 298.0], [62.4, 298.0], [62.5, 298.0], [62.6, 298.0], [62.7, 298.0], [62.8, 298.0], [62.9, 298.0], [63.0, 298.0], [63.1, 298.0], [63.2, 298.0], [63.3, 298.0], [63.4, 298.0], [63.5, 298.0], [63.6, 298.0], [63.7, 298.0], [63.8, 298.0], [63.9, 298.0], [64.0, 298.0], [64.1, 298.0], [64.2, 298.0], [64.3, 298.0], [64.4, 298.0], [64.5, 298.0], [64.6, 298.0], [64.7, 298.0], [64.8, 298.0], [64.9, 298.0], [65.0, 298.0], [65.1, 298.0], [65.2, 298.0], [65.3, 298.0], [65.4, 298.0], [65.5, 298.0], [65.6, 298.0], [65.7, 298.0], [65.8, 298.0], [65.9, 298.0], [66.0, 298.0], [66.1, 298.0], [66.2, 298.0], [66.3, 298.0], [66.4, 298.0], [66.5, 298.0], [66.6, 298.0], [66.7, 298.0], [66.8, 299.0], [66.9, 299.0], [67.0, 299.0], [67.1, 299.0], [67.2, 299.0], [67.3, 299.0], [67.4, 299.0], [67.5, 299.0], [67.6, 299.0], [67.7, 299.0], [67.8, 299.0], [67.9, 299.0], [68.0, 299.0], [68.1, 299.0], [68.2, 299.0], [68.3, 299.0], [68.4, 299.0], [68.5, 299.0], [68.6, 299.0], [68.7, 299.0], [68.8, 299.0], [68.9, 299.0], [69.0, 299.0], [69.1, 299.0], [69.2, 299.0], [69.3, 299.0], [69.4, 299.0], [69.5, 299.0], [69.6, 299.0], [69.7, 299.0], [69.8, 299.0], [69.9, 299.0], [70.0, 299.0], [70.1, 299.0], [70.2, 299.0], [70.3, 299.0], [70.4, 299.0], [70.5, 299.0], [70.6, 299.0], [70.7, 299.0], [70.8, 299.0], [70.9, 299.0], [71.0, 299.0], [71.1, 299.0], [71.2, 299.0], [71.3, 299.0], [71.4, 299.0], [71.5, 299.0], [71.6, 299.0], [71.7, 299.0], [71.8, 299.0], [71.9, 299.0], [72.0, 299.0], [72.1, 299.0], [72.2, 299.0], [72.3, 299.0], [72.4, 299.0], [72.5, 299.0], [72.6, 300.0], [72.7, 300.0], [72.8, 300.0], [72.9, 300.0], [73.0, 300.0], [73.1, 300.0], [73.2, 300.0], [73.3, 300.0], [73.4, 300.0], [73.5, 300.0], [73.6, 300.0], [73.7, 300.0], [73.8, 300.0], [73.9, 300.0], [74.0, 300.0], [74.1, 300.0], [74.2, 300.0], [74.3, 300.0], [74.4, 300.0], [74.5, 300.0], [74.6, 300.0], [74.7, 300.0], [74.8, 300.0], [74.9, 300.0], [75.0, 300.0], [75.1, 300.0], [75.2, 300.0], [75.3, 300.0], [75.4, 300.0], [75.5, 300.0], [75.6, 300.0], [75.7, 300.0], [75.8, 300.0], [75.9, 300.0], [76.0, 300.0], [76.1, 300.0], [76.2, 300.0], [76.3, 300.0], [76.4, 300.0], [76.5, 300.0], [76.6, 300.0], [76.7, 300.0], [76.8, 300.0], [76.9, 300.0], [77.0, 300.0], [77.1, 300.0], [77.2, 300.0], [77.3, 300.0], [77.4, 300.0], [77.5, 301.0], [77.6, 301.0], [77.7, 301.0], [77.8, 301.0], [77.9, 301.0], [78.0, 301.0], [78.1, 301.0], [78.2, 301.0], [78.3, 301.0], [78.4, 301.0], [78.5, 301.0], [78.6, 301.0], [78.7, 301.0], [78.8, 301.0], [78.9, 301.0], [79.0, 301.0], [79.1, 301.0], [79.2, 301.0], [79.3, 301.0], [79.4, 301.0], [79.5, 301.0], [79.6, 301.0], [79.7, 301.0], [79.8, 301.0], [79.9, 301.0], [80.0, 301.0], [80.1, 301.0], [80.2, 301.0], [80.3, 301.0], [80.4, 301.0], [80.5, 301.0], [80.6, 301.0], [80.7, 301.0], [80.8, 301.0], [80.9, 301.0], [81.0, 301.0], [81.1, 301.0], [81.2, 301.0], [81.3, 301.0], [81.4, 302.0], [81.5, 302.0], [81.6, 302.0], [81.7, 302.0], [81.8, 302.0], [81.9, 302.0], [82.0, 302.0], [82.1, 302.0], [82.2, 302.0], [82.3, 302.0], [82.4, 302.0], [82.5, 302.0], [82.6, 302.0], [82.7, 302.0], [82.8, 302.0], [82.9, 302.0], [83.0, 302.0], [83.1, 302.0], [83.2, 302.0], [83.3, 302.0], [83.4, 302.0], [83.5, 302.0], [83.6, 302.0], [83.7, 302.0], [83.8, 302.0], [83.9, 302.0], [84.0, 302.0], [84.1, 302.0], [84.2, 302.0], [84.3, 303.0], [84.4, 303.0], [84.5, 303.0], [84.6, 303.0], [84.7, 303.0], [84.8, 303.0], [84.9, 303.0], [85.0, 303.0], [85.1, 303.0], [85.2, 303.0], [85.3, 303.0], [85.4, 303.0], [85.5, 303.0], [85.6, 303.0], [85.7, 303.0], [85.8, 303.0], [85.9, 303.0], [86.0, 303.0], [86.1, 303.0], [86.2, 303.0], [86.3, 303.0], [86.4, 303.0], [86.5, 303.0], [86.6, 303.0], [86.7, 304.0], [86.8, 304.0], [86.9, 304.0], [87.0, 304.0], [87.1, 304.0], [87.2, 304.0], [87.3, 304.0], [87.4, 304.0], [87.5, 304.0], [87.6, 304.0], [87.7, 304.0], [87.8, 304.0], [87.9, 304.0], [88.0, 304.0], [88.1, 304.0], [88.2, 304.0], [88.3, 304.0], [88.4, 304.0], [88.5, 304.0], [88.6, 304.0], [88.7, 305.0], [88.8, 305.0], [88.9, 305.0], [89.0, 305.0], [89.1, 305.0], [89.2, 305.0], [89.3, 305.0], [89.4, 305.0], [89.5, 305.0], [89.6, 305.0], [89.7, 305.0], [89.8, 305.0], [89.9, 305.0], [90.0, 305.0], [90.1, 305.0], [90.2, 306.0], [90.3, 306.0], [90.4, 306.0], [90.5, 306.0], [90.6, 306.0], [90.7, 306.0], [90.8, 306.0], [90.9, 306.0], [91.0, 306.0], [91.1, 306.0], [91.2, 306.0], [91.3, 306.0], [91.4, 306.0], [91.5, 307.0], [91.6, 307.0], [91.7, 307.0], [91.8, 307.0], [91.9, 307.0], [92.0, 307.0], [92.1, 307.0], [92.2, 307.0], [92.3, 307.0], [92.4, 308.0], [92.5, 308.0], [92.6, 308.0], [92.7, 308.0], [92.8, 308.0], [92.9, 308.0], [93.0, 308.0], [93.1, 308.0], [93.2, 309.0], [93.3, 309.0], [93.4, 309.0], [93.5, 309.0], [93.6, 309.0], [93.7, 309.0], [93.8, 309.0], [93.9, 310.0], [94.0, 310.0], [94.1, 310.0], [94.2, 310.0], [94.3, 310.0], [94.4, 310.0], [94.5, 311.0], [94.6, 311.0], [94.7, 311.0], [94.8, 311.0], [94.9, 312.0], [95.0, 312.0], [95.1, 312.0], [95.2, 312.0], [95.3, 313.0], [95.4, 313.0], [95.5, 313.0], [95.6, 314.0], [95.7, 314.0], [95.8, 315.0], [95.9, 315.0], [96.0, 315.0], [96.1, 316.0], [96.2, 316.0], [96.3, 317.0], [96.4, 318.0], [96.5, 318.0], [96.6, 319.0], [96.7, 320.0], [96.8, 320.0], [96.9, 321.0], [97.0, 322.0], [97.1, 323.0], [97.2, 324.0], [97.3, 325.0], [97.4, 326.0], [97.5, 328.0], [97.6, 329.0], [97.7, 331.0], [97.8, 333.0], [97.9, 335.0], [98.0, 338.0], [98.1, 341.0], [98.2, 343.0], [98.3, 347.0], [98.4, 351.0], [98.5, 355.0], [98.6, 358.0], [98.7, 360.0], [98.8, 364.0], [98.9, 367.0], [99.0, 370.0], [99.1, 376.0], [99.2, 381.0], [99.3, 388.0], [99.4, 395.0], [99.5, 400.0], [99.6, 404.0], [99.7, 409.0], [99.8, 416.0], [99.9, 428.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 3.0, "minX": 200.0, "maxY": 29024.0, "series": [{"data": [[600.0, 3.0], [300.0, 10775.0], [700.0, 6.0], [400.0, 188.0], [200.0, 29024.0], [500.0, 4.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 13.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 39987.0, "series": [{"data": [[0.0, 39987.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 13.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 7.942061700526714, "minX": 1.641231E12, "maxY": 8.0, "series": [{"data": [[1.64123142E12, 8.0], [1.64123172E12, 8.0], [1.64123202E12, 8.0], [1.64123232E12, 8.0], [1.64123214E12, 8.0], [1.64123244E12, 8.0], [1.64123112E12, 8.0], [1.64123124E12, 8.0], [1.64123154E12, 8.0], [1.64123184E12, 8.0], [1.64123166E12, 8.0], [1.64123196E12, 8.0], [1.64123226E12, 8.0], [1.64123238E12, 8.0], [1.641231E12, 7.960000000000001], [1.64123136E12, 8.0], [1.64123118E12, 8.0], [1.64123148E12, 8.0], [1.64123178E12, 8.0], [1.64123208E12, 8.0], [1.6412319E12, 8.0], [1.6412322E12, 8.0], [1.6412325E12, 7.942061700526714], [1.64123106E12, 8.0], [1.6412313E12, 8.0], [1.6412316E12, 8.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6412325E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 293.3333333333333, "minX": 1.0, "maxY": 397.75, "series": [{"data": [[8.0, 298.6953693743273], [4.0, 297.0], [2.0, 296.25], [1.0, 296.0], [5.0, 305.5], [6.0, 344.8571428571429], [3.0, 293.3333333333333], [7.0, 397.75]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[7.997950000000002, 298.7228000000015]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 8.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 239.58333333333334, "minX": 1.641231E12, "maxY": 85166.4, "series": [{"data": [[1.64123142E12, 84902.4], [1.64123172E12, 84955.2], [1.64123202E12, 85008.0], [1.64123232E12, 84110.4], [1.64123214E12, 84849.6], [1.64123244E12, 84902.4], [1.64123112E12, 85060.8], [1.64123124E12, 84638.4], [1.64123154E12, 84902.4], [1.64123184E12, 85166.4], [1.64123166E12, 84955.2], [1.64123196E12, 84691.2], [1.64123226E12, 85008.0], [1.64123238E12, 84427.2], [1.641231E12, 6600.0], [1.64123136E12, 85008.0], [1.64123118E12, 84638.4], [1.64123148E12, 84955.2], [1.64123178E12, 84585.6], [1.64123208E12, 84955.2], [1.6412319E12, 84532.8], [1.6412322E12, 84744.0], [1.6412325E12, 70171.2], [1.64123106E12, 84796.8], [1.6412313E12, 84744.0], [1.6412316E12, 84691.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.64123142E12, 3082.0], [1.64123172E12, 3083.9166666666665], [1.64123202E12, 3085.8333333333335], [1.64123232E12, 3053.25], [1.64123214E12, 3080.0833333333335], [1.64123244E12, 3082.0], [1.64123112E12, 3087.75], [1.64123124E12, 3072.4166666666665], [1.64123154E12, 3082.0], [1.64123184E12, 3091.5833333333335], [1.64123166E12, 3083.9166666666665], [1.64123196E12, 3074.3333333333335], [1.64123226E12, 3085.8333333333335], [1.64123238E12, 3064.75], [1.641231E12, 239.58333333333334], [1.64123136E12, 3085.8333333333335], [1.64123118E12, 3072.4166666666665], [1.64123148E12, 3083.9166666666665], [1.64123178E12, 3070.5], [1.64123208E12, 3083.9166666666665], [1.6412319E12, 3068.5833333333335], [1.6412322E12, 3076.25], [1.6412325E12, 2547.25], [1.64123106E12, 3078.1666666666665], [1.6412313E12, 3076.25], [1.6412316E12, 3074.3333333333335]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6412325E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 297.6807191568504, "minX": 1.641231E12, "maxY": 316.0400000000001, "series": [{"data": [[1.64123142E12, 298.15360696517365], [1.64123172E12, 297.7899316345555], [1.64123202E12, 298.1273291925466], [1.64123232E12, 301.0747018204647], [1.64123214E12, 298.21904169259466], [1.64123244E12, 298.40422885572116], [1.64123112E12, 297.821849782744], [1.64123124E12, 299.3387398627576], [1.64123154E12, 298.1766169154228], [1.64123184E12, 297.6807191568504], [1.64123166E12, 298.21752641392163], [1.64123196E12, 298.7256857855361], [1.64123226E12, 298.4503105590065], [1.64123238E12, 299.51657285803657], [1.641231E12, 316.0400000000001], [1.64123136E12, 298.072049689441], [1.64123118E12, 299.1253898939491], [1.64123148E12, 298.4599129894342], [1.64123178E12, 299.7528089887643], [1.64123208E12, 298.272840273462], [1.6412319E12, 299.4965646470954], [1.6412322E12, 298.91713395638624], [1.6412325E12, 298.5590669676446], [1.64123106E12, 298.46886674968914], [1.6412313E12, 298.7887850467284], [1.6412316E12, 299.1309226932669]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6412325E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 297.5368877867327, "minX": 1.641231E12, "maxY": 315.7759999999999, "series": [{"data": [[1.64123142E12, 297.9838308457701], [1.64123172E12, 297.6165320074574], [1.64123202E12, 297.9670807453422], [1.64123232E12, 300.9127432517262], [1.64123214E12, 298.0715619166149], [1.64123244E12, 298.25995024875584], [1.64123112E12, 297.68839230291746], [1.64123124E12, 299.17654398003685], [1.64123154E12, 298.03855721393006], [1.64123184E12, 297.5368877867327], [1.64123166E12, 298.02983219390904], [1.64123196E12, 298.5286783042398], [1.64123226E12, 298.29813664596276], [1.64123238E12, 299.3520950594121], [1.641231E12, 315.7759999999999], [1.64123136E12, 297.9242236024846], [1.64123118E12, 298.986899563319], [1.64123148E12, 298.3151025481669], [1.64123178E12, 299.59300873907563], [1.64123208E12, 298.1168427594788], [1.6412319E12, 299.35665209244235], [1.6412322E12, 298.67663551401813], [1.6412325E12, 298.4025583145225], [1.64123106E12, 298.35491905354917], [1.6412313E12, 298.62554517133935], [1.6412316E12, 298.97506234414004]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6412325E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 140.5758706467661, "minX": 1.641231E12, "maxY": 141.98493408662924, "series": [{"data": [[1.64123142E12, 140.5758706467661], [1.64123172E12, 140.65692977004366], [1.64123202E12, 140.90062111801248], [1.64123232E12, 141.98493408662924], [1.64123214E12, 140.84256378344733], [1.64123244E12, 140.8768656716418], [1.64123112E12, 140.75977653631278], [1.64123124E12, 141.07049282595125], [1.64123154E12, 140.92661691542295], [1.64123184E12, 140.9721016738994], [1.64123166E12, 140.82349285270374], [1.64123196E12, 140.86658354114704], [1.64123226E12, 141.03602484472054], [1.64123238E12, 141.27204502814274], [1.641231E12, 141.79199999999994], [1.64123136E12, 140.72857142857137], [1.64123118E12, 141.15595757953847], [1.64123148E12, 140.73399627097578], [1.64123178E12, 140.85081148564288], [1.64123208E12, 140.97513983840915], [1.6412319E12, 140.940037476577], [1.6412322E12, 141.02928348909666], [1.6412325E12, 140.84123401053424], [1.64123106E12, 140.71980074719804], [1.6412313E12, 140.95140186915904], [1.6412316E12, 140.91396508728198]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6412325E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 281.0, "minX": 1.641231E12, "maxY": 783.0, "series": [{"data": [[1.64123142E12, 425.0], [1.64123172E12, 428.0], [1.64123202E12, 436.0], [1.64123232E12, 783.0], [1.64123214E12, 420.0], [1.64123244E12, 526.0], [1.64123112E12, 414.0], [1.64123124E12, 413.0], [1.64123154E12, 436.0], [1.64123184E12, 407.0], [1.64123166E12, 437.0], [1.64123196E12, 430.0], [1.64123226E12, 413.0], [1.64123238E12, 436.0], [1.641231E12, 624.0], [1.64123136E12, 419.0], [1.64123118E12, 415.0], [1.64123148E12, 593.0], [1.64123178E12, 435.0], [1.64123208E12, 415.0], [1.6412319E12, 442.0], [1.6412322E12, 440.0], [1.6412325E12, 416.0], [1.64123106E12, 431.0], [1.6412313E12, 419.0], [1.6412316E12, 448.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.64123142E12, 304.0], [1.64123172E12, 304.0], [1.64123202E12, 305.0], [1.64123232E12, 307.0], [1.64123214E12, 305.20000000000005], [1.64123244E12, 305.0], [1.64123112E12, 304.0], [1.64123124E12, 306.0], [1.64123154E12, 304.10000000000014], [1.64123184E12, 305.0], [1.64123166E12, 305.0], [1.64123196E12, 305.0], [1.64123226E12, 306.0], [1.64123238E12, 309.0], [1.641231E12, 351.0], [1.64123136E12, 304.0], [1.64123118E12, 306.0], [1.64123148E12, 304.0], [1.64123178E12, 306.0], [1.64123208E12, 306.0], [1.6412319E12, 306.0], [1.6412322E12, 305.0], [1.6412325E12, 306.0], [1.64123106E12, 304.0], [1.6412313E12, 305.0], [1.6412316E12, 306.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.64123142E12, 392.3700000000006], [1.64123172E12, 366.8000000000002], [1.64123202E12, 366.8899999999999], [1.64123232E12, 394.4199999999996], [1.64123214E12, 367.0], [1.64123244E12, 375.4600000000005], [1.64123112E12, 357.8799999999999], [1.64123124E12, 375.0], [1.64123154E12, 369.9100000000001], [1.64123184E12, 334.7199999999998], [1.64123166E12, 366.0], [1.64123196E12, 371.85000000000014], [1.64123226E12, 355.0], [1.64123238E12, 358.0], [1.641231E12, 610.7399999999998], [1.64123136E12, 373.6799999999985], [1.64123118E12, 367.0], [1.64123148E12, 378.9000000000001], [1.64123178E12, 402.97], [1.64123208E12, 365.7000000000003], [1.6412319E12, 398.98], [1.6412322E12, 386.8800000000001], [1.6412325E12, 367.70000000000005], [1.64123106E12, 359.93000000000006], [1.6412313E12, 367.8800000000001], [1.6412316E12, 391.7000000000003]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.64123142E12, 310.0], [1.64123172E12, 310.0], [1.64123202E12, 311.4499999999998], [1.64123232E12, 314.0], [1.64123214E12, 312.0], [1.64123244E12, 313.0], [1.64123112E12, 310.0], [1.64123124E12, 312.0], [1.64123154E12, 309.0], [1.64123184E12, 310.0], [1.64123166E12, 309.0], [1.64123196E12, 313.0], [1.64123226E12, 312.4499999999998], [1.64123238E12, 314.0], [1.641231E12, 372.09999999999985], [1.64123136E12, 312.0], [1.64123118E12, 314.0], [1.64123148E12, 309.5], [1.64123178E12, 315.0], [1.64123208E12, 311.0], [1.6412319E12, 312.89999999999986], [1.6412322E12, 312.0], [1.6412325E12, 314.0], [1.64123106E12, 309.0], [1.6412313E12, 310.0], [1.6412316E12, 312.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.64123142E12, 281.0], [1.64123172E12, 284.0], [1.64123202E12, 283.0], [1.64123232E12, 283.0], [1.64123214E12, 284.0], [1.64123244E12, 283.0], [1.64123112E12, 285.0], [1.64123124E12, 283.0], [1.64123154E12, 281.0], [1.64123184E12, 283.0], [1.64123166E12, 283.0], [1.64123196E12, 284.0], [1.64123226E12, 283.0], [1.64123238E12, 284.0], [1.641231E12, 289.0], [1.64123136E12, 284.0], [1.64123118E12, 282.0], [1.64123148E12, 284.0], [1.64123178E12, 284.0], [1.64123208E12, 284.0], [1.6412319E12, 284.0], [1.6412322E12, 285.0], [1.6412325E12, 283.0], [1.64123106E12, 284.0], [1.6412313E12, 284.0], [1.6412316E12, 283.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.64123142E12, 296.0], [1.64123172E12, 296.0], [1.64123202E12, 296.0], [1.64123232E12, 296.0], [1.64123214E12, 296.0], [1.64123244E12, 296.0], [1.64123112E12, 296.0], [1.64123124E12, 297.0], [1.64123154E12, 296.0], [1.64123184E12, 296.0], [1.64123166E12, 296.0], [1.64123196E12, 296.0], [1.64123226E12, 296.0], [1.64123238E12, 297.0], [1.641231E12, 303.0], [1.64123136E12, 296.0], [1.64123118E12, 296.0], [1.64123148E12, 296.0], [1.64123178E12, 297.0], [1.64123208E12, 296.0], [1.6412319E12, 296.0], [1.6412322E12, 296.0], [1.6412325E12, 296.0], [1.64123106E12, 297.0], [1.6412313E12, 296.0], [1.6412316E12, 296.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6412325E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 295.0, "minX": 2.0, "maxY": 322.0, "series": [{"data": [[2.0, 296.5], [14.0, 297.5], [17.0, 299.0], [19.0, 322.0], [21.0, 316.0], [23.0, 296.0], [24.0, 297.0], [25.0, 297.0], [26.0, 296.0], [27.0, 296.0], [28.0, 296.0], [29.0, 296.0], [30.0, 296.0], [31.0, 295.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 31.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 295.0, "minX": 2.0, "maxY": 321.0, "series": [{"data": [[2.0, 296.5], [14.0, 297.5], [17.0, 298.0], [19.0, 321.0], [21.0, 316.0], [23.0, 296.0], [24.0, 297.0], [25.0, 297.0], [26.0, 296.0], [27.0, 296.0], [28.0, 296.0], [29.0, 296.0], [30.0, 296.0], [31.0, 295.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 31.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.216666666666667, "minX": 1.641231E12, "maxY": 26.883333333333333, "series": [{"data": [[1.64123142E12, 26.8], [1.64123172E12, 26.816666666666666], [1.64123202E12, 26.833333333333332], [1.64123232E12, 26.55], [1.64123214E12, 26.783333333333335], [1.64123244E12, 26.8], [1.64123112E12, 26.85], [1.64123124E12, 26.716666666666665], [1.64123154E12, 26.8], [1.64123184E12, 26.883333333333333], [1.64123166E12, 26.816666666666666], [1.64123196E12, 26.733333333333334], [1.64123226E12, 26.833333333333332], [1.64123238E12, 26.65], [1.641231E12, 2.216666666666667], [1.64123136E12, 26.833333333333332], [1.64123118E12, 26.716666666666665], [1.64123148E12, 26.816666666666666], [1.64123178E12, 26.7], [1.64123208E12, 26.816666666666666], [1.6412319E12, 26.683333333333334], [1.6412322E12, 26.75], [1.6412325E12, 22.016666666666666], [1.64123106E12, 26.766666666666666], [1.6412313E12, 26.75], [1.6412316E12, 26.733333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6412325E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.0833333333333335, "minX": 1.641231E12, "maxY": 26.883333333333333, "series": [{"data": [[1.64123142E12, 26.8], [1.64123172E12, 26.816666666666666], [1.64123202E12, 26.833333333333332], [1.64123232E12, 26.55], [1.64123214E12, 26.783333333333335], [1.64123244E12, 26.8], [1.64123112E12, 26.85], [1.64123124E12, 26.716666666666665], [1.64123154E12, 26.8], [1.64123184E12, 26.883333333333333], [1.64123166E12, 26.816666666666666], [1.64123196E12, 26.733333333333334], [1.64123226E12, 26.833333333333332], [1.64123238E12, 26.65], [1.641231E12, 2.0833333333333335], [1.64123136E12, 26.833333333333332], [1.64123118E12, 26.716666666666665], [1.64123148E12, 26.816666666666666], [1.64123178E12, 26.7], [1.64123208E12, 26.816666666666666], [1.6412319E12, 26.683333333333334], [1.6412322E12, 26.75], [1.6412325E12, 22.15], [1.64123106E12, 26.766666666666666], [1.6412313E12, 26.75], [1.6412316E12, 26.733333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6412325E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.0833333333333335, "minX": 1.641231E12, "maxY": 26.883333333333333, "series": [{"data": [[1.64123142E12, 26.8], [1.64123172E12, 26.816666666666666], [1.64123202E12, 26.833333333333332], [1.64123232E12, 26.55], [1.64123214E12, 26.783333333333335], [1.64123244E12, 26.8], [1.64123112E12, 26.85], [1.64123124E12, 26.716666666666665], [1.64123154E12, 26.8], [1.64123184E12, 26.883333333333333], [1.64123166E12, 26.816666666666666], [1.64123196E12, 26.733333333333334], [1.64123226E12, 26.833333333333332], [1.64123238E12, 26.65], [1.641231E12, 2.0833333333333335], [1.64123136E12, 26.833333333333332], [1.64123118E12, 26.716666666666665], [1.64123148E12, 26.816666666666666], [1.64123178E12, 26.7], [1.64123208E12, 26.816666666666666], [1.6412319E12, 26.683333333333334], [1.6412322E12, 26.75], [1.6412325E12, 22.15], [1.64123106E12, 26.766666666666666], [1.6412313E12, 26.75], [1.6412316E12, 26.733333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6412325E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.0833333333333335, "minX": 1.641231E12, "maxY": 26.883333333333333, "series": [{"data": [[1.64123142E12, 26.8], [1.64123172E12, 26.816666666666666], [1.64123202E12, 26.833333333333332], [1.64123232E12, 26.55], [1.64123214E12, 26.783333333333335], [1.64123244E12, 26.8], [1.64123112E12, 26.85], [1.64123124E12, 26.716666666666665], [1.64123154E12, 26.8], [1.64123184E12, 26.883333333333333], [1.64123166E12, 26.816666666666666], [1.64123196E12, 26.733333333333334], [1.64123226E12, 26.833333333333332], [1.64123238E12, 26.65], [1.641231E12, 2.0833333333333335], [1.64123136E12, 26.833333333333332], [1.64123118E12, 26.716666666666665], [1.64123148E12, 26.816666666666666], [1.64123178E12, 26.7], [1.64123208E12, 26.816666666666666], [1.6412319E12, 26.683333333333334], [1.6412322E12, 26.75], [1.6412325E12, 22.15], [1.64123106E12, 26.766666666666666], [1.6412313E12, 26.75], [1.6412316E12, 26.733333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6412325E12, "title": "Total Transactions Per Second"}},
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


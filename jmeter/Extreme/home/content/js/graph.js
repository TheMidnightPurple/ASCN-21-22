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
        data: {"result": {"minY": 110.0, "minX": 0.0, "maxY": 838.0, "series": [{"data": [[0.0, 110.0], [0.1, 113.0], [0.2, 115.0], [0.3, 115.0], [0.4, 115.0], [0.5, 116.0], [0.6, 116.0], [0.7, 116.0], [0.8, 116.0], [0.9, 117.0], [1.0, 117.0], [1.1, 117.0], [1.2, 117.0], [1.3, 117.0], [1.4, 117.0], [1.5, 118.0], [1.6, 118.0], [1.7, 118.0], [1.8, 118.0], [1.9, 118.0], [2.0, 118.0], [2.1, 118.0], [2.2, 119.0], [2.3, 119.0], [2.4, 119.0], [2.5, 119.0], [2.6, 119.0], [2.7, 119.0], [2.8, 119.0], [2.9, 119.0], [3.0, 119.0], [3.1, 120.0], [3.2, 120.0], [3.3, 120.0], [3.4, 120.0], [3.5, 120.0], [3.6, 120.0], [3.7, 120.0], [3.8, 120.0], [3.9, 120.0], [4.0, 120.0], [4.1, 121.0], [4.2, 121.0], [4.3, 121.0], [4.4, 121.0], [4.5, 121.0], [4.6, 121.0], [4.7, 121.0], [4.8, 121.0], [4.9, 121.0], [5.0, 121.0], [5.1, 121.0], [5.2, 121.0], [5.3, 122.0], [5.4, 122.0], [5.5, 122.0], [5.6, 122.0], [5.7, 122.0], [5.8, 122.0], [5.9, 122.0], [6.0, 122.0], [6.1, 122.0], [6.2, 122.0], [6.3, 122.0], [6.4, 122.0], [6.5, 122.0], [6.6, 122.0], [6.7, 123.0], [6.8, 123.0], [6.9, 123.0], [7.0, 123.0], [7.1, 123.0], [7.2, 123.0], [7.3, 123.0], [7.4, 123.0], [7.5, 123.0], [7.6, 123.0], [7.7, 123.0], [7.8, 123.0], [7.9, 123.0], [8.0, 123.0], [8.1, 123.0], [8.2, 124.0], [8.3, 124.0], [8.4, 124.0], [8.5, 124.0], [8.6, 124.0], [8.7, 124.0], [8.8, 124.0], [8.9, 124.0], [9.0, 124.0], [9.1, 124.0], [9.2, 124.0], [9.3, 124.0], [9.4, 124.0], [9.5, 125.0], [9.6, 125.0], [9.7, 125.0], [9.8, 125.0], [9.9, 125.0], [10.0, 125.0], [10.1, 125.0], [10.2, 125.0], [10.3, 125.0], [10.4, 125.0], [10.5, 125.0], [10.6, 125.0], [10.7, 125.0], [10.8, 125.0], [10.9, 125.0], [11.0, 126.0], [11.1, 126.0], [11.2, 126.0], [11.3, 126.0], [11.4, 126.0], [11.5, 126.0], [11.6, 126.0], [11.7, 126.0], [11.8, 126.0], [11.9, 126.0], [12.0, 126.0], [12.1, 126.0], [12.2, 126.0], [12.3, 126.0], [12.4, 127.0], [12.5, 127.0], [12.6, 127.0], [12.7, 127.0], [12.8, 127.0], [12.9, 127.0], [13.0, 127.0], [13.1, 127.0], [13.2, 127.0], [13.3, 127.0], [13.4, 127.0], [13.5, 127.0], [13.6, 127.0], [13.7, 127.0], [13.8, 128.0], [13.9, 128.0], [14.0, 128.0], [14.1, 128.0], [14.2, 128.0], [14.3, 128.0], [14.4, 128.0], [14.5, 128.0], [14.6, 128.0], [14.7, 128.0], [14.8, 128.0], [14.9, 128.0], [15.0, 128.0], [15.1, 128.0], [15.2, 129.0], [15.3, 129.0], [15.4, 129.0], [15.5, 129.0], [15.6, 129.0], [15.7, 129.0], [15.8, 129.0], [15.9, 129.0], [16.0, 129.0], [16.1, 129.0], [16.2, 129.0], [16.3, 129.0], [16.4, 130.0], [16.5, 130.0], [16.6, 130.0], [16.7, 130.0], [16.8, 130.0], [16.9, 130.0], [17.0, 130.0], [17.1, 130.0], [17.2, 130.0], [17.3, 130.0], [17.4, 130.0], [17.5, 131.0], [17.6, 131.0], [17.7, 131.0], [17.8, 131.0], [17.9, 131.0], [18.0, 131.0], [18.1, 131.0], [18.2, 131.0], [18.3, 131.0], [18.4, 131.0], [18.5, 131.0], [18.6, 132.0], [18.7, 132.0], [18.8, 132.0], [18.9, 132.0], [19.0, 132.0], [19.1, 132.0], [19.2, 132.0], [19.3, 132.0], [19.4, 132.0], [19.5, 132.0], [19.6, 132.0], [19.7, 133.0], [19.8, 133.0], [19.9, 133.0], [20.0, 133.0], [20.1, 133.0], [20.2, 133.0], [20.3, 133.0], [20.4, 133.0], [20.5, 133.0], [20.6, 133.0], [20.7, 134.0], [20.8, 134.0], [20.9, 134.0], [21.0, 134.0], [21.1, 134.0], [21.2, 134.0], [21.3, 134.0], [21.4, 134.0], [21.5, 134.0], [21.6, 135.0], [21.7, 135.0], [21.8, 135.0], [21.9, 135.0], [22.0, 135.0], [22.1, 135.0], [22.2, 135.0], [22.3, 135.0], [22.4, 135.0], [22.5, 135.0], [22.6, 136.0], [22.7, 136.0], [22.8, 136.0], [22.9, 136.0], [23.0, 136.0], [23.1, 136.0], [23.2, 136.0], [23.3, 136.0], [23.4, 136.0], [23.5, 136.0], [23.6, 136.0], [23.7, 137.0], [23.8, 137.0], [23.9, 137.0], [24.0, 137.0], [24.1, 137.0], [24.2, 137.0], [24.3, 137.0], [24.4, 137.0], [24.5, 137.0], [24.6, 137.0], [24.7, 137.0], [24.8, 137.0], [24.9, 138.0], [25.0, 138.0], [25.1, 138.0], [25.2, 138.0], [25.3, 138.0], [25.4, 138.0], [25.5, 138.0], [25.6, 138.0], [25.7, 138.0], [25.8, 138.0], [25.9, 138.0], [26.0, 138.0], [26.1, 139.0], [26.2, 139.0], [26.3, 139.0], [26.4, 139.0], [26.5, 139.0], [26.6, 139.0], [26.7, 139.0], [26.8, 139.0], [26.9, 139.0], [27.0, 139.0], [27.1, 139.0], [27.2, 139.0], [27.3, 139.0], [27.4, 139.0], [27.5, 140.0], [27.6, 140.0], [27.7, 140.0], [27.8, 140.0], [27.9, 140.0], [28.0, 140.0], [28.1, 140.0], [28.2, 140.0], [28.3, 140.0], [28.4, 140.0], [28.5, 140.0], [28.6, 140.0], [28.7, 140.0], [28.8, 140.0], [28.9, 141.0], [29.0, 141.0], [29.1, 141.0], [29.2, 141.0], [29.3, 141.0], [29.4, 141.0], [29.5, 141.0], [29.6, 141.0], [29.7, 141.0], [29.8, 141.0], [29.9, 141.0], [30.0, 141.0], [30.1, 141.0], [30.2, 141.0], [30.3, 141.0], [30.4, 142.0], [30.5, 142.0], [30.6, 142.0], [30.7, 142.0], [30.8, 142.0], [30.9, 142.0], [31.0, 142.0], [31.1, 142.0], [31.2, 142.0], [31.3, 142.0], [31.4, 142.0], [31.5, 142.0], [31.6, 142.0], [31.7, 142.0], [31.8, 142.0], [31.9, 142.0], [32.0, 143.0], [32.1, 143.0], [32.2, 143.0], [32.3, 143.0], [32.4, 143.0], [32.5, 143.0], [32.6, 143.0], [32.7, 143.0], [32.8, 143.0], [32.9, 143.0], [33.0, 143.0], [33.1, 143.0], [33.2, 143.0], [33.3, 143.0], [33.4, 143.0], [33.5, 143.0], [33.6, 144.0], [33.7, 144.0], [33.8, 144.0], [33.9, 144.0], [34.0, 144.0], [34.1, 144.0], [34.2, 144.0], [34.3, 144.0], [34.4, 144.0], [34.5, 144.0], [34.6, 144.0], [34.7, 144.0], [34.8, 144.0], [34.9, 144.0], [35.0, 144.0], [35.1, 145.0], [35.2, 145.0], [35.3, 145.0], [35.4, 145.0], [35.5, 145.0], [35.6, 145.0], [35.7, 145.0], [35.8, 145.0], [35.9, 145.0], [36.0, 145.0], [36.1, 145.0], [36.2, 145.0], [36.3, 145.0], [36.4, 145.0], [36.5, 145.0], [36.6, 145.0], [36.7, 146.0], [36.8, 146.0], [36.9, 146.0], [37.0, 146.0], [37.1, 146.0], [37.2, 146.0], [37.3, 146.0], [37.4, 146.0], [37.5, 146.0], [37.6, 146.0], [37.7, 146.0], [37.8, 146.0], [37.9, 146.0], [38.0, 147.0], [38.1, 147.0], [38.2, 147.0], [38.3, 147.0], [38.4, 147.0], [38.5, 147.0], [38.6, 147.0], [38.7, 147.0], [38.8, 147.0], [38.9, 147.0], [39.0, 147.0], [39.1, 147.0], [39.2, 147.0], [39.3, 148.0], [39.4, 148.0], [39.5, 148.0], [39.6, 148.0], [39.7, 148.0], [39.8, 148.0], [39.9, 148.0], [40.0, 148.0], [40.1, 148.0], [40.2, 148.0], [40.3, 148.0], [40.4, 148.0], [40.5, 149.0], [40.6, 149.0], [40.7, 149.0], [40.8, 149.0], [40.9, 149.0], [41.0, 149.0], [41.1, 149.0], [41.2, 149.0], [41.3, 149.0], [41.4, 149.0], [41.5, 150.0], [41.6, 150.0], [41.7, 150.0], [41.8, 150.0], [41.9, 150.0], [42.0, 150.0], [42.1, 150.0], [42.2, 150.0], [42.3, 150.0], [42.4, 150.0], [42.5, 151.0], [42.6, 151.0], [42.7, 151.0], [42.8, 151.0], [42.9, 151.0], [43.0, 151.0], [43.1, 151.0], [43.2, 151.0], [43.3, 151.0], [43.4, 152.0], [43.5, 152.0], [43.6, 152.0], [43.7, 152.0], [43.8, 152.0], [43.9, 152.0], [44.0, 152.0], [44.1, 153.0], [44.2, 153.0], [44.3, 153.0], [44.4, 153.0], [44.5, 153.0], [44.6, 153.0], [44.7, 154.0], [44.8, 154.0], [44.9, 154.0], [45.0, 154.0], [45.1, 154.0], [45.2, 154.0], [45.3, 154.0], [45.4, 155.0], [45.5, 155.0], [45.6, 155.0], [45.7, 155.0], [45.8, 155.0], [45.9, 156.0], [46.0, 156.0], [46.1, 156.0], [46.2, 156.0], [46.3, 156.0], [46.4, 157.0], [46.5, 157.0], [46.6, 157.0], [46.7, 157.0], [46.8, 158.0], [46.9, 158.0], [47.0, 158.0], [47.1, 159.0], [47.2, 159.0], [47.3, 159.0], [47.4, 159.0], [47.5, 160.0], [47.6, 160.0], [47.7, 161.0], [47.8, 161.0], [47.9, 162.0], [48.0, 162.0], [48.1, 163.0], [48.2, 164.0], [48.3, 164.0], [48.4, 165.0], [48.5, 166.0], [48.6, 167.0], [48.7, 168.0], [48.8, 169.0], [48.9, 170.0], [49.0, 172.0], [49.1, 175.0], [49.2, 177.0], [49.3, 184.0], [49.4, 194.0], [49.5, 196.0], [49.6, 196.0], [49.7, 197.0], [49.8, 197.0], [49.9, 198.0], [50.0, 198.0], [50.1, 198.0], [50.2, 199.0], [50.3, 199.0], [50.4, 199.0], [50.5, 199.0], [50.6, 200.0], [50.7, 200.0], [50.8, 200.0], [50.9, 200.0], [51.0, 200.0], [51.1, 201.0], [51.2, 201.0], [51.3, 201.0], [51.4, 201.0], [51.5, 201.0], [51.6, 202.0], [51.7, 202.0], [51.8, 202.0], [51.9, 202.0], [52.0, 202.0], [52.1, 202.0], [52.2, 203.0], [52.3, 203.0], [52.4, 203.0], [52.5, 203.0], [52.6, 203.0], [52.7, 203.0], [52.8, 203.0], [52.9, 203.0], [53.0, 204.0], [53.1, 204.0], [53.2, 204.0], [53.3, 204.0], [53.4, 204.0], [53.5, 204.0], [53.6, 204.0], [53.7, 204.0], [53.8, 205.0], [53.9, 205.0], [54.0, 205.0], [54.1, 205.0], [54.2, 205.0], [54.3, 205.0], [54.4, 205.0], [54.5, 205.0], [54.6, 206.0], [54.7, 206.0], [54.8, 206.0], [54.9, 206.0], [55.0, 206.0], [55.1, 206.0], [55.2, 206.0], [55.3, 206.0], [55.4, 206.0], [55.5, 207.0], [55.6, 207.0], [55.7, 207.0], [55.8, 207.0], [55.9, 207.0], [56.0, 207.0], [56.1, 207.0], [56.2, 207.0], [56.3, 208.0], [56.4, 208.0], [56.5, 208.0], [56.6, 208.0], [56.7, 208.0], [56.8, 208.0], [56.9, 208.0], [57.0, 208.0], [57.1, 209.0], [57.2, 209.0], [57.3, 209.0], [57.4, 209.0], [57.5, 209.0], [57.6, 209.0], [57.7, 209.0], [57.8, 210.0], [57.9, 210.0], [58.0, 210.0], [58.1, 210.0], [58.2, 210.0], [58.3, 210.0], [58.4, 210.0], [58.5, 210.0], [58.6, 211.0], [58.7, 211.0], [58.8, 211.0], [58.9, 211.0], [59.0, 211.0], [59.1, 211.0], [59.2, 211.0], [59.3, 212.0], [59.4, 212.0], [59.5, 212.0], [59.6, 212.0], [59.7, 212.0], [59.8, 212.0], [59.9, 213.0], [60.0, 213.0], [60.1, 213.0], [60.2, 213.0], [60.3, 213.0], [60.4, 213.0], [60.5, 214.0], [60.6, 214.0], [60.7, 214.0], [60.8, 214.0], [60.9, 214.0], [61.0, 214.0], [61.1, 215.0], [61.2, 215.0], [61.3, 215.0], [61.4, 215.0], [61.5, 215.0], [61.6, 216.0], [61.7, 216.0], [61.8, 216.0], [61.9, 216.0], [62.0, 216.0], [62.1, 216.0], [62.2, 216.0], [62.3, 217.0], [62.4, 217.0], [62.5, 217.0], [62.6, 217.0], [62.7, 217.0], [62.8, 217.0], [62.9, 218.0], [63.0, 218.0], [63.1, 218.0], [63.2, 218.0], [63.3, 218.0], [63.4, 218.0], [63.5, 219.0], [63.6, 219.0], [63.7, 219.0], [63.8, 219.0], [63.9, 219.0], [64.0, 219.0], [64.1, 219.0], [64.2, 219.0], [64.3, 220.0], [64.4, 220.0], [64.5, 220.0], [64.6, 220.0], [64.7, 220.0], [64.8, 220.0], [64.9, 220.0], [65.0, 220.0], [65.1, 221.0], [65.2, 221.0], [65.3, 221.0], [65.4, 221.0], [65.5, 221.0], [65.6, 221.0], [65.7, 221.0], [65.8, 222.0], [65.9, 222.0], [66.0, 222.0], [66.1, 222.0], [66.2, 222.0], [66.3, 222.0], [66.4, 222.0], [66.5, 222.0], [66.6, 222.0], [66.7, 223.0], [66.8, 223.0], [66.9, 223.0], [67.0, 223.0], [67.1, 223.0], [67.2, 223.0], [67.3, 223.0], [67.4, 224.0], [67.5, 224.0], [67.6, 224.0], [67.7, 224.0], [67.8, 224.0], [67.9, 224.0], [68.0, 224.0], [68.1, 224.0], [68.2, 224.0], [68.3, 225.0], [68.4, 225.0], [68.5, 225.0], [68.6, 225.0], [68.7, 225.0], [68.8, 225.0], [68.9, 225.0], [69.0, 225.0], [69.1, 226.0], [69.2, 226.0], [69.3, 226.0], [69.4, 226.0], [69.5, 226.0], [69.6, 226.0], [69.7, 226.0], [69.8, 226.0], [69.9, 226.0], [70.0, 227.0], [70.1, 227.0], [70.2, 227.0], [70.3, 227.0], [70.4, 227.0], [70.5, 227.0], [70.6, 227.0], [70.7, 227.0], [70.8, 228.0], [70.9, 228.0], [71.0, 228.0], [71.1, 228.0], [71.2, 228.0], [71.3, 228.0], [71.4, 228.0], [71.5, 229.0], [71.6, 229.0], [71.7, 229.0], [71.8, 229.0], [71.9, 229.0], [72.0, 229.0], [72.1, 229.0], [72.2, 230.0], [72.3, 230.0], [72.4, 230.0], [72.5, 230.0], [72.6, 230.0], [72.7, 230.0], [72.8, 231.0], [72.9, 231.0], [73.0, 231.0], [73.1, 231.0], [73.2, 231.0], [73.3, 231.0], [73.4, 232.0], [73.5, 232.0], [73.6, 232.0], [73.7, 232.0], [73.8, 233.0], [73.9, 233.0], [74.0, 233.0], [74.1, 233.0], [74.2, 234.0], [74.3, 234.0], [74.4, 234.0], [74.5, 234.0], [74.6, 234.0], [74.7, 235.0], [74.8, 235.0], [74.9, 235.0], [75.0, 235.0], [75.1, 235.0], [75.2, 236.0], [75.3, 236.0], [75.4, 236.0], [75.5, 236.0], [75.6, 237.0], [75.7, 237.0], [75.8, 237.0], [75.9, 237.0], [76.0, 237.0], [76.1, 238.0], [76.2, 238.0], [76.3, 238.0], [76.4, 238.0], [76.5, 238.0], [76.6, 239.0], [76.7, 239.0], [76.8, 239.0], [76.9, 239.0], [77.0, 239.0], [77.1, 239.0], [77.2, 240.0], [77.3, 240.0], [77.4, 240.0], [77.5, 240.0], [77.6, 240.0], [77.7, 240.0], [77.8, 241.0], [77.9, 241.0], [78.0, 241.0], [78.1, 241.0], [78.2, 241.0], [78.3, 241.0], [78.4, 241.0], [78.5, 242.0], [78.6, 242.0], [78.7, 242.0], [78.8, 242.0], [78.9, 242.0], [79.0, 242.0], [79.1, 242.0], [79.2, 242.0], [79.3, 243.0], [79.4, 243.0], [79.5, 243.0], [79.6, 243.0], [79.7, 243.0], [79.8, 243.0], [79.9, 243.0], [80.0, 244.0], [80.1, 244.0], [80.2, 244.0], [80.3, 244.0], [80.4, 244.0], [80.5, 244.0], [80.6, 244.0], [80.7, 245.0], [80.8, 245.0], [80.9, 245.0], [81.0, 245.0], [81.1, 245.0], [81.2, 245.0], [81.3, 245.0], [81.4, 245.0], [81.5, 246.0], [81.6, 246.0], [81.7, 246.0], [81.8, 246.0], [81.9, 246.0], [82.0, 246.0], [82.1, 246.0], [82.2, 247.0], [82.3, 247.0], [82.4, 247.0], [82.5, 247.0], [82.6, 247.0], [82.7, 247.0], [82.8, 247.0], [82.9, 248.0], [83.0, 248.0], [83.1, 248.0], [83.2, 248.0], [83.3, 248.0], [83.4, 248.0], [83.5, 248.0], [83.6, 249.0], [83.7, 249.0], [83.8, 249.0], [83.9, 249.0], [84.0, 249.0], [84.1, 249.0], [84.2, 250.0], [84.3, 250.0], [84.4, 250.0], [84.5, 250.0], [84.6, 250.0], [84.7, 250.0], [84.8, 251.0], [84.9, 251.0], [85.0, 251.0], [85.1, 251.0], [85.2, 251.0], [85.3, 252.0], [85.4, 252.0], [85.5, 252.0], [85.6, 252.0], [85.7, 252.0], [85.8, 253.0], [85.9, 253.0], [86.0, 253.0], [86.1, 253.0], [86.2, 253.0], [86.3, 253.0], [86.4, 254.0], [86.5, 254.0], [86.6, 254.0], [86.7, 254.0], [86.8, 255.0], [86.9, 255.0], [87.0, 255.0], [87.1, 255.0], [87.2, 255.0], [87.3, 256.0], [87.4, 256.0], [87.5, 256.0], [87.6, 256.0], [87.7, 256.0], [87.8, 257.0], [87.9, 257.0], [88.0, 257.0], [88.1, 257.0], [88.2, 257.0], [88.3, 257.0], [88.4, 258.0], [88.5, 258.0], [88.6, 258.0], [88.7, 258.0], [88.8, 258.0], [88.9, 259.0], [89.0, 259.0], [89.1, 259.0], [89.2, 259.0], [89.3, 259.0], [89.4, 259.0], [89.5, 260.0], [89.6, 260.0], [89.7, 260.0], [89.8, 260.0], [89.9, 260.0], [90.0, 260.0], [90.1, 260.0], [90.2, 261.0], [90.3, 261.0], [90.4, 261.0], [90.5, 261.0], [90.6, 261.0], [90.7, 261.0], [90.8, 262.0], [90.9, 262.0], [91.0, 262.0], [91.1, 262.0], [91.2, 262.0], [91.3, 262.0], [91.4, 263.0], [91.5, 263.0], [91.6, 263.0], [91.7, 263.0], [91.8, 263.0], [91.9, 263.0], [92.0, 263.0], [92.1, 263.0], [92.2, 264.0], [92.3, 264.0], [92.4, 264.0], [92.5, 264.0], [92.6, 264.0], [92.7, 264.0], [92.8, 265.0], [92.9, 265.0], [93.0, 265.0], [93.1, 265.0], [93.2, 265.0], [93.3, 265.0], [93.4, 265.0], [93.5, 266.0], [93.6, 266.0], [93.7, 266.0], [93.8, 266.0], [93.9, 266.0], [94.0, 266.0], [94.1, 266.0], [94.2, 267.0], [94.3, 267.0], [94.4, 267.0], [94.5, 267.0], [94.6, 267.0], [94.7, 267.0], [94.8, 268.0], [94.9, 268.0], [95.0, 268.0], [95.1, 268.0], [95.2, 268.0], [95.3, 268.0], [95.4, 269.0], [95.5, 269.0], [95.6, 269.0], [95.7, 269.0], [95.8, 269.0], [95.9, 270.0], [96.0, 270.0], [96.1, 270.0], [96.2, 270.0], [96.3, 270.0], [96.4, 271.0], [96.5, 271.0], [96.6, 271.0], [96.7, 271.0], [96.8, 271.0], [96.9, 272.0], [97.0, 272.0], [97.1, 272.0], [97.2, 273.0], [97.3, 273.0], [97.4, 273.0], [97.5, 274.0], [97.6, 274.0], [97.7, 274.0], [97.8, 275.0], [97.9, 275.0], [98.0, 275.0], [98.1, 276.0], [98.2, 276.0], [98.3, 277.0], [98.4, 277.0], [98.5, 278.0], [98.6, 278.0], [98.7, 279.0], [98.8, 279.0], [98.9, 280.0], [99.0, 281.0], [99.1, 282.0], [99.2, 283.0], [99.3, 284.0], [99.4, 286.0], [99.5, 288.0], [99.6, 290.0], [99.7, 292.0], [99.8, 297.0], [99.9, 309.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 20211.0, "series": [{"data": [[600.0, 3.0], [300.0, 58.0], [700.0, 1.0], [400.0, 2.0], [100.0, 20211.0], [800.0, 1.0], [200.0, 19721.0], [500.0, 3.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 8.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 39992.0, "series": [{"data": [[0.0, 39992.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 8.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.9393939393939394, "minX": 1.64124594E12, "maxY": 8.0, "series": [{"data": [[1.64124648E12, 8.0], [1.64124618E12, 8.0], [1.64124684E12, 7.768911055694099], [1.64124654E12, 8.0], [1.64124672E12, 8.0], [1.64124642E12, 8.0], [1.64124612E12, 8.0], [1.64124678E12, 8.0], [1.641246E12, 8.0], [1.64124666E12, 8.0], [1.64124636E12, 8.0], [1.64124606E12, 8.0], [1.64124624E12, 8.0], [1.6412469E12, 1.9393939393939394], [1.64124594E12, 7.997044917257704], [1.6412466E12, 8.0], [1.6412463E12, 8.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6412469E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 187.28347388294486, "minX": 1.0, "maxY": 253.09090909090915, "series": [{"data": [[8.0, 187.28347388294486], [4.0, 190.9661016949153], [2.0, 192.27083333333331], [1.0, 193.0], [5.0, 220.0], [6.0, 253.09090909090915], [3.0, 214.54545454545456], [7.0, 190.9650349650351]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[7.980974999999989, 187.3347500000011]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 8.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 63.25, "minX": 1.64124594E12, "maxY": 94634.53333333334, "series": [{"data": [[1.64124648E12, 93208.43333333333], [1.64124618E12, 92769.63333333333], [1.64124684E12, 87979.4], [1.64124654E12, 93500.96666666666], [1.64124672E12, 94634.53333333334], [1.64124642E12, 93756.93333333333], [1.64124612E12, 94195.73333333334], [1.64124678E12, 94049.46666666666], [1.641246E12, 94086.03333333334], [1.64124666E12, 92915.9], [1.64124636E12, 94159.16666666667], [1.64124606E12, 94049.46666666666], [1.64124624E12, 93866.63333333333], [1.6412469E12, 1206.7], [1.64124594E12, 61870.8], [1.6412466E12, 92879.33333333333], [1.6412463E12, 93537.53333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.64124648E12, 4885.583333333333], [1.64124618E12, 4862.583333333333], [1.64124684E12, 4611.5], [1.64124654E12, 4900.916666666667], [1.64124672E12, 4960.333333333333], [1.64124642E12, 4914.333333333333], [1.64124612E12, 4937.333333333333], [1.64124678E12, 4929.666666666667], [1.641246E12, 4931.583333333333], [1.64124666E12, 4870.25], [1.64124636E12, 4935.416666666667], [1.64124606E12, 4929.666666666667], [1.64124624E12, 4920.083333333333], [1.6412469E12, 63.25], [1.64124594E12, 3243.0], [1.6412466E12, 4868.333333333333], [1.6412463E12, 4902.833333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6412469E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 185.09090909090912, "minX": 1.64124594E12, "maxY": 191.1247044917262, "series": [{"data": [[1.64124648E12, 188.1106316202435], [1.64124618E12, 189.0725266062274], [1.64124684E12, 187.12427265170425], [1.64124654E12, 187.45678529526774], [1.64124672E12, 185.24343122102024], [1.64124642E12, 187.02808112324448], [1.64124612E12, 186.2034161490688], [1.64124678E12, 186.48989113530328], [1.641246E12, 186.27827438787423], [1.64124666E12, 188.8390397481309], [1.64124636E12, 186.29669902912661], [1.64124606E12, 186.3716951788488], [1.64124624E12, 186.75730424620184], [1.6412469E12, 185.09090909090912], [1.64124594E12, 191.1247044917262], [1.6412466E12, 188.87007874015734], [1.6412463E12, 187.48475371383884]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6412469E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 185.09090909090912, "minX": 1.64124594E12, "maxY": 191.1046099290782, "series": [{"data": [[1.64124648E12, 188.1059238917222], [1.64124618E12, 189.06582577847865], [1.64124684E12, 187.12053200332474], [1.64124654E12, 187.4008603832615], [1.64124672E12, 185.23763523956706], [1.64124642E12, 187.02301092043663], [1.64124612E12, 186.19332298136672], [1.64124678E12, 186.48483670295508], [1.641246E12, 186.26661484648275], [1.64124666E12, 188.83471074380148], [1.64124636E12, 186.2920388349522], [1.64124606E12, 186.36391912908297], [1.64124624E12, 186.74834437086034], [1.6412469E12, 185.09090909090912], [1.64124594E12, 191.1046099290782], [1.6412466E12, 188.86259842519672], [1.6412463E12, 187.4788897576229]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6412469E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 50.193853427896016, "minX": 1.64124594E12, "maxY": 51.58611220086314, "series": [{"data": [[1.64124648E12, 51.58611220086314], [1.64124618E12, 51.1454473787939], [1.64124684E12, 50.44222776392351], [1.64124654E12, 51.104028157997604], [1.64124672E12, 50.370556414219436], [1.64124642E12, 50.67784711388456], [1.64124612E12, 51.06832298136647], [1.64124678E12, 50.29898911353026], [1.641246E12, 50.20831713952584], [1.64124666E12, 51.092876820149506], [1.64124636E12, 50.4745631067961], [1.64124606E12, 50.290046656298635], [1.64124624E12, 51.01441371250471], [1.6412469E12, 50.54545454545455], [1.64124594E12, 50.193853427896016], [1.6412466E12, 51.43307086614175], [1.6412463E12, 51.330727130570736]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6412469E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 110.0, "minX": 1.64124594E12, "maxY": 838.0, "series": [{"data": [[1.64124648E12, 386.0], [1.64124618E12, 305.0], [1.64124684E12, 340.0], [1.64124654E12, 620.0], [1.64124672E12, 391.0], [1.64124642E12, 301.0], [1.64124612E12, 326.0], [1.64124678E12, 401.0], [1.641246E12, 343.0], [1.64124666E12, 393.0], [1.64124636E12, 727.0], [1.64124606E12, 386.0], [1.64124624E12, 397.0], [1.6412469E12, 276.0], [1.64124594E12, 838.0], [1.6412466E12, 345.0], [1.6412463E12, 340.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.64124648E12, 261.0], [1.64124618E12, 261.2000000000003], [1.64124684E12, 260.0], [1.64124654E12, 260.0], [1.64124672E12, 260.0], [1.64124642E12, 259.0], [1.64124612E12, 261.0], [1.64124678E12, 259.0], [1.641246E12, 260.5999999999999], [1.64124666E12, 261.0], [1.64124636E12, 261.0], [1.64124606E12, 260.0], [1.64124624E12, 260.0], [1.6412469E12, 262.2], [1.64124594E12, 261.0], [1.6412466E12, 261.0], [1.6412463E12, 261.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.64124648E12, 288.0], [1.64124618E12, 282.0], [1.64124684E12, 282.92999999999984], [1.64124654E12, 284.0], [1.64124672E12, 278.0], [1.64124642E12, 281.0], [1.64124612E12, 281.0], [1.64124678E12, 281.27], [1.641246E12, 278.0], [1.64124666E12, 281.0], [1.64124636E12, 280.2399999999998], [1.64124606E12, 279.0], [1.64124624E12, 281.32000000000016], [1.6412469E12, 276.0], [1.64124594E12, 290.06999999999994], [1.6412466E12, 281.59000000000015], [1.6412463E12, 282.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.64124648E12, 269.0], [1.64124618E12, 268.0999999999999], [1.64124684E12, 267.6500000000001], [1.64124654E12, 268.0], [1.64124672E12, 266.0], [1.64124642E12, 267.0], [1.64124612E12, 268.0], [1.64124678E12, 267.0], [1.641246E12, 267.0], [1.64124666E12, 268.0], [1.64124636E12, 268.0], [1.64124606E12, 268.0], [1.64124624E12, 267.0], [1.6412469E12, 267.59999999999997], [1.64124594E12, 270.0], [1.6412466E12, 269.0], [1.6412463E12, 268.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.64124648E12, 112.0], [1.64124618E12, 112.0], [1.64124684E12, 114.0], [1.64124654E12, 112.0], [1.64124672E12, 110.0], [1.64124642E12, 112.0], [1.64124612E12, 112.0], [1.64124678E12, 112.0], [1.641246E12, 112.0], [1.64124666E12, 113.0], [1.64124636E12, 112.0], [1.64124606E12, 112.0], [1.64124624E12, 113.0], [1.6412469E12, 116.0], [1.64124594E12, 115.0], [1.6412466E12, 112.0], [1.6412463E12, 112.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.64124648E12, 198.0], [1.64124618E12, 201.0], [1.64124684E12, 199.0], [1.64124654E12, 197.0], [1.64124672E12, 177.0], [1.64124642E12, 199.0], [1.64124612E12, 167.5], [1.64124678E12, 198.0], [1.641246E12, 175.0], [1.64124666E12, 201.0], [1.64124636E12, 198.0], [1.64124606E12, 197.0], [1.64124624E12, 196.0], [1.6412469E12, 199.0], [1.64124594E12, 203.0], [1.6412466E12, 200.5], [1.6412463E12, 192.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6412469E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 144.5, "minX": 2.0, "maxY": 243.5, "series": [{"data": [[33.0, 212.0], [2.0, 193.0], [34.0, 211.5], [9.0, 243.5], [37.0, 210.0], [36.0, 200.5], [38.0, 209.0], [39.0, 208.0], [40.0, 207.0], [41.0, 204.0], [10.0, 202.5], [43.0, 197.0], [42.0, 201.0], [44.0, 159.0], [45.0, 154.0], [11.0, 202.0], [46.0, 152.0], [47.0, 148.0], [48.0, 147.0], [12.0, 173.0], [17.0, 223.0], [21.0, 200.0], [22.0, 144.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 48.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 144.5, "minX": 2.0, "maxY": 243.5, "series": [{"data": [[33.0, 212.0], [2.0, 193.0], [34.0, 211.5], [9.0, 243.5], [37.0, 210.0], [36.0, 200.5], [38.0, 209.0], [39.0, 208.0], [40.0, 207.0], [41.0, 204.0], [10.0, 202.5], [43.0, 197.0], [42.0, 201.0], [44.0, 159.0], [45.0, 154.0], [11.0, 202.0], [46.0, 152.0], [47.0, 148.0], [48.0, 147.0], [12.0, 173.0], [17.0, 223.0], [21.0, 200.0], [22.0, 144.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 48.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.5166666666666667, "minX": 1.64124594E12, "maxY": 43.13333333333333, "series": [{"data": [[1.64124648E12, 42.483333333333334], [1.64124618E12, 42.28333333333333], [1.64124684E12, 40.0], [1.64124654E12, 42.61666666666667], [1.64124672E12, 43.13333333333333], [1.64124642E12, 42.733333333333334], [1.64124612E12, 42.93333333333333], [1.64124678E12, 42.86666666666667], [1.641246E12, 42.88333333333333], [1.64124666E12, 42.35], [1.64124636E12, 42.916666666666664], [1.64124606E12, 42.86666666666667], [1.64124624E12, 42.78333333333333], [1.6412469E12, 0.5166666666666667], [1.64124594E12, 28.333333333333332], [1.6412466E12, 42.333333333333336], [1.6412463E12, 42.63333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6412469E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.55, "minX": 1.64124594E12, "maxY": 43.13333333333333, "series": [{"data": [[1.64124648E12, 42.483333333333334], [1.64124618E12, 42.28333333333333], [1.64124684E12, 40.1], [1.64124654E12, 42.61666666666667], [1.64124672E12, 43.13333333333333], [1.64124642E12, 42.733333333333334], [1.64124612E12, 42.93333333333333], [1.64124678E12, 42.86666666666667], [1.641246E12, 42.88333333333333], [1.64124666E12, 42.35], [1.64124636E12, 42.916666666666664], [1.64124606E12, 42.86666666666667], [1.64124624E12, 42.78333333333333], [1.6412469E12, 0.55], [1.64124594E12, 28.2], [1.6412466E12, 42.333333333333336], [1.6412463E12, 42.63333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6412469E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.55, "minX": 1.64124594E12, "maxY": 43.13333333333333, "series": [{"data": [[1.64124648E12, 42.483333333333334], [1.64124618E12, 42.28333333333333], [1.64124684E12, 40.1], [1.64124654E12, 42.61666666666667], [1.64124672E12, 43.13333333333333], [1.64124642E12, 42.733333333333334], [1.64124612E12, 42.93333333333333], [1.64124678E12, 42.86666666666667], [1.641246E12, 42.88333333333333], [1.64124666E12, 42.35], [1.64124636E12, 42.916666666666664], [1.64124606E12, 42.86666666666667], [1.64124624E12, 42.78333333333333], [1.6412469E12, 0.55], [1.64124594E12, 28.2], [1.6412466E12, 42.333333333333336], [1.6412463E12, 42.63333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6412469E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.55, "minX": 1.64124594E12, "maxY": 43.13333333333333, "series": [{"data": [[1.64124648E12, 42.483333333333334], [1.64124618E12, 42.28333333333333], [1.64124684E12, 40.1], [1.64124654E12, 42.61666666666667], [1.64124672E12, 43.13333333333333], [1.64124642E12, 42.733333333333334], [1.64124612E12, 42.93333333333333], [1.64124678E12, 42.86666666666667], [1.641246E12, 42.88333333333333], [1.64124666E12, 42.35], [1.64124636E12, 42.916666666666664], [1.64124606E12, 42.86666666666667], [1.64124624E12, 42.78333333333333], [1.6412469E12, 0.55], [1.64124594E12, 28.2], [1.6412466E12, 42.333333333333336], [1.6412463E12, 42.63333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6412469E12, "title": "Total Transactions Per Second"}},
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


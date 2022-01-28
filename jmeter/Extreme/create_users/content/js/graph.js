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
        data: {"result": {"minY": 148.0, "minX": 0.0, "maxY": 2456.0, "series": [{"data": [[0.0, 148.0], [0.1, 152.0], [0.2, 153.0], [0.3, 154.0], [0.4, 154.0], [0.5, 155.0], [0.6, 155.0], [0.7, 155.0], [0.8, 156.0], [0.9, 156.0], [1.0, 156.0], [1.1, 157.0], [1.2, 157.0], [1.3, 157.0], [1.4, 157.0], [1.5, 157.0], [1.6, 158.0], [1.7, 158.0], [1.8, 158.0], [1.9, 158.0], [2.0, 159.0], [2.1, 159.0], [2.2, 159.0], [2.3, 159.0], [2.4, 159.0], [2.5, 159.0], [2.6, 160.0], [2.7, 160.0], [2.8, 160.0], [2.9, 160.0], [3.0, 160.0], [3.1, 161.0], [3.2, 161.0], [3.3, 161.0], [3.4, 161.0], [3.5, 161.0], [3.6, 161.0], [3.7, 162.0], [3.8, 162.0], [3.9, 162.0], [4.0, 162.0], [4.1, 162.0], [4.2, 163.0], [4.3, 163.0], [4.4, 163.0], [4.5, 163.0], [4.6, 163.0], [4.7, 163.0], [4.8, 164.0], [4.9, 164.0], [5.0, 164.0], [5.1, 164.0], [5.2, 164.0], [5.3, 164.0], [5.4, 165.0], [5.5, 165.0], [5.6, 165.0], [5.7, 165.0], [5.8, 166.0], [5.9, 166.0], [6.0, 166.0], [6.1, 166.0], [6.2, 167.0], [6.3, 167.0], [6.4, 167.0], [6.5, 167.0], [6.6, 168.0], [6.7, 168.0], [6.8, 168.0], [6.9, 169.0], [7.0, 169.0], [7.1, 170.0], [7.2, 170.0], [7.3, 171.0], [7.4, 172.0], [7.5, 173.0], [7.6, 175.0], [7.7, 180.0], [7.8, 188.0], [7.9, 189.0], [8.0, 190.0], [8.1, 191.0], [8.2, 191.0], [8.3, 192.0], [8.4, 192.0], [8.5, 193.0], [8.6, 193.0], [8.7, 193.0], [8.8, 194.0], [8.9, 194.0], [9.0, 194.0], [9.1, 195.0], [9.2, 195.0], [9.3, 195.0], [9.4, 195.0], [9.5, 196.0], [9.6, 196.0], [9.7, 196.0], [9.8, 196.0], [9.9, 197.0], [10.0, 197.0], [10.1, 197.0], [10.2, 197.0], [10.3, 197.0], [10.4, 198.0], [10.5, 198.0], [10.6, 198.0], [10.7, 198.0], [10.8, 199.0], [10.9, 199.0], [11.0, 199.0], [11.1, 199.0], [11.2, 199.0], [11.3, 200.0], [11.4, 200.0], [11.5, 200.0], [11.6, 200.0], [11.7, 200.0], [11.8, 201.0], [11.9, 201.0], [12.0, 201.0], [12.1, 201.0], [12.2, 202.0], [12.3, 202.0], [12.4, 202.0], [12.5, 202.0], [12.6, 203.0], [12.7, 203.0], [12.8, 203.0], [12.9, 203.0], [13.0, 204.0], [13.1, 204.0], [13.2, 205.0], [13.3, 205.0], [13.4, 205.0], [13.5, 206.0], [13.6, 206.0], [13.7, 207.0], [13.8, 207.0], [13.9, 208.0], [14.0, 209.0], [14.1, 210.0], [14.2, 211.0], [14.3, 215.0], [14.4, 229.0], [14.5, 233.0], [14.6, 234.0], [14.7, 235.0], [14.8, 235.0], [14.9, 235.0], [15.0, 236.0], [15.1, 236.0], [15.2, 236.0], [15.3, 237.0], [15.4, 237.0], [15.5, 237.0], [15.6, 237.0], [15.7, 238.0], [15.8, 238.0], [15.9, 238.0], [16.0, 238.0], [16.1, 239.0], [16.2, 239.0], [16.3, 239.0], [16.4, 239.0], [16.5, 239.0], [16.6, 240.0], [16.7, 240.0], [16.8, 240.0], [16.9, 240.0], [17.0, 240.0], [17.1, 240.0], [17.2, 241.0], [17.3, 241.0], [17.4, 241.0], [17.5, 241.0], [17.6, 241.0], [17.7, 241.0], [17.8, 242.0], [17.9, 242.0], [18.0, 242.0], [18.1, 242.0], [18.2, 242.0], [18.3, 242.0], [18.4, 242.0], [18.5, 243.0], [18.6, 243.0], [18.7, 243.0], [18.8, 243.0], [18.9, 243.0], [19.0, 243.0], [19.1, 244.0], [19.2, 244.0], [19.3, 244.0], [19.4, 244.0], [19.5, 244.0], [19.6, 244.0], [19.7, 245.0], [19.8, 245.0], [19.9, 245.0], [20.0, 245.0], [20.1, 245.0], [20.2, 246.0], [20.3, 246.0], [20.4, 246.0], [20.5, 246.0], [20.6, 246.0], [20.7, 246.0], [20.8, 247.0], [20.9, 247.0], [21.0, 247.0], [21.1, 247.0], [21.2, 248.0], [21.3, 248.0], [21.4, 248.0], [21.5, 248.0], [21.6, 249.0], [21.7, 249.0], [21.8, 249.0], [21.9, 250.0], [22.0, 250.0], [22.1, 250.0], [22.2, 251.0], [22.3, 251.0], [22.4, 251.0], [22.5, 252.0], [22.6, 253.0], [22.7, 253.0], [22.8, 254.0], [22.9, 256.0], [23.0, 258.0], [23.1, 262.0], [23.2, 268.0], [23.3, 270.0], [23.4, 271.0], [23.5, 271.0], [23.6, 272.0], [23.7, 272.0], [23.8, 272.0], [23.9, 273.0], [24.0, 273.0], [24.1, 273.0], [24.2, 273.0], [24.3, 274.0], [24.4, 274.0], [24.5, 274.0], [24.6, 274.0], [24.7, 274.0], [24.8, 275.0], [24.9, 275.0], [25.0, 275.0], [25.1, 275.0], [25.2, 275.0], [25.3, 275.0], [25.4, 276.0], [25.5, 276.0], [25.6, 276.0], [25.7, 276.0], [25.8, 276.0], [25.9, 276.0], [26.0, 276.0], [26.1, 276.0], [26.2, 276.0], [26.3, 277.0], [26.4, 277.0], [26.5, 277.0], [26.6, 277.0], [26.7, 277.0], [26.8, 277.0], [26.9, 277.0], [27.0, 277.0], [27.1, 278.0], [27.2, 278.0], [27.3, 278.0], [27.4, 278.0], [27.5, 278.0], [27.6, 278.0], [27.7, 278.0], [27.8, 278.0], [27.9, 278.0], [28.0, 278.0], [28.1, 279.0], [28.2, 279.0], [28.3, 279.0], [28.4, 279.0], [28.5, 279.0], [28.6, 279.0], [28.7, 279.0], [28.8, 279.0], [28.9, 279.0], [29.0, 279.0], [29.1, 280.0], [29.2, 280.0], [29.3, 280.0], [29.4, 280.0], [29.5, 280.0], [29.6, 280.0], [29.7, 280.0], [29.8, 280.0], [29.9, 280.0], [30.0, 280.0], [30.1, 281.0], [30.2, 281.0], [30.3, 281.0], [30.4, 281.0], [30.5, 281.0], [30.6, 281.0], [30.7, 281.0], [30.8, 281.0], [30.9, 281.0], [31.0, 281.0], [31.1, 281.0], [31.2, 282.0], [31.3, 282.0], [31.4, 282.0], [31.5, 282.0], [31.6, 282.0], [31.7, 282.0], [31.8, 282.0], [31.9, 282.0], [32.0, 282.0], [32.1, 282.0], [32.2, 282.0], [32.3, 283.0], [32.4, 283.0], [32.5, 283.0], [32.6, 283.0], [32.7, 283.0], [32.8, 283.0], [32.9, 283.0], [33.0, 283.0], [33.1, 283.0], [33.2, 283.0], [33.3, 284.0], [33.4, 284.0], [33.5, 284.0], [33.6, 284.0], [33.7, 284.0], [33.8, 284.0], [33.9, 284.0], [34.0, 284.0], [34.1, 284.0], [34.2, 285.0], [34.3, 285.0], [34.4, 285.0], [34.5, 285.0], [34.6, 285.0], [34.7, 285.0], [34.8, 285.0], [34.9, 285.0], [35.0, 286.0], [35.1, 286.0], [35.2, 286.0], [35.3, 286.0], [35.4, 286.0], [35.5, 286.0], [35.6, 286.0], [35.7, 287.0], [35.8, 287.0], [35.9, 287.0], [36.0, 287.0], [36.1, 287.0], [36.2, 288.0], [36.3, 288.0], [36.4, 288.0], [36.5, 288.0], [36.6, 289.0], [36.7, 289.0], [36.8, 289.0], [36.9, 290.0], [37.0, 290.0], [37.1, 290.0], [37.2, 291.0], [37.3, 291.0], [37.4, 291.0], [37.5, 292.0], [37.6, 293.0], [37.7, 293.0], [37.8, 295.0], [37.9, 296.0], [38.0, 298.0], [38.1, 300.0], [38.2, 303.0], [38.3, 308.0], [38.4, 309.0], [38.5, 310.0], [38.6, 311.0], [38.7, 312.0], [38.8, 312.0], [38.9, 312.0], [39.0, 313.0], [39.1, 313.0], [39.2, 313.0], [39.3, 314.0], [39.4, 314.0], [39.5, 314.0], [39.6, 314.0], [39.7, 315.0], [39.8, 315.0], [39.9, 315.0], [40.0, 315.0], [40.1, 316.0], [40.2, 316.0], [40.3, 316.0], [40.4, 316.0], [40.5, 316.0], [40.6, 317.0], [40.7, 317.0], [40.8, 317.0], [40.9, 317.0], [41.0, 317.0], [41.1, 317.0], [41.2, 318.0], [41.3, 318.0], [41.4, 318.0], [41.5, 318.0], [41.6, 318.0], [41.7, 318.0], [41.8, 319.0], [41.9, 319.0], [42.0, 319.0], [42.1, 319.0], [42.2, 319.0], [42.3, 319.0], [42.4, 319.0], [42.5, 320.0], [42.6, 320.0], [42.7, 320.0], [42.8, 320.0], [42.9, 320.0], [43.0, 320.0], [43.1, 320.0], [43.2, 321.0], [43.3, 321.0], [43.4, 321.0], [43.5, 321.0], [43.6, 321.0], [43.7, 321.0], [43.8, 321.0], [43.9, 321.0], [44.0, 322.0], [44.1, 322.0], [44.2, 322.0], [44.3, 322.0], [44.4, 322.0], [44.5, 322.0], [44.6, 322.0], [44.7, 323.0], [44.8, 323.0], [44.9, 323.0], [45.0, 323.0], [45.1, 323.0], [45.2, 323.0], [45.3, 323.0], [45.4, 324.0], [45.5, 324.0], [45.6, 324.0], [45.7, 324.0], [45.8, 324.0], [45.9, 324.0], [46.0, 325.0], [46.1, 325.0], [46.2, 325.0], [46.3, 325.0], [46.4, 325.0], [46.5, 325.0], [46.6, 326.0], [46.7, 326.0], [46.8, 326.0], [46.9, 326.0], [47.0, 326.0], [47.1, 326.0], [47.2, 327.0], [47.3, 327.0], [47.4, 327.0], [47.5, 327.0], [47.6, 327.0], [47.7, 328.0], [47.8, 328.0], [47.9, 328.0], [48.0, 328.0], [48.1, 329.0], [48.2, 329.0], [48.3, 329.0], [48.4, 330.0], [48.5, 330.0], [48.6, 330.0], [48.7, 331.0], [48.8, 331.0], [48.9, 332.0], [49.0, 333.0], [49.1, 333.0], [49.2, 334.0], [49.3, 335.0], [49.4, 337.0], [49.5, 339.0], [49.6, 342.0], [49.7, 345.0], [49.8, 350.0], [49.9, 352.0], [50.0, 353.0], [50.1, 353.0], [50.2, 354.0], [50.3, 354.0], [50.4, 355.0], [50.5, 355.0], [50.6, 356.0], [50.7, 356.0], [50.8, 356.0], [50.9, 356.0], [51.0, 357.0], [51.1, 357.0], [51.2, 357.0], [51.3, 357.0], [51.4, 358.0], [51.5, 358.0], [51.6, 358.0], [51.7, 358.0], [51.8, 359.0], [51.9, 359.0], [52.0, 359.0], [52.1, 359.0], [52.2, 359.0], [52.3, 359.0], [52.4, 360.0], [52.5, 360.0], [52.6, 360.0], [52.7, 360.0], [52.8, 360.0], [52.9, 360.0], [53.0, 361.0], [53.1, 361.0], [53.2, 361.0], [53.3, 361.0], [53.4, 361.0], [53.5, 362.0], [53.6, 362.0], [53.7, 362.0], [53.8, 362.0], [53.9, 362.0], [54.0, 362.0], [54.1, 363.0], [54.2, 363.0], [54.3, 363.0], [54.4, 363.0], [54.5, 363.0], [54.6, 363.0], [54.7, 364.0], [54.8, 364.0], [54.9, 364.0], [55.0, 364.0], [55.1, 364.0], [55.2, 364.0], [55.3, 365.0], [55.4, 365.0], [55.5, 365.0], [55.6, 365.0], [55.7, 365.0], [55.8, 366.0], [55.9, 366.0], [56.0, 366.0], [56.1, 366.0], [56.2, 367.0], [56.3, 367.0], [56.4, 367.0], [56.5, 367.0], [56.6, 368.0], [56.7, 368.0], [56.8, 368.0], [56.9, 369.0], [57.0, 369.0], [57.1, 369.0], [57.2, 370.0], [57.3, 370.0], [57.4, 370.0], [57.5, 371.0], [57.6, 372.0], [57.7, 372.0], [57.8, 373.0], [57.9, 374.0], [58.0, 376.0], [58.1, 377.0], [58.2, 380.0], [58.3, 384.0], [58.4, 387.0], [58.5, 390.0], [58.6, 391.0], [58.7, 392.0], [58.8, 392.0], [58.9, 393.0], [59.0, 394.0], [59.1, 394.0], [59.2, 394.0], [59.3, 395.0], [59.4, 395.0], [59.5, 395.0], [59.6, 395.0], [59.7, 396.0], [59.8, 396.0], [59.9, 396.0], [60.0, 396.0], [60.1, 397.0], [60.2, 397.0], [60.3, 397.0], [60.4, 397.0], [60.5, 397.0], [60.6, 398.0], [60.7, 398.0], [60.8, 398.0], [60.9, 398.0], [61.0, 398.0], [61.1, 399.0], [61.2, 399.0], [61.3, 399.0], [61.4, 399.0], [61.5, 399.0], [61.6, 400.0], [61.7, 400.0], [61.8, 400.0], [61.9, 400.0], [62.0, 400.0], [62.1, 400.0], [62.2, 400.0], [62.3, 401.0], [62.4, 401.0], [62.5, 401.0], [62.6, 401.0], [62.7, 401.0], [62.8, 401.0], [62.9, 402.0], [63.0, 402.0], [63.1, 402.0], [63.2, 402.0], [63.3, 402.0], [63.4, 402.0], [63.5, 403.0], [63.6, 403.0], [63.7, 403.0], [63.8, 403.0], [63.9, 403.0], [64.0, 403.0], [64.1, 404.0], [64.2, 404.0], [64.3, 404.0], [64.4, 404.0], [64.5, 404.0], [64.6, 405.0], [64.7, 405.0], [64.8, 405.0], [64.9, 405.0], [65.0, 405.0], [65.1, 406.0], [65.2, 406.0], [65.3, 406.0], [65.4, 406.0], [65.5, 407.0], [65.6, 407.0], [65.7, 407.0], [65.8, 407.0], [65.9, 408.0], [66.0, 408.0], [66.1, 408.0], [66.2, 408.0], [66.3, 409.0], [66.4, 409.0], [66.5, 410.0], [66.6, 410.0], [66.7, 411.0], [66.8, 411.0], [66.9, 412.0], [67.0, 412.0], [67.1, 413.0], [67.2, 414.0], [67.3, 415.0], [67.4, 417.0], [67.5, 419.0], [67.6, 422.0], [67.7, 425.0], [67.8, 428.0], [67.9, 430.0], [68.0, 431.0], [68.1, 432.0], [68.2, 432.0], [68.3, 433.0], [68.4, 434.0], [68.5, 434.0], [68.6, 435.0], [68.7, 435.0], [68.8, 436.0], [68.9, 436.0], [69.0, 436.0], [69.1, 437.0], [69.2, 437.0], [69.3, 437.0], [69.4, 438.0], [69.5, 438.0], [69.6, 438.0], [69.7, 439.0], [69.8, 439.0], [69.9, 439.0], [70.0, 440.0], [70.1, 440.0], [70.2, 440.0], [70.3, 440.0], [70.4, 441.0], [70.5, 441.0], [70.6, 441.0], [70.7, 442.0], [70.8, 442.0], [70.9, 442.0], [71.0, 443.0], [71.1, 443.0], [71.2, 443.0], [71.3, 444.0], [71.4, 444.0], [71.5, 445.0], [71.6, 445.0], [71.7, 445.0], [71.8, 446.0], [71.9, 446.0], [72.0, 447.0], [72.1, 447.0], [72.2, 447.0], [72.3, 448.0], [72.4, 448.0], [72.5, 449.0], [72.6, 450.0], [72.7, 451.0], [72.8, 451.0], [72.9, 452.0], [73.0, 453.0], [73.1, 455.0], [73.2, 456.0], [73.3, 457.0], [73.4, 460.0], [73.5, 461.0], [73.6, 464.0], [73.7, 467.0], [73.8, 470.0], [73.9, 472.0], [74.0, 474.0], [74.1, 475.0], [74.2, 476.0], [74.3, 477.0], [74.4, 478.0], [74.5, 478.0], [74.6, 479.0], [74.7, 480.0], [74.8, 480.0], [74.9, 481.0], [75.0, 481.0], [75.1, 482.0], [75.2, 482.0], [75.3, 483.0], [75.4, 483.0], [75.5, 484.0], [75.6, 485.0], [75.7, 485.0], [75.8, 486.0], [75.9, 486.0], [76.0, 487.0], [76.1, 488.0], [76.2, 489.0], [76.3, 490.0], [76.4, 491.0], [76.5, 492.0], [76.6, 494.0], [76.7, 496.0], [76.8, 498.0], [76.9, 501.0], [77.0, 503.0], [77.1, 506.0], [77.2, 509.0], [77.3, 512.0], [77.4, 513.0], [77.5, 514.0], [77.6, 516.0], [77.7, 516.0], [77.8, 517.0], [77.9, 518.0], [78.0, 519.0], [78.1, 519.0], [78.2, 520.0], [78.3, 520.0], [78.4, 521.0], [78.5, 522.0], [78.6, 523.0], [78.7, 523.0], [78.8, 524.0], [78.9, 525.0], [79.0, 526.0], [79.1, 527.0], [79.2, 528.0], [79.3, 529.0], [79.4, 530.0], [79.5, 532.0], [79.6, 533.0], [79.7, 535.0], [79.8, 537.0], [79.9, 539.0], [80.0, 541.0], [80.1, 544.0], [80.2, 547.0], [80.3, 549.0], [80.4, 551.0], [80.5, 553.0], [80.6, 555.0], [80.7, 556.0], [80.8, 557.0], [80.9, 559.0], [81.0, 561.0], [81.1, 562.0], [81.2, 563.0], [81.3, 564.0], [81.4, 566.0], [81.5, 568.0], [81.6, 569.0], [81.7, 571.0], [81.8, 574.0], [81.9, 576.0], [82.0, 578.0], [82.1, 580.0], [82.2, 582.0], [82.3, 584.0], [82.4, 587.0], [82.5, 590.0], [82.6, 592.0], [82.7, 595.0], [82.8, 598.0], [82.9, 600.0], [83.0, 603.0], [83.1, 605.0], [83.2, 607.0], [83.3, 610.0], [83.4, 612.0], [83.5, 615.0], [83.6, 617.0], [83.7, 619.0], [83.8, 622.0], [83.9, 625.0], [84.0, 628.0], [84.1, 632.0], [84.2, 635.0], [84.3, 638.0], [84.4, 642.0], [84.5, 645.0], [84.6, 648.0], [84.7, 650.0], [84.8, 652.0], [84.9, 655.0], [85.0, 657.0], [85.1, 659.0], [85.2, 662.0], [85.3, 666.0], [85.4, 668.0], [85.5, 672.0], [85.6, 676.0], [85.7, 680.0], [85.8, 684.0], [85.9, 689.0], [86.0, 691.0], [86.1, 694.0], [86.2, 697.0], [86.3, 700.0], [86.4, 704.0], [86.5, 710.0], [86.6, 715.0], [86.7, 721.0], [86.8, 726.0], [86.9, 730.0], [87.0, 735.0], [87.1, 739.0], [87.2, 744.0], [87.3, 749.0], [87.4, 755.0], [87.5, 760.0], [87.6, 765.0], [87.7, 769.0], [87.8, 773.0], [87.9, 777.0], [88.0, 782.0], [88.1, 786.0], [88.2, 793.0], [88.3, 798.0], [88.4, 806.0], [88.5, 811.0], [88.6, 815.0], [88.7, 819.0], [88.8, 824.0], [88.9, 830.0], [89.0, 835.0], [89.1, 841.0], [89.2, 846.0], [89.3, 850.0], [89.4, 855.0], [89.5, 861.0], [89.6, 867.0], [89.7, 873.0], [89.8, 877.0], [89.9, 883.0], [90.0, 888.0], [90.1, 893.0], [90.2, 898.0], [90.3, 902.0], [90.4, 909.0], [90.5, 915.0], [90.6, 920.0], [90.7, 926.0], [90.8, 931.0], [90.9, 938.0], [91.0, 943.0], [91.1, 952.0], [91.2, 957.0], [91.3, 963.0], [91.4, 969.0], [91.5, 974.0], [91.6, 983.0], [91.7, 988.0], [91.8, 996.0], [91.9, 1005.0], [92.0, 1014.0], [92.1, 1023.0], [92.2, 1033.0], [92.3, 1041.0], [92.4, 1048.0], [92.5, 1058.0], [92.6, 1068.0], [92.7, 1077.0], [92.8, 1085.0], [92.9, 1095.0], [93.0, 1108.0], [93.1, 1116.0], [93.2, 1126.0], [93.3, 1131.0], [93.4, 1140.0], [93.5, 1147.0], [93.6, 1153.0], [93.7, 1161.0], [93.8, 1166.0], [93.9, 1175.0], [94.0, 1183.0], [94.1, 1191.0], [94.2, 1198.0], [94.3, 1205.0], [94.4, 1212.0], [94.5, 1221.0], [94.6, 1228.0], [94.7, 1235.0], [94.8, 1241.0], [94.9, 1248.0], [95.0, 1258.0], [95.1, 1266.0], [95.2, 1273.0], [95.3, 1280.0], [95.4, 1289.0], [95.5, 1301.0], [95.6, 1313.0], [95.7, 1323.0], [95.8, 1338.0], [95.9, 1350.0], [96.0, 1358.0], [96.1, 1368.0], [96.2, 1383.0], [96.3, 1393.0], [96.4, 1406.0], [96.5, 1413.0], [96.6, 1423.0], [96.7, 1430.0], [96.8, 1439.0], [96.9, 1445.0], [97.0, 1452.0], [97.1, 1460.0], [97.2, 1467.0], [97.3, 1475.0], [97.4, 1481.0], [97.5, 1489.0], [97.6, 1496.0], [97.7, 1505.0], [97.8, 1512.0], [97.9, 1519.0], [98.0, 1529.0], [98.1, 1540.0], [98.2, 1549.0], [98.3, 1556.0], [98.4, 1561.0], [98.5, 1567.0], [98.6, 1576.0], [98.7, 1585.0], [98.8, 1594.0], [98.9, 1604.0], [99.0, 1619.0], [99.1, 1640.0], [99.2, 1657.0], [99.3, 1679.0], [99.4, 1701.0], [99.5, 1736.0], [99.6, 1774.0], [99.7, 1820.0], [99.8, 1885.0], [99.9, 1965.0]], "isOverall": false, "label": "Create User", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 10721.0, "series": [{"data": [[2100.0, 9.0], [2200.0, 8.0], [600.0, 1359.0], [2400.0, 1.0], [700.0, 821.0], [800.0, 764.0], [200.0, 10721.0], [900.0, 639.0], [1000.0, 438.0], [1100.0, 513.0], [1200.0, 508.0], [300.0, 9374.0], [1300.0, 346.0], [1400.0, 522.0], [1500.0, 478.0], [1600.0, 217.0], [400.0, 6132.0], [100.0, 4516.0], [1700.0, 108.0], [1800.0, 62.0], [1900.0, 41.0], [2000.0, 14.0], [500.0, 2409.0]], "isOverall": false, "label": "Create User", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 931.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 30759.0, "series": [{"data": [[0.0, 30759.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 8310.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 931.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 6.721030042918456, "minX": 1.64124282E12, "maxY": 8.0, "series": [{"data": [[1.64124426E12, 8.0], [1.64124366E12, 8.0], [1.64124456E12, 8.0], [1.64124396E12, 8.0], [1.64124324E12, 8.0], [1.64124294E12, 8.0], [1.64124384E12, 8.0], [1.64124486E12, 8.0], [1.64124354E12, 8.0], [1.64124348E12, 8.0], [1.64124378E12, 8.0], [1.64124318E12, 8.0], [1.64124408E12, 8.0], [1.6412451E12, 6.721030042918456], [1.64124498E12, 8.0], [1.64124336E12, 8.0], [1.64124438E12, 8.0], [1.64124306E12, 8.0], [1.64124468E12, 8.0], [1.641243E12, 8.0], [1.6412436E12, 8.0], [1.64124462E12, 8.0], [1.6412433E12, 8.0], [1.64124492E12, 8.0], [1.6412445E12, 8.0], [1.6412448E12, 8.0], [1.64124288E12, 8.0], [1.6412439E12, 8.0], [1.6412442E12, 8.0], [1.64124474E12, 8.0], [1.64124504E12, 8.0], [1.64124312E12, 8.0], [1.64124414E12, 8.0], [1.64124282E12, 8.0], [1.64124444E12, 8.0], [1.64124372E12, 8.0], [1.64124402E12, 8.0], [1.64124342E12, 8.0], [1.64124432E12, 8.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6412451E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 300.1818181818182, "minX": 1.0, "maxY": 451.6026068505658, "series": [{"data": [[8.0, 451.6026068505658], [4.0, 345.9272727272728], [2.0, 351.25], [1.0, 374.92307692307685], [5.0, 308.2222222222222], [6.0, 300.1818181818182], [3.0, 339.93023255813966], [7.0, 309.6977611940299]], "isOverall": false, "label": "Create User", "isController": false}, {"data": [[7.977649999999994, 450.24537500000497]], "isOverall": false, "label": "Create User-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 8.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 494.51666666666665, "minX": 1.64124282E12, "maxY": 45678.05, "series": [{"data": [[1.64124426E12, 32761.0], [1.64124366E12, 19861.6], [1.64124456E12, 34802.2], [1.64124396E12, 26771.2], [1.64124324E12, 12338.466666666667], [1.64124294E12, 8873.4], [1.64124384E12, 23346.0], [1.64124486E12, 35327.26666666667], [1.64124354E12, 17067.216666666667], [1.64124348E12, 15353.266666666666], [1.64124378E12, 22391.4], [1.64124318E12, 11415.2], [1.64124408E12, 29240.133333333335], [1.6412451E12, 15797.4], [1.64124498E12, 34962.2], [1.64124336E12, 13837.133333333333], [1.64124438E12, 33524.26666666667], [1.64124306E12, 9968.033333333333], [1.64124468E12, 35036.933333333334], [1.641243E12, 9457.55], [1.6412436E12, 17366.6], [1.64124462E12, 34699.6], [1.6412433E12, 13139.55], [1.64124492E12, 35369.0], [1.6412445E12, 34190.2], [1.6412448E12, 35240.333333333336], [1.64124288E12, 8643.916666666666], [1.6412439E12, 25677.533333333333], [1.6412442E12, 31982.066666666666], [1.64124474E12, 34878.73333333333], [1.64124504E12, 35414.2], [1.64124312E12, 10806.666666666666], [1.64124414E12, 30730.2], [1.64124282E12, 494.51666666666665], [1.64124444E12, 34341.46666666667], [1.64124372E12, 19764.266666666666], [1.64124402E12, 28577.666666666668], [1.64124342E12, 14600.4], [1.64124432E12, 33279.13333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.64124426E12, 42121.75], [1.64124366E12, 24719.2], [1.64124456E12, 44861.85], [1.64124396E12, 34047.2], [1.64124324E12, 14662.45], [1.64124294E12, 10056.75], [1.64124384E12, 29441.5], [1.64124486E12, 45561.45], [1.64124354E12, 20958.85], [1.64124348E12, 18685.15], [1.64124378E12, 28129.75], [1.64124318E12, 13409.0], [1.64124408E12, 37370.3], [1.6412451E12, 20375.85], [1.64124498E12, 45095.05], [1.64124336E12, 16644.65], [1.64124438E12, 43142.0], [1.64124306E12, 11485.1], [1.64124468E12, 45182.5], [1.641243E12, 10814.65], [1.6412436E12, 21366.95], [1.64124462E12, 44716.1], [1.6412433E12, 15682.7], [1.64124492E12, 45619.75], [1.6412445E12, 44045.65], [1.6412448E12, 45444.85], [1.64124288E12, 9736.1], [1.6412439E12, 32560.55], [1.6412442E12, 41072.35], [1.64124474E12, 44978.45], [1.64124504E12, 45678.05], [1.64124312E12, 12592.8], [1.64124414E12, 39381.65], [1.64124282E12, 553.85], [1.64124444E12, 44249.7], [1.64124372E12, 24602.6], [1.64124402E12, 36466.65], [1.64124342E12, 17664.9], [1.64124432E12, 42821.35]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6412451E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 306.2444160816847, "minX": 1.64124282E12, "maxY": 1455.1227544910173, "series": [{"data": [[1.64124426E12, 332.0484429065742], [1.64124366E12, 565.492924528301], [1.64124456E12, 311.8421052631576], [1.64124396E12, 410.3835616438357], [1.64124324E12, 946.9145129224651], [1.64124294E12, 1393.8724637681153], [1.64124384E12, 474.90693069306917], [1.64124486E12, 306.618682021753], [1.64124354E12, 669.5618915159951], [1.64124348E12, 743.0764430577225], [1.64124378E12, 499.4341968911919], [1.64124318E12, 1047.204347826088], [1.64124408E12, 373.11934477379134], [1.6412451E12, 314.9184549356224], [1.64124498E12, 309.9088558500318], [1.64124336E12, 840.0893169877406], [1.64124438E12, 324.0939189189197], [1.64124306E12, 1221.3451776649736], [1.64124468E12, 309.6658064516132], [1.641243E12, 1284.7412398921836], [1.6412436E12, 655.1828103683498], [1.64124462E12, 312.89830508474563], [1.6412433E12, 897.2992565055757], [1.64124492E12, 306.95143769968075], [1.6412445E12, 317.5433487756447], [1.6412448E12, 307.34124438742776], [1.64124288E12, 1455.1227544910173], [1.6412439E12, 428.7215756490602], [1.6412442E12, 340.8417317246276], [1.64124474E12, 311.03694102397907], [1.64124504E12, 306.2444160816847], [1.64124312E12, 1110.2384259259254], [1.64124414E12, 355.6928201332348], [1.64124282E12, 1445.1052631578948], [1.64124444E12, 316.0441370223978], [1.64124372E12, 569.2831753554502], [1.64124402E12, 384.96562749800177], [1.64124342E12, 796.4917491749179], [1.64124432E12, 326.25731790333606]], "isOverall": false, "label": "Create User", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6412451E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 306.2418634333124, "minX": 1.64124282E12, "maxY": 1455.0748502994009, "series": [{"data": [[1.64124426E12, 332.0463667820066], [1.64124366E12, 565.4834905660366], [1.64124456E12, 311.836907082521], [1.64124396E12, 410.375856164384], [1.64124324E12, 946.9065606361826], [1.64124294E12, 1393.8347826086958], [1.64124384E12, 474.89999999999947], [1.64124486E12, 306.61228406909777], [1.64124354E12, 669.552155771906], [1.64124348E12, 743.0670826833081], [1.64124378E12, 499.425906735752], [1.64124318E12, 1047.1978260869564], [1.64124408E12, 373.11544461778476], [1.6412451E12, 314.91702432045764], [1.64124498E12, 309.90756302521044], [1.64124336E12, 840.0735551663746], [1.64124438E12, 324.08918918918937], [1.64124306E12, 1221.3071065989848], [1.64124468E12, 309.6619354838708], [1.641243E12, 1284.722371967655], [1.6412436E12, 655.1787175989082], [1.64124462E12, 312.8891786179926], [1.6412433E12, 897.284386617101], [1.64124492E12, 306.94696485623047], [1.6412445E12, 317.5393778954334], [1.6412448E12, 307.33547145606127], [1.64124288E12, 1455.0748502994009], [1.6412439E12, 428.7135183527306], [1.6412442E12, 340.8367636621721], [1.64124474E12, 311.0304601425797], [1.64124504E12, 306.2418634333124], [1.64124312E12, 1110.2314814814813], [1.64124414E12, 355.6883789785341], [1.64124282E12, 1445.0000000000002], [1.64124444E12, 316.0388669301709], [1.64124372E12, 569.2748815165886], [1.64124402E12, 384.9568345323742], [1.64124342E12, 796.4801980198016], [1.64124432E12, 326.24982981620116]], "isOverall": false, "label": "Create User", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6412451E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 48.5634517766497, "minX": 1.64124282E12, "maxY": 55.77844311377246, "series": [{"data": [[1.64124426E12, 48.66782006920411], [1.64124366E12, 49.1202830188679], [1.64124456E12, 49.28719948018203], [1.64124396E12, 49.703767123287705], [1.64124324E12, 49.7395626242545], [1.64124294E12, 48.82608695652175], [1.64124384E12, 49.228712871287094], [1.64124486E12, 48.64363403710811], [1.64124354E12, 48.90125173852572], [1.64124348E12, 49.035881435257416], [1.64124378E12, 49.038341968911894], [1.64124318E12, 48.92391304347823], [1.64124408E12, 49.42121684867391], [1.6412451E12, 48.83690987124461], [1.64124498E12, 49.00711053652229], [1.64124336E12, 48.772329246935236], [1.64124438E12, 48.96959459459459], [1.64124306E12, 48.5634517766497], [1.64124468E12, 48.92645161290325], [1.641243E12, 49.309973045822154], [1.6412436E12, 48.75306957708045], [1.64124462E12, 49.00456323337678], [1.6412433E12, 49.066914498141294], [1.64124492E12, 48.72012779552718], [1.6412445E12, 49.246194573130374], [1.6412448E12, 48.85118665811421], [1.64124288E12, 55.77844311377246], [1.6412439E12, 49.22918531781559], [1.6412442E12, 49.182398864442845], [1.64124474E12, 49.41542449773178], [1.64124504E12, 48.908742820676416], [1.64124312E12, 49.212962962962976], [1.64124414E12, 49.003700962250164], [1.64124282E12, 53.10526315789474], [1.64124444E12, 48.917654808959185], [1.64124372E12, 49.251184834123265], [1.64124402E12, 49.37410071942447], [1.64124342E12, 48.735973597359695], [1.64124432E12, 49.04969366916267]], "isOverall": false, "label": "Create User", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6412451E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 148.0, "minX": 1.64124282E12, "maxY": 2456.0, "series": [{"data": [[1.64124426E12, 938.0], [1.64124366E12, 1651.0], [1.64124456E12, 834.0], [1.64124396E12, 1163.0], [1.64124324E12, 2177.0], [1.64124294E12, 2298.0], [1.64124384E12, 1439.0], [1.64124486E12, 614.0], [1.64124354E12, 1965.0], [1.64124348E12, 1941.0], [1.64124378E12, 1522.0], [1.64124318E12, 1996.0], [1.64124408E12, 1215.0], [1.6412451E12, 563.0], [1.64124498E12, 576.0], [1.64124336E12, 2106.0], [1.64124438E12, 895.0], [1.64124306E12, 2456.0], [1.64124468E12, 674.0], [1.641243E12, 2131.0], [1.6412436E12, 2061.0], [1.64124462E12, 902.0], [1.6412433E12, 1960.0], [1.64124492E12, 574.0], [1.6412445E12, 890.0], [1.6412448E12, 782.0], [1.64124288E12, 2257.0], [1.6412439E12, 1385.0], [1.6412442E12, 900.0], [1.64124474E12, 799.0], [1.64124504E12, 565.0], [1.64124312E12, 2283.0], [1.64124414E12, 1144.0], [1.64124282E12, 1848.0], [1.64124444E12, 895.0], [1.64124372E12, 1672.0], [1.64124402E12, 1439.0], [1.64124342E12, 1908.0], [1.64124432E12, 1034.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.64124426E12, 480.4000000000001], [1.64124366E12, 1012.0], [1.64124456E12, 438.0], [1.64124396E12, 663.1000000000001], [1.64124324E12, 1539.8000000000002], [1.64124294E12, 1734.4], [1.64124384E12, 823.5999999999999], [1.64124486E12, 432.60000000000014], [1.64124354E12, 1202.0], [1.64124348E12, 1337.6000000000004], [1.64124378E12, 832.4], [1.64124318E12, 1544.7], [1.64124408E12, 590.7], [1.6412451E12, 439.0], [1.64124498E12, 440.0], [1.64124336E12, 1428.8000000000002], [1.64124438E12, 449.0], [1.64124306E12, 1654.5], [1.64124468E12, 439.0], [1.641243E12, 1657.8], [1.6412436E12, 1135.0], [1.64124462E12, 439.0], [1.6412433E12, 1465.5], [1.64124492E12, 439.0], [1.6412445E12, 445.0], [1.6412448E12, 438.0], [1.64124288E12, 1792.0], [1.6412439E12, 726.6000000000001], [1.6412442E12, 519.0], [1.64124474E12, 439.0], [1.64124504E12, 431.20000000000005], [1.64124312E12, 1578.0], [1.64124414E12, 543.5999999999999], [1.64124282E12, 1769.0], [1.64124444E12, 442.0], [1.64124372E12, 1018.0], [1.64124402E12, 615.8], [1.64124342E12, 1338.3000000000002], [1.64124432E12, 456.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.64124426E12, 672.9399999999996], [1.64124366E12, 1454.51], [1.64124456E12, 568.1999999999989], [1.64124396E12, 960.579999999999], [1.64124324E12, 1809.6399999999999], [1.64124294E12, 2195.180000000001], [1.64124384E12, 1209.34], [1.64124486E12, 526.3599999999999], [1.64124354E12, 1631.5999999999976], [1.64124348E12, 1747.9600000000025], [1.64124378E12, 1163.3400000000001], [1.64124318E12, 1899.4099999999999], [1.64124408E12, 884.6800000000003], [1.6412451E12, 531.0], [1.64124498E12, 530.0], [1.64124336E12, 1814.639999999999], [1.64124438E12, 666.5700000000002], [1.64124306E12, 1927.3500000000004], [1.64124468E12, 529.49], [1.641243E12, 2029.079999999999], [1.6412436E12, 1593.5999999999997], [1.64124462E12, 583.9500000000003], [1.6412433E12, 1848.15], [1.64124492E12, 524.0], [1.6412445E12, 617.039999999999], [1.6412448E12, 550.0000000000005], [1.64124288E12, 2189.799999999998], [1.6412439E12, 1077.119999999999], [1.6412442E12, 753.9000000000001], [1.64124474E12, 557.6799999999998], [1.64124504E12, 524.3199999999999], [1.64124312E12, 2060.4300000000003], [1.64124414E12, 827.2800000000002], [1.64124282E12, 1848.0], [1.64124444E12, 595.0499999999997], [1.64124372E12, 1471.5999999999995], [1.64124402E12, 1044.88], [1.64124342E12, 1736.739999999999], [1.64124432E12, 762.2999999999995]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.64124426E12, 543.4000000000005], [1.64124366E12, 1185.55], [1.64124456E12, 479.0], [1.64124396E12, 769.6499999999999], [1.64124324E12, 1600.8], [1.64124294E12, 1871.1], [1.64124384E12, 998.3499999999998], [1.64124486E12, 475.79999999999995], [1.64124354E12, 1350.0], [1.64124348E12, 1466.7999999999997], [1.64124378E12, 957.6999999999999], [1.64124318E12, 1604.95], [1.64124408E12, 691.8499999999999], [1.6412451E12, 476.0], [1.64124498E12, 479.0], [1.64124336E12, 1540.0], [1.64124438E12, 516.95], [1.64124306E12, 1756.25], [1.64124468E12, 482.0], [1.641243E12, 1778.1999999999998], [1.6412436E12, 1360.8999999999999], [1.64124462E12, 489.0], [1.6412433E12, 1572.1499999999999], [1.64124492E12, 480.0], [1.6412445E12, 490.7999999999997], [1.6412448E12, 479.0], [1.64124288E12, 1917.0], [1.6412439E12, 848.3999999999987], [1.6412442E12, 581.0], [1.64124474E12, 480.0], [1.64124504E12, 448.0], [1.64124312E12, 1729.3999999999999], [1.64124414E12, 641.0], [1.64124282E12, 1848.0], [1.64124444E12, 507.04999999999995], [1.64124372E12, 1199.75], [1.64124402E12, 761.0], [1.64124342E12, 1490.4999999999998], [1.64124432E12, 524.5]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.64124426E12, 150.0], [1.64124366E12, 151.0], [1.64124456E12, 148.0], [1.64124396E12, 154.0], [1.64124324E12, 165.0], [1.64124294E12, 201.0], [1.64124384E12, 153.0], [1.64124486E12, 152.0], [1.64124354E12, 153.0], [1.64124348E12, 157.0], [1.64124378E12, 153.0], [1.64124318E12, 154.0], [1.64124408E12, 151.0], [1.6412451E12, 154.0], [1.64124498E12, 153.0], [1.64124336E12, 156.0], [1.64124438E12, 152.0], [1.64124306E12, 164.0], [1.64124468E12, 149.0], [1.641243E12, 247.0], [1.6412436E12, 152.0], [1.64124462E12, 149.0], [1.6412433E12, 158.0], [1.64124492E12, 151.0], [1.6412445E12, 152.0], [1.6412448E12, 151.0], [1.64124288E12, 206.0], [1.6412439E12, 153.0], [1.6412442E12, 150.0], [1.64124474E12, 151.0], [1.64124504E12, 151.0], [1.64124312E12, 162.0], [1.64124414E12, 151.0], [1.64124282E12, 856.0], [1.64124444E12, 151.0], [1.64124372E12, 154.0], [1.64124402E12, 151.0], [1.64124342E12, 159.0], [1.64124432E12, 151.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.64124426E12, 319.0], [1.64124366E12, 491.0], [1.64124456E12, 292.0], [1.64124396E12, 369.0], [1.64124324E12, 921.0], [1.64124294E12, 1497.0], [1.64124384E12, 409.5], [1.64124486E12, 292.0], [1.64124354E12, 598.0], [1.64124348E12, 678.0], [1.64124378E12, 454.0], [1.64124318E12, 1115.5], [1.64124408E12, 330.0], [1.6412451E12, 315.0], [1.64124498E12, 291.0], [1.64124336E12, 800.0], [1.64124438E12, 317.0], [1.64124306E12, 1271.5], [1.64124468E12, 294.5], [1.641243E12, 1397.0], [1.6412436E12, 584.0], [1.64124462E12, 311.0], [1.6412433E12, 897.5], [1.64124492E12, 290.0], [1.6412445E12, 293.0], [1.6412448E12, 289.0], [1.64124288E12, 1510.0], [1.6412439E12, 385.0], [1.6412442E12, 321.0], [1.64124474E12, 298.0], [1.64124504E12, 289.0], [1.64124312E12, 1159.5], [1.64124414E12, 324.0], [1.64124282E12, 1476.0], [1.64124444E12, 312.0], [1.64124372E12, 498.5], [1.64124402E12, 332.0], [1.64124342E12, 741.0], [1.64124432E12, 319.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6412451E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 280.0, "minX": 1.0, "maxY": 1324.5, "series": [{"data": [[2.0, 1227.0], [3.0, 1192.0], [4.0, 1324.5], [5.0, 1272.5], [6.0, 1251.5], [7.0, 1230.0], [8.0, 1206.0], [9.0, 953.5], [10.0, 790.5], [11.0, 679.0], [12.0, 659.0], [13.0, 570.0], [14.0, 552.5], [15.0, 522.5], [1.0, 905.5], [16.0, 455.0], [17.0, 406.0], [18.0, 404.0], [19.0, 400.0], [20.0, 370.0], [21.0, 340.0], [22.0, 327.0], [23.0, 321.0], [24.0, 319.0], [25.0, 314.0], [26.0, 295.0], [27.0, 286.0], [28.0, 286.0], [29.0, 283.0], [30.0, 280.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 30.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 280.0, "minX": 1.0, "maxY": 1324.5, "series": [{"data": [[2.0, 1227.0], [3.0, 1192.0], [4.0, 1324.5], [5.0, 1272.5], [6.0, 1251.5], [7.0, 1229.5], [8.0, 1206.0], [9.0, 953.5], [10.0, 790.5], [11.0, 679.0], [12.0, 659.0], [13.0, 570.0], [14.0, 552.5], [15.0, 522.5], [1.0, 905.5], [16.0, 455.0], [17.0, 406.0], [18.0, 404.0], [19.0, 400.0], [20.0, 370.0], [21.0, 340.0], [22.0, 327.0], [23.0, 321.0], [24.0, 319.0], [25.0, 314.0], [26.0, 295.0], [27.0, 286.0], [28.0, 286.0], [29.0, 283.0], [30.0, 280.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 30.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.45, "minX": 1.64124282E12, "maxY": 26.116666666666667, "series": [{"data": [[1.64124426E12, 24.083333333333332], [1.64124366E12, 14.133333333333333], [1.64124456E12, 25.65], [1.64124396E12, 19.466666666666665], [1.64124324E12, 8.383333333333333], [1.64124294E12, 5.75], [1.64124384E12, 16.833333333333332], [1.64124486E12, 26.05], [1.64124354E12, 11.983333333333333], [1.64124348E12, 10.683333333333334], [1.64124378E12, 16.083333333333332], [1.64124318E12, 7.666666666666667], [1.64124408E12, 21.366666666666667], [1.6412451E12, 11.516666666666667], [1.64124498E12, 25.783333333333335], [1.64124336E12, 9.516666666666667], [1.64124438E12, 24.666666666666668], [1.64124306E12, 6.566666666666666], [1.64124468E12, 25.833333333333332], [1.641243E12, 6.183333333333334], [1.6412436E12, 12.216666666666667], [1.64124462E12, 25.566666666666666], [1.6412433E12, 8.966666666666667], [1.64124492E12, 26.083333333333332], [1.6412445E12, 25.183333333333334], [1.6412448E12, 25.983333333333334], [1.64124288E12, 5.566666666666666], [1.6412439E12, 18.616666666666667], [1.6412442E12, 23.483333333333334], [1.64124474E12, 25.716666666666665], [1.64124504E12, 26.116666666666667], [1.64124312E12, 7.2], [1.64124414E12, 22.516666666666666], [1.64124282E12, 0.45], [1.64124444E12, 25.3], [1.64124372E12, 14.066666666666666], [1.64124402E12, 20.85], [1.64124342E12, 10.1], [1.64124432E12, 24.483333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6412451E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.31666666666666665, "minX": 1.64124282E12, "maxY": 26.116666666666667, "series": [{"data": [[1.64124426E12, 24.083333333333332], [1.64124366E12, 14.133333333333333], [1.64124456E12, 25.65], [1.64124396E12, 19.466666666666665], [1.64124324E12, 8.383333333333333], [1.64124294E12, 5.75], [1.64124384E12, 16.833333333333332], [1.64124486E12, 26.05], [1.64124354E12, 11.983333333333333], [1.64124348E12, 10.683333333333334], [1.64124378E12, 16.083333333333332], [1.64124318E12, 7.666666666666667], [1.64124408E12, 21.366666666666667], [1.6412451E12, 11.65], [1.64124498E12, 25.783333333333335], [1.64124336E12, 9.516666666666667], [1.64124438E12, 24.666666666666668], [1.64124306E12, 6.566666666666666], [1.64124468E12, 25.833333333333332], [1.641243E12, 6.183333333333334], [1.6412436E12, 12.216666666666667], [1.64124462E12, 25.566666666666666], [1.6412433E12, 8.966666666666667], [1.64124492E12, 26.083333333333332], [1.6412445E12, 25.183333333333334], [1.6412448E12, 25.983333333333334], [1.64124288E12, 5.566666666666666], [1.6412439E12, 18.616666666666667], [1.6412442E12, 23.483333333333334], [1.64124474E12, 25.716666666666665], [1.64124504E12, 26.116666666666667], [1.64124312E12, 7.2], [1.64124414E12, 22.516666666666666], [1.64124282E12, 0.31666666666666665], [1.64124444E12, 25.3], [1.64124372E12, 14.066666666666666], [1.64124402E12, 20.85], [1.64124342E12, 10.1], [1.64124432E12, 24.483333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6412451E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.31666666666666665, "minX": 1.64124282E12, "maxY": 26.116666666666667, "series": [{"data": [[1.64124426E12, 24.083333333333332], [1.64124366E12, 14.133333333333333], [1.64124456E12, 25.65], [1.64124396E12, 19.466666666666665], [1.64124324E12, 8.383333333333333], [1.64124294E12, 5.75], [1.64124384E12, 16.833333333333332], [1.64124486E12, 26.05], [1.64124354E12, 11.983333333333333], [1.64124348E12, 10.683333333333334], [1.64124378E12, 16.083333333333332], [1.64124318E12, 7.666666666666667], [1.64124408E12, 21.366666666666667], [1.6412451E12, 11.65], [1.64124498E12, 25.783333333333335], [1.64124336E12, 9.516666666666667], [1.64124438E12, 24.666666666666668], [1.64124306E12, 6.566666666666666], [1.64124468E12, 25.833333333333332], [1.641243E12, 6.183333333333334], [1.6412436E12, 12.216666666666667], [1.64124462E12, 25.566666666666666], [1.6412433E12, 8.966666666666667], [1.64124492E12, 26.083333333333332], [1.6412445E12, 25.183333333333334], [1.6412448E12, 25.983333333333334], [1.64124288E12, 5.566666666666666], [1.6412439E12, 18.616666666666667], [1.6412442E12, 23.483333333333334], [1.64124474E12, 25.716666666666665], [1.64124504E12, 26.116666666666667], [1.64124312E12, 7.2], [1.64124414E12, 22.516666666666666], [1.64124282E12, 0.31666666666666665], [1.64124444E12, 25.3], [1.64124372E12, 14.066666666666666], [1.64124402E12, 20.85], [1.64124342E12, 10.1], [1.64124432E12, 24.483333333333334]], "isOverall": false, "label": "Create User-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6412451E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.31666666666666665, "minX": 1.64124282E12, "maxY": 26.116666666666667, "series": [{"data": [[1.64124426E12, 24.083333333333332], [1.64124366E12, 14.133333333333333], [1.64124456E12, 25.65], [1.64124396E12, 19.466666666666665], [1.64124324E12, 8.383333333333333], [1.64124294E12, 5.75], [1.64124384E12, 16.833333333333332], [1.64124486E12, 26.05], [1.64124354E12, 11.983333333333333], [1.64124348E12, 10.683333333333334], [1.64124378E12, 16.083333333333332], [1.64124318E12, 7.666666666666667], [1.64124408E12, 21.366666666666667], [1.6412451E12, 11.65], [1.64124498E12, 25.783333333333335], [1.64124336E12, 9.516666666666667], [1.64124438E12, 24.666666666666668], [1.64124306E12, 6.566666666666666], [1.64124468E12, 25.833333333333332], [1.641243E12, 6.183333333333334], [1.6412436E12, 12.216666666666667], [1.64124462E12, 25.566666666666666], [1.6412433E12, 8.966666666666667], [1.64124492E12, 26.083333333333332], [1.6412445E12, 25.183333333333334], [1.6412448E12, 25.983333333333334], [1.64124288E12, 5.566666666666666], [1.6412439E12, 18.616666666666667], [1.6412442E12, 23.483333333333334], [1.64124474E12, 25.716666666666665], [1.64124504E12, 26.116666666666667], [1.64124312E12, 7.2], [1.64124414E12, 22.516666666666666], [1.64124282E12, 0.31666666666666665], [1.64124444E12, 25.3], [1.64124372E12, 14.066666666666666], [1.64124402E12, 20.85], [1.64124342E12, 10.1], [1.64124432E12, 24.483333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6412451E12, "title": "Total Transactions Per Second"}},
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


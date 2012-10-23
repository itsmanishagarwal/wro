/**
 * HighCharts util
 * 
 * @dependency jquery api - http://docs.jquery.com/Main_Page
 * @dependency highcharts api - http://docs.jquery.com/Main_Page
 *
 * @author Rajani
 */

var HighChartsUtil;
if (typeof(HighChartsUtil) === 'undefined') {
  HighChartsUtil = {};
}

/**
 * Function to convert html code to actual symbol (uses jquery)
 * 
 * @param value: value to decode Eg: "&gt;"
 * 
 * @return decoded value Eg: ">"
 */
HighChartsUtil.htmlDecode = function(value) {
  return $('<div/>').html(value).text();
};

/**
 * Function to get html code of a symbol (uses jquery)
 * 
 * @param value: value to encode Eg: ">"
 * 
 * @return encoded value Eg: "&gt;"
 * 
 */
HighChartsUtil.htmlEncode = function(value) {
  return $('<div/>').text(value).html();
};

/**
 * Function to render high chart to a given container
 *
 * @param containerId : id of the container to which the chart is rendered Eg: "container"
 * @param series : array of data Eg: [{"data":[27.5, 0, 2], "name": "series name"}]
 * @param categories : categories to be displayed (series.data and categories should exactly match) Eg:['Budget', 'This Billing Period', 'Previous Billing Period']
 * @param options (optional): dictionary of optional chart options. allowed options are 
 *                            xAxisTitle - default null (actual text on the x-axis title)
 *                            yAxisTitle - default null (actual text on the y-axis title)
 *                            chartTitle - default null (actual text on the chart title)
 *                            inverted - default false ( whether to invert the axes so that x-axis is horizontal and y-axis is vertical)
 *                            type - default "bar" (type of the chart. Can be one of line, spline, area, areaspline, column, bar, pie and scatter)
 *                            min - default null (the minimum value of the chart)
 *                            max - default null (the maximum value of the chart)
 *                            numberPrefix - default "" (number prefix to be displayed on axis) 
 *                            alternateGridColor - default null (alternate grid color of the chart) 
 *                            backgroundColor - default "#FFFFFF" (background color of the chart)
 *
 * @return A reference to the created Chart object.
 */

HighChartsUtil.renderChart = function(containerId, series, categories, options){
	options = options || {};
	var yAxisTitle = options["yAxisTitle"] || null;
	var xAxisTitle = options["xAxisTitle"] || null;
	var chartTitle = options["chartTitle"] || null;
	var inverted = options["inverted"] || false;
	var useXLabelformater = options["useXLabelformater"] || false;
	var stacking = options["stacking"] || null;
	
	var type = options["type"] || "bar";
	var yAxisMin = options["min"] || null;
	var yAxisMax = options["max"] || null;
	var numberPrefix = options["numberPrefix"] || "";
	var xAxisAlternateGridColor = options["xAxisAlternateGridColor"] || null;
	var yAxisAlternateGridColor = options["yAxisAlternateGridColor"] || null;
	var backgroundColor = options["backgroundColor"] || "#FFFFFF";
	
	var toolTipFormatter = options['toolTipFormatter'] || function(){  
                                                          var name = showLegend ? this.series.name + ', ' : '';
                                                          name = name + this.x + ', ' + numberPrefix + ' ' + this.y;
                                                          return name;     };
    var lang = options["lang"] || {};
                                                          
  var yAxisStackLabelFormatter=options['yAxisStackLabelFormatter'] || function(){
                                                                        return parseFloat(this.total).toFixed(2);
                                                                       };
  var chartSpacingRight=options['chartSpacingRight'] || 30;
   var toolTipStyle=options['toolTipStyle'] || {};
   var exportEnabled=true;
   if(typeof options['exportEnabled']=="boolean")
     exportEnabled=options['exportEnabled'];
	numberPrefix = HighChartsUtil.htmlDecode(numberPrefix);
	var showLegend = series.length > 1 || false;
	$.each(series, function(index, series){
		var data = series["data"];
    var length = data.length;
		for(var i=0; i<length; i++) {
			if (!isNaN(data[i])) {
				data[i] = parseFloat(data[i]);
			}
		}
	});
  
	var chartOptions = {
    chart: {
      renderTo: containerId,
      inverted: inverted,
      type: type,
      plotBorderWidth: 1,
      spacingRight: chartSpacingRight,
      backgroundColor: backgroundColor
    },
    legend: {
      enabled: showLegend
    },
    xAxis: {
      categories: categories,
      alternateGridColor: xAxisAlternateGridColor,
			title: {
        enabled: true,
        text: xAxisTitle,
        style: {
          fontWeight: 'bold',
          color: '#7E7A7A'
        }
      },
      labels: {
          formatter: function(){
    	  var text = this.value;
    		  if(useXLabelformater && text.length > 9){
    			  return text.substring(0 , 6) + "...";
    		  }else{
    			  return text;
    		  }
             
          }
        }
    },
    yAxis: {
      min: yAxisMin,
      max: yAxisMax,
      gridLineWidth: 0,
      alternateGridColor: yAxisAlternateGridColor,
      labels: {
        formatter: function(){
      return numberPrefix + this.value;
    }
      },
      stackLabels: {
        enabled: true,
        formatter: yAxisStackLabelFormatter
        
      },
      title: {
        enabled: true,
        text: yAxisTitle,
        style: {
          fontWeight: 'bold',
          color: '#7E7A7A'
        }
      }
    },
    plotOptions: {
      bar: {
        stacking: 'normal'
      },
		  column: {
        stacking: stacking
      }
    },
    title: {
      enabled: true,
      text: chartTitle,
      style: {
        fontWeight: 'bold',
        color: '#7E7A7A',
        fontSize: '12px'
      }
    },
    exporting: {
      enabled:exportEnabled,
      filename: "PortalChart"
    },
    tooltip: {
      enabled: true,
      formatter: toolTipFormatter,
      style:toolTipStyle
    },
    series: series,
    credits: {
      enabled: false
    },
    lang:lang
  };
	return new Highcharts.Chart(chartOptions);
};


	// 环形图----1
	var chartDom = document.getElementById('first_one');
	
	var myChartDom = echarts.init(chartDom)
	myChartDom.resize({
	  width: 200,
	  height: 50
	});
	// $("#first_one").style={width:"200px"}
	var option1;
	option1 = {
	  tooltip: {
	    trigger: 'item'
	  },
	
	  series: [

	    {
	      name: 'Access From',
	      type: 'pie',
		  center:['80%','50%'],
	      radius: ['50%', '100%'],

	      label: {
	        show: false,
	        position: 'outer'
	      },
		  legend: {
		     orient: 'vertical',
		     left: 'left',
			 itemHeight:'50',
			 itemWidth:'200',
		   },

	      emphasis: {
	        label: {
	          show: true,
	          fontSize: '40',
	          fontWeight: 'bold'
	        }
	      },
	      labelLine: {
	        show: false
	      },
	      data: [
	        { value: 1048, name: 'Search Engine' },
	        { value: 735, name: 'Direct' },
	        { value: 580, name: 'Email' },
	        { value: 484, name: 'Union Ads' },
	        { value: 300, name: 'Video Ads' }
	      ]
	    }
	  ],
	};
	
	// 环形图----2
	var chartDom_two = document.getElementById('first_two');
	var myChartDom_two = echarts.init(chartDom_two);
	myChartDom_two.resize({
	  width: 200,
	  height: 50
	});
	var option2;
	option2 = {
	  tooltip: {
	    trigger: 'item'
	  },
	 
	  series: [
	    {
	      name: 'Access From',
	      type: 'pie',
		  center:['80%','50%'],
	      radius: ['50%', '100%'],
	      label: {
	        show: false,
	        position: 'outer'
	      },
	      emphasis: {
	        label: {
	          show: true,
	          fontSize: '40',
	          fontWeight: 'bold'
	        }
	      },
	      labelLine: {
	        show: false
	      },
	      data: [
	        { value: 1048, name: 'Search Engine' },
	        { value: 735, name: 'Direct' },
	        { value: 580, name: 'Email' },
	        { value: 484, name: 'Union Ads' },
	        { value: 300, name: 'Video Ads' }
	      ]
	    }
	  ]
	};
	
	
	// 环形图----3
	var chartDom_three = document.getElementById('first_three');
	var myChartDom_three = echarts.init(chartDom_three);
	var option3;
	myChartDom_three.resize({
	  width: 200,
	  height: 50
	});
	option3 = {
	  tooltip: {
	    trigger: 'item'
	  },
	 
	  series: [
	    {
	      name: 'Access From',
	      type: 'pie',
		  center:['80%','50%'],
	      radius: ['50%', '100%'],
	      label: {
	        show: false,
	        position: 'outer'
	      },
	      emphasis: {
	        label: {
	          show: true,
	          fontSize: '40',
	          fontWeight: 'bold'
	        }
	      },
	      labelLine: {
	        show: false
	      },
	      data: [
	        { value: 1048, name: 'Search Engine' },
	        { value: 735, name: 'Direct' },
	        { value: 580, name: 'Email' },
	        { value: 484, name: 'Union Ads' },
	        { value: 300, name: 'Video Ads' }
	      ]
	    }
	  ]
	};
	
	
	// 环形图----1
	var chartDom_four = document.getElementById('first_four');
	var myChartDom_four = echarts.init(chartDom_four);
	var option4;
	myChartDom_four.resize({
	  width: 200,
	  height: 50
	});
	option4 = {
	  tooltip: {
	    trigger: 'item'
	  },
	 
	  series: [
	    {
	      name: 'Access From',
	      type: 'pie',
		  center:['80%','50%'],
	      radius: ['50%', '100%'],
	      label: {
	        show: false,
	        position: 'outer'
	      },
	      emphasis: {
	        label: {
	          show: true,
	          fontSize: '40',
	          fontWeight: 'bold'
	        }
	      },
	      labelLine: {
	        show: false
	      },
	      data: [
	        { value: 1048, name: 'Search Engine' },
	        { value: 735, name: 'Direct' },
	        { value: 580, name: 'Email' },
	        { value: 484, name: 'Union Ads' },
	        { value: 300, name: 'Video Ads' }
	      ]
	    }
	  ]
	};
	
	// 环形图----1
	var chartDom_five = document.getElementById('first_five');
	var myChartDom_five = echarts.init(chartDom_five);
	var option5;
	myChartDom_five.resize({
	  width: 200,
	  height: 50
	});
	option5 = {
	  tooltip: {
	    trigger: 'item'
	  },
	 
	  series: [
	    {
	      name: 'Access From',
	      type: 'pie',
		  center:['80%','50%'],
	      radius: ['50%', '100%'],
	      label: {
	        show: false,
	        position: 'outer'
	      },
	      emphasis: {
	        label: {
	          show: true,
	          fontSize: '40',
	          fontWeight: 'bold'
	        }
	      },
	      labelLine: {
	        show: false
	      },
	      data: [
	        { value: 1048, name: 'Search Engine' },
	        { value: 735, name: 'Direct' },
	        { value: 580, name: 'Email' },
	        { value: 484, name: 'Union Ads' },
	        { value: 300, name: 'Video Ads' }
	      ]
	    }
	  ]
	};
	
option1 && myChartDom.setOption(option1);
option2 && myChartDom_two.setOption(option2);
option3 && myChartDom_three.setOption(option3);
option4 && myChartDom_four.setOption(option4);
option5 && myChartDom_five.setOption(option5);
// 窗口大小改变，echarts图自适应
// $("#first_one convas").style(width:'200')
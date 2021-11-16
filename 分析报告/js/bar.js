// window.onresize = myChart.resize;
//柱状图
// 平均分---1
var chartDom_theOne = document.getElementById('list_one');
var myChart_theOne = echarts.init(chartDom_theOne);
var option_theOne;
    
const seriesLabel_theOne = {
  show: true
};
option_theOne = {
  xAxis: {
    type: 'value',
    name: 'Days',
    axisLabel: {
      formatter: '{value}'
    }
  },
  yAxis: {
    type: 'category',
    inverse: true,
  },
  series: [
    {
     
      type: 'bar',
      label: seriesLabel_theOne,
      markPoint: {
        symbolSize: 1,
        symbolOffset: [0, '50%'],
        label: {
          borderColor: '#aaa',
          lineHeight: 50,
          position: 'autor',
          distance: 20,

        },
      }
    },
    {
      name: '平均分',
      type: 'bar',
      label: seriesLabel_theOne,
      data: [90]
    },
    {
      name: '总平均分',
      type: 'bar',
      label: seriesLabel_theOne,
      data: [90]
    }
  ]
};
option_theOne && myChart_theOne.setOption(option_theOne);

    // 平均分---2
	var chartDom_theTwo = document.getElementById('list_two');
	var myChart_theTwo= echarts.init(chartDom_theTwo);
	var option_theTwo;
    
const seriesLabel_theTwo = {
  show: true
};
option_theTwo = {
  xAxis: {
    type: 'value',
    name: '平均分',
    axisLabel: {
      formatter: '{value}'
    }
  },
  yAxis: {
    type: 'category',
    inverse: true,
  },
  series: [
    {
     
      type: 'bar',
      label: seriesLabel_theTwo,
      markPoint: {
        symbolSize: 1,
        symbolOffset: [0, '50%'],
        label: {
          borderColor: '#aaa',
          lineHeight: 50,
          position: 'right',
          distance: 20,

        },
      }
    },
    {
      name: 'City Beta',
      type: 'bar',
      label: seriesLabel_theTwo,
      data: [150]
    },
    {
      name: 'City Gamma',
      type: 'bar',
      label: seriesLabel_theTwo,
      data: [223]
    }
  ]
};
option_theTwo && myChart_theTwo.setOption(option_theTwo); 




    // 平均分---3
	var chartDom_theThree = document.getElementById('list_three');
	var myChart_theThree= echarts.init(chartDom_theThree);
	var option_theThree;
    
const seriesLabel_theThree = {
  show: true
};
option_theThree = {
  xAxis: {
    type: 'value',
    name: '平均分',
    axisLabel: {
      formatter: '{value}'
    }
  },
  yAxis: {
    type: 'category',
    inverse: true,
  },
  series: [
    {
     
      type: 'bar',
      label: seriesLabel_theThree,
      markPoint: {
        symbolSize: 1,
        symbolOffset: [0, '50%'],
        label: {
          borderColor: '#aaa',
          lineHeight: 50,
          position: 'right',
          distance: 20,

        },
      }
    },
    {
      name: 'City Beta',
      type: 'bar',
      label: seriesLabel_theThree,
      data: [150]
    },
    {
      name: 'City Gamma',
      type: 'bar',
      label: seriesLabel_theThree,
      data: [223]
    }
  ]
};
option_theThree && myChart_theThree.setOption(option_theThree); 


    // 平均分---4
	var chartDom_theFour = document.getElementById('list_four');
	var myChart_theFour= echarts.init(chartDom_theFour);
	var option_theFour;
    
const seriesLabel_theFour = {
  show: true
};
option_theFour = {
  xAxis: {
    type: 'value',
    name: '平均分',
    axisLabel: {
      formatter: '{value}'
    }
  },
  yAxis: {
    type: 'category',
    inverse: true,
  },
  series: [
    {
     
      type: 'bar',
      label: seriesLabel_theFour,
      markPoint: {
        symbolSize: 1,
        symbolOffset: [0, '50%'],
        label: {
          borderColor: '#aaa',
          lineHeight: 50,
          position: 'right',
          distance: 20,

        },
      }
    },
    {
      name: 'City Beta',
      type: 'bar',
      label: seriesLabel_theFour,
      data: [150]
    },
    {
      name: 'City Gamma',
      type: 'bar',
      label: seriesLabel_theFour,
      data: [223]
    }
  ]
};
option_theFour && myChart_theFour.setOption(option_theFour); 
    // 平均分---5
	var chartDom_theFive = document.getElementById('list_five');
	var myChart_theFive= echarts.init(chartDom_theFive);
	var option_theFive;
    
const seriesLabel_theFive = {
  show: true
};
option_theFive = {
  xAxis: {
    type: 'value',
    name: '平均分',
    axisLabel: {
      formatter: '{value}'
    }
  },
  yAxis: {
    type: 'category',
    inverse: true,
  },
  series: [
    {
     
      type: 'bar',
      label: seriesLabel_theFive,
      markPoint: {
        symbolSize: 1,
        symbolOffset: [0, '50%'],
        label: {
          borderColor: '#aaa',
          lineHeight: 50,
          position: 'right',
          distance: 20,

        },
      }
    },
    {
      name: 'City Beta',
      type: 'bar',
      label: seriesLabel_theFive,
      data: [150]
    },
    {
      name: 'City Gamma',
      type: 'bar',
      label: seriesLabel_theFive,
      data: [223]
    }
  ]
};
option_theFive && myChart_theFive.setOption(option_theFive); 



    // 通过率---1
	var chartDom_theSix = document.getElementById('list_six');
	var myChart_theSix= echarts.init(chartDom_theSix);
	var option_theSix;
    
const seriesLabel_theSix = {
  show: true
};
option_theSix = {
  xAxis: {
    type: 'value',
    name: '通过率',
    axisLabel: {
      formatter: '{value}'
    }
  },
  yAxis: {
    type: 'category',
    inverse: true,
  },
  series: [
    {
     
      type: 'bar',
      label: seriesLabel_theSix,
      markPoint: {
        symbolSize: 1,
        symbolOffset: [0, '50%'],
        label: {
          borderColor: '#aaa',
          lineHeight: 50,
          position: 'right',
          distance: 20,

        },
      }
    },
    {
      name: 'City Beta',
      type: 'bar',
      label: seriesLabel_theSix,
      data: [150]
    },
    {
      name: 'City Gamma',
      type: 'bar',
      label: seriesLabel_theSix,
      data: [223]
    }
  ]
};
option_theSix && myChart_theSix.setOption(option_theSix); 



   // 通过率---1
	var chartDom_theSeven = document.getElementById('list_seven');
	var myChart_theSeven= echarts.init(chartDom_theSeven);
	var option_theSeven;
    
const seriesLabel_theSeven = {
  show: true
};
option_theSeven = {
  xAxis: {
    type: 'value',
    name: '通过率',
    axisLabel: {
      formatter: '{value}'
    }
  },
  yAxis: {
    type: 'category',
    inverse: true,
  },
  series: [
    {
     
      type: 'bar',
      label: seriesLabel_theSeven,
      markPoint: {
        symbolSize: 1,
        symbolOffset: [0, '50%'],
        label: {
          borderColor: '#aaa',
          lineHeight: 50,
          position: 'right',
          distance: 20,

        },
      }
    },
    {
      name: 'City Beta',
      type: 'bar',
      label: seriesLabel_theSeven,
      data: [150]
    },
    {
      name: 'City Gamma',
      type: 'bar',
      label: seriesLabel_theSeven,
      data: [223]
    }
  ]
};
option_theSeven && myChart_theSeven.setOption(option_theSeven);



   // 通过率---3
	var chartDom_theEight = document.getElementById('list_eight');
	var myChart_theEight= echarts.init(chartDom_theEight);
	var option_theEight;
    
const seriesLabel_theEight = {
  show: true
};
option_theEight = {
  xAxis: {
    type: 'value',
    name: '通过率',
    axisLabel: {
      formatter: '{value}'
    }
  },
  yAxis: {
    type: 'category',
    inverse: true,
  },
  series: [
    {
     
      type: 'bar',
      label: seriesLabel_theEight,
      markPoint: {
        symbolSize: 1,
        symbolOffset: [0, '50%'],
        label: {
          borderColor: '#aaa',
          lineHeight: 50,
          position: 'right',
          distance: 20,

        },
      }
    },
    {
      name: 'City Beta',
      type: 'bar',
      label: seriesLabel_theEight,
      data: [0]
    },
    {
      name: 'City Gamma',
      type: 'bar',
      label: seriesLabel_theEight,
      data: [0]
    }
  ]
};
option_theEight && myChart_theEight.setOption(option_theEight); 

   // 通过率---1
	var chartDom_theNine = document.getElementById('list_ten');
	var myChart_theNine= echarts.init(chartDom_theNine);
	var option_theNine;
    
const seriesLabel_theNine = {
  show: true
};
option_theNine = {
  xAxis: {
    type: 'value',
    name: '通过率',
    axisLabel: {
      formatter: '{value}'
    }
  },
  yAxis: {
    type: 'category',
    inverse: true,
  },
  series: [
    {
     
      type: 'bar',
      label: seriesLabel_theNine,
      markPoint: {
        symbolSize: 1,
        symbolOffset: [0, '50%'],
        label: {
          borderColor: '#aaa',
          lineHeight: 50,
          position: 'right',
          distance: 20,

        },
      }
    },
    {
      name: 'City Beta',
      type: 'bar',
      label: seriesLabel_theNine,
      data: [0]
    },
    {
      name: 'City Gamma',
      type: 'bar',
      label: seriesLabel_theNine,
      data: [0]
    }
  ]
};
option_theNine && myChart_theNine.setOption(option_theNine); 

   // 通过率---4
	var chartDom_theTen = document.getElementById('list_nine');
	var myChart_theTen= echarts.init(chartDom_theTen);
	var option_theTen;
    
const seriesLabel_theTen = {
  show: true
};
option_theTen = {
  xAxis: {
    type: 'value',
    name: '通过率',
    axisLabel: {
      formatter: '{value}'
    }
  },
  yAxis: {
    type: 'category',
    inverse: true,
  },
  series: [
    {
     
      type: 'bar',
      label: seriesLabel_theTen,
      markPoint: {
        symbolSize: 1,
        symbolOffset: [0, '50%'],
        label: {
          borderColor: '#aaa',
          lineHeight: 50,
          position: 'right',
          distance: 20,

        },
      }
    },
    {
      name: 'City Beta',
      type: 'bar',
      label: seriesLabel_theTen,
      data: [0]
    },
    {
      name: 'City Gamma',
      type: 'bar',
      label: seriesLabel_theTen,
      data: [0]
    }
  ]
};
option_theTen && myChart_theTen.setOption(option_theTen); 




// 全省排名----1
	var chartDom_theEleven = document.getElementById('list_eleven');
	var myChart_theEleven= echarts.init(chartDom_theEleven);
	var option_theEleven;
    
const seriesLabel_theEleven = {
  show: true
};
option_theEleven = {
  xAxis: {
    type: 'value',
    name: '全省排名',
    axisLabel: {
      formatter: '{value}'
    }
  },
  yAxis: {
    type: 'category',
    inverse: true
  },
  series: [
    {
     
      type: 'bar',
      label: seriesLabel_theEleven,
      markPoint: {
        symbolSize: 1,
        symbolOffset: [0, '50%'],
        label: {
          borderColor: '#aaa',
          lineHeight: 50,
          position: 'right',
          distance: 20,

        },
      }
    },
    {
      name: '高级工',
      type: 'bar',
      label: seriesLabel_theEleven,
      data: [100]
    },
    {
      name: '技师',
      type: 'bar',
      label: seriesLabel_theEleven,
      data: [100]
    },
	{
	  name: '高级技师',
	  type: 'bar',
	  label: seriesLabel_theEleven,
	  data: [100]
	},{
      name: '总击败率',
      type: 'bar',
      label: seriesLabel_theEleven,
      data: [100]
    }
  ]
};
option_theEleven && myChart_theEleven.setOption(option_theEleven); 


// 全省排名----2
	var chartDom_theTwelve = document.getElementById('list_twelve');
	var myChart_theTwelve= echarts.init(chartDom_theTwelve);
	var option_theTwelve;
    
const seriesLabel_theTwelve = {
  show: true
};
option_theTwelve = {
  xAxis: {
    type: 'value',
    name: '通过率',
    axisLabel: {
      formatter: '{value}'
    }
  },
  yAxis: {
    type: 'category',
    inverse: true,
  },
  series: [
    {
     
      type: 'bar',
      label: seriesLabel_theTwelve,
      markPoint: {
        symbolSize: 1,
        symbolOffset: [0, '50%'],
        label: {
          borderColor: '#aaa',
          lineHeight: 50,
          position: 'right',
          distance: 20,

        },
      }
    },
    {
      name: 'City Beta',
      type: 'bar',
      label: seriesLabel_theTwelve,
      data: [150]
    },
    {
      name: 'City Gamma',
      type: 'bar',
      label: seriesLabel_theTwelve,
      data: [223]
    }
  ]
};
option_theTwelve && myChart_theTwelve.setOption(option_theTwelve); 



// 全省排名----3
	var chartDom_theThirteen = document.getElementById('list_thirteen');
	var myChart_theThirteen= echarts.init(chartDom_theThirteen);
	var option_theThirteen;
    
const seriesLabel_theThirteen = {
  show: true
};
option_theThirteen = {
  xAxis: {
    type: 'value',
    name: '通过率',
    axisLabel: {
      formatter: '{value}'
    }
  },
  yAxis: {
    type: 'category',
    inverse: true,
  },
  series: [
    {
     
      type: 'bar',
      label: seriesLabel_theThirteen,
      markPoint: {
        symbolSize: 1,
        symbolOffset: [0, '50%'],
        label: {
          borderColor: '#aaa',
          lineHeight: 50,
          position: 'right',
          distance: 20,

        },
      }
    },
    {
      name: 'City Beta',
      type: 'bar',
      label: seriesLabel_theThirteen,
      data: [150]
    },
    {
      name: 'City Gamma',
      type: 'bar',
      label: seriesLabel_theThirteen,
      data: [223]
    }
  ]
};
option_theThirteen && myChart_theThirteen.setOption(option_theThirteen); 



// 全省排名----4
	var chartDom_theFourteen = document.getElementById('list_fourteen');
	var myChart_theFourteen= echarts.init(chartDom_theFourteen);
	var option_theFourteen;
    
const seriesLabel_theFourteen = {
  show: true
};
option_theFourteen = {
  xAxis: {
    type: 'value',
    name: '通过率',
    axisLabel: {
      formatter: '{value}'
    }
  },
  yAxis: {
    type: 'category',
    inverse: true,
  },
  series: [
    {
     
      type: 'bar',
      label: seriesLabel_theFourteen,
      markPoint: {
        symbolSize: 1,
        symbolOffset: [0, '50%'],
        label: {
          borderColor: '#aaa',
          lineHeight: 50,
          position: 'right',
          distance: 20,

        },
      }
    },
    {
      name: 'City Beta',
      type: 'bar',
      label: seriesLabel_theFourteen,
      data: [150]
    },
    {
      name: 'City Gamma',
      type: 'bar',
      label: seriesLabel_theFourteen,
      data: [223]
    }
  ]
};
option_theFourteen && myChart_theFourteen.setOption(option_theFourteen); 



// 全省排名----2
	var chartDom_theFifteen = document.getElementById('list_fifteen');
	var myChart_theFifteen= echarts.init(chartDom_theFifteen);
	var option_theFifteen;
    
const seriesLabel_theFifteen = {
  show: true
};
option_theFifteen = {
  xAxis: {
    type: 'value',
    name: '通过率',
    axisLabel: {
      formatter: '{value}'
    }
  },
  yAxis: {
    type: 'category',
    inverse: true,
  },
  series: [
    {
     
      type: 'bar',
      label: seriesLabel_theFifteen,
      markPoint: {
        symbolSize: 1,
        symbolOffset: [0, '50%'],
        label: {
          borderColor: '#aaa',
          lineHeight: 50,
          position: 'right',
          distance: 20,

        },
      }
    },
    {
      name: 'City Beta',
      type: 'bar',
      label: seriesLabel_theFifteen,
      data: [150]
    },
    {
      name: 'City Gamma',
      type: 'bar',
      label: seriesLabel_theFifteen,
      data: [223]
    }
  ]
};
option_theFifteen && myChart_theFifteen.setOption(option_theFifteen); 

myChart_theOne.resize({
	  width: 200,
	  height: 50
	});
myChart_theTwo.resize({
	  width: 200,
	  height: 50
	});
	myChart_theThree.resize({
		  width: 200,
		  height: 50
		});
		myChart_theFour.resize({
			  width: 200,
			  height: 50
			});
			myChart_theFive.resize({
				  width: 200,
				  height: 50
				});
				myChart_theSix.resize({
					  width: 200,
					  height: 50
					});
					myChart_theSeven.resize({
						  width: 200,
						  height: 50
						});
						myChart_theEight.resize({
							  width: 200,
							  height: 50
							});
							myChart_theNine.resize({
								  width: 200,
								  height: 50
								});
								myChart_theTen.resize({
									  width: 200,
									  height: 50
									});
									myChart_theEleven.resize({
										  width: 200,
										  height: 50
										});
										myChart_theTwelve.resize({
											  width: 200,
											  height: 50
											});
											myChart_theThirteen.resize({
												  width: 200,
												  height: 50
												});
												myChart_theFourteen.resize({
													  width: 200,
													  height: 50
													});
													myChart_theFifteen.resize({
														  width: 200,
														  height: 50
														});
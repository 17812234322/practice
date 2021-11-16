// window.onresize = myChart.resize;
//饼图
var dom = document.getElementById("container_one");
var myChart_one = echarts.init(dom);
var app = {};
var option;

	const data = [
	  {
	     name: '全民',
	    value: 70
	  }
	];
	const data1 = [
	  {
	     name: '男',
	    value: 140
	  },
	  {
	     name: '女',
	    value: 68
	  }
	  
	];
	const data2 = [
	  {
	    name: '研究生',
	    value: 70
	  },
	  {
	     name: '大学本科',
	    value: 68
	  },{
	     name: '大学专科和专科学校',
	    value: 68
	  }
	  
	];
	const data3 = [
	  {
	    name: '20-30岁',
	    value: 70
	  },
	  {
	    name: '31-40岁',
	    value: 22
	  },{
	    name: '41-50岁',
	    value: 33
	  },{
	    name: '51-55岁',
	    value: 112
	  }
	  
	];
	option = {
	  title: [
	    {
	      // text: 'Pie label alignTo',
	      // left: 'center'
		  position:'autor'
	    },
	    {
	      subtext: '员工性质',
	      left: '16%',
	      top: '80%',
	      textAlign: 'center',
		   position:'',
	    },
	    {
	      subtext: '男女比例"',
	      left: '36%',
	      top: '80%',
	      textAlign: 'center',
	    },
	    {
	      subtext: '文化程度"',
	      left: '56%',
	      top: '80%',
	      textAlign: 'center'
	    },
	    {
	      subtext: '年龄结构"',
	      left: '78%',
	      top: '80%',
	      textAlign: 'center'
	    }
	  ],
	 legend: {
	    orient: 'vertical',
	    left: 'left',
	  },
	  series: [
	    {
	      type: 'pie',
	      radius: '150%',
	      center: ['51%', '80%'],
	      data: data,
	      label: {
	        position: 'outer',
	        alignTo: 'none',
			 position: 'outer',
	      },
	      left: 0,
	      right: '66.6667%',
	      top: 0,
	      bottom: 100  ,
	      label: {
	        position: '',
	        alignTo: 'edge',
	        margin: 20,
			 position: 'inner',
	      },
	    },
	    
	    {
	      type: 'pie',
	      radius: '150%',
	      center: ['10%', '80%'],
	      data: data1,
	        label: {
	        alignTo: 'none',
	        margin: 20,
	        position: 'inner',
	        bleedMargin: 5
	      },
	      left: '33.3333%',
	      right: '33.3333%',
	      top: 0,
	      bottom: 100
	    },
	    {
	      type: 'pie',
	      radius: '150%',
	      center: ['-30%', '80%'],
	      data: data2,
	      label: {
	       position: 'inner',
	      },
	      left: '66.6667%',
	      right: 0,
	      top: 0,
	      bottom: 100
	    },{
	      type: 'pie',
	      radius: '150%',
	      center: ['30%', '80%'],
	      data: data3,
	      label: {
	        position: 'inner',
	        alignTo: 'edge',
	        margin: 20
	      },
	      left: '66.6667%',
	      right: 0,
	      top: 0,
	      bottom: 100
	    }
	  ]
	};
	
	if (option && typeof option === 'object') {
	    myChart_one.setOption(option);
	}
	// 窗口大小改变，echarts图自适应
	$(window).resize(function(){
	    // console.log($(".chart").width());
	    // 获取$(".chart").width()图表容器的长度，修改canvas长度
	   $("#container_one").css("width", $("#container_one").width());
	   $("#container_one>canvas").width($("#container_one").width());
	})
	myChart_one.resize({
		  width:2000,
		  height: 200
		});
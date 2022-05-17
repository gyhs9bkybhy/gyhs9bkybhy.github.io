
var mydata = [  
    {name: '北京',value: [1, '去过！']},{name: '天津',value: [0, '冲冲冲！']},  
    {name: '上海',value: [1, '去过！']},{name: '重庆',value: [0, '冲冲冲！']},  
    {name: '河北',value: [0, '冲冲冲！']},{name: '河南',value: [0, '冲冲冲！']},  
    {name: '云南',value: [0, '冲冲冲！']},{name: '辽宁',value:[0, '冲冲冲！']},  
    {name: '黑龙江',value: [2, '宇宙的尽头！']},{name: '湖南',value: [1, '去过！']},  
    {name: '安徽',value: [0, '冲冲冲！']},{name: '山东',value: [0, '冲冲冲！']},  
    {name: '新疆',value: [0, '冲冲冲！'] },{name: '江苏',value: [0, '冲冲冲！'] },  
    {name: '浙江',value: [0, '冲冲冲！']},{name: '江西',value: [0, '冲冲冲！'] },  
    {name: '湖北',value: [0, '冲冲冲！']},{name: '广西',value: [0, '冲冲冲！'] },  
    {name: '甘肃',value: [0, '冲冲冲！']},{name: '山西',value: [0, '冲冲冲！'] },  
    {name: '内蒙古',value: [0, '冲冲冲！'] },{name: '陕西',value: [0, '冲冲冲！'] },  
    {name: '吉林',value: [0, '冲冲冲！'] },{name: '福建',value: [0, '冲冲冲！'] },  
    {name: '贵州',value: [0, '冲冲冲！'] },{name: '广东',value: [1, '去过！']},  
    {name: '青海',value: [0, '冲冲冲！']},{name: '西藏',value: [0, '冲冲冲！']},  
    {name: '四川',value: [0, '冲冲冲！']},{name: '宁夏',value: [0, '冲冲冲！']},  
    {name: '海南',value: [0, '冲冲冲！']},{name: '台湾',value: [0, '冲冲冲！']},  
    {name: '香港',value: [0, '冲冲冲！']},{name: '澳门',value: [0, '冲冲冲！']}  
];

var optionMap = {  
    backgroundColor: '#FFFFFF',  
    title: {  
        // text: '全国地图大数据',  
        subtext: '',  
        x:'center'  
    },  
    // tooltip : {  
    //     trigger: 'item'  
    // },  
    
    //左侧小导航图标
    visualMap: {  
        show : true,  
        x: 'right',  
        y: 'center',  
        type: 'piecewise',
        categories: ['宇宙的尽头！', '去过！', '冲冲冲！'],  
        color: ['#FFFFFF', '#5475f5', 'pink']  
    },  
    
    //配置属性
    series: [{  
        name: '数据',  
        type: 'map',  
        mapType: 'china',   
        roam: true,  
        label: {  
            normal: {  
                show: true  //省份名称  
            },  
            emphasis: {  
                show: false
            }  
        },  
        data:mydata  //数据
    }]  
};  
//初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

//使用制定的配置项和数据显示图表
myChart.setOption(optionMap);

myChart.on('click', )

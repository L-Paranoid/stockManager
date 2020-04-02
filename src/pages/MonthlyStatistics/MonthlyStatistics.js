import React, {Component} from 'react';
import 'pageStyle/common/common.less'
import CommonLeftMenu from 'component/commonLeftMenu.js';
import NavHeader from 'component/header.js';
import * as AJAX from 'component/AJAX.js';
import * as utils from 'component/utils.js';
import CommonContent from 'component/commonContent.js';
import * as echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
export default class OutStock extends Component {
    constructor(){
        super();
        this.state={
            Income:[0,0,0,0,0,0,0,0,0,0,0,0],
            Expenditure:[0,0,0,0,0,0,0,0,0,0,0,0],
            Profit:[0,0,0,0,0,0,0,0,0,0,0,0],
            months:[]
        }
    }
    componentDidMount=()=>{
         var _this = this;
         //_this.echartsShow();
         _this.getMonthData();
    }
    getMonthData(){
        var _this = this;
        var months = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
        var date = new Date();
        var year = date.getFullYear();
        var currentMonth = date.getMonth()+1;
        var allData = [];
        [].forEach.call(months,function(item,index){
            if(item && index <= currentMonth){
                index +=1;
                var num = new Date(year,index,0).getDate();
                var month = index<10?'0'+index:index.toString();
                allData.push({startTime:year+month+'01',endTime:year+month+num});
            }
        })
        _this.getEntryData(allData);
    }
    getEntryData(data){
        var _this = this;
        var head = {head:'Authorization',value:'Bearer '+utils.token};
        for(var i =0;i<data.length;i++){
            AJAX.AJAX('http://106.12.194.98/api/goods/add/history?date_start='+data[i].startTime+'&date_end='+data[i].endTime+'&num=5000','GET',false,head,_this.getDate,this.error);
            AJAX.AJAX('http://106.12.194.98/api/goods/reduce/history?date_start='+data[i].startTime+'&date_end='+data[i].endTime+'&num=5000','GET',false,head,_this.getDate,this.error);
        }
    }

    getDate=(res)=>{
        var _this = this;
        var data = JSON.parse(res).data;
        var money = parseFloat(0);
        var num = data.first_page_url.split('date_start=')[1];
        var isOutStockFlag = data.first_page_url.indexOf('reduce') != -1 ? true:false;
        _this.state.Income.push(money.toFixed(2));
        if(num.indexOf('01')!=-1){
            if(isOutStockFlag){
                _this.state.Expenditure[0] = data.stat_price_total;
            }else{
                _this.state.Income[0] =data.stat_price_total != '0'? -data.stat_price_total:data.stat_price_total;
            }
            if(_this.state.Expenditure[0] && _this.state.Income[0]){
                _this.state.Profit[0]((_this.state.Income[0]-_this.state.Expenditure[0]))
            }
        }
        if(num.indexOf('02')!=-1){
            if(isOutStockFlag){
                _this.state.Expenditure[1] = data.stat_price_total;
            }else{
                _this.state.Income[1] = -data.stat_price_total;
            }
            if(_this.state.Expenditure[1] && _this.state.Income[1]){
                _this.state.Profit[1]((_this.state.Income[1]-_this.state.Expenditure[1]))
            }
        }
        if(num.indexOf('03')!=-1){
            if(isOutStockFlag){
                _this.state.Expenditure[2] = data.stat_price_total;
            }else{
                _this.state.Income[2] = -data.stat_price_total;
            }
            if(_this.state.Expenditure[2] && _this.state.Income[2]){
                _this.state.Profit[2]((_this.state.Income[2]-_this.state.Expenditure[2]))
            }
        }
        if(num.indexOf('04')!=-1){
            if(isOutStockFlag){
                _this.state.Expenditure[3] = data.stat_price_total;
            }else{
                _this.state.Income[3] = -data.stat_price_total;
            }
            if(_this.state.Expenditure[3] && _this.state.Income[3]){
                _this.state.Profit[3]((_this.state.Income[3]-_this.state.Expenditure[3]))
            }
        }
        if(num.indexOf('05')!=-1){
            if(isOutStockFlag){
                _this.state.Expenditure[4] = data.stat_price_total;
            }else{
                _this.state.Income[4] = -data.stat_price_total;
            }
            if(_this.state.Expenditure[4] && _this.state.Income[4]){
                _this.state.Profit[4]((_this.state.Income[4]-_this.state.Expenditure[4]))
            }
        }
        if(num.indexOf('06')!=-1){
            if(isOutStockFlag){
                _this.state.Expenditure[5] = data.stat_price_total;
            }else{
                _this.state.Income[5] = -data.stat_price_total;
            }
            if(_this.state.Expenditure[5] && _this.state.Income[5]){
                _this.state.Profit[5]((_this.state.Income[5]-_this.state.Expenditure[5]))
            }
        }
        if(num.indexOf('07')!=-1){
            if(isOutStockFlag){
                _this.state.Expenditure[6] = data.stat_price_total;
            }else{
                _this.state.Income[6] = -data.stat_price_total;
            }
            if(_this.state.Expenditure[6] && _this.state.Income[6]){
                _this.state.Profit[6]((_this.state.Income[6]-_this.state.Expenditure[6]))
            }
        }
        if(num.indexOf('08')!=-1){
            if(isOutStockFlag){
                _this.state.Expenditure[7] = data.stat_price_total;
            }else{
                _this.state.Income[7] = -data.stat_price_total;
            }
            if(_this.state.Expenditure[7] && _this.state.Income[7]){
                _this.state.Profit[7]((_this.state.Income[7]-_this.state.Expenditure[7]))
            }
        }
        if(num.indexOf('09')!=-1){
            if(isOutStockFlag){
                _this.state.Expenditure[8] = data.stat_price_total;
            }else{
                _this.state.Income[8] = -data.stat_price_total;
            }
            if(_this.state.Expenditure[8] && _this.state.Income[8]){
                _this.state.Profit[8]((_this.state.Income[8]-_this.state.Expenditure[8]))
            }
        }
        if(num.indexOf('10')!=-1){
            if(isOutStockFlag){
                _this.state.Expenditure[9] = data.stat_price_total;
            }else{
                _this.state.Income[9] = -data.stat_price_total;
            }
            if(_this.state.Expenditure[9] && _this.state.Income[9]){
                _this.state.Profit[9]((_this.state.Income[9]-_this.state.Expenditure[9]))
            }
        }
        if(num.indexOf('11')!=-1){
            if(isOutStockFlag){
                _this.state.Expenditure[10] = data.stat_price_total;
            }else{
                _this.state.Income[10] = -data.stat_price_total;
            }
            if(_this.state.Expenditure[10] && _this.state.Income[10]){
                _this.state.Profit[10]((_this.state.Income[10]-_this.state.Expenditure[10]))
            }
        }
        if(num.indexOf('12')!=-1){
            if(isOutStockFlag){
                _this.state.Expenditure[11] = data.stat_price_total;
            }else{
                _this.state.Income[11] = -data.stat_price_total;
            }
            if(_this.state.Expenditure[11] && _this.state.Income[11]){
                _this.state.Profit[11]((_this.state.Income[11]-_this.state.Expenditure[11]))
            }
        }
        _this.echartsShow();
    }
    error(res){
        alert(res);
    }
    echartsShow(data){
        var _this = this;
        var eChart = echarts.init(document.getElementById('monthTotal'));
        var AllMonths = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
        var date = new Date();
        var month = date.getMonth()+1;
        var currentMonth = [];
        for(var i=0;i<month;i++){
            currentMonth.push(AllMonths[i]); 
        }
        // 绘制图表
        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['利润', '支出', '收入']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'value'
                }
            ],
            yAxis: [
                {
                    type: 'category',
                    axisTick: {
                        show: false
                    },
                    data: currentMonth
                }
            ],
            series: [
                {
                    name: '利润',
                    type: 'bar',
                    label: {
                        show: true,
                        position: 'inside'
                    },
                    data: _this.state.Profit
                },
                {
                    name: '收入',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        show: true
                    },
                    data: _this.state.Expenditure
                },
                {
                    name: '支出',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        show: true,
                        position: 'left'
                    },
                    data: _this.state.Income
                }
            ]
        };
        eChart.setOption(option);
    }
    render(){
        return(
            <div className='allStock'>
                <NavHeader />
                <CommonLeftMenu />
                <div className='rightContent'>
                    <header className="rightHeader">
                        <span>商品库存出库</span>
                    </header>
                    <div id='monthTotal' style={{ width: '100%', height: '100%' }}> 
                    </div>
                </div>
            </div>
        )
    }
}

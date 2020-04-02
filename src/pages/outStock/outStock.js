import React, {Component} from 'react';
import 'pageStyle/common/common.less'
import CommonLeftMenu from 'component/commonLeftMenu.js';
import NavHeader from 'component/header.js';
import * as AJAX from 'component/AJAX.js';
import * as utils from 'component/utils.js';
import CommonContent from 'component/commonContent.js';
import PageFooter from 'component/footer.js';
import AlertBox from 'component/alertBox.js';
import Entry from 'component/entry.js';
import * as DATE from 'component/getDate.js';
export default class OutStock extends Component {
    constructor(props) {
        super(props);
        this.state = {
           data : '',
           deleteFlag:false,
           allData:'',
           isentry:false,
           searchType:'commodity',
           alertBox:'none',
           customer:''
        }
    }
    componentDidMount=()=>{
        var _this = this;
        _this.getData();
        _this.getCustomer();
    }
    getData=()=>{
        var head = {head:'Authorization',value:'Bearer '+utils.token};
        AJAX.AJAX('http://106.12.194.98/api/goods/reduce/history?date_start='+DATE.getDate('day','-')+'&date_end='+DATE.getDate('day','-'),'GET',false,head,this.isLogin,this.error);
    }
    isLogin=(res)=>{
        var _this = this;
        res = JSON.parse(res);
        if(res.msg == '身份失效'){
            window.location.href = '/';
        }
        if(res.msg =='成功'){
            _this.setState({
                data : res.data.data,
                allData : res.data
            })
        }
        if(res.msg == '获取成功'){
            _this.setState({
                customer : res.data.data,
            })
        }
    }
    showEntry=()=>{
        var _this = this;
        _this.setState({
            isentry:true
        })
    }
    searchBtn(e){
        var _this = this;
        var target = e.target;
        var select = target.ownerDocument.querySelector('.searchSelect');
        var id = select.options[select.selectedIndex].getAttribute('id');
        var searchValue = target.ownerDocument.querySelector('.searchValue').value;
        if(searchValue==''){
            return;
        }
        var url = this.state.allData.path+'?'+id+'='+searchValue;
        var searchDateStart = e.target.ownerDocument.querySelector('.searchDateStart').value;
        var searchDateEnd = e.target.ownerDocument.querySelector('.searchDateEnd').value;
        if(searchDateStart!==''&&searchDateEnd!==''){
            url+='&date_start='+searchDateStart+'&date_end='+searchDateEnd
        }
        var head = {head:'Authorization',value:'Bearer '+utils.token};
        AJAX.AJAX(url,'GET',false,head,this.isLogin,this.error);
    }
    dateChange(e){
        var date_start = e.target.ownerDocument.querySelector('.startDate').value;
        var date_end =  e.target.ownerDocument.querySelector('.endDate').value;
        var url = this.state.allData.path+'?'+'date_start='+date_start+'&date_end='+date_end;
        var head = {head:'Authorization',value:'Bearer '+utils.token};
        AJAX.AJAX(url,'GET',false,head,this.isLogin,this.error);
    }
    clear(e){
        e.target.ownerDocument.querySelector('.searchValue').value = '';
        e.target.ownerDocument.querySelector('.searchDateStart').value = '';
        e.target.ownerDocument.querySelector('.searchDateEnd').value = '';
        var head = {head:'Authorization',value:'Bearer '+utils.token};
        AJAX.AJAX('http://106.12.194.98/api/goods/reduce/history','GET',false,head,this.isLogin,this.error);
    }
    showCustomer(){
        var _this = this;
        var show = _this.state.alertBox=='none'?'block':'none';
        _this.setState({
            alertBox:show
        })
    }
    searchType(e){
        var _this = this;
        var type = e.target.querySelectorAll('option')[e.target.selectedIndex].id;
        _this.setState({
            searchType:type
        })
        // ,{title:'商品图片',name:'goods_images'}  ,{title:'商品图片',name:'images'}
    }
    getCustomer(){
        var _this = this;
        var head = {head:'Authorization',value:'Bearer '+utils.token};
        AJAX.AJAX('http://106.12.194.98/api/customer/list','GET',false,head,this.isLogin.bind(_this),_this.error);
    }
    focusChange(e){
        e.target.type = 'date';
    }
    blurChange(e){
        e.target.type = 'text';
    }
    render() {
        var _this = this;
        return (
            <div className='allStock'>
                <NavHeader />
                <CommonLeftMenu />
                <div className='rightContent'>
                <header className="rightHeader">
                		<span>商品库存出库</span>
                	</header>
                	<div className="dataContent">
                        <div className="optContent">
                            <select className="search" onChange={_this.searchType.bind(_this)}>
                                <option id="commodity">商品查询</option>
                                <option id="date">日期查询</option>
                            </select>
                            <div className="DateOpt opt" style={{display:_this.state.searchType=='date'?'flex':'none'}}>
                                <input className="startDate DateInput" placeholder="开始日期" type="text" onFocus={_this.focusChange.bind(_this)} onBlur={_this.blurChange.bind(_this)}/>
                                &nbsp;-&nbsp;
                                <input className="endDate DateInput" placeholder="开始日期" type="text" onFocus={_this.focusChange.bind(_this)} onBlur={_this.blurChange.bind(_this)}/>
                                <div className="enterBtn" onClick={_this.dateChange.bind(_this)}>确定</div>
                            </div>
                            <div className="searchOpt opt" style={{display:_this.state.searchType=='commodity'?'flex':'none'}}>
                                <select className="searchSelect">
                                    <option id="goods_name">商品名称</option>
                                    <option id="goods_number">商品编号</option>
                                    <option id="customer">客户名称</option>
                                    <option id="operator">经办人</option>
                                </select>
                                <input className="searchValue"/>
                                <input className="dateSearch searchDateStart"  placeholder="开始日期" type="text" onFocus={_this.focusChange.bind(_this)} onBlur={_this.blurChange.bind(_this)}/>
                                &nbsp;-&nbsp;
                                <input className="dateSearch searchDateEnd"  placeholder="结束日期" type="text" onFocus={_this.focusChange.bind(_this)} onBlur={_this.blurChange.bind(_this)}/>
                                <div className="enterBtn" onClick={_this.searchBtn.bind(_this)}>搜索</div>
                                <div className="enterBtn clear" onClick={_this.clear.bind(_this)}>重置</div>
                            </div>
                        </div>
                        <div className="optContent twoLine">
                            <div className="enterBtn2" onClick={this.showEntry}>出库录入</div>
                            <div className="enterBtn2" onClick={_this.showCustomer.bind(_this)}>客户录入</div>
                        </div>
                        <AlertBox Show={_this.state.alertBox} Type={'customer'} close={_this.showCustomer.bind(_this)}/>
                        <CommonContent 
                            HEAD={[{title:'日期',name:'create_time'},{title:'供应商',name:'supplier'},{title:'客户名称',name:'customer'},{title:'种类',name:'category'},
                            {title:'商品名称',name:'goods_name'},{title:'商品编号',name:'goods_number'},{title:'工费类型',name:'goods_type'},
                            {title:'工费',name:'laborcost'},{title:'商品重量',name:'weight'},{title:'总计件数',name:'num'},{title:'总计克重(g)',name:'weight_all'},
                            {title:'总价($)',name:'price_all'},{title:'经办人',name:'operator'},{title:'操作',name:'退货'}]}
                            CONTENT={_this.state.data}
                            deleteFlag={_this.state.deleteFlag}
                            AllData = {_this.state.allData}
                            isOutStock = {true}
                            getData={_this.getData}
                        />
                        {_this.state.isentry && <Entry 
                            close={()=>{_this.setState({isentry:false}); _this.getData()}}
                            isOutStock = {true}
                            HEAD={[{title:'状态',name:'未录入'},{title:'商品编号',name:'goods_number'},{title:'商品名称',name:'goods_name'},{title:'客户名称',name:'customer'},
                            {title:'工费类型',name:'goods_type'},{title:'工费',name:'goods_laborcost'},
                            {title:'商品重量(件/g)',name:'weight'},{title:'总计件数',name:'num'},
                            {title:'合计克重(g)',name:'weight_all'},{title:'合计价钱($)',name:'price_all'},
                            {title:'经办人',name:'operator'}]}
                            supplier = {_this.state.customer}
                        />}
                        <PageFooter CONTENT={_this.state.allData} isLogin={this.isLogin}/>
                    </div>
                </div>
            </div>
        )
    }
}
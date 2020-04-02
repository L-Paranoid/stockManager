import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Bundle from './Bundle';
import Login from 'bundle-loader?lazy&name=login!pages/Login/login';
import Index from 'bundle-loader?lazy&name=index!pages/Index/index';
import warehousing from 'bundle-loader?lazy&name=warehousing!pages/warehousing/warehousing';
import outStock from 'bundle-loader?lazy&name=outStock!pages/outStock/outStock';
import stockHistory from 'bundle-loader?lazy&name=stockHistory!pages/stockHistory/stockHistory';
import goodsDetail from 'bundle-loader?lazy&name=goodsDetail!pages/Index/goodsDetail';
import MonthlyStatistics from 'bundle-loader?lazy&name=MonthlyStatistics!pages/MonthlyStatistics/MonthlyStatistics';
const Loading = function () {
    return <div>Loading... 数据加载中</div>
};
const createComponent = (component) => () => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component/> : Loading()
        }
    </Bundle>
);
const getRouter = () => (
    <Router>
            <Switch>
                <Route exact path="/" component={createComponent(Login)}/>
                <Route path="/index" component={createComponent(Index)}/>
                <Route path="/warehousing" component={createComponent(warehousing)}/>
                <Route path="/outStock" component={createComponent(outStock)}/>
                <Route path="/stockHistory" component={createComponent(stockHistory)}/>
                <Route path="/goodsDetail" component={createComponent(goodsDetail)}/>
                <Route path="/MonthlyStatistics" component={createComponent(MonthlyStatistics)}/>
            </Switch>
    </Router>
);
export default getRouter;
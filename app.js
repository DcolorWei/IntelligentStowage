//五个货舱，舱容给定，货物重量给定，可以任意拆分货物重量，但装载过程会有稳性限制和强度限制
//存在五个压载水舱，舱容给定满载，排出压载水抵消货物重量
//可以将问题分为两步
//第一步，只考虑货舱分配结果和压载水舱结果，找到最终分配方案
//第二步，找到最优分配过程方案

//最开始，当前满油满压载水，计算初稳性高度GM=KM-KG

const ship = require('./ship.js');
console.log(ship)

//第一步，找到最终分配方案
//遗传算法
//1.初始化种群

//2.计算适应度
//3.选择
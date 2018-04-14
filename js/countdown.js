
/**
 * 倒计时类使用方式 hbj
 **************************************************
 * 多个倒计时                                     *
 * new countdown().init('end_time',1);            *
 * 第一个参数 id                                  *
 * 第二个参数                                     *
 *  不填写 内容正数则加 负数则减 不提示结束       *
 *  -1 内容只能减小于0 提示结束                   *
 *  1 内容只能加大于0 提示未开始                  *
 **************************************************
 * 单个倒计时                                     *
 * new countdown().one_init('end_time',1);        *
 * 第一个参数 id                                  *
 * 第二个参数                                     *
 *  不填写 内容正数则加 负数则减 不提示结束       *
 *  -1 内容只能减小于0 提示结束                   *
 *  1 内容只能加大于0 提示未开始                  *
 **************************************************
 */

var countdown=function(){
    this.div_name = '';
};

countdown.prototype.init=function(i,s){
    if(i){
        more_id=i;
        tag_obj=document.getElementsByTagName('*');
        for(y=0;y<tag_obj.length;y++){
            if(tag_obj[y].id == more_id){
                new countdown().more(tag_obj[y],s)
            }
        }
    }
}
countdown.prototype.more=function(i,s){
    if(i){
        this.Account;
        this.div_obj=i;
        if(!this.div_obj){
            return;
        }
        if(s > 0){
            this.s=1;
        }else if(s < 0){
            this.s=-1;
        }else{
            this.s=this.div_obj.innerHTML<=0?1:-1;
        }
        this.iTime = this.div_obj.innerHTML;
        this.Account;
        this.start();
        
    }
}

countdown.prototype.one_init=function(i,s){
    if(i){
        this.div_obj=document.getElementById(i);
        if(!this.div_obj){
            return;
        }
        if(s > 0){
            this.s=1;
        }else if(s < 0){
            this.s=-1;
        }else{
            this.s=this.div_obj.innerHTML<=0?1:-1;
        }
        this.iTime = this.div_obj.innerHTML;
        this.Account;
        this.start();
    }
}
countdown.prototype.start=function(is_start){
    var obj_this=this;
    var iDay,iHour,iMinute,iSecond;
    var sDay="",sHour="",sMinute="",sSecond="",sTime="";
    if(obj_this.iTime < 0 && obj_this.s < 0){
        obj_this.div_obj.innerHTML = "倒计时早结束了.";
        return ;
    }else if(obj_this.iTime > 0 && obj_this.s > 0 && is_start != 1){
        obj_this.div_obj.innerHTML = "倒计时还未开始.";
        return ;
    }else if(obj_this.iTime < 0 && obj_this.s > 0){
        obj_this.iTime=obj_this.iTime-obj_this.iTime*2;
    }
    iDay = parseInt(obj_this.iTime/24/3600);
    if (iDay > 0)
    {
        sDay = iDay + "天";
    }
    iHour = parseInt((obj_this.iTime/3600)%24);
    if (iHour > 0){
        sHour=iHour+"小时";
    }
    iMinute = parseInt((obj_this.iTime/60)%60);
    if (iMinute > 0){
        sMinute=iMinute+"分钟";
    }
    iSecond = parseInt(obj_this.iTime%60);
    if (iSecond >= 0){
        sSecond=iSecond+"秒";
    }
    if ((sDay=="")&&(sHour=="")){
        sTime=""+sMinute+sSecond+"";
    }
    else
    {
        sTime=sDay+sHour+sMinute+sSecond;
    }
    if(obj_this.iTime==0){
        clearTimeout(obj_this.Account);
        sTime="时间到";
    }
    else
    {
        obj_this.Account = setTimeout(function(){obj_this.start(1);},1000);
    }
    obj_this.iTime=Number(obj_this.iTime)+Number(obj_this.s);
    obj_this.div_obj.innerHTML = sTime;
}
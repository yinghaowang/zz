/***************微信分享*************/
var imgUrl = $("#weixin_share #icon-url").val();
var lineLink = window.location.href;
var descContent = "实习僧，专注实习招聘-让找实习不苦逼，招实习更容易";
var shareTitle = $("#weixin_share #html-title").val();
var appid = '';
function shareFriend() {
    WeixinJSBridge.invoke('sendAppMessage',{
        "appid": appid,
        "img_url": imgUrl,
        "img_width": "200",
        "img_height": "180",
        "link": lineLink,
        "desc": descContent,
        "title": shareTitle
    }, function(res) {
    //_report('send_msg', res.err_msg);
    })
}

function shareTimeline() {
    WeixinJSBridge.invoke('shareTimeline',{
        "img_url": imgUrl,
        "img_width": "200",
        "img_height": "180",
        "link": lineLink,
        "desc": descContent,
        "title": shareTitle
    }, function(res) {
    //_report('timeline', res.err_msg);
    });
}

function shareWeibo() {
    WeixinJSBridge.invoke('shareWeibo',{
        "content": descContent,
        "url": lineLink
    }, function(res) {
    //_report('weibo', res.err_msg);
    });
}


document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
    // 发送给好友
    WeixinJSBridge.on('menu:share:appmessage', function(argv){
        shareFriend();
    });
// 分享到朋友圈
WeixinJSBridge.on('menu:share:timeline', function(argv){
    shareTimeline();
    });
// 分享到微博
WeixinJSBridge.on('menu:share:weibo', function(argv){
    shareWeibo();
    });
}, false);
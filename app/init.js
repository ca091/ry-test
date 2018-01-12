var appKey = 'tdrvipkstf375';
var RongIMLib = window.RongIMLib;
var RongIMClient = RongIMLib.RongIMClient;
var config = {}

function init(token) {

    RongIMClient.init(appKey,null,config);

    // 连接状态监听器
    RongIMClient.setConnectionStatusListener({
        onChanged: function (status) {
            switch (status) {
                case RongIMLib.ConnectionStatus["CONNECTED"]:
                case 0:
                    console.log("连接成功")
                    break;

                case RongIMLib.ConnectionStatus["CONNECTING"]:
                case 1:
                    console.log("连接中")
                    break;

                case RongIMLib.ConnectionStatus["DISCONNECTED"]:
                case 2:
                    console.log("当前用户主动断开链接")
                    break;

                case RongIMLib.ConnectionStatus["NETWORK_UNAVAILABLE"]:
                case 3:
                    console.log("网络不可用")
                    break;

                case RongIMLib.ConnectionStatus["CONNECTION_CLOSED"]:
                case 4:
                    console.log("未知原因，连接关闭")
                    break;

                case RongIMLib.ConnectionStatus["KICKED_OFFLINE_BY_OTHER_CLIENT"]:
                case 6:
                    console.log("用户账户在其他设备登录，本机会被踢掉线")
                    break;

                case RongIMLib.ConnectionStatus["DOMAIN_INCORRECT"]:
                case 12:
                    console.log("当前运行域名错误，请检查安全域名配置")
                    break;
            }
        }
    });

    /*
     文档：http://www.rongcloud.cn/docs/web.html#3、设置消息监听器

     注意事项：
     1：为了看到接收效果，需要另外一个用户向本用户发消息
     2：判断会话唯一性 ：conversationType + targetId
     3：显示消息在页面前，需要判断是否属于当前会话，避免消息错乱。
     4：消息体属性说明可参考：http://rongcloud.cn/docs/api/js/index.html
     */
    RongIMClient.setOnReceiveMessageListener({
        // 接收到的消息
        onReceived: function (message) {
            // 判断消息类型
            console.log(message);
            // callbacks.receiveNewMessage && callbacks.receiveNewMessage(message);
        }
    });

    //开始链接
    RongIMClient.connect(token, {
        onSuccess: function(userId) {
            // callbacks.getCurrentUser && callbacks.getCurrentUser({userId:userId});
            console.log("链接成功，用户id：" + userId);
        },
        onTokenIncorrect: function() {
            console.log('token无效');
        },
        onError:function(errorCode){
            console.log(errorCode);
        }
    });
}
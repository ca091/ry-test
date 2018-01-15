function send(params) {
    var conversationtype = params.conversationtype;
    var targetId = params.targetId;
    var msg = params.msg;
    RongIMClient.getInstance().sendMessage(conversationtype, targetId, msg, {
            onSuccess: function (message) {
                //message 为发送的消息对象并且包含服务器返回的消息唯一Id和发送消息时间戳
                console.log("Send successfully");
            },
            onError: function (errorCode,message) {
                var info = '';
                switch (errorCode) {
                    case RongIMLib.ErrorCode.TIMEOUT:
                        info = '超时';
                        break;
                    case RongIMLib.ErrorCode.UNKNOWN_ERROR:
                        info = '未知错误';
                        break;
                    case RongIMLib.ErrorCode.REJECTED_BY_BLACKLIST:
                        info = '在黑名单中，无法向对方发送消息';
                        break;
                    case RongIMLib.ErrorCode.NOT_IN_DISCUSSION:
                        info = '不在讨论组中';
                        break;
                    case RongIMLib.ErrorCode.NOT_IN_GROUP:
                        info = '不在群组中';
                        break;
                    case RongIMLib.ErrorCode.NOT_IN_CHATROOM:
                        info = '不在聊天室中';
                        break;
                    default :
                        info = x;
                        break;
                }
                console.log('发送失败:' + info);
            }
        }
    );
}

//推送到app端
function push(params) {
    var conversationtype = params.conversationtype;
    var targetId = params.targetId;
    var msg = params.msg;
    var pushData = params.pushData;
    RongIMClient.getInstance().sendMessage(conversationtype, targetId, msg, {
            onSuccess: function (message) {
                console.log('push success')
            },
            onError: function (errorCode,message) {
                console.log('push error')
            }
        }, false, pushData
    );
}

function historyMsg(params){
    var conversationType = params.conversationtype;
    var targetId = params.targetId;
    var timestrap = null; // 默认传 null，若从头开始获取历史消息，请赋值为 0 ,timestrap = 0;
    var count = 20; // 每次获取的历史消息条数，范围 0-20 条，可以多次获取。
    RongIMLib.RongIMClient.getInstance().getHistoryMessages(conversationType, targetId, timestrap, count, {
        onSuccess: function(list, hasMsg) {
            // list => Message 数组。
            // hasMsg => 是否还有历史消息可以获取。
            console.log(list, hasMsg)
        },
        onError: function(error) {
            console.log("GetHistoryMessages,errorcode:" + error);
        }
    });
}

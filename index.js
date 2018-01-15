var rongcloudSDK = require('rongcloud-sdk');
//用于生成token的应用appKey-appSecret，根据自己的应用做更改
const appKey = 'k51hidwqknq9b';
const appSecret = '******';

rongcloudSDK.init(appKey, appSecret);

rongcloudSDK.user.getToken('0001', 'Lance', 'http://files.domain.com/avatar.jpg', function (err, resultText) {
    if (err) {
        // Handle the error
        console.log(err)
    }
    else {
        var result = JSON.parse(resultText);
        if (result.code === 200) {
            //Handle the result.token
            console.log(result)
        }
    }
});

rongcloudSDK.user.getToken('0002', 'caoqi', 'http://files.domain.com/avatar.jpg', function (err, resultText) {
    if (err) {
        // Handle the error
        console.log(err)
    }
    else {
        var result = JSON.parse(resultText);
        if (result.code === 200) {
            //Handle the result.token
            console.log(result)
        }
    }
})
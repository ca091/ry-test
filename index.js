var rongcloudSDK = require('rongcloud-sdk');
const appKey = 'tdrvipkstf375';
const appSecret = 'LrWhVvJrPJ4'

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
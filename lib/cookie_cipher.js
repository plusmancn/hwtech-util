// 加密
function cipher(key, buf,algorithm){
    // 密码加密，解密
    var crypto = require('crypto');
    algorithm = algorithm || 'aes-256-cbc';
    key = key || 'hashIOM!lOs';

    var encrypted = "";
    var cip = crypto.createCipher(algorithm, key);
    encrypted += cip.update(buf, 'binary', 'hex');
    encrypted += cip.final('hex');

    return encrypted;
}


//解密
function decipher(key, encrypted,algorithm){
    // 密码加密，解密
    var crypto = require('crypto');
    algorithm = algorithm || 'aes-256-cbc';
    key = key || 'hashIOM!lOs';

    var decrypted = "";
    var decipherFunc = crypto.createDecipher(algorithm, key);
    decrypted += decipherFunc.update(encrypted, 'hex', 'binary');
    decrypted += decipherFunc.final('binary');

    return decrypted;
}

module.exports.cipher = cipher;
module.exports.decipher = decipher;
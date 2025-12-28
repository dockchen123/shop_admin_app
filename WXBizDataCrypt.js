const crypto = require('crypto');

class WXBizDataCrypt {
  constructor(appId, sessionKey) {
    this.appId = appId;
    this.sessionKey = sessionKey;
  }

  decrypt(encryptedData, iv) {
    // base64 decode
    const sessionKey = Buffer.from(this.sessionKey, 'base64');
    const encryptedDataBuffer = Buffer.from(encryptedData, 'base64');
    const ivBuffer = Buffer.from(iv, 'base64');

    let decoded;

    try {
      // 创建解密对象
      const decipher = crypto.createDecipheriv('aes-128-cbc', sessionKey, ivBuffer);
      // 设置自动 padding
      decipher.setAutoPadding(true);
      decoded = decipher.update(encryptedDataBuffer, 'binary', 'utf8');
      decoded += decipher.final('utf8');

      decoded = JSON.parse(decoded);
    } catch (err) {
      throw new Error('Illegal Buffer');
    }

    if (decoded.watermark.appid !== this.appId) {
      throw new Error('Illegal Buffer');
    }

    return decoded;
  }
}

module.exports = WXBizDataCrypt;
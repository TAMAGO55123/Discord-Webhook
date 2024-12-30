function sendDiscordMessage() {
  const webhookUrl = PropertiesService.getScriptProperties().getProperty('DISCORD_WEBHOOK'); // 設定->スクリプト プロパティから指定。

  const payload = {
    "content": `定期的なメッセージを送信します！`, // 送信したいメッセージ、``を使用しているため改行可能
    "username": PropertiesService.getScriptProperties().getProperty('username'), // 設定->スクリプト　プロパティから指定。ユーザー名
    "avatar_url": PropertiesService.getScriptProperties().getProperty('avatar'), // 設定->スクリプト　プロパティから指定。アバターURL
  };

  const options = {
    "method": "post",
    "headers": {"Content-Type": "application/json"},
    "payload": JSON.stringify(payload),
    "muteHttpExceptions": true
  };

  try {
    const response = UrlFetchApp.fetch(webhookUrl, options);
    Logger.log("メッセージを送信しました: " + response.getContentText());
  } catch (error) {
    Logger.log("エラーが発生しました: " + error.message);
  }
}

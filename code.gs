function sendDiscordMessage() {
  const webhookUrl = "YOUR_DISCORD_WEBHOOK_URL"; // Webhook URL を設定

  const payload = {
    content: "定期的なメッセージを送信します！", // 送信したいメッセージ
  };

  const options = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload),
  };

  try {
    const response = UrlFetchApp.fetch(webhookUrl, options);
    Logger.log("メッセージを送信しました: " + response.getContentText());
  } catch (error) {
    Logger.log("エラーが発生しました: " + error.message);
  }
}

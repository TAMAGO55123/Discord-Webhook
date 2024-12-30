# Discord-Webhook
ChatGPTを使用し、Google Apps Scriptで作成した定期送信コードです。簡易的なものです。
# 使い方
1:Google Apps Scriptにコードをコピー&ペーストします。

2:プロジェクトの設定に移動し、スクリプト　プロパティの設定を以下のように指定します。

![Script Propaties](/README-IMG1.png)

3:`DISCORD_WEBHOOK`にはDiscordのWebhookリンク、`username`には表示名、`avatar`には送信されるメッセージのアイコンのURLを指定します。(imgurなどを使用)

4\:"content": `定期的なメッセージを送信します！,の``の部分を好きな言葉に書き換え。改行も使うことが可能です。

5:GASのトリガーに移動し新しいトリガーを作成。関数は:sendDiscordMessageに指定。実行タイミングは好きなようにしてください。

これで定期的に自動で設定したチャンネルに同じメッセージを送信してくれます。

# 注意点
送信タイミングを早くしすぎるとwickなどのセキュリティbotにブロックされる可能性があるため注意してください。

もしWickにブロックされる場合は、WickのダッシュボードからWebhookのホワイトリストに指定してください。
# 不具合等の連絡先
当スクリプトに不具合が発生している場合は私のTwitterもしくはDiscordにお問い合わせください。

Twitter: https://x.com/imodir_abias (鍵垢のため当スクリプトの報告等する際はDM機能を使用することをお勧めします。)

Discord: Burnice_1 ←こちらにメッセージの送信をお願いします。

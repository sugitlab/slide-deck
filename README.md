# Sugitlab slide decks

スライド一一覧こちら : [https://sugitlab.github.io/slide-deck/](https://sugitlab.github.io/slide-deck/).

# Marp Theme

- VScode でカスタムテーマをプレビューしたい場合は、[Marpのテーマ設定](vscode-insiders://settings/markdown.marp.themes)に、必要なCSSファイルを全て指定してください
  - トップディレクトリからのパスを指定します
  - インポートされているCSSも全て指定します

# スクリプト

- デプロイはGitHubPages
- スライド一覧ページの生成は`build`コマンド経由で`generate-index`をGitHubActionsで実行
- OGP画像についてはGitHubActions対応が終わっていないので、ローカルで`generate-ogp`を実行し、生生成され画像ファイルをリポジトリにpushしてください
  - OGP画像をスライドに指定するには、各スライドのfrontmatterに`image`としてgithubusercontentのURLで設定すると簡単です

# アセット系の扱い

- とりあえずpublic運用前提で、アセットはリポジトリにpushし、githubusercontentのURLで指定するようにしています
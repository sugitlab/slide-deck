# Sugitlab slide decks

スライド一一覧こちら : [https://sugitlab.github.io/slide-deck/](https://sugitlab.github.io/slide-deck/).

# Marp Theme

- VScode でカスタムテーマをプレビューしたい場合は、[Marpのテーマ設定](vscode-insiders://settings/markdown.marp.themes)に、必要なCSSファイルを全て指定してください
  - トップディレクトリからのパスを指定します
  - インポートされているCSSも全て指定します

# スクリプト

- デプロイはGitHubPages
- スライド一覧ページの生成は`build`コマンド経由で`generate-index`をGitHubActionsで実行
- OGP画像についてはGitHubActions対応が終わっていないので、ローカルで`generate-ogp`を実行し、生成され画像ファイルをリポジトリにpushしてください
  - OGP画像をスライドに指定するには、各スライドのfrontmatterに`image`としてgithubusercontentのURLで設定すると簡単です
  
## およその手順

- generate-ogpをする
- githubにpushして、画像のurlを取得する
- frontmatterにurlを設定する
- githubにpushする
- actionsでビルドが走る
- 完了

# 外部スライド（SpeakerDeck / SlideShare 等）の追加

SpeakerDeck や SlideShare など、外部にアップ済みのスライドも同じギャラリーに並べられます。
`slides/external-slides.json` に項目を追加するだけで、`generate-index` がローカルスライドと統合し、日付順で並べます。

- カードをクリックすると外部URLが別タブで開きます
- サムネイル右上に出典バッジ（SpeakerDeck 等）が付く以外は、ローカルスライドと同じ見た目です

## 記入例

```json
[
  {
    "title": "スライドのタイトル",
    "url": "https://speakerdeck.com/your-account/your-deck",
    "image": "https://files.speakerdeck.com/presentations/xxxxxxxx/slide_0.jpg",
    "date": "2025-06-01",
    "source": "speakerdeck",
    "hide": false
  }
]
```

- `title`（必須）: カードに表示するタイトル
- `url`（必須）: クリック時に開く外部スライドのURL
- `image`（任意）: サムネイル画像URL。未指定ならプレースホルダー画像
  - SpeakerDeck: 各スライドページの OGP 画像 or `files.speakerdeck.com/.../slide_0.jpg`
  - SlideShare: `image.slidesharecdn.com/.../-1-2048.jpg` 形式のサムネイル
- `date`（任意）: 並び順に使う日付（`YYYY-MM-DD`）。未指定だと最下部に並びます
- `source`（任意）: 出典バッジの種別。未指定でも `url` のホスト名から自動判定
  （`speakerdeck` / `slideshare` / `docswell` / `googleslides`）
- `hide`（任意）: `true` にするとギャラリーから非表示

# アセット系の扱い

- とりあえずpublic運用前提で、アセットはリポジトリにpushし、githubusercontentのURLで指定するようにしています

# PDF 

こんな感じ 

ファイル名は適宜修正してね

```zsh
pnpm exec marp slides/pm-kansai-2026Jan.md \
  --pdf \
  --html \
  --allow-local-files \
  --theme-set slides/theme/techtrain2.css \
  --theme-set slides/theme/pururiku.css \
  --theme-set slides/theme/pururiku-talk.css \
  --output dist/pm-kansai-2026Jan.pdf
```
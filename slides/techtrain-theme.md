---
marp: true
paginate: true
title: 'TechTrain Theme'
image: 'https://raw.githubusercontent.com/sugitlab/slide-deck/refs/heads/main/slides/ogps/techtrain-theme.png'
date: '2025-03-01'
theme: techtrain
hide: true
footer: 'フッターラベルここに入ります'
---

<!-- _class: title -->

# TechTrain テーマ
## サブテーマがここに入ります
### 補足テキストがここに入ります

---

<!-- _class: title-pururiku -->

# TechTrain テーマ - プルリクカバー
## こういうカバーも指定できます
### かわいいね！！

---

# このスライドテーマについて
## スライドのタイトルがここに入ります

- 本文はこんな感じで
- 箇条書きで書いてしまうのがおすすめ

---

# カラムレイアウト

カラムレイアウトはdivなどを使って明示的にクラスを指定する必要があります。

<div class="columns">
<div>

## 左側
- Item 1
- Item 2
- Item 3

</div>
<div>

## 右側
```javascript
function hello() {
  console.log("Hello, TechTrain!");
}
```

</div>
</div>

---

# カラムレイアウト part2

クラス名を `columns-2` と `columns-3` にすれば比率が 1:2 や 1:3 になります

<div class="columns-3">
<div>

## 左側
- Item 1
- Item 2
- Item 3

</div>
<div>

## 右側
```javascript
function hello() {
  console.log("Hello, TechTrain!");
}
```

</div>
</div>

---

<!-- _class: subtitle -->

# シンプルなサブタイトルスライド
## サブタイトル
### 補足テキストはここに入ります

---

# Code Examples

コードはシンプルにこんな感じ

```javascript
function hello() {
  console.log("Hello, TechTrain!");
}
```

---

# テーブル

テーブルはこんな感じ。内容はGeminiが書いたので気にしないで。

| 言語     | 特徴                                   | メリット                         | デメリット                         |
| -------- | -------------------------------------- | -------------------------------- | --------------------------------- |
| Python   | 読みやすい文法、豊富なライブラリ、汎用性が高い | 初心者向け、開発効率が高い           | 実行速度が比較的遅い               |
| JavaScript | Webブラウザの標準言語、Node.jsでサーバーサイドも | フロントエンドからバックエンドまで対応可能 | ブラウザ環境に依存する部分がある       |
| Java     | 堅牢性、オブジェクト指向、大規模開発向け     | 安定性が高い、実行速度が比較的速い     | 学習コストが高い、記述が冗長になりがち |


---

# PURU RIKU 吹き出し

## クラス名を変えればプルとリクの画像を切り替えられるよ

<div class="puru-bubble smile">
<p>こんにちは！これは通常の吹き出しです。クラス一つで簡単に使えます。</p>
</div>

<div class="riku-bubble surprised">
<p>こんにちは！これは通常の吹き出しです。クラス一つで簡単に使えます。</p>
</div>


---

<!-- _class: accent riku stand -->
# RIKUをつかったアクセントページ

---

<!-- _class: accent puru salute -->
# PURUをつかったアクセントページ

---

# その他

- <span class="highlight">ハイライト</span>テキスト
- [リンク](./)テキスト
- > 引用
- <p class="message">強調メッセージ</p>

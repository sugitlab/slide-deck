---
marp: true
favicon: 'https://avatars.githubusercontent.com/u/26006414'
title: 'PM Kansai Meetup #1 - 2026 Jan.'
image: 'https://raw.githubusercontent.com/sugitlab/slide-deck/refs/heads/main/slides/ogps/pm-kansai-2026Jan.png'
date: '2026-01-22'
theme: techtrain2
footer: "PM Kansai Meetup #1 - 2026-01-22"
hide: true
paginate: true
---

<!-- _class: title -->
## AI時代のプロダクトマネージャーの仕事

PM Kansai Meetup #1 | 2026-01-22

@sugit

---

<!-- class: body -->

## PM Kansai Meetup 第一回 の LT 、緊張するなぁ

---

### せっかくだし、エモい話してかっこいい感じにしようかな！

---

## Claude

「それはあまりおすすめできません。」

## ChatGPT

「率直に言います。それ、**かなり良い**。一段抜けています。」

---

## 私はClaudeの言いなりなので、地に足をついた話をしようと思います。

---

<!-- _class: cover -->
# 本日のテーマ
## プロダクトにAIを。確率的なふるまいと向き合おう

--- 

<div class="columns-3">

<div class="row">

![w:180](./assets/sugitlab.png)
![w:180](./assets/profile.png)
sugit(すぎっと)
X: @sugitlab

</div>

<div>

## ものづくりが好きな人

- 現在
  - 株式会社 TechBowl 取締役COO/CPO
- やったことがある
  - 研究、エンジニア、PM、技術営業、マーケ、経営
- PM歴
  - 10年くらいやっているが、常に何かを兼務している
- 好き
  - アプリ作り、FlutterとC#、分割キーボード、工作・農作

</div>

</div>

---

# お友だち紹介

プルとリクです。よろしくね。

![height:380px](./assets/puru-and-riku.png)

---

<!-- _class: service -->

---

<!-- _class: body puru salute -->

# 会場のみなさんに質問です！

---

# 🙋 AI使ってますか?

---

# 🙋‍♂️ AI機能の開発してますか?

---

<!-- _class: body riku peek -->

# 私の経験

---

### TechTrain Learning Agent
- エディタに常駐するLLMベースのAIメンター
- ユーザーの学習をリアルタイムでサポート

### 生化学データ分析（前職）
- CNNを使った信号解析
- 化学物質のイオンを電気信号に変換して測定する仕組み

→ **苦労したことを思い出しながら** 整理してみます

---

<!-- _class: cover -->

# 確率的なふるまいに向き合う

---

## いわゆる普通のシステムって、<strong class="red">決定論</strong> 的に動きます

- Aと入力すれば、いつだってBと答えてくれる。
- 条件分岐で表現されるので、条件網羅できる。テストしやすい。
- こんな画面になっててー、という結果から、何が起きたのか大体わかる。

---

## AIとか、機械学習を使うと、<strong class="blue">確率論</strong>的に動きます

- Aと入力しているけど、答えが毎回違う
- 条件というものがはっきりしない。テスト・・・どうしよう
- こんな画面になっててー、という結果から、何が起きたのかわからない時がある。


---

<div class="riku-bubble surprised">
<p>ねぇねぇ、そもそもさ、<strong class="blue">確率論と決定論</strong>ってよくわかんないんだけど</p>
</div>

<div class="puru-bubble smile">
<p>そうだよね、じゃあ具体例を考えてみよっか</p>
</div>

---
<!-- _class: body puru salute -->

# 身近な例で考えてみます

---

### チャットボット
- 「こんにちは」→ 毎回違う返答（**確率的**）
- 詳しくはこちらボタン → 画面遷移（**決定論的**）

### レコメンド機能
- おすすめ商品の選定（**確率的**）
- 商品詳細ページへの遷移（**決定論的**）


---

<div class="riku-bubble calm">
<p>レコメンドとかだと、確率論的におすすめ選定して、そのあとは決定論的にうごくってこと？
</div>

<div class="puru-bubble happy">
<p>そうそう、つまり、<br/> システムの中に<strong class="red">確率論的なパーツが混ざってる</strong> んだね！</p>
</div>

<div class="riku-bubble impressed">
<p>なにそれ... 意味わかんないよ</p>
</div>

---

たとえばレコメンドだと...

![フロー図 width:780px](./assets/recomment-flow.excalidraw.svg)

---

<!-- _class: body riku wonder -->
# 確率論的だと、どう困るんだろう？

---

## 1. 要件定義に困る

- YES/NO で書きづらく、正解の定義が難しい
- 期待する挙動をどう説明したら良いのだろう

---

## 2. チームで認識が揃わなくて困る

- PM 「ユーザー体験として、これくらいならOKかな」
- Eng 「技術的にはこのレベルなら出せるかな」
- QA 「これは不具合? 仕様? 判断できない...」

---

## 3. トラブルへの備えがわからなくて困る

- こういう結果が出てるんですが、あってるんですか？
  - あってる... はずなんだけどどうだろう？
- この前まではこんな結果でなかったんだけどどうなってるの？
  - なんでだろ... モデル変えたから?

---

## 1. 要件定義に困る
## 2. チームで認識が揃わなくて困る
## 3. トラブルへの備えがわからなくて困る

---

これは私の経験とお気持ちですが、、、

## 確率的な挙動に向き合うプロジェクトって、<br />  <strong class="red">めちゃくちゃ難しい</strong>


- 機械学習を扱うプロジェクトってずっとこの難しさがあった
- モデルの性能が向上していますが、この難しさは続きそうだなぁと思っています。

---

# それでは、テーマ回収

---

<strong>「AI時代のプロダクトマネージャーの仕事」</strong>

## AI時代のプロダクトマネージャーは <br/> <strong class="red">確率的なふるまい</strong> に立ち向かわなければいけない

---

<!-- _class: body puru salute -->

# 私なりにどう向き合っているか

---

- 確率論の前後はなるべく決定論で挟む
- 挟むのが難しい場合は人の目を入れる。Human in the loop。
- 評価関数的な考え方(YES/NOではない)を持ち込む
- 丁寧にログを設計する
- 評価(テスト)のOpsを頑張る

いずれにしても、<strong class="red">説明責任</strong>が取れるように設計することが大事

---

<!-- _class: body pururiku bow -->

# まとめ

- 確率的なふるまいに向き合う力をつけよう
- 戦い方はある、知見が足りない
- 戦う同志、求ム

---

<!-- _class: service -->

---


## ありがとうございました

![pururiku-takoyaki width:360px](./assets/pururiku_takoyaki.png)



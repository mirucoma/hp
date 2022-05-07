// プランタイトル
export const plans: string[] = [
  "入退室プラン",
  "メッセージプラン",
  "請求書プラン",
  // "テストプラン",
  // "テストプラン２",
]

// ベネフィットカードデータ

export const benefitData: benefitDataType = [
  {
    title: "入退室プラン",
    chips: ["入退室機能", "スマホアプリ"],
    image: "https://placehold.jp/280x140.png",
    points: [
      "入退室の通知で保護者に安心をお届けします。",
      "入退室で重要なアプリへの通知ができます。",
      "業界最安料金の税込110円",
    ],
  },
  {
    title: "メッセージプラン",
    chips: ["メッセージ機能", "お知らせ機能", "スマホアプリ"],
    image: "https://placehold.jp/280x140.png",
    points: [
      "個別送信やグループを自由に作成、全員送信であなたの連絡業務を大幅に効率化します。",
      "メッセージはアプリに通知が来るので、気づかずに返信が遅れてしまうことはありません。",
    ],
  },
  {
    title: "請求書プラン",
    chips: ["請求書機能", "スマホアプリ"],
    image: "https://placehold.jp/280x140.png",
    points: [
      "保護者アプリへ請求書の明細を送信することで面倒な封入作業や郵送コストを０に。",
      "月謝管理機能はリスト表示で見やすく、請求金額の設定や細かい割引にも対応。",
    ],
  },
]

// 機能紹介スライドデータ
export const slideData: slideDataType = [
  [
    {
      image: "https://placehold.jp/880x443.png",
      title: "入退室履歴",
      detail:
        "入退室履歴では生徒1人1人の滞在時間の把握やいつ来ていたかがわかるので月謝の回数確認に重宝します。また、入退室の履歴を編集することができ、間違って入室や退室してしまった際には後から変更をすることができます。",
    },
    {
      image: "https://placehold.jp/880x443.png",
      title: "test",
      detail: "test",
    },
  ],
  [
    {
      image: "https://placehold.jp/880x443.png",
      title: "メッセージ履歴",
      detail:
        "入退室履歴では生徒1人1人の滞在時間の把握やいつ来ていたかがわかるので月謝の回数確認に重宝します。また、入退室の履歴を編集することができ、間違って入室や退室してしまった際には後から変更をすることができます。",
    },
    {
      image: "https://placehold.jp/880x443.png",
      title: "test",
      detail: "test",
    },
  ],
  [
    {
      image: "https://placehold.jp/880x443.png",
      title: "請求書履歴",
      detail:
        "入退室履歴では生徒1人1人の滞在時間の把握やいつ来ていたかがわかるので月謝の回数確認に重宝します。また、入退室の履歴を編集することができ、間違って入室や退室してしまった際には後から変更をすることができます。",
    },
    {
      image: "https://placehold.jp/880x443.png",
      title: "test",
      detail: "test",
    },
  ],
]

//利用料金ボタンカードデータ
export const planButtonData: planButtonDataType = [
  {
    title: "入退室管理プラン",
    image: "../../static/images/joinPlanButtonLogo.png",
    priceText: "1,100 円／月",
    chips: ["入退室機能", "スマホアプリ"],
  },
  {
    title: "メッセージ管理プラン",
    image: "../../static/images/messagePlanButtonLogo.png",
    priceText: "4,400 円／月",
    chips: ["メッセージ機能", "お知らせ機能", "スマホアプリ"],
  },
  {
    title: "請求書管理プラン",
    image: "../../static/images/billPlanButtonLogo.png",
    priceText: "4,400 円／月",
    chips: ["請求書作成機能", "入金管理機能", "スマホアプリ"],
  },
]

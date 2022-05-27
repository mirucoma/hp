import { StaticImage } from "gatsby-plugin-image"
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
    image: <StaticImage src="../../static/images/details/NT.png" width={280} height={141} alt={""} />,
    points: [
      "入退室の通知で保護者に安心をお届けします。",
      "入退室で重要なアプリへの通知ができます。",
      "業界最安料金の税込1100円",
    ],
  },
  {
    title: "メッセージプラン",
    chips: ["メッセージ機能", "お知らせ機能", "スマホアプリ"],
    image: <StaticImage src="../../static/images/details/message.png" width={280} height={141} alt={""} />,
    points: [
      "個別送信やグループを自由に作成、全員送信であなたの連絡業務を大幅に効率化します。",
      "メッセージはアプリに通知が来るので、気づかずに返信が遅れてしまうことはありません。",
    ],
  },
  {
    title: "請求書プラン",
    chips: ["請求書機能", "スマホアプリ"],
    image: <StaticImage src="https://placehold.jp/280x140.png" width={280} height={141} alt={""} />,
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
      image: <StaticImage src="../../static/images/details/NT.png" alt={""} />,
      title: "入退室機能",
      detail: `生徒一人一人に対応したQRコードにより入退室管理が行えます。
        生徒がORコードを塾のタブレットやパソコンで読み取る方式を採用しています。
        生徒の入室と退室時には保護者のアプリにプッシュ通知を送ることができます。
        保護者の安心に繋がり、子どもの送り迎えの目安にも使っていただけます。`,
    },
    {
      image: <StaticImage src="../../static/images/details/NTH.png" alt={""} />,
      title: "入退室履歴",
      detail: `入退室履歴では生徒1人1人の滞在時間の把握やいつ来ていたかがわかるので月謝の回数確認に重宝します。
      また、入退室の履歴を編集することができ、間違って入室や退室してしまった際には後から変更をすることができます。`,
    },
  ],
  [
    {
      image: <StaticImage src="../../static/images/details/message.png" alt={""} />,
      title: "メッセージ機能",
      detail: `生徒、講師、保護者への１対１でメッセージのやり取りができます。
      グループ機能で複数人へ同時送信できるので連絡業務が大幅に時間短縮可能。
      
      メッセージで送られた画像は１年間保持されるので、
      画像の保存期限切れで、後悔することはありません。
      
      保護者への対応状況を塾内で共有できます。
      対応が必要なメッセージには要対応マークをつけたり、
      返信をしていないメッセージには未返信マークがつくので返信忘れを防止します。`,
    },
    {
      image: <StaticImage src="../../static/images/details/announcement.png" alt={""} />,
      title: "お知らせ機能",
      detail: ` 休校や日程調整などの塾のお知らせを学校別や学年別など送りたい人だけに送ることができます。
      お手紙での連絡をミルコマのお知らせ機能にすることで手紙への労力や郵送代を削減。
      
      お知らせへの返信はチャット内でやり取りができるので、
      日程調整などの話題に対して誰と何をどこまで話したかをすべて把握することが出来ます`,
    },
  ],
  [
    {
      image: <StaticImage src="https://placehold.jp/880x443.png" alt={""} />,
      title: "請求書履歴",
      detail:
        "入退室履歴では生徒1人1人の滞在時間の把握やいつ来ていたかがわかるので月謝の回数確認に重宝します。また、入退室の履歴を編集することができ、間違って入室や退室してしまった際には後から変更をすることができます。",
    },
    {
      image: <StaticImage src="https://placehold.jp/880x443.png" alt={""} />,
      title: "test",
      detail: "test",
    },
  ],
]

//Q and A
export const questions: Array<QandA> = [
  {
    question: "料金体系はどのようになっていますか？",
    answer: "No!",
  },
  {
    question: `クラウドのセキュリティは大丈夫ですか？
    個人情報(名前、住所、成績)が盗まれないか`,
    answer: "Text!",
  },
  {
    question: `操作方法がわからない場合はどうすれば良いですか？`,
    answer: "Text!",
  },
]

//利用料金ボタンカードデータ
export const planButtonData: planButtonDataType = [
  {
    title: "入退室管理プラン",
    image: (
      <StaticImage src="../../static/images/joinPlanButtonLogo.png" alt={""} />
    ),
    priceText: "1,100 円／月 (税込)",
    chips: ["入退室機能", "スマホアプリ"],
  },
  {
    title: "メッセージ管理プラン",
    image: (
      <StaticImage
        src="../../static/images/messagePlanButtonLogo.png"
        alt={""}
      />
    ),
    priceText: "4,400 円／月 (税込)",
    chips: ["メッセージ機能", "お知らせ機能", "スマホアプリ"],
  },
  {
    title: "請求書管理プラン",
    image: (
      <StaticImage src="../../static/images/billPlanButtonLogo.png" alt={""} />
    ),
    priceText: "4,400 円／月 (税込)",
    chips: ["請求書作成機能", "入金管理機能", "スマホアプリ"],
  },
]

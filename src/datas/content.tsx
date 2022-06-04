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
    image: <StaticImage src="../../static/images/details/createInvoice.png" width={280} height={141} alt={""} />,
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
      image: <StaticImage src="../../static/images/details/createInvoice.png" alt={""} />,
      title: "請求書の作成",
      detail:
        `保護者向けの毎月の請求書を簡単に請求書の作成と管理を行うことが出来ます。
        さらにミルコマで作成した請求書はボタン一つで保護者アプリに送信できます。
        請求書の郵送にかかる手間や経費を0にすることができます。
        割引を細かく設定することができるので、複雑な料金設定にも対応できます。
        作成した請求書はCSV出力でき、銀行のEBサービスへアップロードすることで
        引き落とし額を入力する手間と手入力による金額の打ち間違いをなくすことが出来ます。`,
    },
    {
      image: <StaticImage src="../../static/images/details/inMoneyManage.png" alt={""} />,
      title: "入金管理（開発中）",
      detail: `保護者からの入金状況を管理することができる機能です。
集金状況の確認や保護者から請求情報についてお問合せがあった際に素早く対応することができるようになります。
入金に過不足のあったお金を自動で繰越処理をする機能や請求書の一括入力に対応予定です。`,
    },
  ],
]

//Q and A
export const questions: Array<QandA> = [
  {
    question: "料金体系はどのようになっていますか？",
    answer: "一校舎につきに利用される機能の金額が加算されます。\nまた、利用料金・組み合わせて選べるプランでも詳細をご確認いただけます。",
    detailLink: null
  },
  {
    question: `クラウドのセキュリティは大丈夫ですか？
    個人情報(名前、住所、成績)が盗まれないか`,
    answer: `ミルコマはAmazon Web Serviceを用いてクラウド運用しており、各システムは定期的なセキュリティアップデートを行っています。
    
    また、お客様のデータを保存しているデータベースはAES-256 暗号化アルゴリズムを使用して暗号化されています。
    
    データの転送時には、システム間を行き来するデータも暗号化がされています。`,
    detailLink: "https://aws.amazon.com/jp/security/"
  },
  {
    question: `操作方法がわからない場合はどうすれば良いですか？`,
    answer: "ミルコマご利用ガイドをご覧いただき、それでも解決しない場合には、お問い合わせよりご連絡ください。!",
    detailLink: null
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

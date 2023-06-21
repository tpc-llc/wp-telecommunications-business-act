import { Anchor, Box, Text } from '@mantine/core'
import { ServiceClassification } from './ServiceClassification'
import { type ServicePolicy } from './ServicePolicy'
import { SendInfoExample } from './SendInfoExample'

export const ServiceOfficialPolicies: Record<string, ServicePolicy> = {
  'google-analytics': {
    uid: 'google-analytics',
    classification: ServiceClassification.accessAnalysis,
    companyName: 'グーグル合同会社',
    verified: true,
    serviceName: 'Google Analytics',
    serviceLink: 'https://analytics.google.com/analytics/web',
    optoutLink: 'https://tools.google.com/dlpage/gaoptout/',
    privacyPolicyLink: 'https://policies.google.com/privacy',
    purpose: (
            <Box>
                <Text>Google Analyticsはページの閲覧回数をはじめ、閲覧者のデバイスや地域などのページ改善に役立つ情報を提供・分析する機能を提供しています。</Text>
                <Text>Google Analyticsを使用して、サイト横断的に個人を特定し利用者を追跡することはできません。</Text>
            </Box>
    ),
    sendInfoExamples: [
      SendInfoExample.deviceIdentifier,
      SendInfoExample.ipAddress,
      SendInfoExample.screenUrl,
      SendInfoExample.screenTitle,
      SendInfoExample.previousScreenUrl,
      SendInfoExample.accessDatetime,
      SendInfoExample.userAgent,
      SendInfoExample.screenSize
    ]
  },
  'amazon-associate': {
    uid: 'amazon-associate',
    classification: ServiceClassification.advertising,
    companyName: 'アマゾンジャパン合同会社',
    verified: true,
    serviceName: 'Amazonアソシエイトプログラム',
    serviceLink: 'https://affiliate.amazon.co.jp/',
    optoutLink: 'https://www.amazon.com/adprefs',
    privacyPolicyLink: 'https://www.amazon.com/gp/help/customer/display.html?ie=UTF8&nodeId=468496',
    purpose: (
            <Box>
                <Text>アソシエイトパートナーの利用目的：閲覧の傾向や履歴の分析のため、広告効果の分析のため</Text>
                <Text>送信先の利用目的：自社の広告宣伝を目的とした広告情報の掲載のため、ウェブサイトやアプリの監視のため</Text>
            </Box>
    ),
    sendInfoExamples: [
      SendInfoExample.screenUrl,
      SendInfoExample.screenTitle,
      SendInfoExample.accessDatetime,
      SendInfoExample.userAgent,
      SendInfoExample.screenSize
    ]
  },
  'google-display-and-video-360': {
    uid: 'google-display-and-video-360',
    classification: ServiceClassification.advertising,
    companyName: 'グーグル合同会社',
    verified: true,
    serviceName: 'Display & Video 360',
    serviceLink: 'https://support.google.com/displayvideo/answer/9059464?hl=ja&ref_topic=9059505&sjid=6376801587938218335-AP',
    optoutLink: 'https://adssettings.google.com/anonymous',
    privacyPolicyLink: 'https://policies.google.com/technologies/ads',
    purpose: (
            <Box>
                <Text>広告の配信とレンダリング、広告のパーソナライズ、ユーザーへの広告表示回数の制限、広告のミュート、広告の効果測定などの広告目的のためにクッキーを使用しています。</Text>
                <Text>クッキーを使用して、GoogleのサービスまたはGoogle以外の第三者のサイトでの広告の表示、ユーザー活動の測定、キャンペーンのパフォーマンス、Google広告のコンバージョン率の測定を行っています。</Text>
            </Box>
    ),
    sendInfoExamples: [
      SendInfoExample.deviceIdentifier
    ]
  },
  'meta-facebook-ad': {
    uid: 'meta-facebook-ad',
    classification: ServiceClassification.advertising,
    companyName: 'メタ・プラットフォームズ',
    verified: true,
    serviceName: 'Facebook 広告',
    serviceLink: 'https://ja-jp.facebook.com/business/ads',
    optoutLink: 'https://www.facebook.com/settings/?tab=ads',
    privacyPolicyLink: 'https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0',
    purpose: (
            <Box>
                <Text>Facebook広告は、広告などパーソナライズされたエクスペリエンスを提供する目的などで、また、<Anchor href="https://www.facebook.com/privacy/policy">こちら</Anchor>に詳細を記載するその他の目的で、取得した情報を使用します。</Text>
            </Box>
    ),
    sendInfoExamples: [
      SendInfoExample.deviceIdentifier,
      SendInfoExample.ipAddress,
      SendInfoExample.screenUrl,
      SendInfoExample.screenTitle,
      SendInfoExample.previousScreenUrl,
      SendInfoExample.accessDatetime,
      SendInfoExample.userAgent,
      SendInfoExample.screenSize
    ]
  },
  'yahoo-ad': {
    uid: 'yahoo-ad',
    classification: ServiceClassification.accessAnalysis,
    companyName: 'ヤフー株式会社',
    verified: true,
    serviceName: 'Yahoo! 広告',
    serviceLink: 'https://ads-promo.yahoo.co.jp/',
    optoutLink: 'https://btoptout.yahoo.co.jp/optout/index.html',
    privacyPolicyLink: 'https://privacy.yahoo.co.jp/',
    purpose: (
            <Box>
                <Text>Yahoo! 広告ではより適切な広告が表示されるように、お客さまの居住地域、性別、生年月などの情報を利用し、また、お客さまのサービス等のご利用履歴や広告主やパートナーサイトから提供を受けた情報を分析して、独自の基準で推定したお客さまの興味関心に関する情報を利用させていただきます。</Text>
            </Box>
    ),
    sendInfoExamples: [
      SendInfoExample.deviceIdentifier,
      SendInfoExample.ipAddress,
      SendInfoExample.screenUrl,
      SendInfoExample.screenTitle,
      SendInfoExample.previousScreenUrl,
      SendInfoExample.accessDatetime,
      SendInfoExample.userAgent,
      SendInfoExample.screenSize
    ]
  },
  'adobe-analytics': {
    uid: 'adobe-analytics',
    classification: ServiceClassification.accessAnalysis,
    companyName: 'アドビシステムズ株式会社',
    verified: true,
    serviceName: 'Adobe Analytics',
    serviceLink: 'https://business.adobe.com/jp/products/analytics/adobe-analytics.html',
    optoutLink: 'https://www.adobe.com/privacy/opt-out.html',
    privacyPolicyLink: '',
    purpose: (
            <Box>
            </Box>
    ),
    sendInfoExamples: [
      SendInfoExample.deviceIdentifier,
      SendInfoExample.ipAddress,
      SendInfoExample.screenUrl,
      SendInfoExample.screenTitle,
      SendInfoExample.previousScreenUrl,
      SendInfoExample.accessDatetime,
      SendInfoExample.userAgent,
      SendInfoExample.screenSize
    ]
  },
  'google-ad-manager': {
    uid: 'google-ad-manager',
    classification: ServiceClassification.advertising,
    companyName: 'グーグル合同会社',
    verified: true,
    serviceName: 'Google Ad Manager',
    serviceLink: 'https://admanager.google.com/intl/ja/home/',
    optoutLink: 'https://adssettings.google.com/anonymous',
    privacyPolicyLink: 'https://policies.google.com/privacy',
    purpose: (
            <Box>
                <Text>Googleは、広告の配信とレンダリング、広告のパーソナライズ、ユーザーへの広告表示回数の制限、広告のミュート、広告の効果測定などの広告目的のためにクッキーを使用しています。</Text>
                <Text>また、クッキーを使用して、GoogleのサービスまたはGoogle以外の第三者のサイトでの広告の表示、ユーザー活動の測定、キャンペーンのパフォーマンス、Google広告のコンバージョン率の測定を行っています。 </Text>
                <Text>詳細は上記のプライバシーポリシーへのリンクからご確認ください。</Text>
            </Box>
    ),
    sendInfoExamples: [
      SendInfoExample.deviceIdentifier,
      SendInfoExample.ipAddress,
      SendInfoExample.screenUrl,
      SendInfoExample.screenTitle,
      SendInfoExample.previousScreenUrl,
      SendInfoExample.accessDatetime,
      SendInfoExample.userAgent,
      SendInfoExample.screenSize
    ]
  },
  'google-advertisement': {
    uid: 'google-advertisement',
    classification: ServiceClassification.advertising,
    companyName: 'グーグル合同会社',
    verified: true,
    serviceName: 'Google 広告',
    serviceLink: 'https://ads.google.com/intl/ja_jp/home/',
    optoutLink: 'https://adssettings.google.com/anonymous',
    privacyPolicyLink: 'https://policies.google.com/technologies/ads',
    purpose: (
            <Box>
                <Text>Googleは、広告の配信とレンダリング、広告のパーソナライズ、ユーザーへの広告表示回数の制限、広告のミュート、広告の効果測定などの広告目的のためにクッキーを使用しています。</Text>
                <Text>また、クッキーを使用して、GoogleのサービスまたはGoogle以外の第三者のサイトでの広告の表示、ユーザー活動の測定、キャンペーンのパフォーマンス、Google広告のコンバージョン率の測定を行っています。 </Text>
                <Text>詳細は上記のプライバシーポリシーへのリンクからご確認ください。</Text>
            </Box>
    ),
    sendInfoExamples: [
      SendInfoExample.deviceIdentifier,
      SendInfoExample.ipAddress,
      SendInfoExample.screenUrl,
      SendInfoExample.screenTitle,
      SendInfoExample.previousScreenUrl,
      SendInfoExample.accessDatetime,
      SendInfoExample.userAgent,
      SendInfoExample.screenSize
    ]
  },
  'microsoft-advertisement': {
    uid: 'microsoft-advertisement',
    classification: ServiceClassification.accessAnalysis,
    companyName: 'Microsoft',
    verified: true,
    serviceName: 'Microsoft 広告',
    serviceLink: 'https://about.ads.microsoft.com/',
    optoutLink: 'https://account.microsoft.com/privacy/ad-settings/signedout',
    privacyPolicyLink: 'https://privacy.microsoft.com/en-us/privacystatement',
    purpose: (
            <Box>
                <Text>Microsoft は、ユーザーの興味とお気に入り、位置情報、トランザクション、弊社製品の使用方法、検索クエリ、表示したコンテンツなどの情報をもとに、Microsoft.com、Microsoft Start、Bing などにパーソナライズされた広告を配信しています。</Text>
                <Text>また、広告主は、Microsoft が広告主のサイトやアプリでの行動履歴などの情報を収集できるように、自社のサイト上に Web ビーコン（情報収集モジュール）を配置するか、類似のテクノロジを使用することを選択でき、弊社は、広告主に代わってこのデータを広告の提供に使用します。</Text>
                <Text>たとえば、Microsoft Start で自動車に関するコンテンツを表示すると、車に関する広告が表示される場合があります。Bing で「シアトルにあるピザ屋」を検索すると、シアトルにあるレストランの広告が検索結果に表示される場合があります。</Text>
            </Box>
    ),
    sendInfoExamples: [
      SendInfoExample.deviceIdentifier,
      SendInfoExample.ipAddress,
      SendInfoExample.screenUrl,
      SendInfoExample.screenTitle,
      SendInfoExample.previousScreenUrl,
      SendInfoExample.accessDatetime,
      SendInfoExample.userAgent,
      SendInfoExample.screenSize
    ]
  },
  'google-floodlight': {
    uid: 'google-floodlight',
    classification: ServiceClassification.accessAnalysis,
    companyName: 'グーグル合同会社',
    verified: true,
    serviceName: 'Floodlight',
    serviceLink: 'https://support.google.com/searchads/answer/7298761?hl=ja',
    optoutLink: 'https://adssettings.google.com/anonymous',
    privacyPolicyLink: 'https://support.google.com/campaignmanager/answer/2839090',
    purpose: (
            <Box>
                <Text>Googleは、広告の配信とレンダリング、広告のパーソナライズ、ユーザーへの広告表示回数の制限、広告のミュート、広告の効果測定などの広告目的のためにクッキーを使用しています。</Text>
                <Text>また、クッキーを使用して、GoogleのサービスまたはGoogle以外の第三者のサイトでの広告の表示、ユーザー活動の測定、キャンペーンのパフォーマンス、Google広告のコンバージョン率の測定を行っています。 </Text>
                <Text>詳細は上記のプライバシーポリシーへのリンクからご確認ください。</Text>
            </Box>
    ),
    sendInfoExamples: [
      SendInfoExample.deviceIdentifier,
      SendInfoExample.ipAddress,
      SendInfoExample.screenUrl,
      SendInfoExample.screenTitle,
      SendInfoExample.previousScreenUrl,
      SendInfoExample.accessDatetime,
      SendInfoExample.userAgent,
      SendInfoExample.screenSize
    ]
  },
  'microsoft-clarity': {
    uid: 'microsoft-clarity',
    classification: ServiceClassification.accessAnalysis,
    companyName: 'Microsoft',
    verified: true,
    serviceName: 'Clarity',
    serviceLink: 'https://clarity.microsoft.com/',
    optoutLink: 'https://account.microsoft.com/privacy/ad-settings/signedout',
    privacyPolicyLink: 'https://privacy.microsoft.com/en-us/privacystatement',
    purpose: (
            <Box>
                <Text>本サービスは、導入サイトのお客様がウェブサイトをどのように利用し、どのように交流するかを把握し、製品やサービスの改善とマーケティングを行う機能を提供しています。</Text>
                <Text>ウェブサイトの利用データは、ファーストおよびサードパーティのCookieやその他のトラッキング技術を使用して取得され、製品/サービスの人気やオンラインアクティビティを判断します。</Text>
                <Text>さらに、当社は、この情報をサイトの最適化、不正行為/セキュリティ目的、および広告のために使用します。</Text>
                <Text>マイクロソフトがお客様のデータをどのように収集し、使用するかについての詳細は、以下のマイクロソフトのプライバシーポリシーをご覧ください。</Text>
            </Box>
    ),
    sendInfoExamples: [
      SendInfoExample.deviceIdentifier,
      SendInfoExample.ipAddress,
      SendInfoExample.screenUrl,
      SendInfoExample.screenTitle,
      SendInfoExample.previousScreenUrl,
      SendInfoExample.accessDatetime,
      SendInfoExample.userAgent,
      SendInfoExample.screenSize,
      SendInfoExample.eventOnScreen
    ]
  },
  'tiktok-analytics': {
    uid: 'tiktok-analytics',
    classification: ServiceClassification.accessAnalysis,
    companyName: 'ByteDance株式会社',
    verified: true,
    serviceName: 'TikTok Analytics',
    serviceLink: 'https://www.tiktok.com/business/ja',
    privacyPolicyLink: 'https://www.tiktok.com/legal/page/us/privacy-policy/en',
    purpose: (
            <Box>
                <Text>当社は、お客様の情報を、本プラットフォームの改善、サポート、管理、お客様が本プラットフォームの機能を使用できるようにするため、および当社の利用規約を履行し執行するために使用します。</Text>
                <Text>また、当社は、特に、お客様への提案の表示、プラットフォームの宣伝、およびお客様の広告体験のカスタマイズのためにお客様の情報を使用する場合があります。</Text>
            </Box>
    ),
    sendInfoExamples: [
      SendInfoExample.deviceIdentifier,
      SendInfoExample.ipAddress,
      SendInfoExample.screenUrl,
      SendInfoExample.screenTitle,
      SendInfoExample.previousScreenUrl,
      SendInfoExample.accessDatetime,
      SendInfoExample.userAgent,
      SendInfoExample.screenSize
    ]
  },
  'yahoo-analytics': {
    uid: 'yahoo-analytics',
    classification: ServiceClassification.accessAnalysis,
    companyName: 'Yahoo Inc.',
    verified: true,
    serviceName: 'Yahoo Analytics',
    serviceLink: 'https://legal.yahoo.com/us/en/yahoo/privacy/topics/analytics/index.html',
    optoutLink: 'https://legal.yahoo.com/us/en/yahoo/privacy/index.html',
    privacyPolicyLink: 'https://legal.yahoo.com/us/en/yahoo/privacy/index.html',
    purpose: (
            <Box>
                <Text>当社は、当社が保有するお客様に関する情報（当社のサービス上およびサービス外で当社が受け取る情報を含みます）を組み合わせて使用することにより、お客様が当社のサービスをどのように使用し、どのように相互作用しているか、お客様がつながり、興味を持っている人々や事柄を理解し、当社のサービスを提供、パーソナライズ、および改善することができます。</Text>
            </Box>
    ),
    sendInfoExamples: [
      SendInfoExample.deviceIdentifier,
      SendInfoExample.ipAddress,
      SendInfoExample.screenUrl,
      SendInfoExample.screenTitle,
      SendInfoExample.previousScreenUrl,
      SendInfoExample.accessDatetime,
      SendInfoExample.userAgent,
      SendInfoExample.screenSize
    ]
  },
  'yahoo-dot-tags': {
    uid: 'yahoo-dot-tags',
    classification: ServiceClassification.accessAnalysis,
    companyName: 'Yahoo Inc.',
    verified: true,
    serviceName: 'Yahoo Dot Tags',
    serviceLink: 'https://developer.yahooinc.com/native/guide/v1-api/dottags/',
    purpose: (
            <Box>
                <Text>当社は、当社が保有するお客様に関する情報（当社のサービス上およびサービス外で当社が受け取る情報を含みます）を組み合わせて使用することにより、お客様が当社のサービスをどのように使用し、どのように相互作用しているか、お客様がつながり、興味を持っている人々や事柄を理解し、当社のサービスを提供、パーソナライズ、および改善することができます。</Text>
            </Box>
    ),
    sendInfoExamples: [
      SendInfoExample.deviceIdentifier,
      SendInfoExample.ipAddress,
      SendInfoExample.screenUrl,
      SendInfoExample.screenTitle,
      SendInfoExample.previousScreenUrl,
      SendInfoExample.accessDatetime,
      SendInfoExample.userAgent,
      SendInfoExample.screenSize
    ]
  },
  'oracle-bluekai': {
    uid: 'oracle-bluekai',
    classification: ServiceClassification.accessAnalysis,
    companyName: 'Oracle Corporation',
    verified: true,
    serviceName: 'Oracle Bluekai',
    serviceLink: 'https://www.oracle.com/jp/cx/marketing/data-management-platform/',
    optoutLink: 'https://datacloudoptout.oracle.com/',
    privacyPolicyLink: 'https://www.oracle.com/legal/privacy/advertising-privacy-policy.html',
    purpose: (
            <Box>
                <Text>ORACLE（Bluekai）では、Cookie等の技術を利用し、て収集した情報を分析し、お客様に関するパーソナルデータをインタレスト・セグメントまたはプロファイルに関連付け、以下の目的で利用しています。</Text>
                <Text>オラクルの広告の顧客およびパートナーが、お客様の関心に基づき、お客様に製品やサービスを販売できるようにするため。 </Text>
                <Text>オラクル製品およびサービスの使用、機能および性能の分析、開発、改善および最適化を行うため。 </Text>
                <Text>（インタレスト・セグメントとは、共通の行動や嗜好を持つ消費者の特定のグループ。例：ハワイ旅行特集のマーケット。） </Text>
                <Text>（プロファイルとは、特定の消費者やデバイス、または共通の属性を持つ複数の消費者やデバイスに関する属性のセット。例：年齢層25-55歳、冒険好きな旅行者、サーフィン愛好家。）</Text>
            </Box>
    ),
    sendInfoExamples: [
      SendInfoExample.deviceIdentifier,
      SendInfoExample.ipAddress,
      SendInfoExample.screenUrl,
      SendInfoExample.screenTitle,
      SendInfoExample.previousScreenUrl,
      SendInfoExample.accessDatetime,
      SendInfoExample.userAgent,
      SendInfoExample.screenSize
    ]
  },
  'adobe-audience-manager': {
    uid: 'adobe-audience-manager',
    classification: ServiceClassification.accessAnalysis,
    companyName: 'アドビシステムズ株式会社',
    verified: true,
    serviceName: 'Adobe Audience Manager',
    serviceLink: 'https://business.adobe.com/jp/products/audience-manager/adobe-audience-manager.html',
    optoutLink: 'https://www.adobe.com/privacy/opt-out.html',
    privacyPolicyLink: 'https://www.adobe.com/privacy/experience-cloud.html',
    purpose: (
            <Box>
                <Text>Adobe Experience Cloud（Adobe Audience Managerも含まれます）は、企業がウェブサイト、アプリ、ソーシャルメディアの管理・最適化・パーソナライズを行うソリューションを提供します。</Text>
                <Text>4つのカテゴリ（計測、パーソナライゼーション、コンテンツ管理、広告ソリューション）があり、顧客のウェブ利用を理解・最適化するために使用されます。</Text>
                <Text>収集される情報は、閲覧履歴、デバイス情報、IPアドレス、位置情報などで、クッキーやモバイルアプリ、ソーシャルメディアを通じて収集されます。</Text>
                <Text>これらの情報は、コンテンツ管理とパーソナライゼーションの改善に役立ちます。</Text>
            </Box>
    ),
    sendInfoExamples: [
      SendInfoExample.deviceIdentifier,
      SendInfoExample.ipAddress,
      SendInfoExample.screenUrl,
      SendInfoExample.screenTitle,
      SendInfoExample.previousScreenUrl,
      SendInfoExample.accessDatetime,
      SendInfoExample.userAgent,
      SendInfoExample.screenSize
    ]
  },
  'adobe-experience-cloud-id-service': {
    uid: 'adobe-experience-cloud-id-service',
    classification: ServiceClassification.accessAnalysis,
    companyName: 'アドビシステムズ株式会社',
    verified: true,
    serviceName: 'Adobe Experience Cloud ID',
    serviceLink: 'https://experienceleague.adobe.com/docs/id-service/using/home.html?lang=ja-JP',
    optoutLink: 'https://www.adobe.com/privacy/opt-out.html',
    privacyPolicyLink: 'https://www.adobe.com/privacy/experience-cloud.html',
    purpose: (
            <Box>
                <Text>Adobe Experience Cloud（Adobe Audience Managerも含まれます）は、企業がウェブサイト、アプリ、ソーシャルメディアの管理・最適化・パーソナライズを行うソリューションを提供します。</Text>
                <Text>4つのカテゴリ（計測、パーソナライゼーション、コンテンツ管理、広告ソリューション）があり、顧客のウェブ利用を理解・最適化するために使用されます。</Text>
                <Text>収集される情報は、閲覧履歴、デバイス情報、IPアドレス、位置情報などで、クッキーやモバイルアプリ、ソーシャルメディアを通じて収集されます。</Text>
                <Text>これらの情報は、コンテンツ管理とパーソナライゼーションの改善に役立ちます。</Text>
            </Box>
    ),
    sendInfoExamples: [
      SendInfoExample.deviceIdentifier,
      SendInfoExample.ipAddress,
      SendInfoExample.screenUrl,
      SendInfoExample.screenTitle,
      SendInfoExample.previousScreenUrl,
      SendInfoExample.accessDatetime,
      SendInfoExample.userAgent,
      SendInfoExample.screenSize
    ]
  },
  'google-plus': {
    uid: 'google-plus',
    classification: ServiceClassification.SNSPlugin,
    companyName: 'グーグル合同会社',
    verified: true,
    serviceName: 'Google+',
    serviceLink: 'https://support.google.com/googlecurrents/answer/9217723?hl=ja',
    privacyPolicyLink: 'https://policies.google.com/privacy',
    purpose: (
            <Box>
                <Text>このサービスが設置されたウェブサービスやアプリからの反応情報を分析し、当社サービス上に表示するための機能を提供しています。</Text>
                <Text>このサービスを通じて収集された情報は、ウェブサイトやアプリを横断して統合され、閲覧者の行動や性別などの属性を分析することで、閲覧者の興味関心や広告主のターゲットに合わせた広告の配信および広告効果の測定、閲覧者に合わせたコンテンツの配信等に用いられます。</Text>
            </Box>
    ),
    sendInfoExamples: [
      SendInfoExample.deviceIdentifier,
      SendInfoExample.ipAddress,
      SendInfoExample.screenUrl,
      SendInfoExample.screenTitle,
      SendInfoExample.previousScreenUrl,
      SendInfoExample.accessDatetime,
      SendInfoExample.userAgent,
      SendInfoExample.screenSize,
      SendInfoExample.eventOnScreen
    ]
  },
  'pinterest-plugin': {
    uid: 'pininterest-plugin',
    classification: ServiceClassification.SNSPlugin,
    companyName: 'Pinterest, Inc.',
    verified: true,
    serviceName: 'Pinterest',
    serviceLink: 'https://business.pinterest.com/ja',
    optoutLink: 'https://help.pinterest.com/article/personalization-and-data',
    privacyPolicyLink: 'https://policy.pinterest.com/privacy-policy',
    purpose: (
            <Box>
                <Text>Pinterest は正当な利益のために、別のサイトでのユーザーの行動をもとに、収集した情報を使用して Pinterest のユーザーエクスペリエンスをカスタマイズしています。</Text>
                <Text>例えば、エレキギターのオンラインストアにアクセスしたことのあるユーザーには、ギターのピンをおすすめする場合があります。</Text>
            </Box>
    ),
    sendInfoExamples: [
      SendInfoExample.deviceIdentifier,
      SendInfoExample.ipAddress,
      SendInfoExample.screenUrl,
      SendInfoExample.screenTitle,
      SendInfoExample.previousScreenUrl,
      SendInfoExample.accessDatetime,
      SendInfoExample.userAgent,
      SendInfoExample.screenSize,
      SendInfoExample.eventOnScreen
    ]
  },
  'pocket-plugin': {
    uid: 'pocket-plugin',
    classification: ServiceClassification.SNSPlugin,
    companyName: 'Read It Later, Inc',
    verified: true,
    serviceName: 'Pocket',
    serviceLink: 'https://getpocket.com/ja/',
    purpose: (
            <Box>
                <Text>このサービスが設置されたウェブサービスやアプリからの反応情報を分析し、当社サービス上に表示するための機能を提供しています。 </Text>
                <Text>このサービスを通じて収集された情報は、ウェブサイトやアプリを横断して統合され、閲覧者の行動や性別などの属性を分析することで、閲覧者の興味関心や広告主のターゲットに合わせた広告の配信および広告効果の測定、閲覧者に合わせたコンテンツの配信等に用いられます。</Text>
            </Box>
    ),
    sendInfoExamples: [
      SendInfoExample.deviceIdentifier,
      SendInfoExample.ipAddress,
      SendInfoExample.screenUrl,
      SendInfoExample.screenTitle,
      SendInfoExample.previousScreenUrl,
      SendInfoExample.accessDatetime,
      SendInfoExample.userAgent,
      SendInfoExample.screenSize
    ]
  },
  'twitter-development-platform': {
    uid: 'twitter-development-platform',
    classification: ServiceClassification.SNSPlugin,
    companyName: 'X Corp.',
    verified: true,
    serviceName: 'Twitter Development Platform',
    serviceLink: 'https://developer.twitter.com/ja',
    privacyPolicyLink: 'https://twitter.com/en/privacy',
    purpose: (
            <Box>
                <Text>Twitter Developer Platformはツイート、ボタン、タイムラインなどのTwitterコンテンツをウェブサイトやアプリに組み込む機能を提供しています。</Text>
                <Text>これらを閲覧すると、Twitterは、より関連性のあるコンテンツおよび広告をユーザーに表示したり、フォローすべき人およびトピックを提案したり、ユーザーが関連会社、第三者アプリ、サービスを発見する手助けをすることを可能にしたりするなど、ユーザーがTwitterでより良い経験をすることができるよう当社のプロダクトおよびサービスを改善およびパーソナライズするために当社が収集した情報を利用します。</Text>
            </Box>
    ),
    sendInfoExamples: [
      SendInfoExample.deviceIdentifier,
      SendInfoExample.ipAddress,
      SendInfoExample.screenUrl,
      SendInfoExample.screenTitle,
      SendInfoExample.previousScreenUrl,
      SendInfoExample.accessDatetime,
      SendInfoExample.userAgent,
      SendInfoExample.screenSize
    ]
  },
  'meta-facebook-login': {
    uid: 'meta-facebook-login',
    classification: ServiceClassification.SNSPlugin,
    companyName: 'メタ・プラットフォームズ',
    verified: true,
    serviceName: 'Facebookログイン',
    serviceLink: 'https://ja-jp.facebook.com/',
    privacyPolicyLink: 'https://www.facebook.com/privacy/policy/',
    purpose: (
            <Box>
                <Text>Metaでは、「いいね！」ボタンやFacebookログイン等のサービスを提供しており、これらサービスが設置されたウェブサービスやアプリからの反応情報を当社サービス（Facebookやインスタグラム）上に表示し、分析するための機能を提供しています。</Text>
                <Text>このサービスを通じて収集された情報は、ウェブサイトやアプリを横断して統合され、閲覧者の行動や性別などの属性を分析することで、閲覧者の興味関心や広告主のターゲットに合わせた広告の配信および広告効果の測定、閲覧者に合わせたコンテンツの配信等に用いられます。</Text>
            </Box>
    ),
    sendInfoExamples: [
      SendInfoExample.deviceIdentifier,
      SendInfoExample.ipAddress,
      SendInfoExample.screenUrl,
      SendInfoExample.screenTitle,
      SendInfoExample.previousScreenUrl,
      SendInfoExample.accessDatetime,
      SendInfoExample.userAgent,
      SendInfoExample.screenSize
    ]
  },
  'wordpress-dotcom': {
    uid: 'wordpress-dotcom',
    classification: ServiceClassification.webAnalytics,
    companyName: 'Automattic Inc.',
    verified: true,
    serviceName: 'wordpress.com',
    serviceLink: 'https://wordpress.com/',
    optoutLink: '',
    privacyPolicyLink: '',
    purpose: (
            <Box>
                <Text>ウェブサイトの運営を効率化するために、ウェブサイトに表示されるコンテンツやデザインを管理するための機能を提供しています。</Text>
            </Box>
    ),
    sendInfoExamples: [
      SendInfoExample.deviceIdentifier,
      SendInfoExample.ipAddress,
      SendInfoExample.screenUrl,
      SendInfoExample.screenTitle,
      SendInfoExample.previousScreenUrl,
      SendInfoExample.accessDatetime,
      SendInfoExample.userAgent,
      SendInfoExample.screenSize
    ]
  },
  'bootstrap-cdn': {
    uid: 'bootstrap-cdn',
    classification: ServiceClassification.webAnalytics,
    companyName: 'BootstrapCDN',
    verified: true,
    serviceName: 'BootstrapCDN',
    serviceLink: 'https://www.bootstrapcdn.com/',
    purpose: (
            <Box>
                <Text>ウェブサイトやアプリに表示される画像などのコンテンツをホスティングし、閲覧地域や回線種別等の閲覧環境によってコンテンツ配信経路等を変更することにより、コンテンツの配信を最適化するための機能を提供しています。</Text>
            </Box>
    ),
    sendInfoExamples: [
      SendInfoExample.deviceIdentifier,
      SendInfoExample.ipAddress,
      SendInfoExample.screenUrl,
      SendInfoExample.screenTitle,
      SendInfoExample.accessDatetime,
      SendInfoExample.userAgent
    ]
  },
  'google-amp': {
    uid: 'google-amp',
    classification: ServiceClassification.webAnalytics,
    companyName: 'グーグル合同会社',
    verified: true,
    serviceName: 'AMP',
    serviceLink: 'https://support.google.com/google-ads/answer/7496737?hl=ja',
    privacyPolicyLink: 'https://www.google.com/intl/en/policies/privacy/',
    purpose: (
            <Box>
                ウェブサイトに必要な機能を補助するためのサービスを提供しています。
            </Box>
    ),
    sendInfoExamples: [
      SendInfoExample.ipAddress,
      SendInfoExample.screenUrl,
      SendInfoExample.accessDatetime,
      SendInfoExample.userAgent
    ]
  },
  'google-map': {
    uid: 'google-map',
    classification: ServiceClassification.webAnalytics,
    companyName: 'グーグル合同会社',
    verified: true,
    serviceName: 'Google Map',
    serviceLink: 'https://www.google.co.jp/maps/?hl=ja',
    privacyPolicyLink: 'https://policies.google.com/privacy',
    purpose: (
            <Box>
                <Text>Google Mapsを導入したウェブサイトやアプリ上に、地図や地図上における利用者の現在地の情報を表示するための機能を提供しており、収集した情報はサービスの維持・向上、Googleにおける新サービスの開発、カスタマイズした検索結果、カスタマイズされた広告、お客様の Google サービスの利用方法に合わせて提供されるその他の機能などを提供するためにお客様の情報を利用されます。 </Text>
                <Text>また、Google の各種サービスにおいてお客様のさまざまなデバイスから収集した情報を組み合わせることがあります。</Text>
            </Box>
    ),
    sendInfoExamples: [
      SendInfoExample.ipAddress,
      SendInfoExample.screenTitle,
      SendInfoExample.accessDatetime,
      SendInfoExample.userAgent,
      SendInfoExample.location
    ]
  },
  'google-tag-manager': {
    uid: 'google-tag-manager',
    classification: ServiceClassification.webAnalytics,
    companyName: 'グーグル合同会社',
    verified: true,
    serviceName: 'Google Tag Manager',
    serviceLink: 'https://marketingplatform.google.com/about/tag-manager/',
    privacyPolicyLink: 'https://policies.google.com/privacy',
    purpose: (
            <Box>
                <Text>Google Tag Manager はウェブサイトやアプリで利用される第三者のサービスのプログラムコードを管理し、閲覧者の操作や閲覧ページ、閲覧環境に合わせた最適な第三者サービスを必要に応じて有効化するための機能を提供しています。</Text>
            </Box>
    ),
    sendInfoExamples: [
      SendInfoExample.deviceIdentifier,
      SendInfoExample.ipAddress,
      SendInfoExample.screenUrl,
      SendInfoExample.screenTitle,
      SendInfoExample.accessDatetime,
      SendInfoExample.deviceLanguage,
      SendInfoExample.userAgent,
      SendInfoExample.screenSize,
      SendInfoExample.eventOnScreen
    ]
  },
  'google-youtube': {
    uid: 'google-youtube',
    classification: ServiceClassification.webAnalytics,
    companyName: 'グーグル合同会社',
    verified: true,
    serviceName: 'YouTube',
    serviceLink: 'https://www.youtube.com/',
    privacyPolicyLink: 'https://policies.google.com/privacy',
    purpose: (
            <Box>
                <Text>Youtubeでは、サービスの維持・向上、Googleにおける新サービスの開発、カスタマイズした検索結果、カスタマイズされた広告、お客様の Google サービスの利用方法に合わせて提供されるその他の機能などを提供するためにお客様の情報を利用しています。 </Text>
                <Text>また、Google の各種サービスにおいてお客様のさまざまなデバイスから収集した情報を組み合わせることがあります。</Text>
            </Box>
    ),
    sendInfoExamples: [
      SendInfoExample.deviceIdentifier,
      SendInfoExample.ipAddress,
      SendInfoExample.accessDatetime,
      SendInfoExample.userAgent,
      SendInfoExample.moviePlayInfo
    ]
  },
  'google-recaptcha': {
    uid: 'google-recaptcha',
    classification: ServiceClassification.webAnalytics,
    companyName: 'グーグル合同会社',
    verified: true,
    serviceName: 'reCaptcha',
    serviceLink: 'https://www.google.com/recaptcha/about/',
    privacyPolicyLink: 'https://policies.google.com/privacy',
    purpose: (
            <Box>
                <Text>ウェブサイトやアプリのセキュリティを確保し、また、不正利用等の検知を行い適切な対応を行うための機能を提供しています。</Text>
            </Box>
    ),
    sendInfoExamples: [
      SendInfoExample.ipAddress,
      SendInfoExample.screenUrl,
      SendInfoExample.accessDatetime,
      SendInfoExample.userAgent
    ]
  },
  'openjs-jquery': {
    uid: 'openjs-jquery',
    classification: ServiceClassification.webAnalytics,
    companyName: 'OpenJS Foundation',
    verified: true,
    serviceName: 'jQuery',
    serviceLink: 'https://jquery.com/',
    purpose: (
            <Box>
                <Text>ウェブサイトで利用されるJavaScriptのライブラリ（ウェブサイトの表示に必要なプログラムコード）をホスティングしています。</Text>
            </Box>
    ),
    sendInfoExamples: [
      SendInfoExample.ipAddress,
      SendInfoExample.screenUrl,
      SendInfoExample.accessDatetime,
      SendInfoExample.userAgent
    ]
  },
  sentry: {
    uid: 'sentry',
    classification: ServiceClassification.accessAnalysis,
    companyName: 'sentry',
    verified: true,
    serviceName: 'Sentry',
    serviceLink: 'https://sentry.io/',
    purpose: (
            <Box>
                <Text>ウェブサイトに必要な機能を補助するためのサービスを提供しています。</Text>
            </Box>
    ),
    sendInfoExamples: [
      SendInfoExample.ipAddress,
      SendInfoExample.screenUrl,
      SendInfoExample.accessDatetime,
      SendInfoExample.userAgent
    ]
  },
  vimeo: {
    uid: 'vimeo',
    classification: ServiceClassification.webAnalytics,
    companyName: 'Vimeo, Inc.',
    verified: true,
    serviceName: 'Vimeo',
    serviceLink: 'https://vimeo.com/',
    privacyPolicyLink: 'https://vimeo.com/privacy',
    purpose: (
            <Box>
                <Text>ウェブサイトやアプリ上で動画を再生するための機能を提供し、動画の再生頻度や再生状況を解析する機能を提供しています。</Text>
            </Box>
    ),
    sendInfoExamples: [
      SendInfoExample.deviceIdentifier,
      SendInfoExample.moviePlayInfo,
      SendInfoExample.ipAddress,
      SendInfoExample.screenTitle,
      SendInfoExample.accessDatetime,
      SendInfoExample.userAgent
    ]
  },
  'twitter-link-service': {
    uid: 'twitter-link-service',
    classification: ServiceClassification.accessAnalysis,
    companyName: 'X Corp.',
    verified: true,
    serviceName: 'Twitter Link Service',
    serviceLink: 'https://help.twitter.com/ja/using-twitter/url-shortener',
    purpose: (
            <Box>
                <Text>ウェブサイトに必要な機能を補助するためのサービスを提供しています。</Text>
            </Box>
    ),
    sendInfoExamples: [
      SendInfoExample.ipAddress,
      SendInfoExample.screenUrl,
      SendInfoExample.accessDatetime,
      SendInfoExample.userAgent
    ]
  }
}

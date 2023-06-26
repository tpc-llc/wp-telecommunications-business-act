import React from 'react'
import {
    Stack,
    Heading,
    Text
} from '@chakra-ui/react'

const Usage: React.FC = () => {
    return (
        <Stack
            spacing={4}
        >
            <Heading as="h3" size="lg">使い方</Heading>
            <Heading as="h4" size="md">1. 利用しているサービスにチェックを入れる</Heading>
            <Text>お使いのサービスにチェックを入れましょう！</Text>
            <Heading as="h4" size="md">2. プライバシーポリシーなどのページにショートコードを挿入する</Heading>
            <Text>利用中のサービスを表示したいページに[電気通信事業法]というショートコードを挿入してください。</Text>
            <Text>そのショートコード上に「1. 利用しているサービスにチェックを入れる」で選択したサービスが表示されます。</Text>
            <Heading as="h4" size="md">3. これで完了です！もし気に入った場合はTwitterなどでの拡散をお願いします！</Heading>
            <Text>改正電気通信事業法は2023年6月16日に施行されたので、未対応サイトが依然として多いです。</Text>
            <Text>加えて、このプラグインは無料なので、サービスが維持できるかどうかは、あなたの拡散に懸かっています。</Text>
            <Text>ぜひこちらのボタン（ツイート画面が立ち上がります）をクリックして、拡散にご協力いただけましたら幸いです。</Text>
            <Text>また、対応リストに追加して欲しいサービスがございましたら、こちらのフォームよりお問い合わせください。</Text>
        </Stack>
    )
}

export default Usage
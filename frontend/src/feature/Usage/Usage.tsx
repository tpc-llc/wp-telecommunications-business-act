import React from 'react'
import {
    Stack,
    Heading,
    Text,
    Button,
    HStack
} from '@chakra-ui/react'
import { FaTwitter, FaWpforms } from 'react-icons/fa'

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
            <Button
                colorScheme={'blue'}
                w={'24vw'}
                as={'a'}
                target='_blank'
                textDecoration={'none'}
                _hover={{
                    color: 'gray.400',
                    textDecoration: 'none'
                }}
                href="https://twitter.com/intent/tweet?text=無料のWordPressプラグイン「https://改正電気通信事業法.jp」を使って、3分で改正電気通信事業法に対応完了しました！&hashtags=改正電気通信事業法"
            >
                <HStack>
                    <FaTwitter />
                    <Text>ツイートして拡散に協力する</Text>
                </HStack>
            </Button>
            <Heading as="h4" size="md">4. 対応リストにサービスの追加を依頼する</Heading>
            <Text>対応リストに追加して欲しいサービスがございましたら、こちらのフォームよりお問い合わせください。</Text>
            <Button
                colorScheme={'purple'}
                w={'24vw'}
                as={'a'}
                target='_blank'
                textDecoration={'none'}
                _hover={{
                    color: 'gray.400',
                    textDecoration: 'none'
                }}
                href="https://forms.gle/1ngSSaUidogXWGmDA"
            >
                <HStack>
                    <FaWpforms />
                    <Text>サービスの追加を依頼する</Text>
                </HStack>
            </Button>

        </Stack>
    )
}

export default Usage
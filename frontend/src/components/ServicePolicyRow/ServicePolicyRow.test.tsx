import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MantineProvider } from '@mantine/styles'
import { Box, Text } from '@mantine/core'
import ServicePolicyRow from './ServicePolicyRow'

test('全ての要素が存在する', () => {
  render(
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <ServicePolicyRow
                uid="google-analytics"
                classification="アクセス解析"
                companyName="Google LLC"
                verified={true}
                serviceName="Google Analytics"
                serviceLink="https://analytics.google.com/analytics/web"
                optoutLink="https://tools.google.com/dlpage/gaoptout/"
                privacyPolicyLink="https://policies.google.com/privacy"
                purpose={
                    <Box>
                        <Text>Google Analyticsはページの閲覧回数をはじめ、閲覧者のデバイスや地域などのページ改善に役立つ情報を提供・分析する機能を提供しています。</Text>
                        <Text>Google Analyticsを使用して、サイト横断的に個人を特定し利用者を追跡することはできません。</Text>
                    </Box>
                }
                sendInfoExamples={[
                  'デバイス識別子',
                  'IPアドレス',
                  '画面URL',
                  '画面タイトル',
                  '前画面URL',
                  'アクセス日時',
                  'ユーザーエージェント',
                  '画面サイズ'
                ]}
            />
        </MantineProvider>
  )
  screen.debug()
  expect(screen.getByText('アクセス解析')).toBeInTheDocument()
  expect(screen.getByText('Google LLC')).toBeInTheDocument()
  expect(screen.getByText('Google Analytics')).toBeInTheDocument()
})

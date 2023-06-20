import { Box, Text } from '@mantine/core'
import { ServiceClassification } from './ServiceClassification'
import { type ServicePolicy } from './ServicePolicy'
import { SendInfoExample } from './SendInfoExample'

export const ServiceOfficialPolicies: { [key: string]: ServicePolicy } = {
    'google-analytics': {
        uid: 'google-analytics',
        classification: ServiceClassification.accessAnalysis,
        companyName: 'Google LLC',
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
    }
}

import React from 'react'
import { Box, Text, Link } from '@chakra-ui/react'

export interface ServicePolicyPrivacyPolicyProps {
  privacyPolicyLink?: string
}

const ServicePolicyPrivacyPolicy: React.FC<ServicePolicyPrivacyPolicyProps> = (props: ServicePolicyPrivacyPolicyProps) => {
  return (
        <Box>
            <Text>
                {props.privacyPolicyLink != null
                  ? <Link
                        href={props.privacyPolicyLink}
                        color={'#1E50B5'}
                    >
                        プライバシーポリシー
                    </Link>
                  : '提供なし'
                }
            </Text>
        </Box>
  )
}

export default ServicePolicyPrivacyPolicy

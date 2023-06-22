import React from 'react'
import { Box, Text, Link } from '@chakra-ui/react'

export interface ServicePolicyOptoutProps {
  optoutLink?: string
}

const ServicePolicyOptout: React.FC<ServicePolicyOptoutProps> = (props: ServicePolicyOptoutProps) => {
  return (
    <Box>
      <Text>
        {props.optoutLink != null
          ? (
            <Link href={props.optoutLink} color={'#1E50B5 !important;'}>
              オプトアウト
            </Link>
            )
          : (
              '提供なし'
            )}
      </Text>
    </Box>
  )
}

export default ServicePolicyOptout

import React from 'react'
import { Box, Text, HStack } from '@chakra-ui/react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

export interface ServicePolicyShowMoreProps {
  opened: boolean
  toggle: () => void
}

const ServicePolicyShowMore: React.FC<ServicePolicyShowMoreProps> = (props: ServicePolicyShowMoreProps) => {
  return (
        <Box
            onClick={props.toggle}
        >
            <HStack
            >
                <Text
                    color={'#1E50B5'}
                >
                    外部送信情報はこちら
                </Text>
                {props.opened
                  ? <AiOutlineMinus />
                  : <AiOutlinePlus />}
            </HStack>
        </Box>
  )
}

export default ServicePolicyShowMore

import React from 'react'
import { Box, Text, HStack } from '@chakra-ui/react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

export interface ServicePolicyShowMoreProps {
  opened: boolean
  toggle: () => void
}

const ServicePolicyShowMore: React.FC<ServicePolicyShowMoreProps> = (props: ServicePolicyShowMoreProps) => {
  return (
    <HStack
      spacing={0}
      onClick={props.toggle}
      _hover={
        {
          cursor: 'pointer'
        }
      }
    >
      <Text
        color={'#1E50B5'}
      >
        外部送信情報はこちら
      </Text>
      {props.opened
        ? (
          <Box
            w={'1rem'}
            h={'1rem'}
          >
            <AiOutlineMinus color={'#1E50B5'} />
          </Box>
          )
        : (
          <Box
            w={'1rem'}
            h={'1rem'}
          >
            <AiOutlinePlus color={'#1E50B5'} />
          </Box>
          )
      }
    </HStack>
  )
}

export default ServicePolicyShowMore

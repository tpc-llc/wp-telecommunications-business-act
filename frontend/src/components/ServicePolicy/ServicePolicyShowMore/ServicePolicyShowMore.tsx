import React from 'react'
import { Flex, Text, HStack } from '@chakra-ui/react'
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
          <Flex
            w={'1rem'}
            h={'1rem'}
            justify={'center'}
            align={'center'}
          >
            <AiOutlineMinus color={'#1E50B5'} />
          </Flex>
          )
        : (
          <Flex
            w={'1rem'}
            h={'1rem'}
            justify={'center'}
            align={'center'}
          >
            <AiOutlinePlus color={'#1E50B5'} />
          </Flex>
          )
      }
    </HStack>
  )
}

export default ServicePolicyShowMore

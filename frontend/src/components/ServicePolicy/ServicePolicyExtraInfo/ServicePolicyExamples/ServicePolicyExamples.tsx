import React from 'react'
import { Box, Text, UnorderedList, ListItem, Heading } from '@chakra-ui/react'

export interface ServicePolicyExamplesProps {
    sendInfoExamples: string[]
}

const ServicePolicyExamples: React.FC<ServicePolicyExamplesProps> = (props: ServicePolicyExamplesProps) => {
    return (
        <Box
        >
            <Heading
                mb={'2 !important'}
                as={'h4'}
                fontSize={'1.2rem'}
            >
                送信情報例
            </Heading>
            <UnorderedList
                m={'0 !important'}
                ml={'8 !important'}
            >
                {props.sendInfoExamples.map((example, index) => (
                    <ListItem
                        key={example + index.toString()}
                        m={0}
                    >
                        <Text>{example}</Text>
                    </ListItem>
                ))}
            </UnorderedList>
        </Box >
    )
}

export default ServicePolicyExamples

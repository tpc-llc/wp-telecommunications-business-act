import React from 'react'
import { Box, Text } from '@chakra-ui/react'

export interface ServicePolicyOthersProps {
  additionalInfo?: React.JSX.Element
}

const ServicePolicyOthers: React.FC<ServicePolicyOthersProps> = (props: ServicePolicyOthersProps) => {
  return (
        <Box>
            {(props.additionalInfo != null)
              ? (
                    <Box>
                        <Text
                            mb={2}
                        >
                            その他
                        </Text>
                        {props.additionalInfo}
                    </Box>
                )
              : null}
        </Box>
  )
}

export default ServicePolicyOthers

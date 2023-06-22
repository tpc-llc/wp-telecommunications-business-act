import React, { useState } from 'react'
import {
    VStack,
    HStack
} from '@chakra-ui/react'

import ServicePolicyClassification from '../ServicePolicyClassification/ServicePolicyClassification'
import ServicePolicyCompanyName from '../ServicePolicyCompanyName/ServicePolicyCompanyName'
import ServicePolicyServiceName from '../ServicePolicyServiceName/ServicePolicyServiceName'
import ServicePolicyOptout from '../ServicePolicyOptout/ServicePolicyOptout'
import ServicePolicyPrivacyPolicy from '../ServicePolicyPrivacyPolicy/ServicePolicyPrivacyPolicy'
import ServicePolicyShowMore from '../ServicePolicyShowMore/ServicePolicyShowMore'
import ServicePolicyExtraInfo from '../ServicePolicyExtraInfo/ServicePolicyExtraInfo'

export interface ServicePolicyRowProps {
    uid: string
    classification: string
    companyName: string
    companyLink?: string
    verified: boolean
    serviceName: string
    serviceLink?: string
    optoutLink?: string
    privacyPolicyText?: string
    privacyPolicyLink?: string
    purpose: React.JSX.Element
    sendInfoExamples: string[]
    additionalInfo?: React.JSX.Element
}

export const ServicePolicyRow: React.FC<ServicePolicyRowProps> = (props: ServicePolicyRowProps) => {
    const [opened, setOpened] = useState(false)
    const toggle = (): void => { setOpened(!opened) }

    return (
        <VStack
            align={'left'}
        >
            <HStack
            >
                <ServicePolicyClassification
                    classification={props.classification}
                />
                <ServicePolicyCompanyName
                    companyName={props.companyName}
                    companyLink={props.companyLink}
                    verified={props.verified}
                />
                <ServicePolicyServiceName
                    serviceName={props.serviceName}
                    serviceLink={props.serviceLink}
                />
                <ServicePolicyOptout
                    optoutLink={props.optoutLink}
                />
                <ServicePolicyPrivacyPolicy
                    privacyPolicyLink={props.privacyPolicyLink}
                />
                <ServicePolicyShowMore
                    opened={opened}
                    toggle={toggle}
                />
            </HStack>
            {opened && (
                <ServicePolicyExtraInfo
                    purpose={props.purpose}
                    sendInfoExamples={props.sendInfoExamples}
                    additionalInfo={props.additionalInfo}
                />
            )}
        </VStack>
    )
}

export default ServicePolicyRow

import React, { useState } from 'react'
import {
  Tr,
  Td,
  Checkbox,
  Flex
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

  useCheckbox: boolean
  selectedServiceOfficialPoliciesUids?: string[]
  handleChangeServiceOfficialPolicyUids?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const ServicePolicyRow: React.FC<ServicePolicyRowProps> = (props: ServicePolicyRowProps) => {
  const [opened, setOpened] = useState(false)
  const toggle = (): void => { setOpened(!opened) }
  const colSpan: number = props.useCheckbox ? 7 : 6

  return (
        <>
            <Tr
                display={['block', 'table-row', 'table-row']}
                borderBottom={'1px solid #3f4245 !important'}
            >
                {props.useCheckbox && props.selectedServiceOfficialPoliciesUids != null && (
                    <Td
                        display={['block', 'table-cell', 'table-cell']}
                        px={4}
                        py={4}
                        verticalAlign={'middle'}
                    >
                        <Flex
                            alignItems={'center'}
                            justifyContent={'center'}
                        >
                            <Checkbox
                                isChecked={props.selectedServiceOfficialPoliciesUids.includes(props.uid)}
                                value={props.uid}
                                onChange={props.handleChangeServiceOfficialPolicyUids} />
                        </Flex>
                    </Td>
                )}
                <Td
                    display={['block', 'table-cell', 'table-cell']}
                    px={4}
                    py={4}
                    verticalAlign={'middle'}
                >
                    <ServicePolicyClassification
                        classification={props.classification}
                    />
                </Td>
                <Td
                    display={['block', 'table-cell', 'table-cell']}
                    px={4}
                    py={4}
                    verticalAlign={'middle'}
                >
                    <ServicePolicyCompanyName
                        companyName={props.companyName}
                        companyLink={props.companyLink}
                        verified={props.verified}
                    />
                </Td>
                <Td
                    display={['block', 'table-cell', 'table-cell']}
                    px={4}
                    py={4}
                    verticalAlign={'middle'}
                >
                    <ServicePolicyServiceName
                        serviceName={props.serviceName}
                        serviceLink={props.serviceLink}
                    />
                </Td>
                <Td
                    display={['block', 'table-cell', 'table-cell']}
                    px={4}
                    py={4}
                    verticalAlign={'middle'}
                >
                    <ServicePolicyOptout
                        optoutLink={props.optoutLink}
                    />
                </Td>
                <Td
                    display={['block', 'table-cell', 'table-cell']}
                    px={4}
                    py={4}
                    verticalAlign={'middle'}
                >
                    <ServicePolicyPrivacyPolicy
                        privacyPolicyLink={props.privacyPolicyLink}
                    />
                </Td>
                <Td
                    display={['block', 'table-cell', 'table-cell']}
                    px={4}
                    py={4}
                    verticalAlign={'middle'}
                >
                    <ServicePolicyShowMore
                        opened={opened}
                        toggle={toggle}
                    />
                </Td>
            </Tr>
            {opened && (
                <Tr
                    display={['block', 'table-row', 'table-row']}
                    backgroundColor={'gray.100'}
                    borderBottom={'1px solid #3f4245 !important'}
                >
                    <Td
                        display={['block', 'table-cell', 'table-cell']}
                        colSpan={colSpan}
                        px={4}
                        py={4}
                        verticalAlign={'middle'}
                    >
                        <ServicePolicyExtraInfo
                            purpose={props.purpose}
                            sendInfoExamples={props.sendInfoExamples}
                            additionalInfo={props.additionalInfo}
                        />
                    </Td>
                </Tr>
            )}
        </>
  )
}

export default ServicePolicyRow

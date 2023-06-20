import type React from 'react'
import { type ServiceClassification } from './ServiceClassification'
import { type SendInfoExample } from './SendInfoExample'

export interface ServicePolicy {
  uid: string
  classification: ServiceClassification
  companyName: string
  companyLink?: string
  verified: boolean
  serviceName: string
  serviceLink?: string
  optoutLink?: string
  privacyPolicyText?: string
  privacyPolicyLink?: string
  purpose: React.JSX.Element
  sendInfoExamples: SendInfoExample[]
  additionalInfo?: React.JSX.Element
}

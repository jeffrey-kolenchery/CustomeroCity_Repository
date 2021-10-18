import React from 'react'
import { Navbar } from '../../components/navbar'
import {
    PageContainer,
} from '../../components/pageContainer'
import {TopSection} from './topSection'
import { Footer } from '../../components/footer'

export function HomePage() {
    return (
        <PageContainer>
            <TopSection>
                <Navbar useTransparent />
            </TopSection>
            <Footer />
        </PageContainer>
    )
}


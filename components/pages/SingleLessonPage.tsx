'use client'
import React from 'react'
import styled from 'styled-components'
import WordLearningItem from '../__features__/WordLearningItem'

export default function SingleLessonPage({ lesson }: any) {
  return (
    <Root>
      <Container>
        <SubTitle>Для початку вивчимо кілька нових слів</SubTitle>
        <WordLearningItem vocabulary={lesson.lessonContent.vocabulary} slug={lesson.slug} />
      </Container>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  margin-top: 40px;
  margin-bottom: 40px;
`

const Container = styled.div`
  display: grid;
  justify-content: center;
`

const SubTitle = styled.h3`
  display: block;
  margin-bottom: 40px;
  text-align: center;
`

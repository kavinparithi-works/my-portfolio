import React from 'react'
import { Container, Section, Reveal } from '../../layout'
import { projects } from '../../../data/projects'
import { ProjectItem } from './ProjectItem'

/**
 * "Selected Works" — a vertical list of project case studies.
 */
export function Work() {
  return (
    <Section id="work" className="py-20">
      <Container>
        <Reveal as="h2" className="mb-[56px] font-barlow text-display font-black uppercase text-ink">
          SELECTED WORKS.
        </Reveal>
        <div className="flex flex-col gap-4">
          {projects.map((project, index) => (
            <ProjectItem key={project.title} index={index} {...project} />
          ))}
        </div>
      </Container>
    </Section>
  )
}

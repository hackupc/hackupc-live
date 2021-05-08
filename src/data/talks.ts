export interface Talk {
  title: string
  speaker: string
  videoUrl: string
}

export const talks: Talk[] = [
  {
    title: 'Avoiding unnecessary testing on children...',
    speaker: 'Toni Soriano',
    videoUrl: 'https://www.youtube.com/embed/IN48ZgR0nGk',
  },
  {
    title:
      'File processing and machine learning for audio classification using Python',
    speaker: 'Guillem Bonilla i Daniel Marín',
    videoUrl: 'https://www.youtube.com/embed/b-3p2qxslws',
  },
  {
    title: 'Language technologies and AI applied to health and medical data',
    speaker: 'Salvador Lima',
    videoUrl: 'https://www.youtube.com/embed/fwdSemp0eqI',
  },
  {
    title: 'Applications of Digital Contact Tracing',
    speaker: 'Jorge Garcia',
    videoUrl: 'https://www.youtube.com/embed/uXhMVeOkhbk',
  },
]

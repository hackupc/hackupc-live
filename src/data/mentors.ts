export interface Mentor {
  readonly title: string
  readonly description: string
  readonly slack: string
  readonly linkedin?: string
  readonly languages: string
  readonly webpage?: string
}

export const mentors: Mentor[] = [
  {
    title: 'Maurici Abad Gutierrez',
    description: `Senior Frontend Engineer`,
    slack: '@mauri',
    linkedin: 'https://www.linkedin.com/in/mauriciabad',
    languages: 'JavaScript, TypeScript, CSS, React, Vue, Next.js, Figma, Git',
    webpage: 'https://mauri.app/',
  },
  {
    title: 'Andrea Querol de Porras',
    description: `FPGA developer`,
    slack: '@drea',
    linkedin: 'https://linkedin.com/in/dreaqdp',
    languages:
      'C, C++, verilog and system verilog, FPGA shell development, RISC-V, Arduino, Raspberry, Linux, Vim, R, Git, MPI, OMP',
  },
]

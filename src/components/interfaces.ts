type link = {
  slug: string
  linkName: string
}
export type project = {
  title: string
  text: string
  img: string
}

export interface propsButton {
  link: string
  name: string
}

export interface propsImg {
  img?: string
  style?: string
}

export interface propsBox {
  title: string
  sentence: string
}

export interface propsLink {
  post: link
  setView: React.Dispatch<React.SetStateAction<boolean>>
}
export interface propsSpan {
  date: string
  sentence: string
}
export interface linksProject {
  linkName: string
  slug: string
  projects: project[]
}

export interface dataType {
  email?: string
  subject?: string
  message?: string
}

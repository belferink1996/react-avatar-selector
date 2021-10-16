import {CSSProperties, MouseEventHandler, ReactNode} from 'react'

export interface FileData {
  name?: string
  type?: string
  size?: string
  base64: string
  file?: File
}

export interface AvatarSelectorProps {
  value: FileData | undefined | null
  onChange: (value: FileData) => null
  size?: number
}

export interface SvgProps {
  size?: number
  fill?: string
  style?: CSSProperties
  className?: string
}

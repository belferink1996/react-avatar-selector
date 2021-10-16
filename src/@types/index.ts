import {ChangeEvent, CSSProperties} from 'react'

export type GetFileFunc = (value: FileData) => void

export type ReadFileFunc = (e: ChangeEvent<HTMLInputElement>, callback: GetFileFunc) => void

export interface FileData {
  name: string
  type: string
  size: string
  base64: string
}

export interface AvatarSelectorProps {
  value: FileData | undefined | null
  onChange: GetFileFunc
  size?: number
  iconSize?: number
}

export interface SvgProps {
  size?: number
  fill?: string
  style?: CSSProperties
  className?: string
}

import {ChangeEvent} from 'react'
import {FileData} from '../@types'

const readFile = (e: ChangeEvent<HTMLInputElement>, callback: (value: FileData) => null) => {
  const allFiles = e.target.files

  if (allFiles?.length) {
    const file = allFiles[0]
    const reader = new FileReader()

    // Convert the file to base64 text
    reader.readAsDataURL(file)
    reader.onload = () => {
      const base64 = reader.result as string
      const fileInfo = {
        name: file.name,
        type: file.type,
        size: Math.round(file.size / 1000) + ' kB',
        base64,
      }

      callback(fileInfo)
    }
  } else {
    console.warn('No file selected')
  }
}

export default readFile

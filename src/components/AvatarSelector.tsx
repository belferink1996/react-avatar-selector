import React from 'react'
import styles from '../../styles/AvatarSelector.module.css'
import AvatarPlaceholder from '../svgs/AvatarPlaceholder'
import CameraIcon from '../svgs/CameraIcon'
import readFile from '../functions/read-file'
import {AvatarSelectorProps} from '../@types'

const AvatarSelector: (props: AvatarSelectorProps) => JSX.Element = ({
  value = null,
  onChange = (value) => null,
  size = 200,
  iconSize = Number(size) / 5,
}) => {
  return (
    <div
      className={`${styles.base} ${styles.border}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}>
      {!value && (
        <AvatarPlaceholder
          className={`${styles.center} ${styles.border} ${styles.content}`}
          size={size}
        />
      )}

      <input
        className={`${styles.center} ${styles.inp}`}
        type='file'
        accept='.png,.jpg,.jpeg'
        multiple={false}
        onChange={(e) => readFile(e, onChange)}
      />

      {value ? (
        <img
          className={`${styles.center} ${styles.border} ${styles.content}`}
          src={value.base64}
          alt=''
        />
      ) : (
        <CameraIcon className={`${styles.center} ${styles.icon}`} size={iconSize} />
      )}
    </div>
  )
}

export default AvatarSelector

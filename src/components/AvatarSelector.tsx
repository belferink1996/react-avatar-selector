import React from 'react'
import styles from '../../styles/AvatarSelector.module.css'
import AvatarPlaceholder from '../svgs/AvatarPlaceholder'
import CameraIcon from '../svgs/CameraIcon'
import readFile from '../functions/read-file'
import {AvatarSelectorProps} from '../@types'

const AvatarSelector: (props: AvatarSelectorProps) => JSX.Element = ({
  value = undefined,
  onChange = (value) => null,
  size = 200,
}) => {
  return (
    <div
      className={styles.base}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}>
      {!value && <AvatarPlaceholder className={styles.img} size={size} />}

      <input
        className={styles.inp}
        type='file'
        accept='.png,.jpg,.jpeg'
        multiple={false}
        onChange={(e) => readFile(e, onChange)}
      />

      {value ? (
        <img className={styles.img} src={value.base64} alt='' />
      ) : (
        <CameraIcon className={styles.camera} size={Number(size) / 6} />
      )}
    </div>
  )
}

export default AvatarSelector

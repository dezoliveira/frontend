import styles from './styles.module.scss'

interface Props {
  name: string
}

export function Button({ name }: Props ) {
  return(
    <button type="submit" className={styles.button}>
      {name}
    </button>
  )
}
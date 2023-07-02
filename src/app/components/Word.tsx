import { Letter } from './Letter'
import styles from './word.module.css'

export const Word = () => (
  <div className={styles.word}>
    <Letter />
    <Letter mode='correct' />
    <Letter />
    <Letter mode='semi' />
    <Letter />
  </div>
)

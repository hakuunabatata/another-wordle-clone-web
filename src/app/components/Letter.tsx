import styles from './letter.module.css'

export const Letter = ({
  mode = 'default',
}: {
  mode?: 'correct' | 'semi' | 'default'
}) => (
  <div>
    <input
      className={`${styles.letter} ${styles[mode]}`}
      type='text'
      maxLength={1}
    />
  </div>
)

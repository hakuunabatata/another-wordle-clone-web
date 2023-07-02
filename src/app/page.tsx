import { Letter } from './components/Letter'

export default function Home() {
  return (
    <>
      <Letter />
      <Letter />
      <Letter mode='correct' />
      <Letter mode='semi' />
      <Letter />
    </>
  )
}

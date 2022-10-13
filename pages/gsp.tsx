export default function Page({ date }: { date: Date }) {
  return (
    <div>
      Today is {date.toDateString()}
    </div>
  )
}

export const getStaticProps = () => {
  return {
    props: {
      date: new Date()
    }
  }
}
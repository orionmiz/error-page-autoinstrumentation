export default function Page({ date }: { date: string }) {
  return (
    <div>
      Today is {date}
    </div>
  )
}

export const getStaticProps = () => {
  return {
    props: {
      date: '1'
    }
  }
}
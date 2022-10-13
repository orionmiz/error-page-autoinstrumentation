export default function Page({ date }: { date: Date }) {
  return (
    <div>
      Today is {date.toDateString()}
    </div>
  )
}

Page.getInitialProps = () => {
  return {
    date: new Date()
  } 
}
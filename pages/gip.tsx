export default function Page({ date }: { date: string }) {
  return (
    <div>
      Today is {date}
    </div>
  )
}

Page.getInitialProps = () => {
  return {
    date: '1'
  } 
}
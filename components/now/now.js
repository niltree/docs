export default function Now(props) {
  const color = props.color || '#fff'

  return (
    <span className="niltree" style={{ color }}>
      Niltree
      <style jsx>
        {`
          span span {
            display: inline-block;
          }
        `}
      </style>
    </span>
  )
}

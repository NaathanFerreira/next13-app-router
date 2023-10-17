interface ProductProps {
  params: {
    data: string[]
  }
}

export default function Product(props: ProductProps) {
  console.log(props.params)
  return <h1>Product: {props.params.data[0]}</h1>
}

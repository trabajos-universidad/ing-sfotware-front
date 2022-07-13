import { Producto } from "./Producto";

export const CatalogoPage = () => {

  const arr = [1,2,3,4,5,6,7,8,9,10];

  return (
    <div className="row mt-5">
      {
        arr.map(item => (
          <Producto key={item} />
        ))
      }
    </div>
  )
}

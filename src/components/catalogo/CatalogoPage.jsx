import { useEffect, useState } from 'react';
import { pedirProductos } from '../../helpers/pedirProudctos';
import { Producto } from './Producto';

export const CatalogoPage = () => {

  const [productos, setProductos] = useState([])

  useEffect(() => {
   cargarProductos();
  }, []);

  const cargarProductos = async () => {
    const data = await pedirProductos();

    console.log(data)

    setProductos(data);
  }

  return (
    <div className="row mt-5">
      {productos.map(({id, nombre, desc, foto}) => (
        <Producto key={id}  nombre={nombre} desc={desc} foto={foto}/>
      ))}
    </div>
  );
};

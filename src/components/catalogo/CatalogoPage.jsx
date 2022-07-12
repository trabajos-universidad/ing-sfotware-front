export const CatalogoPage = () => {

  const arr = [1,2,3,4,5,6,7,8,9,10];

  return (
    <div className="row mt-5">
      {
        arr.map(item => (
          <div className="col-12 col-md-6 col-lg-3 mt-3">
            <div className="card">
              <img src="./imgs/producto.jpg" alt="logo" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Nombre del producto</h5>
                <p className="card-text">
                  Descripcion
                </p>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

import Swal from "sweetalert2";

export const agregarProducto = async (producto) => {
    try{
        const resp = await fetch('http://localhost:4000/productos/crear-productos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(producto)
        })

        console.log(resp)

        if(!resp.ok) throw new Error(resp.msg);

        const data = await resp.json();

        Swal.fire({
            title: 'Producto agregado',
            text: 'El producto se agregó correctamente',
            icon: 'success',
            confirmButtonText: 'Ok'
        });

        return data;
    }catch(error){
        console.log(error);
    }
}
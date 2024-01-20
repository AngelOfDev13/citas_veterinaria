import { useState, useEffect } from "react";
import Error from "./Error";
import { nanoid } from "nanoid";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente}) => {
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);

    useEffect(() => {

      if(Object.keys(paciente).length > 0) {
        setNombre(paciente.nombre)
        setPropietario(paciente.propietario)
        setEmail(paciente.email)
        setFecha(paciente.fecha)
        setSintomas(paciente.sintomas)

      }

    }, [paciente])


    const handleSubmit = (e) => {
      e.preventDefault(); 
      
      if([nombre, propietario, email, fecha, sintomas].includes('')) {
        setError(true)
      } else { 
        
        setError(false)
        // objeto de los pacientes 
        setSintomas()
        const objectPacientes = {
          nombre,
          propietario,
          email, 
          fecha,
          sintomas
        };

        if(paciente.id) {
          // Editando el registro 
          objectPacientes.id = paciente.id

          const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objectPacientes : pacienteState)

          setPacientes(pacientesActualizados)
          setPaciente({})
          
        } else {
          // Nuevo registro 
          objectPacientes.id = nanoid(10)
          setPacientes([...pacientes, objectPacientes]);
        }

        
        // Reiniciando el formulario 
        setNombre('');
        setPropietario('');
        setEmail('');
        setFecha('');
        setSintomas('');
      };
    };
    

    return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">

      <h2 className="font-black text-3xl text-center">Seguimiento de pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold text-lg">Administralos</span>
      </p>

      <form action="" className="bg-white shadow-md rounded-lg py-8 px-5 ml-6 mb-10" id="form"
      onSubmit={ handleSubmit }>
{/* estudiar esta sintaxis condicion -> && */}
        {error && <Error>Todos los campos son obligatorios</Error>}

        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
            Nombre de tu mascota
          </label>
          <input className="outline-none border-2 w-full p-2 mt-2 placeholder:text-gray-400 rounded-lg" 
            type="text" 
            placeholder="Nombre de la mascota" 
            id="mascota"
            value={nombre}
            onChange={ (e) => setNombre(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
            Nombre Propietario
          </label>
          <input className="outline-none border-2 w-full p-2 mt-2 placeholder:text-gray-400 rounded-lg" 
            type="text" 
            placeholder="Nombre del propietario" 
            id="propietario"
            value={propietario}
            onChange={ (e) => setPropietario(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email
          </label>
          <input className="outline-none border-2 w-full p-2 mt-2 placeholder:text-gray-400 rounded-lg" 
            type="email" 
            placeholder="Email Contacto Propietario" 
            id="email"
            value={email}
            onChange={ (e) => setEmail(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
            Alta
          </label>
          <input className="outline-none border-2 w-full p-2 mt-2 placeholder:text-gray-400 rounded-lg" 
            type="date" 
            id="alta"
            value={fecha}
            onChange={ (e) => setFecha(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
            Sintomas
          </label>
          <textarea id="sintomas"
          className="outline-none border-2 w-full p-2 mt-2 placeholder:text-gray-400 rounded-lg"
          placeholder="Describa los sintomas "
          value={sintomas}
          onChange={ (e) => setSintomas(e.target.value) }
          />
        </div>
         
        <input type="submit"
        className="bg-indigo-600 w-full p-3 text-white rounded-lg uppercase font-bold hover:bg-indigo-700 cursor-pointer
        transition-all"
        value={paciente.id ? 'Editar paciente' : 'Agregar paciente'}
         />
        
        

        
      </form>
    </div>

    );
  };
  
  export default Formulario;
  
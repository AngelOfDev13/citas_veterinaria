import Paciente from "./Paciente";

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
    if(pacientes.length === 0){
        return (
            <div className="md:w-1/2 md:h-screen lg:w-3/5 pb-8">
            <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                <p className="text-xl mt-5 mb-10 text-center">
                    Comienza agregando pacientes {''}
                    <span className="text-indigo-600 font-bold text-xl">Pacientes y Citas</span>
                </p>
            </div>
            
        )
    } else {

        // useEffect(() => {
        //     console.log('nuevo paciente')
        // }, [paciente])

        return(
            <div className="md:w-1/2 md:h-screen lg:w-3/5 h-screen overflow-y-scroll">
                <h2 className="font-black text-3xl text-center">listado de pacientes</h2>
                <p className="text-xl mt-5 mb-10 text-center">
                    Administra tus {''}
                    <span className="text-indigo-600 font-bold text-xl">y apareceran en este lugar</span>
                </p>
    
                { pacientes.map(paciente => {
                    return(
                        <Paciente
                        key={paciente.id}
                        paciente={paciente}
                        setPaciente={setPaciente}
                        eliminarPaciente={eliminarPaciente}/>
                        
                    )
                })}
            
            </div>
            
            
        );

    }

};

export default ListadoPacientes;
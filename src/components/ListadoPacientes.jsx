import Paciente from "./Paciente";

const ListadoPacientes = ({ patients, setPatient, deletePatient }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {patients && patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className=" text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          {patients.map((singlePatient) => (
            <Paciente
              key={singlePatient.id}
              singlePatient={singlePatient}
              setPatient={setPatient}
              deletePatient={deletePatient}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className=" text-xl mt-5 mb-10 text-center">
            Comienza agregando tus pacientes {""}
            <span className="text-indigo-600 font-bold">
              y aparecerán en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;

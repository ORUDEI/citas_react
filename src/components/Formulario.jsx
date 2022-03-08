import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ patients, setPatients, patient, setPatient }) => {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [symptom, setSymptom] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      setName(patient.name);
      setOwner(patient.owner);
      setEmail(patient.email);
      setDate(patient.date);
      setSymptom(patient.symptom);
    } else {
    }
  }, [patient]);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([name, owner, email, date, symptom].includes("")) {
      setError(true);
      return;
    }

    setError(false);

    const patientObject = {
      name,
      owner,
      email,
      date,
      symptom,
      id: generarId(),
    };

    if (patient.id) {
      patientObject.id = patient.id;

      const updatedPatients = patients.map((patientState) =>
        patientState.id === patient.id ? patientObject : patientState
      );
      setPatients(updatedPatients);
      setPatient({});
    } else {
      patientObject.id = generarId();
      setPatients([...patients, patientObject]);
    }

    setName("");
    setOwner("");
    setEmail("");
    setDate("");
    setSymptom("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className=" text-lg mt-7 text-center my-8">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && <Error message="Todos los campos son obligatorios" />}
        <div className="mb-5">
          <label
            htmlFor="pet"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            id="pet"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="owner"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            id="owner"
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email Contacto Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="discharge"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>
          <input
            id="discharge"
            type="Date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Síntomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los Síntomas"
            value={symptom}
            onChange={(e) => setSymptom(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold
          hover:bg-indigo-700 cursor-pointer transition-colors"
          value={patient.id ? "Editar Paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;

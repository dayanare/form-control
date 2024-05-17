import { useState } from "react";
import "../styles/App.scss";



function App() {
  /*const [name, setName] = useState("")

  const handleChangeInput = (ev) => {
    setName(ev.target.value)
  }
  const handleClick = () => {
    setName("")
  }*/

  const initial_state = {
    name: "",
    hair: "",
    specie: "",
    status: null,
    hab: []
  }
  const [dataForm, setDataForm] = useState(initial_state)

  const changeFormDataText = (ev) => {
    const id = ev.target.id;
    const value = ev.target.value;
    /*
        if (id === "name") {
          setDataForm({ ...dataForm, name: value })
        } else if (id === "hair") {
          setDataForm({ ...dataForm, hair: value })
        } else if (id === "species") {
          setDataForm({ ...dataForm, specie: value })
        }
    */
    setDataForm({ ...dataForm, [id]: value }) // cambiar la variable de estado id= name, hair, species
  }
  const handleChangeRadio = (ev) => {
    const response = ev.target.value === "si" ? true : false
    setDataForm({ ...dataForm, status: response })
  }
  const handleCheckbox = (ev) => {

    const checked = ev.target.checked;
    const value = ev.target.value;
    if (checked) {
      setDataForm({ ...dataForm, hab: [...dataForm.hab, value] })
    }
    else {
      const cloneArrayHab = [...dataForm.hab];
      const position = cloneArrayHab.indexOf(value)
      cloneArrayHab.splice(position, 1)
      setDataForm({ ...dataForm, hab: cloneArrayHab })
    }
  }

  return (
    <>
      <form onSubmit={(ev) => { ev.preventDefault() }}>
        <div>
          <label htmlFor="name">Indica nombre</label>
          <input type="text" name="name" id="name" onChange={changeFormDataText} value={dataForm.name} />
        </div>
        <div>
          <label htmlFor="hair">Color de cabello</label>
          <input type="text" name="hair" id="hair" onChange={changeFormDataText} value={dataForm.hair} />
        </div>
        <div>
          <label htmlFor="specie">Selecciona la especie</label>
          <select name="specie" id="specie" onChange={changeFormDataText} value={dataForm.specie}>
            <option value="human">Human</option>
            <option value="demon">Demon</option>
            <option value="animal">Animal</option>
          </select>
        </div>

        <div>
          <label htmlFor="">¿Esta vivo?</label>
          <input type="radio" name="status" id="status1" value="si" onChange={handleChangeRadio} checked={dataForm.status === true} /> Si
          <input type="radio" name="status" id="status2" value="no" onChange={handleChangeRadio} checked={dataForm.status === false} /> No
        </div>

        <div>
          <label htmlFor="hab">Habilidades</label>
          <input type="checkbox" name="hab" id="hab1" value="Vuela" onChange={handleCheckbox} checked={dataForm.hab.includes("Vuela")} /> Vuela
          <input type="checkbox" name="hab" id="hab2" value="Viaja" onChange={handleCheckbox} checked={dataForm.hab.includes("Viaja")} /> Viaja en el tiempo
          <input type="checkbox" name="hab" id="hab3" value="invisible" onChange={handleCheckbox} checked={dataForm.hab.includes("invisible")} /> Es invisible
          <input type="checkbox" name="hab" id="hab4" value="cariñoso" onChange={handleCheckbox} checked={dataForm.hab.includes("cariñoso")} /> Es cariñoso
        </div>
        <input type="submit" value="Añadir" />
        <input type="submit" value="Reset" />
      </form >

      <section>
        <h2>Nombre: </h2>
        <h3>Color de cabello</h3>
      </section>
    </>
  )
}

export default App

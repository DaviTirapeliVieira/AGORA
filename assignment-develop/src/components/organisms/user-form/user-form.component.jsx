import React, { useState } from 'react'
import Input from '@/components/atoms/input/input.component'
import Select from '@/components/atoms/select/select.component'
import Button from '@/components/atoms/button/button.component'
import FormGroup from '@/components/molecules/form-group/form-group.component'
import { useDispatch, useSelector } from 'react-redux'
import { createUserRequest } from '@/logic/user/ducks/create-user-slice'
import './user-form.component.scss'


const UserForm = () =>{
  const dispatch = useDispatch()
  const loading = useSelector(state => state.user.loading)
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'user' })


  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev=> ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createUserRequest(form))
  }

  return (
    <div className="user-form-card">
    <form className="user-form" onSubmit={handleSubmit}>
      <h2>Criar usuário</h2>
      <FormGroup label="Nome">
        <Input name="name" value={form.name} onChange={handleChange} placeholder="Nome" required />
      </FormGroup>

      <FormGroup label="Email">
        <Input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" required />
      </FormGroup>

      <FormGroup label="Senha">
        <Input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Senha" required />
      </FormGroup>

      <FormGroup label="Perfil">
        <Select name="role" value={form.role} onChange={handleChange} options={[{label:'Usuário', value:'user'},{label:'Administrador', value:'admin'}]} />
      </FormGroup>

      <div className="form-row">
        <Button type="submit" label={loading ? 'Criando...' : 'Criar'} />
      </div>
    </form>
    </div>
  )
}

export default UserForm

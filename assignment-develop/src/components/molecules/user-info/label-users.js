// Define quais labels aparecem para cada role
export const USER_LABELS = {
  student: [
    { key: 'name', label: 'Nome' },
    { key: 'email', label: 'E-mail' },
    { key: 'matricula', label: 'Matrícula' },
    { key: 'createdAt', label: 'Data de Matrícula' },
    { key: 'situacaoMatricula', label: 'Situação Matrícula' },
  ],
  teacher: [
    { key: 'name', label: 'Nome' },
    { key: 'email', label: 'E-mail' },
    { key: 'role', label: 'Cargo' },
    { key: 'createdAt', label: 'Data de Cadastro' },
    { key: 'updatedAt', label: 'Última Atualização' },
  ],
  secretaty: [
    { key: 'name', label: 'Nome' },
    { key: 'email', label: 'E-mail' },
    { key: 'role', label: 'Cargo' },
    { key: 'createdAt', label: 'Data de Cadastro' },
    { key: 'updatedAt', label: 'Última Atualização' },
  ],
  admin: [
    { key: 'name', label: 'Nome' },
    { key: 'email', label: 'E-mail' },
    { key: 'role', label: 'Função' },
    { key: 'createdAt', label: 'Data de Cadastro' },
    { key: 'updatedAt', label: 'Última Atualização' },
  ],
};

export const getLabelsByRole = (role) => USER_LABELS[role] || [];

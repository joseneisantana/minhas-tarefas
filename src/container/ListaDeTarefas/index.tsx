import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'estuda typeScript',
    descricao: ' ver a aula 3 da Ebac',
    propriedade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'Pagar conta de internet',
    descricao: 'Baixar fatura Gmail',
    propriedade: 'Urgente',
    status: 'concluida'
  },
  {
    titulo: 'Ir para academia',
    descricao: 'Fazer treino b ',
    propriedade: 'importante',
    status: 'pendente'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: ”categoria” e ”termo”</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            status={t.status}
            prioridade={t.propriedade}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas

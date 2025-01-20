import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Estuda TypeScript',
    descricao: ' ver a aula 3 da Ebac',
    prioridade: 'importante',
    status: 'concluida'
  },
  {
    titulo: 'Pagar conta de internet',
    descricao: 'Baixar fatura Gmail',
    prioridade: 'urgente',
    status: 'concluida'
  },
  {
    titulo: 'Ir para academia',
    descricao: 'Fazer treino b ',
    prioridade: 'importante',
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
            prioridade={t.prioridade}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas

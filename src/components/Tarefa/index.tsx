import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { remover, editar } from '../../store/reducers/tarefas'
import * as S from './styles'

import TarefaClass from '../../models/Tarefa'
import { BotaoSalvar } from '../../styles'

type Props = TarefaClass

const Tarefa = ({
  descricao: descrcaoOriginal,
  prioridade,
  status,
  titulo,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (descrcaoOriginal.length > 0) {
      setDescricao(descrcaoOriginal)
    }
  }, [descrcaoOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setDescricao(descrcaoOriginal)
  }

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao
        disabled={!estaEditando}
        value={descricao}
        onChange={(evento) => setDescricao(evento.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    descricao,
                    prioridade,
                    status,
                    titulo,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelaRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelaRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelaRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelaRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa

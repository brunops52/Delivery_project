import { useEffect, useState } from 'react'
import { Button } from '../../styles'
import { ButtonGroup, InputGroup, Resposta, TitleCart } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { clear, close, end, showCart } from '../../store/reducers/cart'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'
import InputMask from 'react-input-mask'
import { RootReducer } from '../../store'

const DeliveryData = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const cartShow = () => {
    dispatch(showCart())
  }

  const [isInDelivery, setIsInDelivery] = useState(true)

  const [purchase, { data, isSuccess }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      nome: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: '',
      complemento: '',
      nomeCartao: '',
      numeroCartao: '',
      cvv: '',
      mesVencimento: '',
      anoVencimento: ''
    },
    validationSchema: Yup.object({
      nome: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('o campo é obrigatório'),
      endereco: Yup.string()
        .min(5, 'O endereço precisa ter pelo menos 5 caracteres')
        .required('o campo é obrigatório'),
      cidade: Yup.string()
        .min(4, 'O endereço precisa ter pelo menos 4 caracteres')
        .required('o campo é obrigatório'),
      cep: Yup.string()
        .min(9, 'O endereço precisa ter 9 caracteres')
        .max(9, 'O endereço precisa ter 9 caracteres')
        .required('o campo é obrigatório'),
      numero: Yup.string().required('o campo é obrigatório'),
      complemento: Yup.string(),
      nomeCartao: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('o campo é obrigatório'),
      numeroCartao: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('o campo é obrigatório'),
      cvv: Yup.string()
        .min(3, 'O campo precisa ter pelo menos 5 caracteres')
        .required('o campo é obrigatório'),
      mesVencimento: Yup.string()
        .min(2, 'O campo precisa ter pelo menos 5 caracteres')
        .required('o campo é obrigatório'),
      anoVencimento: Yup.string()
        .min(2, 'O campo precisa ter pelo menos 5 caracteres')
        .required('o campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.nome,
          address: {
            description: values.endereco,
            city: values.cidade,
            zipCode: values.cep,
            number: Number(values.numero),
            complement: values.complemento
          }
        },
        payment: {
          card: {
            name: values.nomeCartao,
            number: values.numeroCartao,
            code: Number(values.cvv),
            expires: {
              month: Number(values.mesVencimento),
              year: Number(values.anoVencimento)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        }))
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const estaAlterado = fieldName in form.touched
    const estaInvalido = fieldName in form.errors
    const hasError = estaAlterado && estaInvalido

    return hasError
  }

  const getErrorDelivery = () => {
    if (
      'nome' in form.errors ||
      'endereco' in form.errors ||
      'cidade' in form.errors ||
      'cep' in form.errors ||
      'numero' in form.errors
    ) {
      return setIsInDelivery(true)
    }
    if (
      form.values.nome === '' ||
      form.values.endereco === '' ||
      form.values.cidade === '' ||
      form.values.cep === '' ||
      form.values.numero === ''
    ) {
      return setIsInDelivery(true)
    }
    return setIsInDelivery(false)
  }

  const finalizou = () => {
    dispatch(close())
    dispatch(clear())
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(end())
    }
  }, [isSuccess, dispatch])

  return (
    <>
      {isSuccess && data ? (
        <Resposta>
          <TitleCart>Pedido realizado - {data.orderId}</TitleCart>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <p>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
          <Button onClick={() => finalizou()}>Concluir</Button>
        </Resposta>
      ) : (
        <form onSubmit={form.handleSubmit}>
          <div className={isInDelivery ? '' : 'display-none'}>
            <TitleCart>Entrega</TitleCart>
            <InputGroup size="big">
              <div>
                <label htmlFor="nome">Quem irá receber</label>
                <input
                  id="nome"
                  type="text"
                  name="nome"
                  value={form.values.nome}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('nome') ? 'error' : ''}
                />
              </div>
              <div>
                <label htmlFor="endereco">Endereço</label>
                <input
                  id="endereco"
                  type="text"
                  name="endereco"
                  value={form.values.endereco}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('endereco') ? 'error' : ''}
                />
              </div>
              <div>
                <label htmlFor="cidade">Cidade</label>
                <input
                  id="cidade"
                  type="text"
                  name="cidade"
                  value={form.values.cidade}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('cidade') ? 'error' : ''}
                />
              </div>
            </InputGroup>
            <InputGroup size="medium">
              <div>
                <label htmlFor="cep">CEP</label>
                <InputMask
                  id="cep"
                  type="text"
                  name="cep"
                  value={form.values.cep}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('cep') ? 'error' : ''}
                  mask="99999-999"
                />
              </div>
              <div>
                <label htmlFor="numero">Número</label>
                <input
                  id="numero"
                  type="text"
                  name="numero"
                  value={form.values.numero}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('numero') ? 'error' : ''}
                />
              </div>
            </InputGroup>
            <InputGroup size="big">
              <div>
                <label htmlFor="complemento">Complemento (opcional)</label>
                <input
                  id="complemento"
                  type="text"
                  name="complemento"
                  value={form.values.complemento}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </div>
            </InputGroup>
            <ButtonGroup>
              <Button
                className="botao"
                type="button"
                onClick={getErrorDelivery}
              >
                Continuar com o pagamento
              </Button>
              <Button className="botao" onClick={cartShow}>
                Voltar para o carrinho
              </Button>
            </ButtonGroup>
          </div>
          <div className={isInDelivery ? 'display-none' : ''}>
            <TitleCart>Pagamento - Valor a pagar R$ 190,90</TitleCart>
            <InputGroup size="big">
              <div>
                <label htmlFor="nomeCartao">Nome no cartão</label>
                <input
                  id="nomeCartao"
                  type="text"
                  name="nomeCartao"
                  value={form.values.nomeCartao}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('nomeCartao') ? 'error' : ''}
                />
              </div>
            </InputGroup>
            <InputGroup size="small">
              <div>
                <label htmlFor="numeroCartao">Número no cartão</label>
                <InputMask
                  id="numeroCartao"
                  type="text"
                  name="numeroCartao"
                  value={form.values.numeroCartao}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('numeroCartao') ? 'error' : ''}
                  mask="9999 9999 9999 9999"
                />
              </div>
              <div>
                <label htmlFor="cvv">CVV</label>
                <InputMask
                  id="cvv"
                  type="text"
                  name="cvv"
                  value={form.values.cvv}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('cvv') ? 'error' : ''}
                  mask="999"
                />
              </div>
            </InputGroup>
            <InputGroup size="medium">
              <div>
                <label htmlFor="mesVencimento">Mês de vencimento</label>
                <InputMask
                  id="mesVencimento"
                  type="text"
                  name="mesVencimento"
                  value={form.values.mesVencimento}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('mesVencimento') ? 'error' : ''}
                  mask="99"
                />
              </div>
              <div>
                <label htmlFor="anoVencimento">Ano de vencimento</label>
                <InputMask
                  id="anoVencimento"
                  type="text"
                  name="anoVencimento"
                  value={form.values.anoVencimento}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('anoVencimento') ? 'error' : ''}
                  mask="99"
                />
              </div>
            </InputGroup>
            <ButtonGroup>
              <Button className="botao" type="submit">
                Finalizar pagamento
              </Button>
              <Button className="botao" onClick={() => setIsInDelivery(true)}>
                Voltar para a edição de endereço
              </Button>
            </ButtonGroup>
          </div>
        </form>
      )}
    </>
  )
}

export default DeliveryData

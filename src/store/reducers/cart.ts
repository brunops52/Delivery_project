import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Cardapio } from '../../pages/Pizzaria'

type CartState = {
  items: Cardapio[]
  isOpen: boolean
  isInCart: boolean
  finalizou: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  isInCart: true,
  finalizou: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    add: (state, action: PayloadAction<Cardapio>) => {
      if (!state.finalizou) {
        const prato = state.items.find((item) => item.id === action.payload.id)
        if (!prato) {
          state.items.push(action.payload)
        } else {
          alert('O PRATO JÁ ESTÁ NO CARRINHO')
        }
      } else {
        alert('CONCLUA A ÚLTIMA COMPRA PARA ADICIONAR NOVOS ITENS')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    showCart: (state) => {
      state.isInCart = true
    },
    hideCart: (state) => {
      state.isInCart = false
    },
    clear: (state) => {
      state.items = []
    },
    end: (state) => {
      state.finalizou = true
    }
  }
})

export const { close, open, add, remove, showCart, hideCart, clear, end } =
  cartSlice.actions
export default cartSlice.reducer

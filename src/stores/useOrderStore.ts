import { defineStore } from 'pinia'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import type { Order } from '~/types/Order'

export const useOrderStore = defineStore('order', {
  actions: {
    async createOrder(db: any, order: Omit<Order, 'id'>) {
      await addDoc(collection(db, 'orders'), {
        ...order,
        createdAt: Timestamp.now()
      })
    }
  }
})

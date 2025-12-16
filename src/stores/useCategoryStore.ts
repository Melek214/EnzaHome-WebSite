import { defineStore } from 'pinia'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../plugins/firebase.client'
import type { Category } from '../types/Category'

export const usecategoryStore = defineStore('category', {
  state: () => ({
    categories: [] as Category[]
  }),

  actions: {
    async fetchCategories() {
      const snapshot = await getDocs(collection(db, 'categories'))
      this.categories = snapshot.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as Omit<Category, 'id'>)
      }))
    }
  }
})

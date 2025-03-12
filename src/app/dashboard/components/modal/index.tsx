"use client"
import { OrderContext } from '@/providers/order'
import styles from './styles.module.scss'
import { X } from 'lucide-react'
import { use } from 'react'

export function ModalOrder() {
  const { onRequestClose } = use(OrderContext)

  return (
    <dialog className={styles.dialogContainer}>
      <section className={styles.dialogContent}>
        <button className={styles.dialogBack}>
          <X scale={40} color="#ff3f4b" onClick={onRequestClose}/>
        </button>

        <article className={styles.container}>
          <h2>Detalhes do pedido</h2>

          <span className={styles.table}>
            Mesa <b>36</b>
          </span>

          <section className={styles.item}>
            <span>1 - <b>Pizza catupiry</b></span>
            <span className={styles.description}>Pizza de frango com catupiry, borda recheada</span>
          </section>

          <button className={styles.buttonOrder}>
            Concluir pedido
          </button>

        </article>
      </section>
    </dialog>
  )
}
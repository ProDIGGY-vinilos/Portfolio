import React from 'react'
import { useForm } from 'react-hook-form'
import { send } from 'emailjs-com'
import styles from 'components/Contact/Contact.module.css'

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => {
    send('service_n5muktg', 'template_go1n4z4', data, 'AwzASSl8lbR6arECh')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text)
      })
      .catch((err) => {
        console.log('FAILED...', err)
      })
    console.log(data)
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Contact</h2>
      <p className={styles.simplyText}>Tienes una oferta, consulta o solo una duda? no dudes en enviarme un mensaje</p>

      <form className={styles.generalForm} onSubmit={handleSubmit(onSubmit)}>
        <label>Leave your name and email</label>
        <div className={styles.formInput}>
          {/* hacer componente shared para input */}
          <input type="text" placeholder="Name" {...register('name', { required: true })} />
          {errors.name && <span>This field is required</span>}
          <input type="text" name="mail" placeholder="Email" {...register('email', { required: true })} />
          {errors.email && <span>This field is required</span>}
        </div>
        <div className={styles.formTextarea}>
          <label>Leave your message</label>
          <textarea placeholder="Message" {...register('message', { required: true })} />
          {errors.message && <span>This field is required</span>}
        </div>
        <div className={styles.formButtons}>
          <input type="submit" />
          <input type="reset" />
        </div>
      </form>
    </div>
  )
}

export default Contact

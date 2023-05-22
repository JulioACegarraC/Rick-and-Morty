import styles from "./About.module.css"
export default function About(props) {
   return (
      <div className={styles.Container}>
         <div className={styles.Cont}></div>
         <div className={styles.Cont8}></div>
         <div className={styles.Cont2}></div>
         <div className={styles.Cont1}></div>
         <div className={styles.Cont4}></div>
         <div className={styles.Cont6}></div>
         <div className={styles.Cont3}></div>
         <div className={styles.Cont5}></div>
         <div className={styles.Cont7}></div>
         <br />
         <h1 className= {styles.Titulo}>Desarrollado por Julio Cegara</h1>
         <br />
         <p>Esta es una breve descripcion de mi primer proyecto
            Fue realizado aplicando los conocimientos adquiridos
            en Henry.
         </p>
      </div>
   );
}
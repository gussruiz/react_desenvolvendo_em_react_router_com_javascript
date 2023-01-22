import styles from "./Banner.module.css";
import circuloColorido from 'assets/circulo_colorido.png'

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá, mundo</h1>

        <p className={styles.paragrafo}>
          Boas vindas ao meu espaço pessoal! Eu sou Gustavo Ruiz, instrutor de
          Front-end da Alura. Aqui compartilho vários conhecimentos, espero que
          aprenda algo novo :)
        </p>
      </div>

      <div className={styles.imagens}>
        <img 
            className={styles.circuloColorido} 
            src={circuloColorido} 
            aria-hiden={true}
            alt="meu deus q ngc insuportavel"    
        ></img>
        <img 
            className={styles.minhaFoto} 
            src="https://github.com/gussruiz.png"
            alt="foto minha sorrindo"
        ></img>
      </div>


    </div>
  );
}

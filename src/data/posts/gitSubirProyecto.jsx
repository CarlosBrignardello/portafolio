import React from 'react'
import '../../styles/pages/postsStyles.sass'

export const gitSubirProyecto = () => {
  return (
    <div className="post">
      <div className="post__background"></div>
      <h1 className="post__title">Guía esencial para subir proyectos a git</h1>
      <p className="post__description">Subir proyectos a git consiste básicamente en lo mismo en la gran mayoría de los casos, sin embargo, los comandos de consola a momentos pueden resultar intimidantes y complejos. Es por eso que en esta breve guía muestro en forma resumida como subir proyectos a tu repositorio de git.</p>

      <h3>Iniciar git en un proyecto</h3>
      <p>Para iniciar un proyecto en git debemos encontrarnos dentro de la carpeta donde está ubicado el proyecto y posteriormente mediante la terminal se debe iniciar git. Como se ve a continuación:</p>

      <pre><code class='language-shell' lang='shell'>
        git init
      </code></pre>

      <p>Posteriormente debemos pasar los archivos a staging para ello utilizamos el comando "add"</p>

      <pre><code class='language-shell' lang='shell'>
        git add .
      </code></pre>
      <blockquote><p>Ponemos un punto para indicar que todos los archivos contenidos en la carpeta serán pasados a staging.
      Conceptos:Staging: Se trata de un área de preparación, un área temporal antes de enviar los cambios al repositorio, donde son guardadas todas las modificaciones.
      Tracked/Untracked: Es el estado en que los archivos están o no siendo rastreados, un archivo puede estar en estado tracked en staging o tracked en el repositorio.
      </p></blockquote>

      <p>Una vez añadidos los archivos a staging es momento de subir los archivos al repositorio local. De esta forma se deja un vestigio o constancia de los cambios realizados en local.</p>
      <pre><code class='language-shell' lang='shell'>
        git commit "Son añadidos los cambios"
      </code></pre>

      <h3>Vincular proyecto local a un repositorio remoto</h3>
      <p>Para subir los cambios a un repositorio debemos vincularnos a él. Para ello utilizamos el comando "remote add" de la siguiente forma:</p>
      <pre><code class='language-shell' lang='shell'>
        git remote add origin URL
      </code></pre>
      <blockquote><p>La URL debe ser del repositorio al que queremos pasar nuestra información en local.</p>
      </blockquote>

      <p>Una vez hecho esto podemos revisar que estemos correctamente vinculados con el siguiente comando:</p>
      <pre><code class='language-shell' lang='shell'>
        git remote -v
      </code></pre>
      <blockquote><p>Esto nos mostrara que tenemos disponibles las funciones de push y pull del repositorio. Las cuales consisten en subir o actualizar la información del repositorio remoto respectivamente.</p>
      </blockquote>

      <h3>Subir repositorio local a repositorio remoto</h3>
      <p>Una vez realizadas las operaciones anteriores solo basta con subir los cambios locales al remoto. Para ello SIEMPRE debemos obtener la última versión del repositorio remoto y luego subir nuestros cambios, esto se realiza de la siguiente forma:</p>
      <pre>
        <code>git pull origin master</code>
        <br/>
        <code>git push origin master</code>
      </pre>

    </div>
  )
}

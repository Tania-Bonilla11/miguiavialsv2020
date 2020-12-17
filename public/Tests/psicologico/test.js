
/**
   * Array que posee las preguntas del test psicologico
   * con opciones de respuesta utilizadas en main.js
   * 
   *@version  17/12/20
   * @author Tania Bonilla  
   */
const quiz=[
    {
      q:"¿Cómo debe ser mi comportamiento cuándo un peatón se cruza delante de mí, mientras voy conduciendo?",
      options:['Me enojo y aumento velocidad.','Disminuyo velocidad, trato de calmarme y sigo mi camino.','No le dejo pasar y le pito.','Me enoja y me agarra ansiedad de atropellarlo.'],
      answer:1
    },
    {
        q:"¿Qué hago cuando un gestor de transito me da señal para detenerme?",
        options:['Obedezco a la señal, me hago a la orilla y me detengo.','Aumento velocidad para no parar.','No le hago caso','Me hago el que no le veo.'],
        answer:0
      },
      {
        q:"Va en un viaje familiar y alguien de mi familia me hace observaciones en su forma de manejar ¿Qué haría?",
        options:['No le hago caso.','Tomo en cuenta sus observaciones.','Me enojo y le digo que se calle.','Le contradigo sus comentarios.'],
        answer:1
      },
      {
        q:"Va manejando por la ciudad y de repente se encuentra en una congestión vehicular ¿Cómo actuaría usted?",
        options:['Me enfurezco y toco la bocina.','Me calmo y si puedo tomo otro ruta alterna.','Espero enojado hasta que pase.','Entro en ansiedad y no se que hacer.'],
        answer:1
      },
      {
        q:"¿En qué caso me mostraría intolerable con los conductores?",
        options:['si acatan las leyes de transito.','si están parqueados.','Los que pasan despacio un semáforo.','Si son abusivos.'],
        answer:3
      },
      {
        q:"¿Cómo actuó cuando el semáforo esta a punto de pasar a verde?",
        options:['Me calmo y espero a que se ponga en verde para pasar.','Me enojo porque tarda para cambiar de color.','Entro en ansiedad y acelero.','Acelero antes para salir de primero.'],
        answer:0
      },
      {
        q:"Si se encuentra parqueado en línea amarilla, de repente llaga un agente de tránsito y le pone una sanción ¿Qué haría usted?",
        options:['Me enojo y empiezo a reclamarle.','Acepto la sanción y busco un lugar correcto de parqueo.','Enciendo el auto y me voy de ahí rápido.','No le hago caso.'],
        answer:1
      },
      {
        q:"Usted andaba de compras y cuando regresa donde dejo su vehículo, se encuentra con un agente poniéndole una multa por dejar su vehículo mal estacionado ¿Qué hago?",
        options:['Me enojo con el agente y le reclamo','Mantengo la calma, acepto y pago la multa.','Trato de convencerlo que fue un error.','Me niego rotundamente a pagar la multa.'],
        answer:1
      },
      {
        q:"Va conduciendo y de repente un conductor que va detrás suyo choca levemente contra su vehículo ¿Cuál es mi reacción?",
        options:['Freno, me bajo del auto y le insulto.','Le hago señal que nos detengamos a la orilla del carril y con calma busco la mera de arreglar el problema.','Me enojo y le choco nuevamente.','Me enojo y le freno bruscamente.'],
        answer:1
      },
      {
        q:"¿Qué debería hacer si se encuentra deprisa?",
        options:['Acelero el vehículo y no me importa nada.','Acelero mas, pero siempre con precaución.','Rebaso a todos sin parar.','No me importan las señales.'],
        answer:1
      },
      {
        q:"¿En qué circuntancia podria molestarme?",
        options:['Encuentro semáforos en rojo.','Otros conductores no respetan la señales.','Me detiene un agente de transito.','Se acerca una ambulancia.'],
        answer:1
      },
      {
        q:"Usted va conduciendo por la carretera y ve que tras suyo viene una ambulancia a gran velocidad ¿Qué hace?",
        options:['Acelero mas el vehículo para que no me rebase.','Me hago a un lado del carril y cuando pase me incorporo cuidadosamente','No le dejo pasar.','Entro en ansiedad y no se que hacer.'],
        answer:1
      },
      {
        q:"En carretera soy más prudente con",
        options:['Ancianos y personas discapacitadas.','Conductores temerarios.','Los buses.','Jóvenes.'],
        answer:0
      },
      {
        q:"¿En qué días debo conducir con mayor precaución?",
        options:['dias lluviosos','dias soleados.','dias nublados.','dias con altas temperaturas.'],
        answer:0
      },
      {
        q:"Usted va conduciendo de noche y el otro automovilista que viene no le quiere dar luz baja ¿Qué hace?",
        options:['Me enojo aumento velocidad.', 'Disminuyo velocidad y dejo que pase.','Me le pongo en el mismo carril Para que respete.','Como sea le hago señal que baje la luz sin parar.','Ninguna es correcta.'],
        answer:1
      },
      {
        q:"Se encuentra en una interrupción de trafico y otros automovilistas se cuelan en el hombro de la vía ¿Qué hace?",
        options:['Me voy junto con ellos.','Me quedo tranquilo esperando.','Agarro el otro carril y rebaso a todos.','Pito sin parar hasta que se resuelva.'],
        answer:1
      },
      {
        q:"Un agente de tránsito le detiene y se da cuenta que usted no porta licencia ¿Qué hace?",
        options:['Enojarse.','Acepto la multa','Enciendo el vehículo y me le escapo','Trato de sobornarlo para que no me multe.'],
        answer:1
      },
      {
        q:"Me esta costando estacionarme ¿Qué hago?",
        options:['Una maniobra brusca.','Parqueo sin desesperarme.','Me pongo nervioso y trato de estacionarme lo mas rápido posible.','Me frustro y me parqueo mal.'],
        answer:1
      },
      {
        q:"Quiero incorporarme a una intercepción, pero los vehículos no dejan de pasar, de repente veo que tengo una mínima oportunidad para meterme. ¿Qué hago? ",
        options:['Me meto bruscamente.','Me desespero y muestro impaciencia.','Me enojo e insulto a los otros automovilistas.','Espero a que dejen de pasar vehículos y pueda meterme tranquilamente a la intercepción.'],
        answer:3
      },
      {
        q:"Va conduciendo por sobre el limite de la velocidad recomendada y un agente de transito le detiene para sancionarlo ¿Qué hace?",
        options:['Le insulto y no acepta la sanción.','Me muestro descontento y empiezo a reclamarle.','No acepto la sanción y empiezo a golpear al agente.','Acepto la sanción sin oponerme.'],
        answer:3
      },
]
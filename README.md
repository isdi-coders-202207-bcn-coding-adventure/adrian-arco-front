CODING ADVENTURE

1.  ¿Cuándo tengo que usar useCallback()?
    Usamos useCallback para memoizar una funcion. En el array de dependencias debemos introducir los argumentos necesarios para que en el momento que los argumentos cambien se vuelva a llamar a la función.
    Lo usamos para solucionar problemas con bucles infinitos de renderizacion, ya que cada vez que javascript lee la función és una función nueva por lo que vuelve a renderizar el componente. Al introducirlo en el usecallback queda memoizada dicha funcion y salimos de ese bucle.

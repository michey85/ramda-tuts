const sizes = {
    xs: '1rem',
    sm: '1.25rem',
    md: '1.5rem',
    lg: '1.75rem',
    xl: '2rem',
   };
  
  const convertRemToPx = R.pipe(
     parseFloat,
     R.multiply(10),
     Math.round,
     R.toString,
     R.concat(R.__, 'px')
  );
  
  R.map(convertRemToPx)(sizes)
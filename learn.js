const pupils = new Map ();
pupils.set( 'john', 25 );
pupils.set( 'jane', 22 );
console.log(pupils.size);
for (let [key, value] of pupils ) {
  console.log(`${key} is a ${value}`);
}

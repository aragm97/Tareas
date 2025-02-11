const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const names = document.querySelector("name"); // se cambió el nombre de la variable por una que describa mejor su funcion
const blog = document.querySelector("blog");// se cambió el nombre de la variable por una que describa mejor su funcion
const loc = document.querySelector("location");// se cambió el nombre de la variable por una que describa mejor su funcion

async function displayUser(username) { //se agregó "async" para corregir la syntaxis
 try{
  names.innerHTML = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json();
  console.log(data);
  names.innerHTML = `${data.names}`; //Se cambiaron las comillas simples por comillas invertidas
  blog.innerHTML = `${data.blog}`;//Se cambiaron las comillas simples por comillas invertidas
  loc.innerHTML = `${data.location}`;//Se cambiaron las comillas simples por comillas invertidas
 } catch (err){
  console.log('OH NO!');
  console.log(err);
  names.innerHTML = `Algo salió mal: ${err}`;

 }
}
displayUser('stolinski').catch(err  => console.log(err));
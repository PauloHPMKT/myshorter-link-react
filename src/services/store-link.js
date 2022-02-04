//buscar links salvos
export async function getLinksSave(key) {
  const myLinks = await localStorage.getItem(key);

  let linksSave = JSON.parse(myLinks) || [];

  return linksSave;
}

//salvar links no storage
export async function saveLink(key, newLink) {
  let linksStorage = await getLinksSave(key);

  //e ja tiver um link salvo com id, não duplicar
  //some() procura algum item no array
  const hasLink = linksStorage.some((link) => link.id === newLink.id);

  if (hasLink) {
    console.log('esse link ja existe');
    return;
  }

  //adicionar novo link na lista
  linksStorage.push(newLink);

  await localStorage.setItem(key, JSON.stringify(linksStorage));

  console.log('link salvo com sucesso');
}

//deletar link salvo
export function deleteLink(links, id) {
  // retorna todos itens diferente do clicado
  // filtro para comparar todos os itens
  let myLinks = links.filter((item) => item.id !== id);

  localStorage.setItem('@encurtarLink', JSON.stringify(myLinks));

  console.log('link deletado com sucesso!');

  return myLinks;
}

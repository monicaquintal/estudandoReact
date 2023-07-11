import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: 'estudandoReact',
  description: 'Estudando React',
  link: 'https://github.com/monicaquintal/estudandoReact' 
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository = {repository} />
        <RepositoryItem repository = {repository} />
        <RepositoryItem repository = {repository} />
        <RepositoryItem repository = {repository} />
      </ul>
    </section>
  );
}
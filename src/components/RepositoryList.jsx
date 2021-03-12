import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: 'unform',
  description: 'Forms em React',
  link: 'https://github.com/unform/unform'
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <RepositoryItem repository={ repository } />
      <RepositoryItem repository={ repository } />
      <RepositoryItem repository={ repository } />
      <RepositoryItem repository={ repository } />
    </section>
  );
}
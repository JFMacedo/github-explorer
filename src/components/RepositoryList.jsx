const repositoryName = 'unform2';

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <li>
          <strong>unform</strong>
          <p>forms in react</p>
          <a href="">Acessar repositório</a>
        </li>

        <li>
          <strong>{ repositoryName }</strong>
          <p>forms in react</p>
          <a href="">Acessar repositório</a>
        </li>

        <li>
          <strong>unform</strong>
          <p>forms in react</p>
          <a href="">Acessar repositório</a>
        </li>
      </ul>
    </section>
  );
}
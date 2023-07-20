<div align="center">
<a href="https://github.com/monicaquintal" target="_blank"><img align="right" height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></a>
<h1>Estudando ReactJS</h1>
<h2>Aula 20: Propriedades do Post.</h2>
</div>

> [Figma](https://www.figma.com/community/file/1113573231685349036) do Projeto "Ignite Feed".

- adicionadas as propriedades ao arquivo [Post.jsx](../../projetos/01-fundamentos-reactjs/src/components/Post.jsx):

~~~jsx
export function Post({ author, publishedAt }) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar 
            src={author.avatarUrl} 
          />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
      <...>
~~~

- para a data:
  - o JS utiliza o [Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) para conversão de datas, números, pluralização de listas e etc, que mudam de acordo com o idioma, por exemplo.
  - há, ainda, a possibilidade de importação de bibliotecas para trabalhar com datas, como a utilizada na aula: `npm i date-fns` ([date-fns format](https://date-fns.org/v2.29.3/docs/format)).

~~~jsx
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

<...>

export function Post({ author, publishedAt, content }) {
  const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

<...>

    <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>
      {publishedDateRelativeToNow}
    </time>
  </header>

  <div className={styles.content}>
    {content.map(line => {
        if (line.type === 'paragraph') {
          return <p>{line.content}</p>;
        } else if (line.type === 'link') {
          return <p><a href="#">{line.content}</a></p>
        }
      })}
  </div>

<...>
~~~

---

[Voltar ao início!](https://github.com/monicaquintal/estudandoReact/)
<div align="center">
<a href="https://github.com/monicaquintal" target="_blank"><img align="right" height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></a>
<h1>Estudando ReactJS</h1>
<h2>Aula 31: Extensão de interfaces. <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="24px"/></h2>
</div>

- utilizando a &lt;img&gt; como exemplo:
  - podemos passar diversos atributos além daqueles da interface (apertar ctrl + espaço dentro da tag para verificar as possibilidades).
  - para evitar passar TODAS as propriedades, quando o retorno de um componente é uma tag HTML, como no caso do [Avatar.tsx](../../projetos/01-fundamentos-reactjs-ts/src/components/Avatar.tsx), podemos usar a chamada `extensão` do TS.

### Extensão de interfaces:

- no caso da tag img, por exemplo, se inserimos no arquivo tsx:

~~~ts
import { ImgHTMLAttributes } from 'react';
~~~

- ao pressionarmos ctrl e clicarmos com o mouse em ImgHTMLAttributes, veremos:

~~~ts
    interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
        alt?: string | undefined;
        crossOrigin?: "anonymous" | "use-credentials" | "" | undefined;
        decoding?: "async" | "auto" | "sync" | undefined;
        height?: number | string | undefined;
        loading?: "eager" | "lazy" | undefined;
        referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
        sizes?: string | undefined;
        src?: string | undefined;
        srcSet?: string | undefined;
        useMap?: string | undefined;
        width?: number | string | undefined;
    }
~~~    

- portanto, teremos:

~~~ts
import { ImgHTMLAttributes } from 'react';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar( { hasBorder = true, ...props }: AvatarProps) {
  return (
    <img 
      className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
      {...props} 
    />
  );
}
~~~



---

[Voltar ao início!](https://github.com/monicaquintal/estudandoReact/)
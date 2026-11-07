# Portfólio — Guilherme Cintra

Site estático em HTML, CSS e JavaScript, pronto para publicar em GitHub Pages ou Cloudflare Pages.

## Rodar localmente

1. Abra esta pasta no VS Code.
2. Instale a extensão **Live Server** (opcional).
3. Clique com o botão direito em `index.html` e selecione **Open with Live Server**.
4. Também é possível abrir `index.html` diretamente no navegador. Para testar o botão de currículo, prefira Live Server.

## Personalizar

- **Foto:** substitua `assets/foto-guilherme.jpg` por outra imagem com o mesmo nome.
- **Textos:** altere `index.html`.
- **Cores e layout:** altere `style.css`, especialmente as variáveis em `:root`.
- **Links:** configure `email`, `linkedin` e `github` no início de `script.js`.
- **Currículo:** salve seu arquivo PDF como `curriculo/curriculo.pdf`.
- **Detalhes dos projetos:** altere o objeto `projects` em `script.js`.

## Publicar gratuitamente — GitHub Pages

1. Crie um repositório público no GitHub.
2. Envie o conteúdo desta pasta para a raiz do repositório.
3. Abra **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**, branch **main** e pasta **/(root)**.
5. Aguarde o endereço público fornecido pelo GitHub.

## Alternativa — Cloudflare Pages

1. Acesse o painel Cloudflare → **Workers & Pages**.
2. Crie um projeto Pages, usando upload direto ou importação do GitHub.
3. Para o repositório, use a raiz do projeto como diretório de saída (`.`); não é necessário framework.
4. Publique e acesse o subdomínio `pages.dev` fornecido pela plataforma.

## Cuidados antes de publicar

Não inclua documentos, imagens, credenciais, código ou dados internos do Exército sem autorização. As imagens dos projetos neste modelo são ilustrações criadas com HTML e CSS. Confira e ajuste as descrições para refletirem exatamente as funcionalidades implementadas.

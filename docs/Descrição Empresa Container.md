# Descrição Empresa Container

## 1. A empresa

**Nome:** Container Software

**Ramo de atuação:** tecnologia da informação, consultoria e desenvolvimento de software para empresas.

**Serviços oferecidos:**

- **Modernização de sistemas:** atualização de sistemas antigos por partes, sem parar a operação do cliente.
- **Sistemas sob medida:** sistemas web que substituem planilhas e controles manuais.
- **Integração de sistemas:** ligação entre ERP, loja virtual, financeiro e outros sistemas para os dados circularem sozinhos.

**Público-alvo:** pequenas e médias empresas (indústria, logística, varejo e serviços) que dependem de um sistema antigo ou de planilhas para funcionar e não podem ficar paradas durante uma troca de sistema. Quem decide a contratação costuma ser o dono da empresa ou o gestor de operações, nem sempre da área de TI.

**Descrição:** a Container Software foi fundada em 2018 por dois desenvolvedores que passaram anos mantendo o sistema de uma transportadora. Hoje tem doze pessoas e atende clientes de todo o Brasil 100% online. O nome junta duas ideias: o contêiner de carga, que lembra a origem da empresa na logística, e o contêiner de software, que guarda cada parte de um sistema separada e organizada, do jeito que a empresa gosta de trabalhar.

## 2. Logomarca

A logo mostra três camadas de contêineres empilhados, como num porto: um contêiner largo embaixo, em mostarda, e contêineres verdes por cima, desencontrados. A ideia é mostrar sistemas montados em partes que se encaixam, e crescimento por etapas, que é como a empresa trabalha.

Foi desenhada em SVG com formas simples, para ficar nítida em qualquer tamanho e servir também como ícone da aba do navegador. Ao lado do desenho fica o nome "Container" na fonte dos títulos.

Arquivo: `assets/img/logo.svg`

## 3. Identidade visual

### Paleta de cores

| Função | Cor | Código | Onde é usada |
|---|---|---|---|
| Principal | Verde-petróleo | `#1F4D4A` | Títulos, carrossel, rodapé, botões de contorno, ícones |
| Secundária | Cinza esverdeado claro | `#EEF3F1` | Menu, fundo da seção Sobre, cabeçalho dos modais, ilustrações |
| Destaque | Mostarda | `#E3A72F` | Botões principais, detalhes das ilustrações, item ativo do menu |
| Texto | Quase preto esverdeado | `#1B2726` | Textos corridos e texto dos botões mostarda |

O verde-petróleo passa seriedade e estabilidade sem ser o azul que quase toda empresa de tecnologia usa. A mostarda chama atenção para as ações principais e lembra a cor dos contêineres de carga, combinando com o nome. O texto dos botões mostarda é escuro, e não branco, para ter contraste suficiente.

### Tipografia

- **Archivo** (títulos e marca): fonte sem serifa, firme e um pouco larga, que lembra as letras pintadas na lateral dos contêineres.
- **Source Sans 3** (textos, botões e formulários): fonte fácil de ler em telas pequenas.

As duas são do Google Fonts e ficam salvas dentro do projeto, na pasta `assets/fontes`.

### Padrões visuais

- **Botões:** o principal é mostarda com texto escuro (Conheça os serviços, Fale com a gente, Enviar). O secundário tem contorno verde e fica preenchido ao passar o mouse (Ver detalhes, Fechar). Cantos levemente arredondados (4px) e texto em negrito.
- **Títulos:** sempre na fonte Archivo, cor verde-petróleo. O título de cada seção (h2) é bem maior que o texto (2,5rem no computador), e os subtítulos (h3) são menores.
- **Cards:** borda fina cinza, sem sombra, com ilustração em cima, nome e descrição no meio e prazo e botão embaixo.
- **Ilustrações:** feitas para o site, no mesmo estilo (formas simples, cantos arredondados, fundo de pontinhos) e só com as cores da paleta.
- **Ícones:** Bootstrap Icons em verde, só para endereço, telefone, e-mail e missão, visão e valores.
- **Menu:** o item da seção visível fica sublinhado em mostarda, e o botão mostarda "Fale com a gente" leva direto ao contato.
- **Contato:** informações e formulário em dois painéis cinza-claro; cada informação tem ícone, rótulo em negrito e o valor embaixo.
- **Abas (Sobre nós):** botões com contorno verde; a aba escolhida fica preenchida de verde e o conteúdo aparece num quadro branco logo abaixo.

## 4. Estrutura do site

Site de uma página (single page) com menu fixo no topo levando para cada seção:

1. **Início:** carrossel com boas-vindas e dois serviços, e cards com os três serviços.
2. **Sobre nós:** história e, em abas, missão, visão e valores.
3. **Contato:** endereço, telefone, e-mail, horário de atendimento e formulário.
4. **Rodapé:** dados da empresa e links do menu.

## 5. Funcionalidades em JavaScript

- **Detalhes do serviço:** ao clicar em "Ver detalhes", o JavaScript pega os dados do serviço em um objeto, preenche o modal e monta a lista do que o cliente recebe.
- **Formulário de contato:** ao enviar, verifica nome, e-mail, serviço e mensagem. Se algum estiver errado, o campo fica vermelho com a mensagem de erro. Se estiver tudo certo, aparece um modal agradecendo pelo nome e o formulário é limpo.

## 6. Imagens

As ilustrações do carrossel, dos serviços e da seção Sobre foram feitas especialmente para o site, no mesmo estilo e só com as cores da identidade visual, e exportadas em PNG. A logo e o ícone da aba ficaram em SVG para continuarem nítidos em qualquer tamanho.

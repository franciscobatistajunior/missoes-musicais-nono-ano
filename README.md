# Missões Musicais — Nono Ano

Jogo educativo autoral de Artes, preparado para Francisco Batista, professor de Artes Visuais. A primeira jornada aprofunda **intervalos musicais**, com seis ambientes, piano de duas oitavas, 24 desafios, prova autoral e composição.

## Abrir

Abra **index.html** com dois cliques, no Edge, Chrome, Firefox ou outro navegador atualizado. Não é necessário instalar nada, compilar, conectar à internet ou iniciar servidor. Mantenha a pasta `js` e `styles.css` junto ao arquivo HTML. O primeiro clique libera o áudio conforme as regras do navegador.

Use “Entrar no estúdio”, avance pela apresentação e escolha a missão disponível no mapa. O mapa mostra a missão atual, o próximo ambiente e as conquistas. Em dispositivos móveis, o teclado do piano desliza horizontalmente sem alargar a página.

## Navegação por etapas

Cada missão mostra **uma atividade por tela**, organizada em seis etapas: apresentação; demonstração e exemplo; experimento; quatro desafios, um por vez; aplicação criativa; conquista. O topo informa missão, etapa e tela atual. São nove telas por missão, pois a etapa de desafios ocupa quatro telas.

Use **Voltar** e **Continuar** para percorrer a jornada, e **Mapa das missões** para sair ou revisitar ambientes. Uma resposta, fala ou animação nunca avança a etapa automaticamente. Nos desafios, Continuar é liberado após resolução ou investigação guiada; no modo professor é possível percorrer as telas antes da conclusão. O feedback também oferece um botão claro para seguir.

As notas selecionadas, a grafia, a posição origem/destino, as alternativas ainda não enviadas, as pistas e os rascunhos criativos são preservados ao voltar. Reabrir o aplicativo retoma a tela em que ele estava, inclusive prova e composição. O foco vai ao título da nova tela, e a mudança é anunciada para tecnologias assistivas. Elementos fechados não ficam na navegação por teclado.

Nos desafios de intervalos, enunciado, instrumento e resposta compartilham uma área de trabalho. No computador, eles podem ficar lado a lado; em telas menores, a ordem é **enunciado → piano → resposta**, também na ordem do DOM e do foco. As teclas deslizam horizontalmente, com largura proporcional ao texto ampliado. A página continua rolando naturalmente, sem alturas rígidas para as etapas.

Questões conceituais oferecem **Abrir piano de apoio**, que conserva a seleção ao fechar. Na prova, esse botão existe apenas nas questões de semitons, terças, família justa, enarmonia e transposição planejadas para usar o instrumento. O apoio da prova não classifica intervalos nem carrega a solução.

A barra compacta do estúdio mantém narração, testar som, repetir fala e parar áudio. **Som e preferências** abre o painel com seleção/teste de voz, volume, texto, movimento e modo professor. A barra e as orientações estão no fluxo da página, sem cobrir o conteúdo.

A tela de conquista lista o que falta para concluir. Depois de registrar a conquista, apresenta o conceito aprendido, **Revisitar** e **Próxima missão**; o próximo ambiente só abre por escolha do nono ano. Na sexta missão, a aplicação oferece prova e mesa de composição em telas próprias.

A mesma chave de armazenamento, `missoes-musicais-v1`, foi mantida. O campo `journey` acrescenta etapa, rascunhos e retomada sem apagar conquistas, respostas, provas, criações ou preferências anteriores. Dados antigos sem etapa começam pela abertura, com **Retomar minha jornada**; a missão sugere o primeiro desafio pendente ou a aplicação. Registros antigos sem informação de pistas são identificados como “não registrado na versão anterior”, sem inventar um histórico.

## Conduzir com o nono ano

1. Apresente a pergunta inicial e as hipóteses de Lina e Caio. Valorize exemplos musicais trazidos pelo nono ano.
2. Experimente o piano e leia a explicação e o exemplo resolvido. Ouça o exemplo e a comparação antes de propor identificação auditiva. Os rótulos oferecem apoio visual.
3. Solicite uma animação: nomes contados, passos cromáticos, comparação de cinco/seis/sete semitons ou grafias enarmônicas. Pausar, repetir e avançar um passo estão disponíveis. Movimento reduzido mantém o avanço manual.
4. Percorra os quatro desafios com Continuar, um por tela. Há duas atividades de piano e duas questões A–E em cada missão; a ordem alterna interação e argumentação. As questões são **Questão autoral — estilo vestibular**, sem atribuição a bancas.
5. Após uma resposta, leia o feedback e as explicações de todas as alternativas. As três pistas orientam observação, organização e demonstração. Um erro não impede o avanço: após tentativa e investigação, pode-se registrar conclusão guiada.
6. Registre a aplicação com as palavras do nono ano e conclua a missão. Os quatro desafios resolvidos ou investigados e a aplicação liberam a próxima missão. Missões anteriores continuam acessíveis.
7. Na sexta missão, finalize a prova e salve uma composição de quatro a oito notas, com reflexão expressiva. A conclusão não exige nota mínima na prova.

**Modo professor**, em Preferências, permite acessar qualquer missão. Não possui senha: é uma ferramenta de condução, não de controle de acesso. As conquistas liberam pares musicais na mesa de composição; eles podem ser acrescentados e transformados. Não há ranking, vidas ou cronômetro.

## Piano e cálculo

Clique/toque numa tecla ou use o atalho impresso nela. Tab e Enter também permitem tocar; atalhos de letras ficam desativados enquanto o foco está em campos de texto, seletores, links ou botões. A primeira seleção ocupa **① Origem**, a segunda **② Destino**. Clique num desses marcadores para editar sua nota. Um uníssono pode usar a mesma tecla duas vezes.

Ouça cada nota, o par em sequência ou simultaneamente; repita ou limpe a seleção. Escolha sustenidos ou bemóis no seletor. A seleção mantém a grafia feita: mudar o seletor altera as futuras escolhas, sem reescrever silenciosamente uma nota selecionada. Para comparar fá♯ com sol♭, escolha novamente o destino depois de mudar a grafia.

A análise separa:

- **Número**: contagem inclusiva dos nomes diatônicos, com origem e destino.
- **Distância**: diferença entre as alturas em semitons.
- **Qualidade**: comparação dessa distância com a referência do número.

Cada nota tem `{letter, alteration, octave}`. `letter` usa C, D, E, F, G, A, B; `alteration` é −1, 0 ou 1; `octave` é um inteiro. A altura MIDI é calculada separadamente. No temperamento igual, fá♯4 e sol♭4 têm MIDI 66, mas dó–fá♯ é quarta aumentada e dó–sol♭ é quinta diminuta. O áudio usa `440 * 2 ** ((midi - 69) / 12)`, envelopes de ataque/liberação e volume moderado.

A jornada trabalha intervalos simples ascendentes, do uníssono à oitava. Seleções descendentes recebem orientação para reorganização; extensões compostas ou qualidades duplas ficam fora do escopo e são explicadas em vez de classificadas incorretamente. A sequência criada pode conter descidas; a análise segue a mesma limitação declarada.

No modo livre, solicite **Investigar intervalo**. Nos desafios, a análise permanece desativada antes de resposta ou pista de demonstração. Durante a prova, não há classificação automática nem justificativas antes da entrega.

## Prova e criação

A prova contém oito questões progressivas. Os números permitem navegar e revisar. O rascunho é salvo e pode ser retomado pela sexta missão, inclusive após fechar o navegador. Ao finalizar as oito respostas, aparecem as justificativas, desempenho por conceito e missões a revisar. “Nova tentativa” alterna dois conjuntos e muda a ordem das alternativas; não é um banco infinito. Cada tentativa é preservada separadamente. Na sexta missão também é possível consultar a análise da última prova.

Na composição, ative **Gravar notas** para acrescentar notas do piano e desative para investigar sem gravar. É possível ouvir, remover a última nota, limpar e acrescentar pares liberados pelas conquistas. Clique nas notas da sequência para escolher origem e destino da análise. A reflexão pergunta: “Nono ano, que relações entre os sons vocês escolheram e o que desejam expressar?”

Os rascunhos da criação são salvos enquanto se edita. **Salvar criação** valida a extensão e a reflexão. **Exportar JSON** baixa um arquivo com formato e versão explícitos; **Importar JSON** verifica sintaxe, tamanho máximo de 64 KB, quatro a oito notas válidas dentro de dó4–dó6 e reflexão de até 3000 caracteres. Um arquivo inválido não substitui a criação atual. A importação substitui a criação, mas não altera as missões nem as respostas.

## Som, narração e acessibilidade

A barra do estúdio mantém testar som, narração, repetir fala e parar áudio; volume e seleção/teste de voz ficam no painel Som e preferências. A síntese de voz usa as vozes do navegador/sistema e considera `voiceschanged`, priorizando português brasileiro e vozes locais. Algumas vozes oferecidas pelo próprio sistema podem precisar de internet; para uso offline, selecione uma voz instalada localmente. A experiência educativa permanece completa nas legendas. Falas em andamento não são sobrepostas por outra solicitação; sair de cena cancela sons e narração.

Use Preferências para ampliar texto e reduzir movimento. Há foco visível, controles nativos, marcações textuais das seleções e feedback que não depende só de cores ou áudio. Modo apresentação amplia o espaço e simplifica a área de apoio; tela cheia depende da disponibilidade do navegador. Não há flashes. As explicações avançam por ação do nono ano.

Progresso e preferências ficam no `localStorage` deste navegador/dispositivo, chave `missoes-musicais-v1`. A primeira resposta e as revisões são objetos separados; cada resposta registra o nível de pistas consultadas, e consultas de pistas possuem eventos separados. Apoio guiado tem registro próprio. Falhas de armazenamento não interrompem a sessão, mas podem impedir persistência. Exporte a criação antes de fechar nesse caso. **Reiniciar progresso** exige confirmação e limpa também provas, preferências e criação. Copiar a pasta para outro computador não transfere o progresso do navegador.

## Organização e edição

| Arquivo | Responsabilidade |
| --- | --- |
| `index.html` | Estrutura e carregamento por scripts clássicos, sem fetch local |
| `styles.css` | Visual de estúdio, responsividade, projeção e acessibilidade |
| `js/missions.js` | Seis missões, 24 desafios, apoio do piano, dois conjuntos de prova e conceitos |
| `js/intervals.js` | Notas, grafia, altura e classificação dos intervalos |
| `js/piano.js` | Teclas, atalhos, estado restaurável, escuta e análise solicitada |
| `js/audio.js` | Web Audio, envelopes e síntese de voz |
| `js/progress.js` | Persistência compatível, etapas, rascunhos, pistas, respostas e validação de JSON |
| `js/app.js` | Telas da jornada, SVGs, animações, foco, progresso, prova e autoria |
| `tests/test-intervals.cjs` | Verificação matemática, dados, JSON e registros |
| `tests/test-browser.cjs` | Integração real no navegador por CDP, sem dependências npm |

Em `missions.js`, `K` cria desafio no piano; `Q` cria questão com cinco alternativas. O índice `correct` começa em zero (A = 0, E = 4). `reasons` deve ter uma explicação para **cada** alternativa, na mesma ordem. `pair` mantém a grafia do enunciado; exemplos: `C4`, `F#4`, `Gb4`, `B4`, `C5`. Edite situações e distratores mantendo a distinção entre número, semitons e qualidade. Não invente atribuições a universidades.

Para ampliar a quantidade de desafios ou missões, ajuste também os controles de navegação e critérios de conclusão em `app.js`, o mapa e os testes: esta versão possui seis missões com quatro desafios essenciais cada. Para acrescentar outro tema, crie uma jornada própria e preserve o aprofundamento de intervalos; não reutilize a distância cromática como nome completo.

## Validação

Sem instalações adicionais, com Node disponível:

```text
node tests/test-intervals.cjs
node tests/test-browser.cjs
```

O segundo teste exige Node 22+ e Edge no caminho padrão do Windows. Para outro Chromium, defina `BROWSER_PATH`. Usa um perfil de teste independente, abre o **arquivo local** e grava evidências em `.validation`. Os perfis de teste não são o perfil pessoal do navegador. O jogo não depende de Node nem desses testes.

Os casos pedidos e outros pontos de origem foram verificados. A integração atual inclui 86 verificações: jornada por telas, ida e volta, retomada, progresso antigo, piano, pistas, conclusões guiadas, prova/revisão, criação, exportação/importação reais, persistência, teclado, celular e console. A inspeção complementar verifica texto ampliado no computador e reorganização sem perda ao redimensionar. Veja `VALIDACAO.md` para o registro da entrega. A execução de áudio não confirma como ele soa: confira humanamente volume, timbre, clareza das vozes, toque em um aparelho real e legibilidade na projeção da sala.

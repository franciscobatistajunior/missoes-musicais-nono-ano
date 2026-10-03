# Validação da atualização — navegação por etapas

Atualização aplicada ao projeto existente em 02/10/2026. O conteúdo musical, o cálculo dos intervalos e a síntese de áudio foram preservados. A mesma chave `missoes-musicais-v1` é utilizada; a estrutura `journey` adiciona retomada, etapas, rascunhos e histórico de pistas.

## Resultado desta versão

**86 verificações de integração aprovadas no Microsoft Edge**, abrindo diretamente o arquivo local e utilizando perfil de teste independente. **Três verificações complementares de layout** também passaram: última tecla acessível por rolagem do instrumento, computador com texto ampliado sem transbordamento e reorganização ao redimensionar sem perder a seleção. Console sem exceções JavaScript ou mensagens de erro nos percursos testados.

Foram conferidos:

- Uma atividade por tela, cabeçalho de missão/etapa/progresso, avanço manual e foco no título com anúncio acessível.
- Navegação de ida e volta preservando notas, grafia, alternativas ainda não enviadas, pistas, respostas iniciais, revisões e aplicações.
- Retomada automática após recarregar durante experimento, desafio, prova e criação.
- Carregamento de dados reais no formato antigo, sem `journey`, mantendo conquistas, respostas, aplicações, provas, criações e preferências.
- As seis missões e todos os 24 desafios, conclusão guiada, aplicação, conquista e liberação da próxima missão por ação manual.
- Questões conceituais com piano opcional, fechamento sem foco oculto e reabertura mantendo a seleção.
- Piano da prova somente nas questões planejadas, sem classificação automática nem demonstração da solução.
- Prova de oito questões, navegação, revisão, entrega incompleta recusada, correção somente após entrega, desempenho por conceito e nova tentativa com variação.
- Criação, reprodução, análise de pares, salvamento, download JSON e importação real. Uma reflexão importada diferente não é sobrescrita pelo rascunho anterior; JSON inválido não altera a criação.
- Reinício com confirmação, sem recuperar rascunhos da tela anterior, e modo professor.
- Animações de contagem inclusiva, semitons a partir de zero e diferença entre quarta aumentada e quinta diminuta.
- Atalho do piano, controles de som/narração e tratamento de falha de armazenamento.
- Computador de 1440 × 1000, celular de 390 × 844 e texto ampliado a 130%. Em telas menores, enunciado, piano e resposta seguem essa ordem no DOM. Todas as teclas permanecem acessíveis por rolagem interna.
- Barra de controles e orientações em fluxo normal, sem cobrir conteúdo ou bloquear a rolagem da página.

Os testes matemáticos e de armazenamento também passaram: **26 pares de intervalos**, **50 conversões de altura/grafia**, referência lá4 = 440 Hz, consistência das missões/provas, validação JSON, falha de armazenamento, migração v1 e pistas registradas separadamente em cada resposta.

Evidências: `.validation/journey-report.json`, `.validation/journey-layout-report.json`, `jornada-desafio-desktop.png`, `jornada-trabalho-celular.png`, `jornada-piano-ampliado.png`, `jornada-ultima-oitava.png` e `jornada-texto-ampliado-desktop.png`. As telas de trabalho no computador e no celular com texto ampliado foram inspecionadas visualmente.

## Conferência humana

As APIs de áudio e voz foram acionadas; isso não confirma o som percebido. Conferir volume, timbre e clareza da narração nos equipamentos da sala. Ainda convém testar toque em celular físico, projeção, tela cheia e leitor de tela de uso. Não houve avaliação formal com todos os navegadores ou certificação de acessibilidade.

---

﻿# Registro de validação — 02/10/2026

Versão funcional local, sem servidor e sem dependências externas. A pasta estava vazia antes da implementação.

## Verificações concluídas

- Sintaxe dos seis arquivos JavaScript com `node --check`.
- **26 pares de notas**, incluindo os nove casos solicitados, outras origens, uníssono, intervalo aumentado e rejeição de descidas/extensões fora do escopo.
- **50 conversões de altura/grafia**, enarmonia fá♯/sol♭ e referência lá4 = MIDI 69 = 440 Hz.
- Seis missões, 24 desafios alternados, três pistas por desafio e 16 questões nos dois conjuntos da prova.
- Primeira resposta e revisões separadas; conclusão guiada preservando o erro inicial.
- JSON validado: extensão, versão, reflexão, notas inválidas ou fora do piano.
- Falha simulada de armazenamento sem interromper a sessão.

## Integração real no Microsoft Edge

**72 verificações aprovadas**, abrindo diretamente `file:///…/index.html` em perfil independente. Console da página sem exceções JavaScript ou mensagens de erro durante o percurso.

Foram exercitados abertura, introdução, personagens SVG, mapa e progressão; todas as 24 atividades, aplicações e seis conquistas; recursos musicais liberados; piano de 25 teclas, seleção ordenada e grafias; modo livre e orientação para descidas; atalho do computador; controles de instrumentos, som, voz e apresentação; pistas e revisão; animações de nomes começando em 1 e semitons em 0, pausa/repetição, sincronização do par, avanço manual, cinco/seis/sete semitons e grafias enarmônicas.

A prova foi percorrida com navegação e revisão, entrega incompleta recusada, correção somente após finalizar, resultado por conceito e variação preservando a tentativa anterior. A composição foi gravada, reproduzida, analisada em pares ascendentes/descendentes e salva com reflexão. Houve download real do JSON, importação pelo campo de arquivo e recusa de arquivo inválido sem alterar a criação.

Também foram verificados persistência após recarregar o arquivo local, reinício com confirmação, modo professor, texto ampliado, movimento reduzido e viewport móvel de 390 × 844 sem transbordamento horizontal da página.

Evidências em `.validation`: `browser-report.json`, `inicio-desktop.png`, `piano-demonstracao-desktop.png`, `piano-celular.png`, `demonstracao-celular.png` e JSON exportado. As telas de abertura, piano/demonstração e piano móvel foram inspecionadas visualmente. Os perfis temporários de teste também permanecem nessa pasta: sua limpeza foi rejeitada pela política automática de aprovação do ambiente. Eles não são usados pelo jogo.

## Conferência humana restante

A execução das APIs de áudio e narração **não equivale a confirmação auditiva**. Conferir som percebido, afinação ouvida, volume confortável, timbre, inteligibilidade e pronúncia da voz instalada. Testar toque num celular físico, leitura no projetor, tela cheia no navegador de uso e condução pedagógica com o nono ano. Voz e tela cheia dependem do navegador/sistema; legendas e modo apresentação oferecem continuidade.

Não foram testados todos os navegadores nem leitores de tela. Não há alegação de certificação formal de acessibilidade.

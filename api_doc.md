| **Campo**                | **Tipo**                            | **Descrição**                                                                                                    |
| ------------------------ | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `codigoDoImovel`         | `enum (codigoDoImovel)`             | Código identificador do imóvel (`CSV`, `CSL`, `APV`, etc.).                                                      |
| `tipologiaPrimarias`     | `enum (tipologiaPrimaria)`          | Tipologia principal do imóvel (`CASA`, `APARTAMENTO`, `TERRENO`, etc.).                                          |
| `tipologiasSecundarias`  | `Set<enum (tipologiasSecundarias)>` | Lista de tipologias secundárias do imóvel (`SOBRADO`, `DUPLEX`, `KITNET`, etc.).                                 |
| `usoDoImovel`            | `enum (UsoDoImovel)`                | Uso do imóvel (`RESIDENCIAL`, `COMERCIAL`, `HIBRIDO`, etc.).                                                     |
| `tipoDeNegocio`          | `enum (Negocio)`                    | Tipo de negócio (`VENDA`, `LOCACAO`, `HIBRIDO`).                                                                 |
| `tiposVendas`            | `Set<enum (tiposVenda)>`            | Modalidades de venda aceitas (`AVISTA`, `FINANCIAMENTO_BANCARIO`, etc.).                                         |
| `negociacoesDetalhes`    | `String`                            | Detalhes adicionais sobre condições de negociação.                                                               |
| `situacaoImovel`         | `enum (Situacao)`                   | Situação atual do imóvel (`NOVO`, `USADO`, `NAPLANTA`, `INATIVO`).                                               |
| `enderecoDados`          | `EnderecoReqResToImovelDTO`         | Objeto com dados do endereço (bairro, CEP, logradouro, número, complemento, etc.).                               |
| `temCondominio`          | `boolean`                           | Indica se o imóvel pertence a um condomínio.                                                                     |
| `condominio`             | `CondImovelReqDTO`                  | Informações básicas do condomínio (envia apenas o nome).                                                         |
| `valorVenda`             | `double`                            | Valor de venda do imóvel.                                                                                        |
| `valorLocacao`           | `double`                            | Valor de locação do imóvel.                                                                                      |
| `valorCondominio`        | `double`                            | Valor da taxa de condomínio.                                                                                     |
| `taxaCondominioDetalhes` | `String`                            | Informações adicionais sobre a taxa de condomínio.                                                               |
| `valorIPTU_ITR`          | `double`                            | Valor do IPTU (imóvel urbano) ou ITR (imóvel rural).                                                             |
| `medidas`                | `String`                            | Medidas do imóvel (ex.: área total e construída).                                                                |
| `eFinanciavel`           | `boolean`                           | Indica se o imóvel é financiável.                                                                                |
| `eTabelado`              | `boolean`                           | Indica se o imóvel possui preço tabelado.                                                                        |
| `statusDoImovel`         | `boolean`                           | Status de disponibilidade do imóvel.                                                                             |
| `comissao`               | `double`                            | Percentual de comissão sobre a negociação.                                                                       |
| `administradorAluguel`   | `String`                            | Nome do responsável/empresa que administra o aluguel.                                                            |
| `linksUteisImovel`       | `List<LinksReqResDTO>`              | Links relacionados ao imóvel (tour virtual, planta, localização, etc.). Pode conter login e senha se necessário. |
| `stastusDaEntrega`       | `enum (stastusDaEntrega)`           | Situação da entrega do imóvel (`PRONTO`, `EM_OBRAS`, `CONSULTAR`).                                               |
| `entregaDetalhes`        | `String`                            | Informações adicionais sobre a entrega.                                                                          |
| `estaOcupado`            | `enum (estaOcupado)`                | Situação de ocupação (`SIM`, `NAO`, `CONSULTAR`).                                                                |
| `estaMobiliado`          | `boolean`                           | Indica se o imóvel está mobiliado.                                                                               |
| `descricaoMobilia`       | `String`                            | Descrição da mobília existente no imóvel.                                                                        |
| `descricaoAdicional`     | `String`                            | Descrição extra sobre características do imóvel.                                                                 |
| `vagasCobertas`          | `int`                               | Quantidade de vagas de garagem cobertas.                                                                         |
| `vagasDescobertas`       | `int`                               | Quantidade de vagas descobertas.                                                                                 |
| `vagasSubsolo`           | `int`                               | Quantidade de vagas em subsolo.                                                                                  |
| `dormitorios`            | `int`                               | Número total de dormitórios.                                                                                     |
| `dormitoriosComSuite`    | `int`                               | Número de dormitórios com suíte.                                                                                 |
| `banheiros`              | `int`                               | Número total de banheiros.                                                                                       |
| `outrosRecintos`         | `String`                            | Outros espaços do imóvel (ex.: escritório, lavanderia).                                                          |
| `posicaoDoSolFrenteCasa` | `enum (InscidenciaSolar)`           | Incidência solar da fachada do imóvel (`LESTE`, `NORTE`, `SUL`, etc.).                                           |
| `pessoasTemChave`        | `List<LocalizadorChaveReqResDTO>`   | Pessoas que possuem a chave do imóvel (nome e telefone).                                                         |

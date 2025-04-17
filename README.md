# FMA-Spreedshet

# 1. Introdução

&emsp;&emsp; A Fernanda Marques Arquitetura (FMA) é uma empresa de arquitetura que atua em projetos de arquitetura, interiores e design de produtos. Com o objetivo de criar uma área de tecnologia, fomos contratados como estagiários para identificar processos que podem ser otimizados, automatizados ou auxiliados por Inteligência Artificial dentro da empresa. Com essa premissa, realizamos várias reuniões com as diferentes áreas da empresa, como incorporação, residencial, decoração, entre outras, para entender problemas frequentes que podem ser solucionados com tecnologias.

&emsp;&emsp; A partir disso, identificamos que um desafio comum entre as áreas é a criação de planilhas de decoração. Essas planilhas são utilizadas para organizar e apresentar informações sobre os produtos que serão utilizados em um projeto de decoração, como móveis, objetos decorativos, entre outros. Elas são essenciais para a gestão do projeto e para a comunicação com os clientes. No entanto, a criação dessas planilhas pode ser um processo demorado e trabalhoso, especialmente quando envolve a coleta de produtos já utilizados em projetos anteriores, devido ao grande volume de planilhas separadas.

&emsp;&emsp; Visando solucionar essa problemática, idealizamos um projeto de desenvolvimento de um sistema que possibilite o armazenamento e a criação dessas planilhas, autocompletando as informações com base nos dados armazenados e permitindo a exportação das planilhas.

&emsp;&emsp; Este documento tem como objetivo apresentar o projeto, mostrando o mockup da interface, requisitos funcionais e não funcionais, arquitetura do sistema, banco de dados, motivações para as tecnologias utilizadas, como rodar o projeto, cronograma de desenvolvimento e custo. 

# 5. Requisitos Funcionais e Não Funcionais

### Requisitos Funcionais

- **RF01**: O sistema deve permitir que o usuário crie, edite, exclua e exporte planilhas em formato Excel (.xlsx).

- **RF02**: O sistema deve permitir o cadastro, edição e exclusão de produtos, contendo informações como nome, categoria, preço e outras características relevantes.

- **RF03**: O sistema deve permitir a busca por produtos já cadastrados durante a inserção de novos produtos em uma planilha.

- **RF04**: O sistema deve permitir o cadastro, edição e exclusão de clientes.

- **RF05**: O sistema deve permitir a assosiação de uma planilha a um cliente.

- **RF06**: O sistema deve permitir que colaboradores realizem login com autenticação segura.

## Requisitos Não Funcionais

### Segurança 

- **RNF01**: O sistema deve utilizar autenticação com senha criptografada para login de colaboradores.

- **RNF02**: O sistema deve expirar a sessão do usuário após 15 minutos de inatividade.

- **RNF03**: O acesso a funcionalidades deve ser controlado por níveis de permissão (ex: administrador, colaborador).

### Desempenho 

- **RNF04**: O tempo de resposta para operações de busca não deve ultrapassar 2 segundos para até 1.000 produtos cadastrados.

- **RNF05**: A exportação de planilhas deve ser concluída em no máximo 5 segundos para planilhas com até 10.000 linhas.

### Usabilidade

 - **RNF06**: O sistema deve fornecer mensagens de erro claras e orientações para o usuário em caso de falha.


### Compatibilidade e Integração

- **RNF07**: O sistema deve permitir a importação e exportação de dados em formato Excel compatível com Microsoft Excel 2010 ou superior.

- **RNF08**: O sistema deve ser compatível com os navegadores mais utilizados (Chrome, Firefox, Edge e Safari), nas versões mais recentes.

### Disponibilidade e Acesso

- **RNF09**: O sistema deve estar disponível 99,5% do tempo em horários comerciais (8h às 21h).

- **RNF10**: O sistema deve ser acessível via navegador web sem necessidade de instalação local
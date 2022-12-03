![Imersão Full Stack && Full Cycle](https://events-fullcycle.s3.amazonaws.com/events-fullcycle/static/site/img/grupo_4417.png)

Participe gratuitamente: https://imersao.fullcycle.com.br/

## Sobre o repositório
Esse repositório contém o código-fonte ministrado na aula Apache Kafka: Alta performance para comunicação entre sistemas [https://www.youtube.com/watch?v=vGN0yObevL8](https://www.youtube.com/watch?v=vGN0yObevL8)

## Rodar a aplicação

Para rodar o Kafka execute o comando abaixo

```bash
docker compose up
```

Aguarde pelo menos uns 30 segundos para que o Kafka esteja pronto.

Acesse o Control Center para monitorar/gerenciar o Kafka, acesse [http://localhost:9021](http://localhost:9021).

Para testar a publicação e consumo de mensagens, use a aplicação Nest.js presente neste projeto (é necessário ter o Node.js instalado).

```bash
npm install 
npm run start:dev
```

Existe um arquivo na raiz do projeto Nest.js, o `api.http` que você pode usar para testar a aplicação com o plugin do VSCode [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client). Quando enviar dados na requisição, o Nest.js consumirá a mensagem e mostrará no console.
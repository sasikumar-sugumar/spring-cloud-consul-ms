# Spring Cloud Example

An example project that demonstrates an end-to-end cloud-native platform using Spring Cloud for building a practical microservices architecture.

Demonstrated concepts:

* Microservice architecture
* Service discovery
* API gateway
* Containeization using Docker

## Docker

Each service is built and deployed using Docker. End-to-end integration testing can be done on a developer's machine using Docker compose.

## Microservice architecture

This example project demonstrates how to build a new application using microservices, as opposed to a monolith-first strategy, Developers have the advantage of being able to run and develop with each microservice running on their local machine. Adding a new microservice is easy, as the discovery microservice will automatically discover new services running on the cluster.

## Service discovery

This project uses Consul from Hashicorp as a DNS provider for the cluster.

## API gateway

Each microservice will coordinate with Zuul to retrieve API routes for the entire cluster. Using this strategy each microservice in a cluster can be load balanced and exposed through one API gateway. Each service will automatically discover and route API requests to the service that owns the route. This proxying technique is equally helpful when developing user interfaces, as the full API of the platform is available through its own host as a proxy.



# License

This project is licensed under Apache License 2.0.

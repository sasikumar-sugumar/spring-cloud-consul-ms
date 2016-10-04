package com.graph.framework;

import org.neo4j.ogm.session.Session;
import org.neo4j.ogm.session.SessionFactory;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.data.neo4j.config.Neo4jConfiguration;
import org.springframework.data.neo4j.repository.config.EnableNeo4jRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableNeo4jRepositories(basePackages = "com.graph.domain")
@EnableTransactionManagement

public class PersistentContext extends Neo4jConfiguration {

	@Override
	public SessionFactory getSessionFactory() {
		return new SessionFactory("com.graph.domain");
	}

	// needed for session in view applications
	@Override
	@Scope(value = "session", proxyMode = ScopedProxyMode.TARGET_CLASS)
	public Session getSession() throws Exception {
		return super.getSession();
	}

}

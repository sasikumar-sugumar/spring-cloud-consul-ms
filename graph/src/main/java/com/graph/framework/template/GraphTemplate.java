package com.graph.framework.template;

import java.text.MessageFormat;
import java.util.Collection;
import java.util.Collections;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

import org.json.JSONObject;
import org.neo4j.ogm.model.Result;
import org.springframework.data.neo4j.template.Neo4jOperations;
import org.springframework.data.neo4j.template.Neo4jTemplate;

import com.graph.domain.Node;
import com.graph.framework.PersistentContext;

public class GraphTemplate extends PersistentContext implements GraphOperations {

	private Neo4jOperations graphOperation;

	static String CREATE_NODE = "CREATE (N:{0} {1} )";

	public GraphTemplate() throws Exception {
		super();
		graphOperation = new Neo4jTemplate(getSession());
	}

	public Neo4jOperations getNeo4jTemplate() {
		return graphOperation;
	}

	@Override
	public boolean createNode(Node node) {
		graphOperation.query(getQuery(node), new java.util.HashMap<>());
		return false;
	}

	private String getQuery(Node node) {
		return MessageFormat.format(CREATE_NODE,
				new Object[] { node.getName(), new JSONObject(node.getProperties()).toString() });
	}

	@Override
	public Set<String> listAllNodes() {   
		Result result = graphOperation.query("MATCH (n) RETURN n LIMIT 25", Collections.emptyMap());
		Set<String> keys = new HashSet<>();
		if (result != null) {
			while (result.iterator().hasNext()) {
				Map<String, Object> row = result.iterator().next();
				for (String key : row.keySet()) {
					keys.add(key);
					System.out.printf("%s = %s%n", key, row.get(key));
				}
			}
		}
		return keys;
	}

}

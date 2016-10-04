package com.graph;

import java.util.HashMap;
import java.util.Map;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.graph.domain.Node;
import com.graph.framework.template.GraphTemplate;

@SpringBootApplication
public class GraphApplication {

	public static void main(String[] args) {
		try {
			SpringApplication.run(GraphApplication.class, args);
			new GraphTemplate().createNode(new Node() {

				private String name;

				private String ç;

				@Override
				public Map<String, Object> getProperties() {
					Map<String, Object> map = new HashMap<>();
					map.put("name", "New");
					map.put("coordiantes", "0.124");
					return map;
				}

				@Override
				public String getName() {
					return "Places";
				}
			});
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
